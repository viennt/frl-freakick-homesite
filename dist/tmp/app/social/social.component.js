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
var SocialComponent = (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    };
    SocialComponent.prototype.calcFirstSectionOpacity = function (event) {
        var elHeight = this.section.nativeElement.offsetHeight;
        var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
        var opacity = 1 - (scrollToTop / (elHeight / 3));
        this.sectionOpacity = (opacity < 0.3) ? 0.3 : opacity;
        this.nonFixedBackground = (scrollToTop + window.innerHeight) >= elHeight;
    };
    __decorate([
        core_1.ViewChild('section'), 
        __metadata('design:type', Object)
    ], SocialComponent.prototype, "section", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SocialComponent.prototype, "calcFirstSectionOpacity", null);
    SocialComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-social',
            template: "<sd-navbar></sd-navbar>  <!--[class.blur]=\"sectionOpacity <= 0.9\"--> <header #section class=\"first-section\">     <div id=\"overlay\"          [class.non-fixed]=\"nonFixedBackground\"          [style.opacity]=\"sectionOpacity\"></div>     <div class=\"container animated fadeIn\">         <div class=\"intro-text\" [style.opacity]=\"2 * sectionOpacity - 1\">             <div class=\"intro-heading\">crowdsourced experience</div>         </div>         <div class=\"description-text\" [style.opacity]=\"1.6 - 2 * sectionOpacity\">             <div class=\"main-description\">                 We represent a cultural transformation that builds up knowledge through user engagement.<br/>                 All by adding fun and competitiveness via local experiences.             </div>         </div>     </div> </header>  <section class=\"home-section\">     <soc-first-section></soc-first-section> </section>  <section class=\"home-section\">     <soc-second-section></soc-second-section> </section>  <section class=\"home-section\">     <soc-third-section></soc-third-section> </section>  <section class=\"home-section\">     <soc-fourth-section></soc-fourth-section> </section>  <sd-new-footer></sd-new-footer>",
            styles: [":host{min-height:100vh;display:block}#overlay{width:100%;height:100vh;left:0;top:0}#overlay.non-fixed{position:absolute;top:auto;bottom:0}#overlay.blur{-webkit-filter:blur(5px);filter:blur(5px)}#overlay{position:fixed;background:url(assets/images/social-page/header.jpg) no-repeat 50%;background-size:cover}.home-section{overflow:hidden}header.first-section{overflow:hidden;height:150vh;width:100%;color:#feeed4;background:#101010;position:relative;transition:all .3s}header.first-section>.container{height:100%}header .container .intro-text{margin:30vh auto auto;padding:3vmin;line-height:1.3}header .container .intro-text .intro-heading{text-shadow:0 0 20px hsla(0,0%,6%,.25);text-transform:lowercase;font-size:9vmin}header .container .description-text{margin:35vh auto auto;font-size:25px;width:60%;padding:0;color:#fcfcfc;line-height:1.3}@media (max-width:767px){header .container .description-text{margin:30vh auto auto;font-size:20px;width:80%}}"]
        }), 
        __metadata('design:paramtypes', [])
    ], SocialComponent);
    return SocialComponent;
}());
exports.SocialComponent = SocialComponent;
