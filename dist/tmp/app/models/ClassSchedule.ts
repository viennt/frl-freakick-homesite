import { Schedule, IScheduleOptions } from './Schedule';

export interface IClassScheduleOptions {
  scheduleId: number;
  monday: IScheduleOptions;
  tuesday: IScheduleOptions;
  wednesday: IScheduleOptions;
  thursday: IScheduleOptions;
  friday: IScheduleOptions;
  saturday: IScheduleOptions;
  sunday: IScheduleOptions;
}

export class ClassSchedule {
  public scheduleId: number;
  public monday: Schedule;
  public tuesday: Schedule;
  public wednesday: Schedule;
  public thursday: Schedule;
  public friday: Schedule;
  public saturday: Schedule;
  public sunday: Schedule;

  constructor()
  constructor(options: IClassScheduleOptions)
  constructor(options?: IClassScheduleOptions) {
    this.scheduleId = options && options.scheduleId || -1;
    this.monday = options && options.monday && new Schedule(options.monday) || null;
    this.tuesday = options && options.tuesday && new Schedule(options.tuesday) || null;
    this.wednesday = options && options.wednesday && new Schedule(options.wednesday) || null;
    this.thursday = options && options.thursday && new Schedule(options.thursday) || null;
    this.friday = options && options.friday && new Schedule(options.friday) || null;
    this.saturday = options && options.saturday && new Schedule(options.saturday) || null;
    this.sunday = options && options.sunday && new Schedule(options.sunday) || null;
  }
}

