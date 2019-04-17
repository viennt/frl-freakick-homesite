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
var shared_module_1 = require('../shared/shared.module');
var index_1 = require('../core/scroll/index');
var distrikt_component_1 = require('./distrikt.component');
var second_section_component_1 = require('./second-section/second-section.component');
var DistriktModule = (function () {
    function DistriktModule() {
    }
    DistriktModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, index_1.ScrollModule],
            exports: [distrikt_component_1.DistriktComponent],
            declarations: [distrikt_component_1.DistriktComponent, second_section_component_1.SecondSectionComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], DistriktModule);
    return DistriktModule;
}());
exports.DistriktModule = DistriktModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXN0cmlrdC9kaXN0cmlrdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUV2RCxzQkFBNkIsc0JBQXNCLENBQUMsQ0FBQTtBQUNwRCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCx5Q0FBdUMsMkNBQTJDLENBQUMsQ0FBQTtBQVFuRjtJQUFBO0lBQThCLENBQUM7SUFOL0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLG9CQUFZLENBQUM7WUFDckMsT0FBTyxFQUFFLENBQUMsc0NBQWlCLENBQUM7WUFDNUIsWUFBWSxFQUFFLENBQUMsc0NBQWlCLEVBQUUsaURBQXNCLENBQUM7WUFDekQsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQzs7c0JBQUE7SUFDNEIscUJBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBQWxCLHNCQUFjLGlCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rpc3RyaWt0L2Rpc3RyaWt0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgU2Nyb2xsTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9zY3JvbGwvaW5kZXgnO1xuaW1wb3J0IHsgRGlzdHJpa3RDb21wb25lbnQgfSBmcm9tICcuL2Rpc3RyaWt0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWNvbmRTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmQtc2VjdGlvbi9zZWNvbmQtc2VjdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtTaGFyZWRNb2R1bGUsIFNjcm9sbE1vZHVsZV0sXG4gICAgZXhwb3J0czogW0Rpc3RyaWt0Q29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEaXN0cmlrdENvbXBvbmVudCwgU2Vjb25kU2VjdGlvbkNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlzdHJpa3RNb2R1bGUgeyB9XG4iXX0=
