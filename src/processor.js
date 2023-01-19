const model = require('./model');

module.exports = {

  importPerson: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportPerson(postgrest, data);
    return jobs.id;
  },

  importOpd: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportOpd(postgrest, data);
    return jobs.id;
  },

  importChronic: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportChronic(postgrest, data);
    return jobs.id;
  },

  importOpdx: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportOpdx(postgrest, data);
    return jobs.id;
  },

  importOpop: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportOpop(postgrest, data);
    return jobs.id;
  },

  importIpd: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportIpd(postgrest, data);
    return jobs.id;
  },

  importIpdx: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportIpdx(postgrest, data);
    return jobs.id;
  },

  importIpop: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportIpop(postgrest, data);
    return jobs.id;
  },

  importDrug: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportDrug(postgrest, data);
    return jobs.id;
  },

  importLab: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportLab(postgrest, data);
    return jobs.id;
  },

  importAppoint: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportAppoint(postgrest, data);
    return jobs.id;
  },

  importDrugallergy: async (postgrest, jobs) => {
    const data = jobs.data;
    await model.doImportDrugallergy(postgrest, data);
    return jobs.id;
  },

}