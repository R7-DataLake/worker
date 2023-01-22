
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

  doImportChronic: async (postgrest, data) => {
    return postgrest
      .from('chronic')
      .upsert(data, { onConflict: 'hospcode,hn,chronic' });
  },

  doImportOpdx: async (postgrest, data) => {
    return postgrest
      .from('opdx')
      .upsert(data, { onConflict: 'hospcode,hn,seq,diag,dxtype' });
  },

  doImportOpop: async (postgrest, data) => {
    return postgrest
      .from('opop')
      .upsert(data, { onConflict: 'hospcode,hn,seq,oper' });
  },

  doImportIpd: async (postgrest, data) => {
    return postgrest
      .from('ipd')
      .upsert(data, { onConflict: 'hospcode,hn,an' });
  },

  doImportIpdx: async (postgrest, data) => {
    return postgrest
      .from('ipdx')
      .upsert(data, { onConflict: 'hospcode,hn,an,diag,dxtype' });
  },

  doImportIpop: async (postgrest, data) => {
    return postgrest
      .from('ipop')
      .upsert(data, { onConflict: 'hospcode,hn,an,oper,optype' });
  },

  doImportDrug: async (postgrest, data) => {
    return postgrest
      .from('drug')
      .upsert(data, { onConflict: 'hospcode,hn,seq,did' });
  },

  doImportLab: async (postgrest, data) => {
    return postgrest
      .from('lab')
      .upsert(data, { onConflict: 'hospcode,hn,seq,labtest' });
  },

  doImportAppoint: async (postgrest, data) => {
    return postgrest
      .from('appoint')
      .upsert(data, { onConflict: 'hospcode,hn,seq,clinic' });
  },

  doImportDrugallergy: async (postgrest, data) => {
    return postgrest
      .from('drugallergy')
      .upsert(data, { onConflict: 'hospcode,hn,dname' });
  },

}