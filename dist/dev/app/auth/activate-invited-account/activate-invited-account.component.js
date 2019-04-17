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
var User_1 = require('../../models/User');
var Message_1 = require('../../models/Message');
var md5_1 = require('ts-md5/dist/md5');
var ActivateInvitedAccountComponent = (function () {
    function ActivateInvitedAccountComponent(messageService, locationService, route, router) {
        this.messageService = messageService;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
    }
    ActivateInvitedAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.locationService.getCurrentPosition(function (position) {
            if (position) {
                _this.latitude = position.location.lat;
                _this.longitude = position.location.lng;
            }
        });
    };
    ActivateInvitedAccountComponent.prototype.handleRoute = function (params) {
        this.activeToken = params['id'];
        this.messageService.sendMessage(new Message_1.Message('GET_USER_INVITED_BY_EMAIL', { activeToken: this.activeToken }));
    };
    ActivateInvitedAccountComponent.prototype.handleMessage = function (message) {
        var _this = this;
        this.isLoading = false;
        switch (message.messageType) {
            case 'GET_USER_INVITED_BY_EMAIL_SUCCESS':
                this.user = new User_1.User(message.data.user);
                break;
            case 'REGISTER_USER_FROM_INVITATION_EMAIL_SUCCESS':
                this.successMsg = 'Activated successfully.';
                setTimeout(function () {
                    _this.router.navigateByUrl('/download');
                }, 1000);
                break;
            case 'REQUEST_ERROR':
                this.errorMsg = message.data.message;
                break;
        }
    };
    ActivateInvitedAccountComponent.prototype.onSubmitToActivateAccount = function (value) {
        this.errorMsg = '';
        this.successMsg = '';
        this.sendMessageToActiveInvitedAccount(value);
    };
    ActivateInvitedAccountComponent.prototype.sendMessageToActiveInvitedAccount = function (value) {
        this.messageService.sendMessage(new Message_1.Message('REGISTER_USER_FROM_INVITATION_EMAIL', {
            username: String(value.username).trim(),
            password: String(md5_1.Md5.hashStr(value.password)).trim(),
            fullName: String(value.fullName).trim(),
            cityId: Number(value.cityId),
            countryId: Number(value.countryId),
            latitude: Number(this.latitude),
            longitude: Number(this.longitude),
            activeToken: this.activeToken
        }));
    };
    ActivateInvitedAccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-activate-invited-account',
            template: "\n      <frk-activate-form [isLoading]=\"isLoading\"\n                         (submit)=\"onSubmitToActivateAccount($event)\">\n      </frk-activate-form>\n  "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, location_service_1.LocationService, router_1.ActivatedRoute, router_2.Router])
    ], ActivateInvitedAccountComponent);
    return ActivateInvitedAccountComponent;
}());
exports.ActivateInvitedAccountComponent = ActivateInvitedAccountComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2FjdGl2YXRlLWludml0ZWQtYWNjb3VudC9hY3RpdmF0ZS1pbnZpdGVkLWFjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUQsZUFBZSxDQUFDLENBQUE7QUFDakUsdUJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFLekMsZ0NBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFDaEUsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFHbEUscUJBQXFCLG1CQUFtQixDQUFDLENBQUE7QUFDekMsd0JBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFHL0Msb0JBQW9CLGlCQUFpQixDQUFDLENBQUE7QUFXdEM7SUFhRSx5Q0FBb0IsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYztRQUhkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFdkMsa0RBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsVUFBQyxRQUFhO1lBQ3BELEVBQUUsQ0FBQyxDQUFDLFFB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aXRlZC1hY2NvdW50L2FjdGl2YXRlLWludml0ZWQtYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG4vKiogSW1wb3J0IHNlcnZpY2VzICovXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlJztcblxuLyoqIEltcG9ydCBtb2RlbHMgKi9cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL01lc3NhZ2UnO1xuXG4vKiogSW1wb3J0IG90aGVycyAqL1xuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLWFjdGl2YXRlLWludml0ZWQtYWNjb3VudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZnJrLWFjdGl2YXRlLWZvcm0gW2lzTG9hZGluZ109XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChzdWJtaXQpPVwib25TdWJtaXRUb0FjdGl2YXRlQWNjb3VudCgkZXZlbnQpXCI+XG4gICAgICA8L2Zyay1hY3RpdmF0ZS1mb3JtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlSW52aXRlZEFjY291bnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdXNlcjogVXNlcjtcblxuICBwdWJsaWMgbGF0aXR1ZGU6IG51bWJlcjtcbiAgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyO1xuICBwdWJsaWMgYWN0aXZlVG9rZW46IHN0cmluZztcblxuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuICBwdWJsaWMgZXJyb3JNc2c6IHN0cmluZztcbiAgcHVibGljIHN1Y2Nlc3NNc2c6IHN0cmluZztcblxuICBwcml2YXRlIHJvdXRlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlOiBMb2NhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlU3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmhhbmRsZVJvdXRlKHBhcmFtcykpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB0aGlzLmxvY2F0aW9uU2VydmljZS5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uOiBhbnkpID0+IHtcbiAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmxhdGl0dWRlID0gcG9zaXRpb24ubG9jYXRpb24ubGF0O1xuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHBvc2l0aW9uLmxvY2F0aW9uLmxuZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJvdXRlKHBhcmFtczogYW55KSB7XG4gICAgdGhpcy5hY3RpdmVUb2tlbiA9IHBhcmFtc1snaWQnXTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgJ0dFVF9VU0VSX0lOVklURURfQllfRU1BSUwnLCB7YWN0aXZlVG9rZW46IHRoaXMuYWN0aXZlVG9rZW59XG4gICAgKSk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdHRVRfVVNFUl9JTlZJVEVEX0JZX0VNQUlMX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihtZXNzYWdlLmRhdGEudXNlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUkVHSVNURVJfVVNFUl9GUk9NX0lOVklUQVRJT05fRU1BSUxfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuc3VjY2Vzc01zZyA9ICdBY3RpdmF0ZWQgc3VjY2Vzc2Z1bGx5Lic7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9kb3dubG9hZCcpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSRVFVRVNUX0VSUk9SJzpcbiAgICAgICAgdGhpcy5lcnJvck1zZyA9IG1lc3NhZ2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdFRvQWN0aXZhdGVBY2NvdW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmVycm9yTXNnID0gJyc7XG4gICAgdGhpcy5zdWNjZXNzTXNnID0gJyc7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvQWN0aXZlSW52aXRlZEFjY291bnQodmFsdWUpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0FjdGl2ZUludml0ZWRBY2NvdW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgJ1JFR0lTVEVSX1VTRVJfRlJPTV9JTlZJVEFUSU9OX0VNQUlMJywge1xuICAgICAgICB1c2VybmFtZTogU3RyaW5nKHZhbHVlLnVzZXJuYW1lKS50cmltKCksXG4gICAgICAgIHBhc3N3b3JkOiBTdHJpbmcoTWQ1Lmhhc2hTdHIodmFsdWUucGFzc3dvcmQpKS50cmltKCksXG4gICAgICAgIGZ1bGxOYW1lOiBTdHJpbmcodmFsdWUuZnVsbE5hbWUpLnRyaW0oKSxcbiAgICAgICAgY2l0eUlkOiBOdW1iZXIodmFsdWUuY2l0eUlkKSxcbiAgICAgICAgY291bnRyeUlkOiBOdW1iZXIodmFsdWUuY291bnRyeUlkKSxcbiAgICAgICAgbGF0aXR1ZGU6IE51bWJlcih0aGlzLmxhdGl0dWRlKSxcbiAgICAgICAgbG9uZ2l0dWRlOiBOdW1iZXIodGhpcy5sb25naXR1ZGUpLFxuICAgICAgICBhY3RpdmVUb2tlbjogdGhpcy5hY3RpdmVUb2tlblxuICAgICAgfVxuICAgICkpO1xuICB9XG59XG4iXX0=
