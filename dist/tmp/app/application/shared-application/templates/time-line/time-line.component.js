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
var Event_1 = require('../../../../models/Event');
var TimeLineComponent = (function () {
    function TimeLineComponent() {
        this.eventTypes = Event_1.Event.type;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TimeLineComponent.prototype, "events", void 0);
    TimeLineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-template-time-line',
            template: "<div *ngIf=\"events\" class=\"posts posts--cards post-grid row\">     <div *ngFor=\"let event of events\">         <app-template-time-line-card-standard                 [event]=\"event\"                 *ngIf=\"event.eventType === eventTypes.Sponsored || event.eventType === eventTypes.Branch                        || event.eventType === eventTypes.GuildTeam || event.eventType === eventTypes.LeagueTeam\">         </app-template-time-line-card-standard>          <app-template-time-line-card-matchup                 [event]=\"event\"                 *ngIf=\"event.eventType === eventTypes.LeagueMatchup && event.matchup\">         </app-template-time-line-card-matchup>          <app-template-time-line-card-guild-game                 [event]=\"event\"                 *ngIf=\"event.eventType === eventTypes.GuildGame && event.guildGame\">         </app-template-time-line-card-guild-game>     </div> </div>",
            styles: [":host /deep/ .posts__item--card .posts__thumb:first-child{min-height:70px;background:#e1e5ec}:host /deep/ .posts__item--card .posts__thumb.pickup{background:linear-gradient(20deg,#709ed0,#59aad7,#3472bb)}:host /deep/ .posts__item--card .posts__thumb.sponsored{background:linear-gradient(20deg,#f95f86,#cc5395,#8746aa)}:host /deep/ .posts__item--card .posts__thumb.branch{background:linear-gradient(20deg,#f9cd8f,#fcb658,#fe8d1e)}:host /deep/ .posts__item--card .posts__thumb.guild{background:linear-gradient(20deg,#4fbbc0,#52c4b5,#56ceae)}:host /deep/ .posts__item--card .posts__thumb.league{background:linear-gradient(20deg,#d4b7fa,#e7a6de,#f975ac)}:host /deep/ .posts__item--card .posts__title .posts__cat-label{margin-right:10px}:host /deep/ .posts__item--card .posts__thumb img:first-child{position:absolute;top:0;left:0;width:100%;z-index:-1;opacity:.5}:host /deep/ .event-location img{width:100%;-webkit-mask-image:linear-gradient(left,transparent,#000,transparent);-webkit-mask-image:-webkit-linear-gradient(left,transparent,#000,transparent)}"],
        }), 
        __metadata('design:paramtypes', [])
    ], TimeLineComponent);
    return TimeLineComponent;
}());
exports.TimeLineComponent = TimeLineComponent;
