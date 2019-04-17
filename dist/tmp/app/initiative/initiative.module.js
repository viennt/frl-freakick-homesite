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
var shared_module_1 = require('../shared/shared.module');
var index_1 = require('../core/scroll/index');
var initiative_component_1 = require('./initiative.component');
var first_section_component_1 = require('./first-section/first-section.component');
var second_section_component_1 = require('./second-section/second-section.component');
var third_section_component_1 = require('./third-section/third-section.component');
var fourth_section_component_1 = require('./fourth-section/fourth-section.component');
var fifth_section_component_1 = require('./fifth-section/fifth-section.component');
var sixth_section_component_1 = require('./sixth-section/sixth-section.component');
var break_section_component_1 = require('./break-section/break-section.component');
var InitiativeModule = (function () {
    function InitiativeModule() {
    }
    InitiativeModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [initiative_component_1.InitiativeComponent],
            declarations: [
                initiative_component_1.InitiativeComponent, first_section_component_1.FirstSectionComponent,
                second_section_component_1.SecondSectionComponent, third_section_component_1.ThirdSectionComponent,
                fourth_section_component_1.FourthSectionComponent, fifth_section_component_1.FifthSectionComponent,
                sixth_section_component_1.SixthSectionComponent, break_section_component_1.BreakSectionComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], InitiativeModule);
    return InitiativeModule;
}());
exports.InitiativeModule = InitiativeModule;
