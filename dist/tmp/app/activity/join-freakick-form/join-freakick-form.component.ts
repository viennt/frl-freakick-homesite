import { Component, ViewChild } from '@angular/core';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  moduleId: module.id,
  selector: 'frk-join-freakick-form',
  templateUrl: 'join-freakick-form.component.html',
  styleUrls: ['join-freakick-form.component.css']
})
export class JoinFreakickFormComponent {
  @ViewChild('modal') modal: ModalComponent;

  public activeToken: string;
  public verifyCode: string;

  close() {
    this.modal.close();
  }

  open(data: {verifyCode: string, activeToken: string}) {
    this.activeToken = data.activeToken;
    this.verifyCode = data.verifyCode;
    this.modal.open();
  }

  onCloseModal() {
    delete this.activeToken;
    delete this.verifyCode;
  }
}
