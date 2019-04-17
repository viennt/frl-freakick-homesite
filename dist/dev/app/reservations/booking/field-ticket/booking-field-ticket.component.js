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
            templateUrl: 'booking-field-ticket.component.html',
            styleUrls: ['booking-field-ticket.component.css'],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYm9va2luZy9maWVsZC10aWNrZXQvYm9va2luZy1maWVsZC10aWNrZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFFcEUsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0QsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsdUNBQXNDLDBDQUEwQyxDQUFDLENBQUE7QUFFakYsd0JBQXdCLHlCQUF5QixDQUFDLENBQUE7QUFDbEQseUJBQXlCLDBCQUEwQixDQUFDLENBQUE7QUFTcEQ7SUFZRSwrQkFDWSxXQUFrQyxFQUNsQyxjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRTFDLENBQUM7SUFLRCx3Q0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztnQkFFaEMsSUFBSSxtQkFBbUIsR0FBVywwQkFBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RixJQUFJ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LEdBQVAsT0FBTyxDQUFRO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNqQixDQUFDO0lBQ1AsZUFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksZ0JBQVEsV0FRcEIsQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL2Jvb2tpbmcvZmllbGQtdGlja2V0L2Jvb2tpbmctZmllbGQtdGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlbHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaGVscC5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL01lc3NhZ2UnO1xuaW1wb3J0IHsgRmFjaWxpdHkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvRmFjaWxpdHknO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ib29raW5nLWZpZWxkLXRpY2tldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm9va2luZy1maWVsZC10aWNrZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYm9va2luZy1maWVsZC10aWNrZXQuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtIZWxwU2VydmljZSwgQXV0aGVudGljYXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBCb29raW5nRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGZpZWxkOiBGYWNpbGl0eTtcbiAgQElucHV0KCkgYm9va2luZ0RhdGU6IG51bWJlcjtcbiAgQElucHV0KCkgYm9va2luZ1RpbWU6IHtsYWJlbDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyfTtcblxuICBwdWJsaWMgdGltZUVuZDogbnVtYmVyO1xuICBwdWJsaWMgYm9va2luZ1RpbWVMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgZHVyYXRpb25UaW1lczoge2xhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXJ9W107XG5cbiAgcHVibGljIGlzQm9va2luZ1N1Y2Nlc3M6IGJvb2xlYW47XG4gIHB1YmxpYyBib29raW5nRXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZVxuICApIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IGNvbXBvbmVudFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogYW55IHtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoJ2Jvb2tpbmdUaW1lJyA9PT0gcHJvcE5hbWUgfHwgJ2ZpZWxkJyA9PT0gcHJvcE5hbWUpIHtcbiAgICAgICAgdGhpcy5pc0Jvb2tpbmdTdWNjZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5ib29raW5nRXJyb3JNZXNzYWdlID0gbnVsbDtcblxuICAgICAgICBsZXQgZmllbGRUaW1lem9uZU9mZnNldDogbnVtYmVyID0gSGVscFNlcnZpY2UuZ2V0VGltZXpvbmVPZmZzZXQodGhpcy5maWVsZC5icmFuY2gudGltZVpvbmUpO1xuICAgICAgICB0aGlzLmJvb2tpbmdUaW1lTGFiZWwgPSBIZWxwU2VydmljZS5jb252ZXJ0RG91YmxlVGltZVRvU3RyaW5nKHRoaXMuYm9va2luZ1RpbWUudmFsdWUgKyBmaWVsZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgbGV0IHNlbGVjdGVkVGltZSA9IG1vbWVudCh0aGlzLmJvb2tpbmdUaW1lTGFiZWwsICdISDptbScpO1xuICAgICAgICBsZXQgY2xvc2VkVGltZSA9IG1vbWVudCh0aGlzLmZpZWxkLmNsb3NlZFRpbWUsICdISDptbScpO1xuICAgICAgICBsZXQgZGlmZlRpbWUgPSBjbG9zZWRUaW1lLmRpZmYoc2VsZWN0ZWRUaW1lLCAnaG91cnMnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmR1cmF0aW9uVGltZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZHVyYXRpb25UaW1lVmFsdWUgPSAwLjU7IGR1cmF0aW9uVGltZVZhbHVlIDw9IGRpZmZUaW1lOyBkdXJhdGlvblRpbWVWYWx1ZSArPSAwLjUpIHtcbiAgICAgICAgICBpZiAoZHVyYXRpb25UaW1lVmFsdWUgPT09IDAuNSkgdGhpcy5kdXJhdGlvblRpbWVzLnB1c2goe2xhYmVsOiAnMzAgbWludXRlcycsIHZhbHVlOiBkdXJhdGlvblRpbWVWYWx1ZX0pO1xuICAgICAgICAgIGVsc2UgaWYgKGR1cmF0aW9uVGltZVZhbHVlID09PSAxKSB0aGlzLmR1cmF0aW9uVGltZXMucHVzaCh7bGFiZWw6ICcxIGhvdXInLCB2YWx1ZTogZHVyYXRpb25UaW1lVmFsdWV9KTtcbiAgICAgICAgICBlbHNlIHRoaXMuZHVyYXRpb25UaW1lcy5wdXNoKHtsYWJlbDogZHVyYXRpb25UaW1lVmFsdWUgKyAnIGhvdXJzJywgdmFsdWU6IGR1cmF0aW9uVGltZVZhbHVlfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb25UaW1lcy5sZW5ndGggPiAwKSB0aGlzLnRpbWVFbmQgPSB0aGlzLmR1cmF0aW9uVGltZXNbMF0udmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOmFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnUkVRVUVTVF9FUlJPUic6XG4gICAgICAgIHRoaXMuaXNCb29raW5nU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJvb2tpbmdFcnJvck1lc3NhZ2UgPSBtZXNzYWdlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDUkVBVEVfQk9PS0lOR19TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5pc0Jvb2tpbmdTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib29raW5nRXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvQm9va0ZpZWxkKCkge1xuICAgIGxldCB0aW1lT2Zmc2V0OiBudW1iZXIgPSBIZWxwU2VydmljZS5nZXRUaW1lem9uZU9mZnNldCh0aGlzLmZpZWxkLmJyYW5jaC50aW1lWm9uZSk7XG4gICAgbGV0IHN0YXJ0VGltZTogbnVtYmVyID0gSGVscFNlcnZpY2UuY29udmVydFN0cmluZ1RpbWVUb0RvdWJsZShcbiAgICAgIEhlbHBTZXJ2aWNlLmdldFRpbWVMb2NhbFRvVVRDKE51bWJlcih0aGlzLmJvb2tpbmdUaW1lLnZhbHVlKSwgdGltZU9mZnNldClcbiAgICApO1xuICAgIGxldCBlbmRUaW1lOiBudW1iZXIgPSBIZWxwU2VydmljZS5jb252ZXJ0U3RyaW5nVGltZVRvRG91YmxlKFxuICAgICAgSGVscFNlcnZpY2UuZ2V0VGltZUxvY2FsVG9VVEMoTnVtYmVyKHRoaXMuYm9va2luZ1RpbWUudmFsdWUpICsgTnVtYmVyKHRoaXMudGltZUVuZCksIHRpbWVPZmZzZXQpXG4gICAgKTtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBCb29rRGF0YShcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aGVudGljYXRlZFVzZXIoKS51c2VySWQsXG4gICAgICB0aGlzLmZpZWxkLmZpZWxkSWQsXG4gICAgICBzdGFydFRpbWUsIGVuZFRpbWUsXG4gICAgICBtb21lbnQodGhpcy5ib29raW5nRGF0ZSkudmFsdWVPZigpXG4gICAgKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKFxuICAgICAgbmV3IE1lc3NhZ2UoJ0NSRUFURV9CT09LSU5HJywgYXBpUGFja2FnZSlcbiAgICApO1xuICB9XG5cbiAgc3VibWl0Qm9va2luZygpIHtcbiAgICBpZighdGhpcy50aW1lRW5kKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0Jvb2tGaWVsZCgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEJvb2tEYXRhIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHVzZXJJZDogbnVtYmVyLFxuICAgIHB1YmxpYyBmaWVsZElkOiBudW1iZXIsXG4gICAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyLFxuICAgIHB1YmxpYyBlbmRUaW1lOiBudW1iZXIsXG4gICAgcHVibGljIGRhdGU6IG51bWJlclxuICApIHsgfVxufVxuIl19
