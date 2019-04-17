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
var authentication_service_1 = require('../../services/authentication.service');
var message_service_1 = require('../../services/message.service');
var location_service_1 = require('../../services/location.service');
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var Message_1 = require('../../models/Message');
var md5_1 = require('ts-md5/dist/md5');
var LoginComponent = (function () {
    function LoginComponent(authService, notifyService, messageService, locationService, route) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.messageService = messageService;
        this.locationService = locationService;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = '';
        this.password = '';
        this.routeSub = this.route.params.subscribe(function (params) { return _this.continueUrl = params['link']; });
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.locationService.getCurrentPosition(function (position) {
            if (position) {
                _this.latitude = position.location.lat;
                _this.longitude = position.location.lng;
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    LoginComponent.prototype.login = function () {
        if (this.isLoading)
            return;
        if (!this.userName) {
            this.notifyService.error('Error', 'Please enter your username or email.');
            return;
        }
        else if (!this.userName.trim()) {
            this.notifyService.error('Error', 'Username or email could not start or end with spaces.');
            return;
        }
        else if (!this.password) {
            this.notifyService.error('Error', 'Please enter your password.');
            return;
        }
        if (typeof this.longitude === 'undefined' || this.longitude === null) {
            this.longitude = -71.127197;
        }
        if (typeof this.latitude === 'undefined' || this.latitude === null) {
            this.latitude = 42.3134791;
        }
        var password = String(md5_1.Md5.hashStr(this.password)).trim();
        this.isLoading = true;
        this.messageService.sendMessage(new Message_1.Message('USER_LOGIN', new LoginData(this.userName, password, this.latitude, this.longitude)));
    };
    LoginComponent.prototype.handleMessage = function (message) {
        this.isLoading = false;
        switch (message.messageType) {
            case 'LOGIN_SUCCESSFUL':
                if (this.continueUrl !== null) {
                    this.authService.login(message.data, this.continueUrl);
                }
                else {
                    this.authService.login(message.data);
                }
                this.isLoading = false;
                break;
            case 'REQUEST_ERROR':
                this.notifyService.error('Error', message.data.message);
                this.isLoading = false;
                break;
            case 'REQUEST_INPUT_ERROR':
                this.notifyService.error('Error', message.data);
                this.isLoading = false;
                break;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-login',
            templateUrl: 'login.component.html',
            styleUrls: [
                '../components.min.css',
                'login.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, notifications_service_1.NotificationsService, message_service_1.MessageService, location_service_1.LocationService, router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
var LoginData = (function () {
    function LoginData(username, password, latitude, longitude) {
        this.username = username;
        this.password = password;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return LoginData;
}());
exports.LoginData = LoginData;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBR2pELHVDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzlFLGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHNDQUFxQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBR2xGLHdCQUF3QixzQkFBc0IsQ0FBQyxDQUFBO0FBRS9DLG9CQUFvQixpQkFBaUIsQ0FBQyxDQUFBO0FBY3RDO0lBV0Usd0JBQW9CLFdBQWtDLEVBQ2xDLGFBQW1DLEVBQ25DLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLEtBQXFCO1FBSnJCLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUN6QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDekMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBakMsQ0FBaUMsQ0FDNUMsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxF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anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKiBJbXBvcnQgc2VydmljZXMgKi9cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3BsdWdpbnMvbm90aWZpL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5cbi8qKiBJbXBvcnQgbW9kZWxzICovXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL01lc3NhZ2UnO1xuXG5pbXBvcnQgeyBNZDUgfSBmcm9tICd0cy1tZDUvZGlzdC9tZDUnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgTG9naW5Db21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuLi9jb21wb25lbnRzLm1pbi5jc3MnLFxuICAgICdsb2dpbi5jb21wb25lbnQuY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xuICBwdWJsaWMgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnRpbnVlVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByb3V0ZVN1YjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZnlTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlOiBMb2NhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyTmFtZSA9ICcnO1xuICAgIHRoaXMucGFzc3dvcmQgPSAnJztcblxuICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICBwYXJhbXMgPT4gdGhpcy5jb250aW51ZVVybCA9IHBhcmFtc1snbGluayddXG4gICAgKTtcblxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKFxuICAgICAgbWVzc2FnZSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSlcbiAgICApO1xuXG4gICAgdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbjogYW55KSA9PiB7XG4gICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHBvc2l0aW9uLmxvY2F0aW9uLmxhdDtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBwb3NpdGlvbi5sb2NhdGlvbi5sbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLnVzZXJOYW1lKSB7XG4gICAgICB0aGlzLm5vdGlmeVNlcnZpY2UuZXJyb3IoJ0Vycm9yJywgJ1BsZWFzZSBlbnRlciB5b3VyIHVzZXJuYW1lIG9yIGVtYWlsLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMudXNlck5hbWUudHJpbSgpKSB7XG4gICAgICB0aGlzLm5vdGlmeVNlcnZpY2UuZXJyb3IoJ0Vycm9yJywgJ1VzZXJuYW1lIG9yIGVtYWlsIGNvdWxkIG5vdCBzdGFydCBvciBlbmQgd2l0aCBzcGFjZXMuJyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghdGhpcy5wYXNzd29yZCkge1xuICAgICAgdGhpcy5ub3RpZnlTZXJ2aWNlLmVycm9yKCdFcnJvcicsICdQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxvbmdpdHVkZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5sb25naXR1ZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMubG9uZ2l0dWRlID0gLTcxLjEyNzE5NztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhdGl0dWRlID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLmxhdGl0dWRlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmxhdGl0dWRlID0gNDIuMzEzNDc5MTtcbiAgICB9XG4gICAgbGV0IHBhc3N3b3JkID0gU3RyaW5nKE1kNS5oYXNoU3RyKHRoaXMucGFzc3dvcmQpKS50cmltKCk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UobmV3IE1lc3NhZ2UoXG4gICAgICAnVVNFUl9MT0dJTicsXG4gICAgICBuZXcgTG9naW5EYXRhKHRoaXMudXNlck5hbWUsIHBhc3N3b3JkLCB0aGlzLmxhdGl0dWRlLCB0aGlzLmxvbmdpdHVkZSlcbiAgICApKTtcbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ0xPR0lOX1NVQ0NFU1NGVUwnOlxuICAgICAgICBpZiAodGhpcy5jb250aW51ZVVybCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4obWVzc2FnZS5kYXRhLCB0aGlzLmNvbnRpbnVlVXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSRVFVRVNUX0VSUk9SJzpcbiAgICAgICAgdGhpcy5ub3RpZnlTZXJ2aWNlLmVycm9yKCdFcnJvcicsIG1lc3NhZ2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSRVFVRVNUX0lOUFVUX0VSUk9SJzpcbiAgICAgICAgdGhpcy5ub3RpZnlTZXJ2aWNlLmVycm9yKCdFcnJvcicsIG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9naW5EYXRhIHtcbiAgY29uc3RydWN0b3IocHVibGljIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgbGF0aXR1ZGU6IG51bWJlcixcbiAgICAgICAgICAgICAgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyKSB7XG4gIH1cbn1cbiJdfQ==
