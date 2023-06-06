import { ProcessModel } from './processor'

const processModel = new ProcessModel()

export default async (job: any) => {
  const data = job.data;
  // console.log(job);
  switch (job.name) {
    case 'PERSON': {
      processModel.importPerson(data)
      break
    }
    case 'OPD': {
      processModel.importOpd(data)
      break
    }
    case 'CHRONIC': {
      processModel.importChronic(data)
      break
    }
    case 'OPDX': {
      processModel.importOpdx(data)
      break
    }
    case 'OPOP': {
      processModel.importOpop(data)
      break
    }
    case 'APPOINT': {
      processModel.importAppoint(data)
      break
    }
    case 'OPDRUG': {
      processModel.importOpDrug(data)
      break
    }
    case 'IPDRUG': {
      processModel.importIpDrug(data)
      break
    }
    case 'DRUGALLERGY': {
      processModel.importDrugallergy(data)
      break
    }
    case 'IPD': {
      processModel.importIpd(data)
      break
    }
    case 'IPDX': {
      processModel.importIpdx(data)
      break
    }
    case 'IPOP': {
      processModel.importIpop(data)
      break
    }
    case 'LAB': {
      processModel.importLab(data)
      break
    }
  }
}