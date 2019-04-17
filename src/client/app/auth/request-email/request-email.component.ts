import { Component, OnInit, OnDestroy } from '@angular/core';

/** Import services */
import { NotificationsService } from '../../plugins/notifi/notifications.service';
import { AuthenticationService } from '../../services/authentication.service';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/Message';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-request-email',
  templateUrl: 'request-email.component.html',
  styleUrls: ['request-email.component.css'],
})
export class RequestEmailComponent implements OnInit, OnDestroy {
  public userEmail: string;
  public isSentEmail: boolean;
  public isLoading: boolean;

  constructor(private authService: AuthenticationService,
              private notifyService: NotificationsService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.isSentEmail = false;

    this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
  }

  ngOnDestroy() {
    delete this.userEmail;
  }

  login() {
    if (this.isLoading) return;
    if (!this.userEmail) {
      this.notifyService.error('Error', 'Please enter your email.');
      return;
    }
    this.messageService.sendMessage(new Message(
      'SEND_FORGOT_PASSWORD_REQUEST',
      new SendEmailData(this.userEmail)
    ));
  }

  handleMessage(message: any) {
    this.isLoading = false;
    switch (message.messageType) {
      case 'SEND_FORGOT_PASSWORD_REQUEST_SUCCESS':
        this.isLoading = false;
        this.isSentEmail = true;
        break;
      case 'REQUEST_ERROR':
        this.notifyService.error('Error', message.data.message);
        this.isLoading = false;
        break;
      case 'REQUEST_INPUT_ERROR':
        this.notifyService.error('Error', message.data);
        this.isLoading = false;
        break;
    }
  }

  onClickToBackForm() {
    this.isSentEmail = false;
  }
}

export class SendEmailData {
  constructor(public email: string) {
  }
}
