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
var Message_1 = require('../models/Message');
var Event_1 = require('../models/Event');
var message_service_1 = require('../services/message.service');
var registration_form_component_1 = require('./registration-form/registration-form.component');
var join_freakick_form_component_1 = require('./join-freakick-form/join-freakick-form.component');
var ActivityComponent = (function () {
    function ActivityComponent(messageService, route, router) {
        this.messageService = messageService;
        this.route = route;
        this.router = router;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubParams = this.route.params.subscribe(function (params) { return _this.handleRouteParams(params); });
        this.routeSubQueryParams = this.route.queryParams.subscribe(function (params) { return _this.handleRouteQueryParams(params); });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    ActivityComponent.prototype.ngOnDestroy = function () {
        this.routeSubParams.unsubscribe();
        this.routeSubQueryParams.unsubscribe();
        this.messageSub.unsubscribe();
    };
    ActivityComponent.prototype.handleRouteParams = function (params) {
        this.eventId = Number(params['id']);
        if (!this.eventId || typeof this.eventId !== 'number') {
            this.router.navigate(['/', 'home']);
        }
        else {
            this.sendMessageToGetSharedEvent();
        }
    };
    ActivityComponent.prototype.handleRouteQueryParams = function (params) {
        this.invitationToken = String(params['invitationToken']);
        if (!this.invitationToken || typeof this.invitationToken !== 'string') {
        }
        else {
            this.sendMessageToGetEventTicket();
        }
    };
    ActivityComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_SHARED_EVENT_SUCCESS':
                this.activity = new Event_1.Event(message.data.event);
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
                var payment = JSON.parse(message.data.responsePayment);
                var error = JSON.parse(message.data.error);
                if (!!payment)
                    this.paymentId = payment.id;
                if (!!error)
                    console.error(error.message);
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
                }
                else {
                    this.router.navigate(['/', 'home']);
                }
        }
    };
    ActivityComponent.prototype.onClickRejectInvitation = function () {
        this.sendMessageToRejectInvitation();
    };
    ActivityComponent.prototype.sendMessageToGetSharedEvent = function () {
        this.messageService.sendMessage(new Message_1.Message('GET_SHARED_EVENT', { eventId: Number(this.eventId) }));
    };
    ActivityComponent.prototype.sendMessageToGetEventTicket = function () {
        this.messageService.sendMessage(new Message_1.Message('GET_EVENT_TICKET_BY_INVITATION_TOKEN', { eventId: Number(this.eventId), invitationToken: String(this.invitationToken) }));
    };
    ActivityComponent.prototype.sendMessageToRejectInvitation = function () {
        this.messageService.sendMessage(new Message_1.Message('UPDATE_INVITATION_VIA_INVITATION_TOKEN', {
            address: '.', phoneNumber: '.', organization: '.', fullName: '.',
            email: this.email, invitationToken: this.invitationToken, isAccept: false,
        }));
    };
    ActivityComponent.prototype.makePayment = function (ticket) {
        this.messageService.sendMessage(new Message_1.Message('MAKE_PAYMENT_PAYPAL', {
            accessToken: null,
            lstProduct: [{ productId: ticket.id, productType: 'EVENT', quantity: ticket.quantity }],
            invitationToken: this.invitationToken,
            saleOffCode: ''
        }));
    };
    ActivityComponent.prototype.executePayment = function (data) {
        this.messageService.sendMessage(new Message_1.Message('EXECUTE_PAYMENT_PAYPAL', {
            accessToken: null,
            paymentId: data.paymentID,
            payerID: data.payerID,
            invitationToken: this.invitationToken,
        }));
    };
    ActivityComponent.prototype.onErrorBg = function () {
        this.activity.images[0] = 'assets/images/events-page/discover.jpg';
    };
    ActivityComponent.prototype.registerSuccess = function (data) {
        this.joinFreakickFormEl.open(data);
    };
    __decorate([
        core_1.ViewChild('registrationForm'), 
        __metadata('design:type', registration_form_component_1.RegistrationFormComponent)
    ], ActivityComponent.prototype, "registrationFormEl", void 0);
    __decorate([
        core_1.ViewChild('joinFreakickForm'), 
        __metadata('design:type', join_freakick_form_component_1.JoinFreakickFormComponent)
    ], ActivityComponent.prototype, "joinFreakickFormEl", void 0);
    ActivityComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-activity',
            template: "<sd-navbar class=\"activity\"></sd-navbar>  <header *ngIf=\"activity\" #section class=\"first-section\">     <div id=\"overlay\"          [class.non-fixed]=\"nonFixedBackground\"          [style.opacity]=\"sectionOpacity\"          [style.background-image]=\"'url(' + activity.images[0] + ')'\"></div>     <img [src]=\"activity.images[0]\" class=\"hide\" (error)=\"onErrorBg()\">     <div class=\"container animated fadeIn\">         <div class=\"intro-text\" [style.opacity]=\"2 * sectionOpacity - 1\">             <div class=\"intro-heading\">{{ activity.name }}</div>             <div class=\"row\">                 <div class=\"col-sm-4 col-sm-offset-2\">                     <div><i class=\"fa fa-fw fa-calendar\"></i></div>                     <div>                         <span *ngIf=\"!activity.isAllDateEvent\">                               {{ activity.startTime }} - {{ activity.endTime }}</span>                         <span *ngIf=\"activity.isAllDateEvent\">All day</span>                     </div>                     <div>                         {{ activity.startDate | date:'mediumDate' }} -                         <span *ngIf=\"activity.endDateType === 2\">                               {{ activity.endDate | date:'mediumDate' }}</span>                         <span *ngIf=\"activity.endDateType === 1\">never end</span>                     </div>                 </div>                 <div class=\"col-sm-4\">                     <div><i class=\"fa fa-fw fa-map-marker\"></i></div>                     {{ activity.address }}                 </div>             </div>             <div class=\"row\">                 <div *ngIf=\"eventPricePackages.length == 0\" class=\"col-xs-12 text-center price\">                     <span *ngIf=\"activity.ticketPrice\" class=\"bold\">                         USD {{ activity.ticketPrice }}</span>                     <span *ngIf=\"!activity.ticketPrice\" class=\"bold\">                         Free</span>                 </div>                 <div *ngIf=\"eventPricePackages && eventPricePackages.length > 0\"                        class=\"col-xs-12 col-sm-4 col-sm-offset-4 text-center price\">                     <div class=\"font-dark form-group\">                         <select id=\"state\" name=\"state\" class=\"form-control input-lg\" required>                             <option value=\"\" disabled selected>Select Pricing Tier</option>                             <option *ngFor='let price of eventPricePackages'                                     value=\"{{price.eventPriceId}}\">USD {{price.price}} - {{price.priceName}}                             </option>                         </select>                     </div>                 </div>                 <div *ngIf=\"!!ticketStatus && ticketStatus === 3\" class=\"col-xs-12 text-center\">                     <a class=\"accept-button\" (click)=\"registrationFormEl.open()\">Accept Invitation</a>                 </div>                 <div *ngIf=\"!!ticketStatus && ticketStatus === 3\" class=\"col-xs-12 text-center\">                     <a class=\"cancel-button\" (click)=\"onClickRejectInvitation()\">No thanks</a>                 </div>                 <div *ngIf=\"!!ticketStatus && ticketStatus !== 3\" class=\"col-xs-12 text-center\">                     <a class=\"accepted-button\">Status: {{ ticketStatusName }}</a>                 </div>                 <div *ngIf=\"paymentId && !!ticketStatus && ticketStatus === 8\" class=\"col-xs-12 text-center\">                     <br>                     <div paypalCheckout                          [paymentId]=\"paymentId\"                          (onAuthorize)=\"executePayment($event)\">                     </div>                 </div>             </div>         </div>     </div> </header> <div class=\"container\">     <div *ngIf=\"!!ticketDetail && !!ticketStatus && (ticketStatus === 1 || ticketStatus === 8)\" class=\"well well-sm\">         <div class=\"row\">             <h3 class=\"col-xs-12 text-center\">Ticket Detail</h3>             <div class=\"col-xs-4\">                 <div><strong>Full name</strong>: <span>{{ ticketDetail.fullName }}</span></div>                 <div><strong>Email</strong>: <span>{{ ticketDetail.email }}</span></div>             </div>             <div class=\"col-xs-4\">                 <div><strong>Phone number</strong>: <span>{{ ticketDetail.phoneNumber }}</span></div>                 <div><strong>Organization</strong>: <span>{{ ticketDetail.organization }}</span></div>             </div>             <div class=\"col-xs-4\">                 <div><strong>Address</strong>: <span>{{ ticketDetail.address }}</span></div>                 <div><strong>Verify code</strong>: <span>{{ ticketDetail.verifyCode }}</span></div>             </div>         </div>     </div> </div> <section *ngIf=\"activity\" class=\"container\">     <div class=\"row\">         <div class=\"col-sm-8\">             <h3>Description</h3>             <div *ngIf=\"!!activity.description\" class=\"text-grey\"                  [innerHTML]=\"activity.description | markdown\"></div>             <div *ngIf=\"!activity.description\" class=\"text-grey\">                 There are no description for this activity.             </div>         </div>         <div class=\"col-sm-4\">             <h3>Repeat</h3>             <div class=\"text-grey\">                 {{ activity.repeatTypeName }}                 <span *ngIf=\"activity.repeatFrequency > 1\">                      - every {{ activity.repeatFrequency }}                     <span *ngIf=\"activity.repeatType === 1\">days</span>                     <span *ngIf=\"activity.repeatType === 2\">weeks,</span>                     <span *ngIf=\"activity.repeatType === 3\">months</span>                 </span>             </div>             <div *ngIf=\"activity.repeatType === 2\" class=\"text-grey\"> on:                 <span *ngIf=\"activity.isOccurMonday\" class=\"label label-info\">Monday</span>                 <span *ngIf=\"activity.isOccurTuesday\" class=\"label label-info\">Tuesday</span>                 <span *ngIf=\"activity.isOccurWednesday\" class=\"label label-info\">Wednesday</span>                 <span *ngIf=\"activity.isOccurThursday\" class=\"label label-info\">Thursday</span>                 <span *ngIf=\"activity.isOccurFriday\" class=\"label label-info\">Friday</span>                 <span *ngIf=\"activity.isOccurSaturday\" class=\"label label-info\">Saturday</span>                 <span *ngIf=\"activity.isOccurSunday\" class=\"label label-info\">Sunday</span>             </div>             <h3>Registration Time</h3>             <div class=\"text-grey\">                 {{ activity.registrationStartDate | date:'mediumDate' }} - {{ activity.registrationEndDate | date:'mediumDate' }}             </div>             <h3>Registered User(s)</h3>             <div class=\"text-grey\">                 <span *ngIf=\"activity.numberOfRegisteredUsers\" class=\"bold\">                     {{ activity.numberOfRegisteredUsers}}</span>                 <span *ngIf=\"!activity.numberOfRegisteredUsers\" class=\"bold\">                     0</span>             </div>             <h3>Available Ticket(s)</h3>             <div class=\"text-grey\">                 <span *ngIf=\"activity.capacity && activity.availableSlots\" class=\"bold\">                     {{ activity.availableSlots }}</span>                 <span *ngIf=\"!activity.capacity\" class=\"bold\">                     Unlimited tickets </span>             </div>         </div>     </div>     <div class=\"row\">         <div class=\"col-sm-12\">             <h3>Photos</h3>             <div *ngIf=\"!activity.images\" class=\"text-grey\">                 There are no photo for this activity.             </div>             <div *ngIf=\"!!activity.images\" class=\"gallery-container\">                 <a *ngFor=\"let image of activity.images\" class=\"gallery\"                    href=\"{{ image }}\" target=\"_blank\"                    [style.background-image]=\"'url(' + image + ')'\">                     <img [src]=\"image\" (error)=\"onErrorBg()\" class=\"hide\">                 </a>             </div>         </div>     </div>     <div class=\"row\">         <div class=\"col-sm-12\">             <h3 class=\"text-center\">Map View</h3>             <div class=\"gallery-container\">                 <img src=\"https://maps.googleapis.com/maps/api/staticmap?center={{ activity.latitude }},{{ activity.longitude }}&zoom=16&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C{{ activity.latitude }},{{ activity.longitude }}&key=AIzaSyAkdzOcR6yEpBmtHEuXxCQFYTSywnuckEI\" alt=\"\" width=\"100%\">             </div>         </div>     </div>     <div class=\"row\">         <div class=\"col-sm-12 text-center\">             <div class=\"sub-description\">                 <a class=\"app-store\" target=\"_blank\" href=\"https://itunes.apple.com/us/app/freakick/id1199380713\">                     <img src=\"./assets/images/app-store-badge.png\" alt=\"\">                 </a>                 <a class=\"play-store\" target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.enclave.freakick\">                     <img src=\"./assets/images/play-store-badge.png\" alt=\"\">                 </a>             </div>         </div>     </div> </section>  <sd-new-footer></sd-new-footer>  <frk-registration-form #registrationForm                        [invitationToken]=\"invitationToken\"                        [invitationEmail]=\"email\"                        (success)=\"registerSuccess($event)\"> </frk-registration-form>  <frk-join-freakick-form #joinFreakickForm> </frk-join-freakick-form>",
            styles: [":host{min-height:100vh;display:block}.text-grey{color:#727274}#overlay{width:100%;height:100%;left:0;top:0}#overlay.non-fixed{position:absolute;top:auto;bottom:0}#overlay.blur{-webkit-filter:blur(5px);filter:blur(5px)}#overlay{z-index:-2;position:absolute;background:url(assets/images/brands-page/Background_2.jpg) no-repeat top;background-size:cover}.home-section{background:#fcfcfc;overflow:hidden}header.first-section{overflow:hidden;width:100%;background:rgba(0,0,0,.75);position:relative;transition:all .3s}header.first-section>.container{height:100%}header .container .intro-text{margin:15vh auto 5vh;padding:3vmin 0;line-height:1.3}header .container .intro-text .intro-heading{color:#fff;font-weight:700;letter-spacing:-1px;font-size:6rem;text-align:center;margin:auto;word-break:break-word}@media (max-width:767px){header .container .intro-text .intro-heading{font-size:4rem}}header .container .description-text{margin:20vh auto auto;font-size:25px;width:90%;padding:0;color:#303030;line-height:1.3}@media (max-width:767px){header .container .description-text{margin:15vh auto auto;font-size:20px;width:100%}}header i{font-size:2em}header .row{margin:2em auto;line-height:1.7}header .price{font-size:3em}.main-description{font-size:5vmin;padding:20px}.sub-description{font-size:2.5vmin}.accept-button{font-weight:700;display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background:#3ab549;border:1px solid #3ab549;color:#fff;font-size:18px;letter-spacing:.25vmin;border-radius:500px;padding:10px 20px;box-shadow:0 0 20px hsla(0,0%,6%,.25);text-decoration:none;margin:auto;cursor:pointer;transition:all .3s}.accept-button:hover{background:#339f40;color:#fff}.accepted-button{font-weight:700;background:#cacaca;border:1px solid #cacaca;color:#fff;border-radius:500px;box-shadow:0 0 20px hsla(0,0%,6%,.25);text-decoration:none;transition:all .3s}.accepted-button,.cancel-button{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:18px;letter-spacing:.25vmin;padding:10px 20px;margin:auto}.cancel-button{color:#b9b9b9;cursor:pointer}section.container .row{padding:2em 0;border-bottom:1px solid #ececec}.gallery-container{margin:0}.gallery{position:relative;display:inline-block;overflow:hidden;width:150px;height:150px;margin:10px 10px 10px 0;background-position:50% 50%;background-repeat:no-repeat;background-size:cover;border-radius:4px}a.app-store img,a.play-store img{height:50px;margin:10px auto}"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.ActivatedRoute, router_1.Router])
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;
