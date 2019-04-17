import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

/**
 * services
 */
import { MessageService } from '../../../services/message.service';

/**
 * models
 */
import { League } from '../../../models/league/League';
import { LeagueTeam } from '../../../models/league/LeagueTeam';

/**
 * packages
 */
import { LeagueSearchUserCompetitionsWithShortModel } from '../../../packages/leagues/LeagueSearchUserCompetitionsWithShortModel';
import { LeagueGetTeamByUser } from '../../../packages/leagues/LeagueGetTeamByUser';

@Component({
  moduleId: module.id,
  selector: 'app-second-menu-bar',
  templateUrl: 'second-menu-bar.component.html',
  styleUrls: ['second-menu-bar.component.css']
})
export class SecondMenuBarComponent implements OnInit, OnDestroy {
  public messageSub: any;
  public routerSub: any;

  public leagues: {id: number, name: string, logo: string}[];
  public teams: {id: number, name: string, logo: string}[];

  public currentRoute: string;

  constructor(private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.routerSub = this.router.events.subscribe(
      params => this.handleRouterEvent()
    );
    this.messageSub = this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
    this.sendMessageToGetListLeagues();
    this.sendMessageToGetListTeams();
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
    this.messageSub.unsubscribe();
  }

  handleRouterEvent(): any {
    this.currentRoute = window.location.pathname;
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'LEAGUE_SEARCH_USER_COMPETITIONS_WITH_SHORT_MODEL_SUCCESS':
        this.leagues = message.data.lstResult.map(
          (data: any) => new Object({
            id: data.leagueId,
            name: data.competitionName,
            logo: League.getLeagueLogo(data.competitionLogo)
          })
        );
        break;
      case 'LEAGUE_GET_TEAMS_BY_USER_SUCCESS':
        this.teams = message.data.lstResult.map(
          (data: any) => new Object({
            id: data.team.teamId,
            name: data.team.teamName,
            logo: LeagueTeam.getLeagueTeamLogo(data.team.teamLogo)
          })
        );
        break;
    }
  }

  sendMessageToGetListLeagues(): void {
    let apiPackage = new LeagueSearchUserCompetitionsWithShortModel();
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToGetListTeams(): void {
    let apiPackage = new LeagueGetTeamByUser().setPagination(3, 0);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

}
