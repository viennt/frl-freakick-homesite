import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../../../../models/Event';

@Component({
  moduleId: module.id,
  selector: 'app-schedule-button',
  template: `
      <div class="btn-group btn-block margin-bottom-10">
          <div class="button-event btn btn-block btn-circle dropdown-toggle"
               type="button" data-toggle="dropdown"
               [class.grey-steel]="!repeatType"
               [class.purple-plum]="repeatType">
              <i class="icon-calendar" [class.font-purple-plum]="!repeatType"></i>
              <span>Schedule</span>
              <i *ngIf="repeatType" class="icon-close pull-right"
                 (click)="onClickRemoveRepeat($event)"></i>
          </div>
          <ul class="dropdown-menu" role="menu">
              <li>
                  <a (click)="onClickDropDown(eventRepeatType.Daily)"> Daily </a>
              </li>
              <li>
                  <a (click)="onClickDropDown(eventRepeatType.Weekly)"> Weekly </a>
              </li>
              <li>
                  <a (click)="onClickDropDown(eventRepeatType.Monthly)"> Monthly </a>
              </li>
          </ul>
      </div>
  `,
  styles: [`
    i.icon-close{ margin: 3px auto }
  `]
})
export class ScheduleButtonComponent {

  repeatTypeValue: number;
  eventRepeatType = Event.repeatType;

  @Output() repeatTypeChange: EventEmitter<any> = new EventEmitter();

  @Input()
  get repeatType() {
    return this.repeatTypeValue;
  }

  set repeatType(val) {
    this.repeatTypeValue = val;
    this.repeatTypeChange.emit(this.repeatTypeValue);
  }

  onClickRemoveRepeat() {
    this.repeatType = Event.repeatType.NoRepeat;
  }

  onClickDropDown(repeatType: number) {
    this.repeatType = repeatType;
  }
}
