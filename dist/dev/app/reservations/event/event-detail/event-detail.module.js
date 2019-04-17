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
var forms_1 = require('@angular/forms');
var event_detail_component_1 = require('./event-detail.component');
var core_module_1 = require('angular2-google-maps/core/core-module');
var index_1 = require('../../../core/google-map-direction/index');
var interested_user_component_1 = require('./interested-user/interested-user.component');
var reviews_component_1 = require('./reviews/reviews.component');
var index_2 = require('../../../core/index');
var index_3 = require('ng2-cc-library/dist/index');
var EventDetailModule = (function () {
    function EventDetailModule() {
    }
    EventDetailModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                common_1.CommonModule, index_2.ButtonModule, index_2.LoadingCircleModule,
                index_3.CreditCardDirectivesModule,
                core_module_1.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
                }), index_1.GoogleMapDirectionsModule, index_2.PaypalCheckoutButtonModule],
            exports: [event_detail_component_1.EventDetailComponent, reviews_component_1.ReviewsComponent],
            declarations: [event_detail_component_1.EventDetailComponent, reviews_component_1.ReviewsComponent, interested_user_component_1.InterestedUser],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], EventDetailModule);
    return EventDetailModule;
}());
exports.EventDetailModule = EventDetailModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUVsRSx1Q0FBcUMsMEJBQTBCLENBQUMsQ0FBQTtBQUNoRSw0QkFBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSxzQkFBMEMsMENBQTBDLENBQUMsQ0FBQTtBQUNyRiwwQ0FBK0IsNkNBQTZDLENBQUMsQ0FBQTtBQUU3RSxrQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUUvRCxzQkFBOEUscUJBQXFCLENBQUMsQ0FBQTtBQUNwRyxzQkFBMkMsMkJBQTJCLENBQUMsQ0FBQTtBQWN2RTtJQUFBO0lBQ0EsQ0FBQztJQWJEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLEVBQUUsbUJBQVcsRUFBRSwyQkFBbUI7Z0JBQzlDLHFCQUFZLEVBQUUsb0JBQVksRUFBRSwyQkFBbUI7Z0JBQy9DLGtDQUEwQjtnQkFDMUIsMkJBQWEsQ0FBQyxPQUFPLENBQUM7b0JBQ3BCLE1BQU0sRUFBRSx5Q0FBeUM7aUJBQ2xELENBQUMsRUFBRSxpQ0FBeUIsRUFBRSxrQ0FBMEIsQ0FBQztZQUM1RCxPQUFPLEVBQUUsQ0FBQyw2Q0FBb0IsRUFBRSxvQ0FBZ0IsQ0FBQztZQUNqRCxZQUFZLEVBQUUsQ0FBQyw2Q0FBb0IsRUFBRSxvQ0FBZ0IsRUFBRSwwQ0FBYyxDQUFDO1lBQ3RFLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7eUJBQUE7SUFFRix3QkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFkseUJBQWlCLG9CQUM3QixDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRXZlbnREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2V2ZW50LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUvY29yZS1tb2R1bGUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwRGlyZWN0aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ29vZ2xlLW1hcC1kaXJlY3Rpb24vaW5kZXgnO1xuaW1wb3J0IHsgSW50ZXJlc3RlZFVzZXIgfSBmcm9tICcuL2ludGVyZXN0ZWQtdXNlci9pbnRlcmVzdGVkLXVzZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUmV2aWV3c0NvbXBvbmVudCB9IGZyb20gJy4vcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSwgTG9hZGluZ0NpcmNsZU1vZHVsZSwgUGF5cGFsQ2hlY2tvdXRCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IENyZWRpdENhcmREaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnbmcyLWNjLWxpYnJhcnkvZGlzdC9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSwgQnV0dG9uTW9kdWxlLCBMb2FkaW5nQ2lyY2xlTW9kdWxlLFxuICAgIENyZWRpdENhcmREaXJlY3RpdmVzTW9kdWxlLFxuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBhcGlLZXk6ICdBSXphU3lEeGFoUG45REF0NFc1dTluT21yNmR5VXN0c0pTQVRaUUknXG4gICAgfSksIEdvb2dsZU1hcERpcmVjdGlvbnNNb2R1bGUsIFBheXBhbENoZWNrb3V0QnV0dG9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0V2ZW50RGV0YWlsQ29tcG9uZW50LCBSZXZpZXdzQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbRXZlbnREZXRhaWxDb21wb25lbnQsIFJldmlld3NDb21wb25lbnQsIEludGVyZXN0ZWRVc2VyXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnREZXRhaWxNb2R1bGUge1xufVxuIl19
