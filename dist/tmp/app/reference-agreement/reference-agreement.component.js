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
var message_service_1 = require('../services/message.service');
var Message_1 = require('../models/Message');
var notifications_service_1 = require('../plugins/notifi/notifications.service');
var ReferenceAgreementComponent = (function () {
    function ReferenceAgreementComponent(router, route, messageService, notify) {
        this.router = router;
        this.route = route;
        this.messageService = messageService;
        this.notify = notify;
    }
    ReferenceAgreementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isChecked = false;
        this.routeSub = this.route.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            _this.secretKey = params['key'];
        });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    ReferenceAgreementComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReferenceAgreementComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'PARENT_RESPONSE_TO_TERMS_OF_SERVICE_WITHOUT_BEING_A_USER_SUCCESS':
                this.router.navigate(['home']);
                break;
            case 'REQUEST_ERROR':
                this.notify.error('Error', 'Fail to agree the terms of service');
                break;
        }
    };
    ReferenceAgreementComponent.prototype.submit = function () {
        this.messageService.sendMessage(new Message_1.Message('PARENT_RESPONSE_TO_TERMS_OF_SERVICE_WITHOUT_BEING_A_USER', {
            activeToken: this.token,
            secretKey: this.secretKey
        }));
    };
    ReferenceAgreementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-reference-agreement',
            template: "<sd-navbar class=\"events\"></sd-navbar>  <section>     <div class=\"terms\">         <h2 >TERMS OF SERVICE</h2>         <div class=\"parent-term\">             <p>Those applying for a Non-Athlete or Adult Athlete membership will have a background check performed, therefore, adult applications will not be approved instantly and must wait for the background check to complete before receiving your Branch's Membership Number. This process usually takes anywhere from 1 to 10 business days to complete (but may take longer in some cases).</p>             <p>Insurance is a benefit of membership and is effective as of the date payment is received for youth athletes and as of the date the background check passes for adults.</p>             <p>Memberships must always be paid and member number issued prior to participation in any activity (including practices and try-outs).</p>              <p>--------</p>              <p>By approving information above I hereby authorize  to perform a background screening for my adult membership, accept and acknowledge all terms and conditions presented to me during the application process.</p>             <p class=\"pull-right\">NOTE: This must be signed by the person applying for membership or a parentally approved representative for youth applicants.</p>         </div>         <div class=\"agree-terms\">             <label class=\"checkbox col-md-8\">                 <input (change)=\"isChecked = !isChecked\" class=\"checkbox-term\" type=\"checkbox\">                 I have read these terms of service.             </label>             <div>                 <button class=\"btn btn-success pull-right\"                         [disabled]=\"!isChecked\"                         (click)=\"submit()\">Agree to the teams</button>             </div>         </div>     </div> </section>  <sd-new-footer></sd-new-footer>",
            styles: [".terms{padding:60px 48px;max-width:960px;margin:auto}.terms p{font-weight:300;color:#23282b;line-height:150%;margin:0 0 15px}ol{list-style-type:decimal}ol>li>ol{list-style-type:upper-alpha}.parent-term{height:400px;overflow-y:scroll;background:#f7f7f7;padding:2%}.checkbox-term{height:unset}.agree-terms{margin-top:10px}"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, message_service_1.MessageService, notifications_service_1.NotificationsService])
    ], ReferenceAgreementComponent);
    return ReferenceAgreementComponent;
}());
exports.ReferenceAgreementComponent = ReferenceAgreementComponent;
