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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var Message_1 = require('../../models/Message');
var ContactFormComponent = (function () {
    function ContactFormComponent(messageService) {
        this.messageService = messageService;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    ContactFormComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ContactFormComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'SEND_CONTACT_EMAIL_SUCCESS':
                this.modal.close();
                break;
        }
    };
    ContactFormComponent.prototype.sendMessageToSubmitContactInfo = function () {
        if (!this.contactName || !this.contactEmail || !this.contactMessage)
            return;
        this.isLoading = true;
        this.messageService.sendMessage(new Message_1.Message('SEND_CONTACT_EMAIL', { name: this.contactName, email: this.contactEmail, content: this.contactMessage }));
    };
    ContactFormComponent.prototype.close = function () {
        this.modal.close();
    };
    ContactFormComponent.prototype.open = function () {
        this.modal.open();
    };
    ContactFormComponent.prototype.onCloseModal = function () {
        this.isLoading = undefined;
        this.contactName = undefined;
        this.contactEmail = undefined;
        this.contactMessage = undefined;
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], ContactFormComponent.prototype, "modal", void 0);
    ContactFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-contact-form',
            templateUrl: 'contact-form.component.html',
            styleUrls: ['contact-form.component.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFFeEUsZ0NBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFFaEUsOEJBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0Qsd0JBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFTL0M7SUFXRSw4QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRWxELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDdEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsT0FBWTtRQUN4QixNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLDRCQUE0QjtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkIsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCw2REFBOEIsR0FBOUI7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGlCQUFPLENBQ3pDLG9CQUFvQixFQUNwQixFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFDLENBQ2pGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsbUNBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDJDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBdEREO1FBQUMsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7O3VEQUFBO0lBUHJCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7NEJBQUE7SUF5REYsMkJBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLDRCQUFvQix1QkF3RGhDLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL01lc3NhZ2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmcmstY29udGFjdC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICdjb250YWN0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnbW9kYWwnKSBtb2RhbDogTW9kYWxDb21wb25lbnQ7XG5cbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICBwdWJsaWMgY29udGFjdE5hbWU6IHN0cmluZztcbiAgcHVibGljIGNvbnRhY3RFbWFpbDogc3RyaW5nO1xuICBwdWJsaWMgY29udGFjdE1lc3NhZ2U6IHN0cmluZztcblxuICBwcml2YXRlIG1lc3NhZ2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICAgIC8vXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShcbiAgICAgIG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ1NFTkRfQ09OVEFDVF9FTUFJTF9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvU3VibWl0Q29udGFjdEluZm8oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnRhY3ROYW1lIHx8ICF0aGlzLmNvbnRhY3RFbWFpbCB8fCAhdGhpcy5jb250YWN0TWVzc2FnZSkgcmV0dXJuO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgJ1NFTkRfQ09OVEFDVF9FTUFJTCcsXG4gICAgICB7bmFtZTogdGhpcy5jb250YWN0TmFtZSwgZW1haWw6IHRoaXMuY29udGFjdEVtYWlsLCBjb250ZW50OiB0aGlzLmNvbnRhY3RNZXNzYWdlfVxuICAgICkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLm1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRhY3ROYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29udGFjdEVtYWlsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29udGFjdE1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==
