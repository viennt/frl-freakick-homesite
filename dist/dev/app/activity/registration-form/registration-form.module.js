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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var registration_form_component_1 = require('./registration-form.component');
var RegistrationFormModule = (function () {
    function RegistrationFormModule() {
    }
    RegistrationFormModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            exports: [registration_form_component_1.RegistrationFormComponent],
            declarations: [registration_form_component_1.RegistrationFormComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationFormModule);
    return RegistrationFormModule;
}());
exports.RegistrationFormModule = RegistrationFormModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY3Rpdml0eS9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUVsRSw4QkFBa0MsNkJBQTZCLENBQUMsQ0FBQTtBQUVoRSw0Q0FBMEMsK0JBQStCLENBQUMsQ0FBQTtBQVExRTtJQUFBO0lBQ0EsQ0FBQztJQVBEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVyxFQUFFLDJCQUFtQixFQUFFLHFCQUFZLEVBQUUsaUNBQWlCLENBQUM7WUFDMUYsT0FBTyxFQUFFLENBQUMsdURBQXlCLENBQUM7WUFDcEMsWUFBWSxFQUFFLENBQUMsdURBQXlCLENBQUM7WUFDekMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDOzs4QkFBQTtJQUVGLDZCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSw4QkFBc0IseUJBQ2xDLENBQUEiLCJmaWxlIjoiYXBwL2FjdGl2aXR5L3JlZ2lzdHJhdGlvbi1mb3JtL3JlZ2lzdHJhdGlvbi1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOZzJCczNNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XG5cbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkZvcm1Db21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE5nMkJzM01vZGFsTW9kdWxlXSxcbiAgZXhwb3J0czogW1JlZ2lzdHJhdGlvbkZvcm1Db21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtSZWdpc3RyYXRpb25Gb3JtQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uRm9ybU1vZHVsZSB7XG59XG4iXX0=
