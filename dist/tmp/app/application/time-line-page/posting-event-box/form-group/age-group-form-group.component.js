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
