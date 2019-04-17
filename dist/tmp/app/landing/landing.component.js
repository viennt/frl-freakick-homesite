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
var router_1 = require('@angular/router');
var core_2 = require('angular2-cookie/core');
var secretWord_service_1 = require('../services/secretWord.service');
var md5_1 = require('ts-md5/dist/md5');
var LandingComponent = (function () {
    function LandingComponent(router, cookieService, secretWordService) {
        this.router = router;
        this.cookieService = cookieService;
        this.secretWordService = secretWordService;
        this.initialCode = 'What\'s the secret word?';
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var secretCode = this.cookieService.get('sc');
        if (secretCode) {
            this.secretWordService.checkSecretWord(String(md5_1.Md5.hashStr(secretCode)), 'LandingComponent')
                .then(function (data) {
                _this.router.navigate(['/home'])
                    .catch(function () {
                });
            }).catch(function (error) {
                _this.router.navigate(['/landing'])
                    .catch(function () {
                });
            });
        }
        this.secretCodeMsg = '';
    };
    LandingComponent.prototype.submitCode = function () {
        var _this = this;
        if (this.secretCode) {
            this.isLoading = true;
            var hashedCode_1 = String(md5_1.Md5.hashStr(this.secretCode));
            var doubleHashedCode = String(md5_1.Md5.hashStr(hashedCode_1));
            this.secretWordService.checkSecretWord(doubleHashedCode, 'SubmitSecretCode').then(function (data) {
                var expires = new Date(new Date().getTime() + 16 * 60 * 60 * 1000);
                _this.cookieService.put('sc', hashedCode_1, {
                    domain: 'freakick.com',
                    expires: expires
                });
                _this.cookieService.put('sc', hashedCode_1, {
                    domain: 'localhost',
                    expires: expires
                });
                _this.cookieService.put('sc', hashedCode_1, {
                    domain: '113.160.225.76',
                    expires: expires
                });
                _this.cookieService.put('sc', hashedCode_1, {
                    domain: '192.168.21.226',
                    expires: expires
                });
                _this.isLoading = false;
                _this.router.navigate(['/home']);
            }).catch(function (error) {
                _this.isLoading = false;
                _this.secretCodeMsg = error.data.message;
            });
        }
        else {
            this.secretCodeMsg = 'please enter secret word!';
        }
    };
    LandingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-landing',
            template: "<section>     <div class=\"container\">         <div class=\"intro-heading text-center\">             <div class=\"freakick-logo\">                 <img src=\"./assets/images/freakick-logo.png\" alt=\"\">             </div>             <h2 class=\"animated fadeInDown\">Feel like a <b>local anywhere</b> you go</h2>             <div class=\"secret-words animated fadeIn\"                  [style.animation-delay]=\"'3s'\">                 <input id=\"secret-code\" type=\"password\"                        placeholder=\"What's the secret word?\"                        [(ngModel)]=\"secretCode\"                        (keyup.enter)=\"submitCode($event)\">                 <button id=\"get-freakick\" class=\"btn\"                         [disabled]=\"secretCode === initialCode || secretCode === ''\"                         (click)=\"submitCode()\">                     <i class=\"fa fa-spin fa-spinner\" *ngIf=\"isLoading\"></i>                     <span *ngIf=\"!isLoading\">GO</span>                 </button>                 <span id=\"or-line\">- or -</span>                 <button id=\"contact-us\" class=\"btn\" (click)=\"contactForm.open()\">                     <span>CONTACT US</span>                 </button>                 <div *ngIf=\"secretCodeMsg\">{{ secretCodeMsg }}</div>             </div>             <div class=\"intro-app\">                 <div class=\"quote quote-1 animated fadeInLeft\"                      [style.animation-duration]=\"'0.75s'\"                      [style.animation-delay]=\"'2.15s'\"></div>                 <div class=\"quote quote-2 animated flipInX\"                      [style.animation-duration]=\"'0.75s'\"                      [style.animation-delay]=\"'2.3s'\"></div>                 <div class=\"phone animated fadeIn\"                      [style.animation-delay]=\"'1.5s'\"></div>                 <div class=\"quote quote-3 animated flipInY\"                      [style.animation-duration]=\"'0.75s'\"                      [style.animation-delay]=\"'2.45s'\"></div>                 <div class=\"quote quote-4 animated fadeInRight\"                      [style.animation-duration]=\"'0.75s'\"                      [style.animation-delay]=\"'2.6s'\"></div>             </div>         </div>     </div> </section>  <div class=\"copy-right\">   <div class=\"text\">Copyright © 2018 Freakick Inc. All Rights Reserved.</div> </div>  <frk-contact-form #contactForm></frk-contact-form>",
            styles: [":host{background:#fff;min-height:100vh;display:block}.freakick-logo img{width:50px;height:50px;-webkit-filter:invert(100%);filter:invert(100%)}.copy-right{width:100%;position:fixed;text-align:center;color:#333;bottom:30px;left:0;font-size:12px;font-weight:400}.container{padding-top:20px;height:100%}.container .intro-heading{text-transform:lowercase}.secret-words{margin-top:20px}#get-freakick{background:#65bef9}#contact-us,#get-freakick{font-size:15px;letter-spacing:.25vmin;border-radius:5px;padding:2px 8px;text-decoration:none;color:#fcfcfc;height:30px}#contact-us{background:#fea522}@media (max-device-width:767px),(max-width:767px){#or-line{display:inherit;padding:10px}}#secret-code{background:hsla(0,0%,100%,.3);border-radius:5px;color:#101010;padding:8px;height:30px;border-color:#444}#secret-code::-webkit-input-placeholder{color:#545454}#secret-code::-moz-placeholder{color:#545454}#secret-code:-ms-input-placeholder{color:#545454}#secret-code:-moz-placeholder{color:#545454}.intro-app{margin-top:40px;width:100%;height:300px;position:relative}.intro-app .phone{height:100%;background:url(assets/images/landing-page/phone.jpg) 50% no-repeat;background-size:contain}.intro-app .quote{position:absolute;height:40%;width:calc(50% - 90px)}.intro-app .quote.quote-1{top:0;left:0;background:url(assets/images/landing-page/comment-1.png) 100% 0 no-repeat;background-size:contain}.intro-app .quote.quote-2{top:0;right:0;background:url(assets/images/landing-page/comment-2.png) 0 0 no-repeat;background-size:contain}.intro-app .quote.quote-3{bottom:0;left:0;background:url(assets/images/landing-page/comment-3.png) 100% 100% no-repeat;background-size:contain}.intro-app .quote.quote-4{bottom:0;right:0;background:url(assets/images/landing-page/comment-4.png) 0 100% no-repeat;background-size:contain}@media (max-device-width:767px),(max-width:767px){.intro-app{height:auto;display:block}.intro-app .phone{height:300px}.intro-app .quote{position:static;display:inline-block;width:45%;height:120px}.intro-app .quote.quote-1{background:url(assets/images/landing-page/comment-1.png) 50% no-repeat;background-size:contain}.intro-app .quote.quote-2{background:url(assets/images/landing-page/comment-2.png) 50% no-repeat;background-size:contain}.intro-app .quote.quote-3{background:url(assets/images/landing-page/comment-3-m.png) 50% no-repeat;background-size:contain}.intro-app .quote.quote-4{background:url(assets/images/landing-page/comment-4-m.png) 50% no-repeat;background-size:contain}.copy-right{width:100%;position:inherit;text-align:center;color:#333;bottom:30px;left:0;font-size:12px;font-weight:400;padding:20px}}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService, secretWord_service_1.SecretWordService])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;
