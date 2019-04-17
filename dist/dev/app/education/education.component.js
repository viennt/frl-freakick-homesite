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
var Observable_1 = require('../../../../node_modules/rxjs/Observable');
var TypeWriter = [
    'Transforming the City into a Classroom'
];
var Space = '                    ';
var TypeWriterArray = TypeWriter.map(function (typeWriterText) {
    return typeWriterText + Space;
});
var EducationComponent = (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
        var twDisplays$ = TypeWriterArray.map(function (typeWriterText) {
            return Observable_1.Observable
                .interval(50)
                .timeInterval()
                .take(typeWriterText.length + 1)
                .map(function (val, index) { return typeWriterText.substr(0, index); });
        });
        this.typeWriterDisplay$ = Observable_1.Observable.concat.apply(Observable_1.Observable, twDisplays$);
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    };
    EducationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-education',
            templateUrl: 'education.component.html',
            styleUrls: ['education.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], EducationComponent);
    return EducationComponent;
}());
exports.EducationComponent = EducationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELDJCQUEyQiwwQ0FBMEMsQ0FBQyxDQUFBO0FBRXRFLElBQU0sVUFBVSxHQUFhO0lBQzNCLHdDQUF3QztDQUN6QyxDQUFDO0FBQ0YsSUFBTSxLQUFLLEdBQVcsc0JBQXNCLENBQUM7QUFDN0MsSUFBTSxlQUFlLEdBQWEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLGNBQWM7SUFDN0QsT0FBQSxjQUFjLEdBQUcsS0FBSztBQUF0QixDQUFzQixDQUN2QixDQUFDO0FBUUY7SUFBQTtJQW9CQSxDQUFDO0lBZEMscUNBQVEsR0FBUjtRQUNFLElBQUksV0FBVyxHQUFVLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBQSxjQUFjO1lBQ3pELE9BQUEsdUJBQVU7aUJBQ1AsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixZQUFZLEVBQUU7aUJBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQixHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUM7UUFKdkQsQ0FJdUQsQ0FDeEQsQ0FBQztRQUNGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyx1QkFBVSxDQUFDLE1BQU0sT0FBakIsdUJBQVUsRUFBVyxXQUFXLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUF4Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7MEJBQUE7SUFxQkYseUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDBCQUFrQixxQkFvQjlCLENBQUEiLCJmaWxlIjoiYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUnO1xuXG5jb25zdCBUeXBlV3JpdGVyOiBzdHJpbmdbXSA9IFtcbiAgJ1RyYW5zZm9ybWluZyB0aGUgQ2l0eSBpbnRvIGEgQ2xhc3Nyb29tJ1xuXTtcbmNvbnN0IFNwYWNlOiBzdHJpbmcgPSAnICAgICAgICAgICAgICAgICAgICAnO1xuY29uc3QgVHlwZVdyaXRlckFycmF5OiBzdHJpbmdbXSA9IFR5cGVXcml0ZXIubWFwKHR5cGVXcml0ZXJUZXh0ID0+XG4gIHR5cGVXcml0ZXJUZXh0ICsgU3BhY2Vcbik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay1lZHVjYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ2VkdWNhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydlZHVjYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVkdWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB0eXBlV3JpdGVyRGlzcGxheSQ6IGFueTtcblxuICBwdWJsaWMgc2VjdGlvbk9wYWNpdHk6IG51bWJlcjtcbiAgcHVibGljIG5vbkZpeGVkQmFja2dyb3VuZDogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgdHdEaXNwbGF5cyQ6IGFueVtdID0gVHlwZVdyaXRlckFycmF5Lm1hcCh0eXBlV3JpdGVyVGV4dCA9PlxuICAgICAgT2JzZXJ2YWJsZVxuICAgICAgICAuaW50ZXJ2YWwoNTApXG4gICAgICAgIC50aW1lSW50ZXJ2YWwoKVxuICAgICAgICAudGFrZSh0eXBlV3JpdGVyVGV4dC5sZW5ndGggKyAxKVxuICAgICAgICAubWFwKCh2YWwsIGluZGV4KSA9PiB0eXBlV3JpdGVyVGV4dC5zdWJzdHIoMCwgaW5kZXgpKVxuICAgICk7XG4gICAgdGhpcy50eXBlV3JpdGVyRGlzcGxheSQgPSBPYnNlcnZhYmxlLmNvbmNhdCguLi50d0Rpc3BsYXlzJCk7XG5cbiAgICB0aGlzLm5vbkZpeGVkQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgIHRoaXMuc2VjdGlvbk9wYWNpdHkgPSAxO1xuICB9XG5cbn1cbiJdfQ==
