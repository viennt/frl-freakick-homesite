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
var ngx_markdown_1 = require('ngx-markdown');
var shared_module_1 = require('../shared/shared.module');
var button_module_1 = require('../core/button/button.module');
var paypal_checkout_button_module_1 = require('../core/paypal-checkout-button/paypal-checkout-button.module');
var registration_form_module_1 = require('./registration-form/registration-form.module');
var join_freakick_form_module_1 = require('./join-freakick-form/join-freakick-form.module');
var activity_component_1 = require('./activity.component');
var ActivityModule = (function () {
    function ActivityModule() {
    }
    ActivityModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule, shared_module_1.SharedModule, button_module_1.ButtonModule, paypal_checkout_button_module_1.PaypalCheckoutButtonModule,
                registration_form_module_1.RegistrationFormModule, join_freakick_form_module_1.JoinFreakickFormModule, ngx_markdown_1.MarkdownModule.forRoot(),
            ],
            exports: [],
            declarations: [activity_component_1.ActivityComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ActivityModule);
    return ActivityModule;
}());
exports.ActivityModule = ActivityModule;
