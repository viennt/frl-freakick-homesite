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
var SearchAvailableFieldOnTimeAndCourt_1 = require('../../../packages/SearchAvailableFieldOnTimeAndCourt');
var authentication_service_1 = require('../../../services/authentication.service');
var message_service_1 = require('../../../services/message.service');
var help_service_1 = require('../../../services/help.service');
var Facility_1 = require('../../../models/Facility');
var Court_1 = require('../../../models/Court');
var ReceivedBranchCourtsComponent = (function () {
    function ReceivedBranchCourtsComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.nonResult = new core_1.EventEmitter();
        this.haveResult = new core_1.EventEmitter();
    }
    ReceivedBranchCourtsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.filterSport = this.availableSports[0];
        this.filterDate = moment().format('YYYY-MM-DD');
        this.filterTime = moment().add(30, 'm').format('hh:00 A');
        this.availableFilterTimes = help_service_1.HelpService.getListHoursInDay().map(function (time) {
            return time.name;
        });
        this.getCourtsFromServer();
    };
    ReceivedBranchCourtsComponent.prototype.ngAfterViewInit = function () {
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
    ReceivedBranchCourtsComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if ('branch' === propName || 'availableSports' === propName) {
                this.filterSport = this.availableSports[0];
                this.getCourtsFromServer();
            }
        }
    };
    ReceivedBranchCourtsComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedBranchCourtsComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                this.handleReceiveCourts({ lstResult: [] });
                break;
            case 'SEARCH_AVAILABLE_FIELD_ON_TIME_AND_COURT_SUCCESS':
                this.receivedCourts = undefined;
                this.handleReceiveCourts(message.data);
        }
    };
    ReceivedBranchCourtsComponent.prototype.handleReceiveCourts = function (data) {
        if (data.lstResult.length === 0) {
            this.receivedCourts = [];
            this.nonResult.emit();
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
            this.haveResult.emit();
        }
        this.loadingResultData = false;
    };
    ReceivedBranchCourtsComponent.prototype.sendMessageToGetAvailableCourts = function () {
        if (typeof this.filterSport === 'undefined')
            return;
        var locationTime = this.filterDate + ' ' + this.filterTime;
        var searchingTime = moment.tz(locationTime, 'YYYY-MM-DD H:mm A', this.branch.timeZone).utc().valueOf();
        var apiPackage = new SearchAvailableFieldOnTimeAndCourt_1.SearchAvailableFieldOnTimeAndCourt()
            .setTime(searchingTime)
            .setSport(this.filterSport)
            .setCourt(this.branch);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedBranchCourtsComponent.prototype.getCourtsFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableCourts();
    };
    ReceivedBranchCourtsComponent.prototype.filterSportsChanged = function (sport, value) {
        if (value) {
            this.filterSport = sport;
            this.getCourtsFromServer();
        }
        else {
            this.filterSport = undefined;
        }
    };
    ReceivedBranchCourtsComponent.prototype.filterTimeChanged = function (value) {
        this.filterTime = value;
        this.getCourtsFromServer();
    };
    ReceivedBranchCourtsComponent.prototype.onBookingField = function (field, time) {
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
    ], ReceivedBranchCourtsComponent.prototype, "availableSports", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedBranchCourtsComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Court_1.Court)
    ], ReceivedBranchCourtsComponent.prototype, "branch", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReceivedBranchCourtsComponent.prototype, "nonResult", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReceivedBranchCourtsComponent.prototype, "haveResult", void 0);
    ReceivedBranchCourtsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-branch-courts',
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-sm-4\">             <div class=\"filter no-select\">                 <div class=\"time-group\">                     <div class=\"title color-red\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Time</div>                     <div class=\"col-md-12 no-padding\">                         <input type=\"text\" class=\"form-group form-control\" id=\"court-daterange\"/>                         <i class=\"glyphicon glyphicon-calendar fa fa-calendar color-red\"                            onclick=\"document.querySelector('#court-daterange').click()\"></i>                     </div>                     <div class=\"col-md-12 no-padding\">                         <select class=\"form-control frk-input animated fadeIn\" title=\"Time\"                                 [disabled]=\"!availableFilterTimes\"                                 (change)=\"filterTimeChanged($event.target.value)\">                             <option *ngIf=\"!availableFilterTimes\" disabled selected>loading...</option>                             <option *ngFor=\"let time of availableFilterTimes\"                                     [value]=\"time\" [selected]=\"time === filterTime\">{{ time }}</option>                         </select>                     </div>                 </div>                 <div class=\"multiple-checkbox\">                     <div class=\"title color-red\"><i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> Sports</div>                     <label *ngFor=\"let sport of availableSports\">                         <input type=\"radio\" name=\"sport\" [checked]=\"sport.sportId === filterSport.sportId\"                                (change)=\"filterSportsChanged(sport, $event.target.checked)\"/>                         <span>{{ sport.sportName }}</span>                     </label>                 </div>             </div>         </div>         <div class=\"col-sm-8\">             <div *ngIf=\"loadingResultData\">                 <frk-loading-circle></frk-loading-circle>             </div>             <div class=\"list-group\" *ngIf=\"receivedCourts && receivedCourts.length\">                 <div *ngFor=\"let receivedCourt of receivedCourts; let i = index\"                      class=\"list-group-item col-sm-6 court-detail no-margin\"                      [class.hide]=\"loadingResultData\">                     <div class=\"col-sm-12\">                         <div class=\"court-info\">                             <div class=\"court-info-line\">                                 <div class=\"col-sm-12 no-padding text-left\">                                     {{ i + 1 }}.                                     <span class=\"court-opening-our\" data-toggle=\"tooltip\"                                           title=\"Opening hour: from {{ receivedCourt.field.openedTime }} to {{ receivedCourt.field.closedTime }}\">                                         Opening hour:                                         {{ receivedCourt.field.openedTime }} - {{ receivedCourt.field.closedTime }}                                     </span>                                 </div>                                 <div class=\"col-sm-12 no-padding text-left\">                                     <span class=\"court-fieldCode\" data-toggle=\"tooltip\"                                           title=\"Field: {{ receivedCourt.field.fieldCode }}\">                                         <i class=\"fa fa-server\" aria-hidden=\"true\"></i> Field number:                                         {{ receivedCourt.field.fieldCode }}                                     </span>                                 </div>                                 <div class=\"col-sm-12 no-padding text-left\">                                     <span class=\"court-fieldSize\" data-toggle=\"tooltip\"                                           title=\"Size: {{ receivedCourt.field.fieldSize }} players/team\">                                         <img class=\"stadium\" src=\"/assets/images/icons/stadium-24.png\"> Field size:                                         {{ receivedCourt.field.fieldSize }}                                     </span>                                 </div>                             </div>                         </div>                     </div>                     <div class=\"col-sm-12\">                         <div class=\"court-info-line field-opening-hour\">                             <button *ngFor=\"let time of receivedCourt.availableTimes\"                                     class=\"btn btn-sm btn-opening\" type=\"button\"                                     (click)=\"onBookingField(receivedCourt.field, time)\">                                 {{ time.label }}                             </button>                         </div>                     </div>                 </div>             </div>             <div *ngIf=\"!loadingResultData && (receivedCourts && !receivedCourts.length)\"                  class=\"courts-result\">                 <div class=\"result-container\">                     <div class=\"no-result col-xs-12\">                         There are no results found.                     </div>                 </div>             </div>         </div>     </div> </div>  <div class=\"modal fade\" id=\"bookingFieldModal\" tabindex=\"-1\"      role=\"dialog\" aria-labelledby=\"myModalLabel\">     <div *ngIf=\"!selectedField || !selectedFieldTime\">         <frk-loading-circle></frk-loading-circle>     </div>     <sd-booking-field-ticket             *ngIf=\"selectedField && selectedFieldTime\"             [field]=\"selectedField\"             [bookingDate]=\"selectedFieldDate\"             [bookingTime]=\"selectedFieldTime\"     ></sd-booking-field-ticket> </div>",
            styles: [".court-detail{padding-left:0;padding-right:0}.court-detail.list-group-item{border-radius:0;border-left-width:0;border-right-width:0;border-top-width:0;color:#787878}.court-detail .court-image{padding-left:0}.court-detail .list-group-item,.court-detail .thumbnail{border:none}.court-detail .list-group-item:first-child{margin:0}.court-detail .court-address,.court-detail .court-info{line-height:1.8;font-size:90%;text-align:center}.court-fieldSize img{width:16px;vertical-align:initial}.field-opening-hour .btn-opening{width:calc((100% - 1.4vmin) / 4);margin:.2vmin;background:#da3743;color:#fcfcfc;height:auto}.field-opening-hour .btn-opening.btn-auto-with{width:auto}.field-opening-hour .btn-opening.selected{background:#00c853;border-color:#00c853;font-weight:700}.field-opening-hour .btn-opening:not(.selected):hover{background:#e06770;-webkit-animation:none;animation:none}.field-opening-hour .btn-opening:first-child{margin-left:0}.filter{border-right:1px solid #ddd;padding:0 15px 0 0;float:left;width:100%}.multiple-checkbox,.time-group{border-bottom:1px solid #ddd;padding:10px 0;float:left}.multiple-checkbox .title,.time-group .title{font-weight:700;padding:10px 0}.time-group #court-daterange~i{position:absolute;bottom:24px;right:10px;top:auto;cursor:pointer}.multiple-checkbox label{width:100%;margin:0;padding:5px 0;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.multiple-checkbox label input,.multiple-checkbox label span{vertical-align:middle;margin:0;height:16px}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReceivedBranchCourtsComponent);
    return ReceivedBranchCourtsComponent;
}());
exports.ReceivedBranchCourtsComponent = ReceivedBranchCourtsComponent;
