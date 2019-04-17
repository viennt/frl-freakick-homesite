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
var booking_field_ticket_component_1 = require('./field-ticket/booking-field-ticket.component');
var booking_class_ticket_component_1 = require('./class-ticket/booking-class-ticket.component');
var class_schedule_component_1 = require('./class-schedule/class-schedule.component');
var booking_facility_ticket_component_1 = require('./facility-ticket/booking-facility-ticket.component');
var components = [
    booking_field_ticket_component_1.BookingFieldComponent,
    booking_class_ticket_component_1.BookingClassComponent, class_schedule_component_1.ClassScheduleComponent,
    booking_facility_ticket_component_1.BookingFacilityComponent
];
var BookingModule = (function () {
    function BookingModule() {
    }
    BookingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [components],
            exports: [components]
        }), 
        __metadata('design:paramtypes', [])
    ], BookingModule);
    return BookingModule;
}());
exports.BookingModule = BookingModule;
