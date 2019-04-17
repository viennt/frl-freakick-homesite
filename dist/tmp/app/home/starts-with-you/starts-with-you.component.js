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
var StartsWithYouComponent = (function () {
    function StartsWithYouComponent() {
    }
    StartsWithYouComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hp-starts-with-you',
            template: "<div class=\"container\">     <div class=\"overlay\"></div>     <h1 class=\"text-center\">feel like a local anywhere you go</h1><br/>     <div class=\"row\">         <div class=\"col-sm-4\">             <div class=\"stack discover\">                 <div class=\"description\">                     Benefit from intelligent matchmaking, which recommends active experiences, whether those are organized, purely social, or sports around your city.                 </div>                 <div class=\"image-content\">                     <div class=\"phone\">                         <div class=\"screen-shot\"></div>                     </div>                 </div>                 <div class=\"title\">                     You can't engineer it. It just happens.                 </div>             </div>         </div>         <div class=\"col-sm-4\">             <div class=\"stack review\">                 <div class=\"description\">                     Check out, rate, and join any of the activities we cover in detail--before, after, and most importantly, during the event.                 </div>                 <div class=\"image-content\">                     <div class=\"phone\">                         <div class=\"screen-shot\"></div>                     </div>                 </div>                 <div class=\"title\">A game is more than the sum of its players.</div>             </div>         </div>         <div class=\"col-sm-4\">             <div class=\"stack follow\">                 <div class=\"description\">                     ...All while adding a layer of fun and competitiveness via augment-reality experiences.                 </div>                 <div class=\"image-content\">                     <div class=\"phone\">                         <div class=\"screen-shot\"></div>                     </div>                 </div>                 <div class=\"title\">Be known!</div>             </div>         </div>     </div> </div>",
            styles: [":host{position:relative;color:#fcfcfc;background-color:#101010;padding:50px 0;display:block}@media (min-width:768px){:host{padding:60px 0}}.overlay{background:url(assets/images/home-page/it-starts-with-you/background.jpeg) 50% no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%;opacity:.2}h1{font-weight:700}.stack{text-decoration:none;box-shadow:0 0 10px hsla(0,0%,6%,.2);transition:all .3s;margin:auto auto 50px;position:relative}.stack img{width:100%}.stack .title{width:202px;margin-top:10px;margin-left:calc(50% - 200px / 2)}.stack .description,.stack .title{text-align:center;margin-bottom:10px}@media (min-width:768px){.stack .description{height:130px}}@media (min-width:992px){.stack .description{height:100px}}@media (min-width:1200px){.stack .description{height:80px}}.stack .image-content{height:470px;position:relative;margin:auto}.stack .image-content .phone{position:absolute;height:100%;width:100%;top:0;left:0;background:url(assets/images/home-page/phone.png) 50% no-repeat;background-size:contain}.stack .image-content .screen-shot{position:absolute;top:57px;left:calc(50% - 200px / 2);width:202px;height:356px;border-radius:2px}.stack.discover .image-content .screen-shot{background:url(assets/images/home-page/it-starts-with-you/iOS-home.jpg) 50% no-repeat;background-size:cover}.stack.review .image-content .screen-shot{background:url(assets/images/home-page/it-starts-with-you/iOS-event.jpg) 50% no-repeat;background-size:cover}.stack.follow .image-content .screen-shot{background:url(assets/images/home-page/it-starts-with-you/iOS-guild.jpg) 50% no-repeat;background-size:cover}"]
        }), 
        __metadata('design:paramtypes', [])
    ], StartsWithYouComponent);
    return StartsWithYouComponent;
}());
exports.StartsWithYouComponent = StartsWithYouComponent;
