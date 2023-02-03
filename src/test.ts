import { GRPCModel } from "./model"

const grpc = require("@grpc/grpc-js")

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.H6_ISfGQFCY-hDEXGZ2lN7hZlvuPBVRRCgOdNvlxo8Q'

const jwtMetadata = new grpc.Metadata()
jwtMetadata.add("Authorization", `Bearer ${token}`)

const model = new GRPCModel()

const test = async () => {
  const data = {
    "data": [
      {
        "hospcode": "11053",
        "hn": "0041223",
        "cid": "3440400285538",
        "title": "นาย10",
        "fname": "ทดสอบ10",
        "lname": "ไม่เอาจริง10",
        "birth": "19880109",
        "sex": "1",
        "marriage": "2",
        "occupation": "101",
        "nation": "99",
        "idtype": "1",
        "changwat": "44",
        "amphur": "04",
        "tambol": "09",
        "moo": "21",
        "typearea": "1",
        "dUpdate": "20230114100900"
      },
      {
        "hospcode": "11054",
        "hn": "0041223",
        "cid": "3440400285548",
        "title": "นาย4",
        "fname": "ทดสอบ4",
        "lname": "ไม่เอาจริง4",
        "birth": "19880109",
        "sex": "1",
        "marriage": "2",
        "occupation": "101",
        "nation": "99",
        "idtype": "1",
        "changwat": "44",
        "amphur": "04",
        "tambol": "09",
        "moo": "21",
        "typearea": "2",
        "dUpdate": "20230114100900"
      }
    ]
  }

  try {
    const result = await model.doImportPerson(data, jwtMetadata)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

test()