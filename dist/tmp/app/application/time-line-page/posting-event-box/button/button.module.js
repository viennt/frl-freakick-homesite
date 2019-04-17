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
var all_day_button_component_1 = require('./all-day-button.component');
var schedule_button_component_1 = require('./schedule-button.component');
var reminder_button_component_1 = require('./reminder-button.component');
var age_group_button_component_1 = require('./age-group-button.component');
var image_button_component_1 = require('./image-button.component');
var address_button_component_1 = require('./address-button.component');
var upload_service_1 = require('../../../../services/upload.service');
var ButtonModule = (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [
                all_day_button_component_1.AllDayButtonComponent, schedule_button_component_1.ScheduleButtonComponent, reminder_button_component_1.ReminderButtonComponent,
                age_group_button_component_1.AgeGroupButtonComponent, image_button_component_1.ImageButtonComponent, address_button_component_1.AddressButtonComponent
            ],
            declarations: [
                all_day_button_component_1.AllDayButtonComponent, schedule_button_component_1.ScheduleButtonComponent, reminder_button_component_1.ReminderButtonComponent,
                age_group_button_component_1.AgeGroupButtonComponent, image_button_component_1.ImageButtonComponent, address_button_component_1.AddressButtonComponent
            ],
            providers: [upload_service_1.UploadService],
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonModule);
    return ButtonModule;
}());
exports.ButtonModule = ButtonModule;
