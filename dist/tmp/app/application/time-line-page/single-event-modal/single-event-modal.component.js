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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var Event_1 = require('../../../models/Event');
var GetEventInfo_1 = require('../../../packages/GetEventInfo');
var message_service_1 = require('../../../services/message.service');
var SingleEventModalComponent = (function () {
    function SingleEventModalComponent(_location, route, messageService) {
        this._location = _location;
        this.route = route;
        this.messageService = messageService;
    }
    SingleEventModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    SingleEventModalComponent.prototype.ngOnDestroy = function () {
        this._location = undefined;
        this.routeSub.unsubscribe();
        this.messageSub.unsubscribe();
    };
    SingleEventModalComponent.prototype.handleRoute = function (params) {
        this.sendMessageToGetEventInfo(+params['id']);
    };
    SingleEventModalComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_EVENT_DETAIL_SUCCESS':
                this.modal.open();
                this.event = new Event_1.Event(message.data.event);
                break;
        }
    };
    SingleEventModalComponent.prototype.sendMessageToGetEventInfo = function (eventId) {
        var apiPackage = new GetEventInfo_1.GetEventInfo().setEventId(eventId);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    SingleEventModalComponent.prototype.onCloseModal = function () {
        if (this._location)
            this._location.back();
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], SingleEventModalComponent.prototype, "modal", void 0);
    SingleEventModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-single-event-modal',
            template: "\n      <modal #modal [cssClass]=\"'modal--login modal--login-only'\"\n             [animation]=\"false\"\n             (onClose)=\"onCloseModal($event)\"\n             (onDismiss)=\"onCloseModal($event)\">\n          <modal-header [show-close]=\"false\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                      aria-label=\"Close\">\n                  <span aria-hidden=\"true\">\u00D7</span>\n              </button>\n          </modal-header>\n          <app-template-short-event-detail *ngIf=\"event\" [event]=\"event\">\n          </app-template-short-event-detail>\n      </modal>\n  ",
            styles: ["\n      modal /deep/ .modal-dialog {\n          width: 80vw;\n      }\n\n      modal /deep/ .modal--login .modal-header .close {\n          text-indent: unset;\n          z-index: 1;\n      }\n\n      @media (max-width: 767px) {\n          modal /deep/ .modal-dialog {\n              width: calc(100vw - 20px);\n          }\n\n          modal /deep/ .modal--login .modal-header .close {\n              top: 30px;\n              right: 30px;\n          }\n      }\n\n      modal /deep/ .modal--login .modal-header .close span {\n          margin: 0;\n      }\n\n      modal /deep/ .modal-content {\n          background-color: transparent;\n          border: none;\n      }\n  "]
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, message_service_1.MessageService])
    ], SingleEventModalComponent);
    return SingleEventModalComponent;
}());
exports.SingleEventModalComponent = SingleEventModalComponent;
