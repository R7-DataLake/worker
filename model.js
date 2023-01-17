// Person module
module.exports = {

  doImportPerson: async (postgrest, data) => {
    return postgrest
      .from('person')
      .upsert(data, { onConflict: 'hospcode,hn' });
  },

  doRemovePersonByDate: async (postgrest, hospcode, date_serv) => {
    return postgrest
      .from('person')
      .delete()
      .eq('hospcode', hospcode)
      .eq('date_serv', date_serv);
  },

  doImportOpd: async (postgrest, data) => {
    return postgrest
      .from('opd')
      .upsert(data, { onConflict: 'hospcode,hn,vn,date_serv' });
  },
}