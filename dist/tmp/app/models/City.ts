/**
 * @description: City model
 * @author: Nestor NM
 * @date: 13-Oct-2016
 */
export class City {
  public cityId: number;
  public cityName: string;

  constructor(cityId: number, cityName: string) {
    this.cityId = cityId;
    this.cityName = cityName;
  }
}
