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
var message_service_1 = require('../../services/message.service');
var location_service_1 = require('../../services/location.service');
var authentication_service_1 = require('../../services/authentication.service');
var GetRatingBranch_1 = require('../../packages/GetRatingBranch');
var GetBranchInfo_1 = require('../../packages/GetBranchInfo');
var GetSportType_1 = require('../../packages/GetSportType');
var GetAllGroup_1 = require('../../packages/GetAllGroup');
var Court_1 = require('../../models/Court');
var Sport_1 = require('../../models/Sport');
var Group_1 = require('../../models/Group');
var LngLat_1 = require('../../models/LngLat');
var ButtonState_1 = require('../../models/ButtonState');
var SearchingType;
(function (SearchingType) {
    SearchingType[SearchingType["courts"] = 0] = "courts";
    SearchingType[SearchingType["classes"] = 1] = "classes";
    SearchingType[SearchingType["facilities"] = 2] = "facilities";
})(SearchingType || (SearchingType = {}));
var BranchComponent = (function () {
    function BranchComponent(router, route, locationService, authService, messageService) {
        this.router = router;
        this.route = route;
        this.locationService = locationService;
        this.authService = authService;
        this.messageService = messageService;
        this.searchingType = SearchingType;
        this.courtTabState = new ButtonState_1.ButtonState();
        this.classTabState = new ButtonState_1.ButtonState();
        this.facilityTabState = new ButtonState_1.ButtonState();
    }
    Object.defineProperty(BranchComponent.prototype, "fadeIn", {
        get: function () {
            return 'in';
        },
        enumerable: true,
        configurable: true
    });
    BranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.isLoggedIn = this.authService.isLoggedIn();
    };
    BranchComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.messageSub.unsubscribe();
    };
    BranchComponent.prototype.handleRoute = function (params) {
        this.isWaitingForUpdateBranchInfo = false;
        this.isShownReceivedFacilities = false;
        this.isShownReceivedClasses = false;
        this.isShownReceivedCourts = false;
        this.isShownDirectionMap = false;
        this.isShownReviewForm = false;
        this.branchIdParam = +params['id'];
        this.branch = undefined;
        this.sendMessageToGetBranchInfo();
    };
    BranchComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_BRANCH_INFO_SUCCESS':
                if (typeof message.data.branchInfo === 'undefined')
                    break;
                this.isNotFoundBranch = false;
                this.branch = new Court_1.Court(message.data.branchInfo);
                if (this.authService.isLoggedIn())
                    this.sendMessageToGetRatingBranch();
                if (this.isWaitingForUpdateBranchInfo) {
                    this.isWaitingForUpdateBranchInfo = false;
                    break;
                }
                this.sendMessageToGetSports();
                break;
            case 'GET_USER_RATING_FOR_BRANCH_SUCCESS':
                this.userReviewOnBranch = message.data.rating;
                break;
            case 'GET_SPORT_TYPE_SUCCESS':
                this.handleReceivedSport(message.data.lstSport);
                this.sendMessageToGetGroups();
                break;
            case 'GET_ALL_GROUP_SUCCESS':
                this.handleReceivedGroups(message.data);
                this.loadCourtResource();
                break;
            case 'REQUEST_ERROR':
                if ('GET_BRANCH_INFO_NOT_FOUND' === message.data.errorType) {
                    this.isNotFoundBranch = true;
                }
        }
    };
    BranchComponent.prototype.handleReceivedSport = function (data) {
        data = Object.prototype.toString.call(data) !== '[object Array]' ? JSON.parse(data) : data;
        this.availableSports = data.map(function (sportData) { return new Sport_1.Sport(sportData); });
    };
    BranchComponent.prototype.handleReceivedGroups = function (data) {
        data.lstResult = Object.prototype.toString.call(data.lstResult) !== '[object Array]' ? JSON.parse(data.lstResult) : data.lstResult;
        this.availableGroups = data.lstResult.map(function (groupData) { return new Group_1.Group(groupData); });
    };
    BranchComponent.prototype.sendMessageToGetBranchInfo = function () {
        if (typeof this.branchIdParam === 'undefined')
            return;
        var apiPackage = new GetBranchInfo_1.GetBranchInfo().setBranchId(this.branchIdParam);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    BranchComponent.prototype.sendMessageToGetSports = function () {
        var apiPackage = new GetSportType_1.GetSportType();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    BranchComponent.prototype.sendMessageToGetGroups = function () {
        var apiPackage = new GetAllGroup_1.GetAllGroup();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    BranchComponent.prototype.sendMessageToGetRatingBranch = function () {
        var apiPackage = new GetRatingBranch_1.GetRatingBranch().setBranch(this.branch);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    BranchComponent.prototype.loadCourtResource = function () {
        this.courtTabState.loading();
        this.classTabState.loading();
        this.facilityTabState.loading();
    };
    BranchComponent.prototype.goToCourtsTab = function () {
        this.isShownReceivedCourts = true;
        this.isShownReceivedClasses = false;
        this.isShownReceivedFacilities = false;
    };
    BranchComponent.prototype.goToClassesTab = function () {
        this.isShownReceivedCourts = false;
        this.isShownReceivedClasses = true;
        this.isShownReceivedFacilities = false;
    };
    BranchComponent.prototype.goToFacilitiesTab = function () {
        this.isShownReceivedCourts = false;
        this.isShownReceivedClasses = false;
        this.isShownReceivedFacilities = true;
    };
    BranchComponent.prototype.disableCourtsTab = function () {
        this.courtTabState.notReady();
    };
    BranchComponent.prototype.disableClassesTab = function () {
        this.classTabState.notReady();
    };
    BranchComponent.prototype.disableFacilitiesTab = function () {
        this.facilityTabState.notReady();
    };
    BranchComponent.prototype.enableCourtsTab = function () {
        this.courtTabState.ready();
        this.goToCourtsTab();
    };
    BranchComponent.prototype.enableClassesTab = function () {
        this.classTabState.ready();
        if (this.courtTabState.isReady())
            this.goToCourtsTab();
        else
            this.goToClassesTab();
    };
    BranchComponent.prototype.enableFacilitiesTab = function () {
        this.facilityTabState.ready();
        if (this.courtTabState.isReady())
            this.goToCourtsTab();
        else if (this.classTabState.isReady())
            this.goToClassesTab();
        else
            this.goToFacilitiesTab();
    };
    BranchComponent.prototype.openMapDirection = function () {
        var _this = this;
        if (this.isShownDirectionMap)
            return;
        this.locationService.getCurrentPosition(function (position) { return _this.afterGetCurrentLocation(position); });
    };
    BranchComponent.prototype.afterGetCurrentLocation = function (position) {
        this.userCurrentLocation = new LngLat_1.LngLat(position.location.lng, position.location.lat);
        this.isShownDirectionMap = true;
    };
    BranchComponent.prototype.toggleReviewForm = function (status) {
        this.isShownReviewForm = status;
    };
    BranchComponent.prototype.reloadUserRating = function () {
        this.toggleReviewForm(false);
        this.isWaitingForUpdateBranchInfo = true;
        this.sendMessageToGetBranchInfo();
    };
    __decorate([
        core_1.HostBinding('@fadeIn'), 
        __metadata('design:type', Object)
    ], BranchComponent.prototype, "fadeIn", null);
    BranchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-branch',
            templateUrl: 'branch.component.html',
            styleUrls: ['branch.component.css'],
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
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, location_service_1.LocationService, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], BranchComponent);
    return BranchComponent;
}());
exports.BranchComponent = BranchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL2JyYW5jaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUdPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBS3pELGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHVDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBSzlFLGdDQUFnQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2pFLDhCQUE4Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzdELDZCQUE2Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzNELDRCQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBS3pELHNCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLHNCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLHNCQUFzQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzNDLHVCQUF1QixxQkFBcUIsQ0FBQyxDQUFBO0FBQzdDLDRCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBRXZELElBQUssYUFFSjtBQUZELFdBQUssYUFBYTtJQUNkLHFEQUFNLENBQUE7SUFBRSx1REFBTyxDQUFBO0lBQUUsNkRBQVUsQ0FBQTtBQUMvQixDQUFDLEVBRkksYUFBYSxLQUFiLGFBQWEsUUFFakI7QUFxQkQ7SUFrQ0kseUJBQ1ksTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLFdBQWtDLEVBQ2xDLGNBQThCO1FBSjlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQS9CbkMsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFrQjlCLGtCQUFhLEdBQWdCLElBQUkseUJBQVcs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QVcsQ0FBQyxTQUFTLENBQUM7O2lEQUFBO0lBakQzQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxVQUFVLEVBQUU7Z0JBQ1IsY0FBTyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxZQUFLLENBQUMsSUFBSSxFQUFFLFlBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUMsQ0FBQyxDQUFDO29CQUNoRCxpQkFBVSxDQUFDLFdBQVcsRUFBRSxjQUFPLENBQUMsSUFBSSxFQUFFLGdCQUFTLENBQUM7d0JBQzVDLFlBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO3dCQUM5QixZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztxQkFDakMsQ0FBQyxDQUFDLENBQUM7b0JBQ0osaUJBQVUsQ0FBQyxXQUFXLEVBQUUsY0FBTyxDQUFDLElBQUksRUFBRSxnQkFBUyxDQUFDO3dCQUM1QyxZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzt3QkFDOUIsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7cUJBQ2pDLENBQUMsQ0FBQyxDQUFDO2lCQUNQLENBQUM7YUFDTDtTQUNKLENBQUM7O3VCQUFBO0lBMk1GLHNCQUFDO0FBQUQsQ0ExTUEsQUEwTUMsSUFBQTtBQTFNWSx1QkFBZSxrQkEwTTNCLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9icmFuY2gvYnJhbmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsXG4gICAgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBrZXlmcmFtZXMsIHRyYW5zaXRpb24sIGFuaW1hdGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIHBhY2thZ2VzXG4gKi9cbmltcG9ydCB7IEdldFJhdGluZ0JyYW5jaCB9IGZyb20gJy4uLy4uL3BhY2thZ2VzL0dldFJhdGluZ0JyYW5jaCc7XG5pbXBvcnQgeyBHZXRCcmFuY2hJbmZvIH0gZnJvbSAnLi4vLi4vcGFja2FnZXMvR2V0QnJhbmNoSW5mbyc7XG5pbXBvcnQgeyBHZXRTcG9ydFR5cGUgfSBmcm9tICcuLi8uLi9wYWNrYWdlcy9HZXRTcG9ydFR5cGUnO1xuaW1wb3J0IHsgR2V0QWxsR3JvdXAgfSBmcm9tICcuLi8uLi9wYWNrYWdlcy9HZXRBbGxHcm91cCc7XG5cbi8qKlxuICogbW9kZWxzXG4gKi9cbmltcG9ydCB7IENvdXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NvdXJ0JztcbmltcG9ydCB7IFNwb3J0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL1Nwb3J0JztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0dyb3VwJztcbmltcG9ydCB7IExuZ0xhdCB9IGZyb20gJy4uLy4uL21vZGVscy9MbmdMYXQnO1xuaW1wb3J0IHsgQnV0dG9uU3RhdGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvQnV0dG9uU3RhdGUnO1xuXG5lbnVtIFNlYXJjaGluZ1R5cGUge1xuICAgIGNvdXJ0cywgY2xhc3NlcywgZmFjaWxpdGllc1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZnJrLWJyYW5jaCcsXG4gICAgdGVtcGxhdGVVcmw6ICdicmFuY2guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydicmFuY2guY29tcG9uZW50LmNzcyddLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmFkZUluJywgW1xuICAgICAgICAgICAgc3RhdGUoJ2luJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgYW5pbWF0ZSgxMDAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxfSlcbiAgICAgICAgICAgIF0pKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKDEwMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDF9KVxuICAgICAgICAgICAgXSkpKVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQnJhbmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyByb3V0ZVN1YjogYW55O1xuICAgIHB1YmxpYyBtZXNzYWdlU3ViOiBhbnk7XG5cbiAgICBwdWJsaWMgYnJhbmNoSWRQYXJhbTogbnVtYmVyO1xuICAgIHB1YmxpYyBicmFuY2g6IENvdXJ0O1xuICAgIHB1YmxpYyBpc05vdEZvdW5kQnJhbmNoOiBib29sZWFuO1xuXG4gICAgcHVibGljIHNlYXJjaGluZ1R5cGUgPSBTZWFyY2hpbmdUeXBlO1xuXG4gICAgcHVibGljIGF2YWlsYWJsZVNwb3J0czogU3BvcnRbXTtcbiAgICBwdWJsaWMgYXZhaWxhYmxlR3JvdXBzOiBHcm91cFtdO1xuXG4gICAgcHVibGljIGlzTG9nZ2VkSW46IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgaXNTaG93blJlY2VpdmVkQ291cnRzOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1Nob3duUmVjZWl2ZWRDbGFzc2VzOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1Nob3duUmVjZWl2ZWRGYWNpbGl0aWVzOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1Nob3duUmV2aWV3Rm9ybTogYm9vbGVhbjtcbiAgICBwdWJsaWMgaXNTaG93bkRpcmVjdGlvbk1hcDogYm9vbGVhbjtcblxuICAgIHB1YmxpYyB1c2VyQ3VycmVudExvY2F0aW9uOiBMbmdMYXQ7XG4gICAgcHVibGljIHVzZXJSZXZpZXdPbkJyYW5jaDogYW55O1xuXG4gICAgcHVibGljIGlzV2FpdGluZ0ZvclVwZGF0ZUJyYW5jaEluZm86IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgY291cnRUYWJTdGF0ZTogQnV0dG9uU3RhdGUgPSBuZXcgQnV0dG9uU3RhdGUoKTtcbiAgICBwdWJsaWMgY2xhc3NUYWJTdGF0ZTogQnV0dG9uU3RhdGUgPSBuZXcgQnV0dG9uU3RhdGUoKTtcbiAgICBwdWJsaWMgZmFjaWxpdHlUYWJTdGF0ZTogQnV0dG9uU3RhdGUgPSBuZXcgQnV0dG9uU3RhdGUoKTtcblxuICAgIEBIb3N0QmluZGluZygnQGZhZGVJbicpIGdldCBmYWRlSW4oKSB7XG4gICAgICAgIHJldHVybiAnaW4nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvblNlcnZpY2U6IExvY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gdGhpcy5oYW5kbGVSb3V0ZShwYXJhbXMpKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSkpO1xuXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGhhbmRsZVJvdXRlKHBhcmFtczogYW55KTogYW55IHtcbiAgICAgICAgdGhpcy5pc1dhaXRpbmdGb3JVcGRhdGVCcmFuY2hJbmZvID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTaG93blJlY2VpdmVkRmFjaWxpdGllcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2hvd25SZWNlaXZlZENsYXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDb3VydHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1Nob3duRGlyZWN0aW9uTWFwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTaG93blJldmlld0Zvcm0gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJyYW5jaElkUGFyYW0gPSArcGFyYW1zWydpZCddO1xuICAgICAgICB0aGlzLmJyYW5jaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvR2V0QnJhbmNoSW5mbygpO1xuICAgIH1cblxuICAgIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnR0VUX0JSQU5DSF9JTkZPX1NVQ0NFU1MnOlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS5kYXRhLmJyYW5jaEluZm8gPT09ICd1bmRlZmluZWQnKSBicmVhaztcbiAgICAgICAgICAgICAgICB0aGlzLmlzTm90Rm91bmRCcmFuY2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJyYW5jaCA9IG5ldyBDb3VydChtZXNzYWdlLmRhdGEuYnJhbmNoSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB0aGlzLnNlbmRNZXNzYWdlVG9HZXRSYXRpbmdCcmFuY2goKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1dhaXRpbmdGb3JVcGRhdGVCcmFuY2hJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXYWl0aW5nRm9yVXBkYXRlQnJhbmNoSW5mbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvR2V0U3BvcnRzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdHRVRfVVNFUl9SQVRJTkdfRk9SX0JSQU5DSF9TVUNDRVNTJzpcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJSZXZpZXdPbkJyYW5jaCA9IG1lc3NhZ2UuZGF0YS5yYXRpbmc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdHRVRfU1BPUlRfVFlQRV9TVUNDRVNTJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlY2VpdmVkU3BvcnQobWVzc2FnZS5kYXRhLmxzdFNwb3J0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRHcm91cHMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0dFVF9BTExfR1JPVVBfU1VDQ0VTUyc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlZEdyb3VwcyhtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvdXJ0UmVzb3VyY2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JFUVVFU1RfRVJST1InOlxuICAgICAgICAgICAgICAgIGlmICgnR0VUX0JSQU5DSF9JTkZPX05PVF9GT1VORCcgPT09IG1lc3NhZ2UuZGF0YS5lcnJvclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc05vdEZvdW5kQnJhbmNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVSZWNlaXZlZFNwb3J0KGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBkYXRhID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpICE9PSAnW29iamVjdCBBcnJheV0nID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlU3BvcnRzID0gZGF0YS5tYXAoKHNwb3J0RGF0YTogYW55KSA9PiBuZXcgU3BvcnQoc3BvcnREYXRhKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVjZWl2ZWRHcm91cHMoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIGRhdGEubHN0UmVzdWx0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEubHN0UmVzdWx0KSAhPT0gJ1tvYmplY3QgQXJyYXldJyA/IEpTT04ucGFyc2UoZGF0YS5sc3RSZXN1bHQpIDogZGF0YS5sc3RSZXN1bHQ7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlR3JvdXBzID0gZGF0YS5sc3RSZXN1bHQubWFwKChncm91cERhdGE6IGFueSkgPT4gbmV3IEdyb3VwKGdyb3VwRGF0YSkpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlVG9HZXRCcmFuY2hJbmZvKCk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYnJhbmNoSWRQYXJhbSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgR2V0QnJhbmNoSW5mbygpLnNldEJyYW5jaElkKHRoaXMuYnJhbmNoSWRQYXJhbSk7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlVG9HZXRTcG9ydHMoKTogdm9pZCB7XG4gICAgICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEdldFNwb3J0VHlwZSgpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZVRvR2V0R3JvdXBzKCk6IHZvaWQge1xuICAgICAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRBbGxHcm91cCgpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZVRvR2V0UmF0aW5nQnJhbmNoKCk6IHZvaWQge1xuICAgICAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRSYXRpbmdCcmFuY2goKS5zZXRCcmFuY2godGhpcy5icmFuY2gpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgICB9XG5cbiAgICBsb2FkQ291cnRSZXNvdXJjZSgpOiBhbnkge1xuICAgICAgICB0aGlzLmNvdXJ0VGFiU3RhdGUubG9hZGluZygpO1xuICAgICAgICB0aGlzLmNsYXNzVGFiU3RhdGUubG9hZGluZygpO1xuICAgICAgICB0aGlzLmZhY2lsaXR5VGFiU3RhdGUubG9hZGluZygpO1xuICAgIH1cblxuICAgIGdvVG9Db3VydHNUYWIoKTogYW55IHtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDb3VydHMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzU2hvd25SZWNlaXZlZENsYXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRGYWNpbGl0aWVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ29Ub0NsYXNzZXNUYWIoKTogYW55IHtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDb3VydHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRGYWNpbGl0aWVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ29Ub0ZhY2lsaXRpZXNUYWIoKTogYW55IHtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDb3VydHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1Nob3duUmVjZWl2ZWRDbGFzc2VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTaG93blJlY2VpdmVkRmFjaWxpdGllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzYWJsZUNvdXJ0c1RhYigpIDogYW55IHtcbiAgICAgICAgdGhpcy5jb3VydFRhYlN0YXRlLm5vdFJlYWR5KCk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUNsYXNzZXNUYWIoKSA6IGFueSB7XG4gICAgICAgIHRoaXMuY2xhc3NUYWJTdGF0ZS5ub3RSZWFkeSgpO1xuICAgIH1cblxuICAgIGRpc2FibGVGYWNpbGl0aWVzVGFiKCkgOiBhbnkge1xuICAgICAgICB0aGlzLmZhY2lsaXR5VGFiU3RhdGUubm90UmVhZHkoKTtcbiAgICB9XG5cbiAgICBlbmFibGVDb3VydHNUYWIoKSA6IGFueSB7XG4gICAgICAgIHRoaXMuY291cnRUYWJTdGF0ZS5yZWFkeSgpO1xuICAgICAgICB0aGlzLmdvVG9Db3VydHNUYWIoKTtcbiAgICB9XG5cbiAgICBlbmFibGVDbGFzc2VzVGFiKCkgOiBhbnkge1xuICAgICAgICB0aGlzLmNsYXNzVGFiU3RhdGUucmVhZHkoKTtcbiAgICAgICAgaWYgKHRoaXMuY291cnRUYWJTdGF0ZS5pc1JlYWR5KCkpIHRoaXMuZ29Ub0NvdXJ0c1RhYigpO1xuICAgICAgICBlbHNlIHRoaXMuZ29Ub0NsYXNzZXNUYWIoKTtcbiAgICB9XG5cbiAgICBlbmFibGVGYWNpbGl0aWVzVGFiKCkgOiBhbnkge1xuICAgICAgICB0aGlzLmZhY2lsaXR5VGFiU3RhdGUucmVhZHkoKTtcbiAgICAgICAgaWYgKHRoaXMuY291cnRUYWJTdGF0ZS5pc1JlYWR5KCkpIHRoaXMuZ29Ub0NvdXJ0c1RhYigpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmNsYXNzVGFiU3RhdGUuaXNSZWFkeSgpKSB0aGlzLmdvVG9DbGFzc2VzVGFiKCk7XG4gICAgICAgIGVsc2UgdGhpcy5nb1RvRmFjaWxpdGllc1RhYigpO1xuICAgIH1cblxuICAgIG9wZW5NYXBEaXJlY3Rpb24oKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93bkRpcmVjdGlvbk1hcCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxvY2F0aW9uU2VydmljZS5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uOiBhbnkpID0+IHRoaXMuYWZ0ZXJHZXRDdXJyZW50TG9jYXRpb24ocG9zaXRpb24pKTtcbiAgICB9XG5cbiAgICBhZnRlckdldEN1cnJlbnRMb2NhdGlvbihwb3NpdGlvbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlckN1cnJlbnRMb2NhdGlvbiA9IG5ldyBMbmdMYXQocG9zaXRpb24ubG9jYXRpb24ubG5nLCBwb3NpdGlvbi5sb2NhdGlvbi5sYXQpO1xuICAgICAgICB0aGlzLmlzU2hvd25EaXJlY3Rpb25NYXAgPSB0cnVlO1xuICAgIH1cblxuICAgIHRvZ2dsZVJldmlld0Zvcm0oc3RhdHVzOiBib29sZWFuKTogYW55IHtcbiAgICAgICAgdGhpcy5pc1Nob3duUmV2aWV3Rm9ybSA9IHN0YXR1cztcbiAgICB9XG5cbiAgICByZWxvYWRVc2VyUmF0aW5nKCk6IGFueSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2aWV3Rm9ybShmYWxzZSk7XG4gICAgICAgIHRoaXMuaXNXYWl0aW5nRm9yVXBkYXRlQnJhbmNoSW5mbyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldEJyYW5jaEluZm8oKTtcbiAgICB9XG5cbn1cbiJdfQ==
