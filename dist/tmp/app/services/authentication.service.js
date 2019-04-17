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
var User_1 = require('../models/User');
var router_1 = require('@angular/router');
var core_2 = require('angular2-cookie/core');
var AuthenticationService = (function () {
    function AuthenticationService(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
        this.loggedIn = false;
        this.loggedIn = !!this.cookieService.get('userId');
    }
    AuthenticationService.prototype.login = function (user, link) {
        var _this = this;
        if (link === void 0) { link = '/download'; }
        var userInfo = user.userInfo;
        this.cookieService.put('userId', userInfo.userId);
        this.cookieService.put('captainOfTeam', user.captainOfTeam);
        this.cookieService.put('email', userInfo.email);
        this.cookieService.put('userImage', userInfo.userImage);
        this.cookieService.put('userName', userInfo.userName);
        this.cookieService.put('fullName', userInfo.fullName);
        this.cookieService.put('level', userInfo.level);
        this.cookieService.put('levelLabel', userInfo.levelLabel);
        this.cookieService.put('currentExperience', userInfo.currentExperience);
        this.cookieService.put('maxExperience', userInfo.maxExperience);
        this.cookieService.put('playedGame', userInfo.playedGame);
        this.cookieService.put('isFinishDemographicQuestion', userInfo.isFinishDemographicQuestion);
        this.cookieService.put('isAllowReceiveInvitation', userInfo.isAllowReceiveInvitation);
        this.loggedIn = true;
        setTimeout(function () { return _this.router.navigateByUrl(link); }, 400);
        try {
            this.cookieService.put('accessToken', user.accessToken.accessToken);
        }
        catch (error) {
            this.cookieService.put('accessToken', '');
        }
    };
    AuthenticationService.prototype.logout = function () {
        this.cookieService.remove('userId');
        this.cookieService.remove('captainOfTeam');
        this.cookieService.remove('email');
        this.cookieService.remove('userImage');
        this.cookieService.remove('userName');
        this.cookieService.remove('fullName');
        this.cookieService.remove('level');
        this.cookieService.remove('levelLabel');
        this.cookieService.remove('currentExperience');
        this.cookieService.remove('maxExperience');
        this.cookieService.remove('playedGame');
        this.cookieService.remove('isFinishDemographicQuestion');
        this.cookieService.remove('isAllowReceiveInvitation');
        this.cookieService.remove('accessToken');
        this.cookieService.remove('_login_provider');
        this.loggedIn = false;
    };
    AuthenticationService.prototype.updateUserInfo = function (user) {
        this.cookieService.put('userId', user.userId);
        this.cookieService.put('email', user.email);
        this.cookieService.put('userImage', user.userImage);
        this.cookieService.put('userName', user.userName);
        this.cookieService.put('fullName', user.fullName);
        this.cookieService.put('level', user.level);
        this.cookieService.put('levelLabel', user.levelLabel);
        this.cookieService.put('currentExperience', user.currentExperience);
        this.cookieService.put('maxExperience', user.maxExperience);
        this.cookieService.put('playedGame', user.playedGame);
        this.cookieService.put('isFinishDemographicQuestion', user.isFinishDemographicQuestion);
        this.cookieService.put('isAllowReceiveInvitation', user.isAllowReceiveInvitation);
    };
    AuthenticationService.prototype.getAuthenticatedUser = function () {
        if (this.loggedIn) {
            var user = new User_1.User();
            user.userId = Number(this.cookieService.get('userId'));
            user.captainOfTeam = Number(this.cookieService.get('captainOfTeam'));
            user.email = this.cookieService.get('email');
            user.userImage = this.cookieService.get('userImage');
            user.userName = this.cookieService.get('userName');
            user.level = Number(this.cookieService.get('level'));
            user.levelLabel = this.cookieService.get('levelLabel');
            user.currentExperience = Number(this.cookieService.get('currentExperience'));
            user.maxExperience = Number(this.cookieService.get('maxExperience'));
            user.playedGame = Number(this.cookieService.get('playedGame'));
            user.isFinishDemographicQuestion = this.cookieService.get('isFinishDemographicQuestion') === 'true';
            user.isFinishDemographicQuestion = this.cookieService.get('isAllowReceiveInvitation') === 'true';
            return user;
        }
        return null;
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        try {
            return !!this.cookieService.get('accessToken');
        }
        catch (e) {
            return false;
        }
    };
    AuthenticationService.prototype.getItem = function (key, type) {
        if (type === void 0) { type = 'STRING'; }
        try {
            if (type === 'JSON') {
                return JSON.parse(this.cookieService.get(key));
            }
            return this.cookieService.get(key);
        }
        catch (error) {
            return null;
        }
    };
    AuthenticationService.prototype.checkAuth = function (url) {
        if (url === void 0) { url = 'login'; }
        if (this.isLoggedIn() === true) {
            return;
        }
        else {
            if (url !== null) {
                this.router.navigateByUrl(url);
            }
            return;
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
