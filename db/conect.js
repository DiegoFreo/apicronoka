const mongoose = require('mongoose');
require('dotenv').config();
global.mongoose = mongoose || {conn: null, promise: null};

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function conectarDB() {
  const cacheado = global.mongoose;
  if (cacheado.conn) {
    return cacheado.conn;
  }
  if (cacheado.promise) {
      const opts = {
        maxPoolSize: 5,
        minPoolsize: 1,
        bufferCommands: false,
        bufferMaxEntries: 0,
        ServerSelectionTimeoutMS: 5000,
      };
      cacheado.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        return mongoose;
      }).catch((err) => {
        global.mongoose.promise = null;
        console.error('Erro ao conectar ao MongoDB:', err);
        throw err;
      });
  }
  try {
    cacheado.conn = await cacheado.promise;
  } catch (err) {
    cacheado.promise = null;
    throw err;
  } 
  return cacheado.conn;
 
}
module.exports = conectarDB;

/*
const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false;

async function main() {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI não está definida');
    return null;
  }

  if (mongoose.connection.readyState >= 1) {
    isConnected = true;
    return mongoose;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log('MongoDB conectado');
    return mongoose;
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    return null;
  }
}

module.exports = main();*/

