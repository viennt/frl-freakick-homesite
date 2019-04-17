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
var ReservationsComponent = (function () {
    function ReservationsComponent() {
    }
    ReservationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-reservations',
            template: "<sd-navbar class=\"reservations\"></sd-navbar>  <div class=\"container\">     <div class=\"col-xs-12 no-padding\">         <sd-search class=\"reservations\"></sd-search>     </div> </div>  <router-outlet></router-outlet>  <sd-new-footer></sd-new-footer>",
            styles: ["\n      :host {\n          display: block;\n          height: 100%;\n          background: #fcfcfc\n      }\n\n      :host .container {\n          margin-top: 15px;\n      }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ReservationsComponent);
    return ReservationsComponent;
}());
exports.ReservationsComponent = ReservationsComponent;
