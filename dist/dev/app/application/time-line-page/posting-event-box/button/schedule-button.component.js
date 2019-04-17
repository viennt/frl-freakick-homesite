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
var ScheduleButtonComponent = (function () {
    function ScheduleButtonComponent() {
        this.eventRepeatType = Event_1.Event.repeatType;
        this.repeatTypeChange = new core_1.EventEmitter();
    }
    Object.defineProperty(ScheduleButtonComponent.prototype, "repeatType", {
        get: function () {
            return this.repeatTypeValue;
        },
        set: function (val) {
            this.repeatTypeValue = val;
            this.repeatTypeChange.emit(this.repeatTypeValue);
        },
        enumerable: true,
        configurable: true
    });
    ScheduleButtonComponent.prototype.onClickRemoveRepeat = function () {
        this.repeatType = Event_1.Event.repeatType.NoRepeat;
    };
    ScheduleButtonComponent.prototype.onClickDropDown = function (repeatType) {
        this.repeatType = repeatType;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScheduleButtonComponent.prototype, "repeatTypeChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ScheduleButtonComponent.prototype, "repeatType", null);
    ScheduleButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-schedule-button',
            template: "\n      <div class=\"btn-group btn-block margin-bottom-10\">\n          <div class=\"button-event btn btn-block btn-circle dropdown-toggle\"\n               type=\"button\" data-toggle=\"dropdown\"\n               [class.grey-steel]=\"!repeatType\"\n               [class.purple-plum]=\"repeatType\">\n              <i class=\"icon-calendar\" [class.font-purple-plum]=\"!repeatType\"></i>\n              <span>Schedule</span>\n              <i *ngIf=\"repeatType\" class=\"icon-close pull-right\"\n                 (click)=\"onClickRemoveRepeat($event)\"></i>\n          </div>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n              <li>\n                  <a (click)=\"onClickDropDown(eventRepeatType.Daily)\"> Daily </a>\n              </li>\n              <li>\n                  <a (click)=\"onClickDropDown(eventRepeatType.Weekly)\"> Weekly </a>\n              </li>\n              <li>\n                  <a (click)=\"onClickDropDown(eventRepeatType.Monthly)\"> Monthly </a>\n              </li>\n          </ul>\n      </div>\n  ",
            styles: ["\n    i.icon-close{ margin: 3px auto }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleButtonComponent);
    return ScheduleButtonComponent;
}());
exports.ScheduleButtonComponent = ScheduleButtonComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vc2NoZWR1bGUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBRXZFLHNCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBaUNqRDtJQUFBO1FBR0Usb0JBQWUsR0FBRyxhQUFLLENBQUMsVUFBVSxDQUFDO1FBRXpCLHFCQUFnQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQW1CckUsQ0FBQztJQWhCQyxzQkFBSSwrQ0FBVTthQUFkO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQzthQUVELFVBQWUsR0FBRztZQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FMQTtJQU9ELHFEQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQztJQUVELGlEQUFlLEdBQWYsVUFBZ0IsVUFBa0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQWxCRDtRQUFDLGFBQU0sRUFBRTs7cUVBQUE7SUFFVDtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUF0Q1Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLDRoQ0F1QlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyw0Q0FFUixDQUFDO1NBQ0gsQ0FBQzs7K0JBQUE7SUF5QkYsOEJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLCtCQUF1QiwwQkF3Qm5DLENBQUEiLCJmaWxlIjoiYXBwL2FwcGxpY2F0aW9uL3RpbWUtbGluZS1wYWdlL3Bvc3RpbmctZXZlbnQtYm94L2J1dHRvbi9zY2hlZHVsZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvRXZlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2NoZWR1bGUtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWJsb2NrIG1hcmdpbi1ib3R0b20tMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWV2ZW50IGJ0biBidG4tYmxvY2sgYnRuLWNpcmNsZSBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgW2NsYXNzLmdyZXktc3RlZWxdPVwiIXJlcGVhdFR5cGVcIlxuICAgICAgICAgICAgICAgW2NsYXNzLnB1cnBsZS1wbHVtXT1cInJlcGVhdFR5cGVcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLWNhbGVuZGFyXCIgW2NsYXNzLmZvbnQtcHVycGxlLXBsdW1dPVwiIXJlcGVhdFR5cGVcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuPlNjaGVkdWxlPC9zcGFuPlxuICAgICAgICAgICAgICA8aSAqbmdJZj1cInJlcGVhdFR5cGVcIiBjbGFzcz1cImljb24tY2xvc2UgcHVsbC1yaWdodFwiXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrUmVtb3ZlUmVwZWF0KCRldmVudClcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkNsaWNrRHJvcERvd24oZXZlbnRSZXBlYXRUeXBlLkRhaWx5KVwiPiBEYWlseSA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkNsaWNrRHJvcERvd24oZXZlbnRSZXBlYXRUeXBlLldlZWtseSlcIj4gV2Vla2x5IDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uQ2xpY2tEcm9wRG93bihldmVudFJlcGVhdFR5cGUuTW9udGhseSlcIj4gTW9udGhseSA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgaS5pY29uLWNsb3NleyBtYXJnaW46IDNweCBhdXRvIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVCdXR0b25Db21wb25lbnQge1xuXG4gIHJlcGVhdFR5cGVWYWx1ZTogbnVtYmVyO1xuICBldmVudFJlcGVhdFR5cGUgPSBFdmVudC5yZXBlYXRUeXBlO1xuXG4gIEBPdXRwdXQoKSByZXBlYXRUeXBlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBnZXQgcmVwZWF0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBlYXRUeXBlVmFsdWU7XG4gIH1cblxuICBzZXQgcmVwZWF0VHlwZSh2YWwpIHtcbiAgICB0aGlzLnJlcGVhdFR5cGVWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLnJlcGVhdFR5cGVDaGFuZ2UuZW1pdCh0aGlzLnJlcGVhdFR5cGVWYWx1ZSk7XG4gIH1cblxuICBvbkNsaWNrUmVtb3ZlUmVwZWF0KCkge1xuICAgIHRoaXMucmVwZWF0VHlwZSA9IEV2ZW50LnJlcGVhdFR5cGUuTm9SZXBlYXQ7XG4gIH1cblxuICBvbkNsaWNrRHJvcERvd24ocmVwZWF0VHlwZTogbnVtYmVyKSB7XG4gICAgdGhpcy5yZXBlYXRUeXBlID0gcmVwZWF0VHlwZTtcbiAgfVxufVxuIl19
