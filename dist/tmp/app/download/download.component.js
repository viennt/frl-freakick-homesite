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
var DownloadComponent = (function () {
    function DownloadComponent() {
    }
    DownloadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-download',
            template: "<sd-navbar class=\"events\"></sd-navbar>  <section class=\"feature leagues\">     <div class=\"container\">         <div class=\"feature-content col-sm-6 col-sm-push-6\">             <div class=\"sub-content\" [class.show-children]=\"false\">                 <div class=\"title\">Thank you,</div>                 <div class=\"description\">Let's get started by downloading our APPs.</div>                 <div class=\"sub-description\">                     <a class=\"app-store\" target=\"_blank\"                        href=\"https://itunes.apple.com/us/app/freakick/id1199380713\">                         <img src=\"./assets/images/app-store-badge.png\" alt=\"\">                     </a>                     <a class=\"play-store\" target=\"_blank\"                        href=\"https://play.google.com/store/apps/details?id=com.enclave.freakick\">                         <img src=\"./assets/images/play-store-badge.png\" alt=\"\">                     </a>                 </div>             </div>         </div>         <div frk-scroll animation=\"fadeInLeft\" class=\"feature-image col-sm-6 col-sm-pull-6\">             <div class=\"image-content\">                 <div class=\"shadow\"></div>                 <div class=\"phone\">                     <div class=\"screen-shot\"></div>                 </div>             </div>         </div>     </div> </section>  <sd-new-footer></sd-new-footer>",
            styles: [".feature.leagues{background-color:#fff1de}section{padding:0 0 60px;display:block}@media (min-width:768px){section{padding:80px 0}}.feature-content .sub-content{height:470px;padding:100px 0;transition:all .3s;text-align:left}.feature-content .sub-content.show-children{padding:0}@media (max-device-width:767px),(max-width:767px){.feature-content .sub-content{height:auto;padding:30px 0 0;text-align:center}}.feature-content .sub-content .title{font-weight:300;font-size:21px;line-height:1.3;padding:10px 0}.feature-content .sub-content .description{font-weight:700;font-size:30px;line-height:1.3}.feature-content .sub-content .sub-description{font-weight:300;font-size:18px;line-height:1.3;padding:10px 0}@media (max-device-width:767px),(max-width:767px){.feature-content .sub-content .description{font-size:20px}}.feature-content .sub-content .learn-more{cursor:pointer;color:#4a8fe7;font-weight:500;text-decoration:none;transition:all .3s}.feature-content .sub-content .learn-more:hover{color:#333}.feature-content .sub-content .children{font-weight:300;font-size:15px;line-height:1.3;padding:15px 0 0;transition:all .3s;color:#787878}.feature-content .sub-content .show-less{font-weight:300;font-size:15px;line-height:1.3;padding:15px 0 0;color:#787878;cursor:pointer}.feature-content .sub-content .children:hover,.feature-content .sub-content .show-less:hover{color:#333}.leagues .image-content{height:470px;position:relative;margin:auto}.leagues .image-content .shadow{position:absolute;height:100%;width:100%;top:0;left:0;background:url(assets/images/home-page/phone-shadow.png) 50% no-repeat;background-size:contain;-webkit-transform:translate3d(-10px,30px,0);transform:translate3d(-10px,30px,0)}.leagues .image-content .phone{position:absolute;height:100%;width:100%;top:0;left:0;background:url(assets/images/home-page/phone.png) 50% no-repeat;background-size:contain}.leagues .image-content .phone .screen-shot{background:url(assets/images/home-page/leagues-screen-shoot.png) 50% no-repeat;background-size:cover;position:absolute;top:57px;left:calc(50% - 200px / 2);width:202px;height:356px;border-radius:2px}.feature.child{padding-top:0}.child-feature-image img{width:50px;margin:20px;opacity:.6}.child-feature-title{font-weight:700;font-size:22px;line-height:1.3}.child-feature-description{font-weight:300;font-size:16px;line-height:1.3;padding:10px 0}a.app-store img,a.play-store img{height:50px;margin:10px auto}"]
        }), 
        __metadata('design:paramtypes', [])
    ], DownloadComponent);
    return DownloadComponent;
}());
exports.DownloadComponent = DownloadComponent;
