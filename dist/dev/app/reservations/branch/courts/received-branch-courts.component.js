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
            templateUrl: 'received-branch-courts.component.html',
            styleUrls: ['received-branch-courts.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReceivedBranchCourtsComponent);
    return ReceivedBranchCourtsComponent;
}());
exports.ReceivedBranchCourtsComponent = ReceivedBranchCourtsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL2NvdXJ0cy9yZWNlaXZlZC1icmFuY2gtY291cnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBU08sZUFBZSxDQUFDLENBQUE7QUFDdkIsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFLekMsbURBQW1ELHNEQUFzRCxDQUFDLENBQUE7QUFLMUcsdUNBQXNDLDBDQUEwQyxDQUFDLENBQUE7QUFDakYsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFNN0QseUJBQXlCLDBCQUEwQixDQUFDLENBQUE7QUFDcEQsc0JBQXNCLHVCQUF1QixDQUFDLENBQUE7QUFROUM7SUEwQkUsdUNBQW9CLE1BQWMsRUFDZCxXQUFrQyxFQUNsQyxjQUE4QjtRQUY5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXBCeEMsY0FBUyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNsRCxlQUFVLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBb0I3RCxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFB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Q0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDO0lBQ0gsQ0FBQztJQTlJRDtRQUFDLFlBQUssRUFBRTs7MEVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7eUVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7aUVBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7b0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7cUVBQUE7SUFmWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxXQUFXLEVBQUUsdUNBQXVDO1lBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO1NBQ3BELENBQUM7O3FDQUFBO0lBb0pGLG9DQUFDO0FBQUQsQ0FuSkEsQUFtSkMsSUFBQTtBQW5KWSxxQ0FBNkIsZ0NBbUp6QyxDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL2NvdXJ0cy9yZWNlaXZlZC1icmFuY2gtY291cnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBBUEkgcGFja2FnZXNcbiAqL1xuaW1wb3J0IHsgU2VhcmNoQXZhaWxhYmxlRmllbGRPblRpbWVBbmRDb3VydCB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL1NlYXJjaEF2YWlsYWJsZUZpZWxkT25UaW1lQW5kQ291cnQnO1xuXG4vKipcbiAqIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9oZWxwLnNlcnZpY2UnO1xuXG4vKipcbiAqIG1vZGVsc1xuICovXG5pbXBvcnQgeyBTcG9ydCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9TcG9ydCc7XG5pbXBvcnQgeyBGYWNpbGl0eSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9GYWNpbGl0eSc7XG5pbXBvcnQgeyBDb3VydCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9Db3VydCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay1yZWNlaXZlZC1icmFuY2gtY291cnRzJyxcbiAgdGVtcGxhdGVVcmw6ICdyZWNlaXZlZC1icmFuY2gtY291cnRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JlY2VpdmVkLWJyYW5jaC1jb3VydHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlY2VpdmVkQnJhbmNoQ291cnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHVibGljIG1lc3NhZ2VTdWI6IGFueTtcblxuICBASW5wdXQoKSBhdmFpbGFibGVTcG9ydHM6IFNwb3J0W107XG4gIEBJbnB1dCgpIHBhZ2luYXRpb25QYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJyYW5jaDogQ291cnQ7XG5cbiAgQE91dHB1dCgpIG5vblJlc3VsdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoYXZlUmVzdWx0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgYXZhaWxhYmxlRmlsdGVyVGltZXM6IHN0cmluZ1tdO1xuICBwdWJsaWMgbG9hZGluZ1Jlc3VsdERhdGE6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlY2VpdmVkQ291cnRzOiB7IGZpZWxkOiBGYWNpbGl0eSwgYXZhaWxhYmxlVGltZXM6IHsgbGFiZWw6IHN0cmluZywgdmFsdWU6IG51bWJlciB9W10gfVtdO1xuXG4gIHB1YmxpYyBmaWx0ZXJTcG9ydDogU3BvcnQ7XG4gIHB1YmxpYyBmaWx0ZXJEYXRlOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXJUaW1lOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHNlbGVjdGVkRmllbGQ6IEZhY2lsaXR5O1xuICBwcm90ZWN0ZWQgc2VsZWN0ZWRGaWVsZERhdGU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHNlbGVjdGVkRmllbGRUaW1lOiB7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfTtcblxuICBwdWJsaWMgbG9hZGVkSW1hZ2U6IGJvb2xlYW5bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG4gICAgdGhpcy5maWx0ZXJTcG9ydCA9IHRoaXMuYXZhaWxhYmxlU3BvcnRzWzBdO1xuICAgIHRoaXMuZmlsdGVyRGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIHRoaXMuZmlsdGVyVGltZSA9IG1vbWVudCgpLmFkZCgzMCwgJ20nKS5mb3JtYXQoJ2hoOjAwIEEnKTtcbiAgICB0aGlzLmF2YWlsYWJsZUZpbHRlclRpbWVzID0gSGVscFNlcnZpY2UuZ2V0TGlzdEhvdXJzSW5EYXkoKS5tYXAoKHRpbWU6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHRpbWUubmFtZTtcbiAgICB9KTtcbiAgICB0aGlzLmdldENvdXJ0c0Zyb21TZXJ2ZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBqUXVlcnkoJyNjb3VydC1kYXRlcmFuZ2UnKS5kYXRlcmFuZ2VwaWNrZXIoe1xuICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogdHJ1ZSxcbiAgICAgIGxvY2FsZToge2Zvcm1hdDogJ1lZWVktTU0tREQnfSxcbiAgICAgIHN0YXJ0RGF0ZTogdGhpcy5maWx0ZXJEYXRlLFxuICAgICAgbWluRGF0ZTogdGhpcy5maWx0ZXJEYXRlXG4gICAgfSwgKHBpY2tlZERhdGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJEYXRlID0gcGlja2VkRGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIHRoaXMuZ2V0Q291cnRzRnJvbVNlcnZlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogYW55IHtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoJ2JyYW5jaCcgPT09IHByb3BOYW1lIHx8ICdhdmFpbGFibGVTcG9ydHMnID09PSBwcm9wTmFtZSkge1xuICAgICAgICB0aGlzLmZpbHRlclNwb3J0ID0gdGhpcy5hdmFpbGFibGVTcG9ydHNbMF07XG4gICAgICAgIHRoaXMuZ2V0Q291cnRzRnJvbVNlcnZlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ1JFUVVFU1RfSU5QVVRfRVJST1InOlxuICAgICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVjZWl2ZUNvdXJ0cyh7bHN0UmVzdWx0OiBbXX0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NFQVJDSF9BVkFJTEFCTEVfRklFTERfT05fVElNRV9BTkRfQ09VUlRfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMucmVjZWl2ZWRDb3VydHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVjZWl2ZUNvdXJ0cyhtZXNzYWdlLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlY2VpdmVDb3VydHMoZGF0YTogYW55KTogdm9pZCB7XG4gICAgaWYgKGRhdGEubHN0UmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5yZWNlaXZlZENvdXJ0cyA9IFtdO1xuICAgICAgdGhpcy5ub25SZXN1bHQuZW1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY2VpdmVkQ291cnRzID0gZGF0YS5sc3RSZXN1bHRcbiAgICAgICAgLmZpbHRlcigoZmllbGRzRGF0YTogYW55KSA9PiBmaWVsZHNEYXRhICE9PSBudWxsKVxuICAgICAgICAubWFwKChmaWVsZHNEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmFjaWxpdHkoZmllbGRzRGF0YS5maWVsZCk7XG4gICAgICAgICAgbGV0IGF2YWlsYWJsZVRpbWVzID0gZmllbGRzRGF0YS5sc3RBdmFpbGFibGVUaW1lcy5tYXAoKHRpbWVEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBmaWVsZFRpbWV6b25lT2Zmc2V0OiBudW1iZXIgPSBIZWxwU2VydmljZS5nZXRUaW1lem9uZU9mZnNldChmaWVsZC5icmFuY2gudGltZVpvbmUpO1xuICAgICAgICAgICAgbGV0IGNvdXJ0VGltZTogbnVtYmVyID0gdGltZURhdGEgKyBmaWVsZFRpbWV6b25lT2Zmc2V0O1xuICAgICAgICAgICAgY291cnRUaW1lID0gKGNvdXJ0VGltZSA8IDApID8gKDI0ICsgY291cnRUaW1lKSA6IGNvdXJ0VGltZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBIZWxwU2VydmljZS5jb252ZXJ0RG91YmxlVGltZVRvU3RyaW5nKGNvdXJ0VGltZSksXG4gICAgICAgICAgICAgIHZhbHVlOiBjb3VydFRpbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHtmaWVsZDogZmllbGQsIGF2YWlsYWJsZVRpbWVzOiBhdmFpbGFibGVUaW1lc307XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5oYXZlUmVzdWx0LmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5sb2FkaW5nUmVzdWx0RGF0YSA9IGZhbHNlO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldEF2YWlsYWJsZUNvdXJ0cygpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyU3BvcnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgbGV0IGxvY2F0aW9uVGltZSA9IHRoaXMuZmlsdGVyRGF0ZSArICcgJyArIHRoaXMuZmlsdGVyVGltZTtcbiAgICBsZXQgc2VhcmNoaW5nVGltZTogbnVtYmVyID0gbW9tZW50LnR6KGxvY2F0aW9uVGltZSwgJ1lZWVktTU0tREQgSDptbSBBJywgdGhpcy5icmFuY2gudGltZVpvbmUpLnV0YygpLnZhbHVlT2YoKTtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBTZWFyY2hBdmFpbGFibGVGaWVsZE9uVGltZUFuZENvdXJ0KClcbiAgICAgIC5zZXRUaW1lKHNlYXJjaGluZ1RpbWUpXG4gICAgICAuc2V0U3BvcnQodGhpcy5maWx0ZXJTcG9ydClcbiAgICAgIC5zZXRDb3VydCh0aGlzLmJyYW5jaCk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBnZXRDb3VydHNGcm9tU2VydmVyKCk6IHZvaWQge1xuICAgIC8vIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgIHRoaXMubG9hZGVkSW1hZ2UgPSBbXTtcbiAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gdHJ1ZTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRBdmFpbGFibGVDb3VydHMoKTtcbiAgfVxuXG4gIGZpbHRlclNwb3J0c0NoYW5nZWQoc3BvcnQ6IFNwb3J0LCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZmlsdGVyU3BvcnQgPSBzcG9ydDtcbiAgICAgIHRoaXMuZ2V0Q291cnRzRnJvbVNlcnZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNwb3J0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlclRpbWVDaGFuZ2VkKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuZmlsdGVyVGltZSA9IHZhbHVlO1xuICAgIHRoaXMuZ2V0Q291cnRzRnJvbVNlcnZlcigpO1xuICB9XG5cbiAgb25Cb29raW5nRmllbGQoZmllbGQ6IEZhY2lsaXR5LCB0aW1lOiB7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfSk6IGFueSB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRmllbGQgPSBmaWVsZDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZFRpbWUgPSB0aW1lO1xuICAgICAgbGV0IGZ1bGxUaW1lOiBzdHJpbmcgPSB0aGlzLmZpbHRlckRhdGUgKyAnICcgKyB0aGlzLmZpbHRlclRpbWU7XG4gICAgICB0aGlzLnNlbGVjdGVkRmllbGREYXRlID0gbW9tZW50LnR6KGZ1bGxUaW1lLCAnWVlZWS1NTS1ERCBIOm1tIEEnLCBmaWVsZC5icmFuY2gudGltZVpvbmUpLnV0YygpLnZhbHVlT2YoKTtcbiAgICAgIGpRdWVyeSgnI2Jvb2tpbmdGaWVsZE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4vY29udGludWUvJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaF0pO1xuICAgIH1cbiAgfVxufVxuIl19
