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
var GetEvents_1 = require('../../../packages/GetEvents');
var Event_1 = require('../../../models/Event');
var constants_1 = require('../../../constants');
var ReceivedEventsComponent = (function () {
    function ReceivedEventsComponent(messageService) {
        this.messageService = messageService;
    }
    Object.defineProperty(ReceivedEventsComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    ReceivedEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.getEventsFromServer();
    };
    ReceivedEventsComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedEventsComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                break;
            case 'SEARCH_EVENTS_SUCCESS':
                this.receivedEvents = undefined;
                this.handleReceivedEvent(message.data);
        }
    };
    ReceivedEventsComponent.prototype.handleReceivedEvent = function (data) {
        data.lstEvents = Object.prototype.toString.call(data.lstEvents) !== '[object Array]' ? JSON.parse(data.lstEvents) : data.lstEvents;
        if (data.lstEvents.length === 0) {
            this.loadingResultData = false;
            this.receivedEvents = [];
        }
        else {
            this.receivedEvents = data.lstEvents
                .filter(function (facilityData) { return facilityData !== null; })
                .map(function (data) { return new Event_1.Event(data); });
        }
    };
    ReceivedEventsComponent.prototype.getEventsFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableEvents();
    };
    ReceivedEventsComponent.prototype.sendMessageToGetAvailableEvents = function () {
        var apiPackage = new GetEvents_1.GetEvents()
            .setKeyWord(this.keyword)
            .setStatus(['PL'])
            .setCoordinate(this.userLocation.coordinate)
            .setRadius(0)
            .setPagination(constants_1.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedEventsComponent.prototype.eventsImageLoaded = function () {
        this.loadedImage.push(true);
        if (this.loadedImage.length >= this.receivedEvents.length) {
            this.loadingResultData = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedEventsComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ReceivedEventsComponent.prototype, "keyword", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReceivedEventsComponent.prototype, "userLocation", void 0);
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], ReceivedEventsComponent.prototype, "fadeIn", null);
    ReceivedEventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-events',
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-sm-4\">             <div class=\"google-map hidden-xs animated fadeIn\" *ngIf=\"receivedEvents && receivedEvents.length\">                 <div class=\"panel panel-default\">                     <div class=\"panel-footer no-padding\">                         <sebm-google-map [latitude]=\"userLocation.coordinate.lat\"                                          [longitude]=\"userLocation.coordinate.lng\">                             <sebm-google-map-marker *ngFor=\"let receivedEvent of receivedEvents; let i = index\"                                                     [latitude]=\"receivedEvent.latitude\"                                                     [longitude]=\"receivedEvent.longitude\">                             </sebm-google-map-marker>                         </sebm-google-map>                     </div>                 </div>             </div>         </div>         <div class=\"col-sm-8\">         <div *ngIf=\"loadingResultData\">             <frk-loading-circle></frk-loading-circle>         </div>         <div class=\"list-group\" *ngIf=\"receivedEvents && receivedEvents.length\">             <div *ngFor=\"let receivedEvent of receivedEvents; let i = index\"                  class=\"list-group-item row court-detail no-margin animated fadeIn\"                  [style.animation-duration]=\"'0.75s'\"                  [style.animation-delay]=\"i * 0.15 + 's'\"                  [class.hide]=\"loadingResultData\">                 <div class=\"col-sm-3 court-image\">                     <a class=\"thumbnail\" [routerLink]=\"['../event', receivedEvent.id]\">                         <img [src]=\"receivedEvent.images[0]\"                              (load)=\"eventsImageLoaded()\"                              (error)=\"$event.target.src = './assets/images/default/event.png'\">                     </a>                 </div>                 <div class=\"col-sm-9\">                     <div class=\"row\">                         <div class=\"col-sm-8\">                             <div class=\"court-info\">                                 <div class=\"court-info-line\">                                     {{ i + 1 }}.                                     <a [routerLink]=\"['../event', receivedEvent.id]\">                                         <strong>{{ receivedEvent.name }}</strong>                                     </a>                                 </div>                                 <div class=\"court-info-line\">                                     <div class=\"col-sm-12 no-padding\">                                         <span class=\"court-opening-hour \" data-toggle=\"tooltip\"                                               title=\"Opening time: from {{ receivedEvent.startDate }}\">                                             <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>                                             From: {{ receivedEvent.startDate }}                                         </span>                                     </div>                                     <div class=\"col-sm-12 no-padding\">                                         <span class=\"court-opening-hour \" data-toggle=\"tooltip\"                                               title=\"Opening time: to {{ receivedEvent.endDate }}\">                                             <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>                                             To: {{ receivedEvent.endDate }}                                         </span>                                     </div>                                     <div class=\"col-sm-12 no-padding\">                                         <span class=\"court-phone\" data-toggle=\"tooltip\"                                               title=\"Age groups: {{ receivedEvent.contactPhone }}\">                                             <span *ngFor=\"let group of receivedEvent.ageGroups\">                                                 <span class=\"label label-default\">{{ group.groupName }}</span>                                             </span>                                         </span>                                     </div>                                     <div class=\"col-sm-12 no-padding description\">                                         <span class=\"court-phone\" data-toggle=\"tooltip\"                                               title=\"Phone number: {{ receivedEvent.contactEmail }}\"                                               [innerHTML]=\"receivedEvent.description.substr(0, 100) + '...'\">                                         </span>                                     </div>                                 </div>                             </div>                         </div>                         <div class=\"col-sm-4\">                             <div class=\"court-address\">                                 <div *ngIf=\"receivedEvent.address && receivedEvent.address.length\"                                      class=\"address\" data-toggle=\"tooltip\"                                      title=\"Address: {{ receivedEvent.address }}\">                                     <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>                                     {{ receivedEvent.address }}                                 </div>                             </div>                         </div>                         <!--<div class=\"col-sm-4 col-xs-offset-8\">-->                             <!--<div class=\"court-info-line field-opening-hour\">-->                                 <!--<button class=\"btn btn-sm btn-opening\" type=\"button\"-->                                         <!--(click)=\"onBookingEvent(receivedEvent)\"> Buy a ticket </button>-->                             <!--</div>-->                         <!--</div>-->                     </div>                 </div>             </div>         </div>         <div *ngIf=\"!loadingResultData && (receivedEvents && !receivedEvents.length)\"              class=\"courts-result\">             <div class=\"result-container\">                 <div class=\"no-result\">                     There are no results found.                 </div>             </div>         </div>     </div>     </div> </div>  <!--<div class=\"modal fade\" id=\"bookingFacilityModal\" tabindex=\"-1\"-->      <!--role=\"dialog\" aria-labelledby=\"myModalLabel\">-->     <!--<div *ngIf=\"!selectedFacility\">-->         <!--<frk-loading-circle></frk-loading-circle>-->     <!--</div>--> <!--</div>-->",
            styles: [":host{width:100%;display:inline-block;min-height:calc(100vh - 200px)}.court-detail{padding-left:0;padding-right:0}.court-detail.list-group-item{border-radius:0;border-left-width:0;border-right-width:0;border-bottom-width:0;color:#787878}.court-detail .court-image{padding-left:0}.court-detail .list-group-item,.court-detail .thumbnail{border:none}.court-detail .list-group-item:first-child{margin:0}.court-detail .court-address,.court-detail .court-info{line-height:1.8;font-size:90%}.court-fieldSize img{width:16px;vertical-align:initial}.field-opening-hour .btn-opening{margin:.2vmin;background:#da3743;color:#fcfcfc;width:100%;height:auto}.field-opening-hour .btn-opening[disabled]{background-color:rgba(1,1,1,0);color:#101010}.field-opening-hour .btn-opening.btn-auto-with{width:auto}.field-opening-hour .btn-opening.selected{background:#00c853;border-color:#00c853;font-weight:700}.field-opening-hour .btn-opening:not(.selected):hover{background:#e06770;-webkit-animation:none;animation:none}.field-opening-hour .btn-opening:first-child{margin-left:0}.google-map .panel{border-radius:0}.sebm-google-map-container{height:300px}.description{margin-top:5px;border-top:1px solid #ececec}.description>>>*{font-size:inherit;font-weight:400;color:inherit}"],
            animations: [
                core_1.trigger('fadeIn', [
                    core_1.state('in', core_1.style({})),
                    core_1.transition(':enter', core_1.animate(1000, core_1.keyframes([
                        core_1.style({ opacity: 0, offset: 0 }),
                        core_1.style({ opacity: 1, offset: 1 })
                    ]))),
                    core_1.transition(':leave', core_1.animate(500, core_1.keyframes([
                        core_1.style({ opacity: 1, offset: 0 }),
                        core_1.style({ opacity: 0, offset: 1 })
                    ])))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], ReceivedEventsComponent);
    return ReceivedEventsComponent;
}());
exports.ReceivedEventsComponent = ReceivedEventsComponent;
