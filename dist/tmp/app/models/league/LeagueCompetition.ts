import { ILeague, League } from './League';
import { ILeagueFormat, LeagueFormat } from './LeagueFormat';
import { ILeagueMatchup, LeagueMatchup } from './LeagueMatchup';

export interface ILeagueCompetition {
  branchId: number;
  competitionId: number;
  frequencyInDays: number;
  numberOfPlayers: number;
  numberOfTeams: number;
  roundsByRival: number;
  totalGroups: any;
  numberOfKnockout: number;
  sportId: number;
  lockLineupHour: number;
  incompleteLineupId: number;
  numberOfPlayersInMatch: number;
  competitionName: string;
  season: number;
  startDateString: string;
  competitionLogo: string;
  league: ILeague;
  leagueFormat: ILeagueFormat;
  matchups: ILeagueMatchup[];
}

export class LeagueCompetition {
  public branchId: number;
  public competitionId: number;
  public frequencyInDays: number;
  public numberOfPlayers: number;
  public numberOfTeams: number;
  public roundsByRival: number;
  public totalGroups: any;
  public numberOfKnockout: number;
  public sportId: number;
  public lockLineupHour: number;
  public incompleteLineupId: number;
  public numberOfPlayersInMatch: number;
  public competitionName: string;
  public season: number;
  public startDateString: string;
  public competitionLogo: string;
  public league: League;
  public leagueFormat: LeagueFormat;
  public matchups: LeagueMatchup[];

  constructor()
  constructor(options: ILeagueCompetition)
  constructor(options?: ILeagueCompetition) {
    this.branchId = options && options.branchId || -1;
    this.competitionId = options && options.competitionId || -1;
    this.numberOfKnockout = options && options.numberOfKnockout || 0;
    this.sportId = options && options.sportId || 1;
    this.competitionName = options && options.competitionName || 'Unknown competition';
    this.season = options && options.season || 0;
    this.leagueFormat = new LeagueFormat();
    this.league = new League();
  }
}
