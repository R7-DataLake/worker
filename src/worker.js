
const { Worker } = require('bullmq');
const { default: tasks } = require('./tasks');

const redisConfiguration = {
  connection: {
    host: process.env.R7PLATFORM_WORKER_REDIS_HOST || "localhost",
    port: Number(process.env.R7PLATFORM_WORKER_REDIS_PORT) || 6379,
    enableOfflineQueue: false,
    password: process.env.R7PLATFORM_WORKER_REDIS_PASSWORD || "redispw"
  }
}

const ZONE = process.env.R7PLATFORM_WORKER_ZONE || 'R7QUEUE'
const CONCURRENCY = process.env.R7PLATFORM_WORKER_CONCURRENCY ? Number(process.env.R7PLATFORM_WORKER_CONCURRENCY) : 4
const worker = new Worker(ZONE, tasks, {
  limiter: {
    max: 100,
    duration: 1000,
  },
  concurrency: CONCURRENCY,
  connection: redisConfiguration.connection,
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

