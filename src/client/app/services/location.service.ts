import { Injectable } from '@angular/core';
import { LngLat } from '../models/LngLat';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class LocationService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private geolocationOptions: any;

  constructor(private http: Http) {
    this.geolocationOptions = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    };
  }

  /**
   * Obtain the user's current location
   * @param  {any}  successCallback
   */
  getCurrentPosition(successCallback: any) {
    navigator.geolocation.getCurrentPosition(
      (possition: any) => {
        let pos = {
          location: {
            lng: possition.coords.longitude,
            lat: possition.coords.latitude
          }
        };
        successCallback(pos);
      },
      (error: any) => {
        this.getCurrentPositionByGoogleAPI()
          .then((position: any) => {
            successCallback(position);
          });
      },
      this.geolocationOptions
    );
  }

  getCurrentPositionByGoogleAPI(): Promise<any> {
    return this.http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD2DeGymLqcAkcO_qOE0rKXUbFPswrtQD8',
      JSON.stringify({}),
      {headers: this.headers}).map(this.extractData).toPromise();
  }

  getAddress(lngLat: LngLat): Promise<any> {
    let apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
      + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI&language=en'
      + '&latlng=' + lngLat.getLat() + ',' + lngLat.getLng();
    return this.http.get(apiUrl).map(this.extractData).toPromise();
  }

  getCitiesByAddress(formattedAddress: string): Promise<any> {
    let apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
      + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
      + '&address=' + formattedAddress;
    return this.http.get(apiUrl).map(this.extractData).toPromise();
  }

  getTimeZone(latLng: any): Promise<any> {
    let apiUrl = 'https://maps.googleapis.com/maps/api/timezone/json'
      + '?timestamp=1331766000'
      + '&key=AIzaSyDROIp4tRM7q5OAgj67TCXrzpaFDd5KxJE'
      + '&location=' + latLng.lat + ',' + latLng.lng;
    return this.http.get(apiUrl).map(this.extractData).toPromise();
  }

  searchAddressByKeyWord(formattedAddress: string): Promise<any> {
    let apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
      + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI&language=en'
      + '&address=' + formattedAddress;
    return this.http.get(apiUrl).map(this.extractData).toPromise();
  }

  private extractData(res: Response) {
    return res.json();
  }
}
