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
var home_component_1 = require('./home.component');
var index_1 = require('../core/scroll/index');
var shared_module_1 = require('../shared/shared.module');
var freakick_features_component_1 = require('./freakick-features/freakick-features.component');
var what_on_freakick_component_1 = require('./what-on-freakick/what-on-freakick.component');
var brand_section_component_1 = require('./brand-section/brand-section.component');
var business_section_component_1 = require('./business-section/business-section.component');
var reservations_section_component_1 = require('./reservations-section/reservations-section.component');
var break_section_component_1 = require('./break-section/break-section.component');
var starts_with_you_component_1 = require('./starts-with-you/starts-with-you.component');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule, index_1.ScrollModule],
            declarations: [
                home_component_1.HomeComponent, freakick_features_component_1.FreakickFeaturesComponent,
                what_on_freakick_component_1.WhatOnFreakickComponent, break_section_component_1.BreakSectionComponent,
                starts_with_you_component_1.StartsWithYouComponent, business_section_component_1.BusinessSectionComponent,
                brand_section_component_1.BrandSectionComponent, reservations_section_component_1.ReservationsSectionComponent
            ],
            exports: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
