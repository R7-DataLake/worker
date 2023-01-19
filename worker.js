
const { PostgrestClient } = require('@supabase/postgrest-js');
const { Worker } = require('bullmq');

const model = require('./model');

const redisConfiguration = {
  connection: {
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
    enableOfflineQueue: false,
    username: process.env.REDIS_USERNAME || "default",
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

async function importPerson(jobs) {
  const data = jobs.data;
  await model.doImportPerson(postgrest, data);
  return jobs.id;
}

const worker = new Worker('KHONKAEN', async job => {
  switch (job.name) {
    case 'PERSON': {
      await importPerson(job);
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

