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
var InitiativeComponent = (function () {
    function InitiativeComponent() {
    }
    InitiativeComponent.prototype.ngOnInit = function () {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    };
    InitiativeComponent.prototype.calcFirstSectionOpacity = function (event) {
        var elHeight = this.section.nativeElement.offsetHeight;
        var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
        var opacity = 1 - (scrollToTop / (elHeight / 3));
        this.sectionOpacity = (opacity < 0.3) ? 0.3 : opacity;
        this.nonFixedBackground = (scrollToTop + window.innerHeight) >= elHeight;
    };
    __decorate([
        core_1.ViewChild('section'), 
        __metadata('design:type', Object)
    ], InitiativeComponent.prototype, "section", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InitiativeComponent.prototype, "calcFirstSectionOpacity", null);
    InitiativeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-initiative',
            template: "<sd-navbar></sd-navbar>  <!--[class.blur]=\"sectionOpacity <= 0.9\"--> <header #section class=\"home-section\">     <div id=\"overlay\"          [class.non-fixed]=\"nonFixedBackground\"          [style.opacity]=\"sectionOpacity\"></div>     <div id=\"video\" class=\"hidden-xs\"          [class.non-fixed]=\"nonFixedBackground\"          [style.opacity]=\"sectionOpacity\"></div>     <div class=\"container no-padding animated fadeIn\">         <div class=\"intro-text\" [style.opacity]=\"2 * sectionOpacity - 1\">             <div class=\"intro-heading\">think upstream</div>         </div>         <div class=\"freakick-text\" [style.opacity]=\"1.6 - 2 * sectionOpacity\">             Sports are more than just a recreational activity--they are effective tools for positive social and personal change.         </div>     </div> </header>  <section class=\"home-section\">     <soc-first-section></soc-first-section> </section>  <section class=\"home-section\">     <soc-second-section></soc-second-section> </section>  <section class=\"home-section\">     <soc-third-section></soc-third-section> </section>  <section class=\"home-section\">     <soc-fourth-section></soc-fourth-section> </section>  <section class=\"home-section\">     <soc-fifth-section></soc-fifth-section> </section>  <section class=\"home-section\">     <soc-sixth-section></soc-sixth-section> </section>  <section class=\"home-section\">     <soc-experience></soc-experience> </section>  <sd-new-footer></sd-new-footer>",
            styles: [":host{min-height:100vh;display:block}#overlay{width:100%;height:100vh;left:0;top:0}#overlay.non-fixed{position:absolute;top:auto;bottom:0}#overlay.blur{-webkit-filter:blur(5px);filter:blur(5px)}#overlay{-webkit-filter:blur(2px);filter:blur(2px);position:fixed;background:url(assets/images/initiative-page/volunteer.jpg) no-repeat 50%;background-size:cover}header .container .intro-text{margin:40vh auto auto;padding:0}header .container .freakick-text{margin:35vh auto auto;font-size:25px;width:60%;padding:0}@media (max-width:767px){header .container .intro-text{margin:50vh auto auto}header .container .freakick-text{margin:30vh auto auto;font-size:20px;width:80%}}header .container .intro-text .intro-heading{text-shadow:0 0 20px hsla(0,0%,6%,.25);text-transform:lowercase;font-size:9vmin;line-height:7vmin;margin-bottom:7vmin}header .container .intro-text #get-freakick,header .container .intro-text #go-to-business{color:#fcfcfc;font-size:22px;letter-spacing:.25vmin;border-radius:500px;padding:1.5vmin 6vmin;box-shadow:0 0 20px hsla(0,0%,6%,.25);text-decoration:none;margin:10px;cursor:pointer}header .container .intro-text #get-freakick{background:#e53935;color:#fcfcfc}header .container .intro-text #go-to-business{background:transparent;border:.3vmin solid #fcfcfc}.home-section{background:#fcfcfc;overflow:hidden}header.home-section{height:150vh;width:100%;color:#fcfcfc;background:#101010;position:relative}header.home-section>.container{height:100%}"]
        }), 
        __metadata('design:paramtypes', [])
    ], InitiativeComponent);
    return InitiativeComponent;
}());
exports.InitiativeComponent = InitiativeComponent;
