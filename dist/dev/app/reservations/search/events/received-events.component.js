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
var GetEvents_1 = require('../../../packages/GetEvents');
var Event_1 = require('../../../models/Event');
var constants_1 = require('../../../constants');
var ReceivedEventsComponent = (function () {
    function ReceivedEventsComponent(messageService) {
        this.messageService = messageService;
    }
    Object.defineProperty(ReceivedEventsComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    ReceivedEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.getEventsFromServer();
    };
    ReceivedEventsComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedEventsComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                break;
            case 'SEARCH_EVENTS_SUCCESS':
                this.receivedEvents = undefined;
                this.handleReceivedEvent(message.data);
        }
    };
    ReceivedEventsComponent.prototype.handleReceivedEvent = function (data) {
        data.lstEvents = Object.prototype.toString.call(data.lstEvents) !== '[object Array]' ? JSON.parse(data.lstEvents) : data.lstEvents;
        if (data.lstEvents.length === 0) {
            this.loadingResultData = false;
            this.receivedEvents = [];
        }
        else {
            this.receivedEvents = data.lstEvents
                .filter(function (facilityData) { return facilityData !== null; })
                .map(function (data) { return new Event_1.Event(data); });
        }
    };
    ReceivedEventsComponent.prototype.getEventsFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableEvents();
    };
    ReceivedEventsComponent.prototype.sendMessageToGetAvailableEvents = function () {
        var apiPackage = new GetEvents_1.GetEvents()
            .setKeyWord(this.keyword)
            .setStatus(['PL'])
            .setCoordinate(this.userLocation.coordinate)
            .setRadius(0)
            .setPagination(constants_1.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedEventsComponent.prototype.eventsImageLoaded = function () {
        this.loadedImage.push(true);
        if (this.loadedImage.length >= this.receivedEvents.length) {
            this.loadingResultData = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedEventsComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ReceivedEventsComponent.prototype, "keyword", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReceivedEventsComponent.prototype, "userLocation", void 0);
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], ReceivedEventsComponent.prototype, "fadeIn", null);
    ReceivedEventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-events',
            templateUrl: 'received-events.component.html',
            styleUrls: ['received-events.component.css'],
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
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], ReceivedEventsComponent);
    return ReceivedEventsComponent;
}());
exports.ReceivedEventsComponent = ReceivedEventsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvc2VhcmNoL2V2ZW50cy9yZWNlaXZlZC1ldmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFDK0QsZUFBZSxDQUFDLENBQUE7QUFLL0UsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFLbkUsMEJBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFLeEQsc0JBQXNCLHVCQUF1QixDQUFDLENBQUE7QUFJOUMsMEJBQWtDLG9CQUFvQixDQUFDLENBQUE7QUFxQnZEO0lBaUJFLGlDQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDbEQsQ0FBQztJQVh1QixzQkFBSSwyQ0FBTTthQUFWO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQVdELDBDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0NBQWEsR0FBYixVQUFjLE9BQVk7UUFDeEIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSyxxQkFBcUI7Z0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLEtBQUssQ0FBQztZQUNSLEtBQUssdUJBQXVCO2dCQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLG1CQUFt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O3dCQUM5QixZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztxQkFDL0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0osaUJBQVUsQ0FBQyxRQUFRLEVBQUUsY0FBTyxDQUFDLEdBQUcsRUFBRSxnQkFBUyxDQUFDO3dCQUMxQyxZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzt3QkFDOUIsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7cUJBQy9CLENBQUMsQ0FBQyxDQUFDO2lCQUNMLENBQUM7YUFDSDtTQUNGLENBQUM7OytCQUFBO0lBNEVGLDhCQUFDO0FBQUQsQ0EzRUEsQUEyRUMsSUFBQTtBQTNFWSwrQkFBdUIsMEJBMkVuQyxDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvc2VhcmNoL2V2ZW50cy9yZWNlaXZlZC1ldmVudHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIEhvc3RCaW5kaW5nLFxuICB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBwYWNrYWdlc1xuICovXG5pbXBvcnQgeyBHZXRFdmVudHMgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9HZXRFdmVudHMnO1xuXG4vKipcbiAqIG1vZGVsc1xuICovXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9FdmVudCc7XG5pbXBvcnQgeyBMbmdMYXQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvTG5nTGF0JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQWRkcmVzcyc7XG5cbmltcG9ydCB7IFNFQVJDSF9QQUdJTkFUSU9OIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLXJlY2VpdmVkLWV2ZW50cycsXG4gIHRlbXBsYXRlVXJsOiAncmVjZWl2ZWQtZXZlbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JlY2VpdmVkLWV2ZW50cy5jb21wb25lbnQuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBbXG4gICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7fSkpLFxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgYW5pbWF0ZSgxMDAwLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDF9KVxuICAgICAgXSkpKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIGFuaW1hdGUoNTAwLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDF9KVxuICAgICAgXSkpKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVjZWl2ZWRFdmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBtZXNzYWdlU3ViOiBhbnk7XG5cbiAgQElucHV0KCkgcGFnaW5hdGlvblBhZ2U6IG51bWJlcjtcbiAgQElucHV0KCkga2V5d29yZDogc3RyaW5nO1xuICBASW5wdXQoKSB1c2VyTG9jYXRpb246IHsgdGltZXpvbmU6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcywgY29vcmRpbmF0ZTogTG5nTGF0IH07XG5cbiAgQEhvc3RCaW5kaW5nKCdAZmFkZUluJykgZ2V0IGZhZGVJbigpIHtcbiAgICByZXR1cm4gJ2luJztcbiAgfVxuXG4gIHB1YmxpYyBsb2FkaW5nUmVzdWx0RGF0YTogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVjZWl2ZWRFdmVudHM6IEV2ZW50W107XG5cbiAgcHVibGljIGxvYWRlZEltYWdlOiBib29sZWFuW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZVN1YiA9IHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB0aGlzLmdldEV2ZW50c0Zyb21TZXJ2ZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ1JFUVVFU1RfSU5QVVRfRVJST1InOlxuICAgICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU0VBUkNIX0VWRU5UU19TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5yZWNlaXZlZEV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlZEV2ZW50KG1lc3NhZ2UuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVjZWl2ZWRFdmVudChkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBkYXRhLmxzdEV2ZW50cyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhLmxzdEV2ZW50cykgIT09ICdbb2JqZWN0IEFycmF5XScgPyBKU09OLnBhcnNlKGRhdGEubHN0RXZlbnRzKSA6IGRhdGEubHN0RXZlbnRzO1xuICAgIGlmIChkYXRhLmxzdEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVjZWl2ZWRFdmVudHMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWNlaXZlZEV2ZW50cyA9IGRhdGEubHN0RXZlbnRzXG4gICAgICAgIC5maWx0ZXIoKGZhY2lsaXR5RGF0YTogYW55KSA9PiBmYWNpbGl0eURhdGEgIT09IG51bGwpXG4gICAgICAgIC5tYXAoKGRhdGE6IGFueSkgPT4gbmV3IEV2ZW50KGRhdGEpKTtcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudHNGcm9tU2VydmVyKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGVkSW1hZ2UgPSBbXTtcbiAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gdHJ1ZTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRBdmFpbGFibGVFdmVudHMoKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRBdmFpbGFibGVFdmVudHMoKTogdm9pZCB7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgR2V0RXZlbnRzKClcbiAgICAgIC5zZXRLZXlXb3JkKHRoaXMua2V5d29yZClcbiAgICAgIC5zZXRTdGF0dXMoWydQTCddKVxuICAgICAgLnNldENvb3JkaW5hdGUodGhpcy51c2VyTG9jYXRpb24uY29vcmRpbmF0ZSlcbiAgICAgIC5zZXRSYWRpdXMoMClcbiAgICAgIC5zZXRQYWdpbmF0aW9uKFNFQVJDSF9QQUdJTkFUSU9OLklURU1fUEVSX1BBR0UsIHRoaXMucGFnaW5hdGlvblBhZ2UpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgZXZlbnRzSW1hZ2VMb2FkZWQoKTogYW55IHtcbiAgICB0aGlzLmxvYWRlZEltYWdlLnB1c2godHJ1ZSk7XG4gICAgaWYgKHRoaXMubG9hZGVkSW1hZ2UubGVuZ3RoID49IHRoaXMucmVjZWl2ZWRFdmVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
