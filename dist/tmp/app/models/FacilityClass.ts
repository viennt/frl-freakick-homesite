import { TrainingClass, ITrainingClassOptions } from './TrainingClass';
import { ClassSchedule, IClassScheduleOptions } from './ClassSchedule';

export interface IFacilityClassOptions {
  trainingClass: ITrainingClassOptions;
  classSchedule: IClassScheduleOptions;
}

export class FacilityClass {
  public trainingClass: TrainingClass;
  public classSchedule: ClassSchedule;

  constructor(options?: IFacilityClassOptions) {
    this.trainingClass = options && options.trainingClass && new TrainingClass(options.trainingClass) || null;
    this.classSchedule = options && options.classSchedule && new ClassSchedule(options.classSchedule) || null;
  }
}
