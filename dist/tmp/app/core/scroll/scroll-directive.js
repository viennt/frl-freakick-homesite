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
var HIDDEN_CLASSES = ' hide ';
var ANIMATED_CLASSES = ' animated ';
var DEFAULT_ANIMATED_CLASS = ' fadeIn ';
var ScrollDirective = (function () {
    function ScrollDirective(el) {
        this.el = el;
        this.scrollAbove = new core_1.EventEmitter();
        this.scrollBelow = new core_1.EventEmitter();
        this.scrollOn = new core_1.EventEmitter();
        this.animatedClass = this.animatedClass || DEFAULT_ANIMATED_CLASS;
        this.initialClasses = this.el.nativeElement.className;
        this.el.nativeElement.style.visibility = 'hidden';
    }
    ScrollDirective.prototype.onScroll = function (event) {
        if (this.isScreenAboveElement()) {
            this.scrollAbove.emit(this.getPixelToElement());
        }
        else if (this.isScreenBelowElement()) {
            this.scrollBelow.emit(this.getPixelPastElement());
        }
        else {
            this.el.nativeElement.style.visibility = 'visible';
            this.el.nativeElement.className = this.initialClasses + ANIMATED_CLASSES + this.animatedClass;
            this.scrollOn.emit();
        }
    };
    ScrollDirective.prototype.getDocumentScrollOffset = function () {
        return (document.documentElement.scrollTop || document.body.scrollTop) + (window.innerHeight / 2);
    };
    ScrollDirective.prototype.getPixelToElement = function () {
        var pixelToEl = this.el.nativeElement.offsetTop - this.getDocumentScrollOffset();
        return (pixelToEl >= 0) ? pixelToEl : 0;
    };
    ScrollDirective.prototype.getPixelPastElement = function () {
        var pixelPastEl = this.getDocumentScrollOffset() - (this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight);
        return (pixelPastEl <= 0) ? pixelPastEl : 0;
    };
    ScrollDirective.prototype.isScreenAboveElement = function () {
        return this.getDocumentScrollOffset() < this.el.nativeElement.offsetTop;
    };
    ScrollDirective.prototype.isScreenBelowElement = function () {
        return this.getDocumentScrollOffset() < (this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight);
    };
    __decorate([
        core_1.Input('animation'), 
        __metadata('design:type', String)
    ], ScrollDirective.prototype, "animatedClass", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollDirective.prototype, "scrollAbove", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollDirective.prototype, "scrollBelow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollDirective.prototype, "scrollOn", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ScrollDirective.prototype, "onScroll", null);
    ScrollDirective = __decorate([
        core_1.Directive({
            selector: '[frk-scroll]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ScrollDirective);
    return ScrollDirective;
}());
exports.ScrollDirective = ScrollDirective;
