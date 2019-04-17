"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var interested_user_component_1 = require('./interested-user/interested-user.component');
var index_1 = require('ng2-cc-library/dist/index');
var message_service_1 = require('../../../services/message.service');
var authentication_service_1 = require('../../../services/authentication.service');
var GetEventInfo_1 = require('../../../packages/GetEventInfo');
var UserRegisterEvent_1 = require('../../../packages/UserRegisterEvent');
var UpdateInterested_1 = require('../../../packages/UpdateInterested');
var MakePaymentPaypal_1 = require('../../../packages/payment/MakePaymentPaypal');
var ExecutePaymentPaypal_1 = require('../../../packages/payment/ExecutePaymentPaypal');
var ExecutePaymentCreditCard_1 = require('../../../packages/payment/ExecutePaymentCreditCard');
var Event_1 = require('../../../models/Event');
var EventDetailComponent = (function () {
    function EventDetailComponent(_fb, route, authService, messageService) {
        this._fb = _fb;
        this.route = route;
        this.authService = authService;
        this.messageService = messageService;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getAuthenticatedUser();
        this.form = this._fb.group({
            creditCard: ['', [index_1.CreditCardValidator.validateCCNumber]],
            expirationDate: ['', [index_1.CreditCardValidator.validateExpDate]],
            cvc: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(4)]]
        });
        this.isShownRegisterForm = false;
        this.isShownCreditCardForm = false;
        this.routeSub = this.route.params.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    EventDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.messageSub.unsubscribe();
    };
    EventDetailComponent.prototype.handleRoute = function (params) {
        this.eventIdParam = +params['id'];
        this.sendMessageToGetEventInfo();
    };
    EventDetailComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_EVENT_DETAIL_SUCCESS':
                this.event = new Event_1.Event(message.data.event);
                this.isNotFoundEvent = false;
                this.isInterested = message.data.isInterested;
                break;
            case 'LIKE_EVENT_SUCCESS':
                this.isInterested = true;
                break;
            case 'UNLIKE_EVENT_SUCCESS':
                this.isInterested = false;
                break;
            case 'USER_REGISTER_EVENT_SUCCESS':
                this.registerQuantity = undefined;
                this.verifyCode = message.data.ticket.verifyCode;
                if (this.event.ticketPrice > 0) {
                    this.ticket = message.data.ticket;
                    this.makePayment(this.ticket);
                }
                else {
                    this.isShownRegisterForm = false;
                    this.isRegisteringEvent = false;
                    this.isPaymentExecuteSuccess = true;
                }
                break;
            case 'MAKE_PAYMENT_PAYPAL_SUCCESS':
                var payment = JSON.parse(message.data.responsePayment);
                var error = JSON.parse(message.data.error);
                this.isRegisteringEvent = false;
                this.isShownRegisterForm = false;
                if (!!payment)
                    this.paymentId = payment.id;
                if (!!error)
                    console.error(error.message);
                break;
            case 'MAKE_PAYMENT_PAYPAL_CREDIT_CARD_SUCCESS':
                this.isShownCreditCardForm = false;
                this.paymentId = undefined;
                if (message.data.error === null) {
                    this.isPaymentExecuteSuccess = true;
                }
                else {
                    var jsonObject = JSON.parse(message.data.error);
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
    };
    EventDetailComponent.prototype.sendMessageToGetEventInfo = function () {
        if (typeof this.eventIdParam === 'undefined')
            return;
        var apiPackage = new GetEventInfo_1.GetEventInfo().setEventId(this.eventIdParam);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    EventDetailComponent.prototype.showRegisterForm = function () {
        this.isShownRegisterForm = true;
    };
    EventDetailComponent.prototype.showCreditCardForm = function () {
        this.isShownCreditCardForm = true;
    };
    EventDetailComponent.prototype.registerEvent = function () {
        this.isRegisteringEvent = true;
        var apiPackage = new UserRegisterEvent_1.UserRegisterEvent()
            .setEventId(this.event.id)
            .setQuantity(this.registerQuantity);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    EventDetailComponent.prototype.updateInterested = function (event) {
        var apiPackage = new UpdateInterested_1.LikeOrUnlikeAnEvent().setEventId(event.id);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    EventDetailComponent.prototype.makePayment = function (ticket) {
        var apiPackage = new MakePaymentPaypal_1.MakePaymentPaypal().addProducts(ticket.id, 'EVENT');
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    EventDetailComponent.prototype.executePayment = function (data) {
        var apiPackage = new ExecutePaymentPaypal_1.ExecutePaymentPaypal()
            .setPaymentId(data.paymentID)
            .setPayerID(data.payerID);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    EventDetailComponent.prototype.payWithCreditCard = function (event) {
        var apiPackage = new ExecutePaymentCreditCard_1.ExecutePaymentCreditCard()
            .addProducts(this.ticket.id, 'EVENT')
            .setBillingAddress(this.currentUser)
            .setCreditCard(this.currentUser);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    EventDetailComponent.prototype.updateImage = function (image) {
        image = './assets/images/default/event.png';
    };
    EventDetailComponent.prototype.getCreditCardType = function () {
        var cardType = 'credit_cards';
        var ccnumber = String(this.currentUser.cardNumber).toString().replace(/\s+/g, '');
        if (/^(34)|^(37)/.test(ccnumber)) {
            cardType = 'amex';
        }
        if (/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(ccnumber)) {
            cardType = 'discover';
        }
        if (/^35(2[89]|[3-8][0-9])/.test(ccnumber)) {
            cardType = 'jcb';
        }
        if (/^5[1-5]/.test(ccnumber)) {
            cardType = 'mastercard';
        }
        if (/^4/.test(ccnumber)) {
            cardType = 'visa';
        }
        this.currentUser.cardType = cardType;
        return '/assets/images/' + cardType + '.png';
    };
    ;
    __decorate([
        core_1.ViewChild(interested_user_component_1.InterestedUser), 
        __metadata('design:type', interested_user_component_1.InterestedUser)
    ], EventDetailComponent.prototype, "interestedUserComponent", void 0);
    EventDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ev-event-detail',
            templateUrl: 'event-detail.component.html',
            styleUrls: ['event-detail.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], EventDetailComponent);
    return EventDetailComponent;
}());
exports.EventDetailComponent = EventDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxzQkFBbUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNwRSwwQ0FBZ0MsNkNBQTZDLENBQUMsQ0FBQTtBQUM5RSxzQkFBb0MsMkJBQTJCLENBQUMsQ0FBQTtBQUtoRSxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSx1Q0FBc0MsMENBQTBDLENBQUMsQ0FBQTtBQUtqRiw2QkFBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM5RCxrQ0FBa0MscUNBQXFDLENBQUMsQ0FBQTtBQUN4RSxpQ0FBb0Msb0NBQW9DLENBQUMsQ0FBQTtBQUN6RSxrQ0FBa0MsNkNBQTZDLENBQUMsQ0FBQTtBQUNoRixxQ0FBcUMsZ0RBQWdELENBQUMsQ0FBQTtBQUN0Rix5Q0FBeUMsb0RBQW9ELENBQUMsQ0FBQTtBQUs5RixzQkFBc0IsdUJBQXVCLENBQUMsQ0FBQTtBQVM5QztJQXdCRSw4QkFBb0IsR0FBZ0IsRUFDaEIsS0FBcUIsRUFDckIsV0FBa0MsRUFDbEMsY0FBOEI7UUFIOUIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pCLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFN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LEdBQUcsUUFBUSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQy9DLENBQUM7O0lBektEO1FBQUMsZ0JBQVMsQ0FBQywwQ0FBYyxDQUFDOzt5RUFBQTtJQXpCNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQThMRiwyQkFBQztBQUFELENBN0xBLEFBNkxDLElBQUE7QUE3TFksNEJBQW9CLHVCQTZMaEMsQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL2V2ZW50L2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW50ZXJlc3RlZFVzZXIgfSAgZnJvbSAnLi9pbnRlcmVzdGVkLXVzZXIvaW50ZXJlc3RlZC11c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDcmVkaXRDYXJkVmFsaWRhdG9yIH0gZnJvbSAnbmcyLWNjLWxpYnJhcnkvZGlzdC9pbmRleCc7XG5cbi8qKlxuICogc2VydmljZXNcbiAqL1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogcGFja2FnZXNcbiAqL1xuaW1wb3J0IHsgR2V0RXZlbnRJbmZvIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvR2V0RXZlbnRJbmZvJztcbmltcG9ydCB7IFVzZXJSZWdpc3RlckV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvVXNlclJlZ2lzdGVyRXZlbnQnO1xuaW1wb3J0IHsgTGlrZU9yVW5saWtlQW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL1VwZGF0ZUludGVyZXN0ZWQnO1xuaW1wb3J0IHsgTWFrZVBheW1lbnRQYXlwYWwgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9wYXltZW50L01ha2VQYXltZW50UGF5cGFsJztcbmltcG9ydCB7IEV4ZWN1dGVQYXltZW50UGF5cGFsIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvcGF5bWVudC9FeGVjdXRlUGF5bWVudFBheXBhbCc7XG5pbXBvcnQgeyBFeGVjdXRlUGF5bWVudENyZWRpdENhcmQgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9wYXltZW50L0V4ZWN1dGVQYXltZW50Q3JlZGl0Q2FyZCc7XG5cbi8qKlxuICogbW9kdWxlc1xuICovXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9FdmVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdldi1ldmVudC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJ2V2ZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydldmVudC1kZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgcm91dGVTdWI6IGFueTtcbiAgcHVibGljIG1lc3NhZ2VTdWI6IGFueTtcblxuICBwdWJsaWMgZXZlbnRJZFBhcmFtOiBudW1iZXI7XG4gIHB1YmxpYyBldmVudDogRXZlbnQ7XG4gIHB1YmxpYyB0aWNrZXQ6IGFueTtcbiAgcHVibGljIGlzTm90Rm91bmRFdmVudDogYm9vbGVhbjtcbiAgcHVibGljIGlzSW50ZXJlc3RlZDogYm9vbGVhbjtcbiAgcHVibGljIGlzU2hvd25SZWdpc3RlckZvcm06IGJvb2xlYW47XG4gIHB1YmxpYyBpc1Nob3duQ3JlZGl0Q2FyZEZvcm06IGJvb2xlYW47XG4gIHB1YmxpYyBpc1JlZ2lzdGVyaW5nRXZlbnQ6IGJvb2xlYW47XG4gIHB1YmxpYyByZWdpc3RlclF1YW50aXR5OiBudW1iZXI7XG4gIHB1YmxpYyB2ZXJpZnlDb2RlOiBzdHJpbmc7XG4gIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgcHVibGljIGVycm9yTGluazogc3RyaW5nO1xuICBwdWJsaWMgcGF5bWVudElkOiBzdHJpbmc7XG4gIHB1YmxpYyBpc1BheW1lbnRFeGVjdXRlU3VjY2VzczogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKEludGVyZXN0ZWRVc2VyKVxuICBwcml2YXRlIGludGVyZXN0ZWRVc2VyQ29tcG9uZW50OiBJbnRlcmVzdGVkVXNlcjtcbiAgcHJpdmF0ZSBjdXJyZW50VXNlcjogVXNlcjtcbiAgcHJpdmF0ZSBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aGVudGljYXRlZFVzZXIoKTtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBjcmVkaXRDYXJkOiBbJycsIFs8YW55PkNyZWRpdENhcmRWYWxpZGF0b3IudmFsaWRhdGVDQ051bWJlcl1dLFxuICAgICAgZXhwaXJhdGlvbkRhdGU6IFsnJywgWzxhbnk+Q3JlZGl0Q2FyZFZhbGlkYXRvci52YWxpZGF0ZUV4cERhdGVdXSxcbiAgICAgIGN2YzogWycnLCBbPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkLCA8YW55PlZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCA8YW55PlZhbGlkYXRvcnMubWF4TGVuZ3RoKDQpXV1cbiAgICB9KTtcbiAgICB0aGlzLmlzU2hvd25SZWdpc3RlckZvcm0gPSBmYWxzZTtcbiAgICB0aGlzLmlzU2hvd25DcmVkaXRDYXJkRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuaGFuZGxlUm91dGUocGFyYW1zKSk7XG4gICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlUm91dGUocGFyYW1zOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuZXZlbnRJZFBhcmFtID0gK3BhcmFtc1snaWQnXTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRFdmVudEluZm8oKTtcbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdHRVRfRVZFTlRfREVUQUlMX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50KG1lc3NhZ2UuZGF0YS5ldmVudCk7XG4gICAgICAgIHRoaXMuaXNOb3RGb3VuZEV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbnRlcmVzdGVkID0gbWVzc2FnZS5kYXRhLmlzSW50ZXJlc3RlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdMSUtFX0VWRU5UX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLmlzSW50ZXJlc3RlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuaW50ZXJlc3RlZFVzZXJDb21wb25lbnQuc2VuZE1lc3NhZ2VUb0dldFVzZXJJbnRlcmVzdGVkSW5FdmVudCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VOTElLRV9FVkVOVF9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5pc0ludGVyZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5pbnRlcmVzdGVkVXNlckNvbXBvbmVudC5zZW5kTWVzc2FnZVRvR2V0VXNlckludGVyZXN0ZWRJbkV2ZW50KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVVNFUl9SRUdJU1RFUl9FVkVOVF9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5yZWdpc3RlclF1YW50aXR5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnZlcmlmeUNvZGUgPSBtZXNzYWdlLmRhdGEudGlja2V0LnZlcmlmeUNvZGU7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50LnRpY2tldFByaWNlID4gMCkge1xuICAgICAgICAgIHRoaXMudGlja2V0ID0gbWVzc2FnZS5kYXRhLnRpY2tldDtcbiAgICAgICAgICB0aGlzLm1ha2VQYXltZW50KHRoaXMudGlja2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzU2hvd25SZWdpc3RlckZvcm0gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXJpbmdFdmVudCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNQYXltZW50RXhlY3V0ZVN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTUFLRV9QQVlNRU5UX1BBWVBBTF9TVUNDRVNTJzpcbiAgICAgICAgbGV0IHBheW1lbnQgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YS5yZXNwb25zZVBheW1lbnQpO1xuICAgICAgICBsZXQgZXJyb3IgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YS5lcnJvcik7XG4gICAgICAgIHRoaXMuaXNSZWdpc3RlcmluZ0V2ZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTaG93blJlZ2lzdGVyRm9ybSA9IGZhbHNlO1xuICAgICAgICBpZiAoISFwYXltZW50KSB0aGlzLnBheW1lbnRJZCA9IHBheW1lbnQuaWQ7XG4gICAgICAgIGlmICghIWVycm9yKSBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ01BS0VfUEFZTUVOVF9QQVlQQUxfQ1JFRElUX0NBUkRfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuaXNTaG93bkNyZWRpdENhcmRGb3JtID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF5bWVudElkID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAobWVzc2FnZS5kYXRhLmVycm9yID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pc1BheW1lbnRFeGVjdXRlU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGpzb25PYmplY3QgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YS5lcnJvcik7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBqc29uT2JqZWN0Lm1lc3NhZ2U7XG4gICAgICAgICAgdGhpcy5lcnJvckxpbmsgPSBqc29uT2JqZWN0LmluZm9ybWF0aW9uX2xpbms7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFWEVDVVRFX1BBWU1FTlRfUEFZUEFMX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLnBheW1lbnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc1BheW1lbnRFeGVjdXRlU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUkVRVUVTVF9FUlJPUic6XG4gICAgICAgIGlmICgnRVZFTlRfTk9UX0VYSVNUJyA9PT0gbWVzc2FnZS5kYXRhLmVycm9yVHlwZSkge1xuICAgICAgICAgIHRoaXMuaXNOb3RGb3VuZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1lc3NhZ2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICB0aGlzLmlzU2hvd25DcmVkaXRDYXJkRm9ybSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBheW1lbnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5pc1JlZ2lzdGVyaW5nRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVnaXN0ZXJGb3JtID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRFdmVudEluZm8oKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmV2ZW50SWRQYXJhbSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRFdmVudEluZm8oKS5zZXRFdmVudElkKHRoaXMuZXZlbnRJZFBhcmFtKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIHNob3dSZWdpc3RlckZvcm0oKSB7XG4gICAgdGhpcy5pc1Nob3duUmVnaXN0ZXJGb3JtID0gdHJ1ZTtcbiAgfVxuXG4gIHNob3dDcmVkaXRDYXJkRm9ybSgpIHtcbiAgICB0aGlzLmlzU2hvd25DcmVkaXRDYXJkRm9ybSA9IHRydWU7XG4gIH1cblxuICByZWdpc3RlckV2ZW50KCkge1xuICAgIHRoaXMuaXNSZWdpc3RlcmluZ0V2ZW50ID0gdHJ1ZTtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBVc2VyUmVnaXN0ZXJFdmVudCgpXG4gICAgICAuc2V0RXZlbnRJZCh0aGlzLmV2ZW50LmlkKVxuICAgICAgLnNldFF1YW50aXR5KHRoaXMucmVnaXN0ZXJRdWFudGl0eSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICB1cGRhdGVJbnRlcmVzdGVkKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBMaWtlT3JVbmxpa2VBbkV2ZW50KCkuc2V0RXZlbnRJZChldmVudC5pZCk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBtYWtlUGF5bWVudCh0aWNrZXQ6IGFueSkge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IE1ha2VQYXltZW50UGF5cGFsKCkuYWRkUHJvZHVjdHModGlja2V0LmlkLCAnRVZFTlQnKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIGV4ZWN1dGVQYXltZW50KGRhdGE6IGFueSkge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEV4ZWN1dGVQYXltZW50UGF5cGFsKClcbiAgICAgIC5zZXRQYXltZW50SWQoZGF0YS5wYXltZW50SUQpXG4gICAgICAuc2V0UGF5ZXJJRChkYXRhLnBheWVySUQpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgcGF5V2l0aENyZWRpdENhcmQoZXZlbnQ6IGFueSkge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEV4ZWN1dGVQYXltZW50Q3JlZGl0Q2FyZCgpXG4gICAgICAuYWRkUHJvZHVjdHModGhpcy50aWNrZXQuaWQsICdFVkVOVCcpXG4gICAgICAuc2V0QmlsbGluZ0FkZHJlc3ModGhpcy5jdXJyZW50VXNlcilcbiAgICAgIC5zZXRDcmVkaXRDYXJkKHRoaXMuY3VycmVudFVzZXIpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgdXBkYXRlSW1hZ2UoaW1hZ2U6IHN0cmluZykge1xuICAgIGltYWdlID0gJy4vYXNzZXRzL2ltYWdlcy9kZWZhdWx0L2V2ZW50LnBuZyc7XG4gIH1cblxuICBnZXRDcmVkaXRDYXJkVHlwZSgpIHtcbiAgICBsZXQgY2FyZFR5cGUgPSAnY3JlZGl0X2NhcmRzJztcbiAgICBsZXQgY2NudW1iZXIgPSBTdHJpbmcodGhpcy5jdXJyZW50VXNlci5jYXJkTnVtYmVyKS50b1N0cmluZygpLnJlcGxhY2UoL1xccysvZywgJycpO1xuXG4gICAgaWYoL14oMzQpfF4oMzcpLy50ZXN0KGNjbnVtYmVyKSkge1xuICAgICAgY2FyZFR5cGUgPSAnYW1leCc7XG4gICAgfVxuICAgIGlmKC9eKDYwMTEpfF4oNjIyKDEoMls2LTldfFszLTldWzAtOV0pfFsyLThdWzAtOV17Mn18OShbMDFdWzAtOV18MlswLTVdKSkpfF4oNjRbNC05XSl8XjY1Ly50ZXN0KGNjbnVtYmVyKSkge1xuICAgICAgY2FyZFR5cGUgPSAnZGlzY292ZXInO1xuICAgIH1cbiAgICBpZigvXjM1KDJbODldfFszLThdWzAtOV0pLy50ZXN0KGNjbnVtYmVyKSkge1xuICAgICAgY2FyZFR5cGUgPSAnamNiJztcbiAgICB9XG4gICAgaWYoL141WzEtNV0vLnRlc3QoY2NudW1iZXIpKSB7XG4gICAgICBjYXJkVHlwZSA9ICdtYXN0ZXJjYXJkJztcbiAgICB9XG4gICAgaWYgKC9eNC8udGVzdChjY251bWJlcikpIHtcbiAgICAgIGNhcmRUeXBlID0gJ3Zpc2EnO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRVc2VyLmNhcmRUeXBlID0gY2FyZFR5cGU7XG4gICAgcmV0dXJuICcvYXNzZXRzL2ltYWdlcy8nICsgY2FyZFR5cGUgKyAnLnBuZyc7XG4gIH07XG59XG4iXX0=
