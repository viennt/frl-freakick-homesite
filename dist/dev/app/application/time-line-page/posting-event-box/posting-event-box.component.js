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
var authentication_service_1 = require('../../../services/authentication.service');
var location_service_1 = require('../../../services/location.service');
var message_service_1 = require('../../../services/message.service');
var help_service_1 = require('../../../services/help.service');
var Group_1 = require('../../../models/Group');
var LngLat_1 = require('../../../models/LngLat');
var GetAllGroup_1 = require('../../../packages/GetAllGroup');
var CreateEvent_1 = require('../../../packages/CreateEvent');
var constants_1 = require('../../../constants');
var Event_1 = require('../../../models/Event');
var PostingEventBoxComponent = (function () {
    function PostingEventBoxComponent(messageService, locationService, authService) {
        this.messageService = messageService;
        this.locationService = locationService;
        this.authService = authService;
        this.serverUrl = constants_1.CONFIG.URL;
        this.eventRepeatType = Event_1.Event.repeatType;
    }
    PostingEventBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.authService.getAuthenticatedUser();
        this.userName = this.authService.getItem('fullName') || 'Freakick User';
        this.userImage = user.userImage;
        this.availableTimes = help_service_1.HelpService.getListHoursInDay();
        this.availableFrequency = [];
        for (var _i = 1; _i <= 30; _i++) {
            this.availableFrequency.push(_i);
        }
        this.resetScheduleEventForm();
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.sendMessageToGetAllGroups();
    };
    PostingEventBoxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#event-start-day').daterangepicker({
            singleDatePicker: true,
            locale: { format: 'YYYY-MM-DD' }
        }, function (pickedDate) {
            _this.inputStartDate = moment(pickedDate, 'YYYY-MM-DD').valueOf();
        });
        jQuery('#event-end-day').daterangepicker({
            singleDatePicker: true,
            locale: { format: 'YYYY-MM-DD' }
        }, function (pickedDate) {
            _this.inputEndDate = moment(pickedDate, 'YYYY-MM-DD').valueOf();
        });
    };
    PostingEventBoxComponent.prototype.onScroll = function (event) {
        if ((document.documentElement.scrollTop || document.body.scrollTop) > 1200) {
            this.closeScheduleEventForm();
        }
    };
    PostingEventBoxComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_ALL_GROUP_SUCCESS':
                this.handleReceivedGroups(message.data);
                break;
            case 'CREATE_EVENT_SUCCESS':
                this.closeScheduleEventForm();
                this.resetScheduleEventForm();
                break;
        }
    };
    PostingEventBoxComponent.prototype.handleReceivedGroups = function (data) {
        data.lstResult = Object.prototype.toString.call(data.lstResult) !== '[object Array]'
            ? JSON.parse(data.lstResult)
            : data.lstResult;
        this.availableGroups = data.lstResult.map(function (groupData) { return new Group_1.Group(groupData); });
    };
    PostingEventBoxComponent.prototype.sendMessageToGetAllGroups = function () {
        var apiPackage = new GetAllGroup_1.GetAllGroup();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    PostingEventBoxComponent.prototype.sendMessageToScheduleAnEvent = function () {
        var weekDays = [
            this.inputIsOccurSunday,
            this.inputIsOccurMonday,
            this.inputIsOccurTuesday,
            this.inputIsOccurWednesday,
            this.inputIsOccurThursday,
            this.inputIsOccurFriday,
            this.inputIsOccurSaturday,
        ];
        var apiPackage = new CreateEvent_1.CreateEvent()
            .setName(this.inputEventName || this.userName + '\'s event')
            .setDescription(this.inputDescription)
            .setDate(this.inputStartDate, this.inputEndDate)
            .setTime(this.inputIsAllDateEvent, this.inputStartTime, this.inputEndTime)
            .setType(Event_1.Event.type.Sponsored)
            .setRepeat(this.inputEventRepeatType, this.inputEventRepeatFrequency, weekDays)
            .setTimeZone('')
            .setContact(this.authService.getItem('email'), this.authService.getItem('phone'))
            .setLocation(this.inputEventAddress, new LngLat_1.LngLat(this.inputEventLongitude, this.inputEventLatitude))
            .setNotification(this.inputNotificationBy, this.inputNotificationBeforeHours)
            .setIsSocialEvent(false)
            .setImages(this.inputEventImages)
            .setGroups(this.inputEventGroups)
            .setSports([]);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    PostingEventBoxComponent.prototype.onChangeEventAddress = function (event) {
        var _this = this;
        if (!this.inputEventAddress)
            return;
        if (this.preSearchAddress || !this.inputEventAddress.length)
            clearTimeout(this.preSearchAddress);
        this.preSearchAddress = setTimeout(function () {
            clearTimeout(_this.preSearchAddress);
            _this.locationService.searchAddressByKeyWord(_this.inputEventAddress).then(function (data) { return _this.suggestedAddress = data && data.results.map(function (address) { return new Object({
                address: address.formatted_address,
                coordinate: new LngLat_1.LngLat(address.geometry.location.lng, address.geometry.location.lat)
            }); }) || []; });
        }, 500);
    };
    PostingEventBoxComponent.prototype.onSelectAddress = function (value) {
        this.inputEventLatitude = value.coordinate.getLat();
        this.inputEventLongitude = value.coordinate.getLng();
        this.inputEventAddress = value.address;
        this.suggestedAddress = [];
    };
    PostingEventBoxComponent.prototype.onClickAddMoreEventImage = function () {
        if (this.imageButton)
            this.imageButton.onClickButton();
    };
    PostingEventBoxComponent.prototype.onClickRemoveEventImage = function (image) {
        var index = this.inputEventImages.indexOf(image);
        if (index >= 0)
            this.inputEventImages.splice(index, 1);
    };
    PostingEventBoxComponent.prototype.openScheduleEventForm = function () {
        this.isShownScheduleEventForm = true;
    };
    PostingEventBoxComponent.prototype.closeScheduleEventForm = function () {
        this.isShownScheduleEventForm = false;
    };
    PostingEventBoxComponent.prototype.resetScheduleEventForm = function () {
        this.inputEventName = undefined;
        this.inputDescription = '';
        this.inputStartDate = moment().valueOf();
        this.inputEndDate = moment().add(1, 'd').valueOf();
        this.inputStartTime = 9;
        this.inputEndTime = 11;
        this.inputIsAllDateEvent = false;
        this.inputEventRepeatType = 0;
        this.inputEventRepeatFrequency = 1;
        this.inputIsOccurMonday = false;
        this.inputIsOccurTuesday = false;
        this.inputIsOccurWednesday = false;
        this.inputIsOccurThursday = false;
        this.inputIsOccurFriday = false;
        this.inputIsOccurSaturday = false;
        this.inputIsOccurSunday = false;
        this.inputNotificationBy = 0;
        this.inputNotificationBeforeHours = 1;
        this.inputEventGroups = [];
        this.inputEventImages = [];
        this.inputEventAddress = '';
        this.inputEventLatitude = 0;
        this.inputEventLongitude = 0;
    };
    PostingEventBoxComponent.prototype.onSubmitScheduleEvent = function () {
        this.sendMessageToScheduleAnEvent();
    };
    __decorate([
        core_1.ViewChild('imageButton'), 
        __metadata('design:type', Object)
    ], PostingEventBoxComponent.prototype, "imageButton", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], PostingEventBoxComponent.prototype, "onScroll", null);
    PostingEventBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-posting-event-box',
            templateUrl: 'posting-event-box.component.html',
            styleUrls: ['posting-event-box.component.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, location_service_1.LocationService, authentication_service_1.AuthenticationService])
    ], PostingEventBoxComponent);
    return PostingEventBoxComponent;
}());
exports.PostingEventBoxComponent = PostingEventBoxComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9wb3N0aW5nLWV2ZW50LWJveC9wb3N0aW5nLWV2ZW50LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRSxlQUFlLENBQUMsQ0FBQTtBQUUxRix1Q0FBc0MsMENBQTBDLENBQUMsQ0FBQTtBQUNqRixpQ0FBZ0Msb0NBQW9DLENBQUMsQ0FBQTtBQUNyRSxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSw2QkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUU3RCxzQkFBc0IsdUJBQXVCLENBQUMsQ0FBQTtBQUM5Qyx1QkFBdUIsd0JBQXdCLENBQUMsQ0FBQTtBQUVoRCw0QkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCw0QkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUU1RCwwQkFBdUIsb0JBQW9CLENBQUMsQ0FBQTtBQUM1QyxzQkFBc0IsdUJBQXVCLENBQUMsQ0FBQTtBQVE5QztJQW1ERSxrQ0FBb0IsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsV0FBa0M7UUFGbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFqRC9DLGNBQVMsR0FBRyxrQkFBTSxDQUFDLEdBQUcsQ0FBQztRQXlDOUIsb0JBQWUsR0FBRyxhQUFLLENBQUMsVUFBVSxDQUFDO0lBUXVCLENBQUM7SUFFM0QsMkNBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFD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cUIsR0FBckI7UUFDRSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBektEO1FBQUMsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7O2lFQUFBO0lBMEN6QjtRQUFDLG1CQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7NERBQUE7SUEvRjVDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzs7Z0NBQUE7SUEyTkYsK0JBQUM7QUFBRCxDQTFOQSxBQTBOQyxJQUFBO0FBMU5ZLGdDQUF3QiwyQkEwTnBDLENBQUEiLCJmaWxlIjoiYXBwL2FwcGxpY2F0aW9uL3RpbWUtbGluZS1wYWdlL3Bvc3RpbmctZXZlbnQtYm94L3Bvc3RpbmctZXZlbnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBIb3N0TGlzdGVuZXIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2xvY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9oZWxwLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9Hcm91cCc7XG5pbXBvcnQgeyBMbmdMYXQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvTG5nTGF0JztcblxuaW1wb3J0IHsgR2V0QWxsR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9HZXRBbGxHcm91cCc7XG5pbXBvcnQgeyBDcmVhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL0NyZWF0ZUV2ZW50JztcblxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0V2ZW50JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXBvc3RpbmctZXZlbnQtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdwb3N0aW5nLWV2ZW50LWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwb3N0aW5nLWV2ZW50LWJveC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9zdGluZ0V2ZW50Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGE6IGFueTtcbiAgcHVibGljIGI6IGFueTtcbiAgcHVibGljIGM6IGFueTtcbiAgcHVibGljIHNlcnZlclVybCA9IENPTkZJRy5VUkw7XG5cbiAgcHVibGljIGlzU2hvd25TY2hlZHVsZUV2ZW50Rm9ybTogYm9vbGVhbjtcbiAgcHVibGljIGhhc0V2ZW50R3JvdXBzOiBib29sZWFuO1xuICBwdWJsaWMgaGFzRXZlbnRBZGRyZXNzOiBib29sZWFuO1xuICBwdWJsaWMgc3VnZ2VzdGVkQWRkcmVzczoge2FkZHJlc3M6IHN0cmluZywgY29vcmRpbmF0ZTogTG5nTGF0fVtdO1xuXG4gIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgdXNlckltYWdlOiBzdHJpbmc7XG5cbiAgcHVibGljIGF2YWlsYWJsZUdyb3VwczogR3JvdXBbXTtcbiAgcHVibGljIGF2YWlsYWJsZVRpbWVzOiBhbnlbXTtcbiAgcHVibGljIGF2YWlsYWJsZUZyZXF1ZW5jeTogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlIGV2ZW50IHBhY2thZ2UncyBwcm9wZXJ0aWVzXG4gICAqL1xuICBwdWJsaWMgaW5wdXRFdmVudE5hbWU6IHN0cmluZztcbiAgcHVibGljIGlucHV0RGVzY3JpcHRpb246IHN0cmluZztcbiAgcHVibGljIGlucHV0U3RhcnREYXRlOiBudW1iZXI7XG4gIHB1YmxpYyBpbnB1dEVuZERhdGU6IG51bWJlcjtcbiAgcHVibGljIGlucHV0U3RhcnRUaW1lOiBudW1iZXI7XG4gIHB1YmxpYyBpbnB1dEVuZFRpbWU6IG51bWJlcjtcbiAgcHVibGljIGlucHV0SXNBbGxEYXRlRXZlbnQ6IGJvb2xlYW47XG4gIHB1YmxpYyBpbnB1dEV2ZW50UmVwZWF0VHlwZTogbnVtYmVyO1xuICBwdWJsaWMgaW5wdXRFdmVudFJlcGVhdEZyZXF1ZW5jeTogbnVtYmVyO1xuICBwdWJsaWMgaW5wdXRJc09jY3VyTW9uZGF5OiBib29sZWFuO1xuICBwdWJsaWMgaW5wdXRJc09jY3VyVHVlc2RheTogYm9vbGVhbjtcbiAgcHVibGljIGlucHV0SXNPY2N1cldlZG5lc2RheTogYm9vbGVhbjtcbiAgcHVibGljIGlucHV0SXNPY2N1clRodXJzZGF5OiBib29sZWFuO1xuICBwdWJsaWMgaW5wdXRJc09jY3VyRnJpZGF5OiBib29sZWFuO1xuICBwdWJsaWMgaW5wdXRJc09jY3VyU2F0dXJkYXk6IGJvb2xlYW47XG4gIHB1YmxpYyBpbnB1dElzT2NjdXJTdW5kYXk6IGJvb2xlYW47XG4gIHB1YmxpYyBpbnB1dE5vdGlmaWNhdGlvbkJ5OiBudW1iZXI7XG4gIHB1YmxpYyBpbnB1dE5vdGlmaWNhdGlvbkJlZm9yZUhvdXJzOiBudW1iZXI7XG4gIHB1YmxpYyBpbnB1dEV2ZW50R3JvdXBzOiBudW1iZXJbXTtcbiAgcHVibGljIGlucHV0RXZlbnRJbWFnZXM6IHN0cmluZ1tdO1xuICBwdWJsaWMgaW5wdXRFdmVudEFkZHJlc3M6IHN0cmluZztcbiAgcHVibGljIGlucHV0RXZlbnRMYXRpdHVkZTogbnVtYmVyO1xuICBwdWJsaWMgaW5wdXRFdmVudExvbmdpdHVkZTogbnVtYmVyO1xuXG4gIGV2ZW50UmVwZWF0VHlwZSA9IEV2ZW50LnJlcGVhdFR5cGU7XG5cbiAgQFZpZXdDaGlsZCgnaW1hZ2VCdXR0b24nKSBpbWFnZUJ1dHRvbjogYW55O1xuXG4gIHByaXZhdGUgcHJlU2VhcmNoQWRkcmVzczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uU2VydmljZTogTG9jYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCB1c2VyID0gdGhpcy5hdXRoU2VydmljZS5nZXRBdXRoZW50aWNhdGVkVXNlcigpO1xuICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEl0ZW0oJ2Z1bGxOYW1lJykgfHwgJ0ZyZWFraWNrIFVzZXInO1xuICAgIHRoaXMudXNlckltYWdlID0gdXNlci51c2VySW1hZ2U7XG5cbiAgICB0aGlzLmF2YWlsYWJsZVRpbWVzID0gSGVscFNlcnZpY2UuZ2V0TGlzdEhvdXJzSW5EYXkoKTtcbiAgICB0aGlzLmF2YWlsYWJsZUZyZXF1ZW5jeSA9IFtdO1xuICAgIGZvciAobGV0IF9pID0gMTsgX2kgPD0gMzA7IF9pKyspIHtcbiAgICAgIHRoaXMuYXZhaWxhYmxlRnJlcXVlbmN5LnB1c2goX2kpO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXRTY2hlZHVsZUV2ZW50Rm9ybSgpO1xuXG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICBtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKVxuICAgICk7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvR2V0QWxsR3JvdXBzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgalF1ZXJ5KCcjZXZlbnQtc3RhcnQtZGF5JykuZGF0ZXJhbmdlcGlja2VyKHtcbiAgICAgIHNpbmdsZURhdGVQaWNrZXI6IHRydWUsXG4gICAgICBsb2NhbGU6IHtmb3JtYXQ6ICdZWVlZLU1NLUREJ31cbiAgICB9LCAocGlja2VkRGF0ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmlucHV0U3RhcnREYXRlID0gbW9tZW50KHBpY2tlZERhdGUsICdZWVlZLU1NLUREJykudmFsdWVPZigpO1xuICAgIH0pO1xuICAgIGpRdWVyeSgnI2V2ZW50LWVuZC1kYXknKS5kYXRlcmFuZ2VwaWNrZXIoe1xuICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogdHJ1ZSxcbiAgICAgIGxvY2FsZToge2Zvcm1hdDogJ1lZWVktTU0tREQnfVxuICAgIH0sIChwaWNrZWREYXRlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRFbmREYXRlID0gbW9tZW50KHBpY2tlZERhdGUsICdZWVlZLU1NLUREJykudmFsdWVPZigpO1xuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFsnJGV2ZW50J10pIG9uU2Nyb2xsKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApID4gMTIwMCkge1xuICAgICAgdGhpcy5jbG9zZVNjaGVkdWxlRXZlbnRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ0dFVF9BTExfR1JPVVBfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuaGFuZGxlUmVjZWl2ZWRHcm91cHMobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDUkVBVEVfRVZFTlRfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuY2xvc2VTY2hlZHVsZUV2ZW50Rm9ybSgpO1xuICAgICAgICB0aGlzLnJlc2V0U2NoZWR1bGVFdmVudEZvcm0oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVjZWl2ZWRHcm91cHMoZGF0YTogYW55KTogdm9pZCB7XG4gICAgZGF0YS5sc3RSZXN1bHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YS5sc3RSZXN1bHQpICE9PSAnW29iamVjdCBBcnJheV0nXG4gICAgICAgICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKGRhdGEubHN0UmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgIDogZGF0YS5sc3RSZXN1bHQ7XG4gICAgdGhpcy5hdmFpbGFibGVHcm91cHMgPSBkYXRhLmxzdFJlc3VsdC5tYXAoXG4gICAgICAoZ3JvdXBEYXRhOiBhbnkpID0+IG5ldyBHcm91cChncm91cERhdGEpXG4gICAgKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRBbGxHcm91cHMoKSB7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgR2V0QWxsR3JvdXAoKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9TY2hlZHVsZUFuRXZlbnQoKSB7XG4gICAgbGV0IHdlZWtEYXlzID0gW1xuICAgICAgdGhpcy5pbnB1dElzT2NjdXJTdW5kYXksXG4gICAgICB0aGlzLmlucHV0SXNPY2N1ck1vbmRheSxcbiAgICAgIHRoaXMuaW5wdXRJc09jY3VyVHVlc2RheSxcbiAgICAgIHRoaXMuaW5wdXRJc09jY3VyV2VkbmVzZGF5LFxuICAgICAgdGhpcy5pbnB1dElzT2NjdXJUaHVyc2RheSxcbiAgICAgIHRoaXMuaW5wdXRJc09jY3VyRnJpZGF5LFxuICAgICAgdGhpcy5pbnB1dElzT2NjdXJTYXR1cmRheSxcbiAgICBdO1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IENyZWF0ZUV2ZW50KClcbiAgICAgIC5zZXROYW1lKHRoaXMuaW5wdXRFdmVudE5hbWUgfHwgdGhpcy51c2VyTmFtZSArICdcXCdzIGV2ZW50JylcbiAgICAgIC5zZXREZXNjcmlwdGlvbih0aGlzLmlucHV0RGVzY3JpcHRpb24pXG4gICAgICAuc2V0RGF0ZSh0aGlzLmlucHV0U3RhcnREYXRlLCB0aGlzLmlucHV0RW5kRGF0ZSlcbiAgICAgIC5zZXRUaW1lKHRoaXMuaW5wdXRJc0FsbERhdGVFdmVudCwgdGhpcy5pbnB1dFN0YXJ0VGltZSwgdGhpcy5pbnB1dEVuZFRpbWUpXG4gICAgICAuc2V0VHlwZShFdmVudC50eXBlLlNwb25zb3JlZClcbiAgICAgIC5zZXRSZXBlYXQodGhpcy5pbnB1dEV2ZW50UmVwZWF0VHlwZSwgdGhpcy5pbnB1dEV2ZW50UmVwZWF0RnJlcXVlbmN5LCB3ZWVrRGF5cylcbiAgICAgIC5zZXRUaW1lWm9uZSgnJykgLy8gVE9ETzogUGxhY2UgYnkgcmVhbCB0aW1lIHpvbmVcbiAgICAgIC5zZXRDb250YWN0KHRoaXMuYXV0aFNlcnZpY2UuZ2V0SXRlbSgnZW1haWwnKSwgdGhpcy5hdXRoU2VydmljZS5nZXRJdGVtKCdwaG9uZScpKVxuICAgICAgLnNldExvY2F0aW9uKHRoaXMuaW5wdXRFdmVudEFkZHJlc3MsIG5ldyBMbmdMYXQodGhpcy5pbnB1dEV2ZW50TG9uZ2l0dWRlLCB0aGlzLmlucHV0RXZlbnRMYXRpdHVkZSkpXG4gICAgICAuc2V0Tm90aWZpY2F0aW9uKHRoaXMuaW5wdXROb3RpZmljYXRpb25CeSwgdGhpcy5pbnB1dE5vdGlmaWNhdGlvbkJlZm9yZUhvdXJzKVxuICAgICAgLnNldElzU29jaWFsRXZlbnQoZmFsc2UpXG4gICAgICAuc2V0SW1hZ2VzKHRoaXMuaW5wdXRFdmVudEltYWdlcylcbiAgICAgIC5zZXRHcm91cHModGhpcy5pbnB1dEV2ZW50R3JvdXBzKVxuICAgICAgLnNldFNwb3J0cyhbXSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBvbkNoYW5nZUV2ZW50QWRkcmVzcyhldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmlucHV0RXZlbnRBZGRyZXNzKSByZXR1cm47XG4gICAgaWYgKHRoaXMucHJlU2VhcmNoQWRkcmVzcyB8fCAhdGhpcy5pbnB1dEV2ZW50QWRkcmVzcy5sZW5ndGgpIGNsZWFyVGltZW91dCh0aGlzLnByZVNlYXJjaEFkZHJlc3MpO1xuICAgIHRoaXMucHJlU2VhcmNoQWRkcmVzcyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucHJlU2VhcmNoQWRkcmVzcyk7XG4gICAgICB0aGlzLmxvY2F0aW9uU2VydmljZS5zZWFyY2hBZGRyZXNzQnlLZXlXb3JkKHRoaXMuaW5wdXRFdmVudEFkZHJlc3MpLnRoZW4oXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHRoaXMuc3VnZ2VzdGVkQWRkcmVzcyA9IGRhdGEgJiYgZGF0YS5yZXN1bHRzLm1hcChcbiAgICAgICAgICAoYWRkcmVzczogYW55KSA9PiBuZXcgT2JqZWN0KHtcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MuZm9ybWF0dGVkX2FkZHJlc3MsXG4gICAgICAgICAgICBjb29yZGluYXRlOiBuZXcgTG5nTGF0KGFkZHJlc3MuZ2VvbWV0cnkubG9jYXRpb24ubG5nLCBhZGRyZXNzLmdlb21ldHJ5LmxvY2F0aW9uLmxhdClcbiAgICAgICAgICB9KSkgfHwgW11cbiAgICAgICk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIG9uU2VsZWN0QWRkcmVzcyh2YWx1ZToge2FkZHJlc3M6IHN0cmluZywgY29vcmRpbmF0ZTogTG5nTGF0fSkge1xuICAgIHRoaXMuaW5wdXRFdmVudExhdGl0dWRlID0gdmFsdWUuY29vcmRpbmF0ZS5nZXRMYXQoKTtcbiAgICB0aGlzLmlucHV0RXZlbnRMb25naXR1ZGUgPSB2YWx1ZS5jb29yZGluYXRlLmdldExuZygpO1xuICAgIHRoaXMuaW5wdXRFdmVudEFkZHJlc3MgPSB2YWx1ZS5hZGRyZXNzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWRkcmVzcyA9IFtdO1xuICB9XG5cbiAgb25DbGlja0FkZE1vcmVFdmVudEltYWdlKCkge1xuICAgIGlmICh0aGlzLmltYWdlQnV0dG9uKSB0aGlzLmltYWdlQnV0dG9uLm9uQ2xpY2tCdXR0b24oKTtcbiAgfVxuXG4gIG9uQ2xpY2tSZW1vdmVFdmVudEltYWdlKGltYWdlOiBzdHJpbmcpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmlucHV0RXZlbnRJbWFnZXMuaW5kZXhPZihpbWFnZSk7XG4gICAgaWYgKGluZGV4ID49IDApIHRoaXMuaW5wdXRFdmVudEltYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgb3BlblNjaGVkdWxlRXZlbnRGb3JtKCkge1xuICAgIHRoaXMuaXNTaG93blNjaGVkdWxlRXZlbnRGb3JtID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlU2NoZWR1bGVFdmVudEZvcm0oKSB7XG4gICAgdGhpcy5pc1Nob3duU2NoZWR1bGVFdmVudEZvcm0gPSBmYWxzZTtcbiAgfVxuXG4gIHJlc2V0U2NoZWR1bGVFdmVudEZvcm0oKSB7XG4gICAgdGhpcy5pbnB1dEV2ZW50TmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlucHV0RGVzY3JpcHRpb24gPSAnJztcbiAgICB0aGlzLmlucHV0U3RhcnREYXRlID0gbW9tZW50KCkudmFsdWVPZigpO1xuICAgIHRoaXMuaW5wdXRFbmREYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudmFsdWVPZigpO1xuICAgIHRoaXMuaW5wdXRTdGFydFRpbWUgPSA5O1xuICAgIHRoaXMuaW5wdXRFbmRUaW1lID0gMTE7XG4gICAgdGhpcy5pbnB1dElzQWxsRGF0ZUV2ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dEV2ZW50UmVwZWF0VHlwZSA9IDA7XG4gICAgdGhpcy5pbnB1dEV2ZW50UmVwZWF0RnJlcXVlbmN5ID0gMTtcbiAgICB0aGlzLmlucHV0SXNPY2N1ck1vbmRheSA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRJc09jY3VyVHVlc2RheSA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRJc09jY3VyV2VkbmVzZGF5ID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dElzT2NjdXJUaHVyc2RheSA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRJc09jY3VyRnJpZGF5ID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dElzT2NjdXJTYXR1cmRheSA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRJc09jY3VyU3VuZGF5ID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dE5vdGlmaWNhdGlvbkJ5ID0gMDtcbiAgICB0aGlzLmlucHV0Tm90aWZpY2F0aW9uQmVmb3JlSG91cnMgPSAxO1xuICAgIHRoaXMuaW5wdXRFdmVudEdyb3VwcyA9IFtdO1xuICAgIHRoaXMuaW5wdXRFdmVudEltYWdlcyA9IFtdO1xuICAgIHRoaXMuaW5wdXRFdmVudEFkZHJlc3MgPSAnJztcbiAgICB0aGlzLmlucHV0RXZlbnRMYXRpdHVkZSA9IDA7XG4gICAgdGhpcy5pbnB1dEV2ZW50TG9uZ2l0dWRlID0gMDtcbiAgfVxuXG4gIG9uU3VibWl0U2NoZWR1bGVFdmVudCgpIHtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9TY2hlZHVsZUFuRXZlbnQoKTtcbiAgfVxuXG59XG4iXX0=
