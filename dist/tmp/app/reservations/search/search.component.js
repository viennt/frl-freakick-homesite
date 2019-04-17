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
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-sm-8 col-sm-offset-4\">             <ul class=\"nav nav-tabs\">                 <li [class.active]=\"typeParam === searchingType[searchingType.field]\">                     <a (click)=\"goToCourtsTab()\">Fields</a>                 </li>                 <li [class.active]=\"typeParam === searchingType[searchingType.class]\">                     <a (click)=\"goToClassesTab()\">Classes</a>                 </li>                 <li [class.active]=\"typeParam === searchingType[searchingType.facility]\">                     <a (click)=\"goToFacilitiesTab()\">Facilities</a>                 </li>                 <li [class.active]=\"typeParam === searchingType[searchingType.event]\">                     <a (click)=\"goToEventsTab()\">Events</a>                 </li>             </ul>         </div>     </div> </div>  <!-- Searching courts results --> <frk-received-courts *ngIf=\"isShownReceivedCourts\"     [availableSports]=\"availableSports\"     [paginationPage]=\"pageParam\"     [userLocation]=\"userLocation\"> </frk-received-courts>  <!-- Searching classes results --> <frk-received-classes *ngIf=\"isShownReceivedClasses\"     [availableSports]=\"availableSports\"     [availableGroups]=\"availableGroups\"     [keyword]=\"keywordParam\"     [paginationPage]=\"pageParam\"     [userLocation]=\"userLocation\"> </frk-received-classes>  <!-- Searching facilities results --> <frk-received-facilities *ngIf=\"isShownReceivedFacilities\"     [availableSports]=\"availableSports\"     [keyword]=\"keywordParam\"     [paginationPage]=\"pageParam\"     [userLocation]=\"userLocation\"> </frk-received-facilities>  <frk-received-events *ngIf=\"isShownReceivedEvents\"     [keyword]=\"keywordParam\"     [paginationPage]=\"pageParam\"     [userLocation]=\"userLocation\"> </frk-received-events>  <div class=\"container loading\"      *ngIf=\"!isShownReceivedCourts && !isShownReceivedClasses      && !isShownReceivedFacilities && !isShownReceivedEvents\">     <frk-loading-circle></frk-loading-circle> </div>",
            styles: [":host{min-height:calc(100vh - 200px)}.nav-tabs{border-bottom:none}.nav-tabs>li{float:left;margin:0 0 10px;padding:0 5px 0 0;font-size:13px;width:25%;text-align:center}.nav-tabs>li:last-child{padding:0}.nav-tabs>li>a{cursor:pointer;background:#ececec;color:#101010;border-radius:5px;padding:6px}.nav-tabs>li:hover>a{background:#dedede}.nav-tabs>li.active>a{cursor:default;background:#da3743;color:#fcfcfc}input[type=checkbox][disabled]~span{cursor:not-allowed;opacity:.5}.google-map-title{margin:15px auto}.container.loading{min-height:100vh}"],
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
