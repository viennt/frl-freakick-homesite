import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MessageService } from '../../services/message.service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Message } from '../../models/Message';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'frk-contact-form',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  @ViewChild('modal') modal: ModalComponent;

  public isLoading: boolean;

  public contactName: string;
  public contactEmail: string;
  public contactMessage: string;

  private messageSub: Subscription;

  constructor(private messageService: MessageService) {
    //
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'SEND_CONTACT_EMAIL_SUCCESS':
        this.modal.close();
        break;
    }
  }

  sendMessageToSubmitContactInfo(): void {
    if (!this.contactName || !this.contactEmail || !this.contactMessage) return;
    this.isLoading = true;
    this.messageService.sendMessage(new Message(
      'SEND_CONTACT_EMAIL',
      {name: this.contactName, email: this.contactEmail, content: this.contactMessage}
    ));
  }

  close() {
    this.modal.close();
  }

  open() {
    this.modal.open();
  }

  onCloseModal() {
    this.isLoading = undefined;
    this.contactName = undefined;
    this.contactEmail = undefined;
    this.contactMessage = undefined;
  }
}
