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
var ClassSchedule_1 = require('../../../models/ClassSchedule');
var TrainingClass_1 = require('../../../models/TrainingClass');
var BookGuestTicketForClass_1 = require('../../../packages/BookGuestTicketForClass');
var BookingClassComponent = (function () {
    function BookingClassComponent(messageService) {
        this.messageService = messageService;
    }
    BookingClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.availableTimes = help_service_1.HelpService.getListHoursInDay().map(function (time) { return time.name; });
        this.bookingTicketDate = moment().add(1, 'day').format('YYYY-MM-DD');
        this.bookingTicketTime = '7:00 AM';
        this.bookingTicketQuantity = 0;
        this.validDates = this.getValidDates();
        this.isLoading = false;
        this.submitState = 0;
    };
    BookingClassComponent.prototype.ngOnDestroy = function () {
        this.classSchedule = null;
        this.trainingClass = null;
        this.validDates = null;
    };
    BookingClassComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        for (var propName in changes) {
            if ('trainingClass' === propName || 'classSchedule' === propName) {
                this.isBookingSuccess = null;
                this.bookingErrorMessage = null;
                this.bookingTicketDate = moment().add(1, 'day').format('YYYY-MM-DD');
                this.bookingTicketTime = '7:00 AM';
                this.bookingTicketQuantity = 1;
                this.validDates = this.getValidDates();
                this.isLoading = true;
                setTimeout(function () {
                    _this.isLoading = false;
                    jQuery('#class-ticket-daterange').daterangepicker({
                        singleDatePicker: true,
                        minDate: moment(_this.trainingClass.from).format('YYYY-MM-DD'),
                        maxDate: moment(_this.trainingClass.to).format('YYYY-MM-DD'),
                        locale: { format: 'YYYY-MM-DD' },
                        isInvalidDate: function (date) { return _this.validDates.indexOf(date.format('dddd')) < 0; }
                    }, function (pickedDate) {
                        _this.bookingTicketDate = pickedDate.format('YYYY-MM-DD');
                        _this.submitState = 1;
                    });
                }, 300);
            }
        }
    };
    BookingClassComponent.prototype.getValidDates = function () {
        var validDatesOfWeek = [];
        if (this.classSchedule.monday !== null)
            validDatesOfWeek.push('Monday');
        if (this.classSchedule.tuesday !== null)
            validDatesOfWeek.push('Tuesday');
        if (this.classSchedule.wednesday !== null)
            validDatesOfWeek.push('Wednesday');
        if (this.classSchedule.thursday !== null)
            validDatesOfWeek.push('Thursday');
        if (this.classSchedule.friday !== null)
            validDatesOfWeek.push('Friday');
        if (this.classSchedule.saturday !== null)
            validDatesOfWeek.push('Saturday');
        if (this.classSchedule.sunday !== null)
            validDatesOfWeek.push('Sunday');
        return validDatesOfWeek;
    };
    BookingClassComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_ERROR':
                this.submitState = 1;
                this.isBookingSuccess = false;
                this.bookingErrorMessage = message.data.message;
                break;
            case 'BOOK_GUEST_TICKET_FOR_CLASS_SUCCESS':
                this.isBookingSuccess = true;
                this.bookingErrorMessage = null;
                break;
            default:
        }
    };
    BookingClassComponent.prototype.sendMessageToBookATicket = function () {
        var fullTime = this.bookingTicketDate + ' ' + this.bookingTicketTime;
        var searchingTime = moment.tz(fullTime, 'YYYY-MM-DD H:mm A', this.trainingClass.branch.timeZone).utc().valueOf();
        var apiPackage = new BookGuestTicketForClass_1.BookGuestTicketForClass()
            .setTrainingClass(this.trainingClass)
            .setTime(searchingTime)
            .setQuantity(this.bookingTicketQuantity);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    BookingClassComponent.prototype.onBookingTicket = function () {
        if (typeof this.trainingClass === 'undefined')
            return;
        if (typeof this.bookingTicketDate === 'undefined')
            return;
        if (typeof this.bookingTicketTime === 'undefined')
            return;
        if (typeof this.bookingTicketQuantity === 'undefined')
            return;
        if (typeof this.bookingTicketQuantity === 'undefined')
            return;
        this.isBookingSuccess = false;
        this.submitState = 2;
        this.sendMessageToBookATicket();
    };
    BookingClassComponent.prototype.onChangeQuantity = function (value) {
        if (value === null || value <= 0) {
            this.submitState = 0;
        }
        else {
            this.submitState = 1;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ClassSchedule_1.ClassSchedule)
    ], BookingClassComponent.prototype, "classSchedule", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', TrainingClass_1.TrainingClass)
    ], BookingClassComponent.prototype, "trainingClass", void 0);
    BookingClassComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-booking-class-ticket',
            template: "<div class=\"modal-dialog\" role=\"document\" *ngIf=\"!isLoading\">   <div class=\"modal-content\">     <div class=\"modal-header\">       <div *ngIf=\"bookingErrorMessage\" class=\"alert alert-danger\" role=\"alert\">         <strong>Error!</strong> {{ bookingErrorMessage }}       </div>       <div *ngIf=\"isBookingSuccess\" class=\"alert alert-success\" role=\"alert\">         <strong>Success!</strong> You booked a ticket successfully.       </div>       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">         <span aria-hidden=\"true\">&times;</span>       </button>       <h4 class=\"modal-title\" id=\"myModalLabel\">Booking Class Ticket</h4>     </div>     <div class=\"modal-body field-information\">       <div class=\"court-name\">{{ trainingClass.branch.name }}</div>       <div class=\"court-rating\">             <span class=\"countRating\" data-toggle=\"tooltip\"                   title=\"{{ trainingClass.branch.rating }} stars of {{ trainingClass.branch.countRating }} rated\">               <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"                  [class.fa-star]=\"star <= trainingClass.branch.rating\"                  [class.fa-star-o]=\"star > trainingClass.branch.rating\"></i>               {{ trainingClass.branch.countRating }} <i class=\"fa fa-user\" aria-hidden=\"true\"></i>             </span>       </div>       <div class=\"court-opening-hour\" data-toggle=\"tooltip\"            title=\"Class name: {{ trainingClass.className }}\">         Class: {{ trainingClass.className }}       </div>       <div class=\"court-opening-hour \" data-toggle=\"tooltip\"            title=\"Class time: from {{ trainingClass.from }}                to {{ trainingClass.to }}\">         <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>         {{ trainingClass.from }} - {{ trainingClass.to }}       </div>       <div class=\"court-fieldCode\" data-toggle=\"tooltip\"            title=\"Class code: {{ trainingClass.classCode }}\">         <i class=\"fa fa-server\" aria-hidden=\"true\"></i>         {{ trainingClass.classCode }}       </div>       <div class=\"court-fieldCode\" data-toggle=\"tooltip\"            title=\"Day price: {{ trainingClass.dayPrice }}\">         <i class=\"fa fa-usd\" aria-hidden=\"true\"></i> {{ trainingClass.dayPrice }}       </div>       <div class=\"court-fieldCode\" data-toggle=\"tooltip\"            title=\"Whole class price: {{ trainingClass.wholeClassPrice }}\">         <i class=\"fa fa-usd\" aria-hidden=\"true\"></i> {{ trainingClass.wholeClassPrice }}       </div>       <div class=\"court-address\" data-toggle=\"tooltip\"            title=\"Address: {{ trainingClass.branch.address }}\">         <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>         {{ trainingClass.branch.address }}       </div>       <div class=\"input-label\">         <div>Date:</div>         <div>Quantity:</div>       </div>       <div class=\"input-group\">         <div class=\"form-group form-control frk-input datetime-picker animated\">           <input type=\"text\" class=\"form-group form-control\" id=\"class-ticket-daterange\"/>           <i class=\"glyphicon glyphicon-calendar fa fa-calendar\"              onclick=\"document.querySelector('#class-ticket-daterange').click()\"></i>         </div>         <input type=\"number\" class=\"form-control frk-input search-keyword\"                placeholder=\"Quantity\" min=\"1\" (ngModelChange)=\"onChangeQuantity($event)\"                [(ngModel)]=\"bookingTicketQuantity\"/>       </div>     </div>     <div class=\"modal-footer\" *ngIf=\"!isBookingSuccess\">       <button type=\"button\" class=\"btn btn-danger\"               *ngIf=\"submitState !== 0\"               (click)=\"onBookingTicket($event)\">         {{ submitState === 1 ? 'Join a class' : 'Joining' }}       </button>       <button type=\"button\" class=\"btn btn-danger\" disabled *ngIf=\"submitState === 0\">         Join a class       </button>     </div>   </div> </div>",
            styles: [".field-information{height:100%;padding:2vmin;line-height:2;font-size:120%}.field-information .court-name{width:100%;line-height:1.5;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.field-information img{width:1.9vmin;vertical-align:initial}.field-information .court-rating{color:#787878}.field-information .court-rating i[class*=fa-star]{color:#f9b124}.field-information .court-rating i[class*=fa-user]{font-size:90%;vertical-align:text-top}.field-information .court-fieldCode,.field-information .court-fieldSize,.field-information .court-opening-hour,.field-information .court-phone{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;color:#787878;margin-right:1vmin}.field-information .court-address{display:inline-block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400;color:#787878}.field-information .book{float:right;cursor:pointer;font-weight:400}.input-group{width:100%;background-color:#f6f6f6;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.input-group .form-control.frk-btn,.input-group .form-control.frk-input{border-right:1px solid #ddd;text-overflow:ellipsis;font-size:1.9vmin;box-shadow:none;border-radius:0;height:6vmin;float:left}.input-group .form-control.frk-input{width:50%}.datetime-picker{padding:0;font-size:inherit}.datetime-picker #datetime-picker-booking-class{height:100%}.datetime-picker #datetime-picker-booking-class.input-group{box-shadow:none}.datetime-picker #datetime-picker-booking-class input{padding:5px 10px;border:0;font-size:inherit;line-height:calc(6vmin - 10px)}.datetime-picker #datetime-picker-booking-class span.input-group-addon{height:100%;padding:5px 10px}.input-label{width:100%}.input-label>div{width:50%;text-align:left;padding:1vmin;float:left}#class-ticket-daterange{width:100%;border:none;height:100%;margin:0}#class-ticket-daterange~i{position:absolute;bottom:24px;right:10px;top:auto;cursor:pointer}"],
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], BookingClassComponent);
    return BookingClassComponent;
}());
exports.BookingClassComponent = BookingClassComponent;
