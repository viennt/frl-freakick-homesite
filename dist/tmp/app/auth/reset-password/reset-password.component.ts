import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** Import services */
import { NotificationsService } from '../../plugins/notifi/notifications.service';

/** Import models */
import { Md5 } from 'ts-md5/dist/md5';
import { AuthenticationService } from '../../services/authentication.service';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/Message';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-reset-password',
  templateUrl: 'reset-password.component.html',
  styleUrls: ['reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  public repeatPassword: string;
  public password: string;
  public resetToken: string;
  public isUpdatedPassword: boolean;

  public continueUrl: string;
  public isLoading: boolean;

  private routeSub: any;

  constructor(private authService: AuthenticationService,
              private notifyService: NotificationsService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.isUpdatedPassword = false;
    this.repeatPassword = '';
    this.password = '';

    this.routeSub = this.route.params.subscribe(
      params => this.resetToken = params['link']
    );

    this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  reset() {
    if (this.isLoading) return;
    if (!this.password) {
      this.notifyService.error('Error', 'Please enter your new password.');
      return;
    }else if (!this.repeatPassword) {
      this.notifyService.error('Error', 'Please enter your new password twice.');
      return;
    }else if (this.repeatPassword !== this.password) {
      this.notifyService.error('Error', 'You must enter the same password twice in order to confirm it.');
      return;
    }
    let password = Md5.hashStr(this.repeatPassword) + '';
    this.messageService.sendMessage(new Message(
      'RESET_PASSWORD',
      new ResetPasswordData(this.resetToken, password, null)
    ));
  }

  handleMessage(message: any) {
    this.isLoading = false;
    switch (message.messageType) {
      case 'RESET_PASSWORD_SUCCESS':
        this.isLoading = false;
        this.isUpdatedPassword = true;
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
}

export class ResetPasswordData {
  constructor(public resetToken: string,
              public newPassword: string,
              public fcmToken: number) {
  }
}
