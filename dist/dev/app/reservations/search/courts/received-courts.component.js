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
            templateUrl: 'received-courts.component.html',
            styleUrls: ['received-courts.component.css'],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvc2VhcmNoL2NvdXJ0cy9yZWNlaXZlZC1jb3VydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFDaUUsZUFBZSxDQUFDLENBQUE7QUFDakYsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFLekMseUNBQXlDLDRDQUE0QyxDQUFDLENBQUE7QUFLdEYsdUNBQXNDLDBDQUEwQyxDQUFDLENBQUE7QUFDakYsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFPN0QseUJBQXlCLDBCQUEwQixDQUFDLENBQUE7QUFHcEQsSUFBWSxTQUFTLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQXFCaEQ7SUEwQkUsaUNBQW9CLE1BQWMsRUFDZCxXQUFrQyxFQUNsQyxjQUE4QjtRQUY5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNsRCxDQUFDO0lBdEJ1QixzQkFBSSwyQ0FBTTthQUFWO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQXNCRCwwQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEVBQUUs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Q0FBQyxFQUFDLENBQUM7cUJBQy9CLENBQUMsQ0FBQyxDQUFDO29CQUNKLGlCQUFVLENBQUMsUUFBUSxFQUFFLGNBQU8sQ0FBQyxHQUFHLEVBQUUsZ0JBQVMsQ0FBQzt3QkFDMUMsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7d0JBQzlCLFlBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO3FCQUMvQixDQUFDLENBQUMsQ0FBQztpQkFDTCxDQUFDO2FBQ0g7U0FDRixDQUFDOzsrQkFBQTtJQXdKRiw4QkFBQztBQUFELENBdkpBLEFBdUpDLElBQUE7QUF2SlksK0JBQXVCLDBCQXVKbkMsQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL3NlYXJjaC9jb3VydHMvcmVjZWl2ZWQtY291cnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIElucHV0LCBIb3N0QmluZGluZyxcbiAgICB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBBUEkgcGFja2FnZXNcbiAqL1xuaW1wb3J0IHsgR2V0QXZhaWxhYmxlRmllbGRzT25EYXRlIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvR2V0QXZhaWxhYmxlRmllbGRzT25EYXRlJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaGVscC5zZXJ2aWNlJztcblxuLyoqXG4gKiBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgTG5nTGF0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0xuZ0xhdCc7XG5pbXBvcnQgeyBTcG9ydCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9TcG9ydCc7XG5pbXBvcnQgeyBGYWNpbGl0eSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9GYWNpbGl0eSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0FkZHJlc3MnO1xuXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLXJlY2VpdmVkLWNvdXJ0cycsXG4gIHRlbXBsYXRlVXJsOiAncmVjZWl2ZWQtY291cnRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JlY2VpdmVkLWNvdXJ0cy5jb21wb25lbnQuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBbXG4gICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7fSkpLFxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgYW5pbWF0ZSgxMDAwLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDF9KVxuICAgICAgXSkpKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIGFuaW1hdGUoNTAwLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDF9KVxuICAgICAgXSkpKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVjZWl2ZWRDb3VydHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBtZXNzYWdlU3ViOiBhbnk7XG5cbiAgQElucHV0KCkgYXZhaWxhYmxlU3BvcnRzOiBTcG9ydFtdO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uUGFnZTogbnVtYmVyO1xuICBASW5wdXQoKSB1c2VyTG9jYXRpb246IHsgdGltZXpvbmU6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcywgY29vcmRpbmF0ZTogTG5nTGF0IH07XG5cbiAgQEhvc3RCaW5kaW5nKCdAZmFkZUluJykgZ2V0IGZhZGVJbigpIHtcbiAgICByZXR1cm4gJ2luJztcbiAgfVxuXG4gIHB1YmxpYyBhdmFpbGFibGVGaWx0ZXJUaW1lczogc3RyaW5nW107XG4gIHB1YmxpYyBsb2FkaW5nUmVzdWx0RGF0YTogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVjZWl2ZWRDb3VydHM6IHsgZmllbGQ6IEZhY2lsaXR5LCBhdmFpbGFibGVUaW1lczogeyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH1bXSB9W107XG5cbiAgcHVibGljIGZpbHRlclNwb3J0OiBTcG9ydDtcbiAgcHVibGljIGZpbHRlckRhdGU6IHN0cmluZztcbiAgcHVibGljIGZpbHRlclRpbWU6IHN0cmluZztcblxuICBwdWJsaWMgc2VsZWN0ZWRGaWVsZDogRmFjaWxpdHk7XG4gIHB1YmxpYyBzZWxlY3RlZEZpZWxkRGF0ZTogbnVtYmVyO1xuICBwdWJsaWMgc2VsZWN0ZWRGaWVsZFRpbWU6IHsgbGFiZWw6IHN0cmluZywgdmFsdWU6IG51bWJlciB9O1xuXG4gIHB1YmxpYyBsb2FkZWRJbWFnZTogYm9vbGVhbltdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZVN1YiA9IHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB0aGlzLmZpbHRlclNwb3J0ID0gdGhpcy5hdmFpbGFibGVTcG9ydHNbMF07XG4gICAgdGhpcy5maWx0ZXJEYXRlID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgdGhpcy5maWx0ZXJUaW1lID0gbW9tZW50KCkuYWRkKDMwLCAnbScpLmZvcm1hdCgnaGg6MDAgQScpO1xuICAgIHRoaXMuYXZhaWxhYmxlRmlsdGVyVGltZXMgPSBIZWxwU2VydmljZS5nZXRMaXN0SG91cnNJbkRheSgpLm1hcCgodGltZTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gdGltZS5uYW1lO1xuICAgIH0pO1xuICAgIHRoaXMubG9hZGVkSW1hZ2UgPSBbXTtcbiAgICB0aGlzLmdldENvdXJ0c0Zyb21TZXJ2ZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBqUXVlcnkoJyNjb3VydC1kYXRlcmFuZ2UnKS5kYXRlcmFuZ2VwaWNrZXIoe1xuICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogdHJ1ZSxcbiAgICAgIGxvY2FsZToge2Zvcm1hdDogJ1lZWVktTU0tREQnfSxcbiAgICAgIHN0YXJ0RGF0ZTogdGhpcy5maWx0ZXJEYXRlLFxuICAgICAgbWluRGF0ZTogdGhpcy5maWx0ZXJEYXRlXG4gICAgfSwgKHBpY2tlZERhdGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJEYXRlID0gcGlja2VkRGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIHRoaXMuZ2V0Q291cnRzRnJvbVNlcnZlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnUkVRVUVTVF9JTlBVVF9FUlJPUic6XG4gICAgICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlQ291cnRzKHtsc3RSZXN1bHQ6IFtdfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnR0VUX0FWQUlMQUJMRV9GSUVMRFNfT05fREFURV9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5yZWNlaXZlZENvdXJ0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlQ291cnRzKG1lc3NhZ2UuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVjZWl2ZUNvdXJ0cyhkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoZGF0YS5sc3RSZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgICB0aGlzLnJlY2VpdmVkQ291cnRzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjZWl2ZWRDb3VydHMgPSBkYXRhLmxzdFJlc3VsdFxuICAgICAgICAuZmlsdGVyKChmaWVsZHNEYXRhOiBhbnkpID0+IGZpZWxkc0RhdGEgIT09IG51bGwpXG4gICAgICAgIC5tYXAoKGZpZWxkc0RhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IG5ldyBGYWNpbGl0eShmaWVsZHNEYXRhLmZpZWxkKTtcbiAgICAgICAgICBsZXQgYXZhaWxhYmxlVGltZXMgPSBmaWVsZHNEYXRhLmxzdEF2YWlsYWJsZVRpbWVzLm1hcCgodGltZURhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpZWxkVGltZXpvbmVPZmZzZXQ6IG51bWJlciA9IEhlbHBTZXJ2aWNlLmdldFRpbWV6b25lT2Zmc2V0KGZpZWxkLmJyYW5jaC50aW1lWm9uZSk7XG4gICAgICAgICAgICBsZXQgY291cnRUaW1lOiBudW1iZXIgPSB0aW1lRGF0YSArIGZpZWxkVGltZXpvbmVPZmZzZXQ7XG4gICAgICAgICAgICBjb3VydFRpbWUgPSAoY291cnRUaW1lIDwgMCkgPyAoMjQgKyBjb3VydFRpbWUpIDogY291cnRUaW1lO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWw6IEhlbHBTZXJ2aWNlLmNvbnZlcnREb3VibGVUaW1lVG9TdHJpbmcoY291cnRUaW1lKSxcbiAgICAgICAgICAgICAgdmFsdWU6IGNvdXJ0VGltZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4ge2ZpZWxkOiBmaWVsZCwgYXZhaWxhYmxlVGltZXM6IGF2YWlsYWJsZVRpbWVzfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldEF2YWlsYWJsZUNvdXJ0cygpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyU3BvcnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgbGV0IGxvY2F0aW9uVGltZSA9IHRoaXMuZmlsdGVyRGF0ZSArICcgJyArIHRoaXMuZmlsdGVyVGltZTtcbiAgICBsZXQgc2VhcmNoaW5nVGltZTogbnVtYmVyID0gbW9tZW50LnR6KGxvY2F0aW9uVGltZSwgJ1lZWVktTU0tREQgSDptbSBBJywgdGhpcy51c2VyTG9jYXRpb24udGltZXpvbmUpLnV0YygpLnZhbHVlT2YoKTtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRBdmFpbGFibGVGaWVsZHNPbkRhdGUoKVxuICAgICAgLnNldFRpbWUoc2VhcmNoaW5nVGltZSlcbiAgICAgIC5zZXRTcG9ydCh0aGlzLmZpbHRlclNwb3J0KVxuICAgICAgLnNldENpdHkodGhpcy51c2VyTG9jYXRpb24uYWRkcmVzcy5nZXRDaXR5KCkpXG4gICAgICAuc2V0UGFnaW5hdGlvbihjb25zdGFudHMuU0VBUkNIX1BBR0lOQVRJT04uSVRFTV9QRVJfUEFHRSwgdGhpcy5wYWdpbmF0aW9uUGFnZSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBnZXRDb3VydHNGcm9tU2VydmVyKCk6IHZvaWQge1xuICAgIC8vIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgIHRoaXMubG9hZGVkSW1hZ2UgPSBbXTtcbiAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gdHJ1ZTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRBdmFpbGFibGVDb3VydHMoKTtcbiAgfVxuXG4gIGZpbHRlclNwb3J0c0NoYW5nZWQoc3BvcnQ6IFNwb3J0LCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZmlsdGVyU3BvcnQgPSBzcG9ydDtcbiAgICAgIHRoaXMuZ2V0Q291cnRzRnJvbVNlcnZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNwb3J0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlclRpbWVDaGFuZ2VkKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuZmlsdGVyVGltZSA9IHZhbHVlO1xuICAgIHRoaXMuZ2V0Q291cnRzRnJvbVNlcnZlcigpO1xuICB9XG5cbiAgY291cnRJbWFnZUxvYWRlZCgpOiBhbnkge1xuICAgIHRoaXMubG9hZGVkSW1hZ2UucHVzaCh0cnVlKTtcbiAgICBpZiAodGhpcy5sb2FkZWRJbWFnZS5sZW5ndGggPj0gdGhpcy5yZWNlaXZlZENvdXJ0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVVcmwoY291cnQ6IGFueSk6IGFueSB7XG4gICAgY291cnQuZmllbGQucGFydG5lci5sb2dvID0gJy4vYXNzZXRzL2ltYWdlcy9kZWZhdWx0L2NvdXJ0LnBuZyc7XG4gICAgdGhpcy5jb3VydEltYWdlTG9hZGVkKCk7XG4gIH1cblxuICBvbkJvb2tpbmdGaWVsZChmaWVsZDogRmFjaWxpdHksIHRpbWU6IHsgbGFiZWw6IHN0cmluZywgdmFsdWU6IG51bWJlciB9KTogYW55IHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZCA9IGZpZWxkO1xuICAgICAgdGhpcy5zZWxlY3RlZEZpZWxkVGltZSA9IHRpbWU7XG4gICAgICBsZXQgZnVsbFRpbWU6IHN0cmluZyA9IHRoaXMuZmlsdGVyRGF0ZSArICcgJyArIHRoaXMuZmlsdGVyVGltZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWVsZERhdGUgPSBtb21lbnQudHooZnVsbFRpbWUsICdZWVlZLU1NLUREIEg6bW0gQScsIGZpZWxkLmJyYW5jaC50aW1lWm9uZSkudXRjKCkudmFsdWVPZigpO1xuICAgICAgalF1ZXJ5KCcjYm9va2luZ0ZpZWxkTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbi9jb250aW51ZS8nLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
