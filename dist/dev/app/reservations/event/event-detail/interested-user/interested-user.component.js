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
var message_service_1 = require('../../../../services/message.service');
var help_service_1 = require('../../../../services/help.service');
var GetUserInterestedInEvent_1 = require('../../../../packages/GetUserInterestedInEvent');
var InterestedUser = (function () {
    function InterestedUser(messageService) {
        this.messageService = messageService;
        this.lstUser = [];
    }
    InterestedUser.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.sendMessageToGetUserInterestedInEvent();
    };
    InterestedUser.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    InterestedUser.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_USER_INTERESTED_IN_EVENT_SUCCESS':
                this.lstUser = message.data.lstUser.map(function (data) {
                    data.logo = help_service_1.HelpService.getUserLogo(data.logo);
                    return data;
                });
                break;
            case 'REQUEST_ERROR':
                console.error(message.data.message);
        }
    };
    InterestedUser.prototype.sendMessageToGetUserInterestedInEvent = function () {
        if (typeof this.eventId === 'undefined')
            return;
        var apiPackage = new GetUserInterestedInEvent_1.GetUserInterestedInEvent().setEventId(this.eventId);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    InterestedUser.prototype.updateImage = function (image) {
        image = './assets/images/default/event.png';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], InterestedUser.prototype, "eventId", void 0);
    InterestedUser = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'table-interested-user',
            templateUrl: 'interested-user.component.html',
            styleUrls: ['../event-detail.component.css', 'interested-user.component.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], InterestedUser);
    return InterestedUser;
}());
exports.InterestedUser = InterestedUser;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQtZGV0YWlsL2ludGVyZXN0ZWQtdXNlci9pbnRlcmVzdGVkLXVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFLcEUsZ0NBQStCLHNDQUFzQyxDQUFDLENBQUE7QUFDdEUsNkJBQTRCLG1DQUFtQyxDQUFDLENBQUE7QUFLaEUseUNBQXlDLCtDQUErQyxDQUFDLENBQUE7QUFjekY7SUFPRSx3QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRjNDLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFHNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE9BQVk7UUFDeEIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSyxzQ0FBc0M7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUztvQkFDaEQsSUFBSSxDQUFDLElBQUksR0FBRywwQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDO1lBQ1IsS0FBSyxlQUFlO2dCQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCw4REFBcUMsR0FBckM7UUFDRSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFHLElBQUksbURBQXdCLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixLQUFLLEdBQUcsbUNBQW1DLENBQUM7SUFDOUMsQ0FBQztJQXRDRDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFSVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixFQUFFLCtCQUErQixDQUFDO1NBQzlFLENBQUM7O3NCQUFBO0lBMENGLHFCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQXpDWSxzQkFBYyxpQkF5QzFCLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9ldmVudC9ldmVudC1kZXRhaWwvaW50ZXJlc3RlZC11c2VyL2ludGVyZXN0ZWQtdXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvaGVscC5zZXJ2aWNlJztcblxuLyoqXG4gKiBwYWNrYWdlc1xuICovXG5pbXBvcnQgeyBHZXRVc2VySW50ZXJlc3RlZEluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWNrYWdlcy9HZXRVc2VySW50ZXJlc3RlZEluRXZlbnQnO1xuXG4vKipcbiAqIG1vZHVsZXNcbiAqL1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvRXZlbnQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9Vc2VyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndGFibGUtaW50ZXJlc3RlZC11c2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnRlcmVzdGVkLXVzZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MnLCAnaW50ZXJlc3RlZC11c2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmVzdGVkVXNlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBldmVudElkOiBudW1iZXI7XG4gIHB1YmxpYyBtZXNzYWdlU3ViOiBhbnk7XG4gIHB1YmxpYyBldmVudDogRXZlbnQ7XG4gIHB1YmxpYyBsc3RVc2VyOiBVc2VyW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSkpO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldFVzZXJJbnRlcmVzdGVkSW5FdmVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnR0VUX1VTRVJfSU5URVJFU1RFRF9JTl9FVkVOVF9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5sc3RVc2VyID0gbWVzc2FnZS5kYXRhLmxzdFVzZXIubWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBkYXRhLmxvZ28gPSBIZWxwU2VydmljZS5nZXRVc2VyTG9nbyhkYXRhLmxvZ28pO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSRVFVRVNUX0VSUk9SJzpcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLmRhdGEubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldFVzZXJJbnRlcmVzdGVkSW5FdmVudCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRJZCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRVc2VySW50ZXJlc3RlZEluRXZlbnQoKS5zZXRFdmVudElkKHRoaXMuZXZlbnRJZCk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICB1cGRhdGVJbWFnZShpbWFnZTogc3RyaW5nKSB7XG4gICAgaW1hZ2UgPSAnLi9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvZXZlbnQucG5nJztcbiAgfVxufVxuIl19
