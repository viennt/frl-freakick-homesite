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
