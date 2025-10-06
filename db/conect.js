/*
const mongoose = require('mongoose');
require('dotenv').config();

global.mongoose = mongoose || {conn:null, promise: null}; // Torna mongoose globalmente acessível

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Por favor, defina a variável de ambiente MONGODB_URI. ' +
    'Ela deve estar no formato: mongodb+srv://<user>:<password>@<cluster-url>/<db-name>?retryWrites=true&w=majority'
  );
}

async function conectarDB() {
  const cached = global.mongoose;
  if (cached.conn) {
    console.log('Utilizando conexão MongoDB cacheada.');
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 5, // Limita o número máximo de conexões no pool
      serverSelectionTimeoutMS: 30000, // Tempo limite para seleção do servidor
      socketTimeoutMS: 45000, // Tempo limite para o socket
      minPoolSize: 1, // Mantém pelo menos uma conexão aberta
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Nova conexão MongoDB estabelecida.');
      return mongoose;
    }).catch(err => {
      console.error('Erro ao conectar ao MongoDB:', err);
      cached.promise = null; // Reseta a promise em caso de erro      
      throw err;
    });
  }

try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null; // Reseta a promise em caso de erro
    throw err;
  }
  return cached.conn;
  
}

module.exports = conectarDB;
*/

/*
const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false;

const conectarDB = async()=> {
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

module.exports =  conectarDB;
*/

const mongoose = require('mongoose');
require('dotenv').config();

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const conectarDB = async () => {
  if (cached.conn) {
    // Já existe conexão ativa
    return cached.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI não está definida no .env');
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 10000, // 10 segundos
      serverSelectionTimeoutMS: 10000,
      stricQuery: true,      
    };
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
     
    //await mongoose.connection.db.admin().command({ ping: 1 });
    cached.promise = mongoose.connect(process.env.MONGODB_URI, clientOptions).then((mongoose) => {
      console.log('✅ MongoDB conectado');
      return mongoose;
    });

  }

  
  cached.conn = await cached.promise;
  
  return cached.conn;
};

module.exports = conectarDB;

