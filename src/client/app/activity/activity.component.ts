import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Message } from '../models/Message';
import { Event as Activity } from '../models/Event';
import { MessageService } from '../services/message.service';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { JoinFreakickFormComponent } from './join-freakick-form/join-freakick-form.component';
import { ExecutePaymentPaypal } from '../packages/payment/ExecutePaymentPaypal';

@Component({
  moduleId: module.id,
  selector: 'frk-activity',
  templateUrl: 'activity.component.html',
  styleUrls: ['activity.component.css']
})
export class ActivityComponent implements OnInit, OnDestroy {

  @ViewChild('registrationForm') registrationFormEl: RegistrationFormComponent;
  @ViewChild('joinFreakickForm') joinFreakickFormEl: JoinFreakickFormComponent;

  public eventId: number;
  public invitationToken: string;
  public activity: Activity;
  public ticketDetail: any;
  public ticketStatus: number;
  public ticketStatusName: string;
  public email: string;
  public paymentId: number;
  public eventPricePackages: any[];

  private routeSubParams: Subscription;
  private routeSubQueryParams: Subscription;
  private messageSub: Subscription;

  constructor(private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.routeSubParams = this.route.params.subscribe(
      params => this.handleRouteParams(params)
    );
    this.routeSubQueryParams = this.route.queryParams.subscribe(
      params => this.handleRouteQueryParams(params)
    );
    this.messageSub = this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
  }

  ngOnDestroy() {
    this.routeSubParams.unsubscribe();
    this.routeSubQueryParams.unsubscribe();
    this.messageSub.unsubscribe();
  }

  handleRouteParams(params: any) {
    this.eventId = Number(params['id']);
    if (!this.eventId || typeof this.eventId !== 'number') {
      this.router.navigate(['/', 'home']);
    } else {
      this.sendMessageToGetSharedEvent();
    }
  }

  handleRouteQueryParams(params: any) {
    this.invitationToken = String(params['invitationToken']);
    if (!this.invitationToken || typeof this.invitationToken !== 'string') {
      //
    } else {
      this.sendMessageToGetEventTicket();
    }
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'GET_SHARED_EVENT_SUCCESS':
        this.activity = new Activity(message.data.event);
        break;
      case 'GET_EVENT_TICKET_BY_INVITATION_TOKEN_SUCCESS':
        this.ticketDetail = message.data.ticket;
        this.ticketStatus = message.data.ticket.status;
        this.ticketStatusName = message.data.ticket.statusName;
        this.email = message.data.ticket.email;
        this.eventPricePackages = message.data.eventPricePackages;
        if (this.ticketStatus === 8) {
          this.makePayment(message.data.ticket);
        }
        break;
      case 'UPDATE_INVITATION_VIA_INVITATION_TOKEN_SUCCESS':
        this.ticketStatus = message.data.ticket.status;
        this.ticketStatusName = message.data.ticket.statusName;
        if (this.ticketStatus === 8) {
          this.makePayment(message.data.ticket);
        }
        break;
      case 'MAKE_PAYMENT_PAYPAL_SUCCESS':
        let payment = JSON.parse(message.data.responsePayment);
        let error = JSON.parse(message.data.error);
        if (!!payment) this.paymentId = payment.id;
        if (!!error) console.error(error.message);
        break;
      case 'EXECUTE_PAYMENT_PAYPAL_SUCCESS':
        this.paymentId = undefined;
        this.ticketStatus = 1;
        this.ticketStatusName = 'Joined';
        break;
      case 'REQUEST_ERROR':
        if (message.data.errorType === 'GET_EVENT_TICKET_BY_INVITATION_TOKEN_INVITATION_NOT_EXIST') {
          this.ticketStatus = undefined;
          this.ticketStatusName = undefined;
        } else {
          this.router.navigate(['/', 'home']);
        }
    }
  }

  onClickRejectInvitation() {
    this.sendMessageToRejectInvitation();
  }

  sendMessageToGetSharedEvent(): void {
    this.messageService.sendMessage(
      new Message('GET_SHARED_EVENT', {eventId: Number(this.eventId)})
    );
  }

  sendMessageToGetEventTicket(): void {
    this.messageService.sendMessage(
      new Message('GET_EVENT_TICKET_BY_INVITATION_TOKEN',
        {eventId: Number(this.eventId), invitationToken: String(this.invitationToken)}
      )
    );
  }

  sendMessageToRejectInvitation(): void {
    this.messageService.sendMessage(
      new Message('UPDATE_INVITATION_VIA_INVITATION_TOKEN',
        {
          address: '.', phoneNumber: '.', organization: '.', fullName: '.',
          email: this.email, invitationToken: this.invitationToken, isAccept: false,
        }
      )
    );
  }

  makePayment(ticket: any) {
    this.messageService.sendMessage(
      new Message('MAKE_PAYMENT_PAYPAL',
        {
          accessToken: null,
          lstProduct: [{productId: ticket.id, productType: 'EVENT', quantity: ticket.quantity}],
          invitationToken: this.invitationToken,
          saleOffCode: ''
        }
      )
    );
  }

  executePayment(data: any) {
    this.messageService.sendMessage(
      new Message('EXECUTE_PAYMENT_PAYPAL',
        {
          accessToken: null,
          paymentId: data.paymentID,
          payerID: data.payerID,
          invitationToken: this.invitationToken,
        }
      )
    );
  }

  onErrorBg() {
    this.activity.images[0] = 'assets/images/events-page/discover.jpg';
  }

  registerSuccess(data: {verifyCode: string, activeToken: string}) {
    this.joinFreakickFormEl.open(data);
  }
}
