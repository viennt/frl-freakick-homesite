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
var ClassSchedule_1 = require('../../../models/ClassSchedule');
var ClassScheduleComponent = (function () {
    function ClassScheduleComponent() {
    }
    ClassScheduleComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if ('classSchedule' === propName) {
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ClassSchedule_1.ClassSchedule)
    ], ClassScheduleComponent.prototype, "classSchedule", void 0);
    ClassScheduleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-class-schedule',
            templateUrl: 'class-schedule.component.html',
            styleUrls: ['class-schedule.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ClassScheduleComponent);
    return ClassScheduleComponent;
}());
exports.ClassScheduleComponent = ClassScheduleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYm9va2luZy9jbGFzcy1zY2hlZHVsZS9jbGFzcy1zY2hlZHVsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0QyxlQUFlLENBQUMsQ0FBQTtBQUs1RCw4QkFBOEIsK0JBQStCLENBQUMsQ0FBQTtBQVE5RDtJQUFBO0lBV0EsQ0FBQztJQVBDLDRDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsZUFBZSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFbkMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBUkQ7UUFBQyxZQUFLLEVBQUU7O2lFQUFBO0lBUlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDOzs4QkFBQTtJQVlGLDZCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSw4QkFBc0IseUJBV2xDLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9ib29raW5nL2NsYXNzLXNjaGVkdWxlL2NsYXNzLXNjaGVkdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEltcG9ydCBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgQ2xhc3NTY2hlZHVsZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9DbGFzc1NjaGVkdWxlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtY2xhc3Mtc2NoZWR1bGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NsYXNzLXNjaGVkdWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NsYXNzLXNjaGVkdWxlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDbGFzc1NjaGVkdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBjbGFzc1NjaGVkdWxlOiBDbGFzc1NjaGVkdWxlO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IGFueSB7XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKCdjbGFzc1NjaGVkdWxlJyA9PT0gcHJvcE5hbWUpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
