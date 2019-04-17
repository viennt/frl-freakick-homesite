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
var message_service_1 = require('../../services/message.service');
var Message_1 = require('../../models/Message');
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var constants_1 = require('../../constants');
var md5_1 = require('ts-md5/dist/md5');
var RequestAccountComponent = (function () {
    function RequestAccountComponent(messageService, notify, renderer) {
        this.messageService = messageService;
        this.notify = notify;
        this.renderer = renderer;
        this.externalUrl = constants_1.CONFIG;
    }
    RequestAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    RequestAccountComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
        delete this.userEmail;
        delete this.isSuccess;
        delete this.isLoading;
        delete this.messageSub;
    };
    RequestAccountComponent.prototype.handleMessage = function (message) {
        this.isLoading = false;
        switch (message.messageType) {
            case 'USER_REGISTER_EMAIL_SUCCESS':
                this.isSuccess = true;
                break;
            case 'REQUEST_ERROR':
                this.notify.error('Error', message.data.message || '');
                break;
        }
    };
    RequestAccountComponent.prototype.submitForm = function () {
        this.isLoading = true;
        this.isSuccess = false;
        var apiPackage = {
            email: this.userEmail,
            username: this.username,
            password: String(md5_1.Md5.hashStr(this.password)).trim(),
            fullName: this.fullName
        };
        this.messageService.sendMessage(new Message_1.Message('USER_REGISTER_EMAIL', apiPackage));
    };
    RequestAccountComponent.prototype.onCLickBackToHome = function () {
        delete this.userEmail;
        delete this.username;
        delete this.password;
        delete this.fullName;
        this.isSuccess = false;
    };
    RequestAccountComponent.prototype.onClickShowVideo = function () {
        this.renderer.setElementClass(document.documentElement, 'modal-open', true);
    };
    RequestAccountComponent.prototype.onClickCloseVideo = function () {
        this.renderer.setElementClass(document.documentElement, 'modal-open', false);
    };
    RequestAccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-request-account',
            templateUrl: 'request-account.component.html',
            styleUrls: [
                '../components.min.css',
                'request-account.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, notifications_service_1.NotificationsService, core_1.Renderer])
    ], RequestAccountComponent);
    return RequestAccountComponent;
}());
exports.RequestAccountComponent = RequestAccountComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlcXVlc3QtYWNjb3VudC9yZXF1ZXN0LWFjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFFdkUsZ0NBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFFaEUsd0JBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFDL0Msc0NBQXFDLDRDQUE0QyxDQUFDLENBQUE7QUFFbEYsMEJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsb0JBQW9CLGlCQUFpQixDQUFDLENBQUE7QUFXdEM7SUFXRSxpQ0FBb0IsY0FBOEIsRUFDOUIsTUFBNEIsRUFDNUIsUUFBa0I7UUFGbEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFaL0IsZ0JBQVcsR0FBRyxrQkFBTSxDQUFDO0lBWWMsQ0FBQztJQUUzQywwQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDdEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0NBQWEsR0FBYixVQUFjLE9BQVk7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSyw2QkFBNkI7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixLQUFLLENBQUM7WUFDUixLQUFLLGVBQWU7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxVQUFVLEdBQUc7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDbkQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGlCQUFPLENBQ3pDLHFCQUFxQixFQUFDLFVBQVUsQ0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1EQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQsa0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELG1EQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUE5RUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUU7Z0JBQ1QsdUJBQXVCO2dCQUN2QiwrQkFBK0I7YUFDaEM7U0FDRixDQUFDOzsrQkFBQTtJQXVFRiw4QkFBQztBQUFELENBdEVBLEFBc0VDLElBQUE7QUF0RVksK0JBQXVCLDBCQXNFbkMsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9yZXF1ZXN0LWFjY291bnQvcmVxdWVzdC1hY2NvdW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL21vZGVscy9NZXNzYWdlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9ub3RpZmkvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLXJlcXVlc3QtYWNjb3VudCcsXG4gIHRlbXBsYXRlVXJsOiAncmVxdWVzdC1hY2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4uL2NvbXBvbmVudHMubWluLmNzcycsXG4gICAgJ3JlcXVlc3QtYWNjb3VudC5jb21wb25lbnQuY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RBY2NvdW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgZXh0ZXJuYWxVcmwgPSBDT05GSUc7XG4gIHB1YmxpYyB1c2VyRW1haWw6IHN0cmluZztcbiAgcHVibGljIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuICBwdWJsaWMgZnVsbE5hbWU6IHN0cmluZztcbiAgcHVibGljIGlzU3VjY2VzczogYm9vbGVhbjtcbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICBwcml2YXRlIG1lc3NhZ2VTdWI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZnk6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICBtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICBkZWxldGUgdGhpcy51c2VyRW1haWw7XG4gICAgZGVsZXRlIHRoaXMuaXNTdWNjZXNzO1xuICAgIGRlbGV0ZSB0aGlzLmlzTG9hZGluZztcbiAgICBkZWxldGUgdGhpcy5tZXNzYWdlU3ViO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnVVNFUl9SRUdJU1RFUl9FTUFJTF9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5pc1N1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1JFUVVFU1RfRVJST1InOlxuICAgICAgICB0aGlzLm5vdGlmeS5lcnJvcignRXJyb3InLCBtZXNzYWdlLmRhdGEubWVzc2FnZSB8fCAnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNTdWNjZXNzID0gZmFsc2U7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSB7XG4gICAgICBlbWFpbDogdGhpcy51c2VyRW1haWwsXG4gICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBTdHJpbmcoTWQ1Lmhhc2hTdHIodGhpcy5wYXNzd29yZCkpLnRyaW0oKSxcbiAgICAgIGZ1bGxOYW1lOiB0aGlzLmZ1bGxOYW1lXG4gICAgfTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgJ1VTRVJfUkVHSVNURVJfRU1BSUwnLGFwaVBhY2thZ2VcbiAgICApKTtcbiAgfVxuXG4gIG9uQ0xpY2tCYWNrVG9Ib21lKCkge1xuICAgIGRlbGV0ZSB0aGlzLnVzZXJFbWFpbDtcbiAgICBkZWxldGUgdGhpcy51c2VybmFtZTtcbiAgICBkZWxldGUgdGhpcy5wYXNzd29yZDtcbiAgICBkZWxldGUgdGhpcy5mdWxsTmFtZTtcbiAgICB0aGlzLmlzU3VjY2VzcyA9IGZhbHNlO1xuICB9XG5cbiAgb25DbGlja1Nob3dWaWRlbygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICdtb2RhbC1vcGVuJywgdHJ1ZSk7XG4gIH1cblxuICBvbkNsaWNrQ2xvc2VWaWRlbygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICdtb2RhbC1vcGVuJywgZmFsc2UpO1xuICB9XG59XG4iXX0=
