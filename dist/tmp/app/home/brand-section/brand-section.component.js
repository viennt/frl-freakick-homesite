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
var BrandSectionComponent = (function () {
    function BrandSectionComponent() {
    }
    BrandSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hp-brand-section',
            template: "<div class=\"container text-center\">     <div class=\"row\">         <div class=\"col-sm-5\">             <img class=\"brand-image\" src=\"./assets/images/home-page/brands.png\" alt=\"\">         </div>         <div class=\"col-sm-7 text-left branch-des\">             <br class=\"visible-xs\"/>             <div class=\"row\">                 <div class=\"section-content col-sm-12\">It's a new world out there!</div>             </div>             <h1>Freakick for Brands</h1>             <br/><br/>             <div class=\"row\">                 <div class=\"col-xs-12\">                     <a class=\"learn-more\" [routerLink]=\"['/brands']\">Learn more</a>                 </div>             </div>         </div>     </div> </div>",
            styles: [":host{background:#fff;color:#333;padding:60px 0;display:block}@media (min-width:768px){:host{padding:80px 0}}h1{font-weight:700;font-size:36px;margin-top:10px;margin-bottom:0}.section-content{font-weight:500;font-size:20px}.brand-image{width:100%}.learn-more{color:#2973ac;font-size:18px;border:1px solid #2973ac;background:transparent;letter-spacing:.25vmin;border-radius:500px;padding:7px 20px;text-decoration:none;text-shadow:none;cursor:pointer;transition:all .3s}.learn-more:hover{background:#2973ac;color:#fcfcfc}.branch-des{padding-top:0}@media (min-width:768px){.branch-des{padding-top:35px}}@media (min-width:992px){.branch-des{padding-top:65px}}@media (min-width:1200px){.branch-des{padding-top:100px}}"]
        }), 
        __metadata('design:paramtypes', [])
    ], BrandSectionComponent);
    return BrandSectionComponent;
}());
exports.BrandSectionComponent = BrandSectionComponent;
