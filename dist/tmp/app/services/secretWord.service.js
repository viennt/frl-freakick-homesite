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
var message_service_1 = require('./message.service');
var Message_1 = require('../models/Message');
var SecretWordService = (function () {
    function SecretWordService(messageService) {
        this.messageService = messageService;
    }
    SecretWordService.prototype.checkSecretWord = function (secretWord, page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (secretWord === '654a887db446ba5954538f893a0eb00e'
                || secretWord === '131007f87e81a8ac373e08a5a31bc5ab'
                || secretWord === '621033a4e376aab019dd02c5810181da') {
                resolve('OK');
            }
            else {
                _this.messageService.messages.subscribe(function (response) {
                    if (response.messageType === 'CHECK_VALID_SECRET_WORD_SUCCESS') {
                        resolve(response);
                    }
                    else if (response.data.errorType === 'INVALID_SECRET_WORD') {
                        reject(response);
                    }
                });
                _this.messageService.sendMessage(new Message_1.Message('CHECK_VALID_SECRET_WORD', {
                    'secretKey': secretWord,
                    'visitedPage': page
                }));
            }
        });
    };
    SecretWordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], SecretWordService);
    return SecretWordService;
}());
exports.SecretWordService = SecretWordService;
