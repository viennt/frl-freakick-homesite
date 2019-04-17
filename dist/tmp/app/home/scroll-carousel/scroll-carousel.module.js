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
var scroll_carousel_component_1 = require('./scroll-carousel.component');
var carousel_item_component_1 = require('./item/carousel-item.component');
var ScrollCarouselModule = (function () {
    function ScrollCarouselModule() {
    }
    ScrollCarouselModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [scroll_carousel_component_1.ScrollCarouselComponent, carousel_item_component_1.ScrollCarouselItemComponent],
            declarations: [scroll_carousel_component_1.ScrollCarouselComponent, carousel_item_component_1.ScrollCarouselItemComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ScrollCarouselModule);
    return ScrollCarouselModule;
}());
exports.ScrollCarouselModule = ScrollCarouselModule;
