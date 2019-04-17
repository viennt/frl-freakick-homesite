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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vYWRkcmVzcy1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFldkU7SUFBQTtRQUlZLHFCQUFnQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQWVyRSxDQUFDO0lBWkMsc0JBQUksOENBQVU7YUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFlLEdBQUc7WUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BTEE7SUFPRCw4Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztJQWREO1FBQUMsYUFBTSxFQUFFOztvRUFBQTtJQUVUO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQW5CVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsMFZBUVQ7U0FDRixDQUFDOzs4QkFBQTtJQW9CRiw2QkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksOEJBQXNCLHlCQW1CbEMsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vdGltZS1saW5lLXBhZ2UvcG9zdGluZy1ldmVudC1ib3gvYnV0dG9uL2FkZHJlc3MtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1hZGRyZXNzLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWV2ZW50IGJ0biBidG4tYmxvY2sgYnRuLWNpcmNsZSBtYXJnaW4tYm90dG9tLTEwXCJcbiAgICAgICAgICAgW2NsYXNzLmdyZXktc3RlZWxdPVwiIWhhc0FkZHJlc3NcIlxuICAgICAgICAgICBbY2xhc3MucmVkLXN1bmdsb109XCJoYXNBZGRyZXNzXCJcbiAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tCdXR0b24oKVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1wb2ludGVyXCIgW2NsYXNzLmZvbnQtcmVkLXN1bmdsb109XCIhaGFzQWRkcmVzc1wiPjwvaT5cbiAgICAgICAgICA8c3Bhbj5Mb2NhdGlvbjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCdXR0b25Db21wb25lbnQge1xuXG4gIGhhc0FkZHJlc3NWYWx1ZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgaGFzQWRkcmVzc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhhc0FkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQWRkcmVzc1ZhbHVlO1xuICB9XG5cbiAgc2V0IGhhc0FkZHJlc3ModmFsKSB7XG4gICAgdGhpcy5oYXNBZGRyZXNzVmFsdWUgPSB2YWw7XG4gICAgdGhpcy5oYXNBZGRyZXNzQ2hhbmdlLmVtaXQodGhpcy5oYXNBZGRyZXNzVmFsdWUpO1xuICB9XG5cbiAgb25DbGlja0J1dHRvbigpIHtcbiAgICB0aGlzLmhhc0FkZHJlc3MgPSAhdGhpcy5oYXNBZGRyZXNzO1xuICB9XG59XG4iXX0=
