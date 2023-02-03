const grpc = require("@grpc/grpc-js")

import { GRPCModel } from './model'

const grpcModel = new GRPCModel()

const token = process.env.R7PLATFORM_WORKER_API_KEY || 'xxxxxx.xxxxxx.xxxxxxx'

const jwtMetadata = new grpc.Metadata()
jwtMetadata.add("Authorization", `Bearer ${token}`)

export class ProcessModel {
  async importPerson(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportPerson(data, jwtMetadata)
    return jobs.id
  }

  async importOpd(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportOpd(data, jwtMetadata)
    return jobs.id
  }

  async importChronic(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportChronic(data, jwtMetadata)
    return jobs.id
  }

  async importOpdx(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportOpdx(data, jwtMetadata)
    return jobs.id
  }

  async importOpop(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportOpop(data, jwtMetadata)
    return jobs.id
  }

  async importIpd(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportIpd(data, jwtMetadata)
    return jobs.id
  }

  async importIpdx(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportIpdx(data, jwtMetadata)
    return jobs.id
  }

  async importIpop(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportIpop(data, jwtMetadata)
    return jobs.id
  }

  async importDrug(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportDrug(data, jwtMetadata)
    return jobs.id
  }

  async importLab(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportLab(data, jwtMetadata)
    return jobs.id
  }

  async importAppoint(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportAppoint(data, jwtMetadata)
    return jobs.id
  }

  async importDrugallergy(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportDrugallergy(data, jwtMetadata)
    return jobs.id
  }

}
