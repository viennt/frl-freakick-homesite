import { CONFIG } from '../../constants';

export interface ILeaguePlayer {
  playerId: number;
  playerName: string;
  playerPhoto: string;
  number: number;
  city: any;
  userId: number;
  playerImageBg: string;
  playerRole: any;
}

export class LeaguePlayer {
  public playerId: number;
  public playerName: string;
  public playerPhoto: string;
  public number: number;
  public city: any;
  public userId: number;
  public playerImageBg: string;
  public playerRole: any;

  static getLeaguePlayerLogo(image: string) {
    if (!image || image === 'null') {
      return './assets/images/default/team_image.png';
    } else {
      if (image.startsWith(CONFIG.URL)) return image;
      else if (image.startsWith('./assets')) return image;
      return URL + '/assets/' + image;
    }
  }

  constructor()
  constructor(options: ILeaguePlayer)
  constructor(options?: ILeaguePlayer) {
    this.playerId = options && options.playerId || 0;
    this.playerPhoto = options && options.playerPhoto &&
      LeaguePlayer.getLeaguePlayerLogo(options.playerPhoto) ||
      LeaguePlayer.getLeaguePlayerLogo('');
    this.number = options && options.number || -1;
    this.city = options && options.city || {};
    this.userId = options && options.userId || 1;
    this.playerName = options && options.playerName || '';
    this.playerImageBg = options && options.playerImageBg &&
      LeaguePlayer.getLeaguePlayerLogo(options.playerImageBg) ||
      LeaguePlayer.getLeaguePlayerLogo('');
    this.playerRole = options && options.playerRole || {};
  }
}
