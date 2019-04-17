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
var message_service_1 = require('../services/message.service');
var Message_1 = require('../models/Message');
var notifications_service_1 = require('../plugins/notifi/notifications.service');
var ReferenceAgreementComponent = (function () {
    function ReferenceAgreementComponent(router, route, messageService, notify) {
        this.router = router;
        this.route = route;
        this.messageService = messageService;
        this.notify = notify;
    }
    ReferenceAgreementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isChecked = false;
        this.routeSub = this.route.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            _this.secretKey = params['key'];
        });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    ReferenceAgreementComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReferenceAgreementComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'PARENT_RESPONSE_TO_TERMS_OF_SERVICE_WITHOUT_BEING_A_USER_SUCCESS':
                this.router.navigate(['home']);
                break;
            case 'REQUEST_ERROR':
                this.notify.error('Error', 'Fail to agree the terms of service');
                break;
        }
    };
    ReferenceAgreementComponent.prototype.submit = function () {
        this.messageService.sendMessage(new Message_1.Message('PARENT_RESPONSE_TO_TERMS_OF_SERVICE_WITHOUT_BEING_A_USER', {
            activeToken: this.token,
            secretKey: this.secretKey
        }));
    };
    ReferenceAgreementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-reference-agreement',
            templateUrl: 'reference-agreement.component.html',
            styleUrls: ['reference-agreement.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, message_service_1.MessageService, notifications_service_1.NotificationsService])
    ], ReferenceAgreementComponent);
    return ReferenceAgreementComponent;
}());
exports.ReferenceAgreementComponent = ReferenceAgreementComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWZlcmVuY2UtYWdyZWVtZW50L3JlZmVyZW5jZS1hZ3JlZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFJekQsZ0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFFN0Qsd0JBQXdCLG1CQUFtQixDQUFDLENBQUE7QUFDNUMsc0NBQXFDLHlDQUF5QyxDQUFDLENBQUE7QUFRL0U7SUFRSSxxQ0FBb0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGNBQThCLEVBQzlCLE1BQTRCO1FBSDVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7SUFFaEQsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuRCxLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNwRCxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQ3pDLENBQUM7SUFDTixDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELG1EQUFhLEdBQWIsVUFBYyxPQUFZO1FBQ3RCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEtBQUssa0VBQWtFO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDaEIsQ0FBQyxNQUFNLENBQUMsQ0FDWCxDQUFDO2dCQUNGLEtBQUssQ0FBQztZQUNWLEtBQUssZUFBZTtnQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLG9DQUFvQyxDQUFDLENBQUM7Z0JBQ2hFLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksaUJBQU8sQ0FDdkMsMERBQTBELEVBQUU7WUFDeEQsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUM1QixDQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNuRCxDQUFDOzttQ0FBQTtJQXFERixrQ0FBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksbUNBQTJCLDhCQW9EdkMsQ0FBQSIsImZpbGUiOiJhcHAvcmVmZXJlbmNlLWFncmVlbWVudC9yZWZlcmVuY2UtYWdyZWVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9NZXNzYWdlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vcGx1Z2lucy9ub3RpZmkvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2Zyay1yZWZlcmVuY2UtYWdyZWVtZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3JlZmVyZW5jZS1hZ3JlZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydyZWZlcmVuY2UtYWdyZWVtZW50LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlQWdyZWVtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBpc0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7XG4gICAgcHVibGljIHNlY3JldEtleTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByb3V0ZVN1YjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgbWVzc2FnZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmeTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnRva2VuID0gcGFyYW1zWyd0b2tlbiddO1xuICAgICAgICAgICAgdGhpcy5zZWNyZXRLZXkgPSBwYXJhbXNbJ2tleSddO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShcbiAgICAgICAgICAgIG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnUEFSRU5UX1JFU1BPTlNFX1RPX1RFUk1TX09GX1NFUlZJQ0VfV0lUSE9VVF9CRUlOR19BX1VTRVJfU1VDQ0VTUyc6XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgICAgIFsnaG9tZSddXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JFUVVFU1RfRVJST1InOlxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVycm9yKCdFcnJvcicsJ0ZhaWwgdG8gYWdyZWUgdGhlIHRlcm1zIG9mIHNlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShuZXcgTWVzc2FnZShcbiAgICAgICAgICAgICdQQVJFTlRfUkVTUE9OU0VfVE9fVEVSTVNfT0ZfU0VSVklDRV9XSVRIT1VUX0JFSU5HX0FfVVNFUicsIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUb2tlbjogdGhpcy50b2tlbixcbiAgICAgICAgICAgICAgICBzZWNyZXRLZXk6IHRoaXMuc2VjcmV0S2V5XG4gICAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgIH1cbn1cbiJdfQ==
