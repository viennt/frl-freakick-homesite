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
var message_service_1 = require('../../../services/message.service');
var location_service_1 = require('../../../services/location.service');
var Event_1 = require('../../../models/Event');
var LngLat_1 = require('../../../models/LngLat');
var GetEvents_1 = require('../../../packages/GetEvents');
var constants_1 = require('../../../constants');
var AllEventsComponent = (function () {
    function AllEventsComponent(messageService, locationService) {
        this.messageService = messageService;
        this.locationService = locationService;
    }
    AllEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paginationPage = 0;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.locationService.getCurrentPosition(function (position) { return _this.afterGetCurrentLocation(position); });
    };
    AllEventsComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    AllEventsComponent.prototype.handleMessage = function (message) {
        this.isLoading = false;
        if (message.messageType === 'SEARCH_EVENTS_SUCCESS') {
            this.paginationPage = message.data.pagination.nextPage;
            var events = message.data.lstEvents.map(function (data) { return new Event_1.Event(data); });
            if (!this.events)
                this.events = events;
            else
                this.events = this.events.concat(events);
        }
    };
    AllEventsComponent.prototype.afterGetCurrentLocation = function (position) {
        this.userCurrentLocation = new LngLat_1.LngLat(position.location.lng, position.location.lat);
        this.isLoading = true;
        this.sendMessageToGetNewsFeed();
    };
    AllEventsComponent.prototype.sendMessageToGetNewsFeed = function () {
        var apiPackage = new GetEvents_1.GetEvents()
            .setEventType([])
            .setStatus(['PL'])
            .setCoordinate(this.userCurrentLocation)
            .setRadius(0)
            .setPagination(constants_1.SEARCH_PAGINATION.ITEM_PER_PAGE_EVENT_TINE_LINE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    AllEventsComponent.prototype.loadMoreEvent = function () {
        if (this.paginationPage > -1) {
            this.isLoading = true;
            this.sendMessageToGetNewsFeed();
        }
    };
    AllEventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-time-line-events',
            template: "<app-template-time-line *ngIf=\"events\" [events]=\"events\"></app-template-time-line> <app-template-time-line-loading *ngIf=\"!events || isLoading\"></app-template-time-line-loading> <div *ngIf=\"!isLoading\" class=\"portlet light bordered\"      (click)=\"loadMoreEvent($event)\">     <span class=\"caption-subject font-dark bold uppercase\">         <span class=\"btn\">More</span>     </span> </div>",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, location_service_1.LocationService])
    ], AllEventsComponent);
    return AllEventsComponent;
}());
exports.AllEventsComponent = AllEventsComponent;
