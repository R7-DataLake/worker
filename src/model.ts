const client = require("./client");

export class GRPCModel {
  async doImportPerson(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.savePerson(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportOpd(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveOpd(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportChronic(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveChronic(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportOpdx(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveOpdx(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportOpop(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveOpop(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportIpd(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveIpd(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportIpdx(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveIpdx(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportIpop(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveIpop(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportDrug(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveDrug(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportLab(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveLab(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportAppoint(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveAppoint(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }

  async doImportDrugallergy(data: any): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      client.saveDrugallergy(data, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  }
}