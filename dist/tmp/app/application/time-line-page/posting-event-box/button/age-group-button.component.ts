import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-age-group-button',
  template: `
      <div class="button-event btn btn-block btn-circle margin-bottom-10"
           [class.grey-steel]="!hasGroups"
           [class.blue-madison]="hasGroups"
           (click)="onClickButton($event)">
          <i class="icon-users" [class.font-blue-madison]="!hasGroups"></i>
          <span>Age groups</span>
      </div>
  `
})
export class AgeGroupButtonComponent {

  hasGroupsValue: boolean;

  @Output() hasGroupsChange: EventEmitter<any> = new EventEmitter();

  @Input()
  get hasGroups() {
    return this.hasGroupsValue;
  }

  set hasGroups(val) {
    this.hasGroupsValue = val;
    this.hasGroupsChange.emit(this.hasGroupsValue);
  }

  onClickButton() {
    this.hasGroups = !this.hasGroups;
  }
}
