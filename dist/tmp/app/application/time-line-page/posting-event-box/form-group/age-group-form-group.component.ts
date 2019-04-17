import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Group } from '../../../../models/Group';

@Component({
  moduleId: module.id,
  selector: 'app-age-group-form-group',
  template: `
      <label class="font-grey-cascade font-sm"
             for="event-repeat-frequency">Age groups</label>
      <ng-select [multiple]="true"
                 [items]="items"
                 [disabled]="false"
                 (selected)="selected($event)"
                 (removed)="removed($event)"
                 placeholder="No group selected">
      </ng-select>
  `,
  styles: [`
      :host /deep/ div.ui-select-multiple {
          border: 2px solid #e1e5ec!important;
          padding: 3px 5px 0 5px;
      }
  `]
})
export class AgeGroupFormGroupComponent implements OnInit {
  /**
   * age groups get from server
   * @type {Array}
   */
  public eventGroupsValue: number[];

  /**
   * ng2-select input items
   * @type {Array}
   */
  public items: any[] = [];

  @Output() eventGroupsChange: EventEmitter<any> = new EventEmitter();

  @Input() availableGroups: Group[];

  @Input()
  get eventGroups() {
    return this.eventGroupsValue;
  }

  set eventGroups(val) {
    this.eventGroupsValue = val;
    this.eventGroupsChange.emit(this.eventGroupsValue);
  }

  ngOnInit() {
    this.items = this.availableGroups.map(
      (group: Group) => new Object({id: group.groupId, text: group.groupName})
    );
  }

  public selected(value: any): void {
    let index = this.eventGroups.indexOf(value.id);
    if (index < 0) this.eventGroups.push(value.id);
    this.eventGroupsChange.emit(this.eventGroupsValue);
  }

  public removed(value: any): void {
    let index = this.eventGroups.indexOf(value.id);
    if (index >= 0) this.eventGroups.splice(index, 1);
    this.eventGroupsChange.emit(this.eventGroupsValue);
  }
}
