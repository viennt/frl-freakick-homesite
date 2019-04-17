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
var GetAvailableFacilitiesOnSpecificCenter_1 = require('../../../packages/GetAvailableFacilitiesOnSpecificCenter');
var authentication_service_1 = require('../../../services/authentication.service');
var message_service_1 = require('../../../services/message.service');
var Court_1 = require('../../../models/Court');
var Facility_1 = require('../../../models/Facility');
var constants = require('../../../constants');
var ReceivedBranchFacilitiesComponent = (function () {
    function ReceivedBranchFacilitiesComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.nonResult = new core_1.EventEmitter();
        this.haveResult = new core_1.EventEmitter();
    }
    ReceivedBranchFacilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.filterSports = this.availableSports;
        this.getFacilitiesFromServer();
    };
    ReceivedBranchFacilitiesComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if ('branch' === propName || 'availableSports' === propName) {
                this.filterSports = this.availableSports;
                this.getFacilitiesFromServer();
            }
        }
    };
    ReceivedBranchFacilitiesComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedBranchFacilitiesComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                this.handleReceivedFacilities({ lstFacilities: [] });
                break;
            case 'GET_AVAILABLE_FACILITIES_ON_SPECIFIC_CENTER_SUCCESS':
                this.receivedFacilities = undefined;
                this.handleReceivedFacilities(message.data);
        }
    };
    ReceivedBranchFacilitiesComponent.prototype.handleReceivedFacilities = function (data) {
        data.lstFacilities = Object.prototype.toString.call(data.lstFacilities) !== '[object Array]'
            ? JSON.parse(data.lstFacilities) : data.lstFacilities;
        if (data.lstFacilities.length === 0) {
            this.receivedFacilities = [];
            this.nonResult.emit();
        }
        else {
            this.receivedFacilities = data.lstFacilities
                .filter(function (facilityData) { return facilityData !== null; })
                .map(function (facilityData) { return new Facility_1.Facility(facilityData); });
            this.haveResult.emit();
        }
        this.loadingResultData = false;
    };
    ReceivedBranchFacilitiesComponent.prototype.sendMessageToGetAvailableFacilities = function () {
        var apiPackage = new GetAvailableFacilitiesOnSpecificCenter_1.GetAvailableFacilitiesOnSpecificCenter()
            .setKeyWord('')
            .setSports(this.filterSports)
            .setCourt(this.branch)
            .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedBranchFacilitiesComponent.prototype.getFacilitiesFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableFacilities();
    };
    ReceivedBranchFacilitiesComponent.prototype.filterSportsChanged = function (selectedSport, value) {
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
    ReceivedBranchFacilitiesComponent.prototype.onBookingFacility = function (facility) {
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
    ], ReceivedBranchFacilitiesComponent.prototype, "availableSports", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedBranchFacilitiesComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Court_1.Court)
    ], ReceivedBranchFacilitiesComponent.prototype, "branch", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReceivedBranchFacilitiesComponent.prototype, "nonResult", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReceivedBranchFacilitiesComponent.prototype, "haveResult", void 0);
    ReceivedBranchFacilitiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-branch-facilities',
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-sm-4\">             <div class=\"filter no-select\">                 <div class=\"multiple-checkbox\">                     <div class=\"title color-red\"><i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> Sports</div>                     <label *ngFor=\"let sport of availableSports\">                         <input type=\"checkbox\" name=\"sport\" checked                                [disabled]=\"filterSports.length === 1 && sport.sportId === filterSports[0].sportId\"                                (change)=\"filterSportsChanged(sport, $event.target.checked)\"/>                         <span>{{ sport.sportName }}</span>                     </label>                 </div>             </div>         </div>         <div class=\"col-sm-8\">             <div *ngIf=\"loadingResultData\">                 <frk-loading-circle></frk-loading-circle>             </div>             <div class=\"list-group\" *ngIf=\"receivedFacilities && receivedFacilities.length\">                 <div *ngFor=\"let receivedFacility of receivedFacilities; let i = index\"                      class=\"list-group-item col-sm-6 court-detail no-margin\"                      [class.hide]=\"loadingResultData\">                     <div class=\"col-sm-12\">                         <div class=\"court-info\">                             <div class=\"court-info-line\">                                 <div class=\"col-sm-8 no-padding\">                                     {{ i + 1 }}.                                     <span class=\"court-opening-hour \" data-toggle=\"tooltip\"                                          title=\"Opening hour: from {{ receivedFacility.openedTime }} to {{ receivedFacility.closedTime }}\">                                         Opening hour:                                         {{ receivedFacility.openedTime }} - {{ receivedFacility.closedTime }}                                     </span>                                 </div>                                 <div class=\"col-sm-12 no-padding text-left\">                                     <span class=\"court-fieldCode\" data-toggle=\"tooltip\"                                          title=\"Field: {{ receivedFacility.fieldCode }}\">                                         <i class=\"fa fa-server\" aria-hidden=\"true\"></i> Field number:                                         {{ receivedFacility.fieldCode }}                                     </span>                                 </div>                                 <div class=\"col-sm-12 no-padding text-left\">                                     <span class=\"court-fieldSize\" data-toggle=\"tooltip\"                                          title=\"Size: {{ receivedFacility.fieldSize }} players/team\">                                         <img class=\"stadium\" src=\"/assets/images/icons/stadium-24.png\"> Field size:                                         {{ receivedFacility.fieldSize }}                                     </span>                                 </div>                             </div>                         </div>                     </div>                     <div class=\"col-sm-12\">                         <div class=\"court-info-line field-opening-hour\">                             <button class=\"btn btn-sm btn-opening\" type=\"button\"                                     (click)=\"onBookingFacility(receivedFacility)\"> Buy a ticket </button>                         </div>                     </div>                 </div>             </div>             <div *ngIf=\"!loadingResultData && (receivedFacilities && !receivedFacilities.length)\"                  class=\"courts-result\">                 <div class=\"result-container\">                     <div class=\"no-result col-xs-12\">                         There are no results found.                     </div>                 </div>             </div>         </div>     </div> </div>  <div class=\"modal fade\" id=\"bookingFacilityModal\" tabindex=\"-1\"      role=\"dialog\" aria-labelledby=\"myModalLabel\">     <div *ngIf=\"!selectedFacility\">         <frk-loading-circle></frk-loading-circle>     </div>     <sd-booking-facility-ticket             *ngIf=\"selectedFacility\"             [facility]=\"selectedFacility\"     ></sd-booking-facility-ticket> </div>",
            styles: [".court-detail{padding-left:0;padding-right:0}.court-detail.list-group-item{border-radius:0;border-left-width:0;border-right-width:0;border-top-width:0;color:#787878}.court-detail .court-image{padding-left:0}.court-detail .list-group-item,.court-detail .thumbnail{border:none}.court-detail .list-group-item:first-child{margin:0}.court-detail .court-address,.court-detail .court-info{line-height:1.8;font-size:90%}.court-fieldSize img{width:16px;vertical-align:initial}.field-opening-hour .btn-opening{margin:.2vmin;background:#da3743;color:#fcfcfc;width:100%;height:auto}.field-opening-hour .btn-opening[disabled]{background-color:rgba(1,1,1,0);color:#101010}.field-opening-hour .btn-opening.btn-auto-with{width:auto}.field-opening-hour .btn-opening.selected{background:#00c853;border-color:#00c853;font-weight:700}.field-opening-hour .btn-opening:not(.selected):hover{background:#e06770;-webkit-animation:none;animation:none}.field-opening-hour .btn-opening:first-child{margin-left:0}.filter{border-right:1px solid #ddd;padding:0 15px 0 0;float:left;width:100%}.multiple-checkbox,.time-group{border-bottom:1px solid #ddd;padding:10px 0;float:left}.multiple-checkbox .title,.time-group .title{font-weight:700;text-transform:uppercase;padding:10px 0}.multiple-checkbox label{width:100%;margin:0;padding:5px 0;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.multiple-checkbox label input,.multiple-checkbox label span{vertical-align:middle;margin:0;height:16px}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReceivedBranchFacilitiesComponent);
    return ReceivedBranchFacilitiesComponent;
}());
exports.ReceivedBranchFacilitiesComponent = ReceivedBranchFacilitiesComponent;
