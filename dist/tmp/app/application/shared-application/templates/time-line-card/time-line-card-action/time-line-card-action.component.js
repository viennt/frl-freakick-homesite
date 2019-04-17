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
var Event_1 = require('../../../../../models/Event');
var message_service_1 = require('../../../../../services/message.service');
var UpdateInterested_1 = require('../../../../../packages/UpdateInterested');
var TimeLineCardActionComponent = (function () {
    function TimeLineCardActionComponent(messageService) {
        this.messageService = messageService;
    }
    TimeLineCardActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    TimeLineCardActionComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'LIKE_EVENT_SUCCESS':
                if (message.data.eventLikeMsg.eventId === this.event.id) {
                    this.isLoadingLikeEvent = false;
                    this.event.numberOfLikes = this.event.numberOfLikes + 1;
                }
                break;
            case 'UNLIKE_EVENT_SUCCESS':
                if (message.data.eventLikeMsg.eventId === this.event.id) {
                    this.isLoadingLikeEvent = false;
                    this.event.numberOfLikes = this.event.numberOfLikes - 1;
                }
                break;
        }
    };
    TimeLineCardActionComponent.prototype.onLikeEvent = function () {
        if (this.isLoadingLikeEvent)
            return;
        this.isLoadingLikeEvent = true;
        var apiPackage = new UpdateInterested_1.LikeOrUnlikeAnEvent().setEventId(this.event.id);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Event_1.Event)
    ], TimeLineCardActionComponent.prototype, "event", void 0);
    TimeLineCardActionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-template-time-line-card-action',
            template: "<li class=\"meta__item\">     <i class=\"icon-eye font-grey-cascade\"></i>     {{ event.numberOfRegisteredUsers || '0' }} </li> <li class=\"meta__item\" (click)=\"onLikeEvent($event)\">     <a href=\"javascript:;\">         <i *ngIf=\"isLoadingLikeEvent\" class=\"fa fa-spinner fa-spin font-grey-cascade\"></i>         <i *ngIf=\"!isLoadingLikeEvent && !event.isUserLiked\" class=\"icon-like font-grey-cascade\"></i>         <i *ngIf=\"!isLoadingLikeEvent && event.isUserLiked\" class=\"icon-like font-red-mint\"></i>         {{ event.numberOfLikes || '0' }}</a> </li> <li class=\"meta__item\">     <a href=\"javascript:;\">         <i class=\"icon-bubble font-grey-cascade\"></i>         {{ event.numberOfComments || '0' }}</a> </li>",
            styles: ["\n      .meta__item {\n          font-size: 14px;\n      }\n  "]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], TimeLineCardActionComponent);
    return TimeLineCardActionComponent;
}());
exports.TimeLineCardActionComponent = TimeLineCardActionComponent;
