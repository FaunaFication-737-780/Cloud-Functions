const mongodb = require('mongodb');

const uri = 'mongodb+srv://admin:admin@cluster0.5cdt0.mongodb.net';

let client = null;

async function main(params) {
  const reused = client != null;
  if (client == null) {
    client = await mongodb.MongoClient.connect(uri);  
  }

  const docs = await client.db('geodata').collection('species').find().toArray();

  return { body: { result: docs, reused } };
}

exports.main = main;