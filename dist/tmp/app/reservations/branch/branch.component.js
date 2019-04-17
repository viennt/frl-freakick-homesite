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
            template: "<div class=\"branch-info\">     <div class=\"container \" *ngIf=\"branch && !isNotFoundBranch\">         <div class=\"row\">             <div class=\"col-xs-12\">                 <h2>{{ branch.name }}</h2>                 <div class=\"court-info-line\">                     <span class=\"branch-rating\" (click)=\"toggleReviewForm(!isShownReviewForm)\" data-toggle=\"tooltip\"                           title=\"{{ branch.rating }} stars of {{ branch.countRating }} rated\">                         <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"                              [class.fa-star]=\"star <= branch.rating\"                              [class.color-red]=\"star <= branch.rating\"                              [class.fa-star-o]=\"star > branch.rating\"></i>                         {{ branch.countRating }} reviews                         <span *ngIf=\"userReviewOnBranch\" class=\"user-review\">                             (You: {{ userReviewOnBranch.rating }}                             <i class=\"fa fa-star color-red\"></i>)                         </span>                     </span>                 </div>             </div>             <div class=\"col-sm-4\">                 <div class=\"panel google-map hidden-xs\">                     <div class=\"panel-footer no-padding\">                         <sebm-google-map [zoom]=\"16\" [streetViewControl]=\"false\"                                          [latitude]=\"branch.coordinate.lat\"                                          [longitude]=\"branch.coordinate.lng\">                             <sebm-google-map-directions *ngIf=\"isShownDirectionMap\"                                                         [origin]=\"userCurrentLocation\"                                                         [destination]=\"branch.coordinate\">                             </sebm-google-map-directions>                             <sebm-google-map-marker [latitude]=\"branch.coordinate.lat\"                                                     [longitude]=\"branch.coordinate.lng\">                             </sebm-google-map-marker>                         </sebm-google-map>                         <div class=\"address\" data-toggle=\"tooltip\"                              title=\"Address: {{ branch.address }}\">                             <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>                             {{ branch.address }}                         </div>                         <div  *ngIf=\"!isShownDirectionMap\" class=\"get-direction\">                             <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>                             <a (click)=\"openMapDirection()\">Get Directions</a>                         </div>                         <div *ngIf=\"isShownDirectionMap\" class=\"got-direction\">                             <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>                             <span>Get Directions</span>                         </div>                         <span class=\"phone\" data-toggle=\"tooltip\"                               title=\"Phone number: {{ branch.phoneNumber }}\">                             <i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i>                             {{ branch.phoneNumber }}                         </span>                     </div>                 </div>             </div>             <div class=\"col-sm-8\" *ngIf=\"!isShownReviewForm\">                 <ul class=\"nav nav-tabs\">                     <button class=\"btn btn-sm\"                             [class.active]=\"isShownReceivedCourts\"                             [loadingState]=\"courtTabState.state\"                             (click)=\"goToCourtsTab()\">Fields</button>                     <button class=\"btn btn-sm\"                             [class.active]=\"isShownReceivedClasses\"                             [loadingState]=\"classTabState.state\"                             (click)=\"goToClassesTab()\">Classes</button>                     <button class=\"btn btn-sm\"                             [class.active]=\"isShownReceivedFacilities\"                             [loadingState]=\"facilityTabState.state\"                             (click)=\"goToFacilitiesTab()\">Facilities</button>                 </ul>                 <div class=\"branch-cover\">                     <div class=\"court\" *ngIf=\"isShownReceivedCourts\">                         <img src=\"./assets/images/default/court.jpg\">                     </div>                     <div class=\"class\" *ngIf=\"isShownReceivedClasses\">                         <img src=\"./assets/images/default/class.jpg\">                     </div>                     <div class=\"facility\" *ngIf=\"isShownReceivedFacilities\">                         <img src=\"./assets/images/default/facility.jpg\">                     </div>                 </div>             </div>             <div class=\"col-sm-8\" *ngIf=\"isShownReviewForm\">             <div class=\"no-padding\"                  [class.col-sm-4]=\"isLoggedIn\"                  [class.col-sm-12]=\"!isLoggedIn\">                 <frk-show-review [branch]=\"branch\" [shortList]=\"true\"></frk-show-review>             </div>             <div class=\"col-sm-8\" *ngIf=\"isLoggedIn\">                 <frk-review-branch                         *ngIf=\"!userReviewOnBranch\"                         [branch]=\"branch\"                         (success)=\"reloadUserRating($event)\"                         (close)=\"toggleReviewForm(false)\">                 </frk-review-branch>                 <frk-update-review-branch                         *ngIf=\"userReviewOnBranch\"                         [userReviewData]=\"userReviewOnBranch\"                         (success)=\"reloadUserRating($event)\"                         (close)=\"toggleReviewForm(false)\">                 </frk-update-review-branch>             </div>         </div>         </div>     </div>      <div class=\"container\" *ngIf=\"!branch && isNotFoundBranch\">         Could not find branch!     </div>      <div class=\"container loading\" *ngIf=\"!branch && !isNotFoundBranch\">         <frk-loading-circle></frk-loading-circle>     </div> </div>  <!-- Searching courts results --> <frk-received-branch-courts     *ngIf=\"branch && availableSports\"     [class.hide]=\"!isShownReceivedCourts\"     [availableSports]=\"availableSports\"     [paginationPage]=\"0\"     [branch]=\"branch\"     (nonResult)=\"disableCourtsTab()\"     (haveResult)=\"enableCourtsTab()\"> </frk-received-branch-courts>  <!-- Searching classes results --> <frk-received-branch-classes     *ngIf=\"branch && availableSports && availableGroups\"     [class.hide]=\"!isShownReceivedClasses\"     [availableSports]=\"availableSports\"     [availableGroups]=\"availableGroups\"     [paginationPage]=\"0\"     [branch]=\"branch\"     (nonResult)=\"disableClassesTab()\"     (haveResult)=\"enableClassesTab()\"> </frk-received-branch-classes>  <!-- Searching facilities results --> <frk-received-branch-facilities     *ngIf=\"branch && availableSports\"     [class.hide]=\"!isShownReceivedFacilities\"     [availableSports]=\"availableSports\"     [paginationPage]=\"0\"     [branch]=\"branch\"     (nonResult)=\"disableFacilitiesTab()\"     (haveResult)=\"enableFacilitiesTab()\"> </frk-received-branch-facilities>  <div *ngIf=\"branch\" class=\"modal fade\" id=\"branchReviewsModal\"      tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">     <div class=\"modal-dialog\" role=\"document\">         <div class=\"modal-content\">             <div class=\"modal-header\">Reviews</div>             <div class=\"modal-body\">                 <frk-show-review [branch]=\"branch\"></frk-show-review>             </div>         </div>     </div> </div>",
            styles: [":host{display:block;min-height:calc(100vh - 200px)}.branch-info{background:#f5f5f5;border-top:1px solid #ccc;border-bottom:1px solid #ccc}.google-map{border-radius:2px;margin:10px 0;padding:5px;background-color:#fcfcfc;border:1px solid #ddd;line-height:1.5}.google-map .panel-footer{background:transparent}.google-map .address{padding:10px 10px 2px;font-size:90%}.google-map .get-direction{cursor:pointer}.google-map .get-direction,.google-map .got-direction{padding:2px 10px;font-size:90%}.google-map .phone{padding:2px 10px 10px;font-size:90%}.sebm-google-map-container{height:150px}.sebm-google-map-container>>>.sebm-google-map-container-inner{width:100%}.nav-tabs{border-bottom:none}.nav-tabs>button{background:#ececec;color:#101010;width:30.66667%;height:auto;box-shadow:none;margin:1%;outline:none}.nav-tabs>button[disabled]{background:transparent;color:#787878}.nav-tabs>button.btn-auto-with{width:auto}.nav-tabs>button.active{background:#da3743;color:#fcfcfc}.nav-tabs>button:first-child{margin-left:0}.branch-cover{width:100%;max-height:200px;overflow:hidden;border-radius:5px}.branch-cover>div,.branch-cover>div img{width:100%;max-height:100%}.no-result{padding-top:20px;padding-bottom:10px}input[type=checkbox][disabled]~span{cursor:not-allowed;opacity:.5}.branch-rating{cursor:pointer}.user-review{opacity:.75;font-size:75%}.container.loading{min-height:100vh}"],
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
