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
var forms_1 = require('@angular/forms');
var index_1 = require('../../core/google-map-direction/index');
var index_2 = require('../../core/index');
var button_module_1 = require('../../core/button/button.module');
var pagination_module_1 = require('../../core/pagination/pagination.module');
var core_module_1 = require('angular2-google-maps/core/core-module');
var branch_component_1 = require('./branch.component');
var booking_module_1 = require('../booking/booking.module');
var received_branch_courts_component_1 = require('./courts/received-branch-courts.component');
var received_branch_classes_component_1 = require('./classes/received-branch-classes.component');
var received_branch_facilities_component_1 = require('./facilities/received-branch-facilities.component');
var index_3 = require('./reviews/index');
var index_4 = require('./reviews/index');
var index_5 = require('./reviews/index');
var components = [
    branch_component_1.BranchComponent,
    received_branch_courts_component_1.ReceivedBranchCourtsComponent,
    received_branch_classes_component_1.ReceivedBranchClassesComponent,
    received_branch_facilities_component_1.ReceivedBranchFacilitiesComponent,
    index_3.ReviewBranchComponent, index_4.UpdateReviewBranchComponent,
    index_5.ShowReviewComponent
];
var BranchModule = (function () {
    function BranchModule() {
    }
    BranchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, booking_module_1.BookingModule,
                button_module_1.ButtonModule, index_2.LoadingCircleModule, pagination_module_1.PaginationModule,
                core_module_1.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
                }), index_1.GoogleMapDirectionsModule],
            declarations: [components],
            exports: [components]
        }), 
        __metadata('design:paramtypes', [])
    ], BranchModule);
    return BranchModule;
}());
exports.BranchModule = BranchModule;
