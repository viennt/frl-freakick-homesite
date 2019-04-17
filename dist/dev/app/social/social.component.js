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
var SocialComponent = (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    };
    SocialComponent.prototype.calcFirstSectionOpacity = function (event) {
        var elHeight = this.section.nativeElement.offsetHeight;
        var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
        var opacity = 1 - (scrollToTop / (elHeight / 3));
        this.sectionOpacity = (opacity < 0.3) ? 0.3 : opacity;
        this.nonFixedBackground = (scrollToTop + window.innerHeight) >= elHeight;
    };
    __decorate([
        core_1.ViewChild('section'), 
        __metadata('design:type', Object)
    ], SocialComponent.prototype, "section", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SocialComponent.prototype, "calcFirstSectionOpacity", null);
    SocialComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-social',
            templateUrl: 'social.component.html',
            styleUrls: ['social.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SocialComponent);
    return SocialComponent;
}());
exports.SocialComponent = SocialComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJELGVBQWUsQ0FBQyxDQUFBO0FBUTNFO0lBTUk7SUFFQSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUUwQyxpREFBdUIsR0FBdkIsVUFBd0IsS0FBVTtRQUN6RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDdkQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDO0lBQzdFLENBQUM7SUFyQkQ7UUFBQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7b0RBQUE7SUFjckI7UUFBQyxtQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O2tFQUFBO0lBckI5QztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOzt1QkFBQTtJQXdCRixzQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksdUJBQWUsa0JBdUIzQixDQUFBIiwiZmlsZSI6ImFwcC9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZnJrLXNvY2lhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICdzb2NpYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzb2NpYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNvY2lhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgnc2VjdGlvbicpIHNlY3Rpb246IGFueTtcblxuICAgIHB1YmxpYyBzZWN0aW9uT3BhY2l0eTogbnVtYmVyO1xuICAgIHB1YmxpYyBub25GaXhlZEJhY2tncm91bmQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5ub25GaXhlZEJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWN0aW9uT3BhY2l0eSA9IDE7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFsnJGV2ZW50J10pIGNhbGNGaXJzdFNlY3Rpb25PcGFjaXR5KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGVsSGVpZ2h0ID0gdGhpcy5zZWN0aW9uLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgc2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBsZXQgb3BhY2l0eSA9IDEgLSAoc2Nyb2xsVG9Ub3AgLyAoZWxIZWlnaHQgLyAzKSk7XG5cbiAgICAgICAgdGhpcy5zZWN0aW9uT3BhY2l0eSA9IChvcGFjaXR5IDwgMC4zKSA/IDAuMyA6IG9wYWNpdHk7XG4gICAgICAgIHRoaXMubm9uRml4ZWRCYWNrZ3JvdW5kID0gKHNjcm9sbFRvVG9wICsgd2luZG93LmlubmVySGVpZ2h0KSA+PSBlbEhlaWdodDtcbiAgICB9XG59XG4iXX0=
