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
