const processor = require('./processor');

module.exports = {
  processJobs: async (job) => {
    switch (job.name) {
      case 'PERSON': {
        await processor.importPerson(job);
        break;
      }
      case 'OPD': {
        await processor.importOpd(job);
        break;
      }
      case 'CHRONIC': {
        await processor.importChronic(job);
        break;
      }
      case 'OPDX': {
        await processor.importOpdx(job);
        break;
      }
      case 'OPOP': {
        await processor.importOpop(job);
        break;
      }
      case 'APPOINT': {
        await processor.importAppoint(job);
        break;
      }
      case 'DRUG': {
        await processor.importDrug(job);
        break;
      }
      case 'DRUGALLERGY': {
        await processor.importDrugallergy(job);
        break;
      }
      case 'IPD': {
        await processor.importIpd(job);
        break;
      }
      case 'IPDX': {
        await processor.importIpdx(job);
        break;
      }
      case 'IPOP': {
        await processor.importIpop(job);
        break;
      }
      case 'LAB': {
        await processor.importLab(job);
        break;
      }
    }
  }
}
