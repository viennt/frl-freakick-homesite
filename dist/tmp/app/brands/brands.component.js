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
var BrandsComponent = (function () {
    function BrandsComponent() {
    }
    BrandsComponent.prototype.ngOnInit = function () {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    };
    __decorate([
        core_1.ViewChild('section'), 
        __metadata('design:type', Object)
    ], BrandsComponent.prototype, "section", void 0);
    BrandsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-brands',
            template: "<sd-navbar></sd-navbar>  <!--[class.blur]=\"sectionOpacity <= 0.9\"--> <header #section class=\"first-section\">     <div id=\"overlay\"          [class.non-fixed]=\"nonFixedBackground\"          [style.opacity]=\"sectionOpacity\"></div>     <div class=\"container animated fadeIn\">         <div class=\"intro-text\" [style.opacity]=\"2 * sectionOpacity - 1\">             <div class=\"intro-heading\">It’s a new world out there</div>         </div>     </div> </header>  <section class=\"home-section\">     <soc-second-section></soc-second-section> </section>  <section class=\"home-section\">     <soc-third-section></soc-third-section> </section>  <sd-new-footer></sd-new-footer>",
            styles: [":host{min-height:100vh;display:block}#overlay{width:100%;height:100vh;left:0;top:0}#overlay.non-fixed{position:absolute;top:auto;bottom:0}#overlay.blur{-webkit-filter:blur(5px);filter:blur(5px)}#overlay{z-index:-2;position:absolute;background:url(assets/images/brands-page/Background_2.jpg) no-repeat top;background-size:cover}.home-section{background:#fcfcfc;overflow:hidden}header.first-section{overflow:hidden;height:100vh;width:100%;background:transparent;position:relative;transition:all .3s}header.first-section>.container{height:100%}header .container .intro-text{margin:40vh auto auto;padding:3vmin 0;line-height:1.3}header .container .intro-text .intro-heading{color:#31160d;text-shadow:0 0 5px #fdfdf1;text-transform:lowercase;letter-spacing:-1px;font-size:9vmin;text-align:left;width:50%}header .container .description-text{margin:20vh auto auto;font-size:25px;width:90%;padding:0;color:#303030;line-height:1.3}@media (max-width:767px){header .container .description-text{margin:20vh auto auto;font-size:20px;width:100%}}.main-description{font-size:5vmin;padding:20px}.sub-description{font-size:2.5vmin}"]
        }), 
        __metadata('design:paramtypes', [])
    ], BrandsComponent);
    return BrandsComponent;
}());
exports.BrandsComponent = BrandsComponent;
