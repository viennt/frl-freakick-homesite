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
var NetworkSectionComponent = (function () {
    function NetworkSectionComponent() {
    }
    NetworkSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'abt-network-section',
            template: "<div class=\"container text-center\">     <div class=\"overlay\"></div>     <div class=\"row\">         <div class=\"section-content col-sm-8 col-sm-offset-2\">             Freakick is a global formation of technologists and entrepreneurs building the infrastructure that enables a decentralized world built around you.</div>     </div> </div>",
            styles: [":host{position:relative;color:#1c1e23;background-color:#fcfcfc;padding:50px 0;display:block}@media (min-width:768px){:host{padding:60px 0}}.overlay{background:url(assets/images/about-page/network.png) 50% no-repeat fixed;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%;opacity:.3}h1{font-weight:700;font-size:36px;margin-top:0}.section-content{font-weight:500;font-size:20px}.button{float:left;width:100%;text-align:center}.learn-more{background:transparent;border:1px solid #ff5300;color:#ff5300;font-size:18px;letter-spacing:.25vmin;border-radius:500px;padding:7px 20px;box-shadow:0 0 20px hsla(0,0%,6%,.25);text-decoration:none;margin:10px;cursor:pointer;transition:all .3s}.learn-more:hover{background:#ff5300;color:#fcfcfc}"]
        }), 
        __metadata('design:paramtypes', [])
    ], NetworkSectionComponent);
    return NetworkSectionComponent;
}());
exports.NetworkSectionComponent = NetworkSectionComponent;
