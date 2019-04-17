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
var router_1 = require('@angular/router');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var button_module_1 = require('./posting-event-box/button/button.module');
var form_group_module_1 = require('./posting-event-box/form-group/form-group.module');
var shared_application_module_1 = require('../shared-application/shared-application.module');
var time_line_page_component_1 = require('./time-line-page.component');
var posting_event_box_component_1 = require('./posting-event-box/posting-event-box.component');
var all_events_component_1 = require('./all-events/all-events.component');
var single_event_modal_component_1 = require('./single-event-modal/single-event-modal.component');
var single_event_page_component_1 = require('./single-event-page/single-event-page.component');
var TimeLinePageModule = (function () {
    function TimeLinePageModule() {
    }
    TimeLinePageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, shared_application_module_1.SharedApplicationModule,
                button_module_1.ButtonModule, form_group_module_1.FormGroupModule, ng2_bs3_modal_1.Ng2Bs3ModalModule
            ],
            exports: [time_line_page_component_1.TimeLinePageComponent],
            declarations: [
                time_line_page_component_1.TimeLinePageComponent, posting_event_box_component_1.PostingEventBoxComponent,
                all_events_component_1.AllEventsComponent, single_event_modal_component_1.SingleEventModalComponent, single_event_page_component_1.SingleEventPageComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], TimeLinePageModule);
    return TimeLinePageModule;
}());
exports.TimeLinePageModule = TimeLinePageModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS90aW1lLWxpbmUtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw4QkFBa0MsNkJBQTZCLENBQUMsQ0FBQTtBQUNoRSw4QkFBNkIsMENBQTBDLENBQUMsQ0FBQTtBQUN4RSxrQ0FBZ0Msa0RBQWtELENBQUMsQ0FBQTtBQUNuRiwwQ0FBd0MsaURBQWlELENBQUMsQ0FBQTtBQUUxRix5Q0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSw0Q0FBMkMsaURBQWlELENBQUMsQ0FBQTtBQUM3RixxQ0FBcUMsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RSw2Q0FBMEMsbURBQW1ELENBQUMsQ0FBQTtBQUM5Riw0Q0FBeUMsaURBQWlELENBQUMsQ0FBQTtBQWMzRjtJQUFBO0lBQ0EsQ0FBQztJQWJEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLEVBQUUsbUJBQVcsRUFBRSxxQkFBWSxFQUFFLG1EQUF1QjtnQkFDaEUsNEJBQVksRUFBRSxtQ0FBZSxFQUFFLGlDQUFpQjthQUNqRDtZQUNELE9BQU8sRUFBRSxDQUFDLGdEQUFxQixDQUFDO1lBQ2hDLFlBQVksRUFBRTtnQkFDWixnREFBcUIsRUFBRSxzREFBd0I7Z0JBQy9DLHlDQUFrQixFQUFFLHdEQUF5QixFQUFFLHNEQUF3QjthQUN4RTtZQUNELFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7MEJBQUE7SUFFRix5QkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksMEJBQWtCLHFCQUM5QixDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS90aW1lLWxpbmUtcGFnZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmcyQnMzTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9wb3N0aW5nLWV2ZW50LWJveC9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXBNb2R1bGUgfSBmcm9tICcuL3Bvc3RpbmctZXZlbnQtYm94L2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkQXBwbGljYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQtYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uLm1vZHVsZSc7XG5cbmltcG9ydCB7IFRpbWVMaW5lUGFnZUNvbXBvbmVudCB9ICAgZnJvbSAnLi90aW1lLWxpbmUtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9zdGluZ0V2ZW50Qm94Q29tcG9uZW50IH0gICBmcm9tICcuL3Bvc3RpbmctZXZlbnQtYm94L3Bvc3RpbmctZXZlbnQtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGxFdmVudHNDb21wb25lbnQgfSAgIGZyb20gJy4vYWxsLWV2ZW50cy9hbGwtZXZlbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zaW5nbGUtZXZlbnQtbW9kYWwvc2luZ2xlLWV2ZW50LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NpbmdsZS1ldmVudC1wYWdlL3NpbmdsZS1ldmVudC1wYWdlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIFNoYXJlZEFwcGxpY2F0aW9uTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSwgRm9ybUdyb3VwTW9kdWxlLCBOZzJCczNNb2RhbE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbVGltZUxpbmVQYWdlQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGltZUxpbmVQYWdlQ29tcG9uZW50LCBQb3N0aW5nRXZlbnRCb3hDb21wb25lbnQsXG4gICAgQWxsRXZlbnRzQ29tcG9uZW50LCBTaW5nbGVFdmVudE1vZGFsQ29tcG9uZW50LCBTaW5nbGVFdmVudFBhZ2VDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZUxpbmVQYWdlTW9kdWxlIHtcbn1cbiJdfQ==
