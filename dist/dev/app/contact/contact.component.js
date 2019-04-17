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
var message_service_1 = require('../services/message.service');
var Message_1 = require('../models/Message');
var notification_success_popup_component_1 = require('./notification-success-popup/notification-success-popup.component');
var router_1 = require('@angular/router');
var ContactComponent = (function () {
    function ContactComponent(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = false;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    ContactComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
        delete this.contactMessage;
        delete this.contactEmail;
        delete this.contactName;
    };
    ContactComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'SEND_CONTACT_EMAIL_SUCCESS':
                this.isLoading = false;
                this.successContactPopup.open();
                break;
        }
    };
    ContactComponent.prototype.sendMessageToSubmitContactInfo = function () {
        if (!this.contactName || !this.contactEmail || !this.contactMessage)
            return;
        this.isLoading = true;
        this.messageService.sendMessage(new Message_1.Message('SEND_CONTACT_EMAIL', { name: this.contactName, email: this.contactEmail, content: this.contactMessage }));
    };
    ContactComponent.prototype.success = function () {
        delete this.contactMessage;
    };
    __decorate([
        core_1.ViewChild('successContactPopup'), 
        __metadata('design:type', notification_success_popup_component_1.NotificationSuccessPopupComponent)
    ], ContactComponent.prototype, "successContactPopup", void 0);
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-contact',
            templateUrl: 'contact.component.html',
            styleUrls: ["contact.component.css"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFFeEUsZ0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0Qsd0JBQXdCLG1CQUFtQixDQUFDLENBQUE7QUFDNUMscURBQWtELG1FQUFtRSxDQUFDLENBQUE7QUFDdEgsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFRekM7SUFTSSwwQkFBb0IsY0FBOEIsRUFDOUIsTUFBYztRQURkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRWxDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDcEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUN6QyxDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3Q0FBYSxHQUFiLFVBQWMsT0FBWTtRQUN0QixNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFLLDRCQUE0QjtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEMsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFFRCx5REFBOEIsR0FBOUI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGlCQUFPLENBQ3ZDLG9CQUFvQixFQUNwQixFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFDLENBQ25GLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUEvQ0Q7UUFBQyxnQkFBUyxDQUFDLHFCQUFxQixDQUFDOztpRUFBQTtJQVByQztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOzt3QkFBQTtJQWtERix1QkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksd0JBQWdCLG1CQWlENUIsQ0FBQSIsImZpbGUiOiJhcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL01lc3NhZ2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU3VjY2Vzc1BvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24tc3VjY2Vzcy1wb3B1cC9ub3RpZmljYXRpb24tc3VjY2Vzcy1wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2Zyay1jb250YWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW2Bjb250YWN0LmNvbXBvbmVudC5jc3NgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBWaWV3Q2hpbGQoJ3N1Y2Nlc3NDb250YWN0UG9wdXAnKSBzdWNjZXNzQ29udGFjdFBvcHVwOiBOb3RpZmljYXRpb25TdWNjZXNzUG9wdXBDb21wb25lbnQ7XG5cbiAgICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIHB1YmxpYyBjb250YWN0TmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjb250YWN0RW1haWw6IHN0cmluZztcbiAgICBwdWJsaWMgY29udGFjdE1lc3NhZ2U6IHN0cmluZztcbiAgICBwcml2YXRlIG1lc3NhZ2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICBtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGFjdE1lc3NhZ2U7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRhY3RFbWFpbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGFjdE5hbWU7XG4gICAgfVxuXG4gICAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTRU5EX0NPTlRBQ1RfRU1BSUxfU1VDQ0VTUyc6XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDb250YWN0UG9wdXAub3BlbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZVRvU3VibWl0Q29udGFjdEluZm8oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWN0TmFtZSB8fCAhdGhpcy5jb250YWN0RW1haWwgfHwgIXRoaXMuY29udGFjdE1lc3NhZ2UpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgICAgICAgJ1NFTkRfQ09OVEFDVF9FTUFJTCcsXG4gICAgICAgICAgICB7bmFtZTogdGhpcy5jb250YWN0TmFtZSwgZW1haWw6IHRoaXMuY29udGFjdEVtYWlsLCBjb250ZW50OiB0aGlzLmNvbnRhY3RNZXNzYWdlfVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBzdWNjZXNzKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5jb250YWN0TWVzc2FnZTtcbiAgICB9XG59XG4iXX0=
