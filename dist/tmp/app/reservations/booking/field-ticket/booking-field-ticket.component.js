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
var help_service_1 = require('../../../services/help.service');
var message_service_1 = require('../../../services/message.service');
var authentication_service_1 = require('../../../services/authentication.service');
var Message_1 = require('../../../models/Message');
var Facility_1 = require('../../../models/Facility');
var BookingFieldComponent = (function () {
    function BookingFieldComponent(authService, messageService) {
        this.authService = authService;
        this.messageService = messageService;
    }
    BookingFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    BookingFieldComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if ('bookingTime' === propName || 'field' === propName) {
                this.isBookingSuccess = null;
                this.bookingErrorMessage = null;
                var fieldTimezoneOffset = help_service_1.HelpService.getTimezoneOffset(this.field.branch.timeZone);
                this.bookingTimeLabel = help_service_1.HelpService.convertDoubleTimeToString(this.bookingTime.value + fieldTimezoneOffset);
                var selectedTime = moment(this.bookingTimeLabel, 'HH:mm');
                var closedTime = moment(this.field.closedTime, 'HH:mm');
                var diffTime = closedTime.diff(selectedTime, 'hours', true);
                this.durationTimes = [];
                for (var durationTimeValue = 0.5; durationTimeValue <= diffTime; durationTimeValue += 0.5) {
                    if (durationTimeValue === 0.5)
                        this.durationTimes.push({ label: '30 minutes', value: durationTimeValue });
                    else if (durationTimeValue === 1)
                        this.durationTimes.push({ label: '1 hour', value: durationTimeValue });
                    else
                        this.durationTimes.push({ label: durationTimeValue + ' hours', value: durationTimeValue });
                }
                if (this.durationTimes.length > 0)
                    this.timeEnd = this.durationTimes[0].value;
            }
        }
    };
    BookingFieldComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_ERROR':
                this.isBookingSuccess = false;
                this.bookingErrorMessage = message.data.message;
                break;
            case 'CREATE_BOOKING_SUCCESS':
                this.isBookingSuccess = true;
                this.bookingErrorMessage = null;
                break;
            default:
                break;
        }
    };
    BookingFieldComponent.prototype.sendMessageToBookField = function () {
        var timeOffset = help_service_1.HelpService.getTimezoneOffset(this.field.branch.timeZone);
        var startTime = help_service_1.HelpService.convertStringTimeToDouble(help_service_1.HelpService.getTimeLocalToUTC(Number(this.bookingTime.value), timeOffset));
        var endTime = help_service_1.HelpService.convertStringTimeToDouble(help_service_1.HelpService.getTimeLocalToUTC(Number(this.bookingTime.value) + Number(this.timeEnd), timeOffset));
        var apiPackage = new BookData(this.authService.getAuthenticatedUser().userId, this.field.fieldId, startTime, endTime, moment(this.bookingDate).valueOf());
        this.messageService.sendMessage(new Message_1.Message('CREATE_BOOKING', apiPackage));
    };
    BookingFieldComponent.prototype.submitBooking = function () {
        if (!this.timeEnd)
            return;
        if (typeof this.field === 'undefined')
            return;
        this.sendMessageToBookField();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Facility_1.Facility)
    ], BookingFieldComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BookingFieldComponent.prototype, "bookingDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BookingFieldComponent.prototype, "bookingTime", void 0);
    BookingFieldComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-booking-field-ticket',
            template: "<div class=\"modal-dialog\" role=\"document\">   <div class=\"modal-content\">     <div class=\"modal-header\">       <div *ngIf=\"bookingErrorMessage\" class=\"alert alert-danger\" role=\"alert\">         <strong>Error!</strong> {{ bookingErrorMessage }}       </div>       <div *ngIf=\"isBookingSuccess\" class=\"alert alert-success\" role=\"alert\">         <strong>Success!</strong> You booked a ticket successfully.       </div>       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">         <span aria-hidden=\"true\">&times;</span>       </button>       <h4 class=\"modal-title\" id=\"myModalLabel\">Booking Field Ticket</h4>     </div>     <div class=\"modal-body field-information\">       <div class=\"court-name\">{{ field.branch.name }}</div>       <div class=\"court-rating\">             <span class=\"countRating\" data-toggle=\"tooltip\"                   title=\"{{ field.branch.rating }} stars of {{ field.branch.countRating }} rated\">               <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"                  [class.fa-star]=\"star <= field.branch.rating\"                  [class.fa-star-o]=\"star > field.branch.rating\"></i>               {{ field.branch.countRating }} <i class=\"fa fa-user\" aria-hidden=\"true\"></i>             </span>       </div>       <div class=\"court-opening-hour \" data-toggle=\"tooltip\"            title=\"Opening hour: from {{ field.openedTime }}                to {{ field.closedTime }}\">         <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>         {{ field.openedTime }} - {{ field.closedTime }}       </div>       <div class=\"court-phone\" data-toggle=\"tooltip\"            title=\"Phone number: {{ field.branch.phoneNumber }}\">         <i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i>         {{ field.branch.phoneNumber }}       </div>       <div class=\"court-fieldCode\" data-toggle=\"tooltip\"            title=\"Field: {{ field.fieldCode }}\">         <i class=\"fa fa-server\" aria-hidden=\"true\"></i>         {{ field.fieldCode }}       </div>       <div class=\"court-fieldSize\" data-toggle=\"tooltip\"            title=\"Size: {{ field.fieldSize }} players/team\">         <img class=\"stadium\" src=\"/assets/images/icons/stadium-24.png\">         {{ field.fieldSize }}       </div>       <div class=\"court-address\" data-toggle=\"tooltip\"            title=\"Address: {{ field.branch.address }}\">         <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>         {{ field.branch.address }}       </div>       <div class=\"input-label\">         <div>Start at:</div>         <div>Duration:</div>       </div>       <div class=\"input-group\">         <input type=\"text\" class=\"form-control frk-input search-keyword\"                value=\"{{ bookingTime.label }}\" disabled/>         <select class=\"form-control frk-input animated fadeIn\" title=\"Time\"                 [(ngModel)]=\"timeEnd\" [disabled]=\"!durationTimes\">           <option *ngIf=\"!durationTimes\" disabled selected>loading...</option>           <option *ngFor=\"let time of durationTimes\" [value]=\"time.value\">{{ time.label }}</option>         </select>       </div>     </div>     <div class=\"modal-footer\" *ngIf=\"!isBookingSuccess\">       <button type=\"button\" class=\"btn btn-danger\" (click)=\"submitBooking($event)\">         Book a court       </button>     </div>   </div> </div>",
            styles: [".field-information{height:100%;padding:2vmin;line-height:2;font-size:120%}.field-information .court-name{width:100%;line-height:1.5;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.field-information img{width:1.9vmin;vertical-align:initial}.field-information .court-rating{color:#787878}.field-information .court-rating i[class*=fa-star]{color:#f9b124}.field-information .court-rating i[class*=fa-user]{font-size:90%;vertical-align:text-top}.field-information .court-fieldCode,.field-information .court-fieldSize,.field-information .court-opening-hour,.field-information .court-phone{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;color:#787878;margin-right:1vmin}.field-information .court-address{display:inline-block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;color:#787878}.field-information .book{float:right;cursor:pointer;font-weight:400}.input-group{width:100%;background-color:#f6f6f6;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.input-group .form-control.frk-btn,.input-group .form-control.frk-input{border-right:1px solid #ddd;text-overflow:ellipsis;font-size:1.9vmin;box-shadow:none;border-radius:0;height:6vmin;float:left}.input-group .form-control.frk-input{width:50%}.input-label{width:100%}.input-label>div{width:50%;text-align:left;padding:1vmin;float:left}"],
            providers: [help_service_1.HelpService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], BookingFieldComponent);
    return BookingFieldComponent;
}());
exports.BookingFieldComponent = BookingFieldComponent;
var BookData = (function () {
    function BookData(userId, fieldId, startTime, endTime, date) {
        this.userId = userId;
        this.fieldId = fieldId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.date = date;
    }
    return BookData;
}());
exports.BookData = BookData;
