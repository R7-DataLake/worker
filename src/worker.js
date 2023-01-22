
const { PostgrestClient } = require('@supabase/postgrest-js');
const { Worker } = require('bullmq');
const processor = require('./processor');

const redisConfiguration = {
  connection: {
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
    enableOfflineQueue: false,
    password: process.env.REDIS_PASSWORD || "redispw"
  }
}

const REST_URL = process.env.REST_URL || 'http://localhost:3000';
const API_KEY = process.env.API_KEY || ''

const postgrest = new PostgrestClient(REST_URL, {
  headers: {
    Prefer: 'tx=rollback',
    Authorization: 'Bearer ' + API_KEY
  },
});

const QUEUE_NAME = process.env.QUEUE_NAME || 'R7QUEUE'

const worker = new Worker(QUEUE_NAME, async job => {
  switch (job.name) {
    case 'PERSON': {
      await processor.importPerson(postgrest, job);
      break;
    }
    case 'OPD': {
      await processor.importOpd(postgrest, job);
      break;
    }
    case 'CHRONIC': {
      await processor.importChronic(postgrest, job);
      break;
    }
    case 'OPDX': {
      await processor.importOpdx(postgrest, job);
      break;
    }
    case 'OPOP': {
      await processor.importOpop(postgrest, job);
      break;
    }
    case 'APPOINT': {
      await processor.importAppoint(postgrest, job);
      break;
    }
    case 'DRUG': {
      await processor.importDrug(postgrest, job);
      break;
    }
    case 'DRUGALLERGY': {
      await processor.importDrugallergy(postgrest, job);
      break;
    }
    case 'IPD': {
      await processor.importIpd(postgrest, job);
      break;
    }
    case 'IPDX': {
      await processor.importIpdx(postgrest, job);
      break;
    }
    case 'IPOP': {
      await processor.importIpop(postgrest, job);
      break;
    }
    case 'LAB': {
      await processor.importLab(postgrest, job);
      break;
    }
  }
}, {
  limiter: {
    max: 100,
    duration: 1000,
  },
  concurrency: 4, connection: redisConfiguration.connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 3000,
    },
  }
});

// Job success
worker.on('completed', (job, returnValue) => {
  console.info(`${job.id} has completed!`);
  console.info(`${returnValue} is returned value.`)
  // 1. add to metadata queue
  // 2. add to notify queue
});

// Job failed
worker.on('failed', (job, err) => {
  console.error(`${job.id} has failed with ${err.message}`);
  // add to error queue
});

// Worker error
worker.on('error', err => {
  console.error(err);
});

