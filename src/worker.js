
const { Worker } = require('bullmq');
const processor = require('./processor');

const redisConfiguration = {
  connection: {
    host: process.env.R7_WORKER_REDIS_HOST || "localhost",
    port: Number(process.env.R7_WORKER_REDIS_PORT) || 6379,
    enableOfflineQueue: false,
    password: process.env.R7_WORKER_REDIS_PASSWORD || "redispw"
  }
}

const ZONE = process.env.R7_WORKER_ZONE || 'R7QUEUE'

const worker = new Worker(ZONE, async job => {
  switch (job.name) {
    case 'PERSON': {
      await processor.importPerson(job);
      break;
    }
    case 'OPD': {
      await processor.importOpd(job);
      break;
    }
    case 'CHRONIC': {
      await processor.importChronic(job);
      break;
    }
    case 'OPDX': {
      await processor.importOpdx(job);
      break;
    }
    case 'OPOP': {
      await processor.importOpop(job);
      break;
    }
    case 'APPOINT': {
      await processor.importAppoint(job);
      break;
    }
    case 'DRUG': {
      await processor.importDrug(job);
      break;
    }
    case 'DRUGALLERGY': {
      await processor.importDrugallergy(job);
      break;
    }
    case 'IPD': {
      await processor.importIpd(job);
      break;
    }
    case 'IPDX': {
      await processor.importIpdx(job);
      break;
    }
    case 'IPOP': {
      await processor.importIpop(job);
      break;
    }
    case 'LAB': {
      await processor.importLab(job);
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

