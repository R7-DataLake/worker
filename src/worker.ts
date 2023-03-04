
import { Worker, Queue } from 'bullmq'
import _ from 'lodash'
import { DateTime } from 'luxon'
import tasks from './tasks'

const redisWorker = {
  connection: {
    host: process.env.R7PLATFORM_WORKER_REDIS_HOST || "localhost",
    port: Number(process.env.R7PLATFORM_WORKER_REDIS_PORT) || 6379,
    enableOfflineQueue: false,
    password: process.env.R7PLATFORM_WORKER_REDIS_PASSWORD || ""
  }
}

const redisLog = {
  connection: {
    host: process.env.R7PLATFORM_WORKER_LOG_REDIS_HOST || "localhost",
    port: Number(process.env.R7PLATFORM_WORKER_LOG_REDIS_PORT) || 6379,
    enableOfflineQueue: false,
    password: process.env.R7PLATFORM_WORKER_LOG_REDIS_PASSWORD || ""
  }
}

const redisNotify = {
  connection: {
    host: process.env.R7PLATFORM_WORKER_NOTIFY_REDIS_HOST || "localhost",
    port: Number(process.env.R7PLATFORM_WORKER_NOTIFY_REDIS_PORT) || 6379,
    enableOfflineQueue: false,
    password: process.env.R7PLATFORM_WORKER_NOTIFY_REDIS_PASSWORD || ""
  }
}

const ZONE = process.env.R7PLATFORM_WORKER_ZONE || 'R7QUEUE'
const CONCURRENCY = process.env.R7PLATFORM_WORKER_CONCURRENCY ?
  Number(process.env.R7PLATFORM_WORKER_CONCURRENCY) : 4

const worker = new Worker(ZONE, tasks, {
  limiter: {
    max: 100,
    duration: 1000,
  },
  concurrency: CONCURRENCY,
  connection: redisWorker.connection
})

// Notify Queue
const notifyQueue = new Queue("NOTIFY", {
  connection: redisNotify.connection,
  defaultJobOptions: {
    delay: 1000,
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 3000,
    },
    removeOnComplete: {
      age: 3600, // keep up to 1 hour
    },
    removeOnFail: {
      age: 2 * 24 * 3600, // keep up to 48 hours
    },
  }
})

// Log Queue
const logQueue = new Queue("LOG", {
  connection: redisLog.connection,
  defaultJobOptions: {
    delay: 1000,
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 3000,
    },
    removeOnComplete: {
      age: 3600, // keep up to 1 hour
    },
    removeOnFail: {
      age: 2 * 24 * 3600, // keep up to 48 hours
    },
  }
})

// Job success
worker.on('completed', async (job: any) => {
  // console.log(job.data)
  const data = job.data;
  console.info(`Transaction ID: ${data.trx_id} has completed!`)
  // 1. add to log queue
  const now = DateTime.now().toSQL({ includeOffset: false })

  await logQueue.add('INGRESS', {
    trx_id: data.trx_id,
    hospcode: data.hospcode,
    ingress_zone: data.ingress_zone,
    user_id: data.user_id,
    total_records: data.total_records,
    file_name: data.file_name,
    status: 'success',
    created_at: now
  })

  // 2. add to notify queue
  const ingressData: any = {
    trx_id: data.trx_id,
    hospcode: data.hospcode,
    ingress_zone: data.ingress_zone,
    user_id: data.user_id,
    total_records: data.total_records,
    file_name: data.file_name,
    status: 'success',
    created_at: now
  }

  await notifyQueue.add('INGRESS', ingressData);
})

// Job failed
worker.on('failed', async (job: any, err: any) => {
  // console.log(err);
  const data = job.data;
  // console.log(data);

  console.error(`Transaction ID: ${data.trx_id} has failed with ${err.message}`)
  const now = DateTime.now().toSQL({ includeOffset: false });
  const logData: any = {
    trx_id: data.trx_id,
    hospcode: data.hospcode,
    ingress_zone: data.ingress_zone,
    user_id: data.user_id,
    total_records: data.total_records,
    file_name: data.file_name,
    status: 'error',
    error: err.message,
    created_at: now
  }

  // console.log(logData);

  await logQueue.add('INGRESS', logData);

  // 2. add to notify queue
  const notifyData: any = {
    trx_id: data.trx_id,
    hospcode: data.hospcode,
    ingress_zone: data.ingress_zone,
    user_id: data.user_id,
    total_records: data.data.length,
    file_name: data.file_name,
    status: 'error',
    created_at: now
  }

  // console.log(notifyData);

  await notifyQueue.add('INGRESS', notifyData);
})

// Worker error
worker.on('error', err => {
  console.error(err)
})

