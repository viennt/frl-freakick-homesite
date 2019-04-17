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
