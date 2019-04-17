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
var forms_1 = require('@angular/forms');
var event_detail_component_1 = require('./event-detail.component');
var core_module_1 = require('angular2-google-maps/core/core-module');
var index_1 = require('../../../core/google-map-direction/index');
var interested_user_component_1 = require('./interested-user/interested-user.component');
var reviews_component_1 = require('./reviews/reviews.component');
var index_2 = require('../../../core/index');
var index_3 = require('ng2-cc-library/dist/index');
var EventDetailModule = (function () {
    function EventDetailModule() {
    }
    EventDetailModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                common_1.CommonModule, index_2.ButtonModule, index_2.LoadingCircleModule,
                index_3.CreditCardDirectivesModule,
                core_module_1.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
                }), index_1.GoogleMapDirectionsModule, index_2.PaypalCheckoutButtonModule],
            exports: [event_detail_component_1.EventDetailComponent, reviews_component_1.ReviewsComponent],
            declarations: [event_detail_component_1.EventDetailComponent, reviews_component_1.ReviewsComponent, interested_user_component_1.InterestedUser],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EventDetailModule);
    return EventDetailModule;
}());
exports.EventDetailModule = EventDetailModule;
