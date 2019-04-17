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
var home_component_1 = require('./home.component');
var index_1 = require('../core/scroll/index');
var shared_module_1 = require('../shared/shared.module');
var freakick_features_component_1 = require('./freakick-features/freakick-features.component');
var what_on_freakick_component_1 = require('./what-on-freakick/what-on-freakick.component');
var brand_section_component_1 = require('./brand-section/brand-section.component');
var business_section_component_1 = require('./business-section/business-section.component');
var reservations_section_component_1 = require('./reservations-section/reservations-section.component');
var break_section_component_1 = require('./break-section/break-section.component');
var starts_with_you_component_1 = require('./starts-with-you/starts-with-you.component');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule, index_1.ScrollModule],
            declarations: [
                home_component_1.HomeComponent, freakick_features_component_1.FreakickFeaturesComponent,
                what_on_freakick_component_1.WhatOnFreakickComponent, break_section_component_1.BreakSectionComponent,
                starts_with_you_component_1.StartsWithYouComponent, business_section_component_1.BusinessSectionComponent,
                brand_section_component_1.BrandSectionComponent, reservations_section_component_1.ReservationsSectionComponent
            ],
            exports: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsc0JBQTZCLHNCQUFzQixDQUFDLENBQUE7QUFFcEQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsNENBQTBDLGlEQUFpRCxDQUFDLENBQUE7QUFDNUYsMkNBQXdDLCtDQUErQyxDQUFDLENBQUE7QUFDeEYsd0NBQXNDLHlDQUF5QyxDQUFDLENBQUE7QUFDaEYsMkNBQXlDLCtDQUErQyxDQUFDLENBQUE7QUFDekYsK0NBQTZDLHVEQUF1RCxDQUFDLENBQUE7QUFDckcsd0NBQXNDLHlDQUF5QyxDQUFDLENBQUE7QUFDaEYsMENBQXVDLDZDQUE2QyxDQUFDLENBQUE7QUFZckY7SUFBQTtJQUEwQixDQUFDO0lBVjNCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSw0QkFBWSxFQUFFLG9CQUFZLENBQUM7WUFDbkQsWUFBWSxFQUFFO2dCQUNaLDhCQUFhLEVBQUUsdURBQXlCO2dCQUN4QyxvREFBdUIsRUFBRSwrQ0FBcUI7Z0JBQzlDLGtEQUFzQixFQUFFLHFEQUF3QjtnQkFDaEQsK0NBQXFCLEVBQUUsNkRBQTRCO2FBQ3BEO1lBQ0QsT0FBTyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUN6QixDQUFDOztrQkFBQTtJQUN3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcm9sbE1vZHVsZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL2luZGV4JztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgRnJlYWtpY2tGZWF0dXJlc0NvbXBvbmVudCB9IGZyb20gJy4vZnJlYWtpY2stZmVhdHVyZXMvZnJlYWtpY2stZmVhdHVyZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFdoYXRPbkZyZWFraWNrQ29tcG9uZW50IH0gZnJvbSAnLi93aGF0LW9uLWZyZWFraWNrL3doYXQtb24tZnJlYWtpY2suY29tcG9uZW50JztcbmltcG9ydCB7IEJyYW5kU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYnJhbmQtc2VjdGlvbi9icmFuZC1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXNpbmVzc1NlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2J1c2luZXNzLXNlY3Rpb24vYnVzaW5lc3Mtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25zU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzZXJ2YXRpb25zLXNlY3Rpb24vcmVzZXJ2YXRpb25zLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFrU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWstc2VjdGlvbi9icmVhay1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFydHNXaXRoWW91Q29tcG9uZW50IH0gZnJvbSAnLi9zdGFydHMtd2l0aC15b3Uvc3RhcnRzLXdpdGgteW91LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNoYXJlZE1vZHVsZSwgU2Nyb2xsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSG9tZUNvbXBvbmVudCwgRnJlYWtpY2tGZWF0dXJlc0NvbXBvbmVudCxcbiAgICBXaGF0T25GcmVha2lja0NvbXBvbmVudCwgQnJlYWtTZWN0aW9uQ29tcG9uZW50LFxuICAgIFN0YXJ0c1dpdGhZb3VDb21wb25lbnQsIEJ1c2luZXNzU2VjdGlvbkNvbXBvbmVudCxcbiAgICBCcmFuZFNlY3Rpb25Db21wb25lbnQsIFJlc2VydmF0aW9uc1NlY3Rpb25Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW0hvbWVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=
