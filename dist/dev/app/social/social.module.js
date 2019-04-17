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
var social_component_1 = require('./social.component');
var first_section_component_1 = require('./first-section/first-section.component');
var second_section_component_1 = require('./second-section/second-section.component');
var third_section_component_1 = require('./third-section/third-section.component');
var fourth_section_component_1 = require('./fourth-section/fourth-section.component');
var break_section_component_1 = require('./break-section/break-section.component');
var SocialModule = (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [social_component_1.SocialComponent],
            declarations: [social_component_1.SocialComponent, first_section_component_1.FirstSectionComponent, second_section_component_1.SecondSectionComponent, third_section_component_1.ThirdSectionComponent, fourth_section_component_1.FourthSectionComponent, break_section_component_1.BreakSectionComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], SocialModule);
    return SocialModule;
}());
exports.SocialModule = SocialModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb2NpYWwvc29jaWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXZELHNCQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3BELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQ2hGLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQ2hGLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLHdDQUFzQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBUWhGO0lBQUE7SUFBNEIsQ0FBQztJQU43QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDRCQUFZLEVBQUUsb0JBQVksQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzFCLFlBQVksRUFBRSxDQUFDLGtDQUFlLEVBQUUsK0NBQXFCLEVBQUUsaURBQXNCLEVBQUUsK0NBQXFCLEVBQUUsaURBQXNCLEVBQUUsK0NBQXFCLENBQUM7WUFDcEosU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQzs7b0JBQUE7SUFDMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvc29jaWFsL3NvY2lhbC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFNjcm9sbE1vZHVsZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL2luZGV4JztcbmltcG9ydCB7IFNvY2lhbENvbXBvbmVudCB9IGZyb20gJy4vc29jaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaXJzdFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2ZpcnN0LXNlY3Rpb24vZmlyc3Qtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Vjb25kU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kLXNlY3Rpb24vc2Vjb25kLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFRoaXJkU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdGhpcmQtc2VjdGlvbi90aGlyZC1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3VydGhTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9mb3VydGgtc2VjdGlvbi9mb3VydGgtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJlYWtTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhay1zZWN0aW9uL2JyZWFrLXNlY3Rpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBTY3JvbGxNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTb2NpYWxDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1NvY2lhbENvbXBvbmVudCwgRmlyc3RTZWN0aW9uQ29tcG9uZW50LCBTZWNvbmRTZWN0aW9uQ29tcG9uZW50LCBUaGlyZFNlY3Rpb25Db21wb25lbnQsIEZvdXJ0aFNlY3Rpb25Db21wb25lbnQsIEJyZWFrU2VjdGlvbkNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgU29jaWFsTW9kdWxlIHsgfVxuIl19
