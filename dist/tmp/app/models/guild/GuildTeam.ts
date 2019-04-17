import { CONFIG } from '../../constants';
import { Sport } from '../Sport';
import { City } from '../City';

export interface IGuildTeamOptions {
  teamId: number;
  teamName: string;
  teamLogo: string;
  teamRank: string;
  wins: number;
  losses: number;
  level: number;
  isOpenSlot: boolean;
  sport: Sport;
  gold: number;
  territories: number;
  city: City;
}

export class GuildTeam {
  public teamId: number;
  public teamName: string;
  public teamLogo: string;
  public teamRank: string;
  public wins: number;
  public losses: number;
  public level: number;
  public isOpenSlot: boolean;
  public sport: Sport;
  public gold: number;
  public territories: number;
  public city: City;
  public others: any;

  public static getGuildTeamLogo(logo: any) {
    if (!logo || logo === 'null') {
      return './assets/images/default/logo.png';
    } else {
      if (logo.startsWith(CONFIG.URL)) return logo;
      else if (logo.startsWith('./assets')) return logo;
      return CONFIG.URL + '/assets/' + logo;
    }
  }

  constructor();
  constructor(options: IGuildTeamOptions);
  constructor(options?: IGuildTeamOptions) {
    this.teamId = options && options.teamId || 0;
    this.teamName = options && options.teamName || 'Freakick Team';
    this.teamLogo = options && GuildTeam.getGuildTeamLogo(options.teamLogo) || 'NaN';
    this.teamRank = options && options.teamRank || 'NaN';
    this.wins = options && options.wins || 0;
    this.losses = options && options.losses || 0;
    this.level = options && options.level || 0;
    this.isOpenSlot = options && options.isOpenSlot || false;
    this.others = {};
    this.sport = options && new Sport(options.sport);
    this.gold = options && Number(options.gold) || 0;
    this.territories = options && Number(options.territories) || 0;
    this.city = options && new City(options.city.cityId, options.city.cityName);
  }
}
