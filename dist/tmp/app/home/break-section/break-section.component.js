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
var BreakSectionComponent = (function () {
    function BreakSectionComponent() {
    }
    BreakSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hp-break-section',
            template: "<div class=\"container text-center\">     <div class=\"overlay\"></div>     <h1>Social Activism</h1>     <div class=\"row\">         <div class=\"section-content col-sm-8 col-sm-offset-2\">             Freakick joins families and communities through shared experiences</div>     </div>     <br/><br/>     <div class=\"row\">         <div class=\"col-xs-12\">             <a class=\"learn-more\" [routerLink]=\"['/initiative']\">Learn more</a>         </div>     </div> </div>",
            styles: [":host{position:relative;color:#fcfcfc;text-shadow:0 0 10px #101010;background-color:#101010;padding:200px 0;display:block}.overlay{background:url(assets/images/home-page/playing.jpg) 50% no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%;opacity:.2}h1{font-weight:700;font-size:36px;margin-top:0;position:relative}.section-content{font-weight:500;font-size:20px}.learn-more{background:transparent;border:1px solid #e53935;color:#e53935;font-size:18px;letter-spacing:.25vmin;border-radius:500px;padding:7px 20px;box-shadow:0 0 20px hsla(0,0%,6%,.25);text-decoration:none;margin:10px;cursor:pointer;transition:all .3s}.learn-more:hover{background:#e53935;color:#fcfcfc}"]
        }), 
        __metadata('design:paramtypes', [])
    ], BreakSectionComponent);
    return BreakSectionComponent;
}());
exports.BreakSectionComponent = BreakSectionComponent;
