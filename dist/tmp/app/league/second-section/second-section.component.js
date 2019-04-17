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
var constants_1 = require('../../constants');
var SecondSectionComponent = (function () {
    function SecondSectionComponent() {
        this.externalUrl = constants_1.CONFIG;
    }
    SecondSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lg-second-section',
            template: "<section>     <div class=\"container\">         <div class=\"overlay\"></div>         <div class=\"row\">             <div class=\"col-sm-7 center-block\">                 <img class=\"league-image\"                  src=\"./assets/images/league-page/become.png\" alt=\"\">             </div>             <div class=\"col-sm-5\">                 <a href=\"{{ externalUrl.BUSINESS_URL }}\" type=\"button\"                  class=\"league-button btn btn-info btn-lg\">                 Create your league</a>             </div>         </div>     </div> </section>",
            styles: [".overlay{background:url(assets/images/league-page/create.png) 50% no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%}section{padding:0;display:block;position:relative;color:#fcfcfc;background-color:transparent}.league-image{margin:30px;width:80%}.league-button{margin:45px}@media (max-device-width:767px),(max-width:767px){.league-image{margin:0;width:100%}}@media (max-device-width:900px),(max-width:900px){.league-image{width:100%}.league-button{margin:35px}}"]
        }), 
        __metadata('design:paramtypes', [])
    ], SecondSectionComponent);
    return SecondSectionComponent;
}());
exports.SecondSectionComponent = SecondSectionComponent;
