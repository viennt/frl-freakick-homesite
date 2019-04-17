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
var ReminderButtonComponent = (function () {
    function ReminderButtonComponent() {
        this.eventNotificationType = Event_1.Event.notificationType;
        this.notificationByChange = new core_1.EventEmitter();
    }
    Object.defineProperty(ReminderButtonComponent.prototype, "notificationBy", {
        get: function () {
            return this.notificationByValue;
        },
        set: function (val) {
            this.notificationByValue = val;
            this.notificationByChange.emit(this.notificationByValue);
        },
        enumerable: true,
        configurable: true
    });
    ReminderButtonComponent.prototype.onClickRemoveNotification = function () {
        this.notificationBy = 0;
    };
    ReminderButtonComponent.prototype.onClickDropDown = function (notificationType) {
        this.notificationBy = notificationType;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReminderButtonComponent.prototype, "notificationByChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReminderButtonComponent.prototype, "notificationBy", null);
    ReminderButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-reminder-button',
            template: "\n      <div class=\"btn-group btn-block margin-bottom-10\">\n          <div class=\"button-event btn btn-block btn-circle dropdown-toggle\"\n               type=\"button\" data-toggle=\"dropdown\"\n               [class.grey-steel]=\"!notificationBy\"\n               [class.yellow-saffron]=\"notificationBy\">\n              <i *ngIf=\"notificationBy !== 2\" class=\"icon-bell\"\n                 [class.font-yellow-saffron]=\"!notificationBy\"></i>\n              <i *ngIf=\"notificationBy === 2\" class=\"icon-envelope-open\"\n                 [class.font-yellow-saffron]=\"!notificationBy\"></i>\n              <span>Reminder</span>\n              <i *ngIf=\"notificationBy\" class=\"icon-close pull-right\"\n                 (click)=\"onClickRemoveNotification($event)\"></i>\n          </div>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n              <li>\n                  <a (click)=\"onClickDropDown(eventNotificationType.Message)\"> Message </a>\n              </li>\n              <li>\n                  <a (click)=\"onClickDropDown(eventNotificationType.Email)\"> Email </a>\n              </li> \n          </ul>\n      </div>\n  ",
            styles: ["\n    i.icon-close{ margin: 3px auto }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ReminderButtonComponent);
    return ReminderButtonComponent;
}());
exports.ReminderButtonComponent = ReminderButtonComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vcmVtaW5kZXItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBRXZFLHNCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBaUNqRDtJQUFBO1FBR0UsMEJBQXFCLEdBQUcsYUFBSyxDQUFDLGdCQUFnQixDQUFDO1FBRXJDLHlCQUFvQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQW1CekUsQ0FBQztJQWhCQyxzQkFBSSxtREFBYzthQUFsQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEMsQ0FBQzthQUVELFVBQW1CLEdBQUc7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQztZQUMvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzNELENBQUM7OztPQUxBO0lBT0QsMkRBQXlCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGlEQUFlLEdBQWYsVUFBZ0IsZ0JBQXdCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFDekMsQ0FBQztJQWxCRDtRQUFDLGFBQU0sRUFBRTs7eUVBQUE7SUFFVDtRQUFDLFlBQUssRUFBRTs7aUVBQUE7SUF0Q1Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLHVvQ0F1QlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyw0Q0FFUixDQUFDO1NBQ0gsQ0FBQzs7K0JBQUE7SUF5QkYsOEJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLCtCQUF1QiwwQkF3Qm5DLENBQUEiLCJmaWxlIjoiYXBwL2FwcGxpY2F0aW9uL3RpbWUtbGluZS1wYWdlL3Bvc3RpbmctZXZlbnQtYm94L2J1dHRvbi9yZW1pbmRlci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvRXZlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVtaW5kZXItYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWJsb2NrIG1hcmdpbi1ib3R0b20tMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWV2ZW50IGJ0biBidG4tYmxvY2sgYnRuLWNpcmNsZSBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgW2NsYXNzLmdyZXktc3RlZWxdPVwiIW5vdGlmaWNhdGlvbkJ5XCJcbiAgICAgICAgICAgICAgIFtjbGFzcy55ZWxsb3ctc2FmZnJvbl09XCJub3RpZmljYXRpb25CeVwiPlxuICAgICAgICAgICAgICA8aSAqbmdJZj1cIm5vdGlmaWNhdGlvbkJ5ICE9PSAyXCIgY2xhc3M9XCJpY29uLWJlbGxcIlxuICAgICAgICAgICAgICAgICBbY2xhc3MuZm9udC15ZWxsb3ctc2FmZnJvbl09XCIhbm90aWZpY2F0aW9uQnlcIj48L2k+XG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwibm90aWZpY2F0aW9uQnkgPT09IDJcIiBjbGFzcz1cImljb24tZW52ZWxvcGUtb3BlblwiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy5mb250LXllbGxvdy1zYWZmcm9uXT1cIiFub3RpZmljYXRpb25CeVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+UmVtaW5kZXI8L3NwYW4+XG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwibm90aWZpY2F0aW9uQnlcIiBjbGFzcz1cImljb24tY2xvc2UgcHVsbC1yaWdodFwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrUmVtb3ZlTm90aWZpY2F0aW9uKCRldmVudClcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkNsaWNrRHJvcERvd24oZXZlbnROb3RpZmljYXRpb25UeXBlLk1lc3NhZ2UpXCI+IE1lc3NhZ2UgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25DbGlja0Ryb3BEb3duKGV2ZW50Tm90aWZpY2F0aW9uVHlwZS5FbWFpbClcIj4gRW1haWwgPC9hPlxuICAgICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICBpLmljb24tY2xvc2V7IG1hcmdpbjogM3B4IGF1dG8gfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBSZW1pbmRlckJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgbm90aWZpY2F0aW9uQnlWYWx1ZTogbnVtYmVyO1xuICBldmVudE5vdGlmaWNhdGlvblR5cGUgPSBFdmVudC5ub3RpZmljYXRpb25UeXBlO1xuXG4gIEBPdXRwdXQoKSBub3RpZmljYXRpb25CeUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IG5vdGlmaWNhdGlvbkJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkJ5VmFsdWU7XG4gIH1cblxuICBzZXQgbm90aWZpY2F0aW9uQnkodmFsKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25CeVZhbHVlID0gdmFsO1xuICAgIHRoaXMubm90aWZpY2F0aW9uQnlDaGFuZ2UuZW1pdCh0aGlzLm5vdGlmaWNhdGlvbkJ5VmFsdWUpO1xuICB9XG5cbiAgb25DbGlja1JlbW92ZU5vdGlmaWNhdGlvbigpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkJ5ID0gMDtcbiAgfVxuXG4gIG9uQ2xpY2tEcm9wRG93bihub3RpZmljYXRpb25UeXBlOiBudW1iZXIpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkJ5ID0gbm90aWZpY2F0aW9uVHlwZTtcbiAgfVxufVxuIl19
