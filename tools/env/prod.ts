import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'wss://api.freakick.com/message',
  URL: 'https://api.freakick.com',
  URL_UPLOAD: 'http://api.freakick.com:9000/upload',
  GUILD_URL: 'https://guild.freakick.com',
  BUSINESS_URL: 'https://business.freakick.com',
};

export = ProdConfig;

