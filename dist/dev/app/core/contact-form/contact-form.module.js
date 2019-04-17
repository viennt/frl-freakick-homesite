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
var forms_1 = require('@angular/forms');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var contact_form_component_1 = require('./contact-form.component');
var ContactFormModule = (function () {
    function ContactFormModule() {
    }
    ContactFormModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            exports: [contact_form_component_1.ContactFormComponent],
            declarations: [contact_form_component_1.ContactFormComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ContactFormModule);
    return ContactFormModule;
}());
exports.ContactFormModule = ContactFormModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0MsOEJBQWtDLDZCQUE2QixDQUFDLENBQUE7QUFFaEUsdUNBQXFDLDBCQUEwQixDQUFDLENBQUE7QUFRaEU7SUFBQTtJQUNBLENBQUM7SUFQRDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsbUJBQVcsRUFBRSxpQ0FBaUIsQ0FBQztZQUN2RCxPQUFPLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztZQUMvQixZQUFZLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztZQUNwQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O3lCQUFBO0lBRUYsd0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHlCQUFpQixvQkFDN0IsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5nMkJzM01vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcblxuaW1wb3J0IHsgQ29udGFjdEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QtZm9ybS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmcyQnMzTW9kYWxNb2R1bGVdLFxuICBleHBvcnRzOiBbQ29udGFjdEZvcm1Db21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtDb250YWN0Rm9ybUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RGb3JtTW9kdWxlIHtcbn1cbiJdfQ==
