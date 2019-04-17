import { CONFIG } from '../constants';

export interface IPartnerOptions {
  partnerId: number;
  partnerName: string;
  description: string;
  specialty: number;
  logo: string;
  slogan: string;
  iconMarker: string;
}
export class Partner {
  public partnerId: number;
  public partnerName: string;
  public description: string;
  public specialty: number;
  public logo: string;
  public slogan: string;
  public iconMarker: string;

  public static getLogo(logo: any): string {
    if (!logo || logo === 'null') {
      return './assets/images/default/court-default.png';
    } else {
      if (logo.startsWith(CONFIG.URL)) return logo;
      return CONFIG.URL + '/assets/' + logo;
    }
  }

  constructor()
  constructor(options: IPartnerOptions)
  constructor(options?: IPartnerOptions) {
    this.partnerId = options && options.partnerId || 0;
    this.partnerName = options && options.partnerName || 'Unknown Partner';
    this.description = options && options.description || '';
    this.specialty = options && options.specialty || 0;
    this.logo = options && Partner.getLogo(options.logo) || '';
    this.slogan = options && options.slogan || '';
    this.iconMarker = options && Partner.getLogo(options.iconMarker) || '';
  }

}
