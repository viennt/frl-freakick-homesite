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
            templateUrl: 'scroll-carousel.component.html',
            styleUrls: ['scroll-carousel.component.css'],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ScrollCarouselComponent);
    return ScrollCarouselComponent;
}());
exports.ScrollCarouselComponent = ScrollCarouselComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3Njcm9sbC1jYXJvdXNlbC9zY3JvbGwtY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFVTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix3Q0FBNEMsZ0NBQWdDLENBQUMsQ0FBQTtBQVE3RTtJQWFFLGlDQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNsQyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpREFBZSxHQUFmO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsb0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFB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O1FBQUMsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQzs7OERBQUE7SUF3QjVCO1FBQUMsbUJBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzttRUFBQTtJQXpDNUM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDOzsrQkFBQTtJQXdKRiw4QkFBQztBQUFELENBdkpBLEFBdUpDLElBQUE7QUF2SlksK0JBQXVCLDBCQXVKbkMsQ0FBQSIsImZpbGUiOiJhcHAvaG9tZS9zY3JvbGwtY2Fyb3VzZWwvc2Nyb2xsLWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBBZnRlclZpZXdDaGVja2VkLFxuICBIb3N0TGlzdGVuZXIsXG4gIFF1ZXJ5TGlzdCxcbiAgRWxlbWVudFJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxDYXJvdXNlbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdocC1zY3JvbGwtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJ3Njcm9sbC1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzY3JvbGwtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIHB1YmxpYyBzbGlkZVRyYW5zZm9ybTogc3RyaW5nO1xuICBwdWJsaWMgaXNTY3JvbGxPblNsaWRlOiBib29sZWFuO1xuICBwdWJsaWMgaXNTY3JvbGxBZnRlclNsaWRlOiBib29sZWFuO1xuICBwdWJsaWMgaXNTaG93TGVmdEFycm93OiBib29sZWFuO1xuICBwdWJsaWMgaXNTaG93UmlnaHRBcnJvdzogYm9vbGVhbjtcblxuICBwdWJsaWMgZWxlbWVudFNjcm9sbFRvcDogbnVtYmVyOyAvLyBUaGUgbnVtYmVyIG9mIHBpeGVscyBjb21wb25lbnQncyBjb250ZW50IGlzIHNjcm9sbGVkIHZlcnRpY2FsbHkuXG4gIHB1YmxpYyBlbGVtZW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihTY3JvbGxDYXJvdXNlbEl0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8U2Nyb2xsQ2Fyb3VzZWxJdGVtQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVDb250YWluZXInKSBjb250YWluZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNsaWRlVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsIDAgLCAwKSc7XG4gICAgdGhpcy5pc1Njcm9sbE9uU2xpZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2Nyb2xsQWZ0ZXJTbGlkZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNTaG93TGVmdEFycm93ID0gZmFsc2U7XG4gICAgdGhpcy5pc1Nob3dSaWdodEFycm93ID0gZmFsc2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IGl0ZW0udXBkYXRlU3R5bGUodGhpcy5pdGVtcy5sZW5ndGgpKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6IGNhbGMoMTAwdmggKiAnICsgdGhpcy5pdGVtcy5sZW5ndGggKyAnKScpO1xuICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogY2FsYygxMDAlICogJyArIHRoaXMuaXRlbXMubGVuZ3RoICsgJyknKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnRTY3JvbGxUb3AgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgc2Nyb2xsU2xpZGVFdmVudChldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNTY3JlZW5CZWZvcmVTbGlkZSgpKSB7XG4gICAgICB0aGlzLnNob3dGaXJzdFNsaWRlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzU2NyZWVuQWZ0ZXJTbGlkZSgpKSB7XG4gICAgICB0aGlzLnNob3dMYXN0U2xpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRyYW5zZm9ybVBlcmNlbnQgPSB0aGlzLmdldFNjcm9sbFBlcmNlbnRPZkVsZW1lbnQoKTtcbiAgICAgIHRoaXMuc2V0TmF2aWdhdGVBcnJvdyh0cmFuc2Zvcm1QZXJjZW50KTtcbiAgICAgIHRoaXMuc2hvd1NwZWNpZmljU2xpZGVCeVRyYW5zZm9ybVBlcmNlbnQodHJhbnNmb3JtUGVyY2VudCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0ZpcnN0U2xpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc1Njcm9sbE9uU2xpZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2Nyb2xsQWZ0ZXJTbGlkZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNTaG93TGVmdEFycm93ID0gdHJ1ZTtcbiAgICB0aGlzLmlzU2hvd1JpZ2h0QXJyb3cgPSBmYWxzZTtcbiAgICB0aGlzLnNsaWRlVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJztcbiAgfVxuXG4gIHNob3dMYXN0U2xpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc1Njcm9sbE9uU2xpZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2Nyb2xsQWZ0ZXJTbGlkZSA9IHRydWU7XG4gICAgdGhpcy5pc1Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2hvd1JpZ2h0QXJyb3cgPSB0cnVlO1xuICAgIHRoaXMuc2xpZGVUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIC0oMTAwICogKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkgLyB0aGlzLml0ZW1zLmxlbmd0aCkgKyAnJSwgMCwgMCknO1xuICB9XG5cbiAgc2hvd1NwZWNpZmljU2xpZGVCeVRyYW5zZm9ybVBlcmNlbnQodHJhbnNmb3JtUGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc1Njcm9sbE9uU2xpZGUgPSB0cnVlO1xuICAgIHRoaXMuaXNTY3JvbGxBZnRlclNsaWRlID0gZmFsc2U7XG4gICAgdGhpcy5zbGlkZVRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdHJhbnNmb3JtUGVyY2VudCArICclLCAwLCAwKSc7XG4gIH1cblxuICBzY3JvbGxXaW5kb3cob2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IChvZmZzZXQpXG4gICAgfSwgMTI1MCwgJ2Vhc2VJbk91dEV4cG8nKTtcbiAgfVxuXG4gIG5leHRTbGlkZSgpIHtcbiAgICBsZXQgY3VycmVudFRyYW5zZm9ybVBlcmNlbnQgPSB0aGlzLmdldFNjcm9sbFBlcmNlbnRPZkVsZW1lbnQoKTtcbiAgICBsZXQgbmV4dFRyYW5zZm9ybVBlcmNlbnQgPSB0aGlzLmdldE5leHRUcmFuc2Zvcm1QZXJjZW50KGN1cnJlbnRUcmFuc2Zvcm1QZXJjZW50KTtcbiAgICBsZXQgbmV4dFNjcm9sbE9mZnNldCA9IHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0RnJvbVBlcmNlbnQobmV4dFRyYW5zZm9ybVBlcmNlbnQpO1xuICAgIHRoaXMuc2Nyb2xsV2luZG93KG5leHRTY3JvbGxPZmZzZXQpO1xuICB9XG5cbiAgcHJldlNsaWRlKCkge1xuICAgIGxldCBjdXJyZW50VHJhbnNmb3JtUGVyY2VudCA9IHRoaXMuZ2V0U2Nyb2xsUGVyY2VudE9mRWxlbWVudCgpO1xuICAgIGxldCBwcmV2VHJhbnNmb3JtUGVyY2VudCA9IHRoaXMuZ2V0UHJldlRyYW5zZm9ybVBlcmNlbnQoY3VycmVudFRyYW5zZm9ybVBlcmNlbnQpO1xuICAgIGxldCBwcmV2U2Nyb2xsT2Zmc2V0ID0gdGhpcy5nZXRTY3JvbGxPZmZzZXRGcm9tUGVyY2VudChwcmV2VHJhbnNmb3JtUGVyY2VudCk7XG4gICAgdGhpcy5zY3JvbGxXaW5kb3cocHJldlNjcm9sbE9mZnNldCk7XG4gIH1cblxuICBzZXROYXZpZ2F0ZUFycm93KHRyYW5zZm9ybVBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0cmFuc2Zvcm1QZXJjZW50ID49IC01KSB7XG4gICAgICB0aGlzLmlzU2hvd0xlZnRBcnJvdyA9IHRydWU7XG4gICAgICB0aGlzLmlzU2hvd1JpZ2h0QXJyb3cgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRyYW5zZm9ybVBlcmNlbnQgPD0gLTk1ICsgKDEwMCAvIHRoaXMuaXRlbXMubGVuZ3RoKSkge1xuICAgICAgdGhpcy5pc1Nob3dMZWZ0QXJyb3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTaG93UmlnaHRBcnJvdyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTaG93TGVmdEFycm93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNTaG93UmlnaHRBcnJvdyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0TmV4dFRyYW5zZm9ybVBlcmNlbnQoY3VycmVudFBlcmNlbnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IG5leHRQZXJjZW50OiBudW1iZXIgPSBjdXJyZW50UGVyY2VudDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKE1hdGgucm91bmQoY3VycmVudFBlcmNlbnQpID4gTWF0aC5yb3VuZCgtMTAwIC8gdGhpcy5pdGVtcy5sZW5ndGggKiBpKSkge1xuICAgICAgICBuZXh0UGVyY2VudCA9IC0xMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCAqIGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChNYXRoLnJvdW5kKGN1cnJlbnRQZXJjZW50KSA9PT0gTWF0aC5yb3VuZCgtMTAwIC8gdGhpcy5pdGVtcy5sZW5ndGggKiBpKSkge1xuICAgICAgICBuZXh0UGVyY2VudCA9IC0xMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCAqIChpICsgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV4dFBlcmNlbnQ7XG4gIH1cblxuICBnZXRQcmV2VHJhbnNmb3JtUGVyY2VudChjdXJyZW50UGVyY2VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgcHJldlBlcmNlbnQ6IG51bWJlciA9IGN1cnJlbnRQZXJjZW50O1xuICAgIGZvciAobGV0IGkgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMTsgaS0tKSB7XG4gICAgICBpZiAoTWF0aC5yb3VuZChjdXJyZW50UGVyY2VudCkgPCBNYXRoLnJvdW5kKC0xMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCAqIGkpKSB7XG4gICAgICAgIHByZXZQZXJjZW50ID0gLTEwMCAvIHRoaXMuaXRlbXMubGVuZ3RoICogaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKE1hdGgucm91bmQoY3VycmVudFBlcmNlbnQpID09PSBNYXRoLnJvdW5kKC0xMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCAqIGkpKSB7XG4gICAgICAgIHByZXZQZXJjZW50ID0gLTEwMCAvIHRoaXMuaXRlbXMubGVuZ3RoICogKGkgLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcmV2UGVyY2VudDtcbiAgfVxuXG4gIGdldFNjcm9sbFBlcmNlbnRPZkVsZW1lbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuZWxlbWVudFNjcm9sbFRvcCAtIHRoaXMuZ2V0RG9jdW1lbnRTY3JvbGxPZmZzZXQoKSkgLyB0aGlzLmVsZW1lbnRIZWlnaHQgKiAxMDA7XG4gICAgO1xuICB9XG5cbiAgZ2V0U2Nyb2xsT2Zmc2V0RnJvbVBlcmNlbnQocGVyY2VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50U2Nyb2xsVG9wIC0gKHBlcmNlbnQgLyAxMDAgKiB0aGlzLmVsZW1lbnRIZWlnaHQpO1xuICB9XG5cbiAgZ2V0RG9jdW1lbnRTY3JvbGxPZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgfVxuXG4gIGlzU2NyZWVuQmVmb3JlU2xpZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RG9jdW1lbnRTY3JvbGxPZmZzZXQoKSA8IHRoaXMuZWxlbWVudFNjcm9sbFRvcDtcbiAgfVxuXG4gIGlzU2NyZWVuQWZ0ZXJTbGlkZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXREb2N1bWVudFNjcm9sbE9mZnNldCgpID4gKHRoaXMuZWxlbWVudFNjcm9sbFRvcCArIHRoaXMuZWxlbWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cbn1cbiJdfQ==
