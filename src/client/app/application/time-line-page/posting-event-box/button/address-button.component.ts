import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-address-button',
  template: `
      <div class="button-event btn btn-block btn-circle margin-bottom-10"
           [class.grey-steel]="!hasAddress"
           [class.red-sunglo]="hasAddress"
           (click)="onClickButton()">
          <i class="icon-pointer" [class.font-red-sunglo]="!hasAddress"></i>
          <span>Location</span>
      </div>
  `
})
export class AddressButtonComponent {

  hasAddressValue: boolean;

  @Output() hasAddressChange: EventEmitter<any> = new EventEmitter();

  @Input()
  get hasAddress() {
    return this.hasAddressValue;
  }

  set hasAddress(val) {
    this.hasAddressValue = val;
    this.hasAddressChange.emit(this.hasAddressValue);
  }

  onClickButton() {
    this.hasAddress = !this.hasAddress;
  }
}
