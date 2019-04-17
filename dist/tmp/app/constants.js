'use strict';
exports.CONFIG = JSON.parse('{"API":"wss://api.freakick.com/message","ENV":"PROD","URL":"https://api.freakick.com","URL_UPLOAD":"http://api.freakick.com:9000/upload","GUILD_URL":"https://guild.freakick.com","BUSINESS_URL":"https://business.freakick.com"}');
exports.SECURITY = {
    CLIENT_ID: '812741506391.apps.freakick.com',
    CLIENT_SECRET: '85e2121c23db1f64a48670b2011ae0a1a03848213dfaf50df189862e559dd8d6',
    APP_ID: 2340
};
exports.API_ENDPOINTS = {
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
exports.PUSHER = {
    KEY: '97f45c1fb0beebb358e9',
    CLUSTER: 'ap1'
};
exports.DATE_TIME = {
    SERVER_FORMAT: 'YYYY-MM-DD h:mm A',
    LOCAL_FORMAT: 'MM/DD/YYYY h:mm A'
};
exports.SOCIAL_NETWORK = {
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
exports.SEARCH_PAGINATION = {
    ITEM_PER_PAGE: 50,
    ITEM_PER_PAGE_EVENT_TINE_LINE: 5
};
exports.DEFAULT_TIMEZONE = 'America/New_York';
exports.DEFAULT_LOCATION = 'Boston, Massachusetts, United States';
