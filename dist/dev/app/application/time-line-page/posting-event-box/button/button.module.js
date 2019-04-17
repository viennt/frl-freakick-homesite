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
var all_day_button_component_1 = require('./all-day-button.component');
var schedule_button_component_1 = require('./schedule-button.component');
var reminder_button_component_1 = require('./reminder-button.component');
var age_group_button_component_1 = require('./age-group-button.component');
var image_button_component_1 = require('./image-button.component');
var address_button_component_1 = require('./address-button.component');
var upload_service_1 = require('../../../../services/upload.service');
var ButtonModule = (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [
                all_day_button_component_1.AllDayButtonComponent, schedule_button_component_1.ScheduleButtonComponent, reminder_button_component_1.ReminderButtonComponent,
                age_group_button_component_1.AgeGroupButtonComponent, image_button_component_1.ImageButtonComponent, address_button_component_1.AddressButtonComponent
            ],
            declarations: [
                all_day_button_component_1.AllDayButtonComponent, schedule_button_component_1.ScheduleButtonComponent, reminder_button_component_1.ReminderButtonComponent,
                age_group_button_component_1.AgeGroupButtonComponent, image_button_component_1.ImageButtonComponent, address_button_component_1.AddressButtonComponent
            ],
            providers: [upload_service_1.UploadService],
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonModule);
    return ButtonModule;
}());
exports.ButtonModule = ButtonModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHlDQUFzQyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ25FLDBDQUF3Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3RFLDBDQUF3Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3RFLDJDQUF3Qyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3ZFLHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2hFLHlDQUF1Qyw0QkFBNEIsQ0FBQyxDQUFBO0FBRXBFLCtCQUE4QixxQ0FBcUMsQ0FBQyxDQUFBO0FBY3BFO0lBQUE7SUFDQSxDQUFDO0lBYkQ7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRTtnQkFDUCxnREFBcUIsRUFBRSxtREFBdUIsRUFBRSxtREFBdUI7Z0JBQ3ZFLG9EQUF1QixFQUFFLDZDQUFvQixFQUFFLGlEQUFzQjthQUN0RTtZQUNELFlBQVksRUFBRTtnQkFDWixnREFBcUIsRUFBRSxtREFBdUIsRUFBRSxtREFBdUI7Z0JBQ3ZFLG9EQUF1QixFQUFFLDZDQUFvQixFQUFFLGlEQUFzQjthQUN0RTtZQUNELFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDM0IsQ0FBQzs7b0JBQUE7SUFFRixtQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksb0JBQVksZUFDeEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vdGltZS1saW5lLXBhZ2UvcG9zdGluZy1ldmVudC1ib3gvYnV0dG9uL2J1dHRvbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQWxsRGF5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9hbGwtZGF5LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NoZWR1bGVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVtaW5kZXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3JlbWluZGVyLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWdlR3JvdXBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2FnZS1ncm91cC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEFkZHJlc3NCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2FkZHJlc3MtYnV0dG9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVwbG9hZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91cGxvYWQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgQWxsRGF5QnV0dG9uQ29tcG9uZW50LCBTY2hlZHVsZUJ1dHRvbkNvbXBvbmVudCwgUmVtaW5kZXJCdXR0b25Db21wb25lbnQsXG4gICAgQWdlR3JvdXBCdXR0b25Db21wb25lbnQsIEltYWdlQnV0dG9uQ29tcG9uZW50LCBBZGRyZXNzQnV0dG9uQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFsbERheUJ1dHRvbkNvbXBvbmVudCwgU2NoZWR1bGVCdXR0b25Db21wb25lbnQsIFJlbWluZGVyQnV0dG9uQ29tcG9uZW50LFxuICAgIEFnZUdyb3VwQnV0dG9uQ29tcG9uZW50LCBJbWFnZUJ1dHRvbkNvbXBvbmVudCwgQWRkcmVzc0J1dHRvbkNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtVcGxvYWRTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kdWxlIHtcbn1cbiJdfQ==
