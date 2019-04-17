import { CONFIG } from '../../constants';
import { ISportOptions, Sport } from '../Sport';

export interface ILeagueTeam {
  teamId: number;
  teamName: string;
  teamLogo: string;
  teamRank: number;
  wins: number;
  ties: number;
  losses: number;
  points: number;
  city: any;
  sport: ISportOptions;
}

export class LeagueTeam {
  public teamId: number;
  public teamName: string;
  public teamLogo: string;
  public teamRank: number;
  public wins: number;
  public ties: number;
  public losses: number;
  public points: number;
  public city: any;
  public sport: Sport;

  static getLeagueTeamLogo(logo: string) {
    if (!logo || logo === 'null') {
      return './assets/images/default/logo.png';
    } else {
      if (logo.startsWith(CONFIG.URL)) return logo;
      else if (logo.startsWith('./assets')) return logo;
      return CONFIG.URL + '/assets/' + logo;
    }
  }

  constructor()
  constructor(options: ILeagueTeam)
  constructor(options?: ILeagueTeam) {
    this.teamId = options && options.teamId || -1;
    this.teamName = options && options.teamName || 'Unknown Team';
    this.teamLogo = options && options.teamLogo &&
      LeagueTeam.getLeagueTeamLogo(options.teamLogo) ||
      LeagueTeam.getLeagueTeamLogo('');
    this.teamRank = options && options.teamRank || 0;
    this.wins = options && options.wins || 0;
    this.ties = options && options.ties || 0;
    this.losses = options && options.losses || 0;
    this.points = options && options.points || 0;
    this.city = options && options.city || {cityId: 0, cityName: ''};
    this.sport = options && options.sport && new Sport(options.sport) || new Sport();
  }
}
