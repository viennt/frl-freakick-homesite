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
var initiative_component_1 = require('./initiative.component');
var first_section_component_1 = require('./first-section/first-section.component');
var second_section_component_1 = require('./second-section/second-section.component');
var third_section_component_1 = require('./third-section/third-section.component');
var fourth_section_component_1 = require('./fourth-section/fourth-section.component');
var fifth_section_component_1 = require('./fifth-section/fifth-section.component');
var sixth_section_component_1 = require('./sixth-section/sixth-section.component');
var break_section_component_1 = require('./break-section/break-section.component');
var InitiativeModule = (function () {
    function InitiativeModule() {
    }
    InitiativeModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [initiative_component_1.InitiativeComponent],
            declarations: [
                initiative_component_1.InitiativeComponent, first_section_component_1.FirstSectionComponent,
                second_section_component_1.SecondSectionComponent, third_section_component_1.ThirdSectionComponent,
                fourth_section_component_1.FourthSectionComponent, fifth_section_component_1.FifthSectionComponent,
                sixth_section_component_1.SixthSectionComponent, break_section_component_1.BreakSectionComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], InitiativeModule);
    return InitiativeModule;
}());
exports.InitiativeModule = InitiativeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbml0aWF0aXZlL2luaXRpYXRpdmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFFdkQsc0JBQTZCLHNCQUFzQixDQUFDLENBQUE7QUFDcEQscUNBQW9DLHdCQUF3QixDQUFDLENBQUE7QUFDN0Qsd0NBQXNDLHlDQUF5QyxDQUFDLENBQUE7QUFDaEYseUNBQXVDLDJDQUEyQyxDQUFDLENBQUE7QUFDbkYsd0NBQXNDLHlDQUF5QyxDQUFDLENBQUE7QUFDaEYseUNBQXVDLDJDQUEyQyxDQUFDLENBQUE7QUFDbkYsd0NBQXNDLHlDQUF5QyxDQUFDLENBQUE7QUFDaEYsd0NBQXNDLHlDQUF5QyxDQUFDLENBQUE7QUFDaEYsd0NBQXNDLHlDQUF5QyxDQUFDLENBQUE7QUFhaEY7SUFBQTtJQUFnQyxDQUFDO0lBWGpDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsNEJBQVksRUFBRSxvQkFBWSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLDBDQUFtQixDQUFDO1lBQzlCLFlBQVksRUFBRTtnQkFDViwwQ0FBbUIsRUFBRSwrQ0FBcUI7Z0JBQzFDLGlEQUFzQixFQUFFLCtDQUFxQjtnQkFDN0MsaURBQXNCLEVBQUUsK0NBQXFCO2dCQUM3QywrQ0FBcUIsRUFBRSwrQ0FBcUI7YUFDL0M7WUFDRCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDOzt3QkFBQTtJQUM4Qix1QkFBQztBQUFELENBQWhDLEFBQWlDLElBQUE7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJmaWxlIjoiYXBwL2luaXRpYXRpdmUvaW5pdGlhdGl2ZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFNjcm9sbE1vZHVsZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL2luZGV4JztcbmltcG9ydCB7IEluaXRpYXRpdmVDb21wb25lbnQgfSBmcm9tICcuL2luaXRpYXRpdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEZpcnN0U2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZmlyc3Qtc2VjdGlvbi9maXJzdC1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWNvbmRTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmQtc2VjdGlvbi9zZWNvbmQtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhpcmRTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90aGlyZC1zZWN0aW9uL3RoaXJkLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZvdXJ0aFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2ZvdXJ0aC1zZWN0aW9uL2ZvdXJ0aC1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWZ0aFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2ZpZnRoLXNlY3Rpb24vZmlmdGgtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2l4dGhTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zaXh0aC1zZWN0aW9uL3NpeHRoLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFrU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWstc2VjdGlvbi9icmVhay1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1NoYXJlZE1vZHVsZSwgU2Nyb2xsTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbSW5pdGlhdGl2ZUNvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEluaXRpYXRpdmVDb21wb25lbnQsIEZpcnN0U2VjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgU2Vjb25kU2VjdGlvbkNvbXBvbmVudCwgVGhpcmRTZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBGb3VydGhTZWN0aW9uQ29tcG9uZW50LCBGaWZ0aFNlY3Rpb25Db21wb25lbnQsXG4gICAgICAgIFNpeHRoU2VjdGlvbkNvbXBvbmVudCwgQnJlYWtTZWN0aW9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBJbml0aWF0aXZlTW9kdWxlIHsgfVxuIl19
