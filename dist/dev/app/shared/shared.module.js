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
var router_1 = require('@angular/router');
var index_1 = require('ng2-select/index');
var navbar_component_1 = require('./navbar/navbar.component');
var footer_component_1 = require('./footer/footer.component');
var new_footer_component_1 = require('./new-footer/new-footer.component');
var search_bar_component_1 = require('./search-bar/search-bar.component');
var contact_form_module_1 = require('../core/contact-form/contact-form.module');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: []
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, index_1.SelectModule, contact_form_module_1.ContactFormModule],
            declarations: [navbar_component_1.NavbarComponent, footer_component_1.FooterComponent, new_footer_component_1.NewFooterComponent, search_bar_component_1.SearchComponent],
            exports: [navbar_component_1.NavbarComponent, footer_component_1.FooterComponent, new_footer_component_1.NewFooterComponent, search_bar_component_1.SearchComponent,
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBRWhELGlDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELGlDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELHFDQUFtQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3ZFLHFDQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3BFLG9DQUFrQywwQ0FBMEMsQ0FBQyxDQUFBO0FBWTdFO0lBQUE7SUFPQSxDQUFDO0lBTlEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFaSDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUscUJBQVksRUFBRSxvQkFBWSxFQUFFLHVDQUFpQixDQUFDO1lBQ3RFLFlBQVksRUFBRSxDQUFDLGtDQUFlLEVBQUUsa0NBQWUsRUFBRSx5Q0FBa0IsRUFBRSxzQ0FBZSxDQUFDO1lBQ3JGLE9BQU8sRUFBRSxDQUFDLGtDQUFlLEVBQUUsa0NBQWUsRUFBRSx5Q0FBa0IsRUFBRSxzQ0FBZTtnQkFDN0UscUJBQVksRUFBRSxtQkFBVyxFQUFFLHFCQUFZLENBQUM7U0FDM0MsQ0FBQzs7b0JBQUE7SUFRRixtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksb0JBQVksZUFPeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnbmcyLXNlbGVjdC9pbmRleCc7XG5cbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZXdGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL25ldy1mb290ZXIvbmV3LWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RGb3JtTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLm1vZHVsZSc7XG5cbi8qKlxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBTZWxlY3RNb2R1bGUsIENvbnRhY3RGb3JtTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmF2YmFyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIE5ld0Zvb3RlckNvbXBvbmVudCwgU2VhcmNoQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05hdmJhckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBOZXdGb290ZXJDb21wb25lbnQsIFNlYXJjaENvbXBvbmVudCxcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
