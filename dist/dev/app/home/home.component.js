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
var YT_VIDEO_CONFIG = {
    videoURL: 'ZSir-cK46rA',
    showControls: false,
    stopMovieOnBlur: false,
    containment: 'self',
    autoplay: true,
    mute: true,
    opacity: 1,
    loop: true
};
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.firstSectionOpacity = 1;
        this.nonFixedBackground = false;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.videoTimeout = setTimeout(function () {
            if (jQuery('#video').length)
                jQuery('#video').YTPlayer(YT_VIDEO_CONFIG);
        }, 2000);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.videoTimeout)
            clearTimeout(this.videoTimeout);
    };
    HomeComponent.prototype.calcFirstSectionOpacity = function (event) {
        var elHeight = this.firstSection.nativeElement.offsetHeight;
        var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollToTop < elHeight)
            this.firstSectionOpacity = 1 - (scrollToTop / (elHeight / 4));
        else
            this.firstSectionOpacity = 0;
        this.nonFixedBackground = scrollToTop + window.innerHeight >= elHeight;
    };
    HomeComponent.prototype.scrollTo = function (section) {
        jQuery('html, body').stop().animate({
            scrollTop: (document.getElementById(section).offsetTop)
        }, 1250, 'easeInOutExpo');
    };
    __decorate([
        core_1.ViewChild('firstSection'), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "firstSection", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HomeComponent.prototype, "calcFirstSectionOpacity", null);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFPTyxlQUFlLENBQUMsQ0FBQTtBQUV2QixJQUFNLGVBQWUsR0FBRztJQUN0QixRQUFRLEVBQUUsYUFBYTtJQUN2QixZQUFZLEVBQUUsS0FBSztJQUNuQixlQUFlLEVBQUUsS0FBSztJQUN0QixXQUFXLEVBQUUsTUFBTTtJQUNuQixRQUFRLEVBQUUsSUFBSTtJQUNkLElBQUksRUFBRSxJQUFJO0lBQ1YsT0FBTyxFQUFFLENBQUM7SUFDVixJQUFJLEVBQUUsSUFBSTtDQUNYLENBQUM7QUFXRjtJQVFFO0lBRUEsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztZQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRTBDLCtDQUF1QixHQUF2QixVQUF3QixLQUFVO1FBQzNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUM1RCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoRixFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUk7WUFBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUM7SUFDekUsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxPQUFlO1FBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDNUQsRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXRDRDtRQUFDLGdCQUFTLENBQUMsY0FBYyxDQUFDOzt1REFBQTtJQTBCMUI7UUFBQyxtQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O2dFQUFBO0lBakM1QztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQTBDRixvQkFBQztBQUFELENBekNBLEFBeUNDLElBQUE7QUF6Q1kscUJBQWEsZ0JBeUN6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IFlUX1ZJREVPX0NPTkZJRyA9IHtcbiAgdmlkZW9VUkw6ICdaU2lyLWNLNDZyQScsXG4gIHNob3dDb250cm9sczogZmFsc2UsXG4gIHN0b3BNb3ZpZU9uQmx1cjogZmFsc2UsXG4gIGNvbnRhaW5tZW50OiAnc2VsZicsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBtdXRlOiB0cnVlLFxuICBvcGFjaXR5OiAxLFxuICBsb29wOiB0cnVlXG59O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZmlyc3RTZWN0aW9uJykgZmlyc3RTZWN0aW9uOiBhbnk7XG5cbiAgcHVibGljIGZpcnN0U2VjdGlvbk9wYWNpdHk6IG51bWJlcjtcbiAgcHVibGljIG5vbkZpeGVkQmFja2dyb3VuZDogYm9vbGVhbjtcblxuICBwcml2YXRlIHZpZGVvVGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vXG4gIH1cblxuICBuZ09uSW5pdCgpOiBhbnkge1xuICAgIHRoaXMuZmlyc3RTZWN0aW9uT3BhY2l0eSA9IDE7XG4gICAgdGhpcy5ub25GaXhlZEJhY2tncm91bmQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnZpZGVvVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGpRdWVyeSgnI3ZpZGVvJykubGVuZ3RoKSBqUXVlcnkoJyN2aWRlbycpLllUUGxheWVyKFlUX1ZJREVPX0NPTkZJRyk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy52aWRlb1RpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLnZpZGVvVGltZW91dCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJywgWyckZXZlbnQnXSkgY2FsY0ZpcnN0U2VjdGlvbk9wYWNpdHkoZXZlbnQ6IGFueSkge1xuICAgIGxldCBlbEhlaWdodCA9IHRoaXMuZmlyc3RTZWN0aW9uLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGxldCBzY3JvbGxUb1RvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbFRvVG9wIDwgZWxIZWlnaHQpIHRoaXMuZmlyc3RTZWN0aW9uT3BhY2l0eSA9IDEgLSAoc2Nyb2xsVG9Ub3AgLyAoZWxIZWlnaHQgLyA0KSk7XG4gICAgZWxzZSB0aGlzLmZpcnN0U2VjdGlvbk9wYWNpdHkgPSAwO1xuICAgIHRoaXMubm9uRml4ZWRCYWNrZ3JvdW5kID0gc2Nyb2xsVG9Ub3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gZWxIZWlnaHQ7XG4gIH1cblxuICBzY3JvbGxUbyhzZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24pLm9mZnNldFRvcClcbiAgICAgIH0sIDEyNTAsICdlYXNlSW5PdXRFeHBvJyk7XG4gIH1cblxufVxuIl19
