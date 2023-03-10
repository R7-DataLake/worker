const grpc = require("@grpc/grpc-js")

import { GRPCModel } from './model'

const grpcModel = new GRPCModel()

const token = process.env.R7PLATFORM_WORKER_API_KEY || ''

const jwtMetadata = new grpc.Metadata()
jwtMetadata.add("Authorization", `Bearer ${token}`)

export class ProcessModel {
  async importPerson(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportPerson(json, jwtMetadata)
  }

  async importOpd(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportOpd(json, jwtMetadata)
  }

  async importChronic(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportChronic(json, jwtMetadata)
  }

  async importOpdx(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportOpdx(json, jwtMetadata)
  }

  async importOpop(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportOpop(json, jwtMetadata)
  }

  async importIpd(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportIpd(json, jwtMetadata)
  }

  async importIpdx(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportIpdx(json, jwtMetadata)
  }

  async importIpop(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportIpop(json, jwtMetadata)
  }

  async importOpDrug(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportOpDrug(json, jwtMetadata)
  }

  async importIpDrug(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportIpDrug(json, jwtMetadata)
  }

  async importLab(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportLab(json, jwtMetadata)
  }

  async importAppoint(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportAppoint(json, jwtMetadata)
  }

  async importDrugallergy(jobs: any) {
    const data = jobs.data
    const json: any = { data }
    return grpcModel.doImportDrugallergy(json, jwtMetadata)
  }

}
