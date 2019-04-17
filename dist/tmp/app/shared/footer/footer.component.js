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
var constants_1 = require('../../constants');
var FooterComponent = (function () {
    function FooterComponent() {
        this.externalUrl = constants_1.CONFIG;
    }
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-footer',
            template: "<div class=\"container\">     <div class=\"\">         <div class=\"first-line\">             <div class=\"col-sm-4 col-sm-push-8 no-padding\">                 <ul class=\"list-inline social-buttons\">                     <li><a><i class=\"fa fa-twitter\"></i></a></li>                     <li><a><i class=\"fa fa-facebook\"></i></a></li>                     <li><a><i class=\"fa fa-instagram\"></i></a></li>                 </ul>             </div>             <div class=\"col-sm-8 col-sm-pull-4 no-padding\">                 <div class=\"row\">                     <div class=\"col-sm-12 relative-link\">                         <a [routerLink]=\"['/social']\">Social</a>                         <a href=\"{{ externalUrl.BUSINESS_URL }}\">Business</a>                         <a [routerLink]=\"['/leagues']\">Leagues</a>                         <a [routerLink]=\"['/brands']\">Brands</a>                         <a [routerLink]=\"['/reservations/intro']\">Reservations</a>                         <a [routerLink]=\"['/initiative']\">Initiative</a>                     </div>                 </div>             </div>         </div>     </div>     <div class=\"\">         <div class=\"second-line\">             <div class=\"col-sm-4 col-sm-push-8 no-padding\">                 <div class=\"row\">                     <div class=\"col-sm-12 refer\">                         <a [routerLink]=\"['/about']\">About</a>                         <a (click)=\"contactForm.open()\">Contact Us</a>                         <a [routerLink]=\"['/about/privacy']\">Privacy</a>                         <a [routerLink]=\"['/legal/terms']\">Terms of Use</a>                     </div>                 </div>             </div>             <div class=\"col-sm-8 col-sm-pull-4 no-padding\">                 <div class=\"row\">                     <div class=\"col-sm-12 copyright\">                         <span class=\"flat hidden-xs\"><img src=\"./assets/images/home-page/us_sml.png\" alt=\"United States\" width=\"14\" height=\"10\"></span>                         <span class=\"country hidden-xs\">United States </span>                         <span>Copyright &copy; 2018 Freakick, Inc. All Rights Reserved.</span>                     </div>                 </div>             </div>         </div>     </div> </div> <frk-contact-form #contactForm></frk-contact-form>",
            styles: [":host{padding:5px 0;display:block;box-shadow:0 0 20px hsla(0,0%,6%,.25);background-color:#101010}@media (min-width:768px){:host{padding:15px 0}}.flat{line-height:0;font-size:20px}.country{color:#fcfcfc;font-size:14px;line-height:1.5;padding-right:15px}.refer{text-align:right}.copyright,.refer{color:gray;font-size:14px;line-height:1.5}.refer a{color:#fcfcfc;padding-left:15px;transition:all .3s}.refer a:hover{text-decoration:none;color:#e53935}.relative-link{line-height:1.5}.relative-link>a{color:#fcfcfc;font-size:14px;padding-right:15px;transition:all .3s}.relative-link>a:hover{text-decoration:none;color:#e53935}.relative-link>a:last-child{border:none}.social-buttons{margin:0;text-align:right;cursor:pointer}.social-buttons a{display:block;background-color:#dedede;height:25px;width:25px;border-radius:100%;font-size:13px;line-height:2;color:#101010;outline:none;transition:all .3s;text-align:center}.social-buttons a:hover{color:#e53935}@media (max-width:767px){.copyright,.relative-link,.social-buttons{text-align:center;padding:5px}.refer{text-align:center}}.first-line{padding-bottom:5px;float:left;width:100%}.second-line{border-top:1px solid #787878;padding-top:5px;float:left;width:100%}"]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
