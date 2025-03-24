const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/locationRoutes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

const app = express();

// Middlewares de segurança e log
app.use(helmet());
app.use(cors());
app.use(morgan('combined', { 
  stream: { 
    write: (message) => logger.info(message.trim()) 
  } 
}));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
app.use('/api', locationRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

// Rota 404
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Rota não encontrada'
  });
});

module.exports = app;
