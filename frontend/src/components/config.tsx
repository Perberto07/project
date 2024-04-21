import { createChatBotMessage, Config } from 'react-chatbot-kit';

const config: Config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
};

export default config;
