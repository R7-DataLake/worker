import { ProcessModel } from './processor'

const processModel = new ProcessModel()

export default async (job: any) => {
  const data = job.data;
  // console.log(job);
  switch (job.name) {
    case 'PERSON': {
      await processModel.importPerson(data)
      break
    }
    case 'OPD': {
      await processModel.importOpd(data)
      break
    }
    case 'CHRONIC': {
      await processModel.importChronic(data)
      break
    }
    case 'OPDX': {
      await processModel.importOpdx(data)
      break
    }
    case 'OPOP': {
      await processModel.importOpop(data)
      break
    }
    case 'APPOINT': {
      await processModel.importAppoint(data)
      break
    }
    case 'DRUG': {
      await processModel.importDrug(data)
      break
    }
    case 'DRUGALLERGY': {
      await processModel.importDrugallergy(data)
      break
    }
    case 'IPD': {
      await processModel.importIpd(data)
      break
    }
    case 'IPDX': {
      await processModel.importIpdx(data)
      break
    }
    case 'IPOP': {
      await processModel.importIpop(data)
      break
    }
    case 'LAB': {
      await processModel.importLab(data)
      break
    }
  }
}