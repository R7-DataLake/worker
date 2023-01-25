## Environments
```env
R7_WORKER_GRPC_SERVER=localhost:50051

R7_WORKER_REDIS_HOST=localhost
R7_WORKER_REDIS_PASSWORD=admin

R7_WORKER_ZONE=R7QUEUE
```

`R7_WORKER_ZONE` ชื่อของ ZONE ที่ต้องการจะรับข้อมูล

## Run

```shell
NODE_ENV=development REDIS_PASSWORD=admin GRPC_SERVER=localhost:50051 node worker.js
```