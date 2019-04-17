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
var YT_VIDEO_CONFIG = {
    videoURL: 'ZSir-cK46rA',
    showControls: false,
    stopMovieOnBlur: false,
    containment: 'self',
    autoplay: true,
    mute: true,
    opacity: 1,
    loop: true
};
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.firstSectionOpacity = 1;
        this.nonFixedBackground = false;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.videoTimeout = setTimeout(function () {
            if (jQuery('#video').length)
                jQuery('#video').YTPlayer(YT_VIDEO_CONFIG);
        }, 2000);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.videoTimeout)
            clearTimeout(this.videoTimeout);
    };
    HomeComponent.prototype.calcFirstSectionOpacity = function (event) {
        var elHeight = this.firstSection.nativeElement.offsetHeight;
        var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollToTop < elHeight)
            this.firstSectionOpacity = 1 - (scrollToTop / (elHeight / 4));
        else
            this.firstSectionOpacity = 0;
        this.nonFixedBackground = scrollToTop + window.innerHeight >= elHeight;
    };
    HomeComponent.prototype.scrollTo = function (section) {
        jQuery('html, body').stop().animate({
            scrollTop: (document.getElementById(section).offsetTop)
        }, 1250, 'easeInOutExpo');
    };
    __decorate([
        core_1.ViewChild('firstSection'), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "firstSection", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HomeComponent.prototype, "calcFirstSectionOpacity", null);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            template: "<sd-navbar></sd-navbar>  <!-- Header --> <header #firstSection class=\"home-section\">     <div id=\"overlay\" [class.non-fixed]=\"nonFixedBackground\"></div>     <div id=\"video\" class=\"hidden-xs\"          [class.non-fixed]=\"nonFixedBackground\"          [style.opacity]=\"firstSectionOpacity\"></div>     <div class=\"container no-padding animated fadeIn\">         <div class=\"intro-text\" [style.opacity]=\"firstSectionOpacity\">             <div class=\"intro-heading\">sports elevated</div>             <a id=\"get-freakick\" (click)=\"scrollTo('starts-with-you')\">                 <span></span>                 <span></span>                 <span></span>                 <span></span>                 Scroll             </a>         </div>         <div class=\"freakick-text\" [style.opacity]=\"1 - 2 * firstSectionOpacity\">             Freakick is a software company focused on connecting users intelligently via analytics that compel an active sports experience.         </div>     </div> </header>  <!--  It starts with you section --> <section id=\"starts-with-you\" class=\"home-section\">     <hp-starts-with-you></hp-starts-with-you> </section>  <!-- Freakick's features section --> <section id=\"features\" class=\"home-section\">     <hp-freakick-features></hp-freakick-features> </section>  <!-- Break section --> <section id=\"break-page\" class=\"home-section\">     <hp-break-section></hp-break-section> </section>  <sd-new-footer></sd-new-footer>  <!-- Freakick's features section --> <!--<hp-scroll-carousel *ngFor=\"let feature of siteFeatures\"--> <!--id=\"{{ feature.id }}\" class=\"home-section\">--> <!--<hp-scroll-carousel-item *ngFor=\"let child of feature.children\"--> <!--[placeOfContent]=\"child.placeOfContent\">--> <!--<span parent-title>{{ feature.title }}</span>--> <!--<span parent-description>{{ feature.description }}</span>--> <!--<span title>{{ child.title }}</span>--> <!--<span description>{{ child.description }}</span>--> <!--<img background src=\"{{ child.background }}\" alt=\"{{ child.title }}\">--> <!--</hp-scroll-carousel-item>--> <!--</hp-scroll-carousel>-->  <!-- What's on Freakick --> <!--<section id=\"what-on-freakick\" class=\"home-section\">--> <!--<hp-what-on-freakick></hp-what-on-freakick>--> <!--</section>-->",
            styles: ["a,a.active,a:active,a:focus,a:hover{color:#fcfcfc}#overlay,#video{width:100%;height:100vh;left:0;top:0}#overlay.non-fixed,#video.non-fixed{position:absolute;top:auto;bottom:0}#overlay{z-index:-2;position:fixed;background:url(assets/images/landing-page/background.jpg) no-repeat 50%;background-size:cover}#video{z-index:-1;position:fixed;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:url(assets/images/landing-page/background.jpg) no-repeat 50% fixed;background-size:cover}header .container .intro-text{margin:40vh auto auto;padding:0}header .container .freakick-text{margin:35vh auto auto;font-size:25px;width:60%;padding:0}@media (max-width:767px){header .container .intro-text{margin:50vh auto auto}header .container .freakick-text{margin:30vh auto auto;font-size:20px;width:80%}}header .container .intro-text .intro-heading{text-shadow:0 0 20px hsla(0,0%,6%,.25);text-transform:lowercase;font-size:9vmin;line-height:7vmin;margin-bottom:7vmin}header .container .intro-text #go-to-business{color:#fcfcfc;font-size:22px;letter-spacing:.25vmin;border-radius:500px;padding:1.5vmin 6vmin;box-shadow:0 0 20px hsla(0,0%,6%,.25);text-decoration:none;margin:10px;cursor:pointer}header .container .intro-text #get-freakick{display:inline-block;padding-top:80px;position:relative;font-weight:100;letter-spacing:.1em;text-decoration:none;transition:opacity .3s}header .container .intro-text #get-freakick:hover{opacity:.5}header .container .intro-text #get-freakick span{position:absolute;top:0;left:50%;width:24px;height:24px;margin-left:-12px;border-left:1px solid #fff;border-bottom:1px solid #fff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:sdb07 2s infinite;animation:sdb07 2s infinite;opacity:0;box-sizing:border-box}header .container .intro-text #get-freakick span:first-of-type{-webkit-animation-delay:0s;animation-delay:0s}header .container .intro-text #get-freakick span:nth-of-type(2){top:16px;-webkit-animation-delay:.15s;animation-delay:.15s}header .container .intro-text #get-freakick span:nth-of-type(3){top:32px;-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes sdb07{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes sdb07{0%{opacity:0}50%{opacity:1}to{opacity:0}}header .container .intro-text #go-to-business{background:transparent;border:.3vmin solid #fcfcfc}.home-section{background:#fcfcfc;overflow:hidden}header.home-section{height:150vh;width:100%;color:#fcfcfc;background:transparent;position:relative}header.home-section>.container{height:100%}"],
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
