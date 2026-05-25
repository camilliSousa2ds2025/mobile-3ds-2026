const {MongoClient} = require('mongodb');

const uri = process.env.MONGODB_URI  || 'mongodb://localhost:27016/react-native';

const client = new MongoClient(uri);
