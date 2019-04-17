"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var forms_1 = require('@angular/forms');
var message_service_1 = require('../../services/message.service');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var Message_1 = require('../../models/Message');
var NumberValidator = (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator() {
        _super.apply(this, arguments);
    }
    NumberValidator.minValue = function (min) {
        return function (control) {
            var input = control.value;
            if (input < min) {
                return { 'minValue': { min: min } };
            }
            else {
                return null;
            }
        };
    };
    return NumberValidator;
}(forms_1.Validators));
exports.NumberValidator = NumberValidator;
var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(messageService, fb) {
        this.messageService = messageService;
        this.fb = fb;
        this.success = new core_1.EventEmitter();
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    RegistrationFormComponent.prototype.ngOnChanges = function (changes) {
        this.registerForm = this.fb.group({
            'fullName': ['', forms_1.Validators.required],
            'organization': ['', forms_1.Validators.required],
            'phoneNumber': ['', forms_1.Validators.required],
            'address': ['', forms_1.Validators.required],
            'invitationToken': [this.invitationToken, forms_1.Validators.required],
            'email': [this.invitationEmail, forms_1.Validators.required],
            'isAccept': [true, forms_1.Validators.required],
            'quantity': [1, [
                    forms_1.Validators.required,
                    NumberValidator.minValue(1)
                ]],
            'eventPriceId': [-1, forms_1.Validators.required],
        });
    };
    RegistrationFormComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    RegistrationFormComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'UPDATE_INVITATION_VIA_INVITATION_TOKEN_SUCCESS':
                var verifyCode = message.data.ticket.verifyCode;
                var activeToken = message.data.activeToken;
                this.success.emit({ verifyCode: verifyCode, activeToken: activeToken });
                this.close();
                break;
            case 'REQUEST_ERROR':
                this.modal.close();
                break;
        }
    };
    RegistrationFormComponent.prototype.sendMessageToAcceptInvitation = function () {
        this.isLoading = true;
        this.messageService.sendMessage(new Message_1.Message('UPDATE_INVITATION_VIA_INVITATION_TOKEN', this.registerForm.value));
    };
    RegistrationFormComponent.prototype.close = function () {
        this.modal.close();
    };
    RegistrationFormComponent.prototype.open = function () {
        this.modal.open();
    };
    RegistrationFormComponent.prototype.onCloseModal = function () {
        delete this.isLoading;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RegistrationFormComponent.prototype, "invitationToken", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RegistrationFormComponent.prototype, "invitationEmail", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RegistrationFormComponent.prototype, "success", void 0);
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], RegistrationFormComponent.prototype, "modal", void 0);
    RegistrationFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-registration-form',
            templateUrl: 'registration-form.component.html',
            styleUrls: ['registration-form.component.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, forms_1.FormBuilder])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());
exports.RegistrationFormComponent = RegistrationFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY3Rpdml0eS9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBR08sZUFBZSxDQUFDLENBQUE7QUFDdkIsc0JBSU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUd4QixnQ0FBK0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUVoRSw4QkFBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUM3RCx3QkFBd0Isc0JBQXNCLENBQUMsQ0FBQTtBQUUvQztJQUFxQyxtQ0FBVTtJQUEvQztRQUFxQyw4QkFBVTtJQWMvQyxDQUFDO0lBVlEsd0JBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3pCLE1BQU0sQ0FBQyxVQUFDLE9BQXdCO1lBQzlCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDNUIsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxFQUFDLFVBQVUsRUFBRSxFQUFDLFFBQUcsRUFBQyxFQUFDLENBQUM7WUFDN0IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FkQSxBQWNDLENBZG9DLGtCQUFVLEdBYzlDO0FBZFksdUJBQWUsa0JBYzNCLENBQUE7QUFRRDtJQWFFLG1DQUFvQixjQUE4QixFQUM5QixFQUFlO1FBRGYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFYekIsWUFBTyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQWExRCxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxT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QUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7O2lDQUFBO0lBK0VGLGdDQUFDO0FBQUQsQ0E5RUEsQUE4RUMsSUFBQTtBQTlFWSxpQ0FBeUIsNEJBOEVyQyxDQUFBIiwiZmlsZSI6ImFwcC9hY3Rpdml0eS9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE91dHB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JGbixcbiAgVmFsaWRhdG9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL21vZGVscy9NZXNzYWdlJztcblxuZXhwb3J0IGNsYXNzIE51bWJlclZhbGlkYXRvciBleHRlbmRzIFZhbGlkYXRvcnMge1xuICAvKipcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWluaW11bSB2YWx1ZS5cbiAgICovXG4gIHN0YXRpYyBtaW5WYWx1ZShtaW46IE51bWJlcik6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBjb250cm9sLnZhbHVlO1xuICAgICAgaWYgKGlucHV0IDwgbWluKSB7XG4gICAgICAgIHJldHVybiB7J21pblZhbHVlJzoge21pbn19O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmcmstcmVnaXN0cmF0aW9uLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb25Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGludml0YXRpb25Ub2tlbjogbnVtYmVyO1xuICBASW5wdXQoKSBpbnZpdGF0aW9uRW1haWw6IG51bWJlcjtcbiAgQE91dHB1dCgpIHN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ21vZGFsJykgbW9kYWw6IE1vZGFsQ29tcG9uZW50O1xuXG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xuXG4gIHByaXZhdGUgbWVzc2FnZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwpIHtcbiAgICAvL1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICBtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKVxuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgJ2Z1bGxOYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICdvcmdhbml6YXRpb24nOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgJ3Bob25lTnVtYmVyJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICdhZGRyZXNzJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICdpbnZpdGF0aW9uVG9rZW4nOiBbdGhpcy5pbnZpdGF0aW9uVG9rZW4sIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgJ2VtYWlsJzogW3RoaXMuaW52aXRhdGlvbkVtYWlsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICdpc0FjY2VwdCc6IFt0cnVlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICdxdWFudGl0eSc6IFsxLCBbXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgIE51bWJlclZhbGlkYXRvci5taW5WYWx1ZSgxKVxuICAgICAgXV0sXG4gICAgICAnZXZlbnRQcmljZUlkJzogWy0xLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ1VQREFURV9JTlZJVEFUSU9OX1ZJQV9JTlZJVEFUSU9OX1RPS0VOX1NVQ0NFU1MnOlxuICAgICAgICBsZXQgdmVyaWZ5Q29kZSA9IG1lc3NhZ2UuZGF0YS50aWNrZXQudmVyaWZ5Q29kZTtcbiAgICAgICAgbGV0IGFjdGl2ZVRva2VuID0gbWVzc2FnZS5kYXRhLmFjdGl2ZVRva2VuO1xuICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdCh7dmVyaWZ5Q29kZTogdmVyaWZ5Q29kZSwgYWN0aXZlVG9rZW46IGFjdGl2ZVRva2VufSk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSRVFVRVNUX0VSUk9SJzpcbiAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvQWNjZXB0SW52aXRhdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShuZXcgTWVzc2FnZShcbiAgICAgICdVUERBVEVfSU5WSVRBVElPTl9WSUFfSU5WSVRBVElPTl9UT0tFTicsXG4gICAgICB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZVxuICAgICkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLm1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCgpIHtcbiAgICBkZWxldGUgdGhpcy5pc0xvYWRpbmc7XG4gIH1cbn1cbiJdfQ==
