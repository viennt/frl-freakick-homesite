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
var router_1 = require('@angular/router');
var core_module_1 = require('angular2-google-maps/core/core-module');
var index_1 = require('../../core/index');
var location_service_1 = require('../../services/location.service');
var booking_module_1 = require('../booking/booking.module');
var search_component_1 = require('./search.component');
var received_courts_component_1 = require('./courts/received-courts.component');
var received_classes_component_1 = require('./classes/received-classes.component');
var received_facilities_component_1 = require('./facilities/received-facilities.component');
var received_events_component_1 = require('./events/received-events.component');
var components = [
    search_component_1.SearchComponent,
    received_courts_component_1.ReceivedCourtsComponent,
    received_classes_component_1.ReceivedClassesComponent,
    received_facilities_component_1.ReceivedFacilitiesComponent,
    received_events_component_1.ReceivedEventsComponent
];
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, booking_module_1.BookingModule, router_1.RouterModule, index_1.LoadingCircleModule,
                core_module_1.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
                })],
            declarations: [components],
            exports: [components],
            providers: [location_service_1.LocationService],
        }), 
        __metadata('design:paramtypes', [])
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvc2VhcmNoL3NlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw0QkFBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUV0RSxzQkFBb0Msa0JBQWtCLENBQUMsQ0FBQTtBQUV2RCxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSwrQkFBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUUxRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCwwQ0FBd0Msb0NBQW9DLENBQUMsQ0FBQTtBQUM3RSwyQ0FBeUMsc0NBQXNDLENBQUMsQ0FBQTtBQUNoRiw4Q0FBNEMsNENBQTRDLENBQUMsQ0FBQTtBQUN6RiwwQ0FBd0Msb0NBQW9DLENBQUMsQ0FBQTtBQUU3RSxJQUFJLFVBQVUsR0FBRztJQUNmLGtDQUFlO0lBQ2YsbURBQXVCO0lBQ3ZCLHFEQUF3QjtJQUN4QiwyREFBMkI7SUFDM0IsbURBQXVCO0NBQ3hCLENBQUM7QUFXRjtJQUFBO0lBQTRCLENBQUM7SUFUN0I7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLDhCQUFhLEVBQUUscUJBQVksRUFBRSwyQkFBbUI7Z0JBQ3RFLDJCQUFhLENBQUMsT0FBTyxDQUFDO29CQUNwQixNQUFNLEVBQUUseUNBQXlDO2lCQUNsRCxDQUFDLENBQUM7WUFDTCxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3JCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7U0FDN0IsQ0FBQzs7b0JBQUE7SUFDMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL3NlYXJjaC9zZWFyY2gubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9jb3JlLW1vZHVsZSc7XG5cbmltcG9ydCB7IExvYWRpbmdDaXJjbGVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcblxuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBCb29raW5nTW9kdWxlIH0gZnJvbSAnLi4vYm9va2luZy9ib29raW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWNlaXZlZENvdXJ0c0NvbXBvbmVudCB9IGZyb20gJy4vY291cnRzL3JlY2VpdmVkLWNvdXJ0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVjZWl2ZWRDbGFzc2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGFzc2VzL3JlY2VpdmVkLWNsYXNzZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlY2VpdmVkRmFjaWxpdGllc0NvbXBvbmVudCB9IGZyb20gJy4vZmFjaWxpdGllcy9yZWNlaXZlZC1mYWNpbGl0aWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWNlaXZlZEV2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vZXZlbnRzL3JlY2VpdmVkLWV2ZW50cy5jb21wb25lbnQnO1xuXG5sZXQgY29tcG9uZW50cyA9IFtcbiAgU2VhcmNoQ29tcG9uZW50LFxuICBSZWNlaXZlZENvdXJ0c0NvbXBvbmVudCxcbiAgUmVjZWl2ZWRDbGFzc2VzQ29tcG9uZW50LFxuICBSZWNlaXZlZEZhY2lsaXRpZXNDb21wb25lbnQsXG4gIFJlY2VpdmVkRXZlbnRzQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCb29raW5nTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIExvYWRpbmdDaXJjbGVNb2R1bGUsXG4gICAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIGFwaUtleTogJ0FJemFTeUR4YWhQbjlEQXQ0VzV1OW5PbXI2ZHlVc3RzSlNBVFpRSSdcbiAgICB9KV0sXG4gIGRlY2xhcmF0aW9uczogW2NvbXBvbmVudHNdLFxuICBleHBvcnRzOiBbY29tcG9uZW50c10sXG4gIHByb3ZpZGVyczogW0xvY2F0aW9uU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7IH1cbiJdfQ==
