
// db/conect.js (Otimização Serverless)
import mongoose from 'mongoose';

global.mongoose = global.mongoose || { conn: null, promise: null };

const MONGODB_URI = process.env.MONGODB_URI;

// ... (Restante do código de verificação MONGODB_URI) ...

async function conectarDB() {
    const cached = global.mongoose;

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            // 🚨 ESSENCIAL 1: Desabilita o buffering de comandos
            bufferCommands: false,
            
            // 🚨 ESSENCIAL 2: Aumenta o tempo para encontrar o servidor (30 segundos)
            // Resolve Cold Starts lentos e problemas de DNS.
            serverSelectionTimeoutMS: 30000, 
            
            // 🚨 ESSENCIAL 3: Aumenta o tempo máximo para inatividade do socket (45 segundos)
            socketTimeoutMS: 45000, 
            
            // Pool de Conexões Pequeno para Serverless
            maxPoolSize: 5, 
            minPoolSize: 1, 
            
            // Opcional: Garante o keepAlive para reutilização de socket, embora padrão.
            // keepAlive: true, 
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts)
            .then((_mongoose) => {
                console.log('✅ Conexão MongoDB Atlas estabelecida.');
                return _mongoose;
            })
            .catch((error) => {
                global.mongoose.promise = null;
                // Loga o erro real antes do timeout
                console.error('❌ ERRO CRÍTICO DB:', error.message); 
                throw error;
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        throw e;
    }

    return cached.conn;
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

module.exports = main();
*/

