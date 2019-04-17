import { Component, Input, OnChanges } from '@angular/core';

/**
 * Import models
 */
import { ClassSchedule } from '../../../models/ClassSchedule';

@Component({
  moduleId: module.id,
  selector: 'sd-class-schedule',
  templateUrl: 'class-schedule.component.html',
  styleUrls: ['class-schedule.component.css']
})
export class ClassScheduleComponent implements OnChanges {

  @Input() classSchedule: ClassSchedule;

  ngOnChanges(changes: any): any {
    for (let propName in changes) {
      if ('classSchedule' === propName) {
        // TODO
      }
    }
  }
}
