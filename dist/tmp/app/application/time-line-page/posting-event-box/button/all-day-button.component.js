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
var AllDayButtonComponent = (function () {
    function AllDayButtonComponent() {
        this.isAllDayChange = new core_1.EventEmitter();
    }
    Object.defineProperty(AllDayButtonComponent.prototype, "isAllDay", {
        get: function () {
            return this.isAllDayValue;
        },
        set: function (val) {
            this.isAllDayValue = val;
            this.isAllDayChange.emit(this.isAllDayValue);
        },
        enumerable: true,
        configurable: true
    });
    AllDayButtonComponent.prototype.onClickButton = function () {
        this.isAllDay = !this.isAllDayValue;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AllDayButtonComponent.prototype, "isAllDayChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AllDayButtonComponent.prototype, "isAllDay", null);
    AllDayButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-all-day-button',
            template: "\n      <div class=\"button-event btn btn-block btn-circle margin-bottom-10\"\n           [class.grey-steel]=\"!isAllDay\"\n           [class.blue-dark]=\"isAllDay\"\n           (click)=\"onClickButton($event)\">\n          <i class=\"icon-clock\" [class.font-blue-dark]=\"!isAllDay\"></i>\n          <span>All day</span>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AllDayButtonComponent);
    return AllDayButtonComponent;
}());
exports.AllDayButtonComponent = AllDayButtonComponent;
