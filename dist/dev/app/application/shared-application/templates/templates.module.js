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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var time_line_component_1 = require('./time-line/time-line.component');
var time_line_loading_component_1 = require('./time-line-loading/time-line-loading.component');
var time_line_card_matchup_component_1 = require('./time-line-card/time-line-card-matchup/time-line-card-matchup.component');
var time_line_card_guild_game_component_1 = require('./time-line-card/time-line-card-guild-game/time-line-card-guild-game.component');
var time_line_card_standard_component_1 = require('./time-line-card/time-line-card-standard/time-line-card-standard.component');
var time_line_card_action_component_1 = require('./time-line-card/time-line-card-action/time-line-card-action.component');
var short_event_detail_component_1 = require('./event-detail/short-event-detail/short-event-detail.component');
var TemplatesModule = (function () {
    function TemplatesModule() {
    }
    TemplatesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            exports: [
                time_line_component_1.TimeLineComponent, time_line_loading_component_1.TimeLineLoadingComponent, short_event_detail_component_1.ShortEventDetailComponent
            ],
            declarations: [
                time_line_component_1.TimeLineComponent, time_line_loading_component_1.TimeLineLoadingComponent,
                time_line_card_matchup_component_1.TimeLineCardMatchupComponent, time_line_card_guild_game_component_1.TimeLineCardGuildGameComponent,
                time_line_card_standard_component_1.TimeLineCardStandardComponent, time_line_card_action_component_1.TimeLineCardActionComponent,
                short_event_detail_component_1.ShortEventDetailComponent,
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], TemplatesModule);
    return TemplatesModule;
}());
exports.TemplatesModule = TemplatesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vdGVtcGxhdGVzL3RlbXBsYXRlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyw4QkFBa0MsNkJBQTZCLENBQUMsQ0FBQTtBQUVoRSxvQ0FBa0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNwRSw0Q0FBeUMsaURBQWlELENBQUMsQ0FBQTtBQUMzRixpREFBNkMsMEVBQTBFLENBQUMsQ0FBQTtBQUN4SCxvREFBK0MsZ0ZBQWdGLENBQUMsQ0FBQTtBQUNoSSxrREFBOEMsNEVBQTRFLENBQUMsQ0FBQTtBQUMzSCxnREFBNEMsd0VBQXdFLENBQUMsQ0FBQTtBQUVySCw2Q0FBMEMsZ0VBQWdFLENBQUMsQ0FBQTtBQWUzRztJQUFBO0lBQ0EsQ0FBQztJQWREO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxFQUFFLGlDQUFpQixDQUFDO1lBQ3hELE9BQU8sRUFBRTtnQkFDUCx1Q0FBaUIsRUFBRSxzREFBd0IsRUFBRSx3REFBeUI7YUFDdkU7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osdUNBQWlCLEVBQUUsc0RBQXdCO2dCQUMzQywrREFBNEIsRUFBRSxvRUFBOEI7Z0JBQzVELGlFQUE2QixFQUFFLDZEQUEyQjtnQkFDMUQsd0RBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDOzt1QkFBQTtJQUVGLHNCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSx1QkFBZSxrQkFDM0IsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uL3RlbXBsYXRlcy90ZW1wbGF0ZXMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOZzJCczNNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XG5cbmltcG9ydCB7IFRpbWVMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lLWxpbmUvdGltZS1saW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lTGluZUxvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL3RpbWUtbGluZS1sb2FkaW5nL3RpbWUtbGluZS1sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lTGluZUNhcmRNYXRjaHVwQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lLWxpbmUtY2FyZC90aW1lLWxpbmUtY2FyZC1tYXRjaHVwL3RpbWUtbGluZS1jYXJkLW1hdGNodXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVMaW5lQ2FyZEd1aWxkR2FtZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZS1saW5lLWNhcmQvdGltZS1saW5lLWNhcmQtZ3VpbGQtZ2FtZS90aW1lLWxpbmUtY2FyZC1ndWlsZC1nYW1lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lTGluZUNhcmRTdGFuZGFyZENvbXBvbmVudCB9IGZyb20gJy4vdGltZS1saW5lLWNhcmQvdGltZS1saW5lLWNhcmQtc3RhbmRhcmQvdGltZS1saW5lLWNhcmQtc3RhbmRhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVMaW5lQ2FyZEFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdGltZS1saW5lLWNhcmQvdGltZS1saW5lLWNhcmQtYWN0aW9uL3RpbWUtbGluZS1jYXJkLWFjdGlvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTaG9ydEV2ZW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9ldmVudC1kZXRhaWwvc2hvcnQtZXZlbnQtZGV0YWlsL3Nob3J0LWV2ZW50LWRldGFpbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE5nMkJzM01vZGFsTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIFRpbWVMaW5lQ29tcG9uZW50LCBUaW1lTGluZUxvYWRpbmdDb21wb25lbnQsIFNob3J0RXZlbnREZXRhaWxDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGltZUxpbmVDb21wb25lbnQsIFRpbWVMaW5lTG9hZGluZ0NvbXBvbmVudCxcbiAgICBUaW1lTGluZUNhcmRNYXRjaHVwQ29tcG9uZW50LCBUaW1lTGluZUNhcmRHdWlsZEdhbWVDb21wb25lbnQsXG4gICAgVGltZUxpbmVDYXJkU3RhbmRhcmRDb21wb25lbnQsIFRpbWVMaW5lQ2FyZEFjdGlvbkNvbXBvbmVudCxcbiAgICBTaG9ydEV2ZW50RGV0YWlsQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZXNNb2R1bGUge1xufVxuIl19
