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
var GetAllGroup_1 = require('../../packages/GetAllGroup');
var GetSportType_1 = require('../../packages/GetSportType');
var SearchCityByNameAndState_1 = require('../../packages/SearchCityByNameAndState');
var message_service_1 = require('../../services/message.service');
var location_service_1 = require('../../services/location.service');
var Group_1 = require('../../models/Group');
var Sport_1 = require('../../models/Sport');
var City_1 = require('../../models/City');
var State_1 = require('../../models/State');
var Country_1 = require('../../models/Country');
var Address_1 = require('../../models/Address');
var LngLat_1 = require('../../models/LngLat');
var SearchingType;
(function (SearchingType) {
    SearchingType[SearchingType["field"] = 0] = "field";
    SearchingType[SearchingType["class"] = 1] = "class";
    SearchingType[SearchingType["facility"] = 2] = "facility";
    SearchingType[SearchingType["event"] = 3] = "event";
})(SearchingType || (SearchingType = {}));
var constants_1 = require('../../constants');
var SearchComponent = (function () {
    function SearchComponent(router, route, locationService, messageService) {
        this.router = router;
        this.route = route;
        this.locationService = locationService;
        this.messageService = messageService;
        this.searchingType = SearchingType;
    }
    Object.defineProperty(SearchComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.queryParams.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.userLocation = {
            timezone: constants_1.DEFAULT_TIMEZONE,
            address: new Address_1.Address(),
            coordinate: new LngLat_1.LngLat()
        };
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.messageSub.unsubscribe();
    };
    SearchComponent.prototype.handleRoute = function (params) {
        var _this = this;
        this.isShownReceivedCourts = false;
        this.isShownReceivedClasses = false;
        this.isShownReceivedFacilities = false;
        this.isShownReceivedEvents = false;
        this.keywordParam = params['keyword'] || '';
        this.locationParam = params['location'] || constants_1.DEFAULT_LOCATION;
        this.pageParam = 0;
        this.typeParam = SearchingType[+SearchingType[(params['type'] || '').toLowerCase()]] || SearchingType[SearchingType.field];
        this.locationService.getCitiesByAddress(this.locationParam).then(function (position) {
            if (position.results.length <= 0)
                return;
            var latLngOfCity = position.results[0].geometry.location;
            _this.userLocation.coordinate = new LngLat_1.LngLat(latLngOfCity.lng, latLngOfCity.lat);
            _this.locationService.getTimeZone(latLngOfCity).then(function (timezone) {
                _this.userLocation.timezone = timezone.timeZoneId || 'America/New_York';
                _this.sendMessageToGetSports();
            });
        });
    };
    SearchComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_SPORT_TYPE_SUCCESS':
                this.handleReceivedSport(message.data.lstSport);
                this.sendMessageToGetGroups();
                break;
            case 'GET_ALL_GROUP_SUCCESS':
                this.handleReceivedGroups(message.data);
                this.sendMessageToGetCityByNameAndState();
                break;
            case 'SEARCH_CITY_BY_NAME_AND_STATE_SUCCESS':
                this.handleReceivedCity(message.data);
                this.getSearchResultFromServer();
        }
    };
    SearchComponent.prototype.handleReceivedSport = function (data) {
        data = Object.prototype.toString.call(data) !== '[object Array]' ? JSON.parse(data) : data;
        this.availableSports = data.map(function (sportData) { return new Sport_1.Sport(sportData); });
    };
    SearchComponent.prototype.handleReceivedGroups = function (data) {
        data.lstResult = Object.prototype.toString.call(data.lstResult) !== '[object Array]' ? JSON.parse(data.lstResult) : data.lstResult;
        this.availableGroups = data.lstResult.map(function (groupData) { return new Group_1.Group(groupData); });
    };
    SearchComponent.prototype.handleReceivedCity = function (data) {
        if (typeof data.city === 'undefined') {
            this.userLocation.address = null;
            console.error('Error', 'Cannot find this city in our server.');
        }
        else if (typeof data.state === 'undefined') {
            this.userLocation.address = null;
            console.error('Error', 'Cannot find this state in our server.');
        }
        else if (typeof data.country === 'undefined') {
            this.userLocation.address = null;
            console.error('Error', 'Cannot find this country in our server.');
        }
        else {
            this.userLocation.address.setCity(new City_1.City(data.city.cityId, data.city.cityName));
            this.userLocation.address.setState(new State_1.State(data.state.stateId, data.state.stateName));
            this.userLocation.address.setCountry(new Country_1.Country(data.country.countryId, data.country.countryName));
        }
    };
    SearchComponent.prototype.sendMessageToGetSports = function () {
        var apiPackage = new GetSportType_1.GetSportType();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    SearchComponent.prototype.sendMessageToGetGroups = function () {
        var apiPackage = new GetAllGroup_1.GetAllGroup();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    SearchComponent.prototype.sendMessageToGetCityByNameAndState = function () {
        var address = this.locationParam.split(',');
        var apiPackage = new SearchCityByNameAndState_1.SearchCityByNameAndState()
            .setCityName(address[0])
            .setStateName(address[1])
            .setCountryName(address[2]);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    SearchComponent.prototype.getSearchResultFromServer = function () {
        if (typeof this.keywordParam === 'undefined')
            return;
        if (typeof this.pageParam === 'undefined')
            return;
        if (typeof this.availableSports === 'undefined')
            return;
        if (typeof this.availableGroups === 'undefined')
            return;
        if (typeof this.userLocation === 'undefined')
            return;
        if (typeof this.userLocation.address === 'undefined')
            return;
        if (typeof this.userLocation.address.getCity() === 'undefined')
            return;
        if (typeof this.userLocation.address.getCity() === null)
            return;
        if (typeof this.userLocation.timezone === 'undefined')
            return;
        if (this.typeParam === SearchingType[SearchingType.field]) {
            this.isShownReceivedCourts = true;
            this.isShownReceivedClasses = false;
            this.isShownReceivedFacilities = false;
            this.isShownReceivedEvents = false;
        }
        else if (this.typeParam === SearchingType[SearchingType.class]) {
            this.isShownReceivedCourts = false;
            this.isShownReceivedClasses = true;
            this.isShownReceivedFacilities = false;
            this.isShownReceivedEvents = false;
        }
        else if (this.typeParam === SearchingType[SearchingType.facility]) {
            this.isShownReceivedCourts = false;
            this.isShownReceivedClasses = false;
            this.isShownReceivedFacilities = true;
            this.isShownReceivedEvents = false;
        }
        else if (this.typeParam === SearchingType[SearchingType.event]) {
            this.isShownReceivedCourts = false;
            this.isShownReceivedClasses = false;
            this.isShownReceivedFacilities = false;
            this.isShownReceivedEvents = true;
        }
    };
    SearchComponent.prototype.goToCourtsTab = function () {
        var params = {
            keyword: this.keywordParam,
            location: this.locationParam,
            page: this.pageParam,
            type: SearchingType[SearchingType.field]
        };
        this.router.navigate(['/reservations/search'], { queryParams: params });
    };
    SearchComponent.prototype.goToClassesTab = function () {
        var params = {
            keyword: this.keywordParam,
            location: this.locationParam,
            page: this.pageParam,
            type: SearchingType[SearchingType.class]
        };
        this.router.navigate(['/reservations/search'], { queryParams: params });
    };
    SearchComponent.prototype.goToFacilitiesTab = function () {
        var params = {
            keyword: this.keywordParam,
            location: this.locationParam,
            page: this.pageParam,
            type: SearchingType[SearchingType.facility]
        };
        this.router.navigate(['/reservations/search'], { queryParams: params });
    };
    SearchComponent.prototype.goToEventsTab = function () {
        var params = {
            keyword: this.keywordParam,
            location: this.locationParam,
            page: this.pageParam,
            type: SearchingType[SearchingType.event]
        };
        this.router.navigate(['/reservations/search'], { queryParams: params });
    };
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "fadeIn", null);
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-search',
            templateUrl: 'search.component.html',
            styleUrls: ['search.component.css'],
            animations: [
                core_1.trigger('fadeIn', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', core_1.animate(1000, core_1.keyframes([
                        core_1.style({ opacity: 0, offset: 0 }),
                        core_1.style({ opacity: 1, offset: 1 })
                    ]))),
                    core_1.transition('* => void', core_1.animate(1000, core_1.keyframes([
                        core_1.style({ opacity: 1, offset: 0 }),
                        core_1.style({ opacity: 0, offset: 1 })
                    ])))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, location_service_1.LocationService, message_service_1.MessageService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUdPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBS3pELDRCQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELDZCQUE2Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzNELHlDQUF5Qyx5Q0FBeUMsQ0FBQyxDQUFBO0FBS25GLGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBS2xFLHNCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLHNCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLHFCQUFxQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLHdCQUF3QixzQkFBc0IsQ0FBQyxDQUFBO0FBQy9DLHdCQUF3QixzQkFBc0IsQ0FBQyxDQUFBO0FBQy9DLHVCQUF1QixxQkFBcUIsQ0FBQyxDQUFBO0FBRTdDLElBQUssYUFFSjtBQUZELFdBQUssYUFBYTtJQUNoQixtREFBSyxDQUFBO0lBQUUsbURBQUssQ0FBQTtJQUFFLHlEQUFRLENBQUE7SUFBRSxtREFBSyxDQUFBO0FBQy9CLENBQUMsRUFGSSxhQUFhLEtBQWIsYUFBYSxRQUVqQjtBQUVELDBCQUFtRCxpQkFBaUIsQ0FBQyxDQUFBO0FBcUJyRTtJQTJCRSx5QkFBb0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLGNBQThCO1FBSDlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBekIzQyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztJQTBCckMsQ0FBQztJQVJELHNCQUFJ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bmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEhvc3RCaW5kaW5nLFxuICB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGtleWZyYW1lcywgdHJhbnNpdGlvbiwgYW5pbWF0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIEFQSSBwYWNrYWdlc1xuICovXG5pbXBvcnQgeyBHZXRBbGxHcm91cCB9IGZyb20gJy4uLy4uL3BhY2thZ2VzL0dldEFsbEdyb3VwJztcbmltcG9ydCB7IEdldFNwb3J0VHlwZSB9IGZyb20gJy4uLy4uL3BhY2thZ2VzL0dldFNwb3J0VHlwZSc7XG5pbXBvcnQgeyBTZWFyY2hDaXR5QnlOYW1lQW5kU3RhdGUgfSBmcm9tICcuLi8uLi9wYWNrYWdlcy9TZWFyY2hDaXR5QnlOYW1lQW5kU3RhdGUnO1xuXG4vKipcbiAqIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIG1vZGVsc1xuICovXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uL21vZGVscy9Hcm91cCc7XG5pbXBvcnQgeyBTcG9ydCB9IGZyb20gJy4uLy4uL21vZGVscy9TcG9ydCc7XG5pbXBvcnQgeyBDaXR5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NpdHknO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvU3RhdGUnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uL21vZGVscy9Db3VudHJ5JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvQWRkcmVzcyc7XG5pbXBvcnQgeyBMbmdMYXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvTG5nTGF0JztcblxuZW51bSBTZWFyY2hpbmdUeXBlIHtcbiAgZmllbGQsIGNsYXNzLCBmYWNpbGl0eSwgZXZlbnRcbn1cblxuaW1wb3J0IHsgREVGQVVMVF9USU1FWk9ORSwgREVGQVVMVF9MT0NBVElPTiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJ3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWFyY2guY29tcG9uZW50LmNzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmFkZUluJywgW1xuICAgICAgc3RhdGUoJ2luJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgYW5pbWF0ZSgxMDAwLCBrZXlmcmFtZXMoW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAwfSksXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDF9KVxuICAgICAgXSkpKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoMTAwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgb2Zmc2V0OiAxfSlcbiAgICAgIF0pKSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcm91dGVTdWI6IGFueTtcbiAgcHVibGljIG1lc3NhZ2VTdWI6IGFueTtcblxuICBwdWJsaWMgc2VhcmNoaW5nVHlwZSA9IFNlYXJjaGluZ1R5cGU7XG5cbiAgcHVibGljIGF2YWlsYWJsZVNwb3J0czogU3BvcnRbXTtcbiAgcHVibGljIGF2YWlsYWJsZUdyb3VwczogR3JvdXBbXTtcblxuICBwdWJsaWMgdXNlckxvY2F0aW9uOiB7IHRpbWV6b25lOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MsIGNvb3JkaW5hdGU6IExuZ0xhdCB9O1xuXG4gIHB1YmxpYyBrZXl3b3JkUGFyYW06IHN0cmluZztcbiAgcHVibGljIGxvY2F0aW9uUGFyYW06IHN0cmluZztcbiAgcHVibGljIHR5cGVQYXJhbTogc3RyaW5nO1xuICBwdWJsaWMgcGFnZVBhcmFtOiBudW1iZXI7XG5cbiAgcHVibGljIGlzU2hvd25SZWNlaXZlZENvdXJ0czogYm9vbGVhbjtcbiAgcHVibGljIGlzU2hvd25SZWNlaXZlZENsYXNzZXM6IGJvb2xlYW47XG4gIHB1YmxpYyBpc1Nob3duUmVjZWl2ZWRGYWNpbGl0aWVzOiBib29sZWFuO1xuICBwdWJsaWMgaXNTaG93blJlY2VpdmVkRXZlbnRzOiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnQGZhZGVJbicpXG4gIGdldCBmYWRlSW4oKSB7XG4gICAgcmV0dXJuICdpbic7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhdGlvblNlcnZpY2U6IExvY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gdGhpcy5oYW5kbGVSb3V0ZShwYXJhbXMpKTtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG4gICAgdGhpcy51c2VyTG9jYXRpb24gPSB7XG4gICAgICB0aW1lem9uZTogREVGQVVMVF9USU1FWk9ORSxcbiAgICAgIGFkZHJlc3M6IG5ldyBBZGRyZXNzKCksXG4gICAgICBjb29yZGluYXRlOiBuZXcgTG5nTGF0KClcbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlUm91dGUocGFyYW1zOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuaXNTaG93blJlY2VpdmVkQ291cnRzID0gZmFsc2U7XG4gICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDbGFzc2VzID0gZmFsc2U7XG4gICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRGYWNpbGl0aWVzID0gZmFsc2U7XG4gICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRFdmVudHMgPSBmYWxzZTtcblxuICAgIHRoaXMua2V5d29yZFBhcmFtID0gcGFyYW1zWydrZXl3b3JkJ10gfHwgJyc7XG4gICAgdGhpcy5sb2NhdGlvblBhcmFtID0gcGFyYW1zWydsb2NhdGlvbiddIHx8IERFRkFVTFRfTE9DQVRJT047XG4gICAgLy8gRklYTUU6IHdoZW4gdXNlIHBhZ2luYXRpb25cbiAgICAvLyB0aGlzLnBhZ2VQYXJhbSA9ICtwYXJhbXNbJ3BhZ2UnXSB8fCAwO1xuICAgIHRoaXMucGFnZVBhcmFtID0gMDtcbiAgICB0aGlzLnR5cGVQYXJhbSA9IFNlYXJjaGluZ1R5cGVbK1NlYXJjaGluZ1R5cGVbKHBhcmFtc1sndHlwZSddIHx8ICcnKS50b0xvd2VyQ2FzZSgpXV0gfHwgU2VhcmNoaW5nVHlwZVtTZWFyY2hpbmdUeXBlLmZpZWxkXTtcblxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldENpdGllc0J5QWRkcmVzcyh0aGlzLmxvY2F0aW9uUGFyYW0pLnRoZW4oKHBvc2l0aW9uOiBhbnkpID0+IHtcbiAgICAgIGlmIChwb3NpdGlvbi5yZXN1bHRzLmxlbmd0aCA8PSAwKSByZXR1cm47XG4gICAgICBsZXQgbGF0TG5nT2ZDaXR5ID0gcG9zaXRpb24ucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbjtcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmNvb3JkaW5hdGUgPSBuZXcgTG5nTGF0KGxhdExuZ09mQ2l0eS5sbmcsIGxhdExuZ09mQ2l0eS5sYXQpO1xuICAgICAgdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0VGltZVpvbmUobGF0TG5nT2ZDaXR5KS50aGVuKCh0aW1lem9uZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudXNlckxvY2F0aW9uLnRpbWV6b25lID0gdGltZXpvbmUudGltZVpvbmVJZCB8fCAnQW1lcmljYS9OZXdfWW9yayc7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldFNwb3J0cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnR0VUX1NQT1JUX1RZUEVfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuaGFuZGxlUmVjZWl2ZWRTcG9ydChtZXNzYWdlLmRhdGEubHN0U3BvcnQpO1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRHcm91cHMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdHRVRfQUxMX0dST1VQX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLmhhbmRsZVJlY2VpdmVkR3JvdXBzKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldENpdHlCeU5hbWVBbmRTdGF0ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NFQVJDSF9DSVRZX0JZX05BTUVfQU5EX1NUQVRFX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLmhhbmRsZVJlY2VpdmVkQ2l0eShtZXNzYWdlLmRhdGEpO1xuICAgICAgICB0aGlzLmdldFNlYXJjaFJlc3VsdEZyb21TZXJ2ZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZWNlaXZlZFNwb3J0KGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGRhdGEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkgIT09ICdbb2JqZWN0IEFycmF5XScgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YTtcbiAgICB0aGlzLmF2YWlsYWJsZVNwb3J0cyA9IGRhdGEubWFwKChzcG9ydERhdGE6IGFueSkgPT4gbmV3IFNwb3J0KHNwb3J0RGF0YSkpO1xuICB9XG5cbiAgaGFuZGxlUmVjZWl2ZWRHcm91cHMoZGF0YTogYW55KTogdm9pZCB7XG4gICAgZGF0YS5sc3RSZXN1bHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YS5sc3RSZXN1bHQpICE9PSAnW29iamVjdCBBcnJheV0nID8gSlNPTi5wYXJzZShkYXRhLmxzdFJlc3VsdCkgOiBkYXRhLmxzdFJlc3VsdDtcbiAgICB0aGlzLmF2YWlsYWJsZUdyb3VwcyA9IGRhdGEubHN0UmVzdWx0Lm1hcCgoZ3JvdXBEYXRhOiBhbnkpID0+IG5ldyBHcm91cChncm91cERhdGEpKTtcbiAgfVxuXG4gIGhhbmRsZVJlY2VpdmVkQ2l0eShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGRhdGEuY2l0eSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3MgPSBudWxsO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCAnQ2Fubm90IGZpbmQgdGhpcyBjaXR5IGluIG91ciBzZXJ2ZXIuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5zdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3MgPSBudWxsO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCAnQ2Fubm90IGZpbmQgdGhpcyBzdGF0ZSBpbiBvdXIgc2VydmVyLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuY291bnRyeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3MgPSBudWxsO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCAnQ2Fubm90IGZpbmQgdGhpcyBjb3VudHJ5IGluIG91ciBzZXJ2ZXIuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3Muc2V0Q2l0eShuZXcgQ2l0eShkYXRhLmNpdHkuY2l0eUlkLCBkYXRhLmNpdHkuY2l0eU5hbWUpKTtcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3Muc2V0U3RhdGUobmV3IFN0YXRlKGRhdGEuc3RhdGUuc3RhdGVJZCwgZGF0YS5zdGF0ZS5zdGF0ZU5hbWUpKTtcbiAgICAgIHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3Muc2V0Q291bnRyeShuZXcgQ291bnRyeShkYXRhLmNvdW50cnkuY291bnRyeUlkLCBkYXRhLmNvdW50cnkuY291bnRyeU5hbWUpKTtcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvR2V0U3BvcnRzKCk6IHZvaWQge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEdldFNwb3J0VHlwZSgpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldEdyb3VwcygpOiB2b2lkIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRBbGxHcm91cCgpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldENpdHlCeU5hbWVBbmRTdGF0ZSgpOiB2b2lkIHtcbiAgICBsZXQgYWRkcmVzczogc3RyaW5nW10gPSB0aGlzLmxvY2F0aW9uUGFyYW0uc3BsaXQoJywnKTtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBTZWFyY2hDaXR5QnlOYW1lQW5kU3RhdGUoKVxuICAgICAgLnNldENpdHlOYW1lKGFkZHJlc3NbMF0pXG4gICAgICAuc2V0U3RhdGVOYW1lKGFkZHJlc3NbMV0pXG4gICAgICAuc2V0Q291bnRyeU5hbWUoYWRkcmVzc1syXSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBnZXRTZWFyY2hSZXN1bHRGcm9tU2VydmVyKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy5rZXl3b3JkUGFyYW0gPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB0aGlzLnBhZ2VQYXJhbSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRoaXMuYXZhaWxhYmxlU3BvcnRzID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgdGhpcy5hdmFpbGFibGVHcm91cHMgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVzZXJMb2NhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3MgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVzZXJMb2NhdGlvbi5hZGRyZXNzLmdldENpdHkoKSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHRoaXMudXNlckxvY2F0aW9uLmFkZHJlc3MuZ2V0Q2l0eSgpID09PSBudWxsKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVzZXJMb2NhdGlvbi50aW1lem9uZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIGlmICh0aGlzLnR5cGVQYXJhbSA9PT0gU2VhcmNoaW5nVHlwZVtTZWFyY2hpbmdUeXBlLmZpZWxkXSkge1xuICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDb3VydHMgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDbGFzc2VzID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU2hvd25SZWNlaXZlZEZhY2lsaXRpZXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTaG93blJlY2VpdmVkRXZlbnRzID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVQYXJhbSA9PT0gU2VhcmNoaW5nVHlwZVtTZWFyY2hpbmdUeXBlLmNsYXNzXSkge1xuICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDb3VydHMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTaG93blJlY2VpdmVkQ2xhc3NlcyA9IHRydWU7XG4gICAgICB0aGlzLmlzU2hvd25SZWNlaXZlZEZhY2lsaXRpZXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTaG93blJlY2VpdmVkRXZlbnRzID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVQYXJhbSA9PT0gU2VhcmNoaW5nVHlwZVtTZWFyY2hpbmdUeXBlLmZhY2lsaXR5XSkge1xuICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDb3VydHMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTaG93blJlY2VpdmVkQ2xhc3NlcyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRGYWNpbGl0aWVzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNTaG93blJlY2VpdmVkRXZlbnRzID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVQYXJhbSA9PT0gU2VhcmNoaW5nVHlwZVtTZWFyY2hpbmdUeXBlLmV2ZW50XSkge1xuICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDb3VydHMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTaG93blJlY2VpdmVkQ2xhc3NlcyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRGYWNpbGl0aWVzID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU2hvd25SZWNlaXZlZEV2ZW50cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ29Ub0NvdXJ0c1RhYigpOiBhbnkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBrZXl3b3JkOiB0aGlzLmtleXdvcmRQYXJhbSxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uUGFyYW0sXG4gICAgICBwYWdlOiB0aGlzLnBhZ2VQYXJhbSxcbiAgICAgIHR5cGU6IFNlYXJjaGluZ1R5cGVbU2VhcmNoaW5nVHlwZS5maWVsZF1cbiAgICB9O1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jlc2VydmF0aW9ucy9zZWFyY2gnXSwge3F1ZXJ5UGFyYW1zOiBwYXJhbXN9KTtcbiAgfVxuXG4gIGdvVG9DbGFzc2VzVGFiKCk6IGFueSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGtleXdvcmQ6IHRoaXMua2V5d29yZFBhcmFtLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb25QYXJhbSxcbiAgICAgIHBhZ2U6IHRoaXMucGFnZVBhcmFtLFxuICAgICAgdHlwZTogU2VhcmNoaW5nVHlwZVtTZWFyY2hpbmdUeXBlLmNsYXNzXVxuICAgIH07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVzZXJ2YXRpb25zL3NlYXJjaCddLCB7cXVlcnlQYXJhbXM6IHBhcmFtc30pO1xuICB9XG5cbiAgZ29Ub0ZhY2lsaXRpZXNUYWIoKTogYW55IHtcbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAga2V5d29yZDogdGhpcy5rZXl3b3JkUGFyYW0sXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvblBhcmFtLFxuICAgICAgcGFnZTogdGhpcy5wYWdlUGFyYW0sXG4gICAgICB0eXBlOiBTZWFyY2hpbmdUeXBlW1NlYXJjaGluZ1R5cGUuZmFjaWxpdHldXG4gICAgfTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZXNlcnZhdGlvbnMvc2VhcmNoJ10sIHtxdWVyeVBhcmFtczogcGFyYW1zfSk7XG4gIH1cblxuICBnb1RvRXZlbnRzVGFiKCk6IGFueSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGtleXdvcmQ6IHRoaXMua2V5d29yZFBhcmFtLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb25QYXJhbSxcbiAgICAgIHBhZ2U6IHRoaXMucGFnZVBhcmFtLFxuICAgICAgdHlwZTogU2VhcmNoaW5nVHlwZVtTZWFyY2hpbmdUeXBlLmV2ZW50XVxuICAgIH07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVzZXJ2YXRpb25zL3NlYXJjaCddLCB7cXVlcnlQYXJhbXM6IHBhcmFtc30pO1xuICB9XG59XG4iXX0=
