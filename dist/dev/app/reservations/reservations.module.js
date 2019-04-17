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
var reservations_intro_component_1 = require('./intro/reservations-intro.component');
var shared_module_1 = require('../shared/shared.module');
var button_module_1 = require('../core/button/button.module');
var ReservationsModule = (function () {
    function ReservationsModule() {
    }
    ReservationsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule, button_module_1.ButtonModule],
            declarations: [reservations_intro_component_1.ReservationsIntroComponent],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ReservationsModule);
    return ReservationsModule;
}());
exports.ReservationsModule = ReservationsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLDZDQUEyQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBRWxGLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELDhCQUE2Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBVzVEO0lBQUE7SUFBa0MsQ0FBQztJQU5uQztRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsNEJBQVksRUFBRSw0QkFBWSxDQUFDO1lBQ25ELFlBQVksRUFBRSxDQUFDLHlEQUEwQixDQUFDO1lBQzFDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQzs7MEJBQUE7SUFDZ0MseUJBQUM7QUFBRCxDQUFsQyxBQUFtQyxJQUFBO0FBQXRCLDBCQUFrQixxQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gaW1wb3J0IHsgUmVzZXJ2YXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNlcnZhdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2VydmF0aW9uc0ludHJvQ29tcG9uZW50IH0gZnJvbSAnLi9pbnRyby9yZXNlcnZhdGlvbnMtaW50cm8uY29tcG9uZW50JztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG4vLyBpbXBvcnQgeyBFdmVudHNNb2R1bGUgfSBmcm9tICcuL2V2ZW50L2luZGV4Jztcbi8vIGltcG9ydCB7IEJyYW5jaE1vZHVsZSB9IGZyb20gJy4vYnJhbmNoL2luZGV4Jztcbi8vIGltcG9ydCB7IFNlYXJjaE1vZHVsZSB9IGZyb20gJy4vc2VhcmNoL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGUsIEJ1dHRvbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbUmVzZXJ2YXRpb25zSW50cm9Db21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVzZXJ2YXRpb25zTW9kdWxlIHsgfVxuIl19
