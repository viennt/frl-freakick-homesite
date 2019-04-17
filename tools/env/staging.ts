import { EnvConfig } from './env-config.interface';

const StagingConfig: EnvConfig = {
  ENV: 'STAGING',
  API: 'ws://113.160.225.76:8753/message',
  URL: 'http://113.160.225.76:8753',
  URL_UPLOAD: 'http://113.160.225.76:8753/upload',
  GUILD_URL: '#',
  BUSINESS_URL: 'http://113.160.225.76:8744',
};

export = StagingConfig;
