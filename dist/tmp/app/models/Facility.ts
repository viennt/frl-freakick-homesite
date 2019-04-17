import { Court, ICourtOptions } from './Court';
import { Sport, ISportOptions } from './Sport';
import { Partner, IPartnerOptions } from './Partner';

import { HelpService } from '../services/help.service';

export interface IFacilityOptions {
  fieldId: number;
  fieldCode: number;
  fieldSize: number;
  fieldType: ISportOptions;
  branch: ICourtOptions;
  openedTime: number;
  closedTime: number;
  isAvailable: boolean;
  partner: IPartnerOptions;
  isNotAllowGuest: boolean;
}

export class Facility {
  public fieldId: number;
  public fieldCode: number;
  public fieldSize: number;
  public fieldType: Sport;
  public branch: Court;
  public openedTime: string;
  public closedTime: string;
  public isAvailable: boolean;
  public partner: Partner;
  public isNotAllowGuest: boolean;

  constructor()
  constructor(options: IFacilityOptions)
  constructor(options?: IFacilityOptions) {
    this.fieldId = options && options.fieldId || 0;
    this.fieldCode = options && options.fieldCode || 0;
    this.fieldSize = options && options.fieldSize || 0;
    this.fieldType = options && new Sport(options.fieldType) || new Sport();
    this.branch = options && new Court(options.branch) || new Court();
    this.isAvailable = options && options.isAvailable || false;
    this.partner = options && new Partner(options.partner) || new Partner();
    this.isNotAllowGuest = options && options.isNotAllowGuest || false;

    let fieldTimezoneOffset: number = HelpService.getTimezoneOffset(this.branch.timeZone);
    this.openedTime = options && options.openedTime
      && HelpService.convertDoubleTimeToString(options.openedTime + fieldTimezoneOffset) || '';
    this.closedTime = options && options.closedTime
      && HelpService.convertDoubleTimeToString(options.closedTime + fieldTimezoneOffset) || '';
  }
}
