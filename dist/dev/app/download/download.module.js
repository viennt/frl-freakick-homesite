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
var shared_module_1 = require('../shared/shared.module');
var download_component_1 = require('./download.component');
var DownloadModule = (function () {
    function DownloadModule() {
    }
    DownloadModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule],
            declarations: [download_component_1.DownloadComponent],
            exports: [download_component_1.DownloadComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DownloadModule);
    return DownloadModule;
}());
exports.DownloadModule = DownloadModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kb3dubG9hZC9kb3dubG9hZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUV2RCxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQU96RDtJQUFBO0lBQThCLENBQUM7SUFML0I7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLDRCQUFZLENBQUM7WUFDckMsWUFBWSxFQUFFLENBQUMsc0NBQWlCLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsc0NBQWlCLENBQUM7U0FDN0IsQ0FBQzs7c0JBQUE7SUFDNEIscUJBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBQWxCLHNCQUFjLGlCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2Rvd25sb2FkL2Rvd25sb2FkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEb3dubG9hZENvbXBvbmVudCB9IGZyb20gJy4vZG93bmxvYWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRG93bmxvYWRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRG93bmxvYWRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERvd25sb2FkTW9kdWxlIHsgfVxuIl19
