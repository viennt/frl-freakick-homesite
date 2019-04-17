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
var Observable_1 = require('../../../../node_modules/rxjs/Observable');
var TypeWriter = [
    'Delication to removing barriers to opportunity, so people can live to their full potential.',
];
var Space = '                    ';
var TypeWriterArray = TypeWriter.map(function (typeWriterText) {
    return typeWriterText + Space;
});
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        var twDisplays$ = TypeWriterArray.map(function (typeWriterText) {
            return Observable_1.Observable
                .interval(50)
                .timeInterval()
                .take(typeWriterText.length + 1)
                .map(function (val, index) { return typeWriterText.substr(0, index); });
        });
        this.typeWriterDisplay$ = Observable_1.Observable.concat.apply(Observable_1.Observable, twDisplays$);
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-about',
            template: "<sd-navbar></sd-navbar>  <header #section class=\"first-section\">     <div class=\"container animated fadeIn\">         <div class=\"intro-text\">             <div class=\"intro-title\">Freakick means</div>             <div id=\"typewriter\" class=\"intro-heading\">                 {{ typeWriterDisplay$ | async }}             </div>         </div>     </div> </header>  <section class=\"home-section\">     <abt-first-section></abt-first-section> </section> <section class=\"home-section\">     <abt-build-section></abt-build-section> </section> <section class=\"home-section\">     <abt-second-section></abt-second-section> </section> <section class=\"home-section\">     <abt-network-section></abt-network-section> </section> <section class=\"home-section\">     <abt-third-section></abt-third-section> </section> <section class=\"home-section\">     <abt-fourth-section></abt-fourth-section> </section> <section class=\"home-section\">     <abt-fifth-section></abt-fifth-section> </section>  <sd-new-footer></sd-new-footer>",
            styles: [":host{min-height:100vh;display:block}#overlay{width:100%;height:100vh;left:0;top:0}#overlay.non-fixed{top:auto;bottom:0}#overlay.blur{-webkit-filter:blur(5px);filter:blur(5px)}#overlay{z-index:-2;position:absolute;background:url(assets/images/landing-page/background.jpg) no-repeat top;background-size:cover}.home-section{background:transparent;overflow:hidden}header.first-section{overflow:hidden;height:100vh;width:100%;background:url(assets/images/landing-page/background.jpg) no-repeat top;position:relative;transition:all .3s}header.first-section>.container{height:100%;padding:0 90px}header .container .intro-text{margin:10vh auto auto;line-height:1.3}header .container .intro-text .intro-title{letter-spacing:-1px;font-size:4vmin;font-weight:700;text-align:left;line-height:2.5}header .container .intro-text .intro-heading{color:#fff;letter-spacing:-1px;text-transform:lowercase;font-weight:700;font-size:6rem;text-align:left}header .container .description-text{margin:20vh auto auto;font-size:25px;width:90%;padding:0;line-height:1.3}@media (max-device-width:1280px),(max-width:1280px){#overlay{width:100%;height:100vh;left:0;top:0}header.first-section>.container{height:100%;padding:0 5rem}header.first-section{overflow:hidden;height:100vh;width:100%;background:url(assets/images/landing-page/background.jpg) no-repeat top;background-size:cover;transition:all .3s}}@media (max-device-width:1950px),(max-width:1950px){header.first-section{overflow:hidden;height:100vh;width:100%;background:url(assets/images/landing-page/background.jpg) no-repeat top;background-size:cover;transition:all .3s}#overlay{width:100%;height:75vh;left:0;top:0}}@media (max-device-width:991px),(max-width:991px){header .container .intro-text .intro-heading{font-size:4.5rem}}@media (max-device-width:767px),(max-width:767px){header.first-section>.container{height:100%;padding:0 45px}header .container .intro-text{margin:5vh auto auto}header .container .intro-text .intro-heading{font-size:3.5rem}header .container .description-text{margin:20vh auto auto;font-size:20px;width:100%}#overlay{width:100%;height:50vh;left:0;top:0}}.main-description{font-size:5vmin;padding:20px}.sub-description{font-size:2.5vmin}"]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
