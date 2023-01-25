const client = require("./client");

module.exports = {

  doImportPerson: async (data) => {
    return new Promise((resolve, reject) => {
      client.savePerson(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportOpd: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveOpd(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportChronic: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveChronic(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportOpdx: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveOpdx(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportOpop: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveOpop(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportIpd: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveIpd(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportIpdx: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveIpdx(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportIpop: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveIpop(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportDrug: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveDrug(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportLab: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveLab(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportAppoint: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveAppoint(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  doImportDrugallergy: async (data) => {
    return new Promise((resolve, reject) => {
      client.saveDrugallergy(data, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

}