const TelegramService = require('../services/telegramService');
const logger = require('../utils/logger');

class LocationController {
  static async sendLocation(req, res, next) {
    try {
      const { latitude, longitude } = req.body;

      if (!latitude || !longitude) {
        return res.status(400).json({
          success: false,
          message: 'Coordenadas inválidas'
        });
      }

      const result = await TelegramService.sendLocationMessage(latitude, longitude);

      logger.info(`Localização enviada: ${latitude}, ${longitude}`);

      res.status(200).json({
        success: true,
        message: 'Localização enviada com sucesso',
        data: result
      });
    } catch (error) {
      logger.error('Erro ao enviar localização', error);
      next(error);
    }
  }
}

module.exports = LocationController;
