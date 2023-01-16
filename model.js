// Person module
module.exports = {

  doImportPerson: async (postgrest, data) => {
    return postgrest
      .from('person')
      .upsert(data, { onConflict: 'hospcode,hn' });
  },

  doImportOpd: async (postgrest, data) => {
    return postgrest
      .from('opd')
      .upsert(data, { onConflict: 'hospcode,hn,vn,date_serv' });
  },
}