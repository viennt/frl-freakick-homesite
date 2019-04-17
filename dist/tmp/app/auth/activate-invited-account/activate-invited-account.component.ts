import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

/** Import services */
import { MessageService } from '../../services/message.service';
import { LocationService } from '../../services/location.service';

/** Import models */
import { User } from '../../models/User';
import { Message } from '../../models/Message';

/** Import others */
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  moduleId: module.id,
  selector: 'frk-activate-invited-account',
  template: `
      <frk-activate-form [isLoading]="isLoading"
                         (submit)="onSubmitToActivateAccount($event)">
      </frk-activate-form>
  `
})
export class ActivateInvitedAccountComponent implements OnInit {
  public user: User;

  public latitude: number;
  public longitude: number;
  public activeToken: string;

  public isLoading: boolean;
  public errorMsg: string;
  public successMsg: string;

  private routeSub: Subscription;

  constructor(private messageService: MessageService,
              private locationService: LocationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => this.handleRoute(params));
    this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.locationService.getCurrentPosition((position: any) => {
      if (position) {
        this.latitude = position.location.lat;
        this.longitude = position.location.lng;
      }
    });
  }

  handleRoute(params: any) {
    this.activeToken = params['id'];
    this.messageService.sendMessage(new Message(
      'GET_USER_INVITED_BY_EMAIL', {activeToken: this.activeToken}
    ));
  }

  handleMessage(message: any) {
    this.isLoading = false;
    switch (message.messageType) {
      case 'GET_USER_INVITED_BY_EMAIL_SUCCESS':
        this.user = new User(message.data.user);
        break;
      case 'REGISTER_USER_FROM_INVITATION_EMAIL_SUCCESS':
        this.successMsg = 'Activated successfully.';
        setTimeout(() => {
          this.router.navigateByUrl('/download');
        }, 1000);
        break;
      case 'REQUEST_ERROR':
        this.errorMsg = message.data.message;
        break;
    }
  }

  onSubmitToActivateAccount(value: any) {
    this.errorMsg = '';
    this.successMsg = '';
    this.sendMessageToActiveInvitedAccount(value);
  }

  sendMessageToActiveInvitedAccount(value: any) {
    this.messageService.sendMessage(new Message(
      'REGISTER_USER_FROM_INVITATION_EMAIL', {
        username: String(value.username).trim(),
        password: String(Md5.hashStr(value.password)).trim(),
        fullName: String(value.fullName).trim(),
        cityId: Number(value.cityId),
        countryId: Number(value.countryId),
        latitude: Number(this.latitude),
        longitude: Number(this.longitude),
        activeToken: this.activeToken
      }
    ));
  }
}
