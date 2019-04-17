'use strict';
import { EnvConfig } from '../../../tools/env/env-config.interface';

export const CONFIG: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');

export const SECURITY = {
  CLIENT_ID: '812741506391.apps.freakick.com',
  CLIENT_SECRET: '85e2121c23db1f64a48670b2011ae0a1a03848213dfaf50df189862e559dd8d6',
  APP_ID: 2340
};

export const API_ENDPOINTS = {
  USER_LOGIN: 'USER_LOGIN',
  GET_COUNTRIES: 'GET_COUNTRIES',
  SEARCH_SUGGESTION_COURT: 'SEARCH_SUGGESTION_COURT',
  FIND_STATE_BY_COUNTRY: 'FIND_STATE_BY_COUNTRY',
  FIND_CITY_BY_STATE: 'FIND_CITY_BY_STATE',
  CONNECT_BY_SOCIAL: 'CONNECT_BY_SOCIAL',
  REGISTER_BY_SOCIAL: 'REGISTER_BY_SOCIAL',
  LOGIN_BY_SOCIAL: 'LOGIN_BY_SOCIAL',
  GET_USER_INVITED_BY_EMAIL: 'GET_USER_INVITED_BY_EMAIL'
};

export const PUSHER = {
  KEY: '97f45c1fb0beebb358e9',
  CLUSTER: 'ap1'
};

export const DATE_TIME = {
  SERVER_FORMAT: 'YYYY-MM-DD h:mm A',
  LOCAL_FORMAT: 'MM/DD/YYYY h:mm A'
};

export const SOCIAL_NETWORK = {
  google: {
    clientId: '235049126450-od5b31dehbmrm0069i40869662hujj0a.apps.googleusercontent.com'
  },
  linkedin: {
    clientId: ''
  },
  facebook: {
    clientId: '1273314316057451',
    apiVersion: 'v2.8'
  }
};

export const SEARCH_PAGINATION = {
  ITEM_PER_PAGE: 50,
  ITEM_PER_PAGE_EVENT_TINE_LINE: 5
};

export const DEFAULT_TIMEZONE = 'America/New_York';
export const DEFAULT_LOCATION = 'Boston, Massachusetts, United States';

// export const SECRET_CODES = [
//   '654a887db446ba5954538f893a0eb00e',
//   'a3410817019348047145f6fa57121101',

//   '467bebb868325b40f72195d0997841cc',
//   'b54b6f30209fa12744e9915bd8349a74',
//   '2cc476dcca87e4fb2b7c22688a8ea1bd',

//   'd14dfc71841fe74bf16a58b6ef33a339',
//   'f6d94c23a520dd929f43a2d7ff231bc1',
//   '73e275849b7d2c334f4fa002119ebb5d',
//   '0b422944e9e10a753b208f4a98ac1b07',
//   '21e5bbf8748a4874a51f589f25b29126',
//   '3edbcfdb6ccafda48b802a566e465da2',

//   'a47eaa61715dd598b1893901b65c7622',
//   'a89e59e2aaca7da7bb66341d5e448044',
//   '477b7036e8354e707533a608945000e0',
//   '739adc998fb6a9e3e9a82a3c062ccda3'
// ];

// export let MAPBOX = {
//   ACCESS_TOKEN: 'pk.eyJ1Ijoic2t1bGwxNDEyMDkiLCJhIjoiY2l0bDVwdmd5MDJnYjJzcGdjZHBhc2FlNyJ9.-cb_DImRq6ptOT_olJ7j7Q',
//   STYLE: 'mapbox://styles/skull141209/civbsqsam007i2ip2o0uspzem',
//   API_ENDPOINT: 'https://api.mapbox.com/geocoding/v5'
// };

// export const GOOGLE = {
//   key: 'AIzaSyD2DeGymLqcAkcO_qOE0rKXUbFPswrtQD8',
//   timestamp: '1331766000',
//   language: 'en',
//   region: 'USA'
// };
