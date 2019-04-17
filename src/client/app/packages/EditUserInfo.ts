import { Package } from './Package';

/**
 * Jira ticket:           FKE-160 (https://freakick.atlassian.net/browse/FKE-160)
 * API Endpoint:          EDIT_USER_INFO
 * Success message type:  EDIT_USER_INFO_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'EDIT_USER_INFO';

export class EditUserInfo extends Package {
  private fullName: string;
  private userImage: string;
  private cellPhone: string;
  private birthDate: number;
  private countryId: number;
  private cityId: number;
  private genderId: number;
  private lstPlayerRoleId: number[];
  private playerBackgroundImage: string;
  private playerNumber: number;

  constructor() {
    super(API_ENDPOINT);
  }

  public setFullName(fullName: string): EditUserInfo {
    this.fullName = String(fullName);
    return this;
  }

  public setUserImage(userImage: string): EditUserInfo {
    this.userImage = String(userImage);
    return this;
  }

  public setCellPhone(cellPhone: string): EditUserInfo {
    this.cellPhone = String(cellPhone);
    return this;
  }

  public setBirthDate(birthDate: number): EditUserInfo {
    this.birthDate = Number(birthDate);
    return this;
  }

  public setCountryId(id: number): EditUserInfo {
    this.countryId = Number(id);
    return this;
  }

  public setCityId(id: number): EditUserInfo {
    this.cityId = Number(id);
    return this;
  }

  public setGenderId(id: number): EditUserInfo {
    this.genderId = Number(id);
    return this;
  }

  public setPlayerRoleIds(ids: number[]): EditUserInfo {
    this.lstPlayerRoleId = ids;
    return this;
  }

  public setBackgroundImage(image: string): EditUserInfo {
    this.playerBackgroundImage = String(image);
    return this;
  }

  public setPlayerNumber(playerNumber: number): EditUserInfo {
    this.playerNumber = Number(playerNumber);
    return this;
  }

}
