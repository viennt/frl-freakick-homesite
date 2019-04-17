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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFFbEUsd0NBQXFDLG1EQUFtRCxDQUFDLENBQUE7QUFDekYsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFHdkQsZ0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQsdUNBQXFDLCtCQUErQixDQUFDLENBQUE7QUFDckUsd0NBQXNDLHlDQUF5QyxDQUFDLENBQUE7QUFDaEYsMENBQXdDLDZDQUE2QyxDQUFDLENBQUE7QUFDdEYsbURBQWdELCtEQUErRCxDQUFDLENBQUE7QUFFaEgsb0NBQWtDLDBDQUEwQyxDQUFDLENBQUE7QUFHN0UsaUNBQWdDLDhCQUE4QixDQUFDLENBQUE7QUFFL0QsMEJBQStCLGNBQWMsQ0FBQyxDQUFBO0FBQzlDLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBY2hGO0lBQUE7SUFBMEIsQ0FBQztJQVozQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxFQUFFLG1CQUFXLEVBQUUsNEJBQVksRUFBRSxxQkFBWSxFQUFFLDJCQUFtQixFQUFFLHVDQUFpQjtnQkFDN0YsOENBQW9CLENBQUMsaUJBQWlCLENBQUMsMEJBQWMsQ0FBQzthQUN2RDtZQUNELFlBQVksRUFBRTtnQkFDWixnQ0FBYyxFQUFFLG1EQUF1QixFQUFFLCtDQUFxQixFQUFDLDZDQUFvQjtnQkFDbkYsb0VBQStCLEVBQUUsaURBQXNCLEVBQUUsK0NBQXFCO2FBRS9FO1lBQ0QsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUM3QixDQUFDOztrQkFBQTtJQUN3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL2F1dGgvYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTmcyU29jaWFsTG9naW5Nb2R1bGUgfSBmcm9tICcuLi9wbHVnaW5zL3NvY2lhbF9uZXR3b3JrL25nMi1zb2NpYWwtbG9naW4ubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuLyoqIEltcG9ydCBjb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZhdGVGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmF0ZS1mb3JtL2FjdGl2YXRlLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFJlcXVlc3RBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9yZXF1ZXN0LWFjY291bnQvcmVxdWVzdC1hY2NvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmF0ZUludml0ZWRBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmF0ZS1pbnZpdGVkLWFjY291bnQvYWN0aXZhdGUtaW52aXRlZC1hY2NvdW50LmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBBY3RpdmF0ZVJlZ2lzdGVyZWRBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmF0ZS1yZWdpc3RlcmVkLWFjY291bnQvYWN0aXZhdGUtcmVnaXN0ZXJlZC1hY2NvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Rm9ybU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5tb2R1bGUnO1xuXG4vKiogSW1wb3J0IHNlcnZpY2VzICovXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU09DSUFMX05FVFdPUksgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlcXVlc3RFbWFpbENvbXBvbmVudCB9IGZyb20gJy4vcmVxdWVzdC1lbWFpbC9yZXF1ZXN0LWVtYWlsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBTaGFyZWRNb2R1bGUsIFJvdXRlck1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgQ29udGFjdEZvcm1Nb2R1bGUsXG4gICAgTmcyU29jaWFsTG9naW5Nb2R1bGUuaW5pdFdpdGhQcm92aWRlcnMoU09DSUFMX05FVFdPUkspXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvZ2luQ29tcG9uZW50LCBSZXF1ZXN0QWNjb3VudENvbXBvbmVudCwgQWN0aXZhdGVGb3JtQ29tcG9uZW50LEhvbWVTZWN0aW9uQ29tcG9uZW50LFxuICAgIEFjdGl2YXRlSW52aXRlZEFjY291bnRDb21wb25lbnQsIFJlc2V0UGFzc3dvcmRDb21wb25lbnQsIFJlcXVlc3RFbWFpbENvbXBvbmVudFxuICAgIC8vIEFjdGl2YXRlUmVnaXN0ZXJlZEFjY291bnRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTG9jYXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHsgfVxuIl19
