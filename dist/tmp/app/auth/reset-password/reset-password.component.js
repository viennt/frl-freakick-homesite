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
var notifications_service_1 = require('../../plugins/notifi/notifications.service');
var md5_1 = require('ts-md5/dist/md5');
var authentication_service_1 = require('../../services/authentication.service');
var message_service_1 = require('../../services/message.service');
var Message_1 = require('../../models/Message');
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authService, notifyService, messageService, route, router) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUpdatedPassword = false;
        this.repeatPassword = '';
        this.password = '';
        this.routeSub = this.route.params.subscribe(function (params) { return _this.resetToken = params['link']; });
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    ResetPasswordComponent.prototype.reset = function () {
        if (this.isLoading)
            return;
        if (!this.password) {
            this.notifyService.error('Error', 'Please enter your new password.');
            return;
        }
        else if (!this.repeatPassword) {
            this.notifyService.error('Error', 'Please enter your new password twice.');
            return;
        }
        else if (this.repeatPassword !== this.password) {
            this.notifyService.error('Error', 'You must enter the same password twice in order to confirm it.');
            return;
        }
        var password = md5_1.Md5.hashStr(this.repeatPassword) + '';
        this.messageService.sendMessage(new Message_1.Message('RESET_PASSWORD', new ResetPasswordData(this.resetToken, password, null)));
    };
    ResetPasswordComponent.prototype.handleMessage = function (message) {
        this.isLoading = false;
        switch (message.messageType) {
            case 'RESET_PASSWORD_SUCCESS':
                this.isLoading = false;
                this.isUpdatedPassword = true;
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
    ResetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-reset-password',
            template: "<div class=\"login\">     <div class=\"user-login-5\">         <div class=\"row bs-reset\">             <div class=\"col-md-12 login-container bs-reset mt-login-5-bsfix bg-white bg-font-white\">                 <div class=\"login-form-step height-100\">                     <div class=\"login-form-step-center height-100\">                         <div class=\"form height-100 register-form\">                             <div class=\"form-body register-form-center\">                                 <form class=\"login-form\" #resetPasswordForm=\"ngForm\">                                     <div *ngIf=\"!isUpdatedPassword\">                                         <div class=\"font-dark margin-bottom-25\">                                             <div class=\"logo text-center margin-bottom-25\">                                                 <a [routerLink]=\"['/']\">                                                     <img src=\"./assets/images/logo/freakick_logo_dark.png\" alt=\"\" width=\"100\"/> </a>                                             </div>                                             <div class=\"h2 text-center\">New Freakick ID password</div>                                             <div class=\"h4 thin text-center\">No worries. We got you! Please enter a new password. Avoid passwords that are easy to guess.</div>                                         </div>                                         <hr>                                         <div class=\"font-dark form-group\"                                              [class.has-error]=\"!pwd.valid && pwd.dirty\">                                             <input #pwd=\"ngModel\" name=\"newPassword\" required                                                    maxlength=\"55\"                                                    autocomplete=\"off\"                                                    placeholder=\"New password (*)\"                                                    class=\"form-control form-control-solid placeholder-no-fix input-lg\"                                                    [(ngModel)]=\"password\" (keyup.enter)=\"reset()\"                                                    pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\"                                                    type=\"password\"/>                                             <span *ngIf=\"!pwd.valid && pwd.dirty\"                                                    class=\"help-block\">Your password must have: At least one number and a symbol, upper & lower letters, and 8 or more characters.</span>                                         </div>                                         <div class=\"font-dark form-group\"                                              [class.has-error]=\"!repwd.valid && repwd.dirty\">                                             <input #repwd=\"ngModel\" name=\"repeatNewPassword\" required                                                    maxlength=\"55\"                                                    autocomplete=\"off\" type=\"password\"                                                    placeholder=\"Repeat new password (*)\"                                                    pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\"                                                    class=\"form-control form-control-solid placeholder-no-fix input-lg\"                                                    [(ngModel)]=\"repeatPassword\" (keyup.enter)=\"reset()\"/>                                             <span *ngIf=\"!repwd.valid && repwd.dirty\"                                                     class=\"help-block\">Your password must have: At least one number and a symbol, upper & lower letters, and 8 or more characters.</span>                                         </div>                                         <div class=\"font-dark row\">                                             <div class=\"col-xs-4\">                                                 <button class=\"btn btn-block btn-circle blue bold\"                                                         [disabled]=\"!resetPasswordForm.form.valid || isLoading\"                                                         (click)=\"reset()\">                                                     <span>Reset</span>                                                     <i *ngIf=\"isLoading\" class=\"fa fa-circle-o-notch fa-spin\"></i>                                                 </button>                                             </div>                                         </div>                                     </div>                                     <div *ngIf=\"isUpdatedPassword\">                                         <div class=\"font-dark margin-bottom-25\">                                             <div class=\"logo text-center margin-bottom-25\">                                                 <a [routerLink]=\"['/']\">                                                     <img src=\"./assets/images/logo/freakick_logo_dark.png\" alt=\"\" width=\"100\"/> </a>                                             </div>                                             <div class=\"h2 text-center\">You're got a new password</div>                                             <div class=\"h4 thin text-center\">Awesome, you've successfully updated your password.</div>                                         </div>                                         <div class=\"font-dark row\">                                             <div class=\"col-xs-4 col-xs-offset-4\">                                                 <button class=\"btn btn-block btn-circle blue bold\"                                                         [disabled]=\"!resetPasswordForm.form.valid || isLoading\"                                                         [routerLink]=\"['/', 'login']\">                                                     <span>Go to Freakick</span>                                                     <i *ngIf=\"isLoading\" class=\"fa fa-circle-o-notch fa-spin\"></i>                                                 </button>                                             </div>                                         </div>                                     </div>                                     <hr>                                 </form>                             </div>                         </div>                     </div>                 </div>             </div>         </div>     </div> </div>",
            styles: ["input::-webkit-input-placeholder{opacity:1;transition:opacity .3s ease-in-out;font-weight:300}input:-moz-placeholder,input::-moz-placeholder{opacity:1;transition:opacity .3s ease-in-out;font-weight:300}input:-ms-input-placeholder{opacity:1;transition:opacity .3s ease-in-out;font-weight:300}input:focus::-webkit-input-placeholder{opacity:0;transition:opacity .3s ease-in-out}input:focus:-moz-placeholder,input:focus::-moz-placeholder{opacity:0;transition:opacity .3s ease-in-out}input:focus:-ms-input-placeholder{opacity:0;transition:opacity .3s ease-in-out}.btn{height:auto}.user-login-5{min-height:100vh}.user-login-5 .bs-reset{margin:0;padding:0}.user-login-5 .text-right{text-align:right}.user-login-5 .login-bg{background-position:50%;background-size:cover;background-repeat:no-repeat;min-height:calc(100vh - 50px)}.user-login-5 .login-logo{position:absolute;top:25px;left:50px}.user-login-5 .login-logo.login-6{top:80px;left:80px}.user-login-5 .login-container{position:relative;height:100vh;overflow-y:auto}.user-login-5 .login-container .login-copyright,.user-login-5 .login-container .login-social,.user-login-5 .login-container>.login-content{padding:0}.user-login-5 .login-container>.login-content{margin-top:10px}.user-login-5 .login-container>.login-content>h1{font-size:30px;font-weight:300;color:#4e5a64;padding:20px}.user-login-5 .login-container>.login-content p{color:#a0a9b4;font-size:15px;line-height:22px}.user-login-5 .login-container>.login-content>.login-form{margin-top:80px;color:#a4aab2;font-size:13px}.user-login-5 .login-container>.login-content>.login-form .form-control{width:100%;padding:10px 0;border:#a0a9b4;border-bottom:1px solid;color:#868e97;font-size:14px;margin-bottom:30px}.user-login-5 .login-container>.login-content>.login-form .form-control:focus{outline:0}.user-login-5 .login-container>.login-content>.login-form .forgot-password,.user-login-5 .login-container>.login-content>.login-form .login-button{display:inline-block}.user-login-5 .login-container>.login-content>.login-form .rem-password{margin-top:10px}.user-login-5 .login-container>.login-content>.login-form .rem-password>p{margin:0}.user-login-5 .login-container>.login-content>.login-form .rem-password>.rem-checkbox{border-color:#a4aab2}.user-login-5 .login-container>.login-content>.login-form .forgot-password{margin-right:1em}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a{color:#a4aab2}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a:hover{color:#337ab7;text-decoration:none}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a:focus{color:#a4aab2;text-decoration:none}.user-login-5 .login-container>.login-footer{position:absolute;bottom:0;width:100%;padding-bottom:10px}.user-login-5 .login-container>.login-footer .login-social{padding-right:0}.user-login-5 .login-container>.login-footer .login-social li{display:inline-block;list-style:none;margin-right:1em}.user-login-5 .login-container>.login-footer .login-social a{color:#a9b5be;font-size:18px}.user-login-5 .login-container>.login-footer .login-social a:hover{color:#337ab7;text-decoration:none}.user-login-5 .login-container>.login-footer .login-social a:focus{color:#a9b5be}.user-login-5 .login-container>.login-footer .login-copyright{padding-left:0;margin-top:6px}.user-login-5 .login-container>.login-footer .login-copyright>p{margin:0;font-size:13px;color:#a9b5be}.user-login-5 .alert{margin-top:-60px}.user-login-5 .form-group.valid{border-bottom:1px solid #a0a9b4!important}@media (max-width:1365px){.user-login-5 .login-logo.login-6{top:40px;left:40px}.user-login-5 .login-container .login-copyright,.user-login-5 .login-container .login-social,.user-login-5 .login-container>.login-content{padding:0}.user-login-5 .login-container .login-social{padding-right:0}.user-login-5 .login-container .login-copyright{padding-left:0}}@media (max-width:1023px){.user-login-5,.user-login-5 .login-bg,.user-login-5 .login-container{min-height:50vh}.user-login-5 .mt-login-5-bsfix{width:100%}.user-login-5 .login-logo.login-6{position:relative;margin:0 0 40px}.user-login-5 .login-container>.login-content{margin-top:60px}.user-login-5 .login-container>.login-content .login-form{margin-top:40px}.user-login-5 .login-container .rem-password{margin-bottom:1em}.user-login-5 .login-container>.login-footer{position:relative;margin-top:40px;padding-bottom:0}.user-login-5 .login-container>.login-footer .login-social li{margin-right:.5em}.user-login-5 .alert{margin-top:-20px}}@media (max-width:640px){.user-login-5 .login-container>.login-content .text-right{text-align:left}}.login{background:#fff}.user-login-5 .login-logo{width:50px}.user-login-5 .login-logo-text{position:absolute;top:25px;left:110px;font-size:22px;height:50px;line-height:50px;font-weight:700}.user-login-5 .login-footer{position:absolute;bottom:0;left:0;width:100%;opacity:.1}.backstretch{left:0;top:0;overflow:hidden;margin:0;padding:0;height:100vh;width:100%;position:absolute;background:url(assets/images/login/business.jpg) 50% no-repeat;background-size:cover;display:table}@media (max-width:1023px){.backstretch{height:50vh}}.backstretch-center{display:table-cell;vertical-align:middle;padding:0 50px;font-size:18px;color:#fff;text-align:center}.backstretch-center h2{line-height:1.5}.register-form{display:table;width:100%}.register-form-center{display:table-cell;vertical-align:middle}.register-form-center form.login-form{max-width:420px;margin:auto}.input-lg{width:100%!important}.font-300,.font-600{font-weight:300!important}.height-100{height:100%!important}.form-control{font-weight:300;color:#000}.input-lg{border-radius:3px}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}:host *{font-family:MuseoSans,sans-serif}.message{max-width:570px;margin:auto}"],
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, notifications_service_1.NotificationsService, message_service_1.MessageService, router_1.ActivatedRoute, router_1.Router])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
var ResetPasswordData = (function () {
    function ResetPasswordData(resetToken, newPassword, fcmToken) {
        this.resetToken = resetToken;
        this.newPassword = newPassword;
        this.fcmToken = fcmToken;
    }
    return ResetPasswordData;
}());
exports.ResetPasswordData = ResetPasswordData;
