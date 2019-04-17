"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var router_1 = require('@angular/router');
var Message_1 = require('../models/Message');
var core_2 = require('angular2-cookie/core');
var authentication_service_1 = require('./authentication.service');
var constants_1 = require('../constants');
var MessageService = (function () {
    function MessageService(router, cookieService, authService) {
        this.router = router;
        this.cookieService = cookieService;
        this.authService = authService;
        this.messageUrl = constants_1.CONFIG.API;
        this.outboundQueue = [];
        this.message = new Subject_1.Subject();
    }
    Object.defineProperty(MessageService.prototype, "messages", {
        get: function () {
            return this.message;
        },
        enumerable: true,
        configurable: true
    });
    MessageService.prototype.sendMessage = function (message) {
        if (this.connected && !this.connecting) {
            var accessToken = this.cookieService.get('accessToken');
            if (accessToken !== null && accessToken !== undefined) {
                message.data.accessToken = accessToken;
            }
            if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
                console.info('%c[LOG] ' + moment().format('HH:mm:ss DD-MM-YYYY') + ' ▶️▶️▶️ ', 'background: #5E738B; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message);
            }
            var apiMessage = message.toJSON();
            this.websocket.send(apiMessage);
        }
        else {
            this.outboundQueue.push(message);
            this.connect();
        }
    };
    MessageService.prototype.connect = function () {
        var _this = this;
        if (this.messageUrl && !this.connected && !this.connecting) {
            this.connecting = true;
            this.websocket = new WebSocket(this.messageUrl
                + '?clientId=' + constants_1.SECURITY.CLIENT_ID
                + '&&clientSecret=' + constants_1.SECURITY.CLIENT_SECRET
                + '&&appId=' + constants_1.SECURITY.APP_ID);
            this.websocket.onerror = function (event) { return _this.handleMessage(new Message_1.Message('ERROR', "Communication error: " + event.toString())); };
            this.websocket.onmessage = function (event) { return _this.handleMessage(Message_1.Message.fromJSON(event.data)); };
            this.websocket.onopen = function (event) { return _this.onConnected(); };
            this.websocket.onclose = function (event) { return _this.onDisconnected(); };
        }
    };
    MessageService.prototype.handleMessage = function (message) {
        if (!!message.data.errorType && message.data.errorType === 'INVALID_ACCESS_TOKEN') {
            this.authService.logout();
            this.router.navigate(['/login']);
        }
        else {
            switch (message.messageType) {
                case 'ERROR':
                    if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
                        console.info('%c[WEBSOCKET ERROR] 😱😱😱 ', 'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message.data);
                    }
                    break;
                default:
                    if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
                        console.info('%c[LOG] ' + moment().format('HH:mm:ss DD-MM-YYYY') + ' ◀️◀️◀️ ', 'background: #4DB3A2; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message);
                    }
                    this.message.next(message);
                    break;
            }
        }
    };
    MessageService.prototype.onConnected = function () {
        this.connected = true;
        this.connecting = false;
        if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
            console.info('%c[WEBSOCKET OPENED] 📡📡📡 ', 'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;');
        }
        while (this.outboundQueue.length > 0) {
            this.sendMessage(this.outboundQueue.pop());
        }
    };
    MessageService.prototype.onDisconnected = function () {
        this.connected = false;
        this.connecting = false;
        this.message.next(new Message_1.Message('CLOSED', 'Connection closed. Please try again.'));
        if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
            console.info('%c[WEBSOCKET CLOSED] 🚫🚫🚫 ', 'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;');
        }
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService, authentication_service_1.AuthenticationService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
