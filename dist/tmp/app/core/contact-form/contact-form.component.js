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
            template: "<modal #modal [animation]=\"false\"        (onClose)=\"onCloseModal($event)\"        (onDismiss)=\"onCloseModal($event)\">     <modal-header>         <h4 class=\"text-center no-margin\">CONTACT US</h4>     </modal-header>     <modal-body>         <form class=\"no-margin\" #contactForm=\"ngForm\">             <div class=\"form-body\">                 <div class=\"form-group\" [class.has-error]=\"!name.valid && name.dirty\">                     <input id=\"input-name\" placeholder=\"Name\" class=\"form-control\"                            name=\"name\" required minlength=\"1\" #name=\"ngModel\"                            [(ngModel)]=\"contactName\">                     <span *ngIf=\"!name.valid && name.dirty\" class=\"help-block\">Please fill your name</span>                 </div>                 <div class=\"form-group\" [class.has-error]=\"!email.valid && email.dirty\">                     <input type=\"email\" id=\"input-email\"                            name=\"email\" required minlength=\"1\" #email=\"ngModel\"                            placeholder=\"Email address\" class=\"form-control\"                            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"                            [(ngModel)]=\"contactEmail\">                     <span *ngIf=\"!email.valid && email.dirty\" class=\"help-block\">Please fill valid email</span>                 </div>                 <div class=\"form-group\" [class.has-error]=\"!message.valid && message.dirty\">                     <textarea name=\"message\" type=\"text\" placeholder=\"Message\"                               id=\"input-message\" class=\"form-control\"                               required minlength=\"1\" #message=\"ngModel\"                               [(ngModel)]=\"contactMessage\"></textarea>                     <span *ngIf=\"!message.valid && message.dirty\" class=\"help-block\">Message is required</span>                 </div>                 <button id=\"input-submit\"                        (click)=\"sendMessageToSubmitContactInfo()\">                     <i *ngIf=\"isLoading\" class=\"fa fa-spin fa-spinner\"></i> Submit                 </button>             </div>         </form>     </modal-body> </modal>",
            styles: ["modal-body /deep/ .modal-body{background:#f1f1f1}form input,form textarea{border:0;outline:0;padding:10px 20px;border-radius:8px;width:100%;margin-top:1em;box-shadow:0 1px 1px rgba(0,0,0,.1);resize:none}form #input-submit{font-size:15px;letter-spacing:.25vmin;border-radius:5px;padding:10px 20px;text-decoration:none;background:#106cc8;color:#fcfcfc}form #input-submit:hover{box-shadow:0 1px 1px 1px hsla(0,0%,67%,.6)}"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
