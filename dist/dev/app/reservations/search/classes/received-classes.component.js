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
var SearchAvailableClassForPlayer_1 = require('../../../packages/SearchAvailableClassForPlayer');
var authentication_service_1 = require('../../../services/authentication.service');
var message_service_1 = require('../../../services/message.service');
var FacilityClass_1 = require('../../../models/FacilityClass');
var constants = require('../../../constants');
var ReceivedClassesComponent = (function () {
    function ReceivedClassesComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
    }
    Object.defineProperty(ReceivedClassesComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    ReceivedClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.filterSports = this.availableSports;
        this.filterGroups = this.availableGroups;
        this.loadedImage = [];
        this.getClassesFromServer();
    };
    ReceivedClassesComponent.prototype.ngAfterViewInit = function () {
    };
    ReceivedClassesComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedClassesComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                this.handleReceivedClass({ lstClass: [] });
                break;
            case 'SEARCH_AVAILABLE_CLASS_FOR_PLAYER_SUCCESS':
                this.receivedClasses = undefined;
                this.handleReceivedClass(message.data);
        }
    };
    ReceivedClassesComponent.prototype.handleReceivedClass = function (data) {
        data.lstClass = Object.prototype.toString.call(data.lstClass) !== '[object Array]' ? JSON.parse(data.lstClass) : data.lstClass;
        if (data.lstClass.length === 0) {
            this.loadingResultData = false;
            this.receivedClasses = [];
        }
        else {
            this.receivedClasses = data.lstClass
                .filter(function (classData) { return classData !== null; })
                .map(function (classData) { return new FacilityClass_1.FacilityClass(classData); });
        }
    };
    ReceivedClassesComponent.prototype.sendMessageToGetAvailableClass = function () {
        var apiPackage = new SearchAvailableClassForPlayer_1.SearchAvailableClassForPlayer()
            .setKeyWord(this.keyword)
            .setSports(this.filterSports)
            .setGroups(this.filterGroups)
            .setCity(this.userLocation.address.getCity())
            .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedClassesComponent.prototype.getClassesFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableClass();
    };
    ReceivedClassesComponent.prototype.filterSportsChanged = function (selectedSport, value) {
        var _this = this;
        if (this.preFilterResults)
            clearTimeout(this.preFilterResults);
        if (value) {
            var inSport = this.filterSports.find(function (sport) {
                return sport.sportId === selectedSport.sportId;
            });
            if (typeof inSport === 'undefined') {
                this.filterSports.push(selectedSport);
            }
        }
        else {
            this.filterSports = this.filterSports.filter(function (sport) {
                return sport.sportId !== selectedSport.sportId;
            });
        }
        this.preFilterResults = setTimeout(function () {
            clearTimeout(_this.preFilterResults);
            _this.getClassesFromServer();
        }, 1000);
    };
    ReceivedClassesComponent.prototype.filterGroupsChanged = function (selectedGroup, value) {
        var _this = this;
        if (this.preFilterResults)
            clearTimeout(this.preFilterResults);
        if (value) {
            var inGroup = this.filterGroups.find(function (group) {
                return group.groupId === selectedGroup.groupId;
            });
            if (typeof inGroup === 'undefined') {
                this.filterGroups.push(selectedGroup);
            }
        }
        else {
            this.filterGroups = this.filterGroups.filter(function (group) {
                return group.groupId !== selectedGroup.groupId;
            });
        }
        this.preFilterResults = setTimeout(function () {
            clearTimeout(_this.preFilterResults);
            _this.getClassesFromServer();
        }, 1000);
    };
    ReceivedClassesComponent.prototype.classImageLoaded = function () {
        this.loadedImage.push(true);
        if (this.loadedImage.length >= this.receivedClasses.length) {
            this.loadingResultData = false;
        }
    };
    ReceivedClassesComponent.prototype.updateUrl = function (centerClass) {
        centerClass.trainingClass.category.sportIcon = './assets/images/default/court.png';
        this.classImageLoaded();
    };
    ReceivedClassesComponent.prototype.onOpenClassSchedule = function (classSchedule) {
        this.selectedClassSchedule = classSchedule;
    };
    ReceivedClassesComponent.prototype.onBookingClass = function (facilityClass) {
        if (this.authService.isLoggedIn()) {
            this.selectedClassSchedule = facilityClass.classSchedule;
            this.selectedTrainingClass = facilityClass.trainingClass;
            jQuery('#bookingClassModal').modal('show');
        }
        else {
            this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ReceivedClassesComponent.prototype, "availableSports", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ReceivedClassesComponent.prototype, "availableGroups", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedClassesComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ReceivedClassesComponent.prototype, "keyword", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReceivedClassesComponent.prototype, "userLocation", void 0);
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], ReceivedClassesComponent.prototype, "fadeIn", null);
    ReceivedClassesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-classes',
            templateUrl: 'received-classes.component.html',
            styleUrls: ['received-classes.component.css'],
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
    ], ReceivedClassesComponent);
    return ReceivedClassesComponent;
}());
exports.ReceivedClassesComponent = ReceivedClassesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvc2VhcmNoL2NsYXNzZXMvcmVjZWl2ZWQtY2xhc3Nlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUNpRSxlQUFlLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUt6Qyw4Q0FBOEMsaURBQWlELENBQUMsQ0FBQTtBQUtoRyx1Q0FBc0MsMENBQTBDLENBQUMsQ0FBQTtBQUNqRixnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQVduRSw4QkFBOEIsK0JBQStCLENBQUMsQ0FBQTtBQUU5RCxJQUFZLFNBQVMsV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBcUJoRDtJQTJCRSxrQ0FBb0IsTUFBYyxFQUNkLFdBQWtDLEVBQ2xDLGNBQThCO1FBRjlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFyQnVCLHNCQUFJLDRDQUFNO2FBQVY7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBcUJELDJDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGtEQUFlLEdBQWY7SUFF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QkFDL0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0osaUJBQVUsQ0FBQyxRQUFRLEVBQUUsY0FBTyxDQUFDLEdBQUcsRUFBRSxnQkFBUyxDQUFDO3dCQUMxQyxZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzt3QkFDOUIsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7cUJBQy9CLENBQUMsQ0FBQyxDQUFDO2lCQUNMLENBQUM7YUFDSDtTQUNGLENBQUM7O2dDQUFBO0lBMkpGLCtCQUFDO0FBQUQsQ0ExSkEsQUEwSkMsSUFBQTtBQTFKWSxnQ0FBd0IsMkJBMEpwQyxDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvc2VhcmNoL2NsYXNzZXMvcmVjZWl2ZWQtY2xhc3Nlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsXG4gICAgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKlxuICogQVBJIHBhY2thZ2VzXG4gKi9cbmltcG9ydCB7IFNlYXJjaEF2YWlsYWJsZUNsYXNzRm9yUGxheWVyIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvU2VhcmNoQXZhaWxhYmxlQ2xhc3NGb3JQbGF5ZXInO1xuXG4vKipcbiAqIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIG1vZGVsc1xuICovXG5pbXBvcnQgeyBMbmdMYXQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvTG5nTGF0JztcbmltcG9ydCB7IFNwb3J0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1Nwb3J0JztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0dyb3VwJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQWRkcmVzcyc7XG5pbXBvcnQgeyBUcmFpbmluZ0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1RyYWluaW5nQ2xhc3MnO1xuaW1wb3J0IHsgQ2xhc3NTY2hlZHVsZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9DbGFzc1NjaGVkdWxlJztcbmltcG9ydCB7IEZhY2lsaXR5Q2xhc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvRmFjaWxpdHlDbGFzcyc7XG5cbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmcmstcmVjZWl2ZWQtY2xhc3NlcycsXG4gIHRlbXBsYXRlVXJsOiAncmVjZWl2ZWQtY2xhc3Nlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyZWNlaXZlZC1jbGFzc2VzLmNvbXBvbmVudC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZhZGVJbicsIFtcbiAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHt9KSksXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBhbmltYXRlKDEwMDAsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMX0pXG4gICAgICBdKSkpLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgYW5pbWF0ZSg1MDAsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMX0pXG4gICAgICBdKSkpXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNlaXZlZENsYXNzZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBtZXNzYWdlU3ViOiBhbnk7XG5cbiAgQElucHV0KCkgYXZhaWxhYmxlU3BvcnRzOiBTcG9ydFtdO1xuICBASW5wdXQoKSBhdmFpbGFibGVHcm91cHM6IEdyb3VwW107XG4gIEBJbnB1dCgpIHBhZ2luYXRpb25QYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGtleXdvcmQ6IHN0cmluZztcbiAgQElucHV0KCkgdXNlckxvY2F0aW9uOiB7IHRpbWV6b25lOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MsIGNvb3JkaW5hdGU6IExuZ0xhdCB9O1xuXG4gIEBIb3N0QmluZGluZygnQGZhZGVJbicpIGdldCBmYWRlSW4oKSB7XG4gICAgcmV0dXJuICdpbic7XG4gIH1cblxuICBwdWJsaWMgbG9hZGluZ1Jlc3VsdERhdGE6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlY2VpdmVkQ2xhc3NlczogRmFjaWxpdHlDbGFzc1tdO1xuXG4gIHB1YmxpYyBmaWx0ZXJTcG9ydHM6IFNwb3J0W107XG4gIHB1YmxpYyBmaWx0ZXJHcm91cHM6IEdyb3VwW107XG5cbiAgcHJvdGVjdGVkIHNlbGVjdGVkVHJhaW5pbmdDbGFzczogVHJhaW5pbmdDbGFzcztcbiAgcHJvdGVjdGVkIHNlbGVjdGVkQ2xhc3NTY2hlZHVsZTogQ2xhc3NTY2hlZHVsZTtcblxuICBwdWJsaWMgbG9hZGVkSW1hZ2U6IGJvb2xlYW5bXTtcblxuICBwdWJsaWMgcHJlRmlsdGVyUmVzdWx0czogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZVN1YiA9IHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB0aGlzLmZpbHRlclNwb3J0cyA9IHRoaXMuYXZhaWxhYmxlU3BvcnRzO1xuICAgIHRoaXMuZmlsdGVyR3JvdXBzID0gdGhpcy5hdmFpbGFibGVHcm91cHM7XG4gICAgdGhpcy5sb2FkZWRJbWFnZSA9IFtdO1xuICAgIHRoaXMuZ2V0Q2xhc3Nlc0Zyb21TZXJ2ZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBqUXVlcnkoJyNkYXRlcmFuZ2UnKS5kYXRlcmFuZ2VwaWNrZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ1JFUVVFU1RfSU5QVVRfRVJST1InOlxuICAgICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVjZWl2ZWRDbGFzcyh7bHN0Q2xhc3M6IFtdfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU0VBUkNIX0FWQUlMQUJMRV9DTEFTU19GT1JfUExBWUVSX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLnJlY2VpdmVkQ2xhc3NlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlZENsYXNzKG1lc3NhZ2UuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVjZWl2ZWRDbGFzcyhkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBkYXRhLmxzdENsYXNzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEubHN0Q2xhc3MpICE9PSAnW29iamVjdCBBcnJheV0nID8gSlNPTi5wYXJzZShkYXRhLmxzdENsYXNzKSA6IGRhdGEubHN0Q2xhc3M7XG4gICAgaWYgKGRhdGEubHN0Q2xhc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgICB0aGlzLnJlY2VpdmVkQ2xhc3NlcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY2VpdmVkQ2xhc3NlcyA9IGRhdGEubHN0Q2xhc3NcbiAgICAgICAgLmZpbHRlcigoY2xhc3NEYXRhOiBhbnkpID0+IGNsYXNzRGF0YSAhPT0gbnVsbClcbiAgICAgICAgLm1hcCgoY2xhc3NEYXRhOiBhbnkpID0+IG5ldyBGYWNpbGl0eUNsYXNzKGNsYXNzRGF0YSkpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRBdmFpbGFibGVDbGFzcygpOiB2b2lkIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBTZWFyY2hBdmFpbGFibGVDbGFzc0ZvclBsYXllcigpXG4gICAgICAuc2V0S2V5V29yZCh0aGlzLmtleXdvcmQpXG4gICAgICAuc2V0U3BvcnRzKHRoaXMuZmlsdGVyU3BvcnRzKVxuICAgICAgLnNldEdyb3Vwcyh0aGlzLmZpbHRlckdyb3VwcylcbiAgICAgIC5zZXRDaXR5KHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3MuZ2V0Q2l0eSgpKVxuICAgICAgLnNldFBhZ2luYXRpb24oY29uc3RhbnRzLlNFQVJDSF9QQUdJTkFUSU9OLklURU1fUEVSX1BBR0UsIHRoaXMucGFnaW5hdGlvblBhZ2UpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgZ2V0Q2xhc3Nlc0Zyb21TZXJ2ZXIoKTogdm9pZCB7XG4gICAgLy8gd2luZG93LnNjcm9sbFRvKDAsMCk7XG4gICAgdGhpcy5sb2FkZWRJbWFnZSA9IFtdO1xuICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSB0cnVlO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldEF2YWlsYWJsZUNsYXNzKCk7XG4gIH1cblxuICBmaWx0ZXJTcG9ydHNDaGFuZ2VkKHNlbGVjdGVkU3BvcnQ6IFNwb3J0LCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5wcmVGaWx0ZXJSZXN1bHRzKSBjbGVhclRpbWVvdXQodGhpcy5wcmVGaWx0ZXJSZXN1bHRzKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBpblNwb3J0ID0gdGhpcy5maWx0ZXJTcG9ydHMuZmluZCgoc3BvcnQ6IFNwb3J0KSA9PiB7XG4gICAgICAgIHJldHVybiBzcG9ydC5zcG9ydElkID09PSBzZWxlY3RlZFNwb3J0LnNwb3J0SWQ7XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgaW5TcG9ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJTcG9ydHMucHVzaChzZWxlY3RlZFNwb3J0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJTcG9ydHMgPSB0aGlzLmZpbHRlclNwb3J0cy5maWx0ZXIoZnVuY3Rpb24gKHNwb3J0OiBTcG9ydCkge1xuICAgICAgICByZXR1cm4gc3BvcnQuc3BvcnRJZCAhPT0gc2VsZWN0ZWRTcG9ydC5zcG9ydElkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJlRmlsdGVyUmVzdWx0cyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucHJlRmlsdGVyUmVzdWx0cyk7XG4gICAgICB0aGlzLmdldENsYXNzZXNGcm9tU2VydmVyKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBmaWx0ZXJHcm91cHNDaGFuZ2VkKHNlbGVjdGVkR3JvdXA6IEdyb3VwLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5wcmVGaWx0ZXJSZXN1bHRzKSBjbGVhclRpbWVvdXQodGhpcy5wcmVGaWx0ZXJSZXN1bHRzKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBpbkdyb3VwID0gdGhpcy5maWx0ZXJHcm91cHMuZmluZCgoZ3JvdXA6IEdyb3VwKSA9PiB7XG4gICAgICAgIHJldHVybiBncm91cC5ncm91cElkID09PSBzZWxlY3RlZEdyb3VwLmdyb3VwSWQ7XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgaW5Hcm91cCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJHcm91cHMucHVzaChzZWxlY3RlZEdyb3VwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJHcm91cHMgPSB0aGlzLmZpbHRlckdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24gKGdyb3VwOiBHcm91cCkge1xuICAgICAgICByZXR1cm4gZ3JvdXAuZ3JvdXBJZCAhPT0gc2VsZWN0ZWRHcm91cC5ncm91cElkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJlRmlsdGVyUmVzdWx0cyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucHJlRmlsdGVyUmVzdWx0cyk7XG4gICAgICB0aGlzLmdldENsYXNzZXNGcm9tU2VydmVyKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBjbGFzc0ltYWdlTG9hZGVkKCk6IGFueSB7XG4gICAgdGhpcy5sb2FkZWRJbWFnZS5wdXNoKHRydWUpO1xuICAgIGlmICh0aGlzLmxvYWRlZEltYWdlLmxlbmd0aCA+PSB0aGlzLnJlY2VpdmVkQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVVcmwoY2VudGVyQ2xhc3M6IGFueSk6IGFueSB7XG4gICAgY2VudGVyQ2xhc3MudHJhaW5pbmdDbGFzcy5jYXRlZ29yeS5zcG9ydEljb24gPSAnLi9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvY291cnQucG5nJztcbiAgICB0aGlzLmNsYXNzSW1hZ2VMb2FkZWQoKTtcbiAgfVxuXG4gIG9uT3BlbkNsYXNzU2NoZWR1bGUoY2xhc3NTY2hlZHVsZTogQ2xhc3NTY2hlZHVsZSk6IGFueSB7XG4gICAgdGhpcy5zZWxlY3RlZENsYXNzU2NoZWR1bGUgPSBjbGFzc1NjaGVkdWxlO1xuICB9XG5cbiAgb25Cb29raW5nQ2xhc3MoZmFjaWxpdHlDbGFzczogRmFjaWxpdHlDbGFzcyk6IGFueSB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2xhc3NTY2hlZHVsZSA9IGZhY2lsaXR5Q2xhc3MuY2xhc3NTY2hlZHVsZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUcmFpbmluZ0NsYXNzID0gZmFjaWxpdHlDbGFzcy50cmFpbmluZ0NsYXNzO1xuICAgICAgalF1ZXJ5KCcjYm9va2luZ0NsYXNzTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbi9jb250aW51ZS8nLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXSk7XG4gICAgfVxuICB9XG59XG4iXX0=
