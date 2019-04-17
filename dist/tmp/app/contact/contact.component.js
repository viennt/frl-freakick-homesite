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
            template: "<div class=\"ct-contact\">     <sd-navbar class=\"contact\"></sd-navbar>     <section>         <div class=\"col-xs-12\">             <div class=\"ct-body\">                 <div class=\"row\">                     <div class=\"ct-background-header\">                         <div class=\"col-sm-6 padding-0\">                             <div class=\"section-1\">                                 <h2>Contact us</h2>                             </div>                         </div>                         <div class=\"col-sm-6 padding-0 hidden-xs\">                             <div class=\"section-2\">                                 <img alt=\"Brand\" src=\"./assets/images/logo/freakick_logo_light.png\">                                 <div class=\"uil-ring-css\"><div></div></div>                             </div>                             <!-- <div class=\"section-5\">                                 <i class=\"fa fa-paper-plane-o\"></i>                             </div> -->                         </div>                     </div>                 </div>                 <div class=\"row\">                     <div>                         <div class=\"col-md-5 hidden-xs\">                             <div class=\"row\">                                 <div class=\"section-3\">                                     <h3>How can we help?</h3>                                 </div>                             </div>                         </div>                         <div class=\"col-md-7\">                             <div class=\"row\">                                 <div class=\"section-4\">                                     <form #contactForm=\"ngForm\" novalidate>                                         <div class=\"col-md-8\">                                             <div class=\"ct-header-form\">                                                 <h4>Message us</h4>                                             </div>                                             <div class=\"form-group padding-top-bot-5\" [class.has-error]=\"!name.valid && name.dirty\">                                                 <input id=\"input-name\" placeholder=\"Name\" class=\"form-control input-lg\"                                                         name=\"name\" required minlength=\"1\" #name=\"ngModel\"                                                         [(ngModel)]=\"contactName\">                                                 <span *ngIf=\"!name.valid && name.dirty\" class=\"help-block\">Please fill your name</span>                                             </div>                                             <div class=\"form-group padding-top-bot-5\" [class.has-error]=\"!email.valid && email.dirty\">                                                 <input type=\"email\" id=\"input-email\"                                                         name=\"email\" required minlength=\"1\" #email=\"ngModel\"                                                         placeholder=\"Email address\" class=\"form-control input-lg\"                                                         pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"                                                         [(ngModel)]=\"contactEmail\">                                                 <span *ngIf=\"!email.valid && email.dirty\" class=\"help-block\">Please fill valid email</span>                                             </div>                                             <div class=\"form-group padding-top-bot-5\" [class.has-error]=\"!message.valid && message.dirty\">                                                 <textarea name=\"message\" type=\"text\" placeholder=\"Message\"                                                             id=\"input-message\" class=\"form-control input-lg\"                                                             required rows=\"3\" #message=\"ngModel\"                                                             [(ngModel)]=\"contactMessage\"></textarea>                                                 <span *ngIf=\"!message.valid && message.dirty\" class=\"help-block\">Message is required</span>                                             </div>                                             <div class=\"ct-button\">                                                 <button id=\"input-submit\" class=\"btn btn-circle-o\"                                                     (click)=\"sendMessageToSubmitContactInfo()\"                                                     [disabled]=\"contactForm.invalid || isLoading\">                                                     <i *ngIf=\"!isLoading\" class=\"fa fa-send\"></i>                                                     <i *ngIf=\"isLoading\" class=\"fa fa-spin fa-spinner\"></i> Message @FreakickSupport                                                 </button>                                             </div>                                         </div>                                     </form>                                 </div>                             </div>                         </div>                     </div>                 </div>             </div>         </div>     </section>     <sd-new-footer></sd-new-footer> </div> <frk-notification-success-popup #successContactPopup (success)=\"success()\"></frk-notification-success-popup>",
            styles: [".padding-0{padding:0}.padding-top-bot-5{padding-top:5px;padding-bottom:5px}.ct-contact{min-height:100vh}.ct-body{position:relative;z-index:0;min-height:calc(100vh - 45px)}.ct-background-header{background-color:#00aeef;min-height:300px}.ct-background-header>div{height:300px}.section-1{margin:0;position:absolute;bottom:50px;left:0;right:0}.section-2{min-height:300px;margin:0;position:relative;text-align:right;overflow:hidden;opacity:.6}.section-2 img{max-width:200px;position:absolute;bottom:-30px;right:-50px}.section-1>h2{margin:0;color:#fff;font-weight:700;text-align:center;font-size:4rem}.section-3{text-align:center;position:relative}.section-3>h3{font-weight:700;line-height:1.3;padding:50px}.section-4{position:relative;margin-top:60px}.section-4>form{margin:5px}.section-4>form>div>div>button{background-color:#00aeef;color:#fff;padding-top:5px;padding-bottom:5px}.section-4>form>div>div>textarea{resize:vertical}.section-5{overflow:hidden;position:absolute;bottom:-15px;right:0}.section-5>i{-webkit-transform:rotate(25deg);transform:rotate(25deg);color:#fff;font-size:20vw;margin-right:100px}.uil-ring-css{background:none;position:absolute;width:200px;height:200px;margin:auto;bottom:-80px;right:-185px;-webkit-transform:rotate(150deg);transform:rotate(150deg)}.uil-ring-css>div{position:absolute;display:block;width:350px;height:350px;top:20px;left:20px;border-radius:270px;box-shadow:0 6px 0 0 #fff}.ct-header-form>h4{text-align:left;font-weight:700;color:#aab8c2}.ct-button{padding-top:5px;padding-bottom:20px}@media (max-width:768px){.ct-button{text-align:center}.section-3>h3{padding:30px}.section-4{margin-top:30px}.section-1>h2{font-size:3rem}}@media (max-width:640px){.ct-background-header{min-height:200px}.ct-background-header>div{height:200px}.section-1{bottom:30px}.section-1>h2{font-size:3rem}}"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
