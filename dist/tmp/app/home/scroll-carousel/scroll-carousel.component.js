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
var carousel_item_component_1 = require('./item/carousel-item.component');
var ScrollCarouselComponent = (function () {
    function ScrollCarouselComponent(el) {
        this.el = el;
    }
    ScrollCarouselComponent.prototype.ngOnInit = function () {
        this.slideTransform = 'translate3d(0, 0 , 0)';
        this.isScrollOnSlide = false;
        this.isScrollAfterSlide = false;
        this.isShowLeftArrow = false;
        this.isShowRightArrow = false;
    };
    ScrollCarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.items.forEach(function (item) { return item.updateStyle(_this.items.length); });
        this.el.nativeElement.setAttribute('style', 'height: calc(100vh * ' + this.items.length + ')');
        this.container.nativeElement.setAttribute('style', 'width: calc(100% * ' + this.items.length + ')');
    };
    ScrollCarouselComponent.prototype.ngAfterViewChecked = function () {
        this.elementScrollTop = this.el.nativeElement.offsetTop;
        this.elementHeight = this.el.nativeElement.offsetHeight;
    };
    ScrollCarouselComponent.prototype.scrollSlideEvent = function (event) {
        if (this.isScreenBeforeSlide()) {
            this.showFirstSlide();
        }
        else if (this.isScreenAfterSlide()) {
            this.showLastSlide();
        }
        else {
            var transformPercent = this.getScrollPercentOfElement();
            this.setNavigateArrow(transformPercent);
            this.showSpecificSlideByTransformPercent(transformPercent);
        }
    };
    ScrollCarouselComponent.prototype.showFirstSlide = function () {
        this.isScrollOnSlide = false;
        this.isScrollAfterSlide = false;
        this.isShowLeftArrow = true;
        this.isShowRightArrow = false;
        this.slideTransform = 'translate3d(0, 0, 0)';
    };
    ScrollCarouselComponent.prototype.showLastSlide = function () {
        this.isScrollOnSlide = false;
        this.isScrollAfterSlide = true;
        this.isShowLeftArrow = false;
        this.isShowRightArrow = true;
        this.slideTransform = 'translate3d(' + -(100 * (this.items.length - 1) / this.items.length) + '%, 0, 0)';
    };
    ScrollCarouselComponent.prototype.showSpecificSlideByTransformPercent = function (transformPercent) {
        this.isScrollOnSlide = true;
        this.isScrollAfterSlide = false;
        this.slideTransform = 'translate3d(' + transformPercent + '%, 0, 0)';
    };
    ScrollCarouselComponent.prototype.scrollWindow = function (offset) {
        jQuery('html, body').stop().animate({
            scrollTop: (offset)
        }, 1250, 'easeInOutExpo');
    };
    ScrollCarouselComponent.prototype.nextSlide = function () {
        var currentTransformPercent = this.getScrollPercentOfElement();
        var nextTransformPercent = this.getNextTransformPercent(currentTransformPercent);
        var nextScrollOffset = this.getScrollOffsetFromPercent(nextTransformPercent);
        this.scrollWindow(nextScrollOffset);
    };
    ScrollCarouselComponent.prototype.prevSlide = function () {
        var currentTransformPercent = this.getScrollPercentOfElement();
        var prevTransformPercent = this.getPrevTransformPercent(currentTransformPercent);
        var prevScrollOffset = this.getScrollOffsetFromPercent(prevTransformPercent);
        this.scrollWindow(prevScrollOffset);
    };
    ScrollCarouselComponent.prototype.setNavigateArrow = function (transformPercent) {
        if (transformPercent >= -5) {
            this.isShowLeftArrow = true;
            this.isShowRightArrow = false;
        }
        else if (transformPercent <= -95 + (100 / this.items.length)) {
            this.isShowLeftArrow = false;
            this.isShowRightArrow = true;
        }
        else {
            this.isShowLeftArrow = true;
            this.isShowRightArrow = true;
        }
    };
    ScrollCarouselComponent.prototype.getNextTransformPercent = function (currentPercent) {
        var nextPercent = currentPercent;
        for (var i = 1; i <= this.items.length - 1; i++) {
            if (Math.round(currentPercent) > Math.round(-100 / this.items.length * i)) {
                nextPercent = -100 / this.items.length * i;
                break;
            }
            else if (Math.round(currentPercent) === Math.round(-100 / this.items.length * i)) {
                nextPercent = -100 / this.items.length * (i + 1);
                break;
            }
        }
        return nextPercent;
    };
    ScrollCarouselComponent.prototype.getPrevTransformPercent = function (currentPercent) {
        var prevPercent = currentPercent;
        for (var i = this.items.length - 1; i >= 1; i--) {
            if (Math.round(currentPercent) < Math.round(-100 / this.items.length * i)) {
                prevPercent = -100 / this.items.length * i;
                break;
            }
            else if (Math.round(currentPercent) === Math.round(-100 / this.items.length * i)) {
                prevPercent = -100 / this.items.length * (i - 1);
                break;
            }
        }
        return prevPercent;
    };
    ScrollCarouselComponent.prototype.getScrollPercentOfElement = function () {
        return (this.elementScrollTop - this.getDocumentScrollOffset()) / this.elementHeight * 100;
        ;
    };
    ScrollCarouselComponent.prototype.getScrollOffsetFromPercent = function (percent) {
        return this.elementScrollTop - (percent / 100 * this.elementHeight);
    };
    ScrollCarouselComponent.prototype.getDocumentScrollOffset = function () {
        return document.documentElement.scrollTop || document.body.scrollTop;
    };
    ScrollCarouselComponent.prototype.isScreenBeforeSlide = function () {
        return this.getDocumentScrollOffset() < this.elementScrollTop;
    };
    ScrollCarouselComponent.prototype.isScreenAfterSlide = function () {
        return this.getDocumentScrollOffset() > (this.elementScrollTop + this.elementHeight - window.innerHeight);
    };
    __decorate([
        core_1.ContentChildren(carousel_item_component_1.ScrollCarouselItemComponent), 
        __metadata('design:type', core_1.QueryList)
    ], ScrollCarouselComponent.prototype, "items", void 0);
    __decorate([
        core_1.ViewChild('slideContainer'), 
        __metadata('design:type', Object)
    ], ScrollCarouselComponent.prototype, "container", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ScrollCarouselComponent.prototype, "scrollSlideEvent", null);
    ScrollCarouselComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hp-scroll-carousel',
            template: "<div id=\"pinContainer\" *ngIf=\"items && items.length\"      [class.on-slide]=\"isScrollOnSlide\"      [class.after-slide]=\"isScrollAfterSlide\">     <div id=\"slideContainer\" #slideContainer          [style.transform]=\"slideTransform\">         <ng-content select=\"hp-scroll-carousel-item\"></ng-content>     </div>     <div *ngIf=\"isShowLeftArrow\"          class=\"next-slide animated fadeInRight\"          (click)=\"nextSlide($event)\">         <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>     </div>     <div *ngIf=\"isShowRightArrow\"          class=\"prev-slide animated fadeInLeft\"          (click)=\"prevSlide($event)\">         <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>     </div> </div>",
            styles: [":host{top:auto;left:auto;bottom:auto;right:auto;margin:0;display:block;position:relative;box-sizing:content-box}:host-context(.home-section){background:transparent}#pinContainer{overflow:hidden;-webkit-perspective:1000;perspective:1000;position:absolute;margin:auto;top:0;bottom:auto;left:0;right:auto;box-sizing:border-box;width:100%;height:100vh}#pinContainer.after-slide{top:auto;bottom:0}#pinContainer.on-slide{position:fixed}#slideContainer{height:100%}.next-slide,.prev-slide{position:fixed;top:calc(50% - 7.5vmin);cursor:pointer;color:#fcfcfc;font-size:15vmin}.next-slide:hover,.prev-slide:hover{text-shadow:0 0 6px #fcfcfc}.next-slide{right:2vmin}.prev-slide{left:2vmin}"],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ScrollCarouselComponent);
    return ScrollCarouselComponent;
}());
exports.ScrollCarouselComponent = ScrollCarouselComponent;
