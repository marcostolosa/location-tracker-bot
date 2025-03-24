const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  logger.error(`[${new Date().toISOString()}] ${err.message}`, {
    method: req.method,
    path: req.path,
    body: req.body,
    error: err.stack
  });

  res.status(statusCode).json({
    status: 'error',
    statusCode: statusCode,
    message: err.message || 'Erro interno do servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
