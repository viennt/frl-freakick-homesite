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
var router_1 = require('@angular/router');
var message_service_1 = require('../../../services/message.service');
var League_1 = require('../../../models/league/League');
var LeagueTeam_1 = require('../../../models/league/LeagueTeam');
var LeagueSearchUserCompetitionsWithShortModel_1 = require('../../../packages/leagues/LeagueSearchUserCompetitionsWithShortModel');
var LeagueGetTeamByUser_1 = require('../../../packages/leagues/LeagueGetTeamByUser');
var SecondMenuBarComponent = (function () {
    function SecondMenuBarComponent(router, messageService) {
        this.router = router;
        this.messageService = messageService;
    }
    SecondMenuBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSub = this.router.events.subscribe(function (params) { return _this.handleRouterEvent(); });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.sendMessageToGetListLeagues();
        this.sendMessageToGetListTeams();
    };
    SecondMenuBarComponent.prototype.ngOnDestroy = function () {
        this.routerSub.unsubscribe();
        this.messageSub.unsubscribe();
    };
    SecondMenuBarComponent.prototype.handleRouterEvent = function () {
        this.currentRoute = window.location.pathname;
    };
    SecondMenuBarComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'LEAGUE_SEARCH_USER_COMPETITIONS_WITH_SHORT_MODEL_SUCCESS':
                this.leagues = message.data.lstResult.map(function (data) { return new Object({
                    id: data.leagueId,
                    name: data.competitionName,
                    logo: League_1.League.getLeagueLogo(data.competitionLogo)
                }); });
                break;
            case 'LEAGUE_GET_TEAMS_BY_USER_SUCCESS':
                this.teams = message.data.lstResult.map(function (data) { return new Object({
                    id: data.team.teamId,
                    name: data.team.teamName,
                    logo: LeagueTeam_1.LeagueTeam.getLeagueTeamLogo(data.team.teamLogo)
                }); });
                break;
        }
    };
    SecondMenuBarComponent.prototype.sendMessageToGetListLeagues = function () {
        var apiPackage = new LeagueSearchUserCompetitionsWithShortModel_1.LeagueSearchUserCompetitionsWithShortModel();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    SecondMenuBarComponent.prototype.sendMessageToGetListTeams = function () {
        var apiPackage = new LeagueGetTeamByUser_1.LeagueGetTeamByUser().setPagination(3, 0);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    SecondMenuBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-second-menu-bar',
            template: "<aside class=\"widget card widget--sidebar widget_categories hidden-xs hidden-sm\">     <div class=\"widget__content card__content\">         <!-- SIDEBAR MENU -->         <ul *ngIf=\"leagues && teams && currentRoute\" class=\"widget__list animated fadeIn\"             data-keep-expanded=\"false\" data-auto-scroll=\"false\" data-slide-speed=\"200\">             <li class=\"no-margin\" [class.active]=\"currentRoute.startsWith('/app/newsfeed')\">                 <a class=\"uppercase\" [routerLink]=\"['/app/newsfeed']\">                     <i class=\"fa fa-feed\"></i>                     <span class=\"title\">News feed</span>                 </a>             </li>             <li class=\"no-margin\" [class.active]=\"currentRoute.startsWith('/app/facilities')\">                 <a class=\"uppercase\" [routerLink]=\"['/app/fields']\">                     <i class=\"fa fa-th-large\"></i>                     <span class=\"title\">Fields</span>                 </a>             </li>             <li class=\"no-margin\" [class.active]=\"currentRoute.startsWith('/app/facilities')\">                 <a class=\"uppercase\" [routerLink]=\"['/app/facilities']\">                     <i class=\"fa fa-map\"></i>                     <span class=\"title\">Facilities</span>                 </a>             </li>             <li class=\"no-margin\">                 <a class=\"uppercase\"><i class=\"fa fa-trophy\"></i> Leagues</a>                 <ul class=\"no-margin\">                     <li *ngFor=\"let league of leagues\" class=\"nav-item\"                         [class.active]=\"currentRoute.startsWith('/app/league/' + league.id)\">                         <a [routerLink]=\"['/app/league', league.id]\" class=\"nav-link nav-toggle\">                             <img [src]=\"league.logo\" alt=\"{{ league.name }}\"                                  (error)=\"$event.target.src = './assets/images/default/logo.png'\">                             <span class=\"title\"> {{ league.name }} </span>                         </a>                     </li>                     <li *ngIf=\"leagues.length > 3\" class=\"nav-item\"                         [class.active]=\"currentRoute.startsWith('/app/league')\">                         <a [routerLink]=\"['/app/league']\" class=\"nav-link nav-toggle\">                             <i class=\"fa fa-caret-down\"></i>                             <span class=\"title\">View all</span>                         </a>                     </li>                     <li *ngIf=\"leagues.length <= 3\" class=\"nav-item\"                         [class.active]=\"currentRoute.startsWith('/app/league/create')\">                         <a [routerLink]=\"['/app/league/create']\" class=\"nav-link nav-toggle\">                             <i class=\"fa fa-plus\"></i>                             <span class=\"title\">Create league</span>                         </a>                     </li>                 </ul>             </li>             <li class=\"no-margin\">                 <a class=\"uppercase\"><i class=\"fa fa-soccer-ball-o\"></i> Teams</a>                 <ul class=\"no-margin\">                     <li *ngFor=\"let team of teams\" class=\"nav-item\"                         [class.active]=\"currentRoute.startsWith('/app/team/' + team.id)\">                         <a [routerLink]=\"['/app/team/', team.id]\" class=\"nav-link nav-toggle\">                             <img [src]=\"team.logo\" alt=\"{{ team.name }}\"                                  (error)=\"$event.target.src = './assets/images/default/logo.png'\">                             <span class=\"title\"> {{ team.name }} </span>                         </a>                     </li>                     <li *ngIf=\"teams.length > 3\" class=\"nav-item\"                         [class.active]=\"currentRoute.startsWith('/app/team')\">                         <a [routerLink]=\"['/app/team']\" class=\"nav-link nav-toggle\">                             <i class=\"fa fa-caret-down\"></i>                             <span class=\"title\">View all</span>                         </a>                     </li>                     <li *ngIf=\"teams.length <= 3\" class=\"nav-item\"                         [class.active]=\"currentRoute.startsWith('/app/team/create')\">                         <a [routerLink]=\"['/app/team/create']\" class=\"nav-link nav-toggle\">                             <i class=\"fa fa-plus\"></i>                             <span class=\"title\">Create team</span>                         </a>                     </li>                 </ul>             </li>         </ul>         <!-- END SIDEBAR MENU -->         <!-- SIDEBAR MENU LOADING -->         <ul *ngIf=\"!leagues || !teams\" class=\"widget__list animated fadeIn\"             data-keep-expanded=\"false\" data-auto-scroll=\"false\" data-slide-speed=\"200\">             <li class=\"no-margin\">                 <a class=\"uppercase loading-content\"> Leagues</a>                 <ul class=\"no-margin\">                     <li class=\"nav-item loading-content\">.</li>                     <li class=\"nav-item loading-content\">.</li>                     <li class=\"nav-item loading-content\">.</li>                     <li class=\"nav-item loading-content\">.</li>                 </ul>             </li>             <li class=\"no-margin\">                 <a class=\"uppercase loading-content\"> Teams</a>                 <ul class=\"no-margin\">                     <li class=\"nav-item loading-content\">.</li>                     <li class=\"nav-item loading-content\">.</li>                     <li class=\"nav-item loading-content\">.</li>                     <li class=\"nav-item loading-content\">.</li>                 </ul>             </li>         </ul>         <!-- END SIDEBAR MENU LOADING -->     </div> </aside>",
            styles: [".nav-item a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nav-item img{width:20px;height:20px;border-radius:50%}.loading .heading h3{width:50%}.widget__list{font-size:14px;text-transform:none}.widget__list ul li{overflow:hidden;text-overflow:ellipsis}.widget__list>li.active{background-color:#38a9ff}.widget__list>li.active>a{color:#fff;font-weight:700}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, message_service_1.MessageService])
    ], SecondMenuBarComponent);
    return SecondMenuBarComponent;
}());
exports.SecondMenuBarComponent = SecondMenuBarComponent;
