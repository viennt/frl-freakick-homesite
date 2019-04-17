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
            templateUrl: 'second-menu-bar.component.html',
            styleUrls: ['second-menu-bar.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, message_service_1.MessageService])
    ], SecondMenuBarComponent);
    return SecondMenuBarComponent;
}());
exports.SecondMenuBarComponent = SecondMenuBarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vc2Vjb25kLW1lbnUtYmFyL3NlY29uZC1tZW51LWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUt6QyxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUtuRSx1QkFBdUIsK0JBQStCLENBQUMsQ0FBQTtBQUN2RCwyQkFBMkIsbUNBQW1DLENBQUMsQ0FBQTtBQUsvRCwyREFBMkQsc0VBQXNFLENBQUMsQ0FBQTtBQUNsSSxvQ0FBb0MsK0NBQStDLENBQUMsQ0FBQTtBQVFwRjtJQVNFLGdDQUFvQixNQUFjLEVBQ2QsY0FBOEI7UUFEOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFdkQseUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQzNDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixFQUFFLEVBQXhCLENBQXdCLENBQ25DLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDdEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUN2QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGtEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDL0MsQ0FBQztJQUVELDhDQUFhLEdBQWIsVUFBYyxPQUFZO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEtBQUssMERBQTBEO2dCQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDdkMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLE1BQU0sQ0FBQztvQkFDeEIsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQzFCLElBQUksRUFBRSxlQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQ2pELENBQUMsRUFKYSxDQUliLENBQ0gsQ0FBQztnQkFDRixLQUFLLENBQUM7WUFDUixLQUFLLGtDQUFrQztnQkFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ3JDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxNQUFNLENBQUM7b0JBQ3hCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQ3hCLElBQUksRUFBRSx1QkFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUN2RCxDQUFDLEVBSmEsQ0FJYixDQUNILENBQUM7Z0JBQ0YsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCw0REFBMkIsR0FBM0I7UUFDRSxJQUFJLFVBQVUsR0FBRyxJQUFJLHVGQUEwQyxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDBEQUF5QixHQUF6QjtRQUNFLElBQUksVUFBVSxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFyRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDOzs4QkFBQTtJQWtFRiw2QkFBQztBQUFELENBakVBLEFBaUVDLElBQUE7QUFqRVksOEJBQXNCLHlCQWlFbEMsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uL3NlY29uZC1tZW51LWJhci9zZWNvbmQtbWVudS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5cbi8qKlxuICogbW9kZWxzXG4gKi9cbmltcG9ydCB7IExlYWd1ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9sZWFndWUvTGVhZ3VlJztcbmltcG9ydCB7IExlYWd1ZVRlYW0gfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvbGVhZ3VlL0xlYWd1ZVRlYW0nO1xuXG4vKipcbiAqIHBhY2thZ2VzXG4gKi9cbmltcG9ydCB7IExlYWd1ZVNlYXJjaFVzZXJDb21wZXRpdGlvbnNXaXRoU2hvcnRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2xlYWd1ZXMvTGVhZ3VlU2VhcmNoVXNlckNvbXBldGl0aW9uc1dpdGhTaG9ydE1vZGVsJztcbmltcG9ydCB7IExlYWd1ZUdldFRlYW1CeVVzZXIgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9sZWFndWVzL0xlYWd1ZUdldFRlYW1CeVVzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2Vjb25kLW1lbnUtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWNvbmQtbWVudS1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2Vjb25kLW1lbnUtYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWNvbmRNZW51QmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgbWVzc2FnZVN1YjogYW55O1xuICBwdWJsaWMgcm91dGVyU3ViOiBhbnk7XG5cbiAgcHVibGljIGxlYWd1ZXM6IHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGxvZ286IHN0cmluZ31bXTtcbiAgcHVibGljIHRlYW1zOiB7aWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBsb2dvOiBzdHJpbmd9W107XG5cbiAgcHVibGljIGN1cnJlbnRSb3V0ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlclN1YiA9IHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoXG4gICAgICBwYXJhbXMgPT4gdGhpcy5oYW5kbGVSb3V0ZXJFdmVudCgpXG4gICAgKTtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShcbiAgICAgIG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgKTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRMaXN0TGVhZ3VlcygpO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldExpc3RUZWFtcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb3V0ZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm1lc3NhZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGhhbmRsZVJvdXRlckV2ZW50KCk6IGFueSB7XG4gICAgdGhpcy5jdXJyZW50Um91dGUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnTEVBR1VFX1NFQVJDSF9VU0VSX0NPTVBFVElUSU9OU19XSVRIX1NIT1JUX01PREVMX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLmxlYWd1ZXMgPSBtZXNzYWdlLmRhdGEubHN0UmVzdWx0Lm1hcChcbiAgICAgICAgICAoZGF0YTogYW55KSA9PiBuZXcgT2JqZWN0KHtcbiAgICAgICAgICAgIGlkOiBkYXRhLmxlYWd1ZUlkLFxuICAgICAgICAgICAgbmFtZTogZGF0YS5jb21wZXRpdGlvbk5hbWUsXG4gICAgICAgICAgICBsb2dvOiBMZWFndWUuZ2V0TGVhZ3VlTG9nbyhkYXRhLmNvbXBldGl0aW9uTG9nbylcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0xFQUdVRV9HRVRfVEVBTVNfQllfVVNFUl9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy50ZWFtcyA9IG1lc3NhZ2UuZGF0YS5sc3RSZXN1bHQubWFwKFxuICAgICAgICAgIChkYXRhOiBhbnkpID0+IG5ldyBPYmplY3Qoe1xuICAgICAgICAgICAgaWQ6IGRhdGEudGVhbS50ZWFtSWQsXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnRlYW0udGVhbU5hbWUsXG4gICAgICAgICAgICBsb2dvOiBMZWFndWVUZWFtLmdldExlYWd1ZVRlYW1Mb2dvKGRhdGEudGVhbS50ZWFtTG9nbylcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvR2V0TGlzdExlYWd1ZXMoKTogdm9pZCB7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgTGVhZ3VlU2VhcmNoVXNlckNvbXBldGl0aW9uc1dpdGhTaG9ydE1vZGVsKCk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvR2V0TGlzdFRlYW1zKCk6IHZvaWQge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IExlYWd1ZUdldFRlYW1CeVVzZXIoKS5zZXRQYWdpbmF0aW9uKDMsIDApO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbn1cbiJdfQ==
