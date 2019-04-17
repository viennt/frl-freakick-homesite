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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var landing_component_1 = require('./landing.component');
var button_module_1 = require('../core/button/button.module');
var shared_module_1 = require('../shared/shared.module');
var contact_form_module_1 = require('../core/contact-form/contact-form.module');
var LandingModule = (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, button_module_1.ButtonModule, shared_module_1.SharedModule, contact_form_module_1.ContactFormModule],
            declarations: [landing_component_1.LandingComponent],
            exports: [landing_component_1.LandingComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], LandingModule);
    return LandingModule;
}());
exports.LandingModule = LandingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYW5kaW5nL2xhbmRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsOEJBQTZCLDhCQUE4QixDQUFDLENBQUE7QUFDNUQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsb0NBQWtDLDBDQUEwQyxDQUFDLENBQUE7QUFRN0U7SUFBQTtJQUE2QixDQUFDO0lBTjlCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVyxFQUFFLDRCQUFZLEVBQUUsNEJBQVksRUFBRSx1Q0FBaUIsQ0FBQztZQUNuRixZQUFZLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztZQUMzQixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O3FCQUFBO0lBQzJCLG9CQUFDO0FBQUQsQ0FBN0IsQUFBOEIsSUFBQTtBQUFqQixxQkFBYSxnQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9sYW5kaW5nL2xhbmRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExhbmRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xhbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udGFjdEZvcm1Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEJ1dHRvbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBDb250YWN0Rm9ybU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0xhbmRpbmdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGFuZGluZ0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGFuZGluZ01vZHVsZSB7IH1cbiJdfQ==
