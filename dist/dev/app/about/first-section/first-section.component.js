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
    videoURL: 'oUM3aUvTAgw',
    showControls: false,
    stopMovieOnBlur: false,
    containment: 'self',
    autoplay: true,
    mute: true,
    opacity: 1,
    loop: true
};
var FirstSectionComponent = (function () {
    function FirstSectionComponent() {
    }
    FirstSectionComponent.prototype.ngAfterViewInit = function () {
        this.videoTimeout = setTimeout(function () {
            if (jQuery('#video').length)
                jQuery('#video').YTPlayer(YT_VIDEO_CONFIG);
        }, 0);
    };
    FirstSectionComponent.prototype.ngOnDestroy = function () {
        if (this.videoTimeout)
            clearTimeout(this.videoTimeout);
    };
    FirstSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'abt-first-section',
            templateUrl: 'first-section.component.html',
            styleUrls: ['first-section.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FirstSectionComponent);
    return FirstSectionComponent;
}());
exports.FirstSectionComponent = FirstSectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9maXJzdC1zZWN0aW9uL2ZpcnN0LXNlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFFcEUsSUFBTSxlQUFlLEdBQUc7SUFDdEIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsWUFBWSxFQUFFLEtBQUs7SUFDbkIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsV0FBVyxFQUFFLE1BQU07SUFDbkIsUUFBUSxFQUFFLElBQUk7SUFDZCxJQUFJLEVBQUUsSUFBSTtJQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1YsSUFBSSxFQUFFLElBQUk7Q0FDWCxDQUFDO0FBV0Y7SUFJRTtJQUVBLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXRCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7OzZCQUFBO0lBa0JGLDRCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSw2QkFBcUIsd0JBaUJqQyxDQUFBIiwiZmlsZSI6ImFwcC9hYm91dC9maXJzdC1zZWN0aW9uL2ZpcnN0LXNlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgWVRfVklERU9fQ09ORklHID0ge1xuICB2aWRlb1VSTDogJ29VTTNhVXZUQWd3JyxcbiAgc2hvd0NvbnRyb2xzOiBmYWxzZSxcbiAgc3RvcE1vdmllT25CbHVyOiBmYWxzZSxcbiAgY29udGFpbm1lbnQ6ICdzZWxmJyxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIG11dGU6IHRydWUsXG4gIG9wYWNpdHk6IDEsXG4gIGxvb3A6IHRydWVcbn07XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhYnQtZmlyc3Qtc2VjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnZmlyc3Qtc2VjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmaXJzdC1zZWN0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaXJzdFNlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgdmlkZW9UaW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnZpZGVvVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGpRdWVyeSgnI3ZpZGVvJykubGVuZ3RoKSBqUXVlcnkoJyN2aWRlbycpLllUUGxheWVyKFlUX1ZJREVPX0NPTkZJRyk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy52aWRlb1RpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLnZpZGVvVGltZW91dCk7XG4gIH1cbn1cbiJdfQ==
