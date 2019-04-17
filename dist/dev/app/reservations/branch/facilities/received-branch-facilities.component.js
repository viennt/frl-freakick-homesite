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
var GetAvailableFacilitiesOnSpecificCenter_1 = require('../../../packages/GetAvailableFacilitiesOnSpecificCenter');
var authentication_service_1 = require('../../../services/authentication.service');
var message_service_1 = require('../../../services/message.service');
var Court_1 = require('../../../models/Court');
var Facility_1 = require('../../../models/Facility');
var constants = require('../../../constants');
var ReceivedBranchFacilitiesComponent = (function () {
    function ReceivedBranchFacilitiesComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.nonResult = new core_1.EventEmitter();
        this.haveResult = new core_1.EventEmitter();
    }
    ReceivedBranchFacilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.filterSports = this.availableSports;
        this.getFacilitiesFromServer();
    };
    ReceivedBranchFacilitiesComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if ('branch' === propName || 'availableSports' === propName) {
                this.filterSports = this.availableSports;
                this.getFacilitiesFromServer();
            }
        }
    };
    ReceivedBranchFacilitiesComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedBranchFacilitiesComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                this.handleReceivedFacilities({ lstFacilities: [] });
                break;
            case 'GET_AVAILABLE_FACILITIES_ON_SPECIFIC_CENTER_SUCCESS':
                this.receivedFacilities = undefined;
                this.handleReceivedFacilities(message.data);
        }
    };
    ReceivedBranchFacilitiesComponent.prototype.handleReceivedFacilities = function (data) {
        data.lstFacilities = Object.prototype.toString.call(data.lstFacilities) !== '[object Array]'
            ? JSON.parse(data.lstFacilities) : data.lstFacilities;
        if (data.lstFacilities.length === 0) {
            this.receivedFacilities = [];
            this.nonResult.emit();
        }
        else {
            this.receivedFacilities = data.lstFacilities
                .filter(function (facilityData) { return facilityData !== null; })
                .map(function (facilityData) { return new Facility_1.Facility(facilityData); });
            this.haveResult.emit();
        }
        this.loadingResultData = false;
    };
    ReceivedBranchFacilitiesComponent.prototype.sendMessageToGetAvailableFacilities = function () {
        var apiPackage = new GetAvailableFacilitiesOnSpecificCenter_1.GetAvailableFacilitiesOnSpecificCenter()
            .setKeyWord('')
            .setSports(this.filterSports)
            .setCourt(this.branch)
            .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedBranchFacilitiesComponent.prototype.getFacilitiesFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableFacilities();
    };
    ReceivedBranchFacilitiesComponent.prototype.filterSportsChanged = function (selectedSport, value) {
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
            _this.getFacilitiesFromServer();
        }, 1000);
    };
    ReceivedBranchFacilitiesComponent.prototype.onBookingFacility = function (facility) {
        if (this.authService.isLoggedIn()) {
            this.selectedFacility = facility;
            jQuery('#bookingFacilityModal').modal('show');
        }
        else {
            this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ReceivedBranchFacilitiesComponent.prototype, "availableSports", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedBranchFacilitiesComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Court_1.Court)
    ], ReceivedBranchFacilitiesComponent.prototype, "branch", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReceivedBranchFacilitiesComponent.prototype, "nonResult", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReceivedBranchFacilitiesComponent.prototype, "haveResult", void 0);
    ReceivedBranchFacilitiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-branch-facilities',
            templateUrl: 'received-branch-facilities.component.html',
            styleUrls: ['received-branch-facilities.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReceivedBranchFacilitiesComponent);
    return ReceivedBranchFacilitiesComponent;
}());
exports.ReceivedBranchFacilitiesComponent = ReceivedBranchFacilitiesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL2ZhY2lsaXRpZXMvcmVjZWl2ZWQtYnJhbmNoLWZhY2lsaXRpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFRTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUt6Qyx1REFBdUQsMERBQTBELENBQUMsQ0FBQTtBQUtsSCx1Q0FBc0MsMENBQTBDLENBQUMsQ0FBQTtBQUNqRixnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQU1uRSxzQkFBc0IsdUJBQXVCLENBQUMsQ0FBQTtBQUM5Qyx5QkFBeUIsMEJBQTBCLENBQUMsQ0FBQTtBQUVwRCxJQUFZLFNBQVMsV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBUWhEO0lBdUJFLDJDQUFvQixNQUFjLEVBQ2QsV0FBa0MsRUFDbEMsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQnhDLGNBQVMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDbEQsZUFBVSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQWlCN0QsQ0FBQztJQUVELG9EQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN6QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsdURBQVcsR0FBWCxVQUFZLE9BQVk7UUFDdEIsR0FBRyxDQUFDLENBQUMsSUFB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QUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDO0lBQ0gsQ0FBQztJQWpIRDtRQUFDLFlBQUssRUFBRTs7OEVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7cUVBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7d0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7eUVBQUE7SUFmWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxXQUFXLEVBQUUsMkNBQTJDO1lBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO1NBQ3hELENBQUM7O3lDQUFBO0lBdUhGLHdDQUFDO0FBQUQsQ0F0SEEsQUFzSEMsSUFBQTtBQXRIWSx5Q0FBaUMsb0NBc0g3QyxDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL2ZhY2lsaXRpZXMvcmVjZWl2ZWQtYnJhbmNoLWZhY2lsaXRpZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIEFQSSBwYWNrYWdlc1xuICovXG5pbXBvcnQgeyBHZXRBdmFpbGFibGVGYWNpbGl0aWVzT25TcGVjaWZpY0NlbnRlciB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL0dldEF2YWlsYWJsZUZhY2lsaXRpZXNPblNwZWNpZmljQ2VudGVyJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgU3BvcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvU3BvcnQnO1xuaW1wb3J0IHsgQ291cnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQ291cnQnO1xuaW1wb3J0IHsgRmFjaWxpdHkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvRmFjaWxpdHknO1xuXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLXJlY2VpdmVkLWJyYW5jaC1mYWNpbGl0aWVzJyxcbiAgdGVtcGxhdGVVcmw6ICdyZWNlaXZlZC1icmFuY2gtZmFjaWxpdGllcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyZWNlaXZlZC1icmFuY2gtZmFjaWxpdGllcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjZWl2ZWRCcmFuY2hGYWNpbGl0aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgcHVibGljIG1lc3NhZ2VTdWI6IGFueTtcblxuICBASW5wdXQoKSBhdmFpbGFibGVTcG9ydHM6IFNwb3J0W107XG4gIEBJbnB1dCgpIHBhZ2luYXRpb25QYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJyYW5jaDogQ291cnQ7XG5cbiAgQE91dHB1dCgpIG5vblJlc3VsdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoYXZlUmVzdWx0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgbG9hZGluZ1Jlc3VsdERhdGE6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlY2VpdmVkRmFjaWxpdGllczogRmFjaWxpdHlbXTtcblxuICBwdWJsaWMgZmlsdGVyU3BvcnRzOiBTcG9ydFtdO1xuXG4gIHB1YmxpYyBzZWxlY3RlZEZhY2lsaXR5OiBGYWNpbGl0eTtcblxuICBwdWJsaWMgbG9hZGVkSW1hZ2U6IGJvb2xlYW5bXTtcblxuICBwdWJsaWMgcHJlRmlsdGVyUmVzdWx0czogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZVN1YiA9IHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB0aGlzLmZpbHRlclNwb3J0cyA9IHRoaXMuYXZhaWxhYmxlU3BvcnRzO1xuICAgIHRoaXMuZ2V0RmFjaWxpdGllc0Zyb21TZXJ2ZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IGFueSB7XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKCdicmFuY2gnID09PSBwcm9wTmFtZSB8fCAnYXZhaWxhYmxlU3BvcnRzJyA9PT0gcHJvcE5hbWUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJTcG9ydHMgPSB0aGlzLmF2YWlsYWJsZVNwb3J0cztcbiAgICAgICAgdGhpcy5nZXRGYWNpbGl0aWVzRnJvbVNlcnZlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ1JFUVVFU1RfSU5QVVRfRVJST1InOlxuICAgICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVjZWl2ZWRGYWNpbGl0aWVzKHtsc3RGYWNpbGl0aWVzOiBbXX0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0dFVF9BVkFJTEFCTEVfRkFDSUxJVElFU19PTl9TUEVDSUZJQ19DRU5URVJfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMucmVjZWl2ZWRGYWNpbGl0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmhhbmRsZVJlY2VpdmVkRmFjaWxpdGllcyhtZXNzYWdlLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlY2VpdmVkRmFjaWxpdGllcyhkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBkYXRhLmxzdEZhY2lsaXRpZXMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YS5sc3RGYWNpbGl0aWVzKSAhPT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgICAgPyBKU09OLnBhcnNlKGRhdGEubHN0RmFjaWxpdGllcykgOiBkYXRhLmxzdEZhY2lsaXRpZXM7XG4gICAgaWYgKGRhdGEubHN0RmFjaWxpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMucmVjZWl2ZWRGYWNpbGl0aWVzID0gW107XG4gICAgICB0aGlzLm5vblJlc3VsdC5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjZWl2ZWRGYWNpbGl0aWVzID0gZGF0YS5sc3RGYWNpbGl0aWVzXG4gICAgICAgIC5maWx0ZXIoKGZhY2lsaXR5RGF0YTogYW55KSA9PiBmYWNpbGl0eURhdGEgIT09IG51bGwpXG4gICAgICAgIC5tYXAoKGZhY2lsaXR5RGF0YTogYW55KSA9PiBuZXcgRmFjaWxpdHkoZmFjaWxpdHlEYXRhKSk7XG4gICAgICB0aGlzLmhhdmVSZXN1bHQuZW1pdCgpO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvR2V0QXZhaWxhYmxlRmFjaWxpdGllcygpOiB2b2lkIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRBdmFpbGFibGVGYWNpbGl0aWVzT25TcGVjaWZpY0NlbnRlcigpXG4gICAgICAuc2V0S2V5V29yZCgnJylcbiAgICAgIC5zZXRTcG9ydHModGhpcy5maWx0ZXJTcG9ydHMpXG4gICAgICAuc2V0Q291cnQodGhpcy5icmFuY2gpXG4gICAgICAuc2V0UGFnaW5hdGlvbihjb25zdGFudHMuU0VBUkNIX1BBR0lOQVRJT04uSVRFTV9QRVJfUEFHRSwgdGhpcy5wYWdpbmF0aW9uUGFnZSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBnZXRGYWNpbGl0aWVzRnJvbVNlcnZlcigpOiB2b2lkIHtcbiAgICAvLyB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcbiAgICB0aGlzLmxvYWRlZEltYWdlID0gW107XG4gICAgdGhpcy5sb2FkaW5nUmVzdWx0RGF0YSA9IHRydWU7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvR2V0QXZhaWxhYmxlRmFjaWxpdGllcygpO1xuICB9XG5cbiAgZmlsdGVyU3BvcnRzQ2hhbmdlZChzZWxlY3RlZFNwb3J0OiBTcG9ydCwgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgaWYgKHRoaXMucHJlRmlsdGVyUmVzdWx0cykgY2xlYXJUaW1lb3V0KHRoaXMucHJlRmlsdGVyUmVzdWx0cyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgaW5TcG9ydCA9IHRoaXMuZmlsdGVyU3BvcnRzLmZpbmQoKHNwb3J0OiBTcG9ydCkgPT4ge1xuICAgICAgICByZXR1cm4gc3BvcnQuc3BvcnRJZCA9PT0gc2VsZWN0ZWRTcG9ydC5zcG9ydElkO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGluU3BvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyU3BvcnRzLnB1c2goc2VsZWN0ZWRTcG9ydCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyU3BvcnRzID0gdGhpcy5maWx0ZXJTcG9ydHMuZmlsdGVyKGZ1bmN0aW9uIChzcG9ydDogU3BvcnQpIHtcbiAgICAgICAgcmV0dXJuIHNwb3J0LnNwb3J0SWQgIT09IHNlbGVjdGVkU3BvcnQuc3BvcnRJZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByZUZpbHRlclJlc3VsdHMgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnByZUZpbHRlclJlc3VsdHMpO1xuICAgICAgdGhpcy5nZXRGYWNpbGl0aWVzRnJvbVNlcnZlcigpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgb25Cb29raW5nRmFjaWxpdHkoZmFjaWxpdHk6IEZhY2lsaXR5KTogYW55IHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGYWNpbGl0eSA9IGZhY2lsaXR5O1xuICAgICAgalF1ZXJ5KCcjYm9va2luZ0ZhY2lsaXR5TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbi9jb250aW51ZS8nLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXSk7XG4gICAgfVxuICB9XG59XG4iXX0=
