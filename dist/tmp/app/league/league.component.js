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
var LeagueComponent = (function () {
    function LeagueComponent() {
    }
    LeagueComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-social',
            template: "<sd-navbar class=\"league\"></sd-navbar>  <section>     <section class=\"home-section\">         <lg-first-section></lg-first-section>     </section>     <section class=\"home-section\">         <lg-second-section></lg-second-section>     </section>     <section class=\"home-section\">         <lg-third-section></lg-third-section>     </section> </section>  <sd-new-footer></sd-new-footer>",
            styles: [":host{position:relative;color:#333;background:#fcfcfc 50% no-repeat;padding:0;display:block;text-align:center}@media (min-width:768px){:host{text-align:left;padding:60px 0 0}}.overlay{background:#fcfcfc 50% no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%}h1{font-weight:700;font-size:30px;margin-top:0}.section-content{font-weight:500;font-size:21px}.about-image{width:100%}@media (max-width:767px){.about-image,.learn-more{margin-top:20px}}"]
        }), 
        __metadata('design:paramtypes', [])
    ], LeagueComponent);
    return LeagueComponent;
}());
exports.LeagueComponent = LeagueComponent;
