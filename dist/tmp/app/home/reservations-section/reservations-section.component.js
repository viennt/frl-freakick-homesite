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
var ReservationsSectionComponent = (function () {
    function ReservationsSectionComponent() {
    }
    ReservationsSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hp-reservations-section',
            template: "<div class=\"container\">     <div class=\"overlay\"></div>     <div class=\"row\">         <div class=\"col-sm-7\">             <div class=\"section-content\">Reservations</div>             <h1>We bring users to the event</h1>             <br>             <div class=\"row\">                 <div class=\"col-xs-12\">                     <a class=\"learn-more\" [routerLink]=\"['/reservations/intro']\">Learn more</a>                 </div>             </div>         </div>         <div class=\"col-sm-5\">             <img class=\"reservations-image\" src=\"./assets/images/home-page/iOS-reservation.png\" alt=\"\">         </div>     </div> </div>",
            styles: [":host{position:relative;color:#333;background-color:#e3f2fd;padding:50px 0 0;display:block;text-align:center}@media (min-width:768px){:host{text-align:left;padding:60px 0 0}}.overlay{background:url(assets/images/home-page/reservation-bg.png) 50% no-repeat;background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%}h1{font-weight:700;font-size:30px;margin-top:0}.section-content{font-weight:500;font-size:21px}.button{float:left;width:100%;text-align:center}.learn-more{background:transparent;border:1px solid #333;color:#333;font-size:18px;letter-spacing:.25vmin;border-radius:500px;padding:7px 20px;box-shadow:0 0 20px hsla(0,0%,6%,.25);text-decoration:none;margin:0;cursor:pointer;transition:all .3s}.learn-more:hover{background:#333;color:#fcfcfc}.reservations-image{width:100%}@media (max-width:767px){.learn-more,.reservations-image{margin-top:20px}}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ReservationsSectionComponent);
    return ReservationsSectionComponent;
}());
exports.ReservationsSectionComponent = ReservationsSectionComponent;
