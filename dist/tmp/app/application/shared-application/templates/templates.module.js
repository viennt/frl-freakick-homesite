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
