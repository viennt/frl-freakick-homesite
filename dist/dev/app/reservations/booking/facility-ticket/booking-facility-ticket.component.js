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
var Facility_1 = require('../../../models/Facility');
var CreateGuestTicketOnFacilities_1 = require('../../../packages/CreateGuestTicketOnFacilities');
var BookingFacilityComponent = (function () {
    function BookingFacilityComponent(messageService) {
        this.messageService = messageService;
    }
    BookingFacilityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.availableTimes = help_service_1.HelpService.getListHoursInDay().map(function (time) { return time.name; });
        this.bookingTicketDate = moment().add(1, 'day').format('YYYY-MM-DD');
        this.bookingTicketTime = '7:00 AM';
        this.bookingTicketQuantity = 0;
        this.submitState = 0;
    };
    BookingFacilityComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#facility-ticket-daterange').daterangepicker({
            singleDatePicker: true,
            minDate: moment().add(1, 'day').format('YYYY-MM-DD'),
            locale: { format: 'YYYY-MM-DD' }
        }, function (pickedDate) {
            _this.bookingTicketDate = pickedDate.format('YYYY-MM-DD');
            _this.submitState = 1;
        });
    };
    BookingFacilityComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if ('facility' === propName) {
                this.isBookingSuccess = null;
                this.bookingErrorMessage = null;
                this.bookingTicketDate = moment().add(1, 'day').format('YYYY-MM-DD');
                this.bookingTicketTime = '7:00 AM';
                this.bookingTicketQuantity = 1;
            }
        }
    };
    BookingFacilityComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_ERROR':
                this.submitState = 1;
                this.isBookingSuccess = false;
                this.bookingErrorMessage = message.data.message;
                break;
            case 'CREATE_GUEST_TICKET_ON_FACILITIES_SUCCESS':
                this.isBookingSuccess = true;
                this.bookingErrorMessage = null;
                break;
            default:
        }
    };
    BookingFacilityComponent.prototype.sendMessageToBookATicket = function () {
        var fullTime = this.bookingTicketDate + ' ' + this.bookingTicketTime;
        var searchingTime = moment.tz(fullTime, 'YYYY-MM-DD H:mm A', this.facility.branch.timeZone).utc().valueOf();
        var apiPackage = new CreateGuestTicketOnFacilities_1.CreateGuestTicketOnFacilities()
            .setFacility(this.facility)
            .setTime(searchingTime)
            .setQuantity(this.bookingTicketQuantity);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    BookingFacilityComponent.prototype.onBookingTicket = function () {
        if (typeof this.facility === 'undefined')
            return;
        if (typeof this.bookingTicketDate === 'undefined')
            return;
        if (typeof this.bookingTicketTime === 'undefined')
            return;
        if (typeof this.bookingTicketQuantity === 'undefined')
            return;
        this.isBookingSuccess = false;
        this.submitState = 2;
        this.sendMessageToBookATicket();
    };
    BookingFacilityComponent.prototype.onChangeQuantity = function (value) {
        if (value === null || value <= 0) {
            this.submitState = 0;
        }
        else {
            this.submitState = 1;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Facility_1.Facility)
    ], BookingFacilityComponent.prototype, "facility", void 0);
    BookingFacilityComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-booking-facility-ticket',
            templateUrl: 'booking-facility-ticket.component.html',
            styleUrls: ['booking-facility-ticket.component.css'],
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], BookingFacilityComponent);
    return BookingFacilityComponent;
}());
exports.BookingFacilityComponent = BookingFacilityComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYm9va2luZy9mYWNpbGl0eS10aWNrZXQvYm9va2luZy1mYWNpbGl0eS10aWNrZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFNTyxlQUFlLENBQUMsQ0FBQTtBQUt2Qiw2QkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3RCxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQU1uRSx5QkFBeUIsMEJBQTBCLENBQUMsQ0FBQTtBQUtwRCw4Q0FBOEMsaURBQWlELENBQUMsQ0FBQTtBQVFoRztJQWFFLGtDQUNZLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFL0MsMkNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUUxRixJQUFJLENBQUMsY0FBYyxHQUFHLDBCQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLElBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrREFBZSxHQUFmO1FBQUEsaUJBU0M7UUFSQyxNQUFNLENBQUMsNEJBQTRCLENBQUMs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TUFBTSxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixLQUFLLFdBQVcsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtREFBZ0IsR0FBaEIsVUFBaUIsS0FBVTtRQUN6QixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBekZEO1FBQUMsWUFBSyxFQUFFOzs4REFBQTtJQVBWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7U0FDckQsQ0FBQzs7Z0NBQUE7SUE0RkYsK0JBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLGdDQUF3QiwyQkEyRnBDLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9ib29raW5nL2ZhY2lsaXR5LXRpY2tldC9ib29raW5nLWZhY2lsaXR5LXRpY2tldC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbXBvcnQgc2VydmljZXNcbiAqL1xuaW1wb3J0IHsgSGVscFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9oZWxwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIEltcG9ydCBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9NZXNzYWdlJztcbmltcG9ydCB7IEZhY2lsaXR5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0ZhY2lsaXR5JztcblxuLyoqXG4gKiBJbXBvcnQgcGFja2FnZXNcbiAqL1xuaW1wb3J0IHsgQ3JlYXRlR3Vlc3RUaWNrZXRPbkZhY2lsaXRpZXMgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9DcmVhdGVHdWVzdFRpY2tldE9uRmFjaWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWJvb2tpbmctZmFjaWxpdHktdGlja2V0JyxcbiAgdGVtcGxhdGVVcmw6ICdib29raW5nLWZhY2lsaXR5LXRpY2tldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydib29raW5nLWZhY2lsaXR5LXRpY2tldC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJvb2tpbmdGYWNpbGl0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZmFjaWxpdHk6IEZhY2lsaXR5O1xuXG4gIHByb3RlY3RlZCBhdmFpbGFibGVUaW1lczogc3RyaW5nW107XG4gIHByb3RlY3RlZCBib29raW5nVGlja2V0RGF0ZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgYm9va2luZ1RpY2tldFRpbWU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGJvb2tpbmdUaWNrZXRRdWFudGl0eTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBpc0Jvb2tpbmdTdWNjZXNzOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgYm9va2luZ0Vycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBzdWJtaXRTdGF0ZTogbnVtYmVyOyAvLyBPOiBub3QgcmVhZHksIDE6IHJlYWR5LCAyOiBzdWJtaXRlZFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG5cbiAgICB0aGlzLmF2YWlsYWJsZVRpbWVzID0gSGVscFNlcnZpY2UuZ2V0TGlzdEhvdXJzSW5EYXkoKS5tYXAoKHRpbWU6IGFueSkgPT4geyByZXR1cm4gdGltZS5uYW1lOyB9KTtcbiAgICB0aGlzLmJvb2tpbmdUaWNrZXREYXRlID0gbW9tZW50KCkuYWRkKDEsICdkYXknKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLmJvb2tpbmdUaWNrZXRUaW1lID0gJzc6MDAgQU0nO1xuICAgIHRoaXMuYm9va2luZ1RpY2tldFF1YW50aXR5ID0gMDtcbiAgICB0aGlzLnN1Ym1pdFN0YXRlID0gMDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiBhbnkge1xuICAgIGpRdWVyeSgnI2ZhY2lsaXR5LXRpY2tldC1kYXRlcmFuZ2UnKS5kYXRlcmFuZ2VwaWNrZXIoe1xuICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogdHJ1ZSxcbiAgICAgIG1pbkRhdGU6IG1vbWVudCgpLmFkZCgxLCAnZGF5JykuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICBsb2NhbGU6IHtmb3JtYXQ6ICdZWVlZLU1NLUREJ31cbiAgICB9LCAocGlja2VkRGF0ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmJvb2tpbmdUaWNrZXREYXRlID0gcGlja2VkRGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIHRoaXMuc3VibWl0U3RhdGUgPSAxO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogYW55IHtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoJ2ZhY2lsaXR5JyA9PT0gcHJvcE5hbWUpIHtcbiAgICAgICAgdGhpcy5pc0Jvb2tpbmdTdWNjZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5ib29raW5nRXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5ib29raW5nVGlja2V0RGF0ZSA9IG1vbWVudCgpLmFkZCgxLCAnZGF5JykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIHRoaXMuYm9va2luZ1RpY2tldFRpbWUgPSAnNzowMCBBTSc7XG4gICAgICAgIHRoaXMuYm9va2luZ1RpY2tldFF1YW50aXR5ID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ1JFUVVFU1RfRVJST1InOlxuICAgICAgICB0aGlzLnN1Ym1pdFN0YXRlID0gMTtcbiAgICAgICAgdGhpcy5pc0Jvb2tpbmdTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm9va2luZ0Vycm9yTWVzc2FnZSA9IG1lc3NhZ2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NSRUFURV9HVUVTVF9USUNLRVRfT05fRkFDSUxJVElFU19TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5pc0Jvb2tpbmdTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib29raW5nRXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9Cb29rQVRpY2tldCgpOiB2b2lkIHtcbiAgICBsZXQgZnVsbFRpbWU6IHN0cmluZyA9IHRoaXMuYm9va2luZ1RpY2tldERhdGUgKyAnICcgKyB0aGlzLmJvb2tpbmdUaWNrZXRUaW1lO1xuICAgIGxldCBzZWFyY2hpbmdUaW1lOiBudW1iZXIgPSBtb21lbnQudHooZnVsbFRpbWUsICdZWVlZLU1NLUREIEg6bW0gQScsIHRoaXMuZmFjaWxpdHkuYnJhbmNoLnRpbWVab25lKS51dGMoKS52YWx1ZU9mKCk7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgQ3JlYXRlR3Vlc3RUaWNrZXRPbkZhY2lsaXRpZXMoKVxuICAgICAgICAuc2V0RmFjaWxpdHkodGhpcy5mYWNpbGl0eSlcbiAgICAgICAgLnNldFRpbWUoc2VhcmNoaW5nVGltZSlcbiAgICAgICAgLnNldFF1YW50aXR5KHRoaXMuYm9va2luZ1RpY2tldFF1YW50aXR5KTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIG9uQm9va2luZ1RpY2tldCgpOiBhbnkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5mYWNpbGl0eSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRoaXMuYm9va2luZ1RpY2tldERhdGUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB0aGlzLmJvb2tpbmdUaWNrZXRUaW1lID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgdGhpcy5ib29raW5nVGlja2V0UXVhbnRpdHkgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgdGhpcy5pc0Jvb2tpbmdTdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy5zdWJtaXRTdGF0ZSA9IDI7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvQm9va0FUaWNrZXQoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlUXVhbnRpdHkodmFsdWU6IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlIDw9IDApIHtcbiAgICAgIHRoaXMuc3VibWl0U3RhdGUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdFN0YXRlID0gMTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
