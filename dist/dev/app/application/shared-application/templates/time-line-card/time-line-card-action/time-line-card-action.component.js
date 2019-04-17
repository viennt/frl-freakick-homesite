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
var Event_1 = require('../../../../../models/Event');
var message_service_1 = require('../../../../../services/message.service');
var UpdateInterested_1 = require('../../../../../packages/UpdateInterested');
var TimeLineCardActionComponent = (function () {
    function TimeLineCardActionComponent(messageService) {
        this.messageService = messageService;
    }
    TimeLineCardActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    TimeLineCardActionComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'LIKE_EVENT_SUCCESS':
                if (message.data.eventLikeMsg.eventId === this.event.id) {
                    this.isLoadingLikeEvent = false;
                    this.event.numberOfLikes = this.event.numberOfLikes + 1;
                }
                break;
            case 'UNLIKE_EVENT_SUCCESS':
                if (message.data.eventLikeMsg.eventId === this.event.id) {
                    this.isLoadingLikeEvent = false;
                    this.event.numberOfLikes = this.event.numberOfLikes - 1;
                }
                break;
        }
    };
    TimeLineCardActionComponent.prototype.onLikeEvent = function () {
        if (this.isLoadingLikeEvent)
            return;
        this.isLoadingLikeEvent = true;
        var apiPackage = new UpdateInterested_1.LikeOrUnlikeAnEvent().setEventId(this.event.id);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Event_1.Event)
    ], TimeLineCardActionComponent.prototype, "event", void 0);
    TimeLineCardActionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-template-time-line-card-action',
            templateUrl: 'time-line-card-action.component.html',
            styles: ["\n      .meta__item {\n          font-size: 14px;\n      }\n  "]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], TimeLineCardActionComponent);
    return TimeLineCardActionComponent;
}());
exports.TimeLineCardActionComponent = TimeLineCardActionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vdGVtcGxhdGVzL3RpbWUtbGluZS1jYXJkL3RpbWUtbGluZS1jYXJkLWFjdGlvbi90aW1lLWxpbmUtY2FyZC1hY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsc0JBQXNCLDZCQUE2QixDQUFDLENBQUE7QUFDcEQsZ0NBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFDekUsaUNBQW9DLDBDQUEwQyxDQUFDLENBQUE7QUFZL0U7SUFPRSxxQ0FBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRWxELENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDdEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVELG1EQUFhLEdBQWIsVUFBYyxPQUFZO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEtBQUssb0JBQW9CO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO29CQUVoQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ1IsS0FBSyxzQkFBc0I7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7b0JBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFDRCxLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0gsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLFVBQVUsR0FBRyxJQUFJLHNDQUFtQixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXhDRDtRQUFDLFlBQUssRUFBRTs7OERBQUE7SUFYVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9DQUFvQztZQUM5QyxXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELE1BQU0sRUFBRSxDQUFDLGdFQUlSLENBQUM7U0FDSCxDQUFDOzttQ0FBQTtJQTJDRixrQ0FBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksbUNBQTJCLDhCQTBDdkMsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uL3RlbXBsYXRlcy90aW1lLWxpbmUtY2FyZC90aW1lLWxpbmUtY2FyZC1hY3Rpb24vdGltZS1saW5lLWNhcmQtYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2RlbHMvRXZlbnQnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGlrZU9yVW5saWtlQW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL1VwZGF0ZUludGVyZXN0ZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtdGVtcGxhdGUtdGltZS1saW5lLWNhcmQtYWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICd0aW1lLWxpbmUtY2FyZC1hY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgICAubWV0YV9faXRlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lTGluZUNhcmRBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBldmVudDogRXZlbnQ7XG5cbiAgcHVibGljIGlzTG9hZGluZ0xpa2VFdmVudDogYm9vbGVhbjtcblxuICBwcml2YXRlIG1lc3NhZ2VTdWI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICAgIC8vXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShcbiAgICAgIG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdMSUtFX0VWRU5UX1NVQ0NFU1MnOlxuICAgICAgICBpZiAobWVzc2FnZS5kYXRhLmV2ZW50TGlrZU1zZy5ldmVudElkID09PSB0aGlzLmV2ZW50LmlkKSB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdMaWtlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAvLyB0aGlzLmV2ZW50LmlzVXNlckxpa2VkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmV2ZW50Lm51bWJlck9mTGlrZXMgPSB0aGlzLmV2ZW50Lm51bWJlck9mTGlrZXMgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVU5MSUtFX0VWRU5UX1NVQ0NFU1MnOlxuICAgICAgICBpZiAobWVzc2FnZS5kYXRhLmV2ZW50TGlrZU1zZy5ldmVudElkID09PSB0aGlzLmV2ZW50LmlkKSB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdMaWtlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAvLyB0aGlzLmV2ZW50LmlzVXNlckxpa2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5ldmVudC5udW1iZXJPZkxpa2VzID0gdGhpcy5ldmVudC5udW1iZXJPZkxpa2VzIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbkxpa2VFdmVudCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRpbmdMaWtlRXZlbnQpIHJldHVybjtcbiAgICB0aGlzLmlzTG9hZGluZ0xpa2VFdmVudCA9IHRydWU7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgTGlrZU9yVW5saWtlQW5FdmVudCgpLnNldEV2ZW50SWQodGhpcy5ldmVudC5pZCk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cbn1cbiJdfQ==
