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
var event_component_1 = require('./event.component');
var index_1 = require('../../core/index');
var shared_module_1 = require('../../shared/shared.module');
var button_module_1 = require('../../core/button/button.module');
var event_detail_module_1 = require('./event-detail/event-detail.module');
var event_images_module_1 = require('./event-images/event-images.module');
var EventsModule = (function () {
    function EventsModule() {
    }
    EventsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, shared_module_1.SharedModule, button_module_1.ButtonModule,
                event_detail_module_1.EventDetailModule, event_images_module_1.EventImagesModule, index_1.LoadingCircleModule
            ],
            exports: [event_component_1.EventsComponent],
            declarations: [event_component_1.EventsComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EventsModule);
    return EventsModule;
}());
exports.EventsModule = EventsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsZ0NBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFFcEQsc0JBQW9DLGtCQUFrQixDQUFDLENBQUE7QUFDdkQsOEJBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFDMUQsOEJBQTZCLGlDQUFpQyxDQUFDLENBQUE7QUFFL0Qsb0NBQWtDLG9DQUFvQyxDQUFDLENBQUE7QUFDdkUsb0NBQWtDLG9DQUFvQyxDQUFDLENBQUE7QUFXdkU7SUFBQTtJQUE0QixDQUFDO0lBVDdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZLEVBQUUsNEJBQVksRUFBRSw0QkFBWTtnQkFDeEMsdUNBQWlCLEVBQUUsdUNBQWlCLEVBQUUsMkJBQW1CO2FBQzVEO1lBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQWUsQ0FBQztZQUMxQixZQUFZLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDO1lBQy9CLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7O29CQUFBO0lBQzBCLG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixvQkFBWSxlQUFJLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9ldmVudC9ldmVudC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEV2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vZXZlbnQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTG9hZGluZ0NpcmNsZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5cbmltcG9ydCB7IEV2ZW50RGV0YWlsTW9kdWxlIH0gZnJvbSAnLi9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLm1vZHVsZSc7XG5pbXBvcnQgeyBFdmVudEltYWdlc01vZHVsZSB9IGZyb20gJy4vZXZlbnQtaW1hZ2VzL2V2ZW50LWltYWdlcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGUsIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgRXZlbnREZXRhaWxNb2R1bGUsIEV2ZW50SW1hZ2VzTW9kdWxlLCBMb2FkaW5nQ2lyY2xlTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbRXZlbnRzQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtFdmVudHNDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c01vZHVsZSB7IH1cbiJdfQ==
