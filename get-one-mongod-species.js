const mongodb = require('mongodb');

const uri = 'mongodb+srv://admin:admin@cluster0.5cdt0.mongodb.net';
//https://us-south.functions.appdomain.cloud/api/v1/web/brycewilkinson43%40gmail.com_dev/default/mongoGetOneSpeciesInfo
let client = null;

//Takes a parameter of name: "animalname" by default is "Agile Wallaby"

async function main(params) {
  const reused = client != null;
  if (client == null) {
    client = await mongodb.MongoClient.connect(uri);  
  }

  search = params.name
  console.log(search)
  const docs = await client.db('geodata').collection('speciesInfo').findOne({name: params.name});

  return { body: { result: docs, reused } };
}

exports.main = main;