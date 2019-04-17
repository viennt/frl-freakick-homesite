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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var ng2_social_login_module_1 = require('../plugins/social_network/ng2-social-login.module');
var shared_module_1 = require('../shared/shared.module');
var login_component_1 = require('./login/login.component');
var home_section_component_1 = require('./home/home-section.component');
var activate_form_component_1 = require('./activate-form/activate-form.component');
var request_account_component_1 = require('./request-account/request-account.component');
var activate_invited_account_component_1 = require('./activate-invited-account/activate-invited-account.component');
var contact_form_module_1 = require('../core/contact-form/contact-form.module');
var location_service_1 = require('../services/location.service');
var constants_1 = require('../constants');
var reset_password_component_1 = require('./reset-password/reset-password.component');
var request_email_component_1 = require('./request-email/request-email.component');
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.FormsModule, shared_module_1.SharedModule, router_1.RouterModule, forms_1.ReactiveFormsModule, contact_form_module_1.ContactFormModule,
                ng2_social_login_module_1.Ng2SocialLoginModule.initWithProviders(constants_1.SOCIAL_NETWORK)
            ],
            declarations: [
                login_component_1.LoginComponent, request_account_component_1.RequestAccountComponent, activate_form_component_1.ActivateFormComponent, home_section_component_1.HomeSectionComponent,
                activate_invited_account_component_1.ActivateInvitedAccountComponent, reset_password_component_1.ResetPasswordComponent, request_email_component_1.RequestEmailComponent
            ],
            providers: [location_service_1.LocationService]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
