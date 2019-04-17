import { Group, IGroupOptions } from './Group';
import { Sport, ISportOptions } from './Sport';
import { Court, ICourtOptions } from './Court';

import { HelpService } from '../services/help.service';

export interface ITrainingClassOptions {
  classId: number;
  className: string;
  classCode: string;
  from: any;
  to: any;
  duration: number;
  group: IGroupOptions;
  branch: ICourtOptions;
  category: ISportOptions;
  dayPrice: number;
  wholeClassPrice: number;
}

export class TrainingClass {
  public classId: number;
  public className: string;
  public classCode: string;
  public from: any;
  public to: any;
  public duration: number;
  public group: Group;
  public branch: Court;
  public category: Sport;
  public dayPrice: number;
  public wholeClassPrice: number;

  constructor()
  constructor(options: ITrainingClassOptions)
  constructor(options?: ITrainingClassOptions) {
    this.classId = options && options.classId || -1;
    this.className = options && options.className || 'Unknown class';
    this.classCode = options && options.classCode || 'Unknown code';
    this.duration = options && options.duration || 0;
    this.group = options && options.group && new Group(options.group) || new Group();
    this.branch = options && options.branch && new Court(options.branch) || new Court();
    this.category = options && options.category && new Sport(options.category) || new Sport();
    this.dayPrice = options && options.dayPrice || 0;
    this.wholeClassPrice = options && options.wholeClassPrice || 0;
    this.from = options && HelpService.convertUTCToLocalTime(options.from, this.branch.timeZone, 'YYYY-MM-DD') || '';
    this.to = options && HelpService.convertUTCToLocalTime(options.to, this.branch.timeZone, 'YYYY-MM-DD') || '';
  }
}
