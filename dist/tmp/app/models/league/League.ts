import { ICommissioner, Commissioner } from './Commissioner';
import { ISportOptions, Sport } from '../Sport';

import { CONFIG } from '../../constants';

export interface ILeague {
  alternateId: number;
  commissioner: ICommissioner;
  competitionId: number;
  currentRound: number;
  isAuthenticated: boolean;
  latitude: number;
  leagueId: number;
  leagueLogo: string;
  leagueName: string;
  leagueType: string;
  location: string;
  longitude: number;
  twitter: string;
  sport: ISportOptions;
  weekId: number;
}

export class League {
  public alternateId: number;
  public leagueId: number;
  public leagueName: string;
  public leagueLogo: string;
  public competitionId: number;
  public currentRound: number;
  public commissioner: Commissioner;
  public latitude: number;
  public longitude: number;
  public location: string;
  public twitter: string;
  public isAuthenticated: boolean;
  public leagueType: string;
  public sport: Sport;
  public weekId: number;

  static getLeagueLogo(logo: string) {
    if (!logo || logo === 'null') {
      return './assets/images/default/logo.png';
    } else {
      if (logo.startsWith(CONFIG.URL)) return logo;
      else if (logo.startsWith('./assets')) return logo;
      return CONFIG.URL + '/assets/' + logo;
    }
  }

  constructor()
  constructor(options: ILeague)
  constructor(options?: ILeague) {
    this.alternateId = options && options.alternateId || 0;
    this.leagueId = options && options.leagueId || 0;
    this.leagueName = options && options.leagueName || 'unknow league name';
    this.leagueLogo = options && options.leagueLogo || 'unknow league logo';
    this.competitionId = options && options.competitionId || 0;
    this.currentRound = options && options.currentRound || 0;
    // this.commissioner = options && options.commissioner || 'unknow commissioner';
    this.commissioner = options && new Commissioner(options.commissioner);
    this.latitude = options && options.latitude || 0;
    this.longitude = options && options.longitude || 0;
    this.location = options && options.location || 'unknow location';
    this.twitter = options && options.twitter || 'unknow twitter';
    this.weekId = options && options.weekId || 0;
    this.isAuthenticated = options && options.isAuthenticated || false;
    if (options && options.sport) {
      this.sport = new Sport(options.sport);
    }
    this.leagueType = options && options.leagueType || 'Unknow league type';
  }
}
