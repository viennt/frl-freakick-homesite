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
var GetAvailableFieldsOnDate_1 = require('../../../packages/GetAvailableFieldsOnDate');
var authentication_service_1 = require('../../../services/authentication.service');
var message_service_1 = require('../../../services/message.service');
var help_service_1 = require('../../../services/help.service');
var Facility_1 = require('../../../models/Facility');
var constants = require('../../../constants');
var ReceivedCourtsComponent = (function () {
    function ReceivedCourtsComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
    }
    Object.defineProperty(ReceivedCourtsComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    ReceivedCourtsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.filterSport = this.availableSports[0];
        this.filterDate = moment().format('YYYY-MM-DD');
        this.filterTime = moment().add(30, 'm').format('hh:00 A');
        this.availableFilterTimes = help_service_1.HelpService.getListHoursInDay().map(function (time) {
            return time.name;
        });
        this.loadedImage = [];
        this.getCourtsFromServer();
    };
    ReceivedCourtsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#court-daterange').daterangepicker({
            singleDatePicker: true,
            locale: { format: 'YYYY-MM-DD' },
            startDate: this.filterDate,
            minDate: this.filterDate
        }, function (pickedDate) {
            _this.filterDate = pickedDate.format('YYYY-MM-DD');
            _this.getCourtsFromServer();
        });
    };
    ReceivedCourtsComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedCourtsComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                this.handleReceiveCourts({ lstResult: [] });
                break;
            case 'GET_AVAILABLE_FIELDS_ON_DATE_SUCCESS':
                this.receivedCourts = undefined;
                this.handleReceiveCourts(message.data);
        }
    };
    ReceivedCourtsComponent.prototype.handleReceiveCourts = function (data) {
        if (data.lstResult.length === 0) {
            this.loadingResultData = false;
            this.receivedCourts = [];
        }
        else {
            this.receivedCourts = data.lstResult
                .filter(function (fieldsData) { return fieldsData !== null; })
                .map(function (fieldsData) {
                var field = new Facility_1.Facility(fieldsData.field);
                var availableTimes = fieldsData.lstAvailableTimes.map(function (timeData) {
                    var fieldTimezoneOffset = help_service_1.HelpService.getTimezoneOffset(field.branch.timeZone);
                    var courtTime = timeData + fieldTimezoneOffset;
                    courtTime = (courtTime < 0) ? (24 + courtTime) : courtTime;
                    return {
                        label: help_service_1.HelpService.convertDoubleTimeToString(courtTime),
                        value: courtTime
                    };
                });
                return { field: field, availableTimes: availableTimes };
            });
        }
    };
    ReceivedCourtsComponent.prototype.sendMessageToGetAvailableCourts = function () {
        if (typeof this.filterSport === 'undefined')
            return;
        var locationTime = this.filterDate + ' ' + this.filterTime;
        var searchingTime = moment.tz(locationTime, 'YYYY-MM-DD H:mm A', this.userLocation.timezone).utc().valueOf();
        var apiPackage = new GetAvailableFieldsOnDate_1.GetAvailableFieldsOnDate()
            .setTime(searchingTime)
            .setSport(this.filterSport)
            .setCity(this.userLocation.address.getCity())
            .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedCourtsComponent.prototype.getCourtsFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableCourts();
    };
    ReceivedCourtsComponent.prototype.filterSportsChanged = function (sport, value) {
        if (value) {
            this.filterSport = sport;
            this.getCourtsFromServer();
        }
        else {
            this.filterSport = undefined;
        }
    };
    ReceivedCourtsComponent.prototype.filterTimeChanged = function (value) {
        this.filterTime = value;
        this.getCourtsFromServer();
    };
    ReceivedCourtsComponent.prototype.courtImageLoaded = function () {
        this.loadedImage.push(true);
        if (this.loadedImage.length >= this.receivedCourts.length) {
            this.loadingResultData = false;
        }
    };
    ReceivedCourtsComponent.prototype.updateUrl = function (court) {
        court.field.partner.logo = './assets/images/default/court.png';
        this.courtImageLoaded();
    };
    ReceivedCourtsComponent.prototype.onBookingField = function (field, time) {
        if (this.authService.isLoggedIn()) {
            this.selectedField = field;
            this.selectedFieldTime = time;
            var fullTime = this.filterDate + ' ' + this.filterTime;
            this.selectedFieldDate = moment.tz(fullTime, 'YYYY-MM-DD H:mm A', field.branch.timeZone).utc().valueOf();
            jQuery('#bookingFieldModal').modal('show');
        }
        else {
            this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ReceivedCourtsComponent.prototype, "availableSports", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedCourtsComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReceivedCourtsComponent.prototype, "userLocation", void 0);
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], ReceivedCourtsComponent.prototype, "fadeIn", null);
    ReceivedCourtsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-courts',
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-sm-4\">             <div class=\"google-map hidden-xs\" *ngIf=\"receivedCourts && receivedCourts.length\">                 <div class=\"panel panel-default\">                     <div class=\"panel-footer no-padding\">                         <sebm-google-map [latitude]=\"receivedCourts[0].field.branch.coordinate.lat\"                                          [longitude]=\"receivedCourts[0].field.branch.coordinate.lng\">                             <sebm-google-map-marker *ngFor=\"let receivedCourt of receivedCourts; let i = index\"                                                     [latitude]=\"receivedCourt.field.branch.coordinate.lat\"                                                     [longitude]=\"receivedCourt.field.branch.coordinate.lng\">                             </sebm-google-map-marker>                         </sebm-google-map>                     </div>                 </div>             </div>             <div class=\"filter no-select\">                 <div class=\"time-group\">                     <div class=\"title color-red\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Time</div>                     <div class=\"col-md-12 no-padding\">                         <input type=\"text\" class=\"form-group form-control\" id=\"court-daterange\"/>                         <i class=\"glyphicon glyphicon-calendar fa fa-calendar color-red\"                            onclick=\"document.querySelector('#court-daterange').click()\"></i>                     </div>                     <div class=\"col-md-12 no-padding\">                         <select class=\"form-control frk-input animated fadeIn\" title=\"Time\"                                 [disabled]=\"!availableFilterTimes\"                                 (change)=\"filterTimeChanged($event.target.value)\">                             <option *ngIf=\"!availableFilterTimes\" disabled selected>loading...</option>                             <option *ngFor=\"let time of availableFilterTimes\"                                     [value]=\"time\" [selected]=\"time === filterTime\">{{ time }}</option>                         </select>                     </div>                 </div>                 <div class=\"multiple-checkbox\">                     <div class=\"title color-red\"><i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> Sports</div>                     <label *ngFor=\"let sport of availableSports\">                         <input type=\"radio\" name=\"sport\" [checked]=\"sport.sportId === filterSport.sportId\"                                (change)=\"filterSportsChanged(sport, $event.target.checked)\"/>                         <span>{{ sport.sportName }}</span>                     </label>                 </div>             </div>         </div>         <div class=\"col-sm-8\">         <div *ngIf=\"loadingResultData\">             <frk-loading-circle></frk-loading-circle>         </div>         <div class=\"list-group\" *ngIf=\"receivedCourts && receivedCourts.length\">             <div *ngFor=\"let receivedCourt of receivedCourts; let i = index\"                  class=\"list-group-item row court-detail no-margin animated fadeIn\"                  [style.animation-duration]=\"'0.75s'\"                  [style.animation-delay]=\"i * 0.15 + 's'\"                  [class.hide]=\"loadingResultData\">                 <div class=\"col-sm-3 court-image\">                     <a class=\"thumbnail\" [routerLink]=\"['/reservations/branch', receivedCourt.field.branch.id]\">                         <img [src]=\"receivedCourt.field.partner.logo\"                              (load)=\"courtImageLoaded()\"                              (error)=\"updateUrl(receivedCourt)\">                     </a>                 </div>                 <div class=\"col-sm-9\">                     <div class=\"row\">                         <div class=\"col-sm-8\">                             <div class=\"court-info\">                                 <div class=\"court-info-line\">                                     {{ i + 1 }}.                                     <a [routerLink]=\"['/reservations/branch', receivedCourt.field.branch.id]\">                                         <strong>{{ receivedCourt.field.branch.name }}</strong>                                     </a>                                 </div>                                 <div class=\"court-info-line\">                                     <span data-toggle=\"tooltip\"                                           title=\"{{ receivedCourt.field.branch.rating }} stars of {{ receivedCourt.field.branch.countRating }} rated\">                                         <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"                                            [class.fa-star]=\"star <= receivedCourt.field.branch.rating\"                                            [class.color-red]=\"star <= receivedCourt.field.branch.rating\"                                            [class.fa-star-o]=\"star > receivedCourt.field.branch.rating\"></i>                                             {{ receivedCourt.field.branch.countRating }} reviews                                     </span>                                 </div>                                 <div class=\"court-info-line\">                                     <div class=\"col-sm-8 no-padding\">                                             <span class=\"court-opening-our\" data-toggle=\"tooltip\"                                                   title=\"Opening hour: from {{ receivedCourt.field.openedTime }} to {{ receivedCourt.field.closedTime }}\">                                                 <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>                                                 {{ receivedCourt.field.openedTime }} - {{ receivedCourt.field.closedTime }}                                             </span>                                     </div>                                     <div class=\"col-sm-4 no-padding\">                                             <span class=\"court-fieldCode\" data-toggle=\"tooltip\"                                                   title=\"Field: {{ receivedCourt.field.fieldCode }}\">                                                 <i class=\"fa fa-server\" aria-hidden=\"true\"></i>                                                 {{ receivedCourt.field.fieldCode }}                                             </span>                                     </div>                                     <div class=\"col-sm-8 no-padding\">                                             <span class=\"court-phone\" data-toggle=\"tooltip\"                                                   title=\"Phone number: {{ receivedCourt.field.branch.phoneNumber }}\">                                                 <i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i>                                                 {{ receivedCourt.field.branch.phoneNumber }}                                             </span>                                     </div>                                     <div class=\"col-sm-4 no-padding\">                                             <span class=\"court-fieldSize\" data-toggle=\"tooltip\"                                                   title=\"Size: {{ receivedCourt.field.fieldSize }} players/team\">                                                 <img class=\"stadium\" src=\"/assets/images/icons/stadium-24.png\">                                                 {{ receivedCourt.field.fieldSize }}                                             </span>                                     </div>                                 </div>                             </div>                         </div>                         <div class=\"col-sm-4\">                             <div class=\"court-address\">                                 <div class=\"address\" data-toggle=\"tooltip\"                                      title=\"Address: {{ receivedCourt.field.branch.address }}\">                                     <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>                                     {{ receivedCourt.field.branch.address }}                                 </div>                             </div>                         </div>                     </div>                 </div>                 <div class=\"col-sm-9 col-sm-offset-3\">                     <div class=\"court-info-line field-opening-hour\">                         <button *ngFor=\"let time of receivedCourt.availableTimes\"                                 class=\"btn btn-sm btn-opening\" type=\"button\"                                 (click)=\"onBookingField(receivedCourt.field, time)\">                             {{ time.label }}                         </button>                     </div>                 </div>             </div>         </div>         <div *ngIf=\"!loadingResultData && (receivedCourts && !receivedCourts.length)\"              class=\"courts-result\">             <div class=\"result-container\">                 <div class=\"no-result\">                     There are no results found.                 </div>             </div>         </div>     </div>     </div> </div>  <div class=\"modal fade\" id=\"bookingFieldModal\" tabindex=\"-1\"      role=\"dialog\" aria-labelledby=\"myModalLabel\">     <div *ngIf=\"!selectedField || !selectedFieldTime\">         <frk-loading-circle></frk-loading-circle>     </div>     <sd-booking-field-ticket             *ngIf=\"selectedField && selectedFieldTime\"             [field]=\"selectedField\"             [bookingDate]=\"selectedFieldDate\"             [bookingTime]=\"selectedFieldTime\"     ></sd-booking-field-ticket> </div>",
            styles: [":host{width:100%;display:inline-block;min-height:calc(100vh - 200px)}.court-detail{padding-left:0;padding-right:0}.court-detail.list-group-item{border-radius:0;border-left-width:0;border-right-width:0;border-bottom-width:0;color:#787878}.court-detail .court-image{padding-left:0}.court-detail .list-group-item,.court-detail .thumbnail{border:none}.court-detail .list-group-item:first-child{margin:0}.court-detail .court-address,.court-detail .court-info{line-height:1.8;font-size:90%}.court-fieldSize img{width:16px;vertical-align:initial}.field-opening-hour .btn-opening{width:calc((100% - 1.4vmin) / 4);margin:.2vmin;background:#da3743;color:#fcfcfc;height:auto}.field-opening-hour .btn-opening.btn-auto-with{width:auto}.field-opening-hour .btn-opening.selected{background:#00c853;border-color:#00c853;font-weight:700}.field-opening-hour .btn-opening:not(.selected):hover{background:#e06770;-webkit-animation:none;animation:none}.field-opening-hour .btn-opening:first-child{margin-left:0}.google-map .panel{border-radius:0}.sebm-google-map-container{height:300px}.filter{border-right:1px solid #ddd;padding:0 15px 0 0;display:inline-block;width:100%}.multiple-checkbox,.time-group{border-bottom:1px solid #ddd;padding:10px 0;float:left}.multiple-checkbox .title,.time-group .title{font-weight:700;padding:10px 0}.time-group #court-daterange~i{position:absolute;bottom:24px;right:10px;top:auto;cursor:pointer}@media (max-width:991px){.time-group #court-daterange~i{bottom:9px;right:10px}}.multiple-checkbox label{width:100%;margin:0;padding:5px 0;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.multiple-checkbox label input,.multiple-checkbox label span{vertical-align:middle;margin:0;height:16px}"],
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
    ], ReceivedCourtsComponent);
    return ReceivedCourtsComponent;
}());
exports.ReceivedCourtsComponent = ReceivedCourtsComponent;
