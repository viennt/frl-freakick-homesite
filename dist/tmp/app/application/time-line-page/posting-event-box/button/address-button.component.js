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
var AddressButtonComponent = (function () {
    function AddressButtonComponent() {
        this.hasAddressChange = new core_1.EventEmitter();
    }
    Object.defineProperty(AddressButtonComponent.prototype, "hasAddress", {
        get: function () {
            return this.hasAddressValue;
        },
        set: function (val) {
            this.hasAddressValue = val;
            this.hasAddressChange.emit(this.hasAddressValue);
        },
        enumerable: true,
        configurable: true
    });
    AddressButtonComponent.prototype.onClickButton = function () {
        this.hasAddress = !this.hasAddress;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AddressButtonComponent.prototype, "hasAddressChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddressButtonComponent.prototype, "hasAddress", null);
    AddressButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-address-button',
            template: "\n      <div class=\"button-event btn btn-block btn-circle margin-bottom-10\"\n           [class.grey-steel]=\"!hasAddress\"\n           [class.red-sunglo]=\"hasAddress\"\n           (click)=\"onClickButton()\">\n          <i class=\"icon-pointer\" [class.font-red-sunglo]=\"!hasAddress\"></i>\n          <span>Location</span>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AddressButtonComponent);
    return AddressButtonComponent;
}());
exports.AddressButtonComponent = AddressButtonComponent;
