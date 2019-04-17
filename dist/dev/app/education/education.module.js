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
var index_1 = require('../core/scroll/index');
var education_component_1 = require('./education.component');
var second_section_component_1 = require('./second-section/second-section.component');
var EducationModule = (function () {
    function EducationModule() {
    }
    EducationModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [education_component_1.EducationComponent],
            declarations: [education_component_1.EducationComponent, second_section_component_1.SecondSectionComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EducationModule);
    return EducationModule;
}());
exports.EducationModule = EducationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXZELHNCQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3BELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBUW5GO0lBQUE7SUFBK0IsQ0FBQztJQU5oQztRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDRCQUFZLEVBQUUsb0JBQVksQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixZQUFZLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSxpREFBc0IsQ0FBQztZQUMxRCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDOzt1QkFBQTtJQUM2QixzQkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsdUJBQWUsa0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFNjcm9sbE1vZHVsZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL2luZGV4JztcbmltcG9ydCB7IEVkdWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZWR1Y2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWNvbmRTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmQtc2VjdGlvbi9zZWNvbmQtc2VjdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtTaGFyZWRNb2R1bGUsIFNjcm9sbE1vZHVsZV0sXG4gICAgZXhwb3J0czogW0VkdWNhdGlvbkNvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbRWR1Y2F0aW9uQ29tcG9uZW50LCBTZWNvbmRTZWN0aW9uQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBFZHVjYXRpb25Nb2R1bGUgeyB9XG4iXX0=
