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
var OneColumnLayoutComponent = (function () {
    function OneColumnLayoutComponent() {
    }
    OneColumnLayoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-layout-one-column',
            template: "<div class=\"site-wrapper clearfix\">     <app-page-header></app-page-header>     <app-page-heading></app-page-heading>     <div class=\"site-content\">         <div class=\"container\">             <!-- BEGIN CONTENT BODY -->             <div class=\"row\">                 <div class=\"col-md-12\">                     <ng-content select=\"[page-body]\"></ng-content>                 </div>             </div>         </div>     </div> </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], OneColumnLayoutComponent);
    return OneColumnLayoutComponent;
}());
exports.OneColumnLayoutComponent = OneColumnLayoutComponent;
