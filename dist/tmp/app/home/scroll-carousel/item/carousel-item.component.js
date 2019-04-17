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
var ScrollCarouselItemComponent = (function () {
    function ScrollCarouselItemComponent(el) {
        this.el = el;
    }
    ScrollCarouselItemComponent.prototype.ngOnInit = function () {
        if (!this.isPlaceOfContentValid())
            this.placeOfContent = 'left';
    };
    ScrollCarouselItemComponent.prototype.isPlaceOfContentValid = function () {
        if (!this.placeOfContent)
            return false;
        else if (this.placeOfContent.toLowerCase() === 'left')
            return true;
        else if (this.placeOfContent.toLowerCase() === 'right')
            return true;
        return false;
    };
    ScrollCarouselItemComponent.prototype.updateStyle = function (numberOfItems) {
        this.el.nativeElement.setAttribute('style', 'width: calc(100% / ' + numberOfItems + ')');
    };
    __decorate([
        core_1.Input('placeOfContent'), 
        __metadata('design:type', String)
    ], ScrollCarouselItemComponent.prototype, "placeOfContent", void 0);
    ScrollCarouselItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hp-scroll-carousel-item',
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-xs-12\">             <div class=\"row\">                 <div class=\"col-xs-6 parent\">                     <h2><ng-content select=\"[parent-title]\"></ng-content></h2>                     <p><ng-content select=\"[parent-description]\"></ng-content></p>                 </div>             </div>         </div>         <div class=\"col-xs-6 main\"              [class.col-xs-offset-6]=\"placeOfContent === 'right'\"              [class.text-right]=\"placeOfContent === 'right'\">             <h1><ng-content select=\"[title]\" class=\"title\"></ng-content></h1>             <p class=\"description\"><ng-content select=\"[description]\"></ng-content></p>         </div>     </div> </div> <div class=\"bg-main\"      [class.right]=\"placeOfContent !== 'right'\">     <ng-content select=\"[background]\"></ng-content> </div>",
            styles: [":host{padding-top:130px;padding-bottom:90px;float:left;line-height:2;color:#fcfcfc;position:relative;font-size:2vmin}.container,:host{height:100%}.parent h2{font-size:150%}.parent p{font-weight:200;line-height:1.5;font-size:110%}.main h1{font-size:250%;font-weight:700;letter-spacing:.25vmin;line-height:2}.main p{font-weight:400;line-height:1.5;font-size:130%}.bg-main{left:0;bottom:0;z-index:-1;max-width:100%;position:absolute;-webkit-backface-visibility:hidden;backface-visibility:hidden}.bg-main.right{left:auto;right:0}.bg-main>>>img{max-width:100%;max-height:100%}"]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ScrollCarouselItemComponent);
    return ScrollCarouselItemComponent;
}());
exports.ScrollCarouselItemComponent = ScrollCarouselItemComponent;
