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
var forms_1 = require('@angular/forms');
var index_1 = require('../../core/google-map-direction/index');
var index_2 = require('../../core/index');
var button_module_1 = require('../../core/button/button.module');
var pagination_module_1 = require('../../core/pagination/pagination.module');
var core_module_1 = require('angular2-google-maps/core/core-module');
var branch_component_1 = require('./branch.component');
var booking_module_1 = require('../booking/booking.module');
var received_branch_courts_component_1 = require('./courts/received-branch-courts.component');
var received_branch_classes_component_1 = require('./classes/received-branch-classes.component');
var received_branch_facilities_component_1 = require('./facilities/received-branch-facilities.component');
var index_3 = require('./reviews/index');
var index_4 = require('./reviews/index');
var index_5 = require('./reviews/index');
var components = [
    branch_component_1.BranchComponent,
    received_branch_courts_component_1.ReceivedBranchCourtsComponent,
    received_branch_classes_component_1.ReceivedBranchClassesComponent,
    received_branch_facilities_component_1.ReceivedBranchFacilitiesComponent,
    index_3.ReviewBranchComponent, index_4.UpdateReviewBranchComponent,
    index_5.ShowReviewComponent
];
var BranchModule = (function () {
    function BranchModule() {
    }
    BranchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, booking_module_1.BookingModule,
                button_module_1.ButtonModule, index_2.LoadingCircleModule, pagination_module_1.PaginationModule,
                core_module_1.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
                }), index_1.GoogleMapDirectionsModule],
            declarations: [components],
            exports: [components]
        }), 
        __metadata('design:paramtypes', [])
    ], BranchModule);
    return BranchModule;
}());
exports.BranchModule = BranchModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL2JyYW5jaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUU3QyxzQkFBMEMsdUNBQXVDLENBQUMsQ0FBQTtBQUVsRixzQkFBb0Msa0JBQWtCLENBQUMsQ0FBQTtBQUN2RCw4QkFBNkIsaUNBQWlDLENBQUMsQ0FBQTtBQUMvRCxrQ0FBaUMseUNBQXlDLENBQUMsQ0FBQTtBQUMzRSw0QkFBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUV0RSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCwrQkFBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUUxRCxpREFBOEMsMkNBQTJDLENBQUMsQ0FBQTtBQUMxRixrREFBK0MsNkNBQTZDLENBQUMsQ0FBQTtBQUM3RixxREFBa0QsbURBQW1ELENBQUMsQ0FBQTtBQUN0RyxzQkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RCxzQkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM5RCxzQkFBb0MsaUJBQWlCLENBQUMsQ0FBQTtBQUV0RCxJQUFJLFVBQVUsR0FBRztJQUNmLGtDQUFlO0lBQ2YsZ0VBQTZCO0lBQzdCLGtFQUE4QjtJQUM5Qix3RUFBaUM7SUFDakMsNkJBQXFCLEVBQUUsbUNBQTJCO0lBQ2xELDJCQUFtQjtDQUNwQixDQUFDO0FBV0Y7SUFBQTtJQUNBLENBQUM7SUFWRDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsbUJBQVcsRUFBRSw4QkFBYTtnQkFDaEQsNEJBQVksRUFBRSwyQkFBbUIsRUFBRSxvQ0FBZ0I7Z0JBQ25ELDJCQUFhLENBQUMsT0FBTyxDQUFDO29CQUNwQixNQUFNLEVBQUUseUNBQXlDO2lCQUNsRCxDQUFDLEVBQUUsaUNBQXlCLENBQUM7WUFDaEMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN0QixDQUFDOztvQkFBQTtJQUVGLG1CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxvQkFBWSxlQUN4QixDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL2JyYW5jaC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBHb29nbGVNYXBEaXJlY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9nb29nbGUtbWFwLWRpcmVjdGlvbi9pbmRleCc7XG5cbmltcG9ydCB7IExvYWRpbmdDaXJjbGVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZS9jb3JlLW1vZHVsZSc7XG5cbmltcG9ydCB7IEJyYW5jaENvbXBvbmVudCB9IGZyb20gJy4vYnJhbmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29raW5nTW9kdWxlIH0gZnJvbSAnLi4vYm9va2luZy9ib29raW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IFJlY2VpdmVkQnJhbmNoQ291cnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VydHMvcmVjZWl2ZWQtYnJhbmNoLWNvdXJ0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVjZWl2ZWRCcmFuY2hDbGFzc2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGFzc2VzL3JlY2VpdmVkLWJyYW5jaC1jbGFzc2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWNlaXZlZEJyYW5jaEZhY2lsaXRpZXNDb21wb25lbnQgfSBmcm9tICcuL2ZhY2lsaXRpZXMvcmVjZWl2ZWQtYnJhbmNoLWZhY2lsaXRpZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFJldmlld0JyYW5jaENvbXBvbmVudCB9IGZyb20gJy4vcmV2aWV3cy9pbmRleCc7XG5pbXBvcnQgeyBVcGRhdGVSZXZpZXdCcmFuY2hDb21wb25lbnQgfSBmcm9tICcuL3Jldmlld3MvaW5kZXgnO1xuaW1wb3J0IHsgU2hvd1Jldmlld0NvbXBvbmVudCB9IGZyb20gJy4vcmV2aWV3cy9pbmRleCc7XG5cbmxldCBjb21wb25lbnRzID0gW1xuICBCcmFuY2hDb21wb25lbnQsXG4gIFJlY2VpdmVkQnJhbmNoQ291cnRzQ29tcG9uZW50LFxuICBSZWNlaXZlZEJyYW5jaENsYXNzZXNDb21wb25lbnQsXG4gIFJlY2VpdmVkQnJhbmNoRmFjaWxpdGllc0NvbXBvbmVudCxcbiAgUmV2aWV3QnJhbmNoQ29tcG9uZW50LCBVcGRhdGVSZXZpZXdCcmFuY2hDb21wb25lbnQsXG4gIFNob3dSZXZpZXdDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBCb29raW5nTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSwgTG9hZGluZ0NpcmNsZU1vZHVsZSwgUGFnaW5hdGlvbk1vZHVsZSxcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgYXBpS2V5OiAnQUl6YVN5RHhhaFBuOURBdDRXNXU5bk9tcjZkeVVzdHNKU0FUWlFJJ1xuICAgIH0pLCBHb29nbGVNYXBEaXJlY3Rpb25zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbY29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFtjb21wb25lbnRzXVxufSlcbmV4cG9ydCBjbGFzcyBCcmFuY2hNb2R1bGUge1xufVxuIl19
