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
var common_1 = require('@angular/common');
var pagination_component_1 = require('./pagination.component');
var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [pagination_component_1.PaginationComponent],
            declarations: [pagination_component_1.PaginationComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationModule);
    return PaginationModule;
}());
exports.PaginationModule = PaginationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyxxQ0FBb0Msd0JBQXdCLENBQUMsQ0FBQTtBQVE3RDtJQUFBO0lBQ0EsQ0FBQztJQVBEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztZQUM5QixZQUFZLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztZQUNuQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O3dCQUFBO0lBRUYsdUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHdCQUFnQixtQkFDNUIsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnaW5hdGlvbkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xufVxuIl19
