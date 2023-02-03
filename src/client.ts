import path from "path"

const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")

const fs = require('fs')

const PROTO_PATH = path.join(__dirname, "../protos/ingress.proto")

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
});

const credentials = grpc.credentials.createSsl(
  fs.readFileSync(path.join(__dirname, '../certs/ca.crt')),
  fs.readFileSync(path.join(__dirname, '../certs/client.key')),
  fs.readFileSync(path.join(__dirname, '../certs/client.crt'))
);

const ingress = grpc.loadPackageDefinition(packageDefinition).ingress
const grpcServer = process.env.R7PLATFORM_WORKER_GRPC_SERVER || "localhost:50051"

const client = new ingress.IngressService(grpcServer, credentials)
// const client = new ingress.IngressService(grpc_server, grpc.credentials.createInsecure())

module.exports = client
