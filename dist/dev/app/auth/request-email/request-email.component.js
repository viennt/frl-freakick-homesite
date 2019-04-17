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
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var authentication_service_1 = require('../../services/authentication.service');
var message_service_1 = require('../../services/message.service');
var Message_1 = require('../../models/Message');
var RequestEmailComponent = (function () {
    function RequestEmailComponent(authService, notifyService, messageService) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.messageService = messageService;
    }
    RequestEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSentEmail = false;
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    RequestEmailComponent.prototype.ngOnDestroy = function () {
        delete this.userEmail;
    };
    RequestEmailComponent.prototype.login = function () {
        if (this.isLoading)
            return;
        if (!this.userEmail) {
            this.notifyService.error('Error', 'Please enter your email.');
            return;
        }
        this.messageService.sendMessage(new Message_1.Message('SEND_FORGOT_PASSWORD_REQUEST', new SendEmailData(this.userEmail)));
    };
    RequestEmailComponent.prototype.handleMessage = function (message) {
        this.isLoading = false;
        switch (message.messageType) {
            case 'SEND_FORGOT_PASSWORD_REQUEST_SUCCESS':
                this.isLoading = false;
                this.isSentEmail = true;
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
    RequestEmailComponent.prototype.onClickToBackForm = function () {
        this.isSentEmail = false;
    };
    RequestEmailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-request-email',
            templateUrl: 'request-email.component.html',
            styleUrls: ['request-email.component.css'],
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, notifications_service_1.NotificationsService, message_service_1.MessageService])
    ], RequestEmailComponent);
    return RequestEmailComponent;
}());
exports.RequestEmailComponent = RequestEmailComponent;
var SendEmailData = (function () {
    function SendEmailData(email) {
        this.email = email;
    }
    return SendEmailData;
}());
exports.SendEmailData = SendEmailData;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlcXVlc3QtZW1haWwvcmVxdWVzdC1lbWFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUc3RCxzQ0FBcUMsNENBQTRDLENBQUMsQ0FBQTtBQUNsRix1Q0FBc0MsdUNBQXVDLENBQUMsQ0FBQTtBQUM5RSxnQ0FBK0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUNoRSx3QkFBd0Isc0JBQXNCLENBQUMsQ0FBQTtBQVcvQztJQUtFLCtCQUFvQixXQUFrQyxFQUNsQyxhQUFtQyxFQUNuQyxjQUE4QjtRQUY5QixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFdkQsd0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNwQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQUssR0FBTDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxpQkFBTyxDQUN6Qyw4QkFBOEIsRUFDOUIsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQWEsR0FBYixVQUFjLE9BQVk7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSyxzQ0FBc0M7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxlQUFlO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQXFCO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBM0RIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzs7NkJBQUE7SUF1REYsNEJBQUM7QUFBRCxDQXREQSxBQXNEQyxJQUFBO0FBdERZLDZCQUFxQix3QkFzRGpDLENBQUE7QUFFRDtJQUNFLHVCQUFtQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUNoQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLHFCQUFhLGdCQUd6QixDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL3JlcXVlc3QtZW1haWwvcmVxdWVzdC1lbWFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBJbXBvcnQgc2VydmljZXMgKi9cbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9ub3RpZmkvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL21vZGVscy9NZXNzYWdlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIExvZ2luQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1yZXF1ZXN0LWVtYWlsJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXF1ZXN0LWVtYWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JlcXVlc3QtZW1haWwuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0RW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyB1c2VyRW1haWw6IHN0cmluZztcbiAgcHVibGljIGlzU2VudEVtYWlsOiBib29sZWFuO1xuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZnlTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNTZW50RW1haWwgPSBmYWxzZTtcblxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKFxuICAgICAgbWVzc2FnZSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgZGVsZXRlIHRoaXMudXNlckVtYWlsO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLnVzZXJFbWFpbCkge1xuICAgICAgdGhpcy5ub3RpZnlTZXJ2aWNlLmVycm9yKCdFcnJvcicsICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShuZXcgTWVzc2FnZShcbiAgICAgICdTRU5EX0ZPUkdPVF9QQVNTV09SRF9SRVFVRVNUJyxcbiAgICAgIG5ldyBTZW5kRW1haWxEYXRhKHRoaXMudXNlckVtYWlsKVxuICAgICkpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnU0VORF9GT1JHT1RfUEFTU1dPUkRfUkVRVUVTVF9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NlbnRFbWFpbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUkVRVUVTVF9FUlJPUic6XG4gICAgICAgIHRoaXMubm90aWZ5U2VydmljZS5lcnJvcignRXJyb3InLCBtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUkVRVUVTVF9JTlBVVF9FUlJPUic6XG4gICAgICAgIHRoaXMubm90aWZ5U2VydmljZS5lcnJvcignRXJyb3InLCBtZXNzYWdlLmRhdGEpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9CYWNrRm9ybSgpIHtcbiAgICB0aGlzLmlzU2VudEVtYWlsID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlbmRFbWFpbERhdGEge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1haWw6IHN0cmluZykge1xuICB9XG59XG4iXX0=
