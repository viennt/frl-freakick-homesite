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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY3Rpdml0eS9hY3Rpdml0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw2QkFBK0IsY0FBYyxDQUFDLENBQUE7QUFDOUMsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsOEJBQTZCLDhCQUE4QixDQUFDLENBQUE7QUFDNUQsOENBQTJDLDhEQUE4RCxDQUFDLENBQUE7QUFFMUcseUNBQXVDLDhDQUE4QyxDQUFDLENBQUE7QUFDdEYsMENBQXVDLGdEQUFnRCxDQUFDLENBQUE7QUFFeEYsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFXekQ7SUFBQTtJQUNBLENBQUM7SUFWRDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxFQUFFLDRCQUFZLEVBQUUsNEJBQVksRUFBRSwwREFBMEI7Z0JBQ3BFLGlEQUFzQixFQUFFLGtEQUFzQixFQUFFLDZCQUFjLENBQUMsT0FBTyxFQUFFO2FBQ3pFO1lBQ0QsT0FBTyxFQUFFLEVBQUU7WUFDWCxZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUNqQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O3NCQUFBO0lBRUYscUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHNCQUFjLGlCQUMxQixDQUFBIiwiZmlsZSI6ImFwcC9hY3Rpdml0eS9hY3Rpdml0eS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTWFya2Rvd25Nb2R1bGUgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXlwYWxDaGVja291dEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvcGF5cGFsLWNoZWNrb3V0LWJ1dHRvbi9wYXlwYWwtY2hlY2tvdXQtYnV0dG9uLm1vZHVsZSc7XG5cbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkZvcm1Nb2R1bGUgfSBmcm9tICcuL3JlZ2lzdHJhdGlvbi1mb3JtL3JlZ2lzdHJhdGlvbi1mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBKb2luRnJlYWtpY2tGb3JtTW9kdWxlIH0gZnJvbSAnLi9qb2luLWZyZWFraWNrLWZvcm0vam9pbi1mcmVha2ljay1mb3JtLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFjdGl2aXR5Q29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpdml0eS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLCBTaGFyZWRNb2R1bGUsIEJ1dHRvbk1vZHVsZSwgUGF5cGFsQ2hlY2tvdXRCdXR0b25Nb2R1bGUsXG4gICAgUmVnaXN0cmF0aW9uRm9ybU1vZHVsZSwgSm9pbkZyZWFraWNrRm9ybU1vZHVsZSwgTWFya2Rvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbQWN0aXZpdHlDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpdml0eU1vZHVsZSB7XG59XG4iXX0=
