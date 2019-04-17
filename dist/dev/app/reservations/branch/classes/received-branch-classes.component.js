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
var SearchAvailableClassByOwnerOnSpecificCenter_1 = require('../../../packages/SearchAvailableClassByOwnerOnSpecificCenter');
var authentication_service_1 = require('../../../services/authentication.service');
var message_service_1 = require('../../../services/message.service');
var Court_1 = require('../../../models/Court');
var FacilityClass_1 = require('../../../models/FacilityClass');
var constants = require('../../../constants');
var ReceivedBranchClassesComponent = (function () {
    function ReceivedBranchClassesComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.nonResult = new core_1.EventEmitter();
        this.haveResult = new core_1.EventEmitter();
    }
    ReceivedBranchClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.filterSports = this.availableSports;
        this.filterGroups = this.availableGroups;
        this.getClassesFromServer();
    };
    ReceivedBranchClassesComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if ('branch' === propName || 'availableSports' === propName || 'availableGroups' === propName) {
                this.filterSports = this.availableSports;
                this.filterGroups = this.availableGroups;
                this.getClassesFromServer();
            }
        }
    };
    ReceivedBranchClassesComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedBranchClassesComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                this.handleReceivedClass({ lstClass: [] });
                break;
            case 'SEARCH_AVAILABLE_CLASS_BY_OWNER_ON_SPECIFIC_CENTER_SUCCESS':
                this.receivedClasses = undefined;
                this.handleReceivedClass(message.data);
        }
    };
    ReceivedBranchClassesComponent.prototype.handleReceivedClass = function (data) {
        data.lstClass = Object.prototype.toString.call(data.lstClass) !== '[object Array]' ? JSON.parse(data.lstClass) : data.lstClass;
        if (data.lstClass.length === 0) {
            this.receivedClasses = [];
            this.nonResult.emit();
        }
        else {
            this.receivedClasses = data.lstClass
                .filter(function (classData) { return classData !== null; })
                .map(function (classData) { return new FacilityClass_1.FacilityClass(classData); });
            this.haveResult.emit();
        }
        this.loadingResultData = false;
    };
    ReceivedBranchClassesComponent.prototype.sendMessageToGetAvailableClass = function () {
        var apiPackage = new SearchAvailableClassByOwnerOnSpecificCenter_1.SearchAvailableClassByOwnerOnSpecificCenter()
            .setKeyWord('')
            .setSports(this.filterSports)
            .setGroups(this.filterGroups)
            .setCourt(this.branch)
            .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedBranchClassesComponent.prototype.getClassesFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableClass();
    };
    ReceivedBranchClassesComponent.prototype.filterSportsChanged = function (selectedSport, value) {
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
    ReceivedBranchClassesComponent.prototype.filterGroupsChanged = function (selectedGroup, value) {
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
    ReceivedBranchClassesComponent.prototype.onOpenClassSchedule = function (classSchedule) {
        this.selectedClassSchedule = classSchedule;
    };
    ReceivedBranchClassesComponent.prototype.onBookingClass = function (facilityClass) {
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
    ], ReceivedBranchClassesComponent.prototype, "availableSports", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ReceivedBranchClassesComponent.prototype, "availableGroups", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedBranchClassesComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Court_1.Court)
    ], ReceivedBranchClassesComponent.prototype, "branch", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReceivedBranchClassesComponent.prototype, "nonResult", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReceivedBranchClassesComponent.prototype, "haveResult", void 0);
    ReceivedBranchClassesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-branch-classes',
            templateUrl: 'received-branch-classes.component.html',
            styleUrls: ['received-branch-classes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReceivedBranchClassesComponent);
    return ReceivedBranchClassesComponent;
}());
exports.ReceivedBranchClassesComponent = ReceivedBranchClassesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL2NsYXNzZXMvcmVjZWl2ZWQtYnJhbmNoLWNsYXNzZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFRTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUt6Qyw0REFBNEQsK0RBQStELENBQUMsQ0FBQTtBQUs1SCx1Q0FBc0MsMENBQTBDLENBQUMsQ0FBQTtBQUNqRixnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQU9uRSxzQkFBc0IsdUJBQXVCLENBQUMsQ0FBQTtBQUc5Qyw4QkFBOEIsK0JBQStCLENBQUMsQ0FBQTtBQUU5RCxJQUFZLFNBQVMsV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBUWhEO0lBMEJFLHdDQUFvQixNQUFjLEVBQ2QsV0FBa0MsRUFDbEMsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFuQnhDLGNBQVMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDbEQsZUFBVSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQW1CN0QsQ0FBQztJQUVELGlEQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG9EQUFX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QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUN6RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUN6RCxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEcsQ0FBQztJQUNILENBQUM7SUEvSUQ7UUFBQyxZQUFLLEVBQUU7OzJFQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzJFQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzBFQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2tFQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O3FFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3NFQUFBO0lBaEJYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7U0FDckQsQ0FBQzs7c0NBQUE7SUFxSkYscUNBQUM7QUFBRCxDQXBKQSxBQW9KQyxJQUFBO0FBcEpZLHNDQUE4QixpQ0FvSjFDLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9icmFuY2gvY2xhc3Nlcy9yZWNlaXZlZC1icmFuY2gtY2xhc3Nlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKlxuICogQVBJIHBhY2thZ2VzXG4gKi9cbmltcG9ydCB7IFNlYXJjaEF2YWlsYWJsZUNsYXNzQnlPd25lck9uU3BlY2lmaWNDZW50ZXIgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9TZWFyY2hBdmFpbGFibGVDbGFzc0J5T3duZXJPblNwZWNpZmljQ2VudGVyJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgU3BvcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvU3BvcnQnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvR3JvdXAnO1xuaW1wb3J0IHsgQ291cnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQ291cnQnO1xuaW1wb3J0IHsgVHJhaW5pbmdDbGFzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9UcmFpbmluZ0NsYXNzJztcbmltcG9ydCB7IENsYXNzU2NoZWR1bGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQ2xhc3NTY2hlZHVsZSc7XG5pbXBvcnQgeyBGYWNpbGl0eUNsYXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0ZhY2lsaXR5Q2xhc3MnO1xuXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLXJlY2VpdmVkLWJyYW5jaC1jbGFzc2VzJyxcbiAgdGVtcGxhdGVVcmw6ICdyZWNlaXZlZC1icmFuY2gtY2xhc3Nlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyZWNlaXZlZC1icmFuY2gtY2xhc3Nlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjZWl2ZWRCcmFuY2hDbGFzc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgcHVibGljIG1lc3NhZ2VTdWI6IGFueTtcblxuICBASW5wdXQoKSBhdmFpbGFibGVTcG9ydHM6IFNwb3J0W107XG4gIEBJbnB1dCgpIGF2YWlsYWJsZUdyb3VwczogR3JvdXBbXTtcbiAgQElucHV0KCkgcGFnaW5hdGlvblBhZ2U6IG51bWJlcjtcbiAgQElucHV0KCkgYnJhbmNoOiBDb3VydDtcblxuICBAT3V0cHV0KCkgbm9uUmVzdWx0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhhdmVSZXN1bHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBsb2FkaW5nUmVzdWx0RGF0YTogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVjZWl2ZWRDbGFzc2VzOiBGYWNpbGl0eUNsYXNzW107XG5cbiAgcHVibGljIGZpbHRlclNwb3J0czogU3BvcnRbXTtcbiAgcHVibGljIGZpbHRlckdyb3VwczogR3JvdXBbXTtcblxuICBwcm90ZWN0ZWQgc2VsZWN0ZWRUcmFpbmluZ0NsYXNzOiBUcmFpbmluZ0NsYXNzO1xuICBwcm90ZWN0ZWQgc2VsZWN0ZWRDbGFzc1NjaGVkdWxlOiBDbGFzc1NjaGVkdWxlO1xuXG4gIHB1YmxpYyBsb2FkZWRJbWFnZTogYm9vbGVhbltdO1xuXG4gIHB1YmxpYyBwcmVGaWx0ZXJSZXN1bHRzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSkpO1xuICAgIHRoaXMuZmlsdGVyU3BvcnRzID0gdGhpcy5hdmFpbGFibGVTcG9ydHM7XG4gICAgdGhpcy5maWx0ZXJHcm91cHMgPSB0aGlzLmF2YWlsYWJsZUdyb3VwcztcbiAgICB0aGlzLmdldENsYXNzZXNGcm9tU2VydmVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiBhbnkge1xuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmICgnYnJhbmNoJyA9PT0gcHJvcE5hbWUgfHwgJ2F2YWlsYWJsZVNwb3J0cycgPT09IHByb3BOYW1lIHx8ICdhdmFpbGFibGVHcm91cHMnID09PSBwcm9wTmFtZSkge1xuICAgICAgICB0aGlzLmZpbHRlclNwb3J0cyA9IHRoaXMuYXZhaWxhYmxlU3BvcnRzO1xuICAgICAgICB0aGlzLmZpbHRlckdyb3VwcyA9IHRoaXMuYXZhaWxhYmxlR3JvdXBzO1xuICAgICAgICB0aGlzLmdldENsYXNzZXNGcm9tU2VydmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnUkVRVUVTVF9JTlBVVF9FUlJPUic6XG4gICAgICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlZENsYXNzKHtsc3RDbGFzczogW119KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTRUFSQ0hfQVZBSUxBQkxFX0NMQVNTX0JZX09XTkVSX09OX1NQRUNJRklDX0NFTlRFUl9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5yZWNlaXZlZENsYXNzZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVjZWl2ZWRDbGFzcyhtZXNzYWdlLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlY2VpdmVkQ2xhc3MoZGF0YTogYW55KTogdm9pZCB7XG4gICAgZGF0YS5sc3RDbGFzcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhLmxzdENsYXNzKSAhPT0gJ1tvYmplY3QgQXJyYXldJyA/IEpTT04ucGFyc2UoZGF0YS5sc3RDbGFzcykgOiBkYXRhLmxzdENsYXNzO1xuICAgIGlmIChkYXRhLmxzdENsYXNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5yZWNlaXZlZENsYXNzZXMgPSBbXTtcbiAgICAgIHRoaXMubm9uUmVzdWx0LmVtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWNlaXZlZENsYXNzZXMgPSBkYXRhLmxzdENsYXNzXG4gICAgICAgIC5maWx0ZXIoKGNsYXNzRGF0YTogYW55KSA9PiBjbGFzc0RhdGEgIT09IG51bGwpXG4gICAgICAgIC5tYXAoKGNsYXNzRGF0YTogYW55KSA9PiBuZXcgRmFjaWxpdHlDbGFzcyhjbGFzc0RhdGEpKTtcbiAgICAgIHRoaXMuaGF2ZVJlc3VsdC5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSBmYWxzZTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRBdmFpbGFibGVDbGFzcygpOiB2b2lkIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBTZWFyY2hBdmFpbGFibGVDbGFzc0J5T3duZXJPblNwZWNpZmljQ2VudGVyKClcbiAgICAgIC5zZXRLZXlXb3JkKCcnKVxuICAgICAgLnNldFNwb3J0cyh0aGlzLmZpbHRlclNwb3J0cylcbiAgICAgIC5zZXRHcm91cHModGhpcy5maWx0ZXJHcm91cHMpXG4gICAgICAuc2V0Q291cnQodGhpcy5icmFuY2gpXG4gICAgICAuc2V0UGFnaW5hdGlvbihjb25zdGFudHMuU0VBUkNIX1BBR0lOQVRJT04uSVRFTV9QRVJfUEFHRSwgdGhpcy5wYWdpbmF0aW9uUGFnZSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBnZXRDbGFzc2VzRnJvbVNlcnZlcigpOiB2b2lkIHtcbiAgICAvLyB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcbiAgICB0aGlzLmxvYWRlZEltYWdlID0gW107XG4gICAgdGhpcy5sb2FkaW5nUmVzdWx0RGF0YSA9IHRydWU7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvR2V0QXZhaWxhYmxlQ2xhc3MoKTtcbiAgfVxuXG4gIGZpbHRlclNwb3J0c0NoYW5nZWQoc2VsZWN0ZWRTcG9ydDogU3BvcnQsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLnByZUZpbHRlclJlc3VsdHMpIGNsZWFyVGltZW91dCh0aGlzLnByZUZpbHRlclJlc3VsdHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGluU3BvcnQgPSB0aGlzLmZpbHRlclNwb3J0cy5maW5kKChzcG9ydDogU3BvcnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHNwb3J0LnNwb3J0SWQgPT09IHNlbGVjdGVkU3BvcnQuc3BvcnRJZDtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBpblNwb3J0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmZpbHRlclNwb3J0cy5wdXNoKHNlbGVjdGVkU3BvcnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNwb3J0cyA9IHRoaXMuZmlsdGVyU3BvcnRzLmZpbHRlcihmdW5jdGlvbiAoc3BvcnQ6IFNwb3J0KSB7XG4gICAgICAgIHJldHVybiBzcG9ydC5zcG9ydElkICE9PSBzZWxlY3RlZFNwb3J0LnNwb3J0SWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcmVGaWx0ZXJSZXN1bHRzID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wcmVGaWx0ZXJSZXN1bHRzKTtcbiAgICAgIHRoaXMuZ2V0Q2xhc3Nlc0Zyb21TZXJ2ZXIoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGZpbHRlckdyb3Vwc0NoYW5nZWQoc2VsZWN0ZWRHcm91cDogR3JvdXAsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLnByZUZpbHRlclJlc3VsdHMpIGNsZWFyVGltZW91dCh0aGlzLnByZUZpbHRlclJlc3VsdHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGluR3JvdXAgPSB0aGlzLmZpbHRlckdyb3Vwcy5maW5kKChncm91cDogR3JvdXApID0+IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmdyb3VwSWQgPT09IHNlbGVjdGVkR3JvdXAuZ3JvdXBJZDtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBpbkdyb3VwID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmZpbHRlckdyb3Vwcy5wdXNoKHNlbGVjdGVkR3JvdXApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlckdyb3VwcyA9IHRoaXMuZmlsdGVyR3JvdXBzLmZpbHRlcihmdW5jdGlvbiAoZ3JvdXA6IEdyb3VwKSB7XG4gICAgICAgIHJldHVybiBncm91cC5ncm91cElkICE9PSBzZWxlY3RlZEdyb3VwLmdyb3VwSWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcmVGaWx0ZXJSZXN1bHRzID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wcmVGaWx0ZXJSZXN1bHRzKTtcbiAgICAgIHRoaXMuZ2V0Q2xhc3Nlc0Zyb21TZXJ2ZXIoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIG9uT3BlbkNsYXNzU2NoZWR1bGUoY2xhc3NTY2hlZHVsZTogQ2xhc3NTY2hlZHVsZSk6IGFueSB7XG4gICAgdGhpcy5zZWxlY3RlZENsYXNzU2NoZWR1bGUgPSBjbGFzc1NjaGVkdWxlO1xuICB9XG5cbiAgb25Cb29raW5nQ2xhc3MoZmFjaWxpdHlDbGFzczogRmFjaWxpdHlDbGFzcyk6IGFueSB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2xhc3NTY2hlZHVsZSA9IGZhY2lsaXR5Q2xhc3MuY2xhc3NTY2hlZHVsZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUcmFpbmluZ0NsYXNzID0gZmFjaWxpdHlDbGFzcy50cmFpbmluZ0NsYXNzO1xuICAgICAgalF1ZXJ5KCcjYm9va2luZ0NsYXNzTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbi9jb250aW51ZS8nLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXSk7XG4gICAgfVxuICB9XG59XG4iXX0=
