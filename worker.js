
const { PostgrestClient } = require('@supabase/postgrest-js');
const path = require('path');
const { Worker } = require('bullmq');

require('dotenv').config({ path: path.join(__dirname, './config.conf') })

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
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 3000,
    },
  }
});

worker.on('completed', job => {
  console.info(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
  console.error(`${job.id} has failed with ${err.message}`);
});

