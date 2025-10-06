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
/*
require('./models/piloto');

require('./models/usuario');
require('./models/categoria');
require('./models/evento');
require('./models/bateria');
require('./models/volta');


// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const conectarDB = require('./db/conect');
const app = express();
// Importa as rotas
const routes = require('./routes/routes');

app.use(cors());
app.use(express.json({ limit: '1mb' }));

/*
app.use(async (req, res, next) => {
  
    try {
      await conectarDB();
      console.log('Banco de dados conectado');
    } catch (err) {
      console.error('Erro ao conectar ao banco de dados', err);
      return res.status(503).json({ error: 'Serviço Indisponível', details: err.message });
    }
  next();
});

(async () => {
    try {
        await conectarDB();
        console.log('Banco de dados conectado');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados', err);
        process.exit(1);
    }
})();

app.use('/api', routes);

/*
app.listen(3030, () => {
  console.log('Server running on port 3030');
});



module.exports = serverless(app);
*/

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const conectarDB = require('./db/conect');
const routes = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Conecta antes de lidar com requisições
(async () => {
  try {
    await conectarDB();
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  }
})();

// Rotas
app.use('/api', routes);

// Exporta para a Vercel
module.exports = serverless(app);

