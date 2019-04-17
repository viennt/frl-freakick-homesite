import { ILeagueTeam, LeagueTeam } from './LeagueTeam';
import { ILeaguePlayer, LeaguePlayer } from './LeaguePlayer';

export interface ILeagueEvent {
  matchUpEventId: number;
  matchUpId: number;
  eventActionName: string;
  teamLeagueInfo: ILeagueTeam;
  player: ILeaguePlayer;
  player2: ILeaguePlayer;
  eventMinute: number;
  eventMinuteAdded: number;
}

export class LeagueEvent {
  public matchUpEventId: number;
  public matchUpId: number;
  public eventActionName: string;
  public teamLeagueInfo: ILeagueTeam;
  public player: ILeaguePlayer;
  public player2: ILeaguePlayer;
  public eventMinute: number;
  public eventMinuteAdded: number;

  constructor()
  constructor(options: ILeagueEvent)
  constructor(options?: ILeagueEvent) {
    this.matchUpEventId = options && options.matchUpEventId || -1;
    this.matchUpId = options && options.matchUpId || -1;
    this.teamLeagueInfo = options && options.teamLeagueInfo && new LeagueTeam(options.teamLeagueInfo) || new LeagueTeam();
    this.player = options && options.player && new LeaguePlayer(options.player) || new LeaguePlayer();
    this.player2 = options && options.player2 && new LeaguePlayer(options.player2) || new LeaguePlayer();
    this.eventActionName = options && options.eventActionName || 'Unknown competition';
    this.eventMinute = options && options.eventMinute || 0;
    this.eventMinuteAdded = options && options.eventMinuteAdded || 0;
  }
}
