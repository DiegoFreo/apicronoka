/*
require('./models/piloto');
require('./models/usuario');
require('./models/categoria');
require('./models/evento');
require('./models/bateria');
require('./models/volta');
require('dotenv').config();

const Usuario = require('./models/usuario');

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const app = express();
//const port = 3330;

app.use(cors());
app.use(express.json());

const conectarDB = require('./db/conect');
conectarDB.then(() => {
    console.log('Banco de dados conectado');
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados', err);
    process.exit(1);
});

// Importa as rotas
const routes = require('./routes/routes');
app.use('/api', routes);


/*
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


module.exports = serverless(app);
*/

require('./models/piloto');
require('./models/usuario');
require('./models/categoria');
require('./models/evento');
require('./models/bateria');
require('./models/volta');
require('dotenv').config();

const Usuario = require('./models/usuario');

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const app = express();

app.use(cors());
app.use(express.json());

const conectarDB = require('./db/conect');
conectarDB.then(() => {
    console.log('Banco de dados conectado');
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados', err);
    process.exit(1);
});

// Importa as rotas
const routes = require('./routes/routes');
app.use('/api', routes);

module.exports = serverless(app);
