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
var notification_component_1 = require('./notification.component');
var simple_notifications_component_1 = require('./simple-notifications.component');
var notifications_service_1 = require('./notifications.service');
var SimpleNotificationsModule = (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [simple_notifications_component_1.SimpleNotificationsComponent, notification_component_1.NotificationComponent],
            exports: [simple_notifications_component_1.SimpleNotificationsComponent, notification_component_1.NotificationComponent],
            providers: [notifications_service_1.NotificationsService],
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleNotificationsModule);
    return SimpleNotificationsModule;
}());
exports.SimpleNotificationsModule = SimpleNotificationsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL25vdGlmaS9zaW1wbGUtbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUcvQyx1Q0FBc0MsMEJBQTBCLENBQUMsQ0FBQTtBQUNqRSwrQ0FBNkMsa0NBQWtDLENBQUMsQ0FBQTtBQUdoRixzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQVEvRDtJQUFBO0lBQXlDLENBQUM7SUFOMUM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLDZEQUE0QixFQUFFLDhDQUFxQixDQUFDO1lBQ25FLE9BQU8sRUFBRSxDQUFDLDZEQUE0QixFQUFFLDhDQUFxQixDQUFDO1lBQzlELFNBQVMsRUFBRSxDQUFDLDRDQUFvQixDQUFDO1NBQ2xDLENBQUM7O2lDQUFBO0lBQ3VDLGdDQUFDO0FBQUQsQ0FBekMsQUFBMEMsSUFBQTtBQUE3QixpQ0FBeUIsNEJBQUksQ0FBQSIsImZpbGUiOiJhcHAvcGx1Z2lucy9ub3RpZmkvc2ltcGxlLW5vdGlmaWNhdGlvbnMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKiBJbXBvcnQgY29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZU5vdGlmaWNhdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZS1ub3RpZmljYXRpb25zLmNvbXBvbmVudCc7XG5cbi8qKiBJbXBvcnQgc2VydmljZXMgKi9cbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2ltcGxlTm90aWZpY2F0aW9uc0NvbXBvbmVudCwgTm90aWZpY2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NpbXBsZU5vdGlmaWNhdGlvbnNDb21wb25lbnQgLE5vdGlmaWNhdGlvbkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW05vdGlmaWNhdGlvbnNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlTm90aWZpY2F0aW9uc01vZHVsZSB7IH1cbiJdfQ==
