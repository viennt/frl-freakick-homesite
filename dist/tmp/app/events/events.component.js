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
var EventsComponent = (function () {
    function EventsComponent() {
    }
    EventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ev-events',
            template: "<sd-navbar></sd-navbar>  <section class=\"home-section\">     <ev-first-section></ev-first-section> </section>  <section class=\"home-section\">     <ev-second-section></ev-second-section> </section>  <section class=\"home-section\">     <ev-third-section></ev-third-section> </section>  <sd-new-footer></sd-new-footer>",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
