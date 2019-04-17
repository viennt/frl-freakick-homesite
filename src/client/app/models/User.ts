import { Role } from './Role';
import { Partner } from './Partner';
import { City } from './City';
import { State } from './State';
import { Country } from './Country';

import { CONFIG } from '../constants';

export interface IUserOptions {
  userId: number;
  captainOfTeam: number;
  email: string;
  password: string;
  userImage: string;
  userName: string;
  fullName: string;
  level: number;
  levelLabel: string;
  currentExperience: number;
  distanceRangeUpToLevel: number;
  maxExperience: number;
  playedGame: number;
  isFinishDemographicQuestion: boolean;
  partner: Partner;
  isAllowReceiveInvitation?: boolean;
  userRole?: Role;
  isDisplayHelpGuild?: boolean;
  gold?: number;
  city: City;
  state: State;
  country: Country;
  follower: number;
  gamePlayed: {guild: number, pickup: number, league: number};
  like: number;
}

export class User {
  public userId: number;
  public captainOfTeam: number;
  public email: string;
  public password: string;
  public userName: string;
  public fullName: string;
  public firstName: string;
  public lastName: string;
  public level: number;
  public levelLabel: string;
  public currentExperience: number;
  public distanceRangeUpToLevel: number;
  public maxExperience: number;
  public playedGame: number;
  public isFinishDemographicQuestion: boolean;
  public expPercent: number;
  public lineAddress: string = '';
  public city: City;
  public postalCode: string = '';
  public state: State;
  public countryCode: string = 'US';
  public country: Country;
  public follower: number;
  public gamePlayed: {guild: number, pickup: number, league: number};
  public like: number;
  public partner: Partner;
  public cardNumber: string = '';
  public expiration: string = '';
  public cvc: string = '';
  public cardType: string = '';

  private _userImage: string;

  public static getLogo(logo: string) {
    if (!logo || logo === 'null') {
      return './assets/images/default/user_logo.png';
    } else {
      if (logo.startsWith(CONFIG.URL)) return logo;
      return CONFIG.URL + '/assets/' + logo;
    }
  }

  /**
   * Get exp percent of current level and next level
   * @returns {number}
   */
  public calcExperiencePercent() {
    try {
      this.expPercent = (1 - (this.maxExperience - this.currentExperience) / this.distanceRangeUpToLevel) * 100;
    } catch (error) {
      console.warn(error);
    }
  }

  constructor();
  constructor(options: IUserOptions);
  constructor(options?: IUserOptions) {
    this.userId = options && options.userId || null;
    this.captainOfTeam = options && options.captainOfTeam || null;
    this.email = options && options.email || '';
    this.password = options && options.password || '';
    this.userImage = options && options.userImage || '';
    this.userName = options && options.userName || '';
    this.fullName = options && options.fullName || '';
    this.firstName = options && options.fullName && options.fullName.substring(0, options.fullName.indexOf(' ')) || '';
    this.lastName = options && options.fullName && options.fullName.split(' ').pop() || '';
    this.level = options && options.level || null;
    this.levelLabel = options && options.levelLabel || '';
    this.currentExperience = options && options.currentExperience || null;
    this.distanceRangeUpToLevel = options && options.distanceRangeUpToLevel || null;
    this.maxExperience = options && options.maxExperience || null;
    this.playedGame = options && options.playedGame || 0;
    this.isFinishDemographicQuestion = options && options.isFinishDemographicQuestion || false;
    this.city = options && options.city && new City(options.city.cityId, options.city.cityName) || new City(-1, null);
    this.state = options && options.state && new State(options.state.stateId, options.state.stateName) || new State(-1, null);
    this.country = options && options.country
      && new Country(options.country.countryId, options.country.countryName) || new Country(-1, null);
    this.like = options && options.like || 0;
    this.follower = options && options.follower || 0;
    this.gamePlayed = options && options.gamePlayed || null;
    this.calcExperiencePercent();
  }

  get userImage(): string {
    return this._userImage;
  }

  set userImage(value: string) {
    console.log(value);
    this._userImage = User.getLogo(value);
  }
}

