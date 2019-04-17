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
var message_service_1 = require('../../../services/message.service');
var location_service_1 = require('../../../services/location.service');
var Event_1 = require('../../../models/Event');
var LngLat_1 = require('../../../models/LngLat');
var GetEvents_1 = require('../../../packages/GetEvents');
var constants_1 = require('../../../constants');
var AllEventsComponent = (function () {
    function AllEventsComponent(messageService, locationService) {
        this.messageService = messageService;
        this.locationService = locationService;
    }
    AllEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paginationPage = 0;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.locationService.getCurrentPosition(function (position) { return _this.afterGetCurrentLocation(position); });
    };
    AllEventsComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    AllEventsComponent.prototype.handleMessage = function (message) {
        this.isLoading = false;
        if (message.messageType === 'SEARCH_EVENTS_SUCCESS') {
            this.paginationPage = message.data.pagination.nextPage;
            var events = message.data.lstEvents.map(function (data) { return new Event_1.Event(data); });
            if (!this.events)
                this.events = events;
            else
                this.events = this.events.concat(events);
        }
    };
    AllEventsComponent.prototype.afterGetCurrentLocation = function (position) {
        this.userCurrentLocation = new LngLat_1.LngLat(position.location.lng, position.location.lat);
        this.isLoading = true;
        this.sendMessageToGetNewsFeed();
    };
    AllEventsComponent.prototype.sendMessageToGetNewsFeed = function () {
        var apiPackage = new GetEvents_1.GetEvents()
            .setEventType([])
            .setStatus(['PL'])
            .setCoordinate(this.userCurrentLocation)
            .setRadius(0)
            .setPagination(constants_1.SEARCH_PAGINATION.ITEM_PER_PAGE_EVENT_TINE_LINE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    AllEventsComponent.prototype.loadMoreEvent = function () {
        if (this.paginationPage > -1) {
            this.isLoading = true;
            this.sendMessageToGetNewsFeed();
        }
    };
    AllEventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-time-line-events',
            templateUrl: 'all-events.component.html',
            styleUrls: ['all-events.component.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, location_service_1.LocationService])
    ], AllEventsComponent);
    return AllEventsComponent;
}());
exports.AllEventsComponent = AllEventsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9hbGwtZXZlbnRzL2FsbC1ldmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFLN0QsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsaUNBQWdDLG9DQUFvQyxDQUFDLENBQUE7QUFLckUsc0JBQXNCLHVCQUF1QixDQUFDLENBQUE7QUFDOUMsdUJBQXVCLHdCQUF3QixDQUFDLENBQUE7QUFLaEQsMEJBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFFeEQsMEJBQWtDLG9CQUFvQixDQUFDLENBQUE7QUFRdkQ7SUFRRSw0QkFDVSxjQUE4QixFQUM5QixlQUFnQztRQURoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUksQ0FBQztJQUUvQyxxQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQUMsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsT0FBWTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLHVCQUF1QixDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ3JDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLEVBQWYsQ0FBZSxDQUMvQixDQUFDO1lBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3ZDLElBQUk7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVELG9EQUF1QixHQUF2QixVQUF3QixRQUFhO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxREFBd0IsR0FBeEI7UUFDRSxJQUFJLFVBQVUsR0FBRyxJQUFJLHFCQUFTLEVBQUU7YUFDN0IsWUFBWSxDQUFDLEVBQUUsQ0FBQzthQUNoQixTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ3ZDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDWixhQUFhLENBQUMsNkJBQWlCLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUE3REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDOzswQkFBQTtJQTBERix5QkFBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksMEJBQWtCLHFCQXlEOUIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vdGltZS1saW5lLXBhZ2UvYWxsLWV2ZW50cy9hbGwtZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvRXZlbnQnO1xuaW1wb3J0IHsgTG5nTGF0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0xuZ0xhdCc7XG5cbi8qKlxuICogcGFja2FnZXNcbiAqL1xuaW1wb3J0IHsgR2V0RXZlbnRzIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvR2V0RXZlbnRzJztcblxuaW1wb3J0IHsgU0VBUkNIX1BBR0lOQVRJT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtdGltZS1saW5lLWV2ZW50cycsXG4gIHRlbXBsYXRlVXJsOiAnYWxsLWV2ZW50cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhbGwtZXZlbnRzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGxFdmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIHB1YmxpYyBldmVudHM6IEV2ZW50W107XG4gIHB1YmxpYyBwYWdpbmF0aW9uUGFnZTogbnVtYmVyO1xuXG4gIHByaXZhdGUgbWVzc2FnZVN1YjogYW55O1xuICBwcml2YXRlIHVzZXJDdXJyZW50TG9jYXRpb246IExuZ0xhdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGxvY2F0aW9uU2VydmljZTogTG9jYXRpb25TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2luYXRpb25QYWdlID0gMDtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG4gICAgdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbjogYW55KSA9PiB0aGlzLmFmdGVyR2V0Q3VycmVudExvY2F0aW9uKHBvc2l0aW9uKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZSA9PT0gJ1NFQVJDSF9FVkVOVFNfU1VDQ0VTUycpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvblBhZ2UgPSBtZXNzYWdlLmRhdGEucGFnaW5hdGlvbi5uZXh0UGFnZTtcbiAgICAgIGxldCBldmVudHMgPSBtZXNzYWdlLmRhdGEubHN0RXZlbnRzLm1hcChcbiAgICAgICAgKGRhdGE6IGFueSkgPT4gbmV3IEV2ZW50KGRhdGEpXG4gICAgICApO1xuICAgICAgaWYgKCF0aGlzLmV2ZW50cykgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgICBlbHNlIHRoaXMuZXZlbnRzID0gdGhpcy5ldmVudHMuY29uY2F0KGV2ZW50cyk7XG4gICAgfVxuICB9XG5cbiAgYWZ0ZXJHZXRDdXJyZW50TG9jYXRpb24ocG9zaXRpb246IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXNlckN1cnJlbnRMb2NhdGlvbiA9IG5ldyBMbmdMYXQocG9zaXRpb24ubG9jYXRpb24ubG5nLCBwb3NpdGlvbi5sb2NhdGlvbi5sYXQpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXROZXdzRmVlZCgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldE5ld3NGZWVkKCk6IHZvaWQge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEdldEV2ZW50cygpXG4gICAgICAuc2V0RXZlbnRUeXBlKFtdKVxuICAgICAgLnNldFN0YXR1cyhbJ1BMJ10pXG4gICAgICAuc2V0Q29vcmRpbmF0ZSh0aGlzLnVzZXJDdXJyZW50TG9jYXRpb24pXG4gICAgICAuc2V0UmFkaXVzKDApXG4gICAgICAuc2V0UGFnaW5hdGlvbihTRUFSQ0hfUEFHSU5BVElPTi5JVEVNX1BFUl9QQUdFX0VWRU5UX1RJTkVfTElORSwgdGhpcy5wYWdpbmF0aW9uUGFnZSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBsb2FkTW9yZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb25QYWdlID4gLTEpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldE5ld3NGZWVkKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
