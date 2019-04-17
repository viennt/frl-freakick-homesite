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
var router_1 = require('@angular/router');
var core_2 = require('angular2-cookie/core');
var md5_1 = require('ts-md5/dist/md5');
var secretWord_service_1 = require('../services/secretWord.service');
var CanActivateViaSecretCode = (function () {
    function CanActivateViaSecretCode(router, cookieService, secretWordService) {
        this.router = router;
        this.cookieService = cookieService;
        this.secretWordService = secretWordService;
    }
    CanActivateViaSecretCode.prototype.canActivate = function (route, state) {
        var _this = this;
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return true;
        }
        var secretWord = this.cookieService.get('sc');
        if (secretWord) {
            return this.secretWordService.checkSecretWord(String(md5_1.Md5.hashStr(secretWord)), route.component.name)
                .then(function (data) {
                return true;
            }).catch(function (error) {
                _this.router.navigate(['/landing']);
                return false;
            });
        }
        else {
            this.router.navigate(['/landing']);
            return false;
        }
    };
    CanActivateViaSecretCode = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService, secretWord_service_1.SecretWordService])
    ], CanActivateViaSecretCode);
    return CanActivateViaSecretCode;
}());
exports.CanActivateViaSecretCode = CanActivateViaSecretCode;
