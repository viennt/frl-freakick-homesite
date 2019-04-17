import { CONFIG } from '../constants';

export interface ISportOptions {
  sportId: number;
  sportName: string;
  sportIcon: string;
}

export class Sport {
  public sportId: number;
  public sportName: string;
  public sportIcon: string;

  public static getLogo(logo: any): string {
    if (!logo || logo === 'null') {
      return './assets/images/default/court-default.png';
    } else {
      if (logo.startsWith(CONFIG.URL)) return logo;
      return CONFIG.URL + '/assets/' + logo;
    }
  }

  constructor()
  constructor(options: ISportOptions)
  constructor(options?: ISportOptions) {
    this.sportId = options && options.sportId || 0;
    this.sportName = options && options.sportName || 'Unknown sport';
    this.sportIcon = options && Sport.getLogo(options.sportIcon) || '';
  }
}
