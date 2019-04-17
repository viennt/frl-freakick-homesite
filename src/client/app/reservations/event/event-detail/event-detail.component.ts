import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterestedUser }  from './interested-user/interested-user.component';
import { CreditCardValidator } from 'ng2-cc-library/dist/index';

/**
 * services
 */
import { MessageService } from '../../../services/message.service';
import { AuthenticationService } from '../../../services/authentication.service';

/**
 * packages
 */
import { GetEventInfo } from '../../../packages/GetEventInfo';
import { UserRegisterEvent } from '../../../packages/UserRegisterEvent';
import { LikeOrUnlikeAnEvent } from '../../../packages/UpdateInterested';
import { MakePaymentPaypal } from '../../../packages/payment/MakePaymentPaypal';
import { ExecutePaymentPaypal } from '../../../packages/payment/ExecutePaymentPaypal';
import { ExecutePaymentCreditCard } from '../../../packages/payment/ExecutePaymentCreditCard';

/**
 * modules
 */
import { Event } from '../../../models/Event';
import { User } from '../../../models/User';

@Component({
  moduleId: module.id,
  selector: 'ev-event-detail',
  templateUrl: 'event-detail.component.html',
  styleUrls: ['event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {
  public routeSub: any;
  public messageSub: any;

  public eventIdParam: number;
  public event: Event;
  public ticket: any;
  public isNotFoundEvent: boolean;
  public isInterested: boolean;
  public isShownRegisterForm: boolean;
  public isShownCreditCardForm: boolean;
  public isRegisteringEvent: boolean;
  public registerQuantity: number;
  public verifyCode: string;
  public errorMessage: string;
  public errorLink: string;
  public paymentId: string;
  public isPaymentExecuteSuccess: boolean;

  @ViewChild(InterestedUser)
  private interestedUserComponent: InterestedUser;
  private currentUser: User;
  private form: FormGroup;

  constructor(private _fb: FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getAuthenticatedUser();
    this.form = this._fb.group({
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]]
    });
    this.isShownRegisterForm = false;
    this.isShownCreditCardForm = false;
    this.routeSub = this.route.params.subscribe(params => this.handleRoute(params));
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.messageSub.unsubscribe();
  }

  handleRoute(params: any): any {
    this.eventIdParam = +params['id'];
    this.sendMessageToGetEventInfo();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'GET_EVENT_DETAIL_SUCCESS':
        this.event = new Event(message.data.event);
        this.isNotFoundEvent = false;
        this.isInterested = message.data.isInterested;
        break;
      case 'LIKE_EVENT_SUCCESS':
        this.isInterested = true;
        // this.interestedUserComponent.sendMessageToGetUserInterestedInEvent();
        break;
      case 'UNLIKE_EVENT_SUCCESS':
        this.isInterested = false;
        // this.interestedUserComponent.sendMessageToGetUserInterestedInEvent();
        break;
      case 'USER_REGISTER_EVENT_SUCCESS':
        this.registerQuantity = undefined;
        this.verifyCode = message.data.ticket.verifyCode;
        if (this.event.ticketPrice > 0) {
          this.ticket = message.data.ticket;
          this.makePayment(this.ticket);
        } else {
          this.isShownRegisterForm = false;
          this.isRegisteringEvent = false;
          this.isPaymentExecuteSuccess = true;
        }
        break;
      case 'MAKE_PAYMENT_PAYPAL_SUCCESS':
        let payment = JSON.parse(message.data.responsePayment);
        let error = JSON.parse(message.data.error);
        this.isRegisteringEvent = false;
        this.isShownRegisterForm = false;
        if (!!payment) this.paymentId = payment.id;
        if (!!error) console.error(error.message);
        break;
      case 'MAKE_PAYMENT_PAYPAL_CREDIT_CARD_SUCCESS':
        this.isShownCreditCardForm = false;
        this.paymentId = undefined;
        if (message.data.error === null) {
          this.isPaymentExecuteSuccess = true;
        } else {
          let jsonObject = JSON.parse(message.data.error);
          this.errorMessage = jsonObject.message;
          this.errorLink = jsonObject.information_link;
        }
        break;
      case 'EXECUTE_PAYMENT_PAYPAL_SUCCESS':
        this.paymentId = undefined;
        this.isPaymentExecuteSuccess = true;
        break;
      case 'REQUEST_ERROR':
        if ('EVENT_NOT_EXIST' === message.data.errorType) {
          this.isNotFoundEvent = true;
        }
        this.errorMessage = message.data.message;
        this.isShownCreditCardForm = false;
        this.paymentId = undefined;
        this.isRegisteringEvent = false;
        this.isShownRegisterForm = false;
        break;
    }
  }

  sendMessageToGetEventInfo(): void {
    if (typeof this.eventIdParam === 'undefined') return;
    let apiPackage = new GetEventInfo().setEventId(this.eventIdParam);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  showRegisterForm() {
    this.isShownRegisterForm = true;
  }

  showCreditCardForm() {
    this.isShownCreditCardForm = true;
  }

  registerEvent() {
    this.isRegisteringEvent = true;
    let apiPackage = new UserRegisterEvent()
      .setEventId(this.event.id)
      .setQuantity(this.registerQuantity);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  updateInterested(event: any) {
    let apiPackage = new LikeOrUnlikeAnEvent().setEventId(event.id);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  makePayment(ticket: any) {
    let apiPackage = new MakePaymentPaypal().addProducts(ticket.id, 'EVENT');
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  executePayment(data: any) {
    let apiPackage = new ExecutePaymentPaypal()
      .setPaymentId(data.paymentID)
      .setPayerID(data.payerID);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  payWithCreditCard(event: any) {
    let apiPackage = new ExecutePaymentCreditCard()
      .addProducts(this.ticket.id, 'EVENT')
      .setBillingAddress(this.currentUser)
      .setCreditCard(this.currentUser);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  updateImage(image: string) {
    image = './assets/images/default/event.png';
  }

  getCreditCardType() {
    let cardType = 'credit_cards';
    let ccnumber = String(this.currentUser.cardNumber).toString().replace(/\s+/g, '');

    if(/^(34)|^(37)/.test(ccnumber)) {
      cardType = 'amex';
    }
    if(/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(ccnumber)) {
      cardType = 'discover';
    }
    if(/^35(2[89]|[3-8][0-9])/.test(ccnumber)) {
      cardType = 'jcb';
    }
    if(/^5[1-5]/.test(ccnumber)) {
      cardType = 'mastercard';
    }
    if (/^4/.test(ccnumber)) {
      cardType = 'visa';
    }
    this.currentUser.cardType = cardType;
    return '/assets/images/' + cardType + '.png';
  };
}
