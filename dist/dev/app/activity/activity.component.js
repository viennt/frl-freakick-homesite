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
            templateUrl: 'activity.component.html',
            styleUrls: ['activity.component.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.ActivatedRoute, router_1.Router])
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUd6RCx3QkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUM1QyxzQkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxnQ0FBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUU3RCw0Q0FBMEMsaURBQWlELENBQUMsQ0FBQTtBQUM1Riw2Q0FBMEMsbURBQW1ELENBQUMsQ0FBQTtBQVM5RjtJQW1CRSwyQkFBb0IsY0FBOEIsRUFDOUIsS0FBcUIsRUFDckIsTUFBYztRQUZkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV2QyxvQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDL0MsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQTlCLENBQThCLENBQ3pDLENBQUM7UUFDRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUN6RCxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsRUFBbkMsQ0FBbUMsQ0FDOUMsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUN0RCxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQ3ZDLENBQUM7SUFDSixDQUFD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QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FDN0IsSUFBSSxpQkFBTyxDQUFDLHdCQUF3QixFQUNsQztZQUNFLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyx3Q0FBd0MsQ0FBQztJQUNyRSxDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixJQUErQztRQUM3RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFqS0Q7UUFBQyxnQkFBUyxDQUFDLGtCQUFrQixDQUFDOztpRUFBQTtJQUM5QjtRQUFDLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7O2lFQUFBO0lBVGhDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7O3lCQUFBO0lBcUtGLHdCQUFDO0FBQUQsQ0FwS0EsQUFvS0MsSUFBQTtBQXBLWSx5QkFBaUIsb0JBb0s3QixDQUFBIiwiZmlsZSI6ImFwcC9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzL01lc3NhZ2UnO1xuaW1wb3J0IHsgRXZlbnQgYXMgQWN0aXZpdHkgfSBmcm9tICcuLi9tb2RlbHMvRXZlbnQnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSm9pbkZyZWFraWNrRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vam9pbi1mcmVha2ljay1mb3JtL2pvaW4tZnJlYWtpY2stZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhlY3V0ZVBheW1lbnRQYXlwYWwgfSBmcm9tICcuLi9wYWNrYWdlcy9wYXltZW50L0V4ZWN1dGVQYXltZW50UGF5cGFsJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLWFjdGl2aXR5JyxcbiAgdGVtcGxhdGVVcmw6ICdhY3Rpdml0eS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhY3Rpdml0eS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZpdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQFZpZXdDaGlsZCgncmVnaXN0cmF0aW9uRm9ybScpIHJlZ2lzdHJhdGlvbkZvcm1FbDogUmVnaXN0cmF0aW9uRm9ybUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnam9pbkZyZWFraWNrRm9ybScpIGpvaW5GcmVha2lja0Zvcm1FbDogSm9pbkZyZWFraWNrRm9ybUNvbXBvbmVudDtcblxuICBwdWJsaWMgZXZlbnRJZDogbnVtYmVyO1xuICBwdWJsaWMgaW52aXRhdGlvblRva2VuOiBzdHJpbmc7XG4gIHB1YmxpYyBhY3Rpdml0eTogQWN0aXZpdHk7XG4gIHB1YmxpYyB0aWNrZXREZXRhaWw6IGFueTtcbiAgcHVibGljIHRpY2tldFN0YXR1czogbnVtYmVyO1xuICBwdWJsaWMgdGlja2V0U3RhdHVzTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiAgcHVibGljIHBheW1lbnRJZDogbnVtYmVyO1xuICBwdWJsaWMgZXZlbnRQcmljZVBhY2thZ2VzOiBhbnlbXTtcblxuICBwcml2YXRlIHJvdXRlU3ViUGFyYW1zOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcm91dGVTdWJRdWVyeVBhcmFtczogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG1lc3NhZ2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVTdWJQYXJhbXMgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICBwYXJhbXMgPT4gdGhpcy5oYW5kbGVSb3V0ZVBhcmFtcyhwYXJhbXMpXG4gICAgKTtcbiAgICB0aGlzLnJvdXRlU3ViUXVlcnlQYXJhbXMgPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgIHBhcmFtcyA9PiB0aGlzLmhhbmRsZVJvdXRlUXVlcnlQYXJhbXMocGFyYW1zKVxuICAgICk7XG4gICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICBtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJvdXRlU3ViUGFyYW1zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb3V0ZVN1YlF1ZXJ5UGFyYW1zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5tZXNzYWdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBoYW5kbGVSb3V0ZVBhcmFtcyhwYXJhbXM6IGFueSkge1xuICAgIHRoaXMuZXZlbnRJZCA9IE51bWJlcihwYXJhbXNbJ2lkJ10pO1xuICAgIGlmICghdGhpcy5ldmVudElkIHx8IHR5cGVvZiB0aGlzLmV2ZW50SWQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nLCAnaG9tZSddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvR2V0U2hhcmVkRXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSb3V0ZVF1ZXJ5UGFyYW1zKHBhcmFtczogYW55KSB7XG4gICAgdGhpcy5pbnZpdGF0aW9uVG9rZW4gPSBTdHJpbmcocGFyYW1zWydpbnZpdGF0aW9uVG9rZW4nXSk7XG4gICAgaWYgKCF0aGlzLmludml0YXRpb25Ub2tlbiB8fCB0eXBlb2YgdGhpcy5pbnZpdGF0aW9uVG9rZW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICAvL1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRFdmVudFRpY2tldCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdHRVRfU0hBUkVEX0VWRU5UX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLmFjdGl2aXR5ID0gbmV3IEFjdGl2aXR5KG1lc3NhZ2UuZGF0YS5ldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnR0VUX0VWRU5UX1RJQ0tFVF9CWV9JTlZJVEFUSU9OX1RPS0VOX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLnRpY2tldERldGFpbCA9IG1lc3NhZ2UuZGF0YS50aWNrZXQ7XG4gICAgICAgIHRoaXMudGlja2V0U3RhdHVzID0gbWVzc2FnZS5kYXRhLnRpY2tldC5zdGF0dXM7XG4gICAgICAgIHRoaXMudGlja2V0U3RhdHVzTmFtZSA9IG1lc3NhZ2UuZGF0YS50aWNrZXQuc3RhdHVzTmFtZTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IG1lc3NhZ2UuZGF0YS50aWNrZXQuZW1haWw7XG4gICAgICAgIHRoaXMuZXZlbnRQcmljZVBhY2thZ2VzID0gbWVzc2FnZS5kYXRhLmV2ZW50UHJpY2VQYWNrYWdlcztcbiAgICAgICAgaWYgKHRoaXMudGlja2V0U3RhdHVzID09PSA4KSB7XG4gICAgICAgICAgdGhpcy5tYWtlUGF5bWVudChtZXNzYWdlLmRhdGEudGlja2V0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VQREFURV9JTlZJVEFUSU9OX1ZJQV9JTlZJVEFUSU9OX1RPS0VOX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLnRpY2tldFN0YXR1cyA9IG1lc3NhZ2UuZGF0YS50aWNrZXQuc3RhdHVzO1xuICAgICAgICB0aGlzLnRpY2tldFN0YXR1c05hbWUgPSBtZXNzYWdlLmRhdGEudGlja2V0LnN0YXR1c05hbWU7XG4gICAgICAgIGlmICh0aGlzLnRpY2tldFN0YXR1cyA9PT0gOCkge1xuICAgICAgICAgIHRoaXMubWFrZVBheW1lbnQobWVzc2FnZS5kYXRhLnRpY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdNQUtFX1BBWU1FTlRfUEFZUEFMX1NVQ0NFU1MnOlxuICAgICAgICBsZXQgcGF5bWVudCA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhLnJlc3BvbnNlUGF5bWVudCk7XG4gICAgICAgIGxldCBlcnJvciA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhLmVycm9yKTtcbiAgICAgICAgaWYgKCEhcGF5bWVudCkgdGhpcy5wYXltZW50SWQgPSBwYXltZW50LmlkO1xuICAgICAgICBpZiAoISFlcnJvcikgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFWEVDVVRFX1BBWU1FTlRfUEFZUEFMX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLnBheW1lbnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50aWNrZXRTdGF0dXMgPSAxO1xuICAgICAgICB0aGlzLnRpY2tldFN0YXR1c05hbWUgPSAnSm9pbmVkJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSRVFVRVNUX0VSUk9SJzpcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5lcnJvclR5cGUgPT09ICdHRVRfRVZFTlRfVElDS0VUX0JZX0lOVklUQVRJT05fVE9LRU5fSU5WSVRBVElPTl9OT1RfRVhJU1QnKSB7XG4gICAgICAgICAgdGhpcy50aWNrZXRTdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy50aWNrZXRTdGF0dXNOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycsICdob21lJ10pO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1JlamVjdEludml0YXRpb24oKSB7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvUmVqZWN0SW52aXRhdGlvbigpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldFNoYXJlZEV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoXG4gICAgICBuZXcgTWVzc2FnZSgnR0VUX1NIQVJFRF9FVkVOVCcsIHtldmVudElkOiBOdW1iZXIodGhpcy5ldmVudElkKX0pXG4gICAgKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRFdmVudFRpY2tldCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKFxuICAgICAgbmV3IE1lc3NhZ2UoJ0dFVF9FVkVOVF9USUNLRVRfQllfSU5WSVRBVElPTl9UT0tFTicsXG4gICAgICAgIHtldmVudElkOiBOdW1iZXIodGhpcy5ldmVudElkKSwgaW52aXRhdGlvblRva2VuOiBTdHJpbmcodGhpcy5pbnZpdGF0aW9uVG9rZW4pfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvUmVqZWN0SW52aXRhdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKFxuICAgICAgbmV3IE1lc3NhZ2UoJ1VQREFURV9JTlZJVEFUSU9OX1ZJQV9JTlZJVEFUSU9OX1RPS0VOJyxcbiAgICAgICAge1xuICAgICAgICAgIGFkZHJlc3M6ICcuJywgcGhvbmVOdW1iZXI6ICcuJywgb3JnYW5pemF0aW9uOiAnLicsIGZ1bGxOYW1lOiAnLicsXG4gICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsIGludml0YXRpb25Ub2tlbjogdGhpcy5pbnZpdGF0aW9uVG9rZW4sIGlzQWNjZXB0OiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBtYWtlUGF5bWVudCh0aWNrZXQ6IGFueSkge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoXG4gICAgICBuZXcgTWVzc2FnZSgnTUFLRV9QQVlNRU5UX1BBWVBBTCcsXG4gICAgICAgIHtcbiAgICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICAgICAgICBsc3RQcm9kdWN0OiBbe3Byb2R1Y3RJZDogdGlja2V0LmlkLCBwcm9kdWN0VHlwZTogJ0VWRU5UJywgcXVhbnRpdHk6IHRpY2tldC5xdWFudGl0eX1dLFxuICAgICAgICAgIGludml0YXRpb25Ub2tlbjogdGhpcy5pbnZpdGF0aW9uVG9rZW4sXG4gICAgICAgICAgc2FsZU9mZkNvZGU6ICcnXG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZXhlY3V0ZVBheW1lbnQoZGF0YTogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShcbiAgICAgIG5ldyBNZXNzYWdlKCdFWEVDVVRFX1BBWU1FTlRfUEFZUEFMJyxcbiAgICAgICAge1xuICAgICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxuICAgICAgICAgIHBheW1lbnRJZDogZGF0YS5wYXltZW50SUQsXG4gICAgICAgICAgcGF5ZXJJRDogZGF0YS5wYXllcklELFxuICAgICAgICAgIGludml0YXRpb25Ub2tlbjogdGhpcy5pbnZpdGF0aW9uVG9rZW4sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgb25FcnJvckJnKCkge1xuICAgIHRoaXMuYWN0aXZpdHkuaW1hZ2VzWzBdID0gJ2Fzc2V0cy9pbWFnZXMvZXZlbnRzLXBhZ2UvZGlzY292ZXIuanBnJztcbiAgfVxuXG4gIHJlZ2lzdGVyU3VjY2VzcyhkYXRhOiB7dmVyaWZ5Q29kZTogc3RyaW5nLCBhY3RpdmVUb2tlbjogc3RyaW5nfSkge1xuICAgIHRoaXMuam9pbkZyZWFraWNrRm9ybUVsLm9wZW4oZGF0YSk7XG4gIH1cbn1cbiJdfQ==
