import { CONFIG } from '../constants';

export interface ITeamOptions {
  teamId: number;
  teamName: string;
  teamLogo: string;
  teamRank: string;
  wins: number;
  losses: number;
  level: number;
  isOpenSlot: boolean;
}

export class Team {
  public others: any;

  private _teamId: number;
  private _teamName: string;
  private _teamLogo: string;
  private _teamRank: string;
  private _wins: number;
  private _losses: number;
  private _level: number;
  private _isOpenSlot: boolean;

  static getLogo(logo: any) {
    if (!logo || logo === 'null') {
      return './assets/images/default/team_logo.png';
    } else {
      if (logo.startsWith(CONFIG.URL)) return logo;
      return CONFIG.URL + '/assets/' + logo;
    }
  }

  constructor();
  constructor(options: ITeamOptions);
  constructor(options?: ITeamOptions) {
    this._teamId = options && options.teamId || 0;
    this._teamName = options && options.teamName || 'Freakick Team';
    this._teamLogo = options && Team.getLogo(options.teamLogo) || 'NaN';
    this._teamRank = options && options.teamRank || 'NaN';
    this._wins = options && options.wins || 0;
    this._losses = options && options.losses || 0;
    this._level = options && options.level || 0;
    this._isOpenSlot = options && options.isOpenSlot || false;
    this.others = {};
  }

  get teamId(): number {
    return this._teamId;
  }

  set teamId(value: number) {
    this._teamId = value;
  }

  get teamName(): string {
    return this._teamName;
  }

  set teamName(value: string) {
    this._teamName = value;
  }

  get teamLogo(): string {
    return this._teamLogo;
  }

  set teamLogo(value: string) {
    this._teamLogo = Team.getLogo(value);
  }

  get teamRank(): string {
    return this._teamRank;
  }

  set teamRank(value: string) {
    this._teamRank = value;
  }

  get wins(): number {
    return this._wins;
  }

  set wins(value: number) {
    this._wins = value;
  }

  get losses(): number {
    return this._losses;
  }

  set losses(value: number) {
    this._losses = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get isOpenSlot(): boolean {
    return this._isOpenSlot;
  }

  set isOpenSlot(value: boolean) {
    this._isOpenSlot = value;
  }
}
