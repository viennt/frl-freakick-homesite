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
var Observable_1 = require('rxjs/Observable');
var TypeWriter = [
    'Everything starts here',
    'What are you doing today?'
];
var Space = '                    ';
var TypeWriterArray = TypeWriter.map(function (typeWriterText) {
    return typeWriterText + Space;
});
var YT_VIDEO_CONFIG = {
    videoURL: 'e48zVXSMumw',
    useOnMobile: true,
    coverImage: 'https://www.freakick.com/assets/images/landing-page/background.jpg',
    showControls: false,
    stopMovieOnBlur: false,
    containment: 'self',
    autoplay: true,
    mute: true,
    opacity: 1,
    loop: false
};
var JoinFreakickComponent = (function () {
    function JoinFreakickComponent() {
    }
    JoinFreakickComponent.prototype.ngOnInit = function () {
        var _this = this;
        var twDisplays$ = TypeWriterArray.map(function (typeWriterText) {
            return Observable_1.Observable
                .interval(50)
                .timeInterval()
                .take(typeWriterText.length + 1)
                .map(function (val, index) { return typeWriterText.substr(0, index); });
        });
        this.videoTimeout = setTimeout(function () {
            var videoEl = jQuery('#video');
            if (videoEl.length) {
                videoEl.YTPlayer(YT_VIDEO_CONFIG);
                videoEl.on('YTPEnd', function (e) {
                    if (e.time === 7) {
                        _this.typeWriterDisplay$ = Observable_1.Observable.concat.apply(Observable_1.Observable, twDisplays$);
                        window.scrollTo({ top: 1 });
                    }
                });
            }
        }, 0);
    };
    JoinFreakickComponent.prototype.ngOnDestroy = function () {
        if (this.videoTimeout)
            clearTimeout(this.videoTimeout);
    };
    JoinFreakickComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-join-freakick',
            templateUrl: 'join-freakick.component.html',
            styleUrls: ['join-freakick.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], JoinFreakickComponent);
    return JoinFreakickComponent;
}());
exports.JoinFreakickComponent = JoinFreakickComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qb2luLWZyZWFraWNrL2pvaW4tZnJlYWtpY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsSUFBTSxVQUFVLEdBQWE7SUFDM0Isd0JBQXdCO0lBQ3hCLDJCQUEyQjtDQUM1QixDQUFDO0FBQ0YsSUFBTSxLQUFLLEdBQVcsc0JBQXNCLENBQUM7QUFDN0MsSUFBTSxlQUFlLEdBQWEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLGNBQWM7SUFDN0QsT0FBQSxjQUFjLEdBQUcsS0FBSztBQUF0QixDQUFzQixDQUN2QixDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUc7SUFDdEIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsV0FBVyxFQUFFLElBQUk7SUFDakIsVUFBVSxFQUFFLG9FQUFvRTtJQUNoRixZQUFZLEVBQUUsS0FBSztJQUNuQixlQUFlLEVBQUUsS0FBSztJQUN0QixXQUFXLEVBQUUsTUFBTTtJQUNuQixRQUFRLEVBQUUsSUFBSTtJQUNkLElBQUksRUFBRSxJQUFJO0lBQ1YsT0FBTyxFQUFFLENBQUM7SUFDVixJQUFJLEVBQUUsS0FBSztDQUNaLENBQUM7QUFRRjtJQUFBO0lBK0JBLENBQUM7SUEzQkMsd0NBQVEsR0FBUjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLFdBQVcsR0FBVSxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQUEsY0FBYztZQUN6RCxPQUFBLHVCQUFVO2lCQUNQLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osWUFBWSxFQUFFO2lCQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDL0IsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssSUFBSyxPQUFBLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDO1FBSnZELENBSXVELENBQ3hELENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDLFVBQUMsQ0FBTTtvQkFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixLQUFJLENBQUMsa0JBQWtCLEdBQUcsdUJBQVUsQ0FBQyxNQUFNLE9BQWpCLHVCQUFVLEVBQVcsV0FBVyxDQUFDLENBQUM7d0JBQzVELE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFuQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDOzs2QkFBQTtJQWdDRiw0QkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksNkJBQXFCLHdCQStCakMsQ0FBQSIsImZpbGUiOiJhcHAvam9pbi1mcmVha2ljay9qb2luLWZyZWFraWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5jb25zdCBUeXBlV3JpdGVyOiBzdHJpbmdbXSA9IFtcbiAgJ0V2ZXJ5dGhpbmcgc3RhcnRzIGhlcmUnLFxuICAnV2hhdCBhcmUgeW91IGRvaW5nIHRvZGF5Pydcbl07XG5jb25zdCBTcGFjZTogc3RyaW5nID0gJyAgICAgICAgICAgICAgICAgICAgJztcbmNvbnN0IFR5cGVXcml0ZXJBcnJheTogc3RyaW5nW10gPSBUeXBlV3JpdGVyLm1hcCh0eXBlV3JpdGVyVGV4dCA9PlxuICB0eXBlV3JpdGVyVGV4dCArIFNwYWNlXG4pO1xuXG5jb25zdCBZVF9WSURFT19DT05GSUcgPSB7XG4gIHZpZGVvVVJMOiAnZTQ4elZYU011bXcnLFxuICB1c2VPbk1vYmlsZTogdHJ1ZSxcbiAgY292ZXJJbWFnZTogJ2h0dHBzOi8vd3d3LmZyZWFraWNrLmNvbS9hc3NldHMvaW1hZ2VzL2xhbmRpbmctcGFnZS9iYWNrZ3JvdW5kLmpwZycsXG4gIHNob3dDb250cm9sczogZmFsc2UsXG4gIHN0b3BNb3ZpZU9uQmx1cjogZmFsc2UsXG4gIGNvbnRhaW5tZW50OiAnc2VsZicsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBtdXRlOiB0cnVlLFxuICBvcGFjaXR5OiAxLFxuICBsb29wOiBmYWxzZVxufTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLWpvaW4tZnJlYWtpY2snLFxuICB0ZW1wbGF0ZVVybDogJ2pvaW4tZnJlYWtpY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnam9pbi1mcmVha2ljay5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSm9pbkZyZWFraWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgdHlwZVdyaXRlckRpc3BsYXkkOiBhbnk7XG4gIHByaXZhdGUgdmlkZW9UaW1lb3V0OiBhbnk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IHR3RGlzcGxheXMkOiBhbnlbXSA9IFR5cGVXcml0ZXJBcnJheS5tYXAodHlwZVdyaXRlclRleHQgPT5cbiAgICAgIE9ic2VydmFibGVcbiAgICAgICAgLmludGVydmFsKDUwKVxuICAgICAgICAudGltZUludGVydmFsKClcbiAgICAgICAgLnRha2UodHlwZVdyaXRlclRleHQubGVuZ3RoICsgMSlcbiAgICAgICAgLm1hcCgodmFsLCBpbmRleCkgPT4gdHlwZVdyaXRlclRleHQuc3Vic3RyKDAsIGluZGV4KSlcbiAgICApO1xuXG4gICAgdGhpcy52aWRlb1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCB2aWRlb0VsID0galF1ZXJ5KCcjdmlkZW8nKTtcbiAgICAgIGlmICh2aWRlb0VsLmxlbmd0aCkge1xuICAgICAgICB2aWRlb0VsLllUUGxheWVyKFlUX1ZJREVPX0NPTkZJRyk7XG4gICAgICAgIHZpZGVvRWwub24oJ1lUUEVuZCcsKGU6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlLnRpbWUgPT09IDcpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZVdyaXRlckRpc3BsYXkkID0gT2JzZXJ2YWJsZS5jb25jYXQoLi4udHdEaXNwbGF5cyQpO1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDF9KTsgLy8gRml4IGFuZ3VsYXIncyByZW5kZXIgaXNzdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudmlkZW9UaW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy52aWRlb1RpbWVvdXQpO1xuICB9XG5cbn1cbiJdfQ==
