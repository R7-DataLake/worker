import { ProcessModel } from './processor'

const processModel = new ProcessModel()

export default async (job: any) => {
  switch (job.name) {
    case 'PERSON': {
      await processModel.importPerson(job)
      break
    }
    case 'OPD': {
      await processModel.importOpd(job)
      break
    }
    case 'CHRONIC': {
      await processModel.importChronic(job)
      break
    }
    case 'OPDX': {
      await processModel.importOpdx(job)
      break
    }
    case 'OPOP': {
      await processModel.importOpop(job)
      break
    }
    case 'APPOINT': {
      await processModel.importAppoint(job)
      break
    }
    case 'DRUG': {
      await processModel.importDrug(job)
      break
    }
    case 'DRUGALLERGY': {
      await processModel.importDrugallergy(job)
      break
    }
    case 'IPD': {
      await processModel.importIpd(job)
      break
    }
    case 'IPDX': {
      await processModel.importIpdx(job)
      break
    }
    case 'IPOP': {
      await processModel.importIpop(job)
      break
    }
    case 'LAB': {
      await processModel.importLab(job)
      break
    }
  }
}