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
var router_1 = require('@angular/router');
var core_module_1 = require('angular2-google-maps/core/core-module');
var index_1 = require('../../core/index');
var location_service_1 = require('../../services/location.service');
var booking_module_1 = require('../booking/booking.module');
var search_component_1 = require('./search.component');
var received_courts_component_1 = require('./courts/received-courts.component');
var received_classes_component_1 = require('./classes/received-classes.component');
var received_facilities_component_1 = require('./facilities/received-facilities.component');
var received_events_component_1 = require('./events/received-events.component');
var components = [
    search_component_1.SearchComponent,
    received_courts_component_1.ReceivedCourtsComponent,
    received_classes_component_1.ReceivedClassesComponent,
    received_facilities_component_1.ReceivedFacilitiesComponent,
    received_events_component_1.ReceivedEventsComponent
];
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, booking_module_1.BookingModule, router_1.RouterModule, index_1.LoadingCircleModule,
                core_module_1.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
                })],
            declarations: [components],
            exports: [components],
            providers: [location_service_1.LocationService],
        }), 
        __metadata('design:paramtypes', [])
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
