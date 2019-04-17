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
            templateUrl: 'carousel-item.component.html',
            styleUrls: ['carousel-item.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ScrollCarouselItemComponent);
    return ScrollCarouselItemComponent;
}());
exports.ScrollCarouselItemComponent = ScrollCarouselItemComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3Njcm9sbC1jYXJvdXNlbC9pdGVtL2Nhcm91c2VsLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFRckU7SUFJRSxxQ0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDbEMsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7SUFDbEUsQ0FBQztJQUVELDJEQUFxQixHQUFyQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNuRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsaURBQVcsR0FBWCxVQUFZLGFBQXFCO1FBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUscUJBQXFCLEdBQUcsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFsQkQ7UUFBQyxZQUFLLENBQUMsZ0JBQWdCLENBQUM7O3VFQUFBO0lBUjFCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzs7bUNBQUE7SUFzQkYsa0NBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLG1DQUEyQiw4QkFxQnZDLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvc2Nyb2xsLWNhcm91c2VsL2l0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnaHAtc2Nyb2xsLWNhcm91c2VsLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJ2Nhcm91c2VsLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsQ2Fyb3VzZWxJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ3BsYWNlT2ZDb250ZW50JykgcGxhY2VPZkNvbnRlbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNQbGFjZU9mQ29udGVudFZhbGlkKCkpIHRoaXMucGxhY2VPZkNvbnRlbnQgPSAnbGVmdCc7XG4gIH1cblxuICBpc1BsYWNlT2ZDb250ZW50VmFsaWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnBsYWNlT2ZDb250ZW50KSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSBpZiAodGhpcy5wbGFjZU9mQ29udGVudC50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgaWYgKHRoaXMucGxhY2VPZkNvbnRlbnQudG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlU3R5bGUobnVtYmVyT2ZJdGVtczogbnVtYmVyKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IGNhbGMoMTAwJSAvICcgKyBudW1iZXJPZkl0ZW1zICsgJyknKTtcbiAgfVxufVxuIl19
