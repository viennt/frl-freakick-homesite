import { LngLat } from '../LngLat';

export interface IMatchupLocation {
  latitude: number;
  longitude: number;
  stadiumId: number;
  stadiumName: string;
}

export class MatchupLocation {
  public coordinate: LngLat;
  public stadiumId: number;
  public stadiumName: string;

  constructor()
  constructor(options: IMatchupLocation)
  constructor(options?: IMatchupLocation) {
    this.coordinate = options && new LngLat(options.longitude, options.latitude) || new LngLat();
    this.stadiumId = options && options.stadiumId || -1;
    this.stadiumName = options && options.stadiumName || 'Unknown stadium';
  }
}
