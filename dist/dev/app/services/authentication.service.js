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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGdCQUFnQixDQUFDLENBQUE7QUFDdEMsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMscUJBQThCLHNCQUFzQixDQUFDLENBQUE7QUFHckQ7SUFHSSwrQkFDWSxNQUFjLEVBQ2QsYUFBMkI7UUFEM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSi9CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFNckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHFDQUFLLEdBQUwsVUFBTSxJQUFTLEVBQUUsSUFBa0I7UUFBbkMsaUJBc0JDO1FBdEJnQixvQkFBa0IsR0FBbEIsa0JBQWtCO1FBQy9CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElB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Q0FBQyxDQUFDLENBQUM7WUFFN0IsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELE1BQU0sQ0FBQztRQUNYLENBQUM7SUFDTCxDQUFDO0lBdEhMO1FBQUMsaUJBQVUsRUFBRTs7NkJBQUE7SUF3SGIsNEJBQUM7QUFBRCxDQXZIQSxBQXVIQyxJQUFBO0FBdkhZLDZCQUFxQix3QkF1SGpDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBsb2dnZWRJbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSAhIXRoaXMuY29va2llU2VydmljZS5nZXQoJ3VzZXJJZCcpO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXI6IGFueSwgbGluayA9ICcvZG93bmxvYWQnKSB7XG4gICAgICAgIGxldCB1c2VySW5mbyA9IHVzZXIudXNlckluZm87XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ3VzZXJJZCcsIHVzZXJJbmZvLnVzZXJJZCk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ2NhcHRhaW5PZlRlYW0nLCB1c2VyLmNhcHRhaW5PZlRlYW0pO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdlbWFpbCcsIHVzZXJJbmZvLmVtYWlsKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgndXNlckltYWdlJywgdXNlckluZm8udXNlckltYWdlKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgndXNlck5hbWUnLCB1c2VySW5mby51c2VyTmFtZSk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ2Z1bGxOYW1lJywgdXNlckluZm8uZnVsbE5hbWUpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdsZXZlbCcsIHVzZXJJbmZvLmxldmVsKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgnbGV2ZWxMYWJlbCcsIHVzZXJJbmZvLmxldmVsTGFiZWwpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdjdXJyZW50RXhwZXJpZW5jZScsIHVzZXJJbmZvLmN1cnJlbnRFeHBlcmllbmNlKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgnbWF4RXhwZXJpZW5jZScsIHVzZXJJbmZvLm1heEV4cGVyaWVuY2UpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdwbGF5ZWRHYW1lJywgdXNlckluZm8ucGxheWVkR2FtZSk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ2lzRmluaXNoRGVtb2dyYXBoaWNRdWVzdGlvbicsIHVzZXJJbmZvLmlzRmluaXNoRGVtb2dyYXBoaWNRdWVzdGlvbik7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ2lzQWxsb3dSZWNlaXZlSW52aXRhdGlvbicsIHVzZXJJbmZvLmlzQWxsb3dSZWNlaXZlSW52aXRhdGlvbik7XG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwobGluayksIDQwMCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdhY2Nlc3NUb2tlbicsIHVzZXIuYWNjZXNzVG9rZW4uYWNjZXNzVG9rZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgnYWNjZXNzVG9rZW4nLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5yZW1vdmUoJ3VzZXJJZCcpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCdjYXB0YWluT2ZUZWFtJyk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5yZW1vdmUoJ2VtYWlsJyk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5yZW1vdmUoJ3VzZXJJbWFnZScpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCd1c2VyTmFtZScpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCdmdWxsTmFtZScpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCdsZXZlbCcpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCdsZXZlbExhYmVsJyk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5yZW1vdmUoJ2N1cnJlbnRFeHBlcmllbmNlJyk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5yZW1vdmUoJ21heEV4cGVyaWVuY2UnKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnJlbW92ZSgncGxheWVkR2FtZScpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCdpc0ZpbmlzaERlbW9ncmFwaGljUXVlc3Rpb24nKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnJlbW92ZSgnaXNBbGxvd1JlY2VpdmVJbnZpdGF0aW9uJyk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5yZW1vdmUoJ2FjY2Vzc1Rva2VuJyk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5yZW1vdmUoJ19sb2dpbl9wcm92aWRlcicpO1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlckluZm8odXNlcjogYW55KSB7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ3VzZXJJZCcsIHVzZXIudXNlcklkKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgnZW1haWwnLCB1c2VyLmVtYWlsKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgndXNlckltYWdlJywgdXNlci51c2VySW1hZ2UpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCd1c2VyTmFtZScsIHVzZXIudXNlck5hbWUpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdmdWxsTmFtZScsIHVzZXIuZnVsbE5hbWUpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdsZXZlbCcsIHVzZXIubGV2ZWwpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdsZXZlbExhYmVsJywgdXNlci5sZXZlbExhYmVsKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgnY3VycmVudEV4cGVyaWVuY2UnLCB1c2VyLmN1cnJlbnRFeHBlcmllbmNlKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgnbWF4RXhwZXJpZW5jZScsIHVzZXIubWF4RXhwZXJpZW5jZSk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ3BsYXllZEdhbWUnLCB1c2VyLnBsYXllZEdhbWUpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdpc0ZpbmlzaERlbW9ncmFwaGljUXVlc3Rpb24nLCB1c2VyLmlzRmluaXNoRGVtb2dyYXBoaWNRdWVzdGlvbik7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ2lzQWxsb3dSZWNlaXZlSW52aXRhdGlvbicsIHVzZXIuaXNBbGxvd1JlY2VpdmVJbnZpdGF0aW9uKTtcbiAgICB9XG5cbiAgICBnZXRBdXRoZW50aWNhdGVkVXNlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nZ2VkSW4pIHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgICAgIHVzZXIudXNlcklkID0gTnVtYmVyKHRoaXMuY29va2llU2VydmljZS5nZXQoJ3VzZXJJZCcpKTtcbiAgICAgICAgICAgIHVzZXIuY2FwdGFpbk9mVGVhbSA9IE51bWJlcih0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdjYXB0YWluT2ZUZWFtJykpO1xuICAgICAgICAgICAgdXNlci5lbWFpbCA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2VtYWlsJyk7XG4gICAgICAgICAgICB1c2VyLnVzZXJJbWFnZSA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3VzZXJJbWFnZScpO1xuICAgICAgICAgICAgdXNlci51c2VyTmFtZSA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3VzZXJOYW1lJyk7XG4gICAgICAgICAgICB1c2VyLmxldmVsID0gTnVtYmVyKHRoaXMuY29va2llU2VydmljZS5nZXQoJ2xldmVsJykpO1xuICAgICAgICAgICAgdXNlci5sZXZlbExhYmVsID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnbGV2ZWxMYWJlbCcpO1xuICAgICAgICAgICAgdXNlci5jdXJyZW50RXhwZXJpZW5jZSA9IE51bWJlcih0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdjdXJyZW50RXhwZXJpZW5jZScpKTtcbiAgICAgICAgICAgIHVzZXIubWF4RXhwZXJpZW5jZSA9IE51bWJlcih0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdtYXhFeHBlcmllbmNlJykpO1xuICAgICAgICAgICAgdXNlci5wbGF5ZWRHYW1lID0gTnVtYmVyKHRoaXMuY29va2llU2VydmljZS5nZXQoJ3BsYXllZEdhbWUnKSk7XG4gICAgICAgICAgICB1c2VyLmlzRmluaXNoRGVtb2dyYXBoaWNRdWVzdGlvbiA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2lzRmluaXNoRGVtb2dyYXBoaWNRdWVzdGlvbicpID09PSAndHJ1ZSc7XG4gICAgICAgICAgICB1c2VyLmlzRmluaXNoRGVtb2dyYXBoaWNRdWVzdGlvbiA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2lzQWxsb3dSZWNlaXZlSW52aXRhdGlvbicpID09PSAndHJ1ZSc7XG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnYWNjZXNzVG9rZW4nKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgdHlwZSA9ICdTVFJJTkcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0pTT04nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5jb29raWVTZXJ2aWNlLmdldChrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KGtleSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQXV0aCh1cmwgPSAnbG9naW4nKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
