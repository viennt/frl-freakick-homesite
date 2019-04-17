import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../../../../models/Event';

@Component({
  moduleId: module.id,
  selector: 'app-reminder-button',
  template: `
      <div class="btn-group btn-block margin-bottom-10">
          <div class="button-event btn btn-block btn-circle dropdown-toggle"
               type="button" data-toggle="dropdown"
               [class.grey-steel]="!notificationBy"
               [class.yellow-saffron]="notificationBy">
              <i *ngIf="notificationBy !== 2" class="icon-bell"
                 [class.font-yellow-saffron]="!notificationBy"></i>
              <i *ngIf="notificationBy === 2" class="icon-envelope-open"
                 [class.font-yellow-saffron]="!notificationBy"></i>
              <span>Reminder</span>
              <i *ngIf="notificationBy" class="icon-close pull-right"
                 (click)="onClickRemoveNotification($event)"></i>
          </div>
          <ul class="dropdown-menu" role="menu">
              <li>
                  <a (click)="onClickDropDown(eventNotificationType.Message)"> Message </a>
              </li>
              <li>
                  <a (click)="onClickDropDown(eventNotificationType.Email)"> Email </a>
              </li> 
          </ul>
      </div>
  `,
  styles: [`
    i.icon-close{ margin: 3px auto }
  `]
})
export class ReminderButtonComponent {

  notificationByValue: number;
  eventNotificationType = Event.notificationType;

  @Output() notificationByChange: EventEmitter<any> = new EventEmitter();

  @Input()
  get notificationBy() {
    return this.notificationByValue;
  }

  set notificationBy(val) {
    this.notificationByValue = val;
    this.notificationByChange.emit(this.notificationByValue);
  }

  onClickRemoveNotification() {
    this.notificationBy = 0;
  }

  onClickDropDown(notificationType: number) {
    this.notificationBy = notificationType;
  }
}
