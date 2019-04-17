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
var AgeGroupFormGroupComponent = (function () {
    function AgeGroupFormGroupComponent() {
        this.items = [];
        this.eventGroupsChange = new core_1.EventEmitter();
    }
    Object.defineProperty(AgeGroupFormGroupComponent.prototype, "eventGroups", {
        get: function () {
            return this.eventGroupsValue;
        },
        set: function (val) {
            this.eventGroupsValue = val;
            this.eventGroupsChange.emit(this.eventGroupsValue);
        },
        enumerable: true,
        configurable: true
    });
    AgeGroupFormGroupComponent.prototype.ngOnInit = function () {
        this.items = this.availableGroups.map(function (group) { return new Object({ id: group.groupId, text: group.groupName }); });
    };
    AgeGroupFormGroupComponent.prototype.selected = function (value) {
        var index = this.eventGroups.indexOf(value.id);
        if (index < 0)
            this.eventGroups.push(value.id);
        this.eventGroupsChange.emit(this.eventGroupsValue);
    };
    AgeGroupFormGroupComponent.prototype.removed = function (value) {
        var index = this.eventGroups.indexOf(value.id);
        if (index >= 0)
            this.eventGroups.splice(index, 1);
        this.eventGroupsChange.emit(this.eventGroupsValue);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AgeGroupFormGroupComponent.prototype, "eventGroupsChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AgeGroupFormGroupComponent.prototype, "availableGroups", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AgeGroupFormGroupComponent.prototype, "eventGroups", null);
    AgeGroupFormGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-age-group-form-group',
            template: "\n      <label class=\"font-grey-cascade font-sm\"\n             for=\"event-repeat-frequency\">Age groups</label>\n      <ng-select [multiple]=\"true\"\n                 [items]=\"items\"\n                 [disabled]=\"false\"\n                 (selected)=\"selected($event)\"\n                 (removed)=\"removed($event)\"\n                 placeholder=\"No group selected\">\n      </ng-select>\n  ",
            styles: ["\n      :host /deep/ div.ui-select-multiple {\n          border: 2px solid #e1e5ec!important;\n          padding: 3px 5px 0 5px;\n      }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AgeGroupFormGroupComponent);
    return AgeGroupFormGroupComponent;
}());
exports.AgeGroupFormGroupComponent = AgeGroupFormGroupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9mb3JtLWdyb3VwL2FnZS1ncm91cC1mb3JtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStELGVBQWUsQ0FBQyxDQUFBO0FBeUIvRTtJQUFBO1FBV1MsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUVmLHNCQUFpQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQStCdEUsQ0FBQztJQTFCQyxzQkFBSSxtREFBVzthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDO2FBRUQsVUFBZ0IsR0FBRztZQUNqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1lBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDckQsQ0FBQzs7O09BTEE7SUFPRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FDbkMsVUFBQyxLQUFZLElBQUssT0FBQSxJQUFJLE1BQU0sQ0FBQyxFQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDekUsQ0FBQztJQUNKLENBQUM7SUFFTSw2Q0FBUSxHQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sNENBQU8sR0FBZCxVQUFlLEtBQVU7UUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBOUJEO1FBQUMsYUFBTSxFQUFFOzt5RUFBQTtJQUVUO1FBQUMsWUFBSyxFQUFFOzt1RUFBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOztpRUFBQTtJQXRDVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxRQUFRLEVBQUUsb1pBVVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQywrSUFLUixDQUFDO1NBQ0gsQ0FBQzs7a0NBQUE7SUE2Q0YsaUNBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLGtDQUEwQiw2QkE0Q3RDLENBQUEiLCJmaWxlIjoiYXBwL2FwcGxpY2F0aW9uL3RpbWUtbGluZS1wYWdlL3Bvc3RpbmctZXZlbnQtYm94L2Zvcm0tZ3JvdXAvYWdlLWdyb3VwLWZvcm0tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9Hcm91cCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1hZ2UtZ3JvdXAtZm9ybS1ncm91cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmb250LWdyZXktY2FzY2FkZSBmb250LXNtXCJcbiAgICAgICAgICAgICBmb3I9XCJldmVudC1yZXBlYXQtZnJlcXVlbmN5XCI+QWdlIGdyb3VwczwvbGFiZWw+XG4gICAgICA8bmctc2VsZWN0IFttdWx0aXBsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgW2l0ZW1zXT1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgKHNlbGVjdGVkKT1cInNlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJyZW1vdmVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGdyb3VwIHNlbGVjdGVkXCI+XG4gICAgICA8L25nLXNlbGVjdD5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgICAgOmhvc3QgL2RlZXAvIGRpdi51aS1zZWxlY3QtbXVsdGlwbGUge1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZWMhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHggMCA1cHg7XG4gICAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEFnZUdyb3VwRm9ybUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIGFnZSBncm91cHMgZ2V0IGZyb20gc2VydmVyXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIHB1YmxpYyBldmVudEdyb3Vwc1ZhbHVlOiBudW1iZXJbXTtcblxuICAvKipcbiAgICogbmcyLXNlbGVjdCBpbnB1dCBpdGVtc1xuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBwdWJsaWMgaXRlbXM6IGFueVtdID0gW107XG5cbiAgQE91dHB1dCgpIGV2ZW50R3JvdXBzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBhdmFpbGFibGVHcm91cHM6IEdyb3VwW107XG5cbiAgQElucHV0KClcbiAgZ2V0IGV2ZW50R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50R3JvdXBzVmFsdWU7XG4gIH1cblxuICBzZXQgZXZlbnRHcm91cHModmFsKSB7XG4gICAgdGhpcy5ldmVudEdyb3Vwc1ZhbHVlID0gdmFsO1xuICAgIHRoaXMuZXZlbnRHcm91cHNDaGFuZ2UuZW1pdCh0aGlzLmV2ZW50R3JvdXBzVmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuYXZhaWxhYmxlR3JvdXBzLm1hcChcbiAgICAgIChncm91cDogR3JvdXApID0+IG5ldyBPYmplY3Qoe2lkOiBncm91cC5ncm91cElkLCB0ZXh0OiBncm91cC5ncm91cE5hbWV9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0ZWQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZXZlbnRHcm91cHMuaW5kZXhPZih2YWx1ZS5pZCk7XG4gICAgaWYgKGluZGV4IDwgMCkgdGhpcy5ldmVudEdyb3Vwcy5wdXNoKHZhbHVlLmlkKTtcbiAgICB0aGlzLmV2ZW50R3JvdXBzQ2hhbmdlLmVtaXQodGhpcy5ldmVudEdyb3Vwc1ZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVkKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmV2ZW50R3JvdXBzLmluZGV4T2YodmFsdWUuaWQpO1xuICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLmV2ZW50R3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5ldmVudEdyb3Vwc0NoYW5nZS5lbWl0KHRoaXMuZXZlbnRHcm91cHNWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==
