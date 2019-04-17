import { City } from './City';
import { State } from './State';
import { Country } from './Country';

export interface IAddressOptions {
  street: string;
  city?: City;
  state?: State;
  zipcode?: string;
  country?: Country;
}

export class Address {
  private street: string;
  private city: City;
  private state: State;
  private zipcode: string;
  private country: Country;

  constructor();
  constructor(options: IAddressOptions);
  constructor(options?: IAddressOptions) {
    this.street = options && options.street.trim() || '';
    this.city = options && options.city || null;
    this.state = options && options.state || null;
    this.zipcode = options && options.zipcode.trim() || '';
    this.country = options && options.country || null;
  }

  public setStreet(street: string): Address {
    this.street = street.trim();
    return this;
  }

  public getStreet(): string {
    return this.street;
  }

  public setCity(city: City): Address {
    this.city = city;
    return this;
  }

  public getCity(): City {
    return this.city;
  }

  public setState(state: State): Address {
    this.state = state;
    return this;
  }

  public getState(): State {
    return this.state;
  }

  public setCountry(country: Country): Address {
    this.country = country;
    return this;
  }

  public getCountry(): Country {
    return this.country;
  }

  public toString(): string {
    let address: string = '';
    if (this.country !== null) address = address.concat(this.country.countryName);
    if (this.zipcode !== '') address = this.zipcode.concat(', ', address);
    if (this.state !== null) address = this.state.stateName.concat(', ', address);
    if (this.city !== null) address = this.city.cityName.concat(', ', address);
    if (this.street !== '') address = this.street.concat(', ', address);
    return address;
  }
}
