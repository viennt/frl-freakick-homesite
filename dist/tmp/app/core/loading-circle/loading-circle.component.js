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
var LoadingCircleComponent = (function () {
    function LoadingCircleComponent() {
    }
    LoadingCircleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-loading-circle',
            template: '<div class="uil-ring-css" style="transform:scale(0.5);"><div></div></div>',
            styles: ["@-webkit-keyframes uil-ring-anim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes uil-ring-anim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.uil-ring-css{background:none;position:relative;width:200px;height:200px;margin:auto}.uil-ring-css>div{position:absolute;display:block;width:160px;height:160px;top:20px;left:20px;border-radius:80px;box-shadow:0 6px 0 0 #405367;-webkit-animation:uil-ring-anim .5s linear infinite;animation:uil-ring-anim .5s linear infinite}"]
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingCircleComponent);
    return LoadingCircleComponent;
}());
exports.LoadingCircleComponent = LoadingCircleComponent;
