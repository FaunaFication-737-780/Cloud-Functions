const mongodb = require('mongodb');

const uri = 'mongodb+srv://prafful:ravindrababu@cluster0.y27d4.mongodb.net/test';
let client = null;

async function main(params) {
    const reused = client != null;
    if (client == null) {
        client = await mongodb.MongoClient.connect(uri);
    }

    const docs = await client.db('JsonData').collection('datas').find().toArray();

    return { body: { result: docs, reused } };
}

exports.main = setInterval(main, 3000);