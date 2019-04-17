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
            templateUrl: 'search-bar.component.html',
            styleUrls: ['search-bar.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, message_service_1.MessageService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFnQyxrQkFBa0IsQ0FBQyxDQUFBO0FBRW5ELGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRWhFLHNDQUFzQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBRTdFLHNCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBRTNDLElBQU0sUUFBUSxHQUFHO0lBQ2YsRUFBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDbEMsRUFBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDbEMsRUFBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7SUFDbkMsRUFBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7Q0FDMUMsQ0FBQztBQVFGO0lBZUUseUJBQW9CLE1BQWMsRUFDZCxjQUE4QjtRQUQ5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEs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eURBQUE7SUFDMUI7UUFBQyxnQkFBUyxDQUFDLGVBQWUsQ0FBQzs7MERBQUE7SUFSN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzs7dUJBQUE7SUF3SEYsc0JBQUM7QUFBRCxDQXZIQSxBQXVIQyxJQUFBO0FBdkhZLHVCQUFlLGtCQXVIM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICduZzItc2VsZWN0L2luZGV4JztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTZWFyY2hTdWdnZXN0aW9uQ291cnQgfSBmcm9tICcuLi8uLi9wYWNrYWdlcy9TZWFyY2hTdWdnZXN0aW9uQ291cnQnO1xuXG5pbXBvcnQgeyBDb3VydCB9IGZyb20gJy4uLy4uL21vZGVscy9Db3VydCc7XG5cbmNvbnN0IHR5cGVEYXRhID0gW1xuICB7aWQ6ICd0eXBlLWV2ZW50JywgdGV4dDogJ0V2ZW50cyd9LFxuICB7aWQ6ICd0eXBlLWZpZWxkJywgdGV4dDogJ0ZpZWxkcyd9LFxuICB7aWQ6ICd0eXBlLWNsYXNzJywgdGV4dDogJ0NsYXNzZXMnfSxcbiAge2lkOiAndHlwZS1mYWNpbGl0eScsIHRleHQ6ICdGYWNpbGl0aWVzJ31cbl07XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnc2VhcmNoLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdrZXlXb3JkSW5wdXQnKSBrZXlXb3JkSW5wdXQ6IFNlbGVjdENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnbG9jYXRpb25JbnB1dCcpIGxvY2F0aW9uSW5wdXQ6IFNlbGVjdENvbXBvbmVudDtcblxuICBwdWJsaWMgbWVzc2FnZVN1YjogYW55O1xuXG4gIHB1YmxpYyBzZWFyY2hpbmdRdWVyeToge1xuICAgIGtleXdvcmQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgfTtcblxuICBwdWJsaWMgaXNXYWl0aW5nRm9yQ291cnQ6IGJvb2xlYW47XG4gIHB1YmxpYyBpc1dhaXRpbmdGb3JMb2NhdGlvbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWFyY2hpbmdRdWVyeSA9IHtrZXl3b3JkOiAnJywgbG9jYXRpb246ICcnLCB0eXBlOiAnJ307XG4gICAgKDxhbnk+dGhpcy5rZXlXb3JkSW5wdXQpLml0ZW1zID0gdHlwZURhdGE7XG4gICAgKDxhbnk+dGhpcy5sb2NhdGlvbklucHV0KS5pdGVtcyA9IFtdO1xuICAgIHRoaXMubWVzc2FnZVN1YiA9IHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdTRUFSQ0hfU1VHR0VTVElPTl9DT1VSVF9TVUNDRVNTJzpcbiAgICAgICAgaWYgKHRoaXMuaXNXYWl0aW5nRm9yTG9jYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UuZGF0YS5sc3RDaXR5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuaXNXYWl0aW5nRm9yTG9jYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmhhbmRsZVJlY2VpdmVkU3VnZ2VzdGVkTG9jYXRpb25zKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNXYWl0aW5nRm9yQ291cnQgJiYgdHlwZW9mIG1lc3NhZ2UuZGF0YS5sc3RDb3VydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLmlzV2FpdGluZ0ZvckNvdXJ0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlZFN1Z2dlc3RlZENvdXJ0cyhtZXNzYWdlLmRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVJlY2VpdmVkU3VnZ2VzdGVkQ291cnRzKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGxldCBjb3VydHMgPSBkYXRhLmxzdENvdXJ0Lm1hcCgoY291cnREYXRhOiBhbnkpID0+IHtcbiAgICAgIGxldCBjb3VydCA9IG5ldyBDb3VydChjb3VydERhdGEucGFydG5lckJyYW5jaCk7XG4gICAgICByZXR1cm4ge2lkOiAnY291cnQtJyArIGNvdXJ0LmlkLCB0ZXh0OiBjb3VydC5uYW1lfTtcbiAgICB9KS5zbGljZSgwLCAzKTtcbiAgICBsZXQgZmlsdGVyVHlwZURhdGEgPSB0eXBlRGF0YS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0udGV4dC5tYXRjaChcbiAgICAgICAgbmV3IFJlZ0V4cCh0aGlzLnNlYXJjaGluZ1F1ZXJ5LmtleXdvcmQucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKSwgJ2lnJylcbiAgICAgICk7XG4gICAgfSk7XG4gICAgKDxhbnk+dGhpcy5rZXlXb3JkSW5wdXQpLml0ZW1zID0gY291cnRzLmNvbmNhdChmaWx0ZXJUeXBlRGF0YSk7XG4gICAgKDxhbnk+dGhpcy5rZXlXb3JkSW5wdXQpLm9wZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVSZWNlaXZlZFN1Z2dlc3RlZExvY2F0aW9ucyhkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAoPGFueT50aGlzLmxvY2F0aW9uSW5wdXQpLml0ZW1zID0gZGF0YS5sc3RDaXR5Lm1hcCgobG9jYXRpb25EYXRhOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBsb2NhdGlvbkRhdGEuZm9ybWF0dGVkQ2l0eU5hbWUsXG4gICAgICAgIHRleHQ6IGxvY2F0aW9uRGF0YS5mb3JtYXR0ZWRDaXR5TmFtZVxuICAgICAgfTtcbiAgICB9KS5zbGljZSgwLCAzKTtcbiAgICAoPGFueT50aGlzLmxvY2F0aW9uSW5wdXQpLm9wZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBzZW5kTWVzc2FnZVRvR2V0U2VhcmNoU3VnZ2VzdGlvbihrZXk6IGFueSk6IHZvaWQge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IFNlYXJjaFN1Z2dlc3Rpb25Db3VydCgpLnNldEtleVdvcmQoa2V5KTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBvblR5cGVkS2V5d29yZCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hpbmdRdWVyeS5rZXl3b3JkID0gdmFsdWU7XG4gICAgdGhpcy5pc1dhaXRpbmdGb3JDb3VydCA9IHRydWU7XG4gICAgKDxhbnk+dGhpcy5rZXlXb3JkSW5wdXQpLm9wZW4oKTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRTZWFyY2hTdWdnZXN0aW9uKHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvblR5cGVkTG9jYXRpb24odmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaXNXYWl0aW5nRm9yTG9jYXRpb24gPSB0cnVlO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldFNlYXJjaFN1Z2dlc3Rpb24odmFsdWUpO1xuICAgICg8YW55PnRoaXMubG9jYXRpb25JbnB1dCkub3BlbigpO1xuICB9XG5cbiAgcHVibGljIG9uS2V5V29yZFNlbGVjdGVkKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuc2VhcmNoaW5nUXVlcnkua2V5d29yZCA9IHZhbHVlLnRleHQ7XG4gICAgaWYgKHZhbHVlLmlkLnN0YXJ0c1dpdGgoJ2NvdXJ0LScpKSB0aGlzLm9wZW5CcmFuY2hQYWdlKHZhbHVlLmlkLnN1YnN0cig2KSk7XG4gICAgZWxzZSBpZiAodmFsdWUuaWQuc3RhcnRzV2l0aCgnZXZlbnQtJykpIHRoaXMub3BlbkV2ZW50UGFnZSh2YWx1ZS5pZC5zdWJzdHIoNikpO1xuICAgIGVsc2UgaWYgKHZhbHVlLmlkLnN0YXJ0c1dpdGgoJ3R5cGUtJykpIHtcbiAgICAgIHRoaXMuc2VhcmNoaW5nUXVlcnkua2V5d29yZCA9ICcnO1xuICAgICAgdGhpcy5zZWFyY2hpbmdRdWVyeS50eXBlID0gdmFsdWUuaWQuc3Vic3RyKDUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLm9wZW5TZWFyY2hpbmdSZXN1bHRQYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTG9jYXRpb25TZWxlY3RlZCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hpbmdRdWVyeS5sb2NhdGlvbiA9IHZhbHVlLnRleHQ7XG4gICAgdGhpcy5vcGVuU2VhcmNoaW5nUmVzdWx0UGFnZSgpO1xuICB9XG5cbiAgcHVibGljIG9wZW5CcmFuY2hQYWdlKGNvdXJ0SWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jlc2VydmF0aW9ucy9icmFuY2gnLCBjb3VydElkXSk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkV2ZW50UGFnZShldmVudElkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ldmVudHMvJywgZXZlbnRJZF0pO1xuICB9XG5cbiAgcHVibGljIG9wZW5TZWFyY2hpbmdSZXN1bHRQYWdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlYXJjaGluZ1F1ZXJ5LmxvY2F0aW9uID09PSAnJykgcmV0dXJuO1xuICAgIGlmICh0aGlzLnNlYXJjaGluZ1F1ZXJ5LmtleXdvcmQgPT09ICcnICYmIHRoaXMuc2VhcmNoaW5nUXVlcnkudHlwZSA9PT0gJycpIHJldHVybjtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZXNlcnZhdGlvbnMvc2VhcmNoJ10sIHtxdWVyeVBhcmFtczogdGhpcy5zZWFyY2hpbmdRdWVyeX0pO1xuICB9XG5cbiAgcHVibGljIG9uQ2xpY2tTZWFyY2hCdXR0b24oKTogYW55IHtcbiAgICB0aGlzLm9wZW5TZWFyY2hpbmdSZXN1bHRQYWdlKCk7XG4gIH1cbn1cbiJdfQ==
