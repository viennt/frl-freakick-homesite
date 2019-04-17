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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vYWdlLWdyb3VwLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQWV2RTtJQUFBO1FBSVksb0JBQWUsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFlcEUsQ0FBQztJQVpDLHNCQUFJLDhDQUFTO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDO2FBRUQsVUFBYyxHQUFHO1lBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUxBO0lBT0QsK0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFkRDtRQUFDLGFBQU0sRUFBRTs7b0VBQUE7SUFFVDtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFuQlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLGlXQVFUO1NBQ0YsQ0FBQzs7K0JBQUE7SUFvQkYsOEJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLCtCQUF1QiwwQkFtQm5DLENBQUEiLCJmaWxlIjoiYXBwL2FwcGxpY2F0aW9uL3RpbWUtbGluZS1wYWdlL3Bvc3RpbmctZXZlbnQtYm94L2J1dHRvbi9hZ2UtZ3JvdXAtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1hZ2UtZ3JvdXAtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tZXZlbnQgYnRuIGJ0bi1ibG9jayBidG4tY2lyY2xlIG1hcmdpbi1ib3R0b20tMTBcIlxuICAgICAgICAgICBbY2xhc3MuZ3JleS1zdGVlbF09XCIhaGFzR3JvdXBzXCJcbiAgICAgICAgICAgW2NsYXNzLmJsdWUtbWFkaXNvbl09XCJoYXNHcm91cHNcIlxuICAgICAgICAgICAoY2xpY2spPVwib25DbGlja0J1dHRvbigkZXZlbnQpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJpY29uLXVzZXJzXCIgW2NsYXNzLmZvbnQtYmx1ZS1tYWRpc29uXT1cIiFoYXNHcm91cHNcIj48L2k+XG4gICAgICAgICAgPHNwYW4+QWdlIGdyb3Vwczwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFnZUdyb3VwQnV0dG9uQ29tcG9uZW50IHtcblxuICBoYXNHcm91cHNWYWx1ZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgaGFzR3JvdXBzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBnZXQgaGFzR3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0dyb3Vwc1ZhbHVlO1xuICB9XG5cbiAgc2V0IGhhc0dyb3Vwcyh2YWwpIHtcbiAgICB0aGlzLmhhc0dyb3Vwc1ZhbHVlID0gdmFsO1xuICAgIHRoaXMuaGFzR3JvdXBzQ2hhbmdlLmVtaXQodGhpcy5oYXNHcm91cHNWYWx1ZSk7XG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKCkge1xuICAgIHRoaXMuaGFzR3JvdXBzID0gIXRoaXMuaGFzR3JvdXBzO1xuICB9XG59XG4iXX0=
