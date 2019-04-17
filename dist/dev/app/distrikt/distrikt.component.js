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
var DistriktComponent = (function () {
    function DistriktComponent() {
    }
    DistriktComponent.prototype.ngOnInit = function () {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    };
    __decorate([
        core_1.ViewChild('section'), 
        __metadata('design:type', Object)
    ], DistriktComponent.prototype, "section", void 0);
    DistriktComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-distrikt',
            templateUrl: 'distrikt.component.html',
            styleUrls: ['distrikt.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DistriktComponent);
    return DistriktComponent;
}());
exports.DistriktComponent = DistriktComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXN0cmlrdC9kaXN0cmlrdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyRCxlQUFlLENBQUMsQ0FBQTtBQVEzRTtJQUFBO0lBV0EsQ0FBQztJQUxHLG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFSRDtRQUFDLGdCQUFTLENBQUMsU0FBUyxDQUFDOztzREFBQTtJQVB6QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDOzt5QkFBQTtJQVlGLHdCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx5QkFBaUIsb0JBVzdCLENBQUEiLCJmaWxlIjoiYXBwL2Rpc3RyaWt0L2Rpc3RyaWt0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZnJrLWRpc3RyaWt0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpc3RyaWt0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZGlzdHJpa3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpc3RyaWt0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCdzZWN0aW9uJykgc2VjdGlvbjogYW55O1xuXG4gICAgcHVibGljIHNlY3Rpb25PcGFjaXR5OiBudW1iZXI7XG4gICAgcHVibGljIG5vbkZpeGVkQmFja2dyb3VuZDogYm9vbGVhbjtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5vbkZpeGVkQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlY3Rpb25PcGFjaXR5ID0gMTtcbiAgICB9XG5cbn1cbiJdfQ==
