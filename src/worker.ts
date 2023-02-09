
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
      count: 10000, // keep up to 10000 jobs
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
      count: 10000, // keep up to 10000 jobs
    },
    removeOnFail: {
      age: 2 * 24 * 3600, // keep up to 48 hours
    },
  }
})

// Job success
worker.on('completed', async (job: any) => {
  console.info(`Transaction ID: ${job.trx_id} has completed!`)
  // console.log(job)
  // 1. add to log queue
  const now = DateTime.now().toSQL({ includeOffset: false })
  await logQueue.add('INGRESS', {
    trx_id: job.trx_id,
    hospcode: job.hospcode,
    ingress_zone: job.ingress_zone,
    user_id: job.user_id,
    total_records: job.total_records,
    file_name: job.file_name,
    status: 'success',
    created_at: now
  })

  // 2. add to notify queue
  await notifyQueue.add('INGRESS', {
    trx_id: job.trx_id,
    hospcode: job.hospcode,
    ingress_zone: job.ingress_zone,
    user_id: job.user_id,
    total_records: job.total_records,
    file_name: job.file_name,
    status: 'success',
    created_at: now
  })
})

// Job failed
worker.on('failed', async (job: any, err: any) => {
  console.error(`Transaction ID: ${job.trx_id} has failed with ${err.message}`)
  const now = DateTime.now().toSQL({ includeOffset: false })
  await logQueue.add('INGRESS', {
    trx_id: job.trx_id,
    hospcode: job.hospcode,
    ingress_zone: job.ingress_zone,
    user_id: job.user_id,
    total_records: job.total_records,
    file_name: job.file_name,
    status: 'error',
    error: err.message,
    created_at: now
  })

  // 2. add to notify queue
  await notifyQueue.add('INGRESS', {
    trx_id: job.trx_id,
    hospcode: job.hospcode,
    ingress_zone: job.ingress_zone,
    user_id: job.user_id,
    total_records: job.total_records,
    file_name: job.file_name,
    status: 'error',
    created_at: now
  })
})

// Worker error
worker.on('error', err => {
  console.error(err)
})

