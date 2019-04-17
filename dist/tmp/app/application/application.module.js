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
