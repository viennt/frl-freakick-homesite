import { Component, OnInit, OnDestroy, Renderer } from '@angular/core';

import { MessageService } from '../../services/message.service';

import { Message } from '../../models/Message';
import { NotificationsService } from '../../plugins/notifi/notifications.service';

import { CONFIG } from '../../constants';

import { Md5 } from 'ts-md5/dist/md5';

@Component({
  moduleId: module.id,
  selector: 'frk-request-account',
  templateUrl: 'request-account.component.html',
  styleUrls: [
    '../components.min.css',
    'request-account.component.css'
  ]
})
export class RequestAccountComponent implements OnInit, OnDestroy {
  public externalUrl = CONFIG;
  public userEmail: string;
  public username: string;
  public password: string;
  public fullName: string;
  public isSuccess: boolean;
  public isLoading: boolean;

  private messageSub: any;

  constructor(private messageService: MessageService,
              private notify: NotificationsService,
              private renderer: Renderer) { }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
    delete this.userEmail;
    delete this.isSuccess;
    delete this.isLoading;
    delete this.messageSub;
  }

  handleMessage(message: any) {
    this.isLoading = false;
    switch (message.messageType) {
      case 'USER_REGISTER_EMAIL_SUCCESS':
        this.isSuccess = true;
        break;
      case 'REQUEST_ERROR':
        this.notify.error('Error', message.data.message || '');
        break;
    }
  }

  submitForm() {
    this.isLoading = true;
    this.isSuccess = false;
    let apiPackage = {
      email: this.userEmail,
      username: this.username,
      password: String(Md5.hashStr(this.password)).trim(),
      fullName: this.fullName
    };
    this.messageService.sendMessage(new Message(
      'USER_REGISTER_EMAIL',apiPackage
    ));
  }

  onCLickBackToHome() {
    delete this.userEmail;
    delete this.username;
    delete this.password;
    delete this.fullName;
    this.isSuccess = false;
  }

  onClickShowVideo() {
    this.renderer.setElementClass(document.documentElement, 'modal-open', true);
  }

  onClickCloseVideo() {
    this.renderer.setElementClass(document.documentElement, 'modal-open', false);
  }
}
