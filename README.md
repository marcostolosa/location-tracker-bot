# Location Tracker Bot 📍🌍

## 🚀 Descrição do Projeto

Location Tracker é uma aplicação web que captura a localização do usuário e envia de forma segura para um bot do Telegram, proporcionando uma solução simples e eficiente de geolocalização.

## ✨ Funcionalidades

- Captura automática de coordenadas geográficas
- Envio seguro de localização via Telegram
- Tratamento robusto de erros
- Logging detalhado
- Configuração via variáveis de ambiente

## 🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- Axios
- Telegram Bot API
- Geolocation Web API

## 📋 Pré-requisitos

- Node.js (v16 ou superior)
- npm
- Conta no Telegram
- Telegram Bot criado via @BotFather

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/marcostolosa/location-tracker-bot.git
cd location-tracker
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

4. Edite o `.env` com suas credenciais do Telegram

5. Inicie o servidor
```bash
npm start
```

## 🔐 Configuração

### Criando um Bot no Telegram

1. Abra o @BotFather no Telegram
2. Use `/newbot` para criar um novo bot
3. Escolha um nome e username
4. Anote o token gerado

### Obtendo Chat ID

1. Inicie uma conversa com seu bot
2. Visite `https://api.telegram.org/bot<SEU_TOKEN>/getUpdates`
3. Procure pelo `chat.id`

## 🧪 Testes

Execute os testes com:
```bash
npm test
```

## 🔒 Segurança

- Senhas e tokens são gerenciados via variáveis de ambiente
- Implementação de middleware de erro
- Logging de todas as operações

## 📦 Dependências

- `express`: Framework web
- `axios`: Requisições HTTP
- `dotenv`: Gerenciamento de variáveis de ambiente
- `winston`: Logging

## 🤝 Contribuições

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commite suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Faça um push (`git push origin feature/nova-feature`)
5. Crie um Pull Request

---

**Aviso de Privacidade**: Este aplicativo captura apenas coordenadas geográficas com consentimento explícito do usuário.
