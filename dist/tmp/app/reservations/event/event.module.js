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
var event_component_1 = require('./event.component');
var index_1 = require('../../core/index');
var shared_module_1 = require('../../shared/shared.module');
var button_module_1 = require('../../core/button/button.module');
var event_detail_module_1 = require('./event-detail/event-detail.module');
var event_images_module_1 = require('./event-images/event-images.module');
var EventsModule = (function () {
    function EventsModule() {
    }
    EventsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, shared_module_1.SharedModule, button_module_1.ButtonModule,
                event_detail_module_1.EventDetailModule, event_images_module_1.EventImagesModule, index_1.LoadingCircleModule
            ],
            exports: [event_component_1.EventsComponent],
            declarations: [event_component_1.EventsComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EventsModule);
    return EventsModule;
}());
exports.EventsModule = EventsModule;
