const app = require('./src/app');
const logger = require('./src/utils/logger');
const { PORT } = require('./config/environment');

app.listen(PORT, () => {
  logger.info(`🚀 Servidor rodando na porta ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});
