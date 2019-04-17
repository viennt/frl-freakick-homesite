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
var index_1 = require('./plugins/notifi/index');
var core_2 = require('angular2-cookie/core');
var md5_1 = require('ts-md5/dist/md5');
var constants_1 = require('./constants');
require('./operators');
var AppComponent = (function () {
    function AppComponent(router, _notificationsService, cookieService) {
        this.router = router;
        this._notificationsService = _notificationsService;
        this.cookieService = cookieService;
        this.options = {
            timeOut: 2000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 0,
            maxStacks: 7,
            preventDuplicates: 0,
            preventLastDuplicates: 'visible',
            rtl: false,
            animate: 'scale',
            position: ['bottom', 'right']
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.distinctUntilChanged(function (previous, current) {
            if (current instanceof router_1.NavigationEnd) {
                return previous.url === current.url;
            }
            return true;
        }).subscribe(function (x) {
            ga('set', 'page', x.url);
            var secretCode = _this.cookieService.get('sc');
            var user = _this.getUserBySecretCode(secretCode);
            ga('set', 'dimension1', user);
            ga('set', 'metric1', user);
            ga('send', 'pageview');
        });
        this.router.events.subscribe(function (evt) {
            if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod' && evt instanceof router_1.NavigationStart) {
                console.log('\n\n\n\n\n%c[PAGE] ' + evt.url, 'background: #8775A7; color: white; font-size: 10px; padding: 2px; border-radius: 3px;');
            }
            if (!(evt instanceof router_1.NavigationEnd))
                return;
            window.scrollTo(0, 0);
        });
        this.isAgreedCookiePolicy = localStorage.getItem('FREAKICKCOOKIE')
            && localStorage.getItem('FREAKICKCOOKIE') === 'Agree';
    };
    AppComponent.prototype.getUserBySecretCode = function (secretCode) {
        if (!secretCode)
            return 'Anonymous';
        var hashedSecretCode = String(md5_1.Md5.hashStr(secretCode));
        if (hashedSecretCode === 'd14dfc71841fe74bf16a58b6ef33a339') {
            return 'Neil Jacobs';
        }
        if (hashedSecretCode === 'f6d94c23a520dd929f43a2d7ff231bc1') {
            return 'Dennis Coleman';
        }
        if (hashedSecretCode === '73e275849b7d2c334f4fa002119ebb5d') {
            return 'Leon Graves';
        }
        if (hashedSecretCode === '0b422944e9e10a753b208f4a98ac1b07') {
            return 'Mark Papas';
        }
        if (hashedSecretCode === '21e5bbf8748a4874a51f589f25b29126') {
            return 'Grannatt';
        }
        if (hashedSecretCode === '3edbcfdb6ccafda48b802a566e465da2') {
            return 'Lamar';
        }
        if (hashedSecretCode === '467bebb868325b40f72195d0997841cc') {
            return 'Richard Kenah';
        }
        if (hashedSecretCode === 'b54b6f30209fa12744e9915bd8349a74') {
            return 'Tony Blaize';
        }
        if (hashedSecretCode === '2cc476dcca87e4fb2b7c22688a8ea1bd') {
            return 'Lamar Kendricks';
        }
        if (hashedSecretCode === '654a887db446ba5954538f893a0eb00e') {
            return 'Freakickers';
        }
        if (hashedSecretCode === 'a3410817019348047145f6fa57121101') {
            return 'Freakickers';
        }
        return 'Anonymous';
    };
    AppComponent.prototype.onClickAgreeCookiePolicy = function () {
        localStorage.setItem('FREAKICKCOOKIE', 'Agree');
        this.isAgreedCookiePolicy = localStorage.getItem('FREAKICKCOOKIE')
            && localStorage.getItem('FREAKICKCOOKIE') === 'Agree';
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            template: "<router-outlet></router-outlet> <simple-notifications [options]=\"options\"></simple-notifications> <div *ngIf=\"!isAgreedCookiePolicy\" class=\"cookie-policy-panel\">     <p>         <span>Freakick sites use cookies and other tracking technologies. By using Freakick sites, you are agreeing to our revised</span>         <a [routerLink]=\"['/', 'about', 'privacy']\">Privacy Policy</a> <span>and</span>         <a [routerLink]=\"['/', 'legal', 'terms']\">Terms of Service</a><span>, including our Cookie Policy.</span>     </p>     <div class=\"button-agree\" (click)=\"onClickAgreeCookiePolicy()\">I Agree</div> </div>",
            styles: [".cookie-policy-panel{position:fixed;bottom:0;left:0;width:100%;background:#fff;padding:1rem 3rem 2rem;border-top:5px solid #25507f;text-align:center}.button-agree{color:#2973ac;font-size:18px;border:1px solid #2973ac;background:transparent;letter-spacing:.25vmin;border-radius:500px;padding:7px 20px;text-decoration:none;text-shadow:none;cursor:pointer;transition:all .3s;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}.button-agree:hover{background:#333;color:#fcfcfc}"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.NotificationsService, core_2.CookieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
