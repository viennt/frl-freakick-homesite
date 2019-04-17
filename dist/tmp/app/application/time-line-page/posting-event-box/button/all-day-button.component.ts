import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-all-day-button',
  template: `
      <div class="button-event btn btn-block btn-circle margin-bottom-10"
           [class.grey-steel]="!isAllDay"
           [class.blue-dark]="isAllDay"
           (click)="onClickButton($event)">
          <i class="icon-clock" [class.font-blue-dark]="!isAllDay"></i>
          <span>All day</span>
      </div>
  `
})
export class AllDayButtonComponent {

  isAllDayValue: boolean;

  @Output() isAllDayChange: EventEmitter<any> = new EventEmitter();

  @Input()
  get isAllDay() {
    return this.isAllDayValue;
  }

  set isAllDay(val) {
    this.isAllDayValue = val;
    this.isAllDayChange.emit(this.isAllDayValue);
  }

  onClickButton() {
    this.isAllDay = !this.isAllDayValue;
  }
}
