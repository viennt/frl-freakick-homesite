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
var booking_field_ticket_component_1 = require('./field-ticket/booking-field-ticket.component');
var booking_class_ticket_component_1 = require('./class-ticket/booking-class-ticket.component');
var class_schedule_component_1 = require('./class-schedule/class-schedule.component');
var booking_facility_ticket_component_1 = require('./facility-ticket/booking-facility-ticket.component');
var components = [
    booking_field_ticket_component_1.BookingFieldComponent,
    booking_class_ticket_component_1.BookingClassComponent, class_schedule_component_1.ClassScheduleComponent,
    booking_facility_ticket_component_1.BookingFacilityComponent
];
var BookingModule = (function () {
    function BookingModule() {
    }
    BookingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [components],
            exports: [components]
        }), 
        __metadata('design:paramtypes', [])
    ], BookingModule);
    return BookingModule;
}());
exports.BookingModule = BookingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYm9va2luZy9ib29raW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTdDLCtDQUFzQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ3RGLCtDQUFzQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ3RGLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLGtEQUF5QyxxREFBcUQsQ0FBQyxDQUFBO0FBRS9GLElBQUksVUFBVSxHQUFHO0lBQ2Ysc0RBQXFCO0lBQ3JCLHNEQUFxQixFQUFFLGlEQUFzQjtJQUM3Qyw0REFBd0I7Q0FDekIsQ0FBQztBQU9GO0lBQUE7SUFDQSxDQUFDO0lBTkQ7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLG1CQUFXLENBQUM7WUFDcEMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN0QixDQUFDOztxQkFBQTtJQUVGLG9CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxxQkFBYSxnQkFDekIsQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL2Jvb2tpbmcvYm9va2luZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCb29raW5nRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLXRpY2tldC9ib29raW5nLWZpZWxkLXRpY2tldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9va2luZ0NsYXNzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGFzcy10aWNrZXQvYm9va2luZy1jbGFzcy10aWNrZXQuY29tcG9uZW50JztcbmltcG9ydCB7IENsYXNzU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tICcuL2NsYXNzLXNjaGVkdWxlL2NsYXNzLXNjaGVkdWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29raW5nRmFjaWxpdHlDb21wb25lbnQgfSBmcm9tICcuL2ZhY2lsaXR5LXRpY2tldC9ib29raW5nLWZhY2lsaXR5LXRpY2tldC5jb21wb25lbnQnO1xuXG5sZXQgY29tcG9uZW50cyA9IFtcbiAgQm9va2luZ0ZpZWxkQ29tcG9uZW50LFxuICBCb29raW5nQ2xhc3NDb21wb25lbnQsIENsYXNzU2NoZWR1bGVDb21wb25lbnQsXG4gIEJvb2tpbmdGYWNpbGl0eUNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtjb21wb25lbnRzXSxcbiAgZXhwb3J0czogW2NvbXBvbmVudHNdXG59KVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdNb2R1bGUge1xufVxuIl19
