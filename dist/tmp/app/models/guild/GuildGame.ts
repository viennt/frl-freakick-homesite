import { LngLat } from '../LngLat';
import { DATE_TIME } from '../../constants';

export interface IGuildGameOptions {
  gameId: number;
  venueAddress: string;
  location: {
    longitude: number;
    latitude: number;
  };
  when: string;
  responseTime: string;
  gold: number;
  lastProposedId: number;
  host?: any;

}

export class GuildGame {
  public gameId: number;
  public venueAddress: string;
  public coordinate: LngLat;
  public when: string;
  public responseTime: string;
  public amountOfGold: number;
  public lastProposedId: number;
  public host: any;

  public static convertTime(time: any) {
    return moment.utc(time).local().format(DATE_TIME.SERVER_FORMAT);
  }

  constructor();
  constructor(options: IGuildGameOptions);
  constructor(options?: IGuildGameOptions) {
    this.gameId = options && options.gameId || null;
    this.venueAddress = options && options.venueAddress || '';
    this.coordinate = options && new LngLat(options.location.longitude, options.location.latitude) || null;
    this.when = options && GuildGame.convertTime(options.when) || '';
    this.responseTime = options && options.responseTime || '';
    this.amountOfGold = options && options.gold || null;
    this.lastProposedId = options && options.lastProposedId || null;
    this.host = options && options.host || null;
  }
}
