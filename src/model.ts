const client = require("./client")
export class GRPCModel {
  async doImportPerson(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.savePerson(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportOpd(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveOpd(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportChronic(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveChronic(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportOpdx(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveOpdx(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportOpop(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveOpop(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportIpd(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveIpd(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportIpdx(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveIpdx(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportIpop(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveIpop(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportOpDrug(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveOpDrug(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportIpDrug(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveIpDrug(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportLab(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveLab(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportAppoint(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveAppoint(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  async doImportDrugallergy(data: any, jwtMetadata: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveDrugallergy(data, jwtMetadata, (err: any, response: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }
}