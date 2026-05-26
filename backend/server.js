const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27016';

const dbName = 'banco1';

async function conectar() {
    try {
        await client.connect();
        console.log('Conexão com o MongoDB estabelecida!');

        const db = client.db();
        const colecoes = await db.listCollections().toArray();
        console.log('Coleções encontradas: ', colecoes.length);
    }catch (err){
        console.log('Falha ao conectar: ', err.message)
    }
}

conectar();