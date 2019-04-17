import { CONFIG } from '../../constants';

export interface ICommissioner {
  userEmail: string;
  userId: number;
  userImage: string;
  userName: string;
}

export class Commissioner {
  public userEmail: string;
  public userId: number;
  public userImage: string;
  public userName: string;

  static getLeagueUserImage(userImage: string) {
    if (!userImage || userImage === 'null') {
      return './assets/images/default/user_logo.png';
    } else {
      if (userImage.startsWith(CONFIG.URL)) return userImage;
      else if (userImage.startsWith('./assets')) return userImage;
      return CONFIG.URL + '/assets/' + userImage;
    }
  }

  constructor()
  constructor(options: ICommissioner)
  constructor(options?: ICommissioner) {
    this.userId = options && options.userId || -1;
    this.userName = options && options.userName || 'Unknown';
    this.userImage = Commissioner.getLeagueUserImage(options.userImage);
    this.userEmail = options && options.userEmail || 'Unknow';
  }
}
