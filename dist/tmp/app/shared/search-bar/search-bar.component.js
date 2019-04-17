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
var index_1 = require('ng2-select/index');
var message_service_1 = require('../../services/message.service');
var SearchSuggestionCourt_1 = require('../../packages/SearchSuggestionCourt');
var Court_1 = require('../../models/Court');
var typeData = [
    { id: 'type-event', text: 'Events' },
    { id: 'type-field', text: 'Fields' },
    { id: 'type-class', text: 'Classes' },
    { id: 'type-facility', text: 'Facilities' }
];
var SearchComponent = (function () {
    function SearchComponent(router, messageService) {
        this.router = router;
        this.messageService = messageService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchingQuery = { keyword: '', location: '', type: '' };
        this.keyWordInput.items = typeData;
        this.locationInput.items = [];
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    SearchComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'SEARCH_SUGGESTION_COURT_SUCCESS':
                if (this.isWaitingForLocation && typeof message.data.lstCity !== 'undefined') {
                    this.isWaitingForLocation = false;
                    this.handleReceivedSuggestedLocations(message.data);
                }
                if (this.isWaitingForCourt && typeof message.data.lstCourt !== 'undefined') {
                    this.isWaitingForCourt = false;
                    this.handleReceivedSuggestedCourts(message.data);
                }
        }
    };
    SearchComponent.prototype.handleReceivedSuggestedCourts = function (data) {
        var _this = this;
        var courts = data.lstCourt.map(function (courtData) {
            var court = new Court_1.Court(courtData.partnerBranch);
            return { id: 'court-' + court.id, text: court.name };
        }).slice(0, 3);
        var filterTypeData = typeData.filter(function (item) {
            return item.text.match(new RegExp(_this.searchingQuery.keyword.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'ig'));
        });
        this.keyWordInput.items = courts.concat(filterTypeData);
        this.keyWordInput.open();
    };
    SearchComponent.prototype.handleReceivedSuggestedLocations = function (data) {
        this.locationInput.items = data.lstCity.map(function (locationData) {
            return {
                id: locationData.formattedCityName,
                text: locationData.formattedCityName
            };
        }).slice(0, 3);
        this.locationInput.open();
    };
    SearchComponent.prototype.sendMessageToGetSearchSuggestion = function (key) {
        var apiPackage = new SearchSuggestionCourt_1.SearchSuggestionCourt().setKeyWord(key);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    SearchComponent.prototype.onTypedKeyword = function (value) {
        this.searchingQuery.keyword = value;
        this.isWaitingForCourt = true;
        this.keyWordInput.open();
        this.sendMessageToGetSearchSuggestion(value);
    };
    SearchComponent.prototype.onTypedLocation = function (value) {
        this.isWaitingForLocation = true;
        this.sendMessageToGetSearchSuggestion(value);
        this.locationInput.open();
    };
    SearchComponent.prototype.onKeyWordSelected = function (value) {
        this.searchingQuery.keyword = value.text;
        if (value.id.startsWith('court-'))
            this.openBranchPage(value.id.substr(6));
        else if (value.id.startsWith('event-'))
            this.openEventPage(value.id.substr(6));
        else if (value.id.startsWith('type-')) {
            this.searchingQuery.keyword = '';
            this.searchingQuery.type = value.id.substr(5).toLowerCase();
            this.openSearchingResultPage();
        }
    };
    SearchComponent.prototype.onLocationSelected = function (value) {
        this.searchingQuery.location = value.text;
        this.openSearchingResultPage();
    };
    SearchComponent.prototype.openBranchPage = function (courtId) {
        this.router.navigate(['/reservations/branch', courtId]);
    };
    SearchComponent.prototype.openEventPage = function (eventId) {
        this.router.navigate(['/events/', eventId]);
    };
    SearchComponent.prototype.openSearchingResultPage = function () {
        if (this.searchingQuery.location === '')
            return;
        if (this.searchingQuery.keyword === '' && this.searchingQuery.type === '')
            return;
        this.router.navigate(['/reservations/search'], { queryParams: this.searchingQuery });
    };
    SearchComponent.prototype.onClickSearchButton = function () {
        this.openSearchingResultPage();
    };
    __decorate([
        core_1.ViewChild('keyWordInput'), 
        __metadata('design:type', index_1.SelectComponent)
    ], SearchComponent.prototype, "keyWordInput", void 0);
    __decorate([
        core_1.ViewChild('locationInput'), 
        __metadata('design:type', index_1.SelectComponent)
    ], SearchComponent.prototype, "locationInput", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-search',
            template: "<div class=\"form-group\">     <ng-select #keyWordInput class=\"search-box keyword col-xs-12 col-sm-5\"                [allowClear]=\"true\"                (selected)=\"onKeyWordSelected($event)\"                (typed)=\"onTypedKeyword($event)\"                placeholder=\"Classes, courts, events or facilities\">     </ng-select>     <ng-select #locationInput class=\"search-box location col-xs-12 col-sm-5\"                [allowClear]=\"true\"                (selected)=\"onLocationSelected($event)\"                (typed)=\"onTypedLocation($event)\"                placeholder=\"No city selected\">     </ng-select>     <a class=\"btn search-btn col-xs-12 col-sm-2 \" id=\"searchBtn\" (click)=\"onClickSearchButton()\">         <i class=\"fa fa-search\" aria-hidden=\"true\"></i>     </a> </div>",
            styles: [".form-group{margin:0 0 15px;float:left;width:100%}.search-box{display:inline-block;color:#000;font-size:14px;padding:0}.search-box.keyword{border-right:none;border-radius:2px 0 0 2px}.search-box.location{border-right:none;border-radius:0}ng-select{height:34px;color:#101010;font-size:13px}.search-btn{height:34px;color:#fcfcfc;border-radius:0 2px 2px 0}:host-context(.reservations) ng-select{border:1px solid #f33c4a}:host-context(.reservations) .search-btn{background:#f33c4a}:host-context(.reservations) .search-btn:hover{background-color:#da3743}:host-context(.events) ng-select{border:1px solid #205081}:host-context(.events) .search-btn{background:#205081}:host-context(.events) .search-btn:hover{background-color:#183681}"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, message_service_1.MessageService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
