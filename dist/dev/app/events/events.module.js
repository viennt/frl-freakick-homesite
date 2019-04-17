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
var events_component_1 = require('./events.component');
var first_section_component_1 = require('./first-section/first-section.component');
var second_section_component_1 = require('./second-section/second-section.component');
var third_section_component_1 = require('./third-section/third-section.component');
var EventsModule = (function () {
    function EventsModule() {
    }
    EventsModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [events_component_1.EventsComponent],
            declarations: [events_component_1.EventsComponent, first_section_component_1.FirstSectionComponent, second_section_component_1.SecondSectionComponent, third_section_component_1.ThirdSectionComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EventsModule);
    return EventsModule;
}());
exports.EventsModule = EventsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ldmVudHMvZXZlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXZELHNCQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3BELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQ2hGLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBUWhGO0lBQUE7SUFBNEIsQ0FBQztJQU43QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDRCQUFZLEVBQUUsb0JBQVksQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzFCLFlBQVksRUFBRSxDQUFDLGtDQUFlLEVBQUUsK0NBQXFCLEVBQUUsaURBQXNCLEVBQUUsK0NBQXFCLENBQUM7WUFDckcsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQzs7b0JBQUE7SUFDMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvZXZlbnRzL2V2ZW50cy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFNjcm9sbE1vZHVsZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL2luZGV4JztcbmltcG9ydCB7IEV2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vZXZlbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaXJzdFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Vjb25kU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kLXNlY3Rpb24vc2Vjb25kLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFRoaXJkU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdGhpcmQtc2VjdGlvbi90aGlyZC1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1NoYXJlZE1vZHVsZSwgU2Nyb2xsTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbRXZlbnRzQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtFdmVudHNDb21wb25lbnQsIEZpcnN0U2VjdGlvbkNvbXBvbmVudCwgU2Vjb25kU2VjdGlvbkNvbXBvbmVudCwgVGhpcmRTZWN0aW9uQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudHNNb2R1bGUgeyB9XG4iXX0=
