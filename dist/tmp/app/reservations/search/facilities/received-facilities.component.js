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
var GetAvailableFacilities_1 = require('../../../packages/GetAvailableFacilities');
var authentication_service_1 = require('../../../services/authentication.service');
var message_service_1 = require('../../../services/message.service');
var Facility_1 = require('../../../models/Facility');
var constants = require('../../../constants');
var ReceivedFacilitiesComponent = (function () {
    function ReceivedFacilitiesComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
    }
    Object.defineProperty(ReceivedFacilitiesComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    ReceivedFacilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.filterSports = this.availableSports;
        this.loadedImage = [];
        this.getFacilitiesFromServer();
    };
    ReceivedFacilitiesComponent.prototype.ngAfterViewInit = function () {
    };
    ReceivedFacilitiesComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedFacilitiesComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                this.handleReceivedFacilities({ lstFacilities: [] });
                break;
            case 'GET_AVAILABLE_FACILITIES_SUCCESS':
                this.receivedFacilities = undefined;
                this.handleReceivedFacilities(message.data);
        }
    };
    ReceivedFacilitiesComponent.prototype.handleReceivedFacilities = function (data) {
        data.lstFacilities = Object.prototype.toString.call(data.lstFacilities) !== '[object Array]'
            ? JSON.parse(data.lstFacilities) : data.lstFacilities;
        if (data.lstFacilities.length === 0) {
            this.loadingResultData = false;
            this.receivedFacilities = [];
        }
        else {
            this.receivedFacilities = data.lstFacilities
                .filter(function (facilityData) { return facilityData !== null; })
                .map(function (facilityData) { return new Facility_1.Facility(facilityData); });
        }
    };
    ReceivedFacilitiesComponent.prototype.sendMessageToGetAvailableFacilities = function () {
        var apiPackage = new GetAvailableFacilities_1.GetAvailableFacilities()
            .setKeyWord(this.keyword)
            .setSports(this.filterSports)
            .setCity(this.userLocation.address.getCity())
            .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedFacilitiesComponent.prototype.getFacilitiesFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableFacilities();
    };
    ReceivedFacilitiesComponent.prototype.filterSportsChanged = function (selectedSport, value) {
        var _this = this;
        if (this.preFilterResults)
            clearTimeout(this.preFilterResults);
        if (value) {
            var inSport = this.filterSports.find(function (sport) {
                return sport.sportId === selectedSport.sportId;
            });
            if (typeof inSport === 'undefined') {
                this.filterSports.push(selectedSport);
            }
        }
        else {
            this.filterSports = this.filterSports.filter(function (sport) {
                return sport.sportId !== selectedSport.sportId;
            });
        }
        this.preFilterResults = setTimeout(function () {
            clearTimeout(_this.preFilterResults);
            _this.getFacilitiesFromServer();
        }, 1000);
    };
    ReceivedFacilitiesComponent.prototype.facilitiesImageLoaded = function () {
        this.loadedImage.push(true);
        if (this.loadedImage.length >= this.receivedFacilities.length) {
            this.loadingResultData = false;
        }
    };
    ReceivedFacilitiesComponent.prototype.updateUrl = function (facility) {
        facility.partner.logo = './assets/images/default/court.png';
        this.facilitiesImageLoaded();
    };
    ReceivedFacilitiesComponent.prototype.onBookingFacility = function (facility) {
        if (this.authService.isLoggedIn()) {
            this.selectedFacility = facility;
            jQuery('#bookingFacilityModal').modal('show');
        }
        else {
            this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ReceivedFacilitiesComponent.prototype, "availableSports", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedFacilitiesComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ReceivedFacilitiesComponent.prototype, "keyword", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReceivedFacilitiesComponent.prototype, "userLocation", void 0);
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], ReceivedFacilitiesComponent.prototype, "fadeIn", null);
    ReceivedFacilitiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-facilities',
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-sm-4\">             <div class=\"google-map hidden-xs\" *ngIf=\"receivedFacilities && receivedFacilities.length\">                 <div class=\"panel panel-default\">                     <div class=\"panel-footer no-padding\">                         <sebm-google-map [latitude]=\"receivedFacilities[0].branch.coordinate.lat\"                                          [longitude]=\"receivedFacilities[0].branch.coordinate.lng\">                             <sebm-google-map-marker *ngFor=\"let receivedFacility of receivedFacilities; let i = index\"                                                     [latitude]=\"receivedFacility.branch.coordinate.lat\"                                                     [longitude]=\"receivedFacility.branch.coordinate.lng\">                             </sebm-google-map-marker>                         </sebm-google-map>                     </div>                 </div>             </div>             <div class=\"filter no-select\">                 <div class=\"multiple-checkbox\">                     <div class=\"title color-red\"><i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> Sports</div>                     <label *ngFor=\"let sport of availableSports\">                         <input type=\"checkbox\" name=\"sport\" checked                                [disabled]=\"filterSports.length === 1 && sport.sportId === filterSports[0].sportId\"                                (change)=\"filterSportsChanged(sport, $event.target.checked)\"/>                         <span>{{ sport.sportName }}</span>                     </label>                 </div>             </div>         </div>         <div class=\"col-sm-8\">         <div *ngIf=\"loadingResultData\">             <frk-loading-circle></frk-loading-circle>         </div>         <div class=\"list-group\" *ngIf=\"receivedFacilities && receivedFacilities.length\">             <div *ngFor=\"let receivedFacility of receivedFacilities; let i = index\"                  class=\"list-group-item row court-detail no-margin animated fadeIn\"                  [style.animation-duration]=\"'0.75s'\"                  [style.animation-delay]=\"i * 0.15 + 's'\"                  [class.hide]=\"loadingResultData\">                 <div class=\"col-sm-3 court-image\">                     <a class=\"thumbnail\" [routerLink]=\"['/reservations/branch', receivedFacility.branch.id]\">                         <img [src]=\"receivedFacility.partner.logo\"                              (load)=\"facilitiesImageLoaded()\"                              (error)=\"updateUrl(receivedFacility)\">                     </a>                 </div>                 <div class=\"col-sm-9\">                     <div class=\"row\">                         <div class=\"col-sm-8\">                             <div class=\"court-info\">                                 <div class=\"court-info-line\">                                     {{ i + 1 }}.                                     <a [routerLink]=\"['/reservations/branch', receivedFacility.branch.id]\">                                         <strong>{{ receivedFacility.branch.name }}</strong>                                     </a>                                 </div>                                 <div class=\"court-info-line\">                                     <span data-toggle=\"tooltip\"                                           title=\"{{ receivedFacility.branch.rating }} stars of {{ receivedFacility.branch.countRating }} rated\">                                       <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"                                          [class.fa-star]=\"star <= receivedFacility.branch.rating\"                                          [class.color-red]=\"star <= receivedFacility.branch.rating\"                                          [class.fa-star-o]=\"star > receivedFacility.branch.rating\"></i>                                       {{ receivedFacility.branch.countRating }} reviews                                     </span>                                 </div>                                 <div class=\"court-info-line\">                                     <div class=\"col-sm-8 no-padding\">                                         <span class=\"court-opening-hour \" data-toggle=\"tooltip\"                                              title=\"Opening hour: from {{ receivedFacility.openedTime }} to {{ receivedFacility.closedTime }}\">                                             <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>                                             {{ receivedFacility.openedTime }} - {{ receivedFacility.closedTime }}                                         </span>                                     </div>                                     <div class=\"col-sm-4 no-padding\">                                         <span class=\"court-fieldCode\" data-toggle=\"tooltip\"                                              title=\"Field: {{ receivedFacility.fieldCode }}\">                                             <i class=\"fa fa-server\" aria-hidden=\"true\"></i>                                             {{ receivedFacility.fieldCode }}                                         </span>                                     </div>                                     <div class=\"col-sm-8 no-padding\">                                         <span class=\"court-phone\" data-toggle=\"tooltip\"                                              title=\"Phone number: {{ receivedFacility.branch.phoneNumber }}\">                                             <i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i>                                             {{ receivedFacility.branch.phoneNumber }}                                         </span>                                     </div>                                     <div class=\"col-sm-4 no-padding\">                                         <span class=\"court-fieldSize\" data-toggle=\"tooltip\"                                              title=\"Size: {{ receivedFacility.fieldSize }} players/team\">                                             <img class=\"stadium\" src=\"/assets/images/icons/stadium-24.png\">                                             {{ receivedFacility.fieldSize }}                                         </span>                                     </div>                                 </div>                             </div>                         </div>                         <div class=\"col-sm-4\">                             <div class=\"court-address\">                                 <div class=\"address\" data-toggle=\"tooltip\"                                      title=\"Address: {{ receivedFacility.branch.address }}\">                                     <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>                                     {{ receivedFacility.branch.address }}                                 </div>                             </div>                         </div>                         <div class=\"col-sm-4 col-xs-offset-8\">                             <div class=\"court-info-line field-opening-hour\">                                 <button class=\"btn btn-sm btn-opening\" type=\"button\"                                         (click)=\"onBookingFacility(receivedFacility)\"> Buy a ticket </button>                             </div>                         </div>                     </div>                 </div>             </div>         </div>         <div *ngIf=\"!loadingResultData && (receivedFacilities && !receivedFacilities.length)\"              class=\"courts-result\">             <div class=\"result-container\">                 <div class=\"no-result\">                     There are no results found.                 </div>             </div>         </div>     </div>     </div> </div>  <div class=\"modal fade\" id=\"bookingFacilityModal\" tabindex=\"-1\"      role=\"dialog\" aria-labelledby=\"myModalLabel\">     <div *ngIf=\"!selectedFacility\">         <frk-loading-circle></frk-loading-circle>     </div>     <sd-booking-facility-ticket             *ngIf=\"selectedFacility\"             [facility]=\"selectedFacility\"     ></sd-booking-facility-ticket> </div>",
            styles: [":host{width:100%;display:inline-block;min-height:calc(100vh - 200px)}.court-detail{padding-left:0;padding-right:0}.court-detail.list-group-item{border-radius:0;border-left-width:0;border-right-width:0;border-bottom-width:0;color:#787878}.court-detail .court-image{padding-left:0}.court-detail .list-group-item,.court-detail .thumbnail{border:none}.court-detail .list-group-item:first-child{margin:0}.court-detail .court-address,.court-detail .court-info{line-height:1.8;font-size:90%}.court-fieldSize img{width:16px;vertical-align:initial}.field-opening-hour .btn-opening{margin:.2vmin;background:#da3743;color:#fcfcfc;width:100%;height:auto}.field-opening-hour .btn-opening[disabled]{background-color:rgba(1,1,1,0);color:#101010}.field-opening-hour .btn-opening.btn-auto-with{width:auto}.field-opening-hour .btn-opening.selected{background:#00c853;border-color:#00c853;font-weight:700}.field-opening-hour .btn-opening:not(.selected):hover{background:#e06770;-webkit-animation:none;animation:none}.field-opening-hour .btn-opening:first-child{margin-left:0}.google-map .panel{border-radius:0}.sebm-google-map-container{height:300px}.filter{border-right:1px solid #ddd;padding:0 15px 0 0;display:inline-block;width:100%}.multiple-checkbox,.time-group{border-bottom:1px solid #ddd;padding:10px 0;float:left}.multiple-checkbox .title,.time-group .title{font-weight:700;padding:10px 0}.multiple-checkbox label{width:100%;margin:0;padding:5px 0;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.multiple-checkbox label input,.multiple-checkbox label span{vertical-align:middle;margin:0;height:16px}"],
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
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReceivedFacilitiesComponent);
    return ReceivedFacilitiesComponent;
}());
exports.ReceivedFacilitiesComponent = ReceivedFacilitiesComponent;
