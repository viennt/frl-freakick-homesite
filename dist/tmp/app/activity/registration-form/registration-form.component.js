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
            template: "<modal #modal [animation]=\"false\"        (onClose)=\"onCloseModal($event)\"        (onDismiss)=\"onCloseModal($event)\">     <modal-header>         <h4 class=\"text-center no-margin\">REGISTRATION FORM</h4>     </modal-header>     <modal-body>         <form *ngIf=\"!!registerForm\" class=\"no-margin\"               [formGroup]=\"registerForm\" novalidate>             <div class=\"form-body\">                 <div class=\"form-group\"                      [class.has-error]=\"!registerForm.controls['fullName'].valid && registerForm.controls['fullName'].dirty\">                     <label for=\"fullName\">Name</label>                     <input id=\"fullName\" name=\"fullName\" class=\"form-control\"                            [formControl]=\"registerForm.controls['fullName']\">                     <span *ngIf=\"!registerForm.controls['fullName'].valid && registerForm.controls['fullName'].dirty\"                           class=\"help-block\">Please fill your name</span>                 </div>                 <div class=\"form-group\"                      [class.has-error]=\"!registerForm.controls['organization'].valid && registerForm.controls['organization'].dirty\">                     <label for=\"organization\">Organization / Company (Optional)</label>                     <input id=\"organization\" name=\"organization\" class=\"form-control\"                            [formControl]=\"registerForm.controls['organization']\">                     <span *ngIf=\"!registerForm.controls['organization'].valid && registerForm.controls['organization'].dirty\"                           class=\"help-block\">Please fill your organization/company</span>                 </div>                 <div class=\"form-group\"                      [class.has-error]=\"!registerForm.controls['phoneNumber'].valid && registerForm.controls['phoneNumber'].dirty\">                     <label for=\"phone\">Phone Number</label>                     <input id=\"phone\" name=\"phone\" class=\"form-control\"                            [formControl]=\"registerForm.controls['phoneNumber']\">                     <span *ngIf=\"!registerForm.controls['phoneNumber'].valid && registerForm.controls['phoneNumber'].dirty\"                           class=\"help-block\">Please fill your phone</span>                 </div>                 <div class=\"form-group\"                      [class.has-error]=\"!registerForm.controls['address'].valid && registerForm.controls['address'].dirty\">                     <label for=\"address\">Address</label>                     <input id=\"address\" name=\"address\" class=\"form-control\"                            [formControl]=\"registerForm.controls['address']\">                     <span *ngIf=\"!registerForm.controls['address'].valid && registerForm.controls['address'].dirty\"                           class=\"help-block\">Please fill your address</span>                 </div>                 <div class=\"form-group\"                      [class.has-error]=\"!registerForm.controls['quantity'].valid && registerForm.controls['quantity'].dirty\">                     <label for=\"quantity\">Quantity</label>                     <input id=\"quantity\" name=\"quantity\" type=\"number\" class=\"form-control\"                            [formControl]=\"registerForm.controls['quantity']\">                     <span *ngIf=\"!registerForm.controls['quantity'].valid && registerForm.controls['quantity'].dirty\"                           class=\"help-block\">Please fill your quantity</span>                 </div>                 <p>                     By clicking on Register, you agree to Freakick's                     <a href=\"/legal/terms\" target=\"_blank\">terms & conditions</a> and                     <a href=\"/about/privacy\" target=\"_blank\">privacy policy</a>.                 </p>                 <button class=\"btn input-submit\"                         [disabled]=\"!registerForm.valid || isLoading\"                         (click)=\"sendMessageToAcceptInvitation()\">                     <i *ngIf=\"isLoading\" class=\"fa fa-spin fa-spinner\"></i> Register                 </button>                 <a class=\"btn btn-link\" (click)=\"modal.close()\">Cancel</a>             </div>         </form>     </modal-body> </modal>",
            styles: ["modal-body /deep/ .modal-body{background:#f1f1f1}form textarea,input{border:0;outline:0;padding:10px 20px;border-radius:8px;width:100%;box-shadow:0 1px 1px rgba(0,0,0,.1);resize:none}.input-submit{font-size:15px;letter-spacing:.25vmin;border-radius:5px;padding:10px 20px;text-decoration:none;background:#e74c3c;color:#fcfcfc}.input-submit:hover{box-shadow:0 1px 1px 1px hsla(0,0%,67%,.6)}"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, forms_1.FormBuilder])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());
exports.RegistrationFormComponent = RegistrationFormComponent;
