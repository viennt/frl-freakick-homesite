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
var ThreeColumnsLayoutComponent = (function () {
    function ThreeColumnsLayoutComponent() {
    }
    ThreeColumnsLayoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-layout-three-columns',
            template: "<div class=\"site-wrapper clearfix\">     <app-page-header></app-page-header>     <app-page-heading></app-page-heading>     <div class=\"site-content\">         <div class=\"container\">             <div class=\"row\">                 <div class=\"sidebar col-md-3 col-lg-3\">                     <app-second-menu-bar></app-second-menu-bar>                 </div>                 <div class=\"content col-md-9 col-lg-6\">                     <!-- BEGIN PAGE BASE CONTENT -->                     <ng-content select=\"[page-body]\"></ng-content>                 </div>                 <div class=\"sidebar col-lg-3 visible-lg\">                     <ng-content select=\"[page-right-sidebar]\"></ng-content>                 </div>             </div>         </div>     </div> </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ThreeColumnsLayoutComponent);
    return ThreeColumnsLayoutComponent;
}());
exports.ThreeColumnsLayoutComponent = ThreeColumnsLayoutComponent;
