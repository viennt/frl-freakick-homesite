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
            template: "<div class=\"container\">     <div class=\"row\">         <div class=\"col-sm-4\">             <div class=\"google-map hidden-xs\" *ngIf=\"receivedClasses && receivedClasses.length\">                 <div class=\"panel panel-default\">                     <div class=\"panel-footer no-padding\">                         <sebm-google-map [latitude]=\"receivedClasses[0].trainingClass.branch.coordinate.lat\"                                          [longitude]=\"receivedClasses[0].trainingClass.branch.coordinate.lng\">                             <sebm-google-map-marker *ngFor=\"let receivedClass of receivedClasses; let i = index\"                                                     [latitude]=\"receivedClass.trainingClass.branch.coordinate.lat\"                                                     [longitude]=\"receivedClass.trainingClass.branch.coordinate.lng\">                             </sebm-google-map-marker>                         </sebm-google-map>                     </div>                 </div>             </div>             <div class=\"filter no-select\">                 <div class=\"multiple-checkbox\">                     <div class=\"title color-red\"><i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> Sports</div>                     <label *ngFor=\"let sport of availableSports\">                         <input type=\"checkbox\" name=\"sport\" checked                                [disabled]=\"filterSports.length === 1 && sport.sportId === filterSports[0].sportId\"                                (change)=\"filterSportsChanged(sport, $event.target.checked)\"/>                         <span>{{ sport.sportName }}</span>                     </label>                 </div>                 <div class=\"multiple-checkbox\">                     <div class=\"title color-red\"><i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> Groups</div>                     <label *ngFor=\"let group of availableGroups\">                         <input type=\"checkbox\" name=\"group\" checked                                [disabled]=\"filterGroups.length === 1 && group.groupId === filterGroups[0].groupId\"                                (change)=\"filterGroupsChanged(group, $event.target.checked)\"/>                         <span>{{ group.groupName }}</span>                     </label>                 </div>             </div>         </div>         <div class=\"col-sm-8\">             <div *ngIf=\"loadingResultData\">                 <frk-loading-circle></frk-loading-circle>             </div>             <div class=\"list-group\" *ngIf=\"receivedClasses && receivedClasses.length\">                 <div *ngFor=\"let receivedClass of receivedClasses; let i = index\"                      class=\"list-group-item row court-detail no-margin animated fadeIn\"                      [style.animation-duration]=\"'0.75s'\"                      [style.animation-delay]=\"i * 0.15 + 's'\"                      [class.hide]=\"loadingResultData\">                     <div class=\"col-sm-3 court-image\">                         <a class=\"thumbnail\" [routerLink]=\"['/reservations/branch', receivedClass.trainingClass.branch.id]\">                             <img [src]=\"receivedClass.trainingClass.category.sportIcon\"                                  (load)=\"classImageLoaded()\"                                  (error)=\"updateUrl(receivedClass)\">                         </a>                     </div>                     <div class=\"col-sm-9\">                         <div class=\"row\">                             <div class=\"col-sm-8\">                                 <div class=\"court-info\">                                     <div class=\"court-info-line\">                                         {{ i + 1 }}.                                         <a [routerLink]=\"['/reservations/branch', receivedClass.trainingClass.branch.id]\">                                             <strong>{{ receivedClass.trainingClass.branch.name }}</strong>                                         </a>                                     </div>                                     <div class=\"court-info-line\">                                         <span data-toggle=\"tooltip\"                                               title=\"{{ receivedClass.trainingClass.branch.rating }} stars of {{ receivedClass.trainingClass.branch.countRating }} rated\">                                           <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"                                              [class.fa-star]=\"star <= receivedClass.trainingClass.branch.rating\"                                              [class.color-red]=\"star <= receivedClass.trainingClass.branch.rating\"                                              [class.fa-star-o]=\"star > receivedClass.trainingClass.branch.rating\"></i>                                           {{ receivedClass.trainingClass.branch.countRating }} reviews                                         </span>                                     </div>                                     <div class=\"court-info-line\">                                         <div class=\"col-sm-8 no-padding\">                                             <span class=\"court-opening-hour\" data-toggle=\"tooltip\"                                                  title=\"Class name: {{ receivedClass.trainingClass.className }}\">                                                 Class: {{ receivedClass.trainingClass.className }}                                             </span>                                         </div>                                         <div class=\"col-sm-4 no-padding\">                                             <span class=\"court-fieldCode\" data-toggle=\"tooltip\"                                                  title=\"Class code: {{ receivedClass.trainingClass.classCode }}\">                                                 <i class=\"fa fa-server\" aria-hidden=\"true\"></i>                                                 {{ receivedClass.trainingClass.classCode }}                                             </span>                                         </div>                                         <div class=\"col-sm-12 no-padding\">                                             <span class=\"court-opening-hour \" data-toggle=\"tooltip\"                                                   title=\"Class time: from {{ receivedClass.trainingClass.from }} to {{ receivedClass.trainingClass.to }}\">                                                 <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>                                                 <span>{{ receivedClass.trainingClass.from }}</span>                                                 <span> - </span>                                                 <span>{{ receivedClass.trainingClass.to }}</span>                                             </span>                                         </div>                                         <div class=\"col-sm-12 no-padding\">                                             <span class=\"court-fieldCode\" data-toggle=\"tooltip\"                                                  title=\"Day price: {{ receivedClass.trainingClass.dayPrice }}\">                                                 <i class=\"fa fa-usd\" aria-hidden=\"true\"></i> {{ receivedClass.trainingClass.dayPrice }} per day                                             </span>                                             <span class=\"court-fieldCode\" data-toggle=\"tooltip\"                                                  title=\"Whole class price: {{ receivedClass.trainingClass.wholeClassPrice }}\">                                                 - <i class=\"fa fa-usd\" aria-hidden=\"true\"></i> {{ receivedClass.trainingClass.wholeClassPrice }} per class                                             </span>                                         </div>                                     </div>                                 </div>                             </div>                             <div class=\"col-sm-4\">                                 <div class=\"court-address\">                                     <div class=\"address\" data-toggle=\"tooltip\"                                          title=\"Address: {{ receivedClass.trainingClass.branch.address }}\">                                         <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>                                         {{ receivedClass.trainingClass.branch.address }}                                     </div>                                 </div>                             </div>                             <div class=\"col-sm-12 no-padding\">                                 <div class=\"court-info-line field-opening-hour pull-right\" *ngIf=\"!receivedClass.classSchedule\">                                     <button class=\"btn btn-sm btn-opening btn-auto-with\" type=\"button\" disabled>                                         This class does not have the schedule!                                     </button>                                 </div>                                 <div class=\"court-info-line field-opening-hour pull-right\" *ngIf=\"receivedClass.classSchedule\">                                     <button class=\"btn btn-sm btn-opening\" type=\"button\"                                             data-toggle=\"modal\" data-target=\"#scheduleClassModal\"                                             (click)=\"onOpenClassSchedule(receivedClass.classSchedule)\"> View schedule </button>                                     <button class=\"btn btn-sm btn-opening\" type=\"button\"                                             (click)=\"onBookingClass(receivedClass)\"> Join </button>                                 </div>                             </div>                         </div>                     </div>                 </div>             </div>             <div *ngIf=\"!loadingResultData && (receivedClasses && !receivedClasses.length)\"                  class=\"courts-result\">                 <div class=\"result-container\">                     <div class=\"no-result\">                         There are no results found.                     </div>                 </div>             </div>         </div>     </div> </div>  <div class=\"modal fade\" id=\"bookingClassModal\" tabindex=\"-1\"      role=\"dialog\" aria-labelledby=\"myModalLabel\">     <div *ngIf=\"!selectedTrainingClass || !selectedClassSchedule\">         <frk-loading-circle></frk-loading-circle>     </div>     <sd-booking-class-ticket             *ngIf=\"selectedTrainingClass && selectedClassSchedule\"             [classSchedule]=\"selectedClassSchedule\"             [trainingClass]=\"selectedTrainingClass\"     ></sd-booking-class-ticket> </div>  <div class=\"modal fade\" id=\"scheduleClassModal\" tabindex=\"-1\"      role=\"dialog\" aria-labelledby=\"myModalLabel\">     <div *ngIf=\"!selectedClassSchedule\">         <frk-loading-circle></frk-loading-circle>     </div>     <sd-class-schedule             *ngIf=\"selectedClassSchedule\"             [classSchedule]=\"selectedClassSchedule\"     ></sd-class-schedule> </div>",
            styles: [":host{width:100%;display:inline-block;min-height:calc(100vh - 200px)}.court-detail{padding-left:0;padding-right:0}.court-detail.list-group-item{border-radius:0;border-left-width:0;border-right-width:0;border-bottom-width:0;color:#787878}.court-detail .court-image{padding-left:0}.court-detail .list-group-item,.court-detail .thumbnail{border:none}.court-detail .list-group-item:first-child{margin:0}.court-detail .court-address,.court-detail .court-info{line-height:1.8;font-size:90%}.court-fieldSize img{width:16px;vertical-align:initial}.field-opening-hour .btn-opening{margin:.2vmin;background:#da3743;color:#fcfcfc;width:auto;height:auto}.field-opening-hour .btn-opening[disabled]{background-color:rgba(1,1,1,0);color:#101010}.field-opening-hour .btn-opening.btn-auto-with{width:auto}.field-opening-hour .btn-opening.selected{background:#00c853;border-color:#00c853;font-weight:700}.field-opening-hour .btn-opening:not(.selected):hover{background:#e06770;-webkit-animation:none;animation:none}.field-opening-hour .btn-opening:first-child{margin-left:0}.google-map .panel{border-radius:0}.sebm-google-map-container{height:300px}.filter{border-right:1px solid #ddd;padding:0 15px 0 0;display:inline-block;width:100%}.multiple-checkbox,.time-group{border-bottom:1px solid #ddd;padding:10px 0;float:left}.multiple-checkbox .title,.time-group .title{font-weight:700;padding:10px 0}.multiple-checkbox label{width:100%;margin:0;padding:5px 0;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.multiple-checkbox label input,.multiple-checkbox label span{vertical-align:middle;margin:0;height:16px}"],
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
