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
var Observable_1 = require('rxjs/Observable');
var TypeWriter = [
    'Everything starts here',
    'What are you doing today?'
];
var Space = '                    ';
var TypeWriterArray = TypeWriter.map(function (typeWriterText) {
    return typeWriterText + Space;
});
var YT_VIDEO_CONFIG = {
    videoURL: 'e48zVXSMumw',
    useOnMobile: true,
    coverImage: 'https://www.freakick.com/assets/images/landing-page/background.jpg',
    showControls: false,
    stopMovieOnBlur: false,
    containment: 'self',
    autoplay: true,
    mute: true,
    opacity: 1,
    loop: false
};
var JoinFreakickComponent = (function () {
    function JoinFreakickComponent() {
    }
    JoinFreakickComponent.prototype.ngOnInit = function () {
        var _this = this;
        var twDisplays$ = TypeWriterArray.map(function (typeWriterText) {
            return Observable_1.Observable
                .interval(50)
                .timeInterval()
                .take(typeWriterText.length + 1)
                .map(function (val, index) { return typeWriterText.substr(0, index); });
        });
        this.videoTimeout = setTimeout(function () {
            var videoEl = jQuery('#video');
            if (videoEl.length) {
                videoEl.YTPlayer(YT_VIDEO_CONFIG);
                videoEl.on('YTPEnd', function (e) {
                    if (e.time === 7) {
                        _this.typeWriterDisplay$ = Observable_1.Observable.concat.apply(Observable_1.Observable, twDisplays$);
                        window.scrollTo({ top: 1 });
                    }
                });
            }
        }, 0);
    };
    JoinFreakickComponent.prototype.ngOnDestroy = function () {
        if (this.videoTimeout)
            clearTimeout(this.videoTimeout);
    };
    JoinFreakickComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-join-freakick',
            template: "<sd-navbar></sd-navbar>  <section class=\"feature social\">     <div class=\"container\">         <div id=\"overlay\"></div>         <div id=\"video\"></div>         <div class=\"intro-text\">             <div class=\"intro-heading text-center\">                 {{ typeWriterDisplay$ | async }}             </div>         </div>     </div> </section>  <sd-new-footer></sd-new-footer>",
            styles: ["a,a.active,a:active,a:focus,a:hover{color:#fcfcfc}section{z-index:-2;height:100vh;display:block}#overlay,:host /deep/ .inline-YTPlayer{width:100%;height:100vh;position:absolute;z-index:-2}#overlay.non-fixed,:host /deep/ .inline-YTPlayer.non-fixed{top:auto;bottom:0}#overlay{z-index:-2;position:absolute;background:url(assets/images/landing-page/background.jpg) no-repeat 50%;background-size:cover}:host /deep/ .inline-YTPlayer{z-index:-1;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-size:cover}:host /deep/ .inline-YTPlayer>#video{padding-bottom:100vh}@media (max-width:767px){:host /deep/ .inline-YTPlayer{display:none}}section .container .intro-text{margin:0;padding:0;position:absolute;top:0;bottom:0;width:100%;height:100vh;display:table}@media (max-width:767px){section .container .intro-text{margin:50vh auto auto}}section .container .intro-text .intro-heading{color:#fff;font-size:8vmin;font-weight:700;line-height:7vmin;margin-bottom:7vmin;display:table-cell;vertical-align:middle;text-transform:lowercase}.container{width:100%;height:100vh;margin:0;padding:0}"]
        }), 
        __metadata('design:paramtypes', [])
    ], JoinFreakickComponent);
    return JoinFreakickComponent;
}());
exports.JoinFreakickComponent = JoinFreakickComponent;
