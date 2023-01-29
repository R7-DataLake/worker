import { GRPCModel } from './model'

const grpcModel = new GRPCModel()

export class ProcessModel {
  async importPerson(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportPerson(data)
    return jobs.id
  }

  async importOpd(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportOpd(data)
    return jobs.id
  }

  async importChronic(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportChronic(data)
    return jobs.id
  }

  async importOpdx(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportOpdx(data)
    return jobs.id
  }

  async importOpop(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportOpop(data)
    return jobs.id
  }

  async importIpd(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportIpd(data)
    return jobs.id
  }

  async importIpdx(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportIpdx(data)
    return jobs.id
  }

  async importIpop(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportIpop(data)
    return jobs.id
  }

  async importDrug(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportDrug(data)
    return jobs.id
  }

  async importLab(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportLab(data)
    return jobs.id
  }

  async importAppoint(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportAppoint(data)
    return jobs.id
  }

  async importDrugallergy(jobs: any) {
    const data = jobs.data
    await grpcModel.doImportDrugallergy(data)
    return jobs.id
  }

}
