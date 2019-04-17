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
var authentication_service_1 = require('../../services/authentication.service');
var constants_1 = require('../../constants');
var NavbarComponent = (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.externalUrl = constants_1.CONFIG;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.userName = this.authService.getItem('userName');
        this.isInvert = false;
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        this.setupBootstrapScroll();
    };
    NavbarComponent.prototype.changeInvert = function (event) {
        var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
        var screenHeight = window.innerHeight;
        this.isInvert = scrollToTop > 1.5 * screenHeight;
    };
    NavbarComponent.prototype.setupBootstrapScroll = function () {
        jQuery('#mainNav').affix({
            offset: {
                top: 50
            }
        });
    };
    NavbarComponent.prototype.login = function () {
        this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        location.reload();
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NavbarComponent.prototype, "changeInvert", null);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-navbar',
            template: "<!-- Navigation --> <div class=\"nav-fade hidden-xs\"></div> <nav id=\"mainNav\" class=\"navbar navbar-default navbar-custom navbar-fixed-top\"   [class.invert]=\"isInvert\">   <div class=\"container\">     <!-- Brand and toggle get grouped for better mobile display -->     <div class=\"navbar-header page-scroll\">       <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">         <span class=\"sr-only\">Toggle navigation</span><i class=\"fa fa-bars\"></i>       </button>       <a class=\"navbar-brand page-scroll\" [routerLink]=\"['/home']\">         <img alt=\"Brand\" src=\"./assets/images/logo/freakick_logo_light.png\">         <div class=\"company-name\">Freakick</div>       </a>     </div>      <!-- Collect the nav links, forms, and other content for toggling -->     <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">       <ul class=\"nav navbar-nav navbar-right\">         <li class=\"hidden\">           <a href=\"#page-top\"></a>         </li>         <!--<li class=\"line hidden-xs\"></li>-->         <!--<li *ngIf=\"!isLoggedIn\">-->           <!--<a [routerLink]=\"['/login']\" class=\"page-scroll user\" href=\"\">Login</a>-->         <!--</li>-->         <li>             <a [routerLink]=\"['/download']\" class=\"page-scroll user\">Download</a>         </li>         <li *ngIf=\"!isLoggedIn\" class=\"border\">             <a [routerLink]=\"['/login']\" class=\"page-scroll login\">Log in</a>         </li>         <li *ngIf=\"isLoggedIn\">           <a class=\"page-scroll user\">{{ userName }}</a>         </li>         <li *ngIf=\"isLoggedIn\">           <a class=\"page-scroll user\" (click)=\"logout()\">Logout</a>         </li>       </ul>     </div>     <!-- /.navbar-collapse -->   </div>   <!-- /.container-fluid --> </nav> <div class=\"nav-offset\"></div>",
            styles: [":host-context(.reservations) .navbar-custom{background:#da3743}:host-context(.landing) .navbar-custom .navbar-brand img{-webkit-filter:invert(100%);filter:invert(100%)}:host-context(.landing) .navbar-custom>>>*{color:#333!important}:host-context(.landing) .navbar-default .nav li.line{background-color:#333}@media (max-width:767px){:host-context(.landing) .navbar-custom .navbar-brand img{-webkit-filter:invert(0);filter:invert(0)}:host-context(.landing) .navbar-custom>>>*{color:#fff!important}}:host-context(.events) .navbar-custom{background:#205081}:host-context(.home) .navbar-custom{background:#fff}:host-context(.about) .navbar-custom,:host-context(.league) .navbar-custom{background:#101010}:host-context(.contact) .navbar-custom{background:#00aeef}:host-context(.about) .nav-fade,:host-context(.activity) .nav-fade,:host-context(.events) .nav-fade,:host-context(.home) .nav-fade,:host-context(.initiative) .nav-fade,:host-context(.landing) .nav-fade,:host-context(.league) .nav-fade,:host-context(.reservations) .nav-fade{display:none}:host-context(.contact) .nav-fade{position:absolute;top:0;left:0;width:100%;height:100vh;opacity:.2;pointer-events:none}:host-context(.about) .nav-offset,:host-context(.events) .nav-offset,:host-context(.home) .nav-offset,:host-context(.initiative) .nav-offset,:host-context(.league) .nav-offset,:host-context(.reservations) .nav-offset{height:60px}@media (max-width:767px){:host-context(.about) .nav-offset,:host-context(.events) .nav-offset,:host-context(.home) .nav-offset,:host-context(.initiative) .nav-offset,:host-context(.league) .nav-offset,:host-context(.reservations) .nav-offset{height:50px}}.nav-fade{position:absolute;top:0;left:0;width:100%;height:150vh;opacity:.2;pointer-events:none}.navbar-custom{border-color:transparent}.navbar-custom .navbar-brand{color:#fed136}.navbar-custom .navbar-brand.active,.navbar-custom .navbar-brand:active,.navbar-custom .navbar-brand:focus,.navbar-custom .navbar-brand:hover{color:#fec503}.navbar-custom .navbar-collapse{border-color:hsla(0,0%,100%,.02)}.navbar-custom .navbar-toggle{background-color:transparent;border-color:transparent;text-transform:uppercase;margin-top:5px;margin-bottom:5px;font-size:25px;color:#fff;padding:0}.navbar-custom .nav li a{font-size:16px;font-weight:700;color:#fff}.navbar-custom .nav li a:focus,.navbar-custom .nav li a:hover{color:#fcfcfc;opacity:.75;outline:none}.navbar-custom .navbar-nav>.active>a{border-radius:0;color:#fff;background-color:#fed136}.navbar-custom .navbar-nav>.active>a:focus,.navbar-custom .navbar-nav>.active>a:hover{color:#fff;background-color:#fec503}.navbar-default{background-color:#101010;box-shadow:none}.navbar-default .nav li{cursor:pointer;margin:0}.navbar-default .nav li.line{height:16px;width:1px;margin:17px;background-color:#fcfcfc}.navbar-brand{padding:5px;cursor:pointer}.navbar-brand img{height:100%;float:left;transition:all .5s}.navbar-brand .company-name{color:#fcfcfc;float:left;height:100%;padding:10px;font-size:16px;font-weight:700}.navbar-custom .nav li a.user{opacity:.6;font-weight:600}.navbar-custom .nav li.border{margin-top:10px}.navbar-custom .nav li a.login{padding-top:5px;padding-bottom:5px;background-color:transparent;border:1px solid #fff;color:#fff;border-radius:1.25rem}@media (min-width:768px){.navbar-custom{background-color:transparent;padding:5px 0;transition:all .5s}.navbar-custom .navbar-brand{font-size:2em}.navbar-custom .navbar-nav>.active>a{border-radius:3px}}@media (min-width:768px){.navbar-custom.affix{background-color:#101010;border-bottom:1px solid #101010;padding:0}.navbar-custom.affix .navbar-brand{font-size:1.5em}.navbar-custom.affix .navbar-brand img{height:calc(100% - 10px);margin:5px auto}:host-context(.contact) .navbar-custom.affix{border-bottom:none;background-color:#00aeef}}.navbar-custom.invert.affix{background-color:#fcfcfc;border-bottom:1px solid rgba(51,51,51,.2)}:host-context(.contact) .navbar-custom.affix{border-bottom:none;background-color:#00aeef}.navbar-custom.invert.affix *{color:#333!important}.navbar-custom.invert.affix .navbar-brand img{-webkit-filter:invert(100%);filter:invert(100%)}.navbar-custom.invert.affix .nav li.line{background-color:#101010}.navbar-custom.invert.affix .nav li.border{border:1px solid #000;border-radius:1.25rem}"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
