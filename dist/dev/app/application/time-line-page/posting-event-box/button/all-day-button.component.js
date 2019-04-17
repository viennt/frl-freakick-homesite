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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vYWxsLWRheS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFldkU7SUFBQTtRQUlZLG1CQUFjLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBZW5FLENBQUM7SUFaQyxzQkFBSSwyQ0FBUTthQUFaO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWEsR0FBRztZQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FMQTtJQU9ELDZDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBZEQ7UUFBQyxhQUFNLEVBQUU7O2lFQUFBO0lBRVQ7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBbkJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxxVkFRVDtTQUNGLENBQUM7OzZCQUFBO0lBb0JGLDRCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSw2QkFBcUIsd0JBbUJqQyxDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vYWxsLWRheS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWFsbC1kYXktYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tZXZlbnQgYnRuIGJ0bi1ibG9jayBidG4tY2lyY2xlIG1hcmdpbi1ib3R0b20tMTBcIlxuICAgICAgICAgICBbY2xhc3MuZ3JleS1zdGVlbF09XCIhaXNBbGxEYXlcIlxuICAgICAgICAgICBbY2xhc3MuYmx1ZS1kYXJrXT1cImlzQWxsRGF5XCJcbiAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tCdXR0b24oJGV2ZW50KVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1jbG9ja1wiIFtjbGFzcy5mb250LWJsdWUtZGFya109XCIhaXNBbGxEYXlcIj48L2k+XG4gICAgICAgICAgPHNwYW4+QWxsIGRheTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFsbERheUJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgaXNBbGxEYXlWYWx1ZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgaXNBbGxEYXlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBpc0FsbERheSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FsbERheVZhbHVlO1xuICB9XG5cbiAgc2V0IGlzQWxsRGF5KHZhbCkge1xuICAgIHRoaXMuaXNBbGxEYXlWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLmlzQWxsRGF5Q2hhbmdlLmVtaXQodGhpcy5pc0FsbERheVZhbHVlKTtcbiAgfVxuXG4gIG9uQ2xpY2tCdXR0b24oKSB7XG4gICAgdGhpcy5pc0FsbERheSA9ICF0aGlzLmlzQWxsRGF5VmFsdWU7XG4gIH1cbn1cbiJdfQ==
