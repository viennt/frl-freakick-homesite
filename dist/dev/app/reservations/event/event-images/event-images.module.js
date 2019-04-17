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
var event_images_component_1 = require('./event-images.component');
var core_module_1 = require('angular2-google-maps/core/core-module');
var index_1 = require('../../../core/google-map-direction/index');
var router_1 = require('@angular/router');
var index_2 = require('../../../core/index');
var button_module_1 = require('../../../core/button/button.module');
var EventImagesModule = (function () {
    function EventImagesModule() {
    }
    EventImagesModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule, button_module_1.ButtonModule, index_2.LoadingCircleModule,
                core_module_1.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
                }), index_1.GoogleMapDirectionsModule],
            exports: [event_images_component_1.EventImagesComponent],
            declarations: [event_images_component_1.EventImagesComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EventImagesModule);
    return EventImagesModule;
}());
exports.EventImagesModule = EventImagesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQtaW1hZ2VzL2V2ZW50LWltYWdlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1Q0FBcUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNoRSw0QkFBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSxzQkFBMEMsMENBQTBDLENBQUMsQ0FBQTtBQUNyRix1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUcvQyxzQkFBb0MscUJBQXFCLENBQUMsQ0FBQTtBQUMxRCw4QkFBNkIsb0NBQW9DLENBQUMsQ0FBQTtBQVdsRTtJQUFBO0lBQ0EsQ0FBQztJQVZEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxFQUFFLDRCQUFZLEVBQUUsMkJBQW1CO2dCQUNyRSwyQkFBYSxDQUFDLE9BQU8sQ0FBQztvQkFDcEIsTUFBTSxFQUFFLHlDQUF5QztpQkFDbEQsQ0FBQyxFQUFFLGlDQUF5QixDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLDZDQUFvQixDQUFDO1lBQy9CLFlBQVksRUFBRSxDQUFDLDZDQUFvQixDQUFDO1lBQ3BDLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7eUJBQUE7SUFFRix3QkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFkseUJBQWlCLG9CQUM3QixDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQtaW1hZ2VzL2V2ZW50LWltYWdlcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEV2ZW50SW1hZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9ldmVudC1pbWFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL2NvcmUtbW9kdWxlJztcbmltcG9ydCB7IEdvb2dsZU1hcERpcmVjdGlvbnNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dvb2dsZS1tYXAtZGlyZWN0aW9uL2luZGV4JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuaW1wb3J0IHsgTG9hZGluZ0NpcmNsZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUsIENvbW1vbk1vZHVsZSwgQnV0dG9uTW9kdWxlLCBMb2FkaW5nQ2lyY2xlTW9kdWxlLFxuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBhcGlLZXk6ICdBSXphU3lEeGFoUG45REF0NFc1dTluT21yNmR5VXN0c0pTQVRaUUknXG4gICAgfSksIEdvb2dsZU1hcERpcmVjdGlvbnNNb2R1bGVdLFxuICBleHBvcnRzOiBbRXZlbnRJbWFnZXNDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtFdmVudEltYWdlc0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50SW1hZ2VzTW9kdWxlIHtcbn1cbiJdfQ==
