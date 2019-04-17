import { EnvConfig } from './env-config.interface';

const UATConfig: EnvConfig = {
  ENV: 'UAT',
  API: 'ws://113.160.225.76:8743/message',
  URL: 'http://113.160.225.76:8743',
  URL_UPLOAD: 'http://113.160.225.76:8743/upload',
  GUILD_URL: '#',
  BUSINESS_URL: 'http://113.160.225.76:8742',
};

export = UATConfig;
