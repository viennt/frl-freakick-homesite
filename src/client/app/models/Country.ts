/**
 * @description: Country model
 * @author: Lily LA
 * @date: 12-Oct-2016
 */
export class Country {
  public countryId: number;
  public countryName: string;

  constructor(countryId: number, countryName: string) {
    this.countryId = countryId;
    this.countryName = countryName;
  }

}
