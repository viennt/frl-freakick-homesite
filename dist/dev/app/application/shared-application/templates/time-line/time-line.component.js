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
var Event_1 = require('../../../../models/Event');
var TimeLineComponent = (function () {
    function TimeLineComponent() {
        this.eventTypes = Event_1.Event.type;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TimeLineComponent.prototype, "events", void 0);
    TimeLineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-template-time-line',
            templateUrl: 'time-line.component.html',
            styleUrls: ['time-line.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TimeLineComponent);
    return TimeLineComponent;
}());
exports.TimeLineComponent = TimeLineComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vdGVtcGxhdGVzL3RpbWUtbGluZS90aW1lLWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFFNUQsc0JBQXNCLDBCQUEwQixDQUFDLENBQUE7QUFRakQ7SUFNRTtRQUZBLGVBQVUsR0FBRyxhQUFLLENBQUMsSUFBSSxDQUFDO0lBSXhCLENBQUM7SUFQRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFQVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7O3lCQUFBO0lBV0Ysd0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHlCQUFpQixvQkFVN0IsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uL3RlbXBsYXRlcy90aW1lLWxpbmUvdGltZS1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9FdmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC10ZW1wbGF0ZS10aW1lLWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJ3RpbWUtbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0aW1lLWxpbmUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lTGluZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGV2ZW50czogRXZlbnRbXTtcblxuICBzZWxlY3RlZEV2ZW50OiBFdmVudDtcbiAgZXZlbnRUeXBlcyA9IEV2ZW50LnR5cGU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9cbiAgfVxuXG59XG4iXX0=
