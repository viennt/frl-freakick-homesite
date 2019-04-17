import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

/** Import services */
import { MessageService } from '../../services/message.service';
import { LocationService } from '../../services/location.service';
import { NotificationsService } from '../../plugins/notifi/notifications.service';

/** Import models */
import { User } from '../../models/User';
import { Message } from '../../models/Message';

/** Import others */
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  moduleId: module.id,
  selector: 'frk-activate-registered-account',
  template: `
      <frk-activate-form [isLoading]="isLoading"
                         (submit)="onSubmitToActivateAccount($event)">
      </frk-activate-form>
  `
})
export class ActivateRegisteredAccountComponent implements OnInit {
  public user: User;

  public latitude: number;
  public longitude: number;
  public registerToken: string;
  public registerEmail: string;

  public isLoading: boolean;
  public errorMsg: string;
  public successMsg: string;

  private routeSub: Subscription;

  constructor(private messageService: MessageService,
              private locationService: LocationService,
              private notify: NotificationsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.routeSub = this.route.queryParams.subscribe(params => this.handleRoute(params));
    this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.locationService.getCurrentPosition((position: any) => {
      if (position) {
        this.latitude = position.location.lat;
        this.longitude = position.location.lng;
      }
    });
  }

  handleRoute(params: any) {
    this.registerEmail = params['email'];
    this.registerToken = params['token'];
  }

  handleMessage(message: any) {
    this.isLoading = false;
    switch (message.messageType) {
      case 'REGISTER_SUCCESSFUL':
        this.notify.success('Success', 'Registered successfully!');
        setTimeout(() => {
          this.router.navigateByUrl('/download');
        }, 1000);
        break;
      case 'REQUEST_ERROR':
        this.notify.error('Error', message.data.message);
        this.errorMsg = message.data.message;
        break;
    }
  }

  onSubmitToActivateAccount(value: any) {
    this.errorMsg = '';
    this.successMsg = '';
    this.sendMessageToActiveRegisteredAccount(value);
  }

  sendMessageToActiveRegisteredAccount(value: any) {
    this.messageService.sendMessage(new Message(
      'REGISTER_USER', {
        username: String(value.username).trim(),
        password: String(Md5.hashStr(value.password)).trim(),
        email: String(this.registerEmail),
        fullName: String(value.fullName).trim(),
        cityId: Number(value.cityId),
        countryId: Number(value.countryId),
        latitude: Number(this.latitude),
        longitude: Number(this.longitude),
        registerToken: this.registerToken
      }
    ));
  }
}
