import { LngLat } from './LngLat';
import { City } from './City';

export interface ICourtOptions {
  branchId: number;
  branchName: string;
  latitude: number;
  longitude: number;
  address: string;
  phoneNumber: number;
  city: {
    cityId: number;
    cityName: string;
  };
  timeZone: string;
  rating: number;
  countRating: number;
}

export class Court {
  public id: number;
  public name: string;
  public coordinate: LngLat;
  public address: string;
  public phoneNumber: number;
  public city: City;
  public timeZone: string;
  public rating: number;
  public countRating: number;

  constructor();
  constructor(options: ICourtOptions);
  constructor(options?: ICourtOptions) {
    this.id = options && options.branchId || 0;
    this.name = options && options.branchName || 'Unknown branch';
    this.coordinate = options && new LngLat(options.longitude, options.latitude) || new LngLat();
    this.address = options && options.address || '';
    this.phoneNumber = options && options.phoneNumber || 0;
    this.city = options && new City(options.city.cityId, options.city.cityName) || null;
    this.timeZone = options && options.timeZone || '';
    this.rating = options && options.rating || 0;
    this.countRating = options && options.countRating || 0;
  }
}
