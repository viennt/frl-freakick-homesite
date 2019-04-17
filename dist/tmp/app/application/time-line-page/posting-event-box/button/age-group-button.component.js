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
var AgeGroupButtonComponent = (function () {
    function AgeGroupButtonComponent() {
        this.hasGroupsChange = new core_1.EventEmitter();
    }
    Object.defineProperty(AgeGroupButtonComponent.prototype, "hasGroups", {
        get: function () {
            return this.hasGroupsValue;
        },
        set: function (val) {
            this.hasGroupsValue = val;
            this.hasGroupsChange.emit(this.hasGroupsValue);
        },
        enumerable: true,
        configurable: true
    });
    AgeGroupButtonComponent.prototype.onClickButton = function () {
        this.hasGroups = !this.hasGroups;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AgeGroupButtonComponent.prototype, "hasGroupsChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AgeGroupButtonComponent.prototype, "hasGroups", null);
    AgeGroupButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-age-group-button',
            template: "\n      <div class=\"button-event btn btn-block btn-circle margin-bottom-10\"\n           [class.grey-steel]=\"!hasGroups\"\n           [class.blue-madison]=\"hasGroups\"\n           (click)=\"onClickButton($event)\">\n          <i class=\"icon-users\" [class.font-blue-madison]=\"!hasGroups\"></i>\n          <span>Age groups</span>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AgeGroupButtonComponent);
    return AgeGroupButtonComponent;
}());
exports.AgeGroupButtonComponent = AgeGroupButtonComponent;
