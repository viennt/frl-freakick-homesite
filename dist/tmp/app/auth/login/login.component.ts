import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Import services */
import { AuthenticationService } from '../../services/authentication.service';
import { MessageService } from '../../services/message.service';
import { LocationService } from '../../services/location.service';
import { NotificationsService } from '../../plugins/notifi/notifications.service';

/** Import models */
import { Message } from '../../models/Message';

import { Md5 } from 'ts-md5/dist/md5';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: [
    '../components.min.css',
    'login.component.css'
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  public userName: string;
  public password: string;
  public latitude: number;
  public longitude: number;

  public continueUrl: string;
  public isLoading: boolean;

  private routeSub: any;

  constructor(private authService: AuthenticationService,
              private notifyService: NotificationsService,
              private messageService: MessageService,
              private locationService: LocationService,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.userName = '';
    this.password = '';

    this.routeSub = this.route.params.subscribe(
      params => this.continueUrl = params['link']
    );

    this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );

    this.locationService.getCurrentPosition((position: any) => {
      if (position) {
        this.latitude = position.location.lat;
        this.longitude = position.location.lng;
      }
    });
  }

  ngOnDestroy() {
     this.routeSub.unsubscribe();
  }

  login() {
    if (this.isLoading) return;
    if (!this.userName) {
      this.notifyService.error('Error', 'Please enter your username or email.');
      return;
    } else if (!this.userName.trim()) {
      this.notifyService.error('Error', 'Username or email could not start or end with spaces.');
      return;
    } else if (!this.password) {
      this.notifyService.error('Error', 'Please enter your password.');
      return;
    }
    if (typeof this.longitude === 'undefined' || this.longitude === null) {
      this.longitude = -71.127197;
    }
    if (typeof this.latitude === 'undefined' || this.latitude === null) {
      this.latitude = 42.3134791;
    }
    let password = String(Md5.hashStr(this.password)).trim();
    this.isLoading = true;
    this.messageService.sendMessage(new Message(
      'USER_LOGIN',
      new LoginData(this.userName, password, this.latitude, this.longitude)
    ));
  }

  handleMessage(message: any) {
    this.isLoading = false;
    switch (message.messageType) {
      case 'LOGIN_SUCCESSFUL':
        if (this.continueUrl !== null) {
          this.authService.login(message.data, this.continueUrl);
        } else {
          this.authService.login(message.data);
        }
        this.isLoading = false;
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

export class LoginData {
  constructor(public username: string,
              public password: string,
              public latitude: number,
              public longitude: number) {
  }
}
