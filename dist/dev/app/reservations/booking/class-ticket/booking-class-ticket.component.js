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
            templateUrl: 'booking-class-ticket.component.html',
            styleUrls: ['booking-class-ticket.component.css'],
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], BookingClassComponent);
    return BookingClassComponent;
}());
exports.BookingClassComponent = BookingClassComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYm9va2luZy9jbGFzcy10aWNrZXQvYm9va2luZy1jbGFzcy10aWNrZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0QsZUFBZSxDQUFDLENBQUE7QUFLL0UsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0QsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFNbkUsOEJBQThCLCtCQUErQixDQUFDLENBQUE7QUFDOUQsOEJBQThCLCtCQUErQixDQUFDLENBQUE7QUFLOUQsd0NBQXdDLDJDQUEyQyxDQUFDLENBQUE7QUFTcEY7SUFrQkUsK0JBQ1ksY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRTFDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBRTFGLElBQUksQ0FBQyxjQUFjLEdBQUcsMEJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVMsSUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FB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QUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7SUF6SEQ7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBVlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNsRCxDQUFDOzs2QkFBQTtJQThIRiw0QkFBQztBQUFELENBNUhBLEFBNEhDLElBQUE7QUE1SFksNkJBQXFCLHdCQTRIakMsQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL2Jvb2tpbmcvY2xhc3MtdGlja2V0L2Jvb2tpbmctY2xhc3MtdGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbXBvcnQgc2VydmljZXNcbiAqL1xuaW1wb3J0IHsgSGVscFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9oZWxwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIEltcG9ydCBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9NZXNzYWdlJztcbmltcG9ydCB7IENsYXNzU2NoZWR1bGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQ2xhc3NTY2hlZHVsZSc7XG5pbXBvcnQgeyBUcmFpbmluZ0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1RyYWluaW5nQ2xhc3MnO1xuXG4vKipcbiAqIEltcG9ydCBwYWNrYWdlc1xuICovXG5pbXBvcnQgeyBCb29rR3Vlc3RUaWNrZXRGb3JDbGFzcyB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL0Jvb2tHdWVzdFRpY2tldEZvckNsYXNzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYm9va2luZy1jbGFzcy10aWNrZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2Jvb2tpbmctY2xhc3MtdGlja2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Jvb2tpbmctY2xhc3MtdGlja2V0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBCb29raW5nQ2xhc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBjbGFzc1NjaGVkdWxlOiBDbGFzc1NjaGVkdWxlO1xuICBASW5wdXQoKSB0cmFpbmluZ0NsYXNzOiBUcmFpbmluZ0NsYXNzO1xuXG4gIHByb3RlY3RlZCBhdmFpbGFibGVUaW1lczogc3RyaW5nW107XG4gIHByb3RlY3RlZCBib29raW5nVGlja2V0RGF0ZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgYm9va2luZ1RpY2tldFRpbWU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGJvb2tpbmdUaWNrZXRRdWFudGl0eTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBpc0Jvb2tpbmdTdWNjZXNzOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgYm9va2luZ0Vycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBzdWJtaXRTdGF0ZTogbnVtYmVyOyAvLyBPOiBub3QgcmVhZHksIDE6IHJlYWR5LCAyOiBzdWJtaXRlZFxuXG4gIHByb3RlY3RlZCB2YWxpZERhdGVzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG5cbiAgICB0aGlzLmF2YWlsYWJsZVRpbWVzID0gSGVscFNlcnZpY2UuZ2V0TGlzdEhvdXJzSW5EYXkoKS5tYXAoKHRpbWU6IGFueSkgPT4geyByZXR1cm4gdGltZS5uYW1lOyB9KTtcbiAgICB0aGlzLmJvb2tpbmdUaWNrZXREYXRlID0gbW9tZW50KCkuYWRkKDEsICdkYXknKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLmJvb2tpbmdUaWNrZXRUaW1lID0gJzc6MDAgQU0nO1xuICAgIHRoaXMuYm9va2luZ1RpY2tldFF1YW50aXR5ID0gMDtcbiAgICB0aGlzLnZhbGlkRGF0ZXMgPSB0aGlzLmdldFZhbGlkRGF0ZXMoKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3VibWl0U3RhdGUgPSAwO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICB0aGlzLmNsYXNzU2NoZWR1bGUgPSBudWxsO1xuICAgIHRoaXMudHJhaW5pbmdDbGFzcyA9IG51bGw7XG4gICAgdGhpcy52YWxpZERhdGVzID0gbnVsbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IGFueSB7XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKCd0cmFpbmluZ0NsYXNzJyA9PT0gcHJvcE5hbWUgfHwgJ2NsYXNzU2NoZWR1bGUnID09PSBwcm9wTmFtZSkge1xuICAgICAgICB0aGlzLmlzQm9va2luZ1N1Y2Nlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLmJvb2tpbmdFcnJvck1lc3NhZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLmJvb2tpbmdUaWNrZXREYXRlID0gbW9tZW50KCkuYWRkKDEsICdkYXknKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgdGhpcy5ib29raW5nVGlja2V0VGltZSA9ICc3OjAwIEFNJztcbiAgICAgICAgdGhpcy5ib29raW5nVGlja2V0UXVhbnRpdHkgPSAxO1xuICAgICAgICB0aGlzLnZhbGlkRGF0ZXMgPSB0aGlzLmdldFZhbGlkRGF0ZXMoKTtcblxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgalF1ZXJ5KCcjY2xhc3MtdGlja2V0LWRhdGVyYW5nZScpLmRhdGVyYW5nZXBpY2tlcih7XG4gICAgICAgICAgICBzaW5nbGVEYXRlUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgbWluRGF0ZTogbW9tZW50KHRoaXMudHJhaW5pbmdDbGFzcy5mcm9tKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgICAgICAgIG1heERhdGU6IG1vbWVudCh0aGlzLnRyYWluaW5nQ2xhc3MudG8pLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgICAgbG9jYWxlOiB7Zm9ybWF0OiAnWVlZWS1NTS1ERCd9LFxuICAgICAgICAgICAgaXNJbnZhbGlkRGF0ZTogKGRhdGU6IGFueSkgPT4gdGhpcy52YWxpZERhdGVzLmluZGV4T2YoZGF0ZS5mb3JtYXQoJ2RkZGQnKSkgPCAwXG4gICAgICAgICAgfSwgKHBpY2tlZERhdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib29raW5nVGlja2V0RGF0ZSA9IHBpY2tlZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdFN0YXRlID0gMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRWYWxpZERhdGVzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgdmFsaWREYXRlc09mV2Vlazogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAodGhpcy5jbGFzc1NjaGVkdWxlLm1vbmRheSAhPT0gbnVsbCkgdmFsaWREYXRlc09mV2Vlay5wdXNoKCdNb25kYXknKTtcbiAgICBpZiAodGhpcy5jbGFzc1NjaGVkdWxlLnR1ZXNkYXkgIT09IG51bGwpIHZhbGlkRGF0ZXNPZldlZWsucHVzaCgnVHVlc2RheScpO1xuICAgIGlmICh0aGlzLmNsYXNzU2NoZWR1bGUud2VkbmVzZGF5ICE9PSBudWxsKSB2YWxpZERhdGVzT2ZXZWVrLnB1c2goJ1dlZG5lc2RheScpO1xuICAgIGlmICh0aGlzLmNsYXNzU2NoZWR1bGUudGh1cnNkYXkgIT09IG51bGwpIHZhbGlkRGF0ZXNPZldlZWsucHVzaCgnVGh1cnNkYXknKTtcbiAgICBpZiAodGhpcy5jbGFzc1NjaGVkdWxlLmZyaWRheSAhPT0gbnVsbCkgdmFsaWREYXRlc09mV2Vlay5wdXNoKCdGcmlkYXknKTtcbiAgICBpZiAodGhpcy5jbGFzc1NjaGVkdWxlLnNhdHVyZGF5ICE9PSBudWxsKSB2YWxpZERhdGVzT2ZXZWVrLnB1c2goJ1NhdHVyZGF5Jyk7XG4gICAgaWYgKHRoaXMuY2xhc3NTY2hlZHVsZS5zdW5kYXkgIT09IG51bGwpIHZhbGlkRGF0ZXNPZldlZWsucHVzaCgnU3VuZGF5Jyk7XG4gICAgcmV0dXJuIHZhbGlkRGF0ZXNPZldlZWs7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ1JFUVVFU1RfRVJST1InOlxuICAgICAgICB0aGlzLnN1Ym1pdFN0YXRlID0gMTtcbiAgICAgICAgdGhpcy5pc0Jvb2tpbmdTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm9va2luZ0Vycm9yTWVzc2FnZSA9IG1lc3NhZ2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0JPT0tfR1VFU1RfVElDS0VUX0ZPUl9DTEFTU19TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5pc0Jvb2tpbmdTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib29raW5nRXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9Cb29rQVRpY2tldCgpOiB2b2lkIHtcbiAgICBsZXQgZnVsbFRpbWU6IHN0cmluZyA9IHRoaXMuYm9va2luZ1RpY2tldERhdGUgKyAnICcgKyB0aGlzLmJvb2tpbmdUaWNrZXRUaW1lO1xuICAgIGxldCBzZWFyY2hpbmdUaW1lOiBudW1iZXIgPSBtb21lbnQudHooZnVsbFRpbWUsICdZWVlZLU1NLUREIEg6bW0gQScsIHRoaXMudHJhaW5pbmdDbGFzcy5icmFuY2gudGltZVpvbmUpLnV0YygpLnZhbHVlT2YoKTtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBCb29rR3Vlc3RUaWNrZXRGb3JDbGFzcygpXG4gICAgICAgIC5zZXRUcmFpbmluZ0NsYXNzKHRoaXMudHJhaW5pbmdDbGFzcylcbiAgICAgICAgLnNldFRpbWUoc2VhcmNoaW5nVGltZSlcbiAgICAgICAgLnNldFF1YW50aXR5KHRoaXMuYm9va2luZ1RpY2tldFF1YW50aXR5KTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIG9uQm9va2luZ1RpY2tldCgpOiBhbnkge1xuICAgIGlmICh0eXBlb2YgdGhpcy50cmFpbmluZ0NsYXNzID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgdGhpcy5ib29raW5nVGlja2V0RGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRoaXMuYm9va2luZ1RpY2tldFRpbWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB0aGlzLmJvb2tpbmdUaWNrZXRRdWFudGl0eSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRoaXMuYm9va2luZ1RpY2tldFF1YW50aXR5ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIHRoaXMuaXNCb29raW5nU3VjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMuc3VibWl0U3RhdGUgPSAyO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0Jvb2tBVGlja2V0KCk7XG4gIH1cblxuICBvbkNoYW5nZVF1YW50aXR5KHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA8PSAwKSB7XG4gICAgICB0aGlzLnN1Ym1pdFN0YXRlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRTdGF0ZSA9IDE7XG4gICAgfVxuICB9XG59XG4iXX0=
