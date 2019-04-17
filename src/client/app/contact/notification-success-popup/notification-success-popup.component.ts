import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  moduleId: module.id,
  selector: 'frk-notification-success-popup',
  templateUrl: 'notification-success-popup.component.html',
  styleUrls: [`notification-success-popup.component.css`]
})
export class NotificationSuccessPopupComponent {
  @Output() success: EventEmitter<any> = new EventEmitter();
  @ViewChild('modal') modal: ModalComponent;

  constructor() {
    //
  }

  close() {
    this.modal.close();
  }

  open() {
    this.modal.open();
  }

  onCloseModal() {
    this.success.emit();
  }
}
