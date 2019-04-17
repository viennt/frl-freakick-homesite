import { ILeagueTeam, LeagueTeam } from './LeagueTeam';

export interface ILeagueStanding {
  competitionId: number;
  competitionTeamId: number;
  competitionTeamStatus: any;
  goalsAgainst: number;
  goalsFor: number;
  leagueGroup: number;
  losses: number;
  points: number;
  team: ILeagueTeam;
  teamPosition: number;
  ties: number;
  userEmail: string;
  wins: number;
}

export class LeagueStanding {
  public competitionId: number;
  public competitionTeamId: number;
  public competitionTeamStatus: any;
  public goalsAgainst: number;
  public goalsFor: number;
  public leagueGroup: number;
  public losses: number;
  public points: number;
  public team: LeagueTeam;
  public teamPosition: number;
  public ties: number;
  public userEmail: string;
  public wins: number;

  constructor()
  constructor(options: ILeagueStanding)
  constructor(options?: ILeagueStanding) {
    this.competitionId = options && options.competitionId || -1;
    this.competitionTeamId = options && options.competitionTeamId;
    this.goalsAgainst = options && options.goalsAgainst || 0;
    this.goalsFor = options && options.goalsFor || 0;
    this.leagueGroup = options && options.leagueGroup || 0;
    this.losses = options && options.losses || 0;
    this.points = options && options.points || 0;
    this.team = options && options.team && new LeagueTeam(options.team) || new LeagueTeam();
    this.teamPosition = options && options.teamPosition || 0;
    this.ties = options && options.ties || 0;
    this.userEmail = options && options.userEmail || '';
    this.wins = options && options.wins || 0;
  }
}
