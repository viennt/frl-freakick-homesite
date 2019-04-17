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
var ThirdSectionComponent = (function () {
    function ThirdSectionComponent() {
    }
    ThirdSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'soc-third-section',
            template: "<section class=\"feature\">     <div class=\"container\">         <div class=\"overlay\"></div>         <div class=\"feature-content col-sm-6 col-sm-offset-3 text-center\">             <div class=\"sub-content\" [class.show-children]=\"false\">                 <div class=\"title\">Inclusion</div>                 <div class=\"description\">Bringing together people of all races and ethnicities, religions, and cultures.</div>                 <div class=\"sub-description\">                     Sports play a major role in strengthening communities--creating common ground and a common language, building social capital and increasing inclusion.                 </div>             </div>         </div>     </div> </section>",
            styles: [".overlay{background:url(assets/images/initiative-page/kicksforkids.jpg) 50% no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%;opacity:.8}section{padding:50px 0 300px;display:block;position:relative;color:#fcfcfc;background-color:#101010;text-shadow:0 0 10px #101010}.feature-content .sub-content{transition:all .3s}@media (max-device-width:767px),(max-width:767px){.feature-content .sub-content{height:auto;padding:30px 0 0;text-align:center}}.feature-content .sub-content .title{font-weight:300;font-size:21px;line-height:1.3;padding:10px 0}.feature-content .sub-content .description{font-weight:700;font-size:30px;line-height:1.3}.feature-content .sub-content .sub-description{font-weight:300;font-size:18px;line-height:1.3;padding:10px 0}@media (max-device-width:767px),(max-width:767px){.feature-content .sub-content .description{font-size:26px}}.feature-content .sub-content .learn-more{cursor:pointer;color:#4a8fe7;font-weight:500;text-decoration:none;transition:all .3s}.feature-content .sub-content .learn-more:hover{color:#333}.feature-content .sub-content .children{font-weight:300;font-size:15px;line-height:1.3;padding:15px 0 0;transition:all .3s;color:#787878}.feature-content .sub-content .show-less{font-weight:300;font-size:15px;line-height:1.3;padding:15px 0 0;color:#787878;cursor:pointer}.feature-content .sub-content .children:hover,.feature-content .sub-content .show-less:hover{color:#333}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ThirdSectionComponent);
    return ThirdSectionComponent;
}());
exports.ThirdSectionComponent = ThirdSectionComponent;
