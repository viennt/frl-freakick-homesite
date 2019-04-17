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
var router_2 = require('@angular/router');
var message_service_1 = require('../../services/message.service');
var location_service_1 = require('../../services/location.service');
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var Message_1 = require('../../models/Message');
var md5_1 = require('ts-md5/dist/md5');
var ActivateRegisteredAccountComponent = (function () {
    function ActivateRegisteredAccountComponent(messageService, locationService, notify, route, router) {
        this.messageService = messageService;
        this.locationService = locationService;
        this.notify = notify;
        this.route = route;
        this.router = router;
    }
    ActivateRegisteredAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.queryParams.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.locationService.getCurrentPosition(function (position) {
            if (position) {
                _this.latitude = position.location.lat;
                _this.longitude = position.location.lng;
            }
        });
    };
    ActivateRegisteredAccountComponent.prototype.handleRoute = function (params) {
        this.registerEmail = params['email'];
        this.registerToken = params['token'];
    };
    ActivateRegisteredAccountComponent.prototype.handleMessage = function (message) {
        var _this = this;
        this.isLoading = false;
        switch (message.messageType) {
            case 'REGISTER_SUCCESSFUL':
                this.notify.success('Success', 'Registered successfully!');
                setTimeout(function () {
                    _this.router.navigateByUrl('/download');
                }, 1000);
                break;
            case 'REQUEST_ERROR':
                this.notify.error('Error', message.data.message);
                this.errorMsg = message.data.message;
                break;
        }
    };
    ActivateRegisteredAccountComponent.prototype.onSubmitToActivateAccount = function (value) {
        this.errorMsg = '';
        this.successMsg = '';
        this.sendMessageToActiveRegisteredAccount(value);
    };
    ActivateRegisteredAccountComponent.prototype.sendMessageToActiveRegisteredAccount = function (value) {
        this.messageService.sendMessage(new Message_1.Message('REGISTER_USER', {
            username: String(value.username).trim(),
            password: String(md5_1.Md5.hashStr(value.password)).trim(),
            email: String(this.registerEmail),
            fullName: String(value.fullName).trim(),
            cityId: Number(value.cityId),
            countryId: Number(value.countryId),
            latitude: Number(this.latitude),
            longitude: Number(this.longitude),
            registerToken: this.registerToken
        }));
    };
    ActivateRegisteredAccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-activate-registered-account',
            template: "\n      <frk-activate-form [isLoading]=\"isLoading\"\n                         (submit)=\"onSubmitToActivateAccount($event)\">\n      </frk-activate-form>\n  "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, location_service_1.LocationService, notifications_service_1.NotificationsService, router_1.ActivatedRoute, router_2.Router])
    ], ActivateRegisteredAccountComponent);
    return ActivateRegisteredAccountComponent;
}());
exports.ActivateRegisteredAccountComponent = ActivateRegisteredAccountComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2FjdGl2YXRlLXJlZ2lzdGVyZWQtYWNjb3VudC9hY3RpdmF0ZS1yZWdpc3RlcmVkLWFjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFLekMsZ0NBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFDaEUsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0NBQXFDLDRDQUE0QyxDQUFDLENBQUE7QUFJbEYsd0JBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFHL0Msb0JBQW9CLGlCQUFpQixDQUFDLENBQUE7QUFXdEM7SUFjRSw0Q0FBb0IsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsTUFBNEIsRUFDNUIsS0FBcUIsRUFDckIsTUFBYztRQUpkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFdkMscURBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMs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cC9hdXRoL2FjdGl2YXRlLXJlZ2lzdGVyZWQtYWNjb3VudC9hY3RpdmF0ZS1yZWdpc3RlcmVkLWFjY291bnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuLyoqIEltcG9ydCBzZXJ2aWNlcyAqL1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3BsdWdpbnMvbm90aWZpL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5cbi8qKiBJbXBvcnQgbW9kZWxzICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL21vZGVscy9NZXNzYWdlJztcblxuLyoqIEltcG9ydCBvdGhlcnMgKi9cbmltcG9ydCB7IE1kNSB9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay1hY3RpdmF0ZS1yZWdpc3RlcmVkLWFjY291bnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGZyay1hY3RpdmF0ZS1mb3JtIFtpc0xvYWRpbmddPVwiaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoc3VibWl0KT1cIm9uU3VibWl0VG9BY3RpdmF0ZUFjY291bnQoJGV2ZW50KVwiPlxuICAgICAgPC9mcmstYWN0aXZhdGUtZm9ybT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmF0ZVJlZ2lzdGVyZWRBY2NvdW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHVzZXI6IFVzZXI7XG5cbiAgcHVibGljIGxhdGl0dWRlOiBudW1iZXI7XG4gIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcbiAgcHVibGljIHJlZ2lzdGVyVG9rZW46IHN0cmluZztcbiAgcHVibGljIHJlZ2lzdGVyRW1haWw6IHN0cmluZztcblxuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuICBwdWJsaWMgZXJyb3JNc2c6IHN0cmluZztcbiAgcHVibGljIHN1Y2Nlc3NNc2c6IHN0cmluZztcblxuICBwcml2YXRlIHJvdXRlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlOiBMb2NhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZ5OiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gdGhpcy5oYW5kbGVSb3V0ZShwYXJhbXMpKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG4gICAgdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbjogYW55KSA9PiB7XG4gICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHBvc2l0aW9uLmxvY2F0aW9uLmxhdDtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBwb3NpdGlvbi5sb2NhdGlvbi5sbmc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSb3V0ZShwYXJhbXM6IGFueSkge1xuICAgIHRoaXMucmVnaXN0ZXJFbWFpbCA9IHBhcmFtc1snZW1haWwnXTtcbiAgICB0aGlzLnJlZ2lzdGVyVG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdSRUdJU1RFUl9TVUNDRVNTRlVMJzpcbiAgICAgICAgdGhpcy5ub3RpZnkuc3VjY2VzcygnU3VjY2VzcycsICdSZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Rvd25sb2FkJyk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1JFUVVFU1RfRVJST1InOlxuICAgICAgICB0aGlzLm5vdGlmeS5lcnJvcignRXJyb3InLCBtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZXJyb3JNc2cgPSBtZXNzYWdlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXRUb0FjdGl2YXRlQWNjb3VudCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5lcnJvck1zZyA9ICcnO1xuICAgIHRoaXMuc3VjY2Vzc01zZyA9ICcnO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FjdGl2ZVJlZ2lzdGVyZWRBY2NvdW50KHZhbHVlKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9BY3RpdmVSZWdpc3RlcmVkQWNjb3VudCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShuZXcgTWVzc2FnZShcbiAgICAgICdSRUdJU1RFUl9VU0VSJywge1xuICAgICAgICB1c2VybmFtZTogU3RyaW5nKHZhbHVlLnVzZXJuYW1lKS50cmltKCksXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmcoTWQ1Lmhhc2hTdHIodmFsdWUucGFzc3dvcmQpKS50cmltKCksXG4gICAgICAgIGVtYWlsOiBTdHJpbmcodGhpcy5yZWdpc3RlckVtYWlsKSxcbiAgICAgICAgZnVsbE5hbWU6IFN0cmluZyh2YWx1ZS5mdWxsTmFtZSkudHJpbSgpLFxuICAgICAgICBjaXR5SWQ6IE51bWJlcih2YWx1ZS5jaXR5SWQpLFxuICAgICAgICBjb3VudHJ5SWQ6IE51bWJlcih2YWx1ZS5jb3VudHJ5SWQpLFxuICAgICAgICBsYXRpdHVkZTogTnVtYmVyKHRoaXMubGF0aXR1ZGUpLFxuICAgICAgICBsb25naXR1ZGU6IE51bWJlcih0aGlzLmxvbmdpdHVkZSksXG4gICAgICAgIHJlZ2lzdGVyVG9rZW46IHRoaXMucmVnaXN0ZXJUb2tlblxuICAgICAgfVxuICAgICkpO1xuICB9XG59XG4iXX0=
