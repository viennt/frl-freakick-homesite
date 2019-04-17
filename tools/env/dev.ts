import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  ENV: 'DEV',
  API: 'ws://192.168.21.226:9000/message',
  URL: 'http://192.168.21.226:9000',
  URL_UPLOAD: 'http://192.168.21.226:9000/upload',
  GUILD_URL: '#',
  BUSINESS_URL: '#',
};

export = DevConfig;

