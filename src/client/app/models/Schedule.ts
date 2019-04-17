import { Facility, IFacilityOptions } from './Facility';

import { HelpService } from '../services/help.service';

export interface IScheduleOptions {
  from: number;
  to: number;
  field: IFacilityOptions;
}

export class Schedule {
  public from: string;
  public to: string;
  public field: Facility;

  constructor()
  constructor(options: IScheduleOptions)
  constructor(options?: IScheduleOptions) {
    this.field = options && options.field && new Facility(options.field) || new Facility();
    let fieldTimezoneOffset: number = HelpService.getTimezoneOffset(this.field.branch.timeZone);
    this.from = options && options.from && HelpService.convertDoubleTimeToString(options.from + fieldTimezoneOffset) || '';
    this.to = options && options.to && HelpService.convertDoubleTimeToString(options.to + fieldTimezoneOffset) || '';
  }
}
