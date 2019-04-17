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
var shared_module_1 = require('../shared/shared.module');
var contact_component_1 = require('./contact.component');
var notification_success_popup_component_1 = require('./notification-success-popup/notification-success-popup.component');
var forms_1 = require('@angular/forms');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, forms_1.FormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            exports: [],
            declarations: [contact_component_1.ContactComponent, notification_success_popup_component_1.NotificationSuccessPopupComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ContactModule);
    return ContactModule;
}());
exports.ContactModule = ContactModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0L2NvbnRhY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFFdkQsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQscURBQWtELG1FQUFtRSxDQUFDLENBQUE7QUFDdEgsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsOEJBQWtDLDZCQUE2QixDQUFDLENBQUE7QUFRaEU7SUFBQTtJQUE2QixDQUFDO0lBTjlCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsNEJBQVksRUFBRSxtQkFBVyxFQUFFLGlDQUFpQixDQUFDO1lBQ3ZELE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFFLENBQUMsb0NBQWdCLEVBQUUsd0VBQWlDLENBQUM7WUFDbkUsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDOztxQkFBQTtJQUMyQixvQkFBQztBQUFELENBQTdCLEFBQThCLElBQUE7QUFBakIscUJBQWEsZ0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvY29udGFjdC9jb250YWN0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU3VjY2Vzc1BvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24tc3VjY2Vzcy1wb3B1cC9ub3RpZmljYXRpb24tc3VjY2Vzcy1wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZzJCczNNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTaGFyZWRNb2R1bGUsIEZvcm1zTW9kdWxlLCBOZzJCczNNb2RhbE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtDb250YWN0Q29tcG9uZW50LCBOb3RpZmljYXRpb25TdWNjZXNzUG9wdXBDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0TW9kdWxlIHsgfVxuIl19
