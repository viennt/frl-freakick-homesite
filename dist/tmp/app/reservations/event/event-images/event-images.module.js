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
var event_images_component_1 = require('./event-images.component');
var core_module_1 = require('angular2-google-maps/core/core-module');
var index_1 = require('../../../core/google-map-direction/index');
var router_1 = require('@angular/router');
var index_2 = require('../../../core/index');
var button_module_1 = require('../../../core/button/button.module');
var EventImagesModule = (function () {
    function EventImagesModule() {
    }
    EventImagesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule, button_module_1.ButtonModule, index_2.LoadingCircleModule,
                core_module_1.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
                }), index_1.GoogleMapDirectionsModule],
            exports: [event_images_component_1.EventImagesComponent],
            declarations: [event_images_component_1.EventImagesComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EventImagesModule);
    return EventImagesModule;
}());
exports.EventImagesModule = EventImagesModule;
