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
var WhatOnFreakickComponent = (function () {
    function WhatOnFreakickComponent() {
        this.scroll = new core_1.EventEmitter();
    }
    WhatOnFreakickComponent.prototype.scrollTo = function (section) {
        this.scroll.emit(section);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WhatOnFreakickComponent.prototype, "scroll", void 0);
    WhatOnFreakickComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hp-what-on-freakick',
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-sm-6\">             <img src=\"./assets/images/home-page/whats-on-freakick.png\" alt=\"\">         </div>         <div class=\"col-sm-6\">             <h2>What’s on Freakick?</h2>             <div class=\"title\">Leagues</div>             <p class=\"description\">                 &quot;Play for the name on the front of the jersey. We will make sure they remember the name on the back.&quot;             </p>             <div class=\"title\">Pickups</div>             <p class=\"description\">                 &quot;Together we determine ideal fits based on game and user engagement. Is not that we call it, is millions of users that do.&quot;             </p>             <div class=\"title\">Reservations</div>             <p class=\"description\">                 &quot;We bring players to the game.&quot;             </p>         </div>     </div> </div>",
            styles: ["img{height:55vmin;border-radius:2vmin;box-shadow:0 0 2vmin hsla(0,0%,6%,.6)}h2{font-size:35px;text-align:left;margin:0 0 3vmin}.title{font-size:4vmin;font-weight:500;letter-spacing:.25vmin;color:#2979ff}.description{line-height:1.5;font-weight:300;font-size:2.5vmin;margin:.5em auto;color:#787878}.see-more{text-decoration:underline;white-space:nowrap;cursor:pointer;color:#7bb6f3}"]
        }), 
        __metadata('design:paramtypes', [])
    ], WhatOnFreakickComponent);
    return WhatOnFreakickComponent;
}());
exports.WhatOnFreakickComponent = WhatOnFreakickComponent;
