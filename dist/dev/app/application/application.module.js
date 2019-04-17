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
var router_1 = require('@angular/router');
var demo_graphic_module_1 = require('./demo-graphic/demo-graphic.module');
var time_line_page_module_1 = require('./time-line-page/time-line-page.module');
var application_component_1 = require('./application.component');
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, demo_graphic_module_1.DemoGraphicModule, time_line_page_module_1.TimeLinePageModule],
            exports: [application_component_1.ApplicationComponent],
            declarations: [application_component_1.ApplicationComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyxvQ0FBa0Msb0NBQW9DLENBQUMsQ0FBQTtBQUN2RSxzQ0FBbUMsd0NBQXdDLENBQUMsQ0FBQTtBQUU1RSxzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQVEvRDtJQUFBO0lBQ0EsQ0FBQztJQVBEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSx1Q0FBaUIsRUFBRSwwQ0FBa0IsQ0FBQztZQUM5RCxPQUFPLEVBQUUsQ0FBQyw0Q0FBb0IsQ0FBQztZQUMvQixZQUFZLEVBQUUsQ0FBQyw0Q0FBb0IsQ0FBQztZQUNwQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O3lCQUFBO0lBRUYsd0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHlCQUFpQixvQkFDN0IsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vYXBwbGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERlbW9HcmFwaGljTW9kdWxlIH0gZnJvbSAnLi9kZW1vLWdyYXBoaWMvZGVtby1ncmFwaGljLm1vZHVsZSc7XG5pbXBvcnQgeyBUaW1lTGluZVBhZ2VNb2R1bGUgfSBmcm9tICcuL3RpbWUtbGluZS1wYWdlL3RpbWUtbGluZS1wYWdlLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hcHBsaWNhdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLCBEZW1vR3JhcGhpY01vZHVsZSwgVGltZUxpbmVQYWdlTW9kdWxlXSxcbiAgZXhwb3J0czogW0FwcGxpY2F0aW9uQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbQXBwbGljYXRpb25Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbk1vZHVsZSB7XG59XG4iXX0=
