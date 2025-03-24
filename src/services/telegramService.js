const axios = require('axios');
const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = require('../config/environment');
const logger = require('../utils/logger');

class TelegramService {
  static async sendLocationMessage(latitude, longitude) {
    const message = `📍 Nova Localização Detectada:
Latitude: ${latitude}
Longitude: ${longitude}
Data: ${new Date().toLocaleString()}`;

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        },
        {
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error) {
      logger.error('Erro no serviço do Telegram', error);
      throw new Error('Falha ao enviar mensagem para o Telegram');
    }
  }
}

module.exports = TelegramService;
