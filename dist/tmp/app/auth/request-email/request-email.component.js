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
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var authentication_service_1 = require('../../services/authentication.service');
var message_service_1 = require('../../services/message.service');
var Message_1 = require('../../models/Message');
var RequestEmailComponent = (function () {
    function RequestEmailComponent(authService, notifyService, messageService) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.messageService = messageService;
    }
    RequestEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSentEmail = false;
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    RequestEmailComponent.prototype.ngOnDestroy = function () {
        delete this.userEmail;
    };
    RequestEmailComponent.prototype.login = function () {
        if (this.isLoading)
            return;
        if (!this.userEmail) {
            this.notifyService.error('Error', 'Please enter your email.');
            return;
        }
        this.messageService.sendMessage(new Message_1.Message('SEND_FORGOT_PASSWORD_REQUEST', new SendEmailData(this.userEmail)));
    };
    RequestEmailComponent.prototype.handleMessage = function (message) {
        this.isLoading = false;
        switch (message.messageType) {
            case 'SEND_FORGOT_PASSWORD_REQUEST_SUCCESS':
                this.isLoading = false;
                this.isSentEmail = true;
                break;
            case 'REQUEST_ERROR':
                this.notifyService.error('Error', message.data.message);
                this.isLoading = false;
                break;
            case 'REQUEST_INPUT_ERROR':
                this.notifyService.error('Error', message.data);
                this.isLoading = false;
                break;
        }
    };
    RequestEmailComponent.prototype.onClickToBackForm = function () {
        this.isSentEmail = false;
    };
    RequestEmailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-request-email',
            template: "<div class=\"login\">     <div class=\"user-login-5\">         <div class=\"row bs-reset\">             <div class=\"col-md-12 login-container bs-reset mt-login-5-bsfix bg-white bg-font-white\">                 <div class=\"login-form-step height-100\">                     <div class=\"login-form-step-center height-100\">                         <div class=\"form height-100 register-form\">                             <div class=\"form-body register-form-center\">                                 <form class=\"login-form\" #resetPasswordForm=\"ngForm\" [class.message]=\"isSentEmail\">                                     <div *ngIf=\"!isSentEmail\">                                         <div class=\"font-dark margin-bottom-25\">                                             <div class=\"logo text-center margin-bottom-25\">                                                 <a [routerLink]=\"['/']\">                                                     <img src=\"./assets/images/logo/freakick_logo_dark.png\" alt=\"\" width=\"100\"/> </a>                                             </div>                                             <div class=\"h2 text-center\">Forgot your password?</div>                                             <div class=\"h4 thin text-center\">Enter your email address that you used to register.</div>                                             <div class=\"h4 thin text-center\">We'll send you an email with a link to reset your password.</div>                                         </div>                                         <hr>                                         <div class=\"font-dark form-group\"                                             [class.has-error]=\"!emailModel.valid && emailModel.dirty\">                                             <input #emailModel=\"ngModel\" name=\"email\" required maxlength=\"55\"                                                     autocomplete=\"off\" type=\"email\" placeholder=\"Email (*)\"                                                     class=\"form-control form-control-solid placeholder-no-fix input-lg\"                                                     pattern=\"^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$\"                                                     [(ngModel)]=\"userEmail\"/>                                             <span *ngIf=\"!emailModel.valid && emailModel.dirty\"                                                     class=\"help-block\">Invalid email</span>                                         </div>                                         <div class=\"font-dark row\">                                             <div class=\"col-xs-4\">                                                 <button class=\"btn btn-block btn-circle blue bold\"                                                         [disabled]=\"!resetPasswordForm.form.valid || isLoading\"                                                         (click)=\"login()\">                                                     <span>Send</span>                                                     <i *ngIf=\"isLoading\" class=\"fa fa-circle-o-notch fa-spin\"></i>                                                 </button>                                             </div>                                             <div class=\"col-xs-8 text-right\">                                                 <div class=\"btn\">                                                     <a [routerLink]=\"['/', 'login']\">Back to Login Page</a>                                                 </div>                                             </div>                                         </div>                                         <hr>                                         <div class=\"col-xs-12 text-center\">                                             <div class=\"btn\">                                                 <span>If you still need help, contact</span>                                                 <a (click)=\"contactForm.open()\">Freakick Support</a>                                             </div>                                         </div>                                     </div>                                     <div *ngIf=\"isSentEmail\">                                         <div class=\"font-dark margin-bottom-25\">                                             <div class=\"logo text-center margin-bottom-25\">                                                 <a [routerLink]=\"['/']\">                                                     <img src=\"./assets/images/logo/freakick_logo_dark.png\" alt=\"\" width=\"100\"/> </a>                                             </div>                                             <div class=\"h2 text-center\">Received!</div>                                             <div class=\"h4 thin text-center\">                                                 We just sent a message to the email you provided with a link to reset your password.                                                  Please check your inbox and follow the instructions in the email.                                             </div>                                         </div>                                         <hr>                                         <div class=\"col-xs-12 text-center\">                                             <div class=\"btn\">                                                 <a (click)=\"onClickToBackForm()\">I didn't receive the email</a>                                             </div>                                         </div>                                     </div>                                 </form>                             </div>                         </div>                     </div>                 </div>             </div>         </div>     </div> </div>  <frk-contact-form #contactForm></frk-contact-form>",
            styles: ["input::-webkit-input-placeholder{opacity:1;transition:opacity .3s ease-in-out;font-weight:300}input:-moz-placeholder,input::-moz-placeholder{opacity:1;transition:opacity .3s ease-in-out;font-weight:300}input:-ms-input-placeholder{opacity:1;transition:opacity .3s ease-in-out;font-weight:300}input:focus::-webkit-input-placeholder{opacity:0;transition:opacity .3s ease-in-out}input:focus:-moz-placeholder,input:focus::-moz-placeholder{opacity:0;transition:opacity .3s ease-in-out}input:focus:-ms-input-placeholder{opacity:0;transition:opacity .3s ease-in-out}.btn{height:auto}.user-login-5{min-height:100vh}.user-login-5 .bs-reset{margin:0;padding:0}.user-login-5 .text-right{text-align:right}.user-login-5 .login-bg{background-position:50%;background-size:cover;background-repeat:no-repeat;min-height:calc(100vh - 50px)}.user-login-5 .login-logo{position:absolute;top:25px;left:50px}.user-login-5 .login-logo.login-6{top:80px;left:80px}.user-login-5 .login-container{position:relative;height:100vh;overflow-y:auto}.user-login-5 .login-container .login-copyright,.user-login-5 .login-container .login-social,.user-login-5 .login-container>.login-content{padding:0}.user-login-5 .login-container>.login-content{margin-top:10px}.user-login-5 .login-container>.login-content>h1{font-size:30px;font-weight:300;color:#4e5a64;padding:20px}.user-login-5 .login-container>.login-content p{color:#a0a9b4;font-size:15px;line-height:22px}.user-login-5 .login-container>.login-content>.login-form{margin-top:80px;color:#a4aab2;font-size:13px}.user-login-5 .login-container>.login-content>.login-form .form-control{width:100%;padding:10px 0;border:#a0a9b4;border-bottom:1px solid;color:#868e97;font-size:14px;margin-bottom:30px}.user-login-5 .login-container>.login-content>.login-form .form-control:focus{outline:0}.user-login-5 .login-container>.login-content>.login-form .forgot-password,.user-login-5 .login-container>.login-content>.login-form .login-button{display:inline-block}.user-login-5 .login-container>.login-content>.login-form .rem-password{margin-top:10px}.user-login-5 .login-container>.login-content>.login-form .rem-password>p{margin:0}.user-login-5 .login-container>.login-content>.login-form .rem-password>.rem-checkbox{border-color:#a4aab2}.user-login-5 .login-container>.login-content>.login-form .forgot-password{margin-right:1em}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a{color:#a4aab2}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a:hover{color:#337ab7;text-decoration:none}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a:focus{color:#a4aab2;text-decoration:none}.user-login-5 .login-container>.login-footer{position:absolute;bottom:0;width:100%;padding-bottom:10px}.user-login-5 .login-container>.login-footer .login-social{padding-right:0}.user-login-5 .login-container>.login-footer .login-social li{display:inline-block;list-style:none;margin-right:1em}.user-login-5 .login-container>.login-footer .login-social a{color:#a9b5be;font-size:18px}.user-login-5 .login-container>.login-footer .login-social a:hover{color:#337ab7;text-decoration:none}.user-login-5 .login-container>.login-footer .login-social a:focus{color:#a9b5be}.user-login-5 .login-container>.login-footer .login-copyright{padding-left:0;margin-top:6px}.user-login-5 .login-container>.login-footer .login-copyright>p{margin:0;font-size:13px;color:#a9b5be}.user-login-5 .alert{margin-top:-60px}.user-login-5 .form-group.valid{border-bottom:1px solid #a0a9b4!important}@media (max-width:1365px){.user-login-5 .login-logo.login-6{top:40px;left:40px}.user-login-5 .login-container .login-copyright,.user-login-5 .login-container .login-social,.user-login-5 .login-container>.login-content{padding:0}.user-login-5 .login-container .login-social{padding-right:0}.user-login-5 .login-container .login-copyright{padding-left:0}}@media (max-width:1023px){.user-login-5,.user-login-5 .login-bg,.user-login-5 .login-container{min-height:50vh}.user-login-5 .mt-login-5-bsfix{width:100%}.user-login-5 .login-logo.login-6{position:relative;margin:0 0 40px}.user-login-5 .login-container>.login-content{margin-top:60px}.user-login-5 .login-container>.login-content .login-form{margin-top:40px}.user-login-5 .login-container .rem-password{margin-bottom:1em}.user-login-5 .login-container>.login-footer{position:relative;margin-top:40px;padding-bottom:0}.user-login-5 .login-container>.login-footer .login-social li{margin-right:.5em}.user-login-5 .alert{margin-top:-20px}}@media (max-width:640px){.user-login-5 .login-container>.login-content .text-right{text-align:left}}.login{background:#fff}.user-login-5 .login-logo{width:50px}.user-login-5 .login-logo-text{position:absolute;top:25px;left:110px;font-size:22px;height:50px;line-height:50px;font-weight:700}.user-login-5 .login-footer{position:absolute;bottom:0;left:0;width:100%;opacity:.1}.backstretch{left:0;top:0;overflow:hidden;margin:0;padding:0;height:100vh;width:100%;position:absolute;background:url(assets/images/login/business.jpg) 50% no-repeat;background-size:cover;display:table}@media (max-width:1023px){.backstretch{height:50vh}}.backstretch-center{display:table-cell;vertical-align:middle;padding:0 50px;font-size:18px;color:#fff;text-align:center}.backstretch-center h2{line-height:1.5}.register-form{display:table;width:100%}.register-form-center{display:table-cell;vertical-align:middle}.register-form-center form.login-form{max-width:420px;margin:auto}.input-lg{width:100%!important}.font-300,.font-600{font-weight:300!important}.height-100{height:100%!important}.form-control{font-weight:300;color:#000}.input-lg{border-radius:3px}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}:host *{font-family:MuseoSans,sans-serif}.message{max-width:550px!important}"],
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, notifications_service_1.NotificationsService, message_service_1.MessageService])
    ], RequestEmailComponent);
    return RequestEmailComponent;
}());
exports.RequestEmailComponent = RequestEmailComponent;
var SendEmailData = (function () {
    function SendEmailData(email) {
        this.email = email;
    }
    return SendEmailData;
}());
exports.SendEmailData = SendEmailData;
