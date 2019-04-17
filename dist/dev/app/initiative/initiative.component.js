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
var InitiativeComponent = (function () {
    function InitiativeComponent() {
    }
    InitiativeComponent.prototype.ngOnInit = function () {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    };
    InitiativeComponent.prototype.calcFirstSectionOpacity = function (event) {
        var elHeight = this.section.nativeElement.offsetHeight;
        var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
        var opacity = 1 - (scrollToTop / (elHeight / 3));
        this.sectionOpacity = (opacity < 0.3) ? 0.3 : opacity;
        this.nonFixedBackground = (scrollToTop + window.innerHeight) >= elHeight;
    };
    __decorate([
        core_1.ViewChild('section'), 
        __metadata('design:type', Object)
    ], InitiativeComponent.prototype, "section", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InitiativeComponent.prototype, "calcFirstSectionOpacity", null);
    InitiativeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-initiative',
            templateUrl: 'initiative.component.html',
            styleUrls: ['initiative.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InitiativeComponent);
    return InitiativeComponent;
}());
exports.InitiativeComponent = InitiativeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbml0aWF0aXZlL2luaXRpYXRpdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkQsZUFBZSxDQUFDLENBQUE7QUFRM0U7SUFNSTtJQUVBLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRTBDLHFEQUF1QixHQUF2QixVQUF3QixLQUFVO1FBQ3pFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUN2RCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoRixJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUM7SUFDN0UsQ0FBQztJQXJCRDtRQUFDLGdCQUFTLENBQUMsU0FBUyxDQUFDOzt3REFBQTtJQWNyQjtRQUFDLG1CQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7c0VBQUE7SUFyQjlDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQzs7MkJBQUE7SUF5QkYsMEJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLDJCQUFtQixzQkF3Qi9CLENBQUEiLCJmaWxlIjoiYXBwL2luaXRpYXRpdmUvaW5pdGlhdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2Zyay1pbml0aWF0aXZlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2luaXRpYXRpdmUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydpbml0aWF0aXZlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbml0aWF0aXZlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCdzZWN0aW9uJykgc2VjdGlvbjogYW55O1xuXG4gICAgcHVibGljIHNlY3Rpb25PcGFjaXR5OiBudW1iZXI7XG4gICAgcHVibGljIG5vbkZpeGVkQmFja2dyb3VuZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5vbkZpeGVkQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlY3Rpb25PcGFjaXR5ID0gMTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJywgWyckZXZlbnQnXSkgY2FsY0ZpcnN0U2VjdGlvbk9wYWNpdHkoZXZlbnQ6IGFueSkge1xuICAgICAgICBsZXQgZWxIZWlnaHQgPSB0aGlzLnNlY3Rpb24ubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGxldCBzY3JvbGxUb1RvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGxldCBvcGFjaXR5ID0gMSAtIChzY3JvbGxUb1RvcCAvIChlbEhlaWdodCAvIDMpKTtcblxuICAgICAgICB0aGlzLnNlY3Rpb25PcGFjaXR5ID0gKG9wYWNpdHkgPCAwLjMpID8gMC4zIDogb3BhY2l0eTtcbiAgICAgICAgdGhpcy5ub25GaXhlZEJhY2tncm91bmQgPSAoc2Nyb2xsVG9Ub3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQpID49IGVsSGVpZ2h0O1xuICAgIH1cblxufVxuIl19
