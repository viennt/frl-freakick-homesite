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
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var md5_1 = require('ts-md5/dist/md5');
var authentication_service_1 = require('../../services/authentication.service');
var message_service_1 = require('../../services/message.service');
var Message_1 = require('../../models/Message');
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authService, notifyService, messageService, route, router) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUpdatedPassword = false;
        this.repeatPassword = '';
        this.password = '';
        this.routeSub = this.route.params.subscribe(function (params) { return _this.resetToken = params['link']; });
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    ResetPasswordComponent.prototype.reset = function () {
        if (this.isLoading)
            return;
        if (!this.password) {
            this.notifyService.error('Error', 'Please enter your new password.');
            return;
        }
        else if (!this.repeatPassword) {
            this.notifyService.error('Error', 'Please enter your new password twice.');
            return;
        }
        else if (this.repeatPassword !== this.password) {
            this.notifyService.error('Error', 'You must enter the same password twice in order to confirm it.');
            return;
        }
        var password = md5_1.Md5.hashStr(this.repeatPassword) + '';
        this.messageService.sendMessage(new Message_1.Message('RESET_PASSWORD', new ResetPasswordData(this.resetToken, password, null)));
    };
    ResetPasswordComponent.prototype.handleMessage = function (message) {
        this.isLoading = false;
        switch (message.messageType) {
            case 'RESET_PASSWORD_SUCCESS':
                this.isLoading = false;
                this.isUpdatedPassword = true;
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
    ResetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-reset-password',
            templateUrl: 'reset-password.component.html',
            styleUrls: ['reset-password.component.css'],
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, notifications_service_1.NotificationsService, message_service_1.MessageService, router_1.ActivatedRoute, router_1.Router])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
var ResetPasswordData = (function () {
    function ResetPasswordData(resetToken, newPassword, fcmToken) {
        this.resetToken = resetToken;
        this.newPassword = newPassword;
        this.fcmToken = fcmToken;
    }
    return ResetPasswordData;
}());
exports.ResetPasswordData = ResetPasswordData;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELHNDQUFxQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBR2xGLG9CQUFvQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RDLHVDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzlFLGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLHdCQUF3QixzQkFBc0IsQ0FBQyxDQUFBO0FBVy9DO0lBV0UsZ0NBQW9CLFdBQWtDLEVBQ2xDLGFBQW1DLEVBQ25DLGNBQThCLEVBQzlCLEtBQXFCLEVBQ3JCLE1BQWM7UUFKZCxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV2Qyx5Q0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUN6QyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFoQyxDQUFnQyxDQUMzQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNwQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxh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WSx5QkFBaUIsb0JBSzdCLENBQUEiLCJmaWxlIjoiYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKiBJbXBvcnQgc2VydmljZXMgKi9cbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9ub3RpZmkvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcblxuLyoqIEltcG9ydCBtb2RlbHMgKi9cbmltcG9ydCB7IE1kNSB9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvTWVzc2FnZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBMb2dpbkNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtcmVzZXQtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuICBwdWJsaWMgcmVzZXRUb2tlbjogc3RyaW5nO1xuICBwdWJsaWMgaXNVcGRhdGVkUGFzc3dvcmQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnRpbnVlVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByb3V0ZVN1YjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZnlTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzVXBkYXRlZFBhc3N3b3JkID0gZmFsc2U7XG4gICAgdGhpcy5yZXBlYXRQYXNzd29yZCA9ICcnO1xuICAgIHRoaXMucGFzc3dvcmQgPSAnJztcblxuICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICBwYXJhbXMgPT4gdGhpcy5yZXNldFRva2VuID0gcGFyYW1zWydsaW5rJ11cbiAgICApO1xuXG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICBtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJvdXRlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHJldHVybjtcbiAgICBpZiAoIXRoaXMucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMubm90aWZ5U2VydmljZS5lcnJvcignRXJyb3InLCAnUGxlYXNlIGVudGVyIHlvdXIgbmV3IHBhc3N3b3JkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1lbHNlIGlmICghdGhpcy5yZXBlYXRQYXNzd29yZCkge1xuICAgICAgdGhpcy5ub3RpZnlTZXJ2aWNlLmVycm9yKCdFcnJvcicsICdQbGVhc2UgZW50ZXIgeW91ciBuZXcgcGFzc3dvcmQgdHdpY2UuJyk7XG4gICAgICByZXR1cm47XG4gICAgfWVsc2UgaWYgKHRoaXMucmVwZWF0UGFzc3dvcmQgIT09IHRoaXMucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMubm90aWZ5U2VydmljZS5lcnJvcignRXJyb3InLCAnWW91IG11c3QgZW50ZXIgdGhlIHNhbWUgcGFzc3dvcmQgdHdpY2UgaW4gb3JkZXIgdG8gY29uZmlybSBpdC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBhc3N3b3JkID0gTWQ1Lmhhc2hTdHIodGhpcy5yZXBlYXRQYXNzd29yZCkgKyAnJztcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgJ1JFU0VUX1BBU1NXT1JEJyxcbiAgICAgIG5ldyBSZXNldFBhc3N3b3JkRGF0YSh0aGlzLnJlc2V0VG9rZW4sIHBhc3N3b3JkLCBudWxsKVxuICAgICkpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnUkVTRVRfUEFTU1dPUkRfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVkUGFzc3dvcmQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1JFUVVFU1RfRVJST1InOlxuICAgICAgICB0aGlzLm5vdGlmeVNlcnZpY2UuZXJyb3IoJ0Vycm9yJywgbWVzc2FnZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1JFUVVFU1RfSU5QVVRfRVJST1InOlxuICAgICAgICB0aGlzLm5vdGlmeVNlcnZpY2UuZXJyb3IoJ0Vycm9yJywgbWVzc2FnZS5kYXRhKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZXNldFRva2VuOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBuZXdQYXNzd29yZDogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgZmNtVG9rZW46IG51bWJlcikge1xuICB9XG59XG4iXX0=
