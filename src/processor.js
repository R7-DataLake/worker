const model = require('./model');

module.exports = {

  importPerson: async (jobs) => {
    const data = jobs.data;
    await model.doImportPerson(data);
    return jobs.id;
  },

  importOpd: async (jobs) => {
    const data = jobs.data;
    await model.doImportOpd(data);
    return jobs.id;
  },

  importChronic: async (jobs) => {
    const data = jobs.data;
    await model.doImportChronic(data);
    return jobs.id;
  },

  importOpdx: async (jobs) => {
    const data = jobs.data;
    await model.doImportOpdx(data);
    return jobs.id;
  },

  importOpop: async (jobs) => {
    const data = jobs.data;
    await model.doImportOpop(data);
    return jobs.id;
  },

  importIpd: async (jobs) => {
    const data = jobs.data;
    await model.doImportIpd(data);
    return jobs.id;
  },

  importIpdx: async (jobs) => {
    const data = jobs.data;
    await model.doImportIpdx(data);
    return jobs.id;
  },

  importIpop: async (jobs) => {
    const data = jobs.data;
    await model.doImportIpop(data);
    return jobs.id;
  },

  importDrug: async (jobs) => {
    const data = jobs.data;
    await model.doImportDrug(data);
    return jobs.id;
  },

  importLab: async (jobs) => {
    const data = jobs.data;
    await model.doImportLab(data);
    return jobs.id;
  },

  importAppoint: async (jobs) => {
    const data = jobs.data;
    await model.doImportAppoint(data);
    return jobs.id;
  },

  importDrugallergy: async (jobs) => {
    const data = jobs.data;
    await model.doImportDrugallergy(data);
    return jobs.id;
  },

}