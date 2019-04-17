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
var about_component_1 = require('./about.component');
var first_section_component_1 = require('./first-section/first-section.component');
var second_section_component_1 = require('./second-section/second-section.component');
var third_section_component_1 = require('./third-section/third-section.component');
var fourth_section_component_1 = require('./fourth-section/fourth-section.component');
var fifth_section_component_1 = require('./fifth-section/fifth-section.component');
var build_section_component_1 = require('./build-section/build-section.component');
var network_section_component_1 = require('./network-section/network-section.component');
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [about_component_1.AboutComponent],
            declarations: [
                about_component_1.AboutComponent, first_section_component_1.FirstSectionComponent,
                second_section_component_1.SecondSectionComponent, third_section_component_1.ThirdSectionComponent,
                fourth_section_component_1.FourthSectionComponent, fifth_section_component_1.FifthSectionComponent,
                build_section_component_1.BuildSectionComponent, network_section_component_1.NetworkSectionComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxzQkFBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUVwRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCx3Q0FBc0MseUNBQXlDLENBQUMsQ0FBQTtBQUNoRix5Q0FBdUMsMkNBQTJDLENBQUMsQ0FBQTtBQUNuRix3Q0FBc0MseUNBQXlDLENBQUMsQ0FBQTtBQUNoRix5Q0FBdUMsMkNBQTJDLENBQUMsQ0FBQTtBQUNuRix3Q0FBc0MseUNBQXlDLENBQUMsQ0FBQTtBQUNoRix3Q0FBc0MseUNBQXlDLENBQUMsQ0FBQTtBQUNoRiwwQ0FBd0MsNkNBQTZDLENBQUMsQ0FBQTtBQWF0RjtJQUFBO0lBQTJCLENBQUM7SUFYNUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLG9CQUFZLENBQUM7WUFDckMsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUN6QixZQUFZLEVBQUU7Z0JBQ1osZ0NBQWMsRUFBRSwrQ0FBcUI7Z0JBQ3JDLGlEQUFzQixFQUFFLCtDQUFxQjtnQkFDN0MsaURBQXNCLEVBQUUsK0NBQXFCO2dCQUM3QywrQ0FBcUIsRUFBRSxtREFBdUI7YUFDL0M7WUFDRCxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O21CQUFBO0lBQ3lCLGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2Nyb2xsTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9zY3JvbGwvaW5kZXgnO1xuXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZpcnN0U2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZmlyc3Qtc2VjdGlvbi9maXJzdC1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWNvbmRTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmQtc2VjdGlvbi9zZWNvbmQtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhpcmRTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90aGlyZC1zZWN0aW9uL3RoaXJkLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZvdXJ0aFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2ZvdXJ0aC1zZWN0aW9uL2ZvdXJ0aC1zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWZ0aFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2ZpZnRoLXNlY3Rpb24vZmlmdGgtc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnVpbGRTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9idWlsZC1zZWN0aW9uL2J1aWxkLXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5ldHdvcmtTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZXR3b3JrLXNlY3Rpb24vbmV0d29yay1zZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTaGFyZWRNb2R1bGUsIFNjcm9sbE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtBYm91dENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFib3V0Q29tcG9uZW50LCBGaXJzdFNlY3Rpb25Db21wb25lbnQsXG4gICAgU2Vjb25kU2VjdGlvbkNvbXBvbmVudCwgVGhpcmRTZWN0aW9uQ29tcG9uZW50LFxuICAgIEZvdXJ0aFNlY3Rpb25Db21wb25lbnQsIEZpZnRoU2VjdGlvbkNvbXBvbmVudCxcbiAgICBCdWlsZFNlY3Rpb25Db21wb25lbnQsIE5ldHdvcmtTZWN0aW9uQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0TW9kdWxlIHsgfVxuIl19
