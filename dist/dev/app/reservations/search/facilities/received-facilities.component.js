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
var GetAvailableFacilities_1 = require('../../../packages/GetAvailableFacilities');
var authentication_service_1 = require('../../../services/authentication.service');
var message_service_1 = require('../../../services/message.service');
var Facility_1 = require('../../../models/Facility');
var constants = require('../../../constants');
var ReceivedFacilitiesComponent = (function () {
    function ReceivedFacilitiesComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
    }
    Object.defineProperty(ReceivedFacilitiesComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    ReceivedFacilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.filterSports = this.availableSports;
        this.loadedImage = [];
        this.getFacilitiesFromServer();
    };
    ReceivedFacilitiesComponent.prototype.ngAfterViewInit = function () {
    };
    ReceivedFacilitiesComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReceivedFacilitiesComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_INPUT_ERROR':
                this.loadingResultData = false;
                this.handleReceivedFacilities({ lstFacilities: [] });
                break;
            case 'GET_AVAILABLE_FACILITIES_SUCCESS':
                this.receivedFacilities = undefined;
                this.handleReceivedFacilities(message.data);
        }
    };
    ReceivedFacilitiesComponent.prototype.handleReceivedFacilities = function (data) {
        data.lstFacilities = Object.prototype.toString.call(data.lstFacilities) !== '[object Array]'
            ? JSON.parse(data.lstFacilities) : data.lstFacilities;
        if (data.lstFacilities.length === 0) {
            this.loadingResultData = false;
            this.receivedFacilities = [];
        }
        else {
            this.receivedFacilities = data.lstFacilities
                .filter(function (facilityData) { return facilityData !== null; })
                .map(function (facilityData) { return new Facility_1.Facility(facilityData); });
        }
    };
    ReceivedFacilitiesComponent.prototype.sendMessageToGetAvailableFacilities = function () {
        var apiPackage = new GetAvailableFacilities_1.GetAvailableFacilities()
            .setKeyWord(this.keyword)
            .setSports(this.filterSports)
            .setCity(this.userLocation.address.getCity())
            .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReceivedFacilitiesComponent.prototype.getFacilitiesFromServer = function () {
        this.loadedImage = [];
        this.loadingResultData = true;
        this.sendMessageToGetAvailableFacilities();
    };
    ReceivedFacilitiesComponent.prototype.filterSportsChanged = function (selectedSport, value) {
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
    ReceivedFacilitiesComponent.prototype.facilitiesImageLoaded = function () {
        this.loadedImage.push(true);
        if (this.loadedImage.length >= this.receivedFacilities.length) {
            this.loadingResultData = false;
        }
    };
    ReceivedFacilitiesComponent.prototype.updateUrl = function (facility) {
        facility.partner.logo = './assets/images/default/court.png';
        this.facilitiesImageLoaded();
    };
    ReceivedFacilitiesComponent.prototype.onBookingFacility = function (facility) {
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
    ], ReceivedFacilitiesComponent.prototype, "availableSports", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ReceivedFacilitiesComponent.prototype, "paginationPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ReceivedFacilitiesComponent.prototype, "keyword", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReceivedFacilitiesComponent.prototype, "userLocation", void 0);
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], ReceivedFacilitiesComponent.prototype, "fadeIn", null);
    ReceivedFacilitiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-received-facilities',
            templateUrl: 'received-facilities.component.html',
            styleUrls: ['received-facilities.component.css'],
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
    ], ReceivedFacilitiesComponent);
    return ReceivedFacilitiesComponent;
}());
exports.ReceivedFacilitiesComponent = ReceivedFacilitiesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvc2VhcmNoL2ZhY2lsaXRpZXMvcmVjZWl2ZWQtZmFjaWxpdGllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUNpRSxlQUFlLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUt6Qyx1Q0FBdUMsMENBQTBDLENBQUMsQ0FBQTtBQUtsRix1Q0FBc0MsMENBQTBDLENBQUMsQ0FBQTtBQUNqRixnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQVFuRSx5QkFBeUIsMEJBQTBCLENBQUMsQ0FBQTtBQUVwRCxJQUFZLFNBQVMsV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBcUJoRDtJQXdCRSxxQ0FBb0IsTUFBYyxFQUNkLFdBQWtDLEVBQ2xDLGNBQThCO1FBRjlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFuQnVCLHNCQUFJLCtDQUFNO2FBQVY7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBbUJELDhDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQscURBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVB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RSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO3dCQUM5QixZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztxQkFDL0IsQ0FBQyxDQUFDLENBQUM7aUJBQ0wsQ0FBQzthQUNIO1NBQ0YsQ0FBQzs7bUNBQUE7SUE2SEYsa0NBQUM7QUFBRCxDQTVIQSxBQTRIQyxJQUFBO0FBNUhZLG1DQUEyQiw4QkE0SHZDLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9zZWFyY2gvZmFjaWxpdGllcy9yZWNlaXZlZC1mYWNpbGl0aWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIElucHV0LCBIb3N0QmluZGluZyxcbiAgICB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBBUEkgcGFja2FnZXNcbiAqL1xuaW1wb3J0IHsgR2V0QXZhaWxhYmxlRmFjaWxpdGllcyB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL0dldEF2YWlsYWJsZUZhY2lsaXRpZXMnO1xuXG4vKipcbiAqIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIG1vZGVsc1xuICovXG5pbXBvcnQgeyBTcG9ydCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9TcG9ydCc7XG5pbXBvcnQgeyBMbmdMYXQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvTG5nTGF0JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQWRkcmVzcyc7XG5pbXBvcnQgeyBGYWNpbGl0eSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9GYWNpbGl0eSc7XG5cbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmcmstcmVjZWl2ZWQtZmFjaWxpdGllcycsXG4gIHRlbXBsYXRlVXJsOiAncmVjZWl2ZWQtZmFjaWxpdGllcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyZWNlaXZlZC1mYWNpbGl0aWVzLmNvbXBvbmVudC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZhZGVJbicsIFtcbiAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHt9KSksXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBhbmltYXRlKDEwMDAsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMX0pXG4gICAgICBdKSkpLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgYW5pbWF0ZSg1MDAsIGtleWZyYW1lcyhbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMX0pXG4gICAgICBdKSkpXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNlaXZlZEZhY2lsaXRpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBtZXNzYWdlU3ViOiBhbnk7XG5cbiAgQElucHV0KCkgYXZhaWxhYmxlU3BvcnRzOiBTcG9ydFtdO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uUGFnZTogbnVtYmVyO1xuICBASW5wdXQoKSBrZXl3b3JkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXJMb2NhdGlvbjogeyB0aW1lem9uZTogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzLCBjb29yZGluYXRlOiBMbmdMYXQgfTtcblxuICBASG9zdEJpbmRpbmcoJ0BmYWRlSW4nKSBnZXQgZmFkZUluKCkge1xuICAgIHJldHVybiAnaW4nO1xuICB9XG5cbiAgcHVibGljIGxvYWRpbmdSZXN1bHREYXRhOiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWNlaXZlZEZhY2lsaXRpZXM6IEZhY2lsaXR5W107XG5cbiAgcHVibGljIGZpbHRlclNwb3J0czogU3BvcnRbXTtcblxuICBwdWJsaWMgc2VsZWN0ZWRGYWNpbGl0eTogRmFjaWxpdHk7XG5cbiAgcHVibGljIGxvYWRlZEltYWdlOiBib29sZWFuW107XG5cbiAgcHVibGljIHByZUZpbHRlclJlc3VsdHM6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG4gICAgdGhpcy5maWx0ZXJTcG9ydHMgPSB0aGlzLmF2YWlsYWJsZVNwb3J0cztcbiAgICB0aGlzLmxvYWRlZEltYWdlID0gW107XG4gICAgdGhpcy5nZXRGYWNpbGl0aWVzRnJvbVNlcnZlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIGpRdWVyeSgnI2RhdGVyYW5nZScpLmRhdGVyYW5nZXBpY2tlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnUkVRVUVTVF9JTlBVVF9FUlJPUic6XG4gICAgICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlZEZhY2lsaXRpZXMoe2xzdEZhY2lsaXRpZXM6IFtdfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnR0VUX0FWQUlMQUJMRV9GQUNJTElUSUVTX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLnJlY2VpdmVkRmFjaWxpdGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlZEZhY2lsaXRpZXMobWVzc2FnZS5kYXRhKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZWNlaXZlZEZhY2lsaXRpZXMoZGF0YTogYW55KTogdm9pZCB7XG4gICAgZGF0YS5sc3RGYWNpbGl0aWVzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEubHN0RmFjaWxpdGllcykgIT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICAgID8gSlNPTi5wYXJzZShkYXRhLmxzdEZhY2lsaXRpZXMpIDogZGF0YS5sc3RGYWNpbGl0aWVzO1xuICAgIGlmIChkYXRhLmxzdEZhY2lsaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgICB0aGlzLnJlY2VpdmVkRmFjaWxpdGllcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY2VpdmVkRmFjaWxpdGllcyA9IGRhdGEubHN0RmFjaWxpdGllc1xuICAgICAgICAuZmlsdGVyKChmYWNpbGl0eURhdGE6IGFueSkgPT4gZmFjaWxpdHlEYXRhICE9PSBudWxsKVxuICAgICAgICAubWFwKChmYWNpbGl0eURhdGE6IGFueSkgPT4gbmV3IEZhY2lsaXR5KGZhY2lsaXR5RGF0YSkpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRBdmFpbGFibGVGYWNpbGl0aWVzKCk6IHZvaWQge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEdldEF2YWlsYWJsZUZhY2lsaXRpZXMoKVxuICAgICAgLnNldEtleVdvcmQodGhpcy5rZXl3b3JkKVxuICAgICAgLnNldFNwb3J0cyh0aGlzLmZpbHRlclNwb3J0cylcbiAgICAgIC5zZXRDaXR5KHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3MuZ2V0Q2l0eSgpKVxuICAgICAgLnNldFBhZ2luYXRpb24oY29uc3RhbnRzLlNFQVJDSF9QQUdJTkFUSU9OLklURU1fUEVSX1BBR0UsIHRoaXMucGFnaW5hdGlvblBhZ2UpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgZ2V0RmFjaWxpdGllc0Zyb21TZXJ2ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZWRJbWFnZSA9IFtdO1xuICAgIHRoaXMubG9hZGluZ1Jlc3VsdERhdGEgPSB0cnVlO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldEF2YWlsYWJsZUZhY2lsaXRpZXMoKTtcbiAgfVxuXG4gIGZpbHRlclNwb3J0c0NoYW5nZWQoc2VsZWN0ZWRTcG9ydDogU3BvcnQsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLnByZUZpbHRlclJlc3VsdHMpIGNsZWFyVGltZW91dCh0aGlzLnByZUZpbHRlclJlc3VsdHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGluU3BvcnQgPSB0aGlzLmZpbHRlclNwb3J0cy5maW5kKChzcG9ydDogU3BvcnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHNwb3J0LnNwb3J0SWQgPT09IHNlbGVjdGVkU3BvcnQuc3BvcnRJZDtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBpblNwb3J0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmZpbHRlclNwb3J0cy5wdXNoKHNlbGVjdGVkU3BvcnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNwb3J0cyA9IHRoaXMuZmlsdGVyU3BvcnRzLmZpbHRlcihmdW5jdGlvbiAoc3BvcnQ6IFNwb3J0KSB7XG4gICAgICAgIHJldHVybiBzcG9ydC5zcG9ydElkICE9PSBzZWxlY3RlZFNwb3J0LnNwb3J0SWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcmVGaWx0ZXJSZXN1bHRzID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wcmVGaWx0ZXJSZXN1bHRzKTtcbiAgICAgIHRoaXMuZ2V0RmFjaWxpdGllc0Zyb21TZXJ2ZXIoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGZhY2lsaXRpZXNJbWFnZUxvYWRlZCgpOiBhbnkge1xuICAgIHRoaXMubG9hZGVkSW1hZ2UucHVzaCh0cnVlKTtcbiAgICBpZiAodGhpcy5sb2FkZWRJbWFnZS5sZW5ndGggPj0gdGhpcy5yZWNlaXZlZEZhY2lsaXRpZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxvYWRpbmdSZXN1bHREYXRhID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVXJsKGZhY2lsaXR5OiBhbnkpOiBhbnkge1xuICAgIGZhY2lsaXR5LnBhcnRuZXIubG9nbyA9ICcuL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC9jb3VydC5wbmcnO1xuICAgIHRoaXMuZmFjaWxpdGllc0ltYWdlTG9hZGVkKCk7XG4gIH1cblxuICBvbkJvb2tpbmdGYWNpbGl0eShmYWNpbGl0eTogRmFjaWxpdHkpOiBhbnkge1xuICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEZhY2lsaXR5ID0gZmFjaWxpdHk7XG4gICAgICBqUXVlcnkoJyNib29raW5nRmFjaWxpdHlNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luL2NvbnRpbnVlLycsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hdKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
