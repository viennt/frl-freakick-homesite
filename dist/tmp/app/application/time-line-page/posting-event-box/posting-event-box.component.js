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
var authentication_service_1 = require('../../../services/authentication.service');
var location_service_1 = require('../../../services/location.service');
var message_service_1 = require('../../../services/message.service');
var help_service_1 = require('../../../services/help.service');
var Group_1 = require('../../../models/Group');
var LngLat_1 = require('../../../models/LngLat');
var GetAllGroup_1 = require('../../../packages/GetAllGroup');
var CreateEvent_1 = require('../../../packages/CreateEvent');
var constants_1 = require('../../../constants');
var Event_1 = require('../../../models/Event');
var PostingEventBoxComponent = (function () {
    function PostingEventBoxComponent(messageService, locationService, authService) {
        this.messageService = messageService;
        this.locationService = locationService;
        this.authService = authService;
        this.serverUrl = constants_1.CONFIG.URL;
        this.eventRepeatType = Event_1.Event.repeatType;
    }
    PostingEventBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.authService.getAuthenticatedUser();
        this.userName = this.authService.getItem('fullName') || 'Freakick User';
        this.userImage = user.userImage;
        this.availableTimes = help_service_1.HelpService.getListHoursInDay();
        this.availableFrequency = [];
        for (var _i = 1; _i <= 30; _i++) {
            this.availableFrequency.push(_i);
        }
        this.resetScheduleEventForm();
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.sendMessageToGetAllGroups();
    };
    PostingEventBoxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#event-start-day').daterangepicker({
            singleDatePicker: true,
            locale: { format: 'YYYY-MM-DD' }
        }, function (pickedDate) {
            _this.inputStartDate = moment(pickedDate, 'YYYY-MM-DD').valueOf();
        });
        jQuery('#event-end-day').daterangepicker({
            singleDatePicker: true,
            locale: { format: 'YYYY-MM-DD' }
        }, function (pickedDate) {
            _this.inputEndDate = moment(pickedDate, 'YYYY-MM-DD').valueOf();
        });
    };
    PostingEventBoxComponent.prototype.onScroll = function (event) {
        if ((document.documentElement.scrollTop || document.body.scrollTop) > 1200) {
            this.closeScheduleEventForm();
        }
    };
    PostingEventBoxComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_ALL_GROUP_SUCCESS':
                this.handleReceivedGroups(message.data);
                break;
            case 'CREATE_EVENT_SUCCESS':
                this.closeScheduleEventForm();
                this.resetScheduleEventForm();
                break;
        }
    };
    PostingEventBoxComponent.prototype.handleReceivedGroups = function (data) {
        data.lstResult = Object.prototype.toString.call(data.lstResult) !== '[object Array]'
            ? JSON.parse(data.lstResult)
            : data.lstResult;
        this.availableGroups = data.lstResult.map(function (groupData) { return new Group_1.Group(groupData); });
    };
    PostingEventBoxComponent.prototype.sendMessageToGetAllGroups = function () {
        var apiPackage = new GetAllGroup_1.GetAllGroup();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    PostingEventBoxComponent.prototype.sendMessageToScheduleAnEvent = function () {
        var weekDays = [
            this.inputIsOccurSunday,
            this.inputIsOccurMonday,
            this.inputIsOccurTuesday,
            this.inputIsOccurWednesday,
            this.inputIsOccurThursday,
            this.inputIsOccurFriday,
            this.inputIsOccurSaturday,
        ];
        var apiPackage = new CreateEvent_1.CreateEvent()
            .setName(this.inputEventName || this.userName + '\'s event')
            .setDescription(this.inputDescription)
            .setDate(this.inputStartDate, this.inputEndDate)
            .setTime(this.inputIsAllDateEvent, this.inputStartTime, this.inputEndTime)
            .setType(Event_1.Event.type.Sponsored)
            .setRepeat(this.inputEventRepeatType, this.inputEventRepeatFrequency, weekDays)
            .setTimeZone('')
            .setContact(this.authService.getItem('email'), this.authService.getItem('phone'))
            .setLocation(this.inputEventAddress, new LngLat_1.LngLat(this.inputEventLongitude, this.inputEventLatitude))
            .setNotification(this.inputNotificationBy, this.inputNotificationBeforeHours)
            .setIsSocialEvent(false)
            .setImages(this.inputEventImages)
            .setGroups(this.inputEventGroups)
            .setSports([]);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    PostingEventBoxComponent.prototype.onChangeEventAddress = function (event) {
        var _this = this;
        if (!this.inputEventAddress)
            return;
        if (this.preSearchAddress || !this.inputEventAddress.length)
            clearTimeout(this.preSearchAddress);
        this.preSearchAddress = setTimeout(function () {
            clearTimeout(_this.preSearchAddress);
            _this.locationService.searchAddressByKeyWord(_this.inputEventAddress).then(function (data) { return _this.suggestedAddress = data && data.results.map(function (address) { return new Object({
                address: address.formatted_address,
                coordinate: new LngLat_1.LngLat(address.geometry.location.lng, address.geometry.location.lat)
            }); }) || []; });
        }, 500);
    };
    PostingEventBoxComponent.prototype.onSelectAddress = function (value) {
        this.inputEventLatitude = value.coordinate.getLat();
        this.inputEventLongitude = value.coordinate.getLng();
        this.inputEventAddress = value.address;
        this.suggestedAddress = [];
    };
    PostingEventBoxComponent.prototype.onClickAddMoreEventImage = function () {
        if (this.imageButton)
            this.imageButton.onClickButton();
    };
    PostingEventBoxComponent.prototype.onClickRemoveEventImage = function (image) {
        var index = this.inputEventImages.indexOf(image);
        if (index >= 0)
            this.inputEventImages.splice(index, 1);
    };
    PostingEventBoxComponent.prototype.openScheduleEventForm = function () {
        this.isShownScheduleEventForm = true;
    };
    PostingEventBoxComponent.prototype.closeScheduleEventForm = function () {
        this.isShownScheduleEventForm = false;
    };
    PostingEventBoxComponent.prototype.resetScheduleEventForm = function () {
        this.inputEventName = undefined;
        this.inputDescription = '';
        this.inputStartDate = moment().valueOf();
        this.inputEndDate = moment().add(1, 'd').valueOf();
        this.inputStartTime = 9;
        this.inputEndTime = 11;
        this.inputIsAllDateEvent = false;
        this.inputEventRepeatType = 0;
        this.inputEventRepeatFrequency = 1;
        this.inputIsOccurMonday = false;
        this.inputIsOccurTuesday = false;
        this.inputIsOccurWednesday = false;
        this.inputIsOccurThursday = false;
        this.inputIsOccurFriday = false;
        this.inputIsOccurSaturday = false;
        this.inputIsOccurSunday = false;
        this.inputNotificationBy = 0;
        this.inputNotificationBeforeHours = 1;
        this.inputEventGroups = [];
        this.inputEventImages = [];
        this.inputEventAddress = '';
        this.inputEventLatitude = 0;
        this.inputEventLongitude = 0;
    };
    PostingEventBoxComponent.prototype.onSubmitScheduleEvent = function () {
        this.sendMessageToScheduleAnEvent();
    };
    __decorate([
        core_1.ViewChild('imageButton'), 
        __metadata('design:type', Object)
    ], PostingEventBoxComponent.prototype, "imageButton", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], PostingEventBoxComponent.prototype, "onScroll", null);
    PostingEventBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-posting-event-box',
            template: "<div *ngIf=\"isShownScheduleEventForm\" class=\"overlay animated fadeIn\"      (click)=\"closeScheduleEventForm($event)\"></div> <div class=\"card event-main-form\">     <div class=\"card__content\">         <!-- Event Title -->         <div class=\"schedule-event\">             <div class=\"schedule-event-body\">                 <div class=\"user-image border-default\">                     <img [src]=\"userImage\" alt=\"\">                 </div>                 <div class=\"event-title\">                     <input name=\"event-title\" [(ngModel)]=\"inputEventName\"                            placeholder=\"What's your event name?\"                            (click)=\"openScheduleEventForm($event)\">                 </div>             </div>         </div>         <!-- Event Date Time -->         <div class=\"schedule-event animated\"              [class.hide]=\"!isShownScheduleEventForm\"              [class.fadeIn]=\"isShownScheduleEventForm\">             <div class=\"schedule-event-body\">                 <form class=\"date-time\">                     <div class=\"row\">                         <div [class.col-sm-6]=\"inputIsAllDateEvent\"                              [class.col-sm-3]=\"!inputIsAllDateEvent\">                             <div class=\"form-group\">                                 <label class=\"font-grey-cascade font-sm\" for=\"event-start-day\">From</label>                                 <div class=\"input-icon right\">                                     <input id=\"event-start-day\"                                            class=\"form-control-event-date form-control input-sm border-default margin-bottom-5\"/>                                 </div>                             </div>                         </div>                         <div *ngIf=\"!inputIsAllDateEvent\" class=\"col-sm-3 animated fadeIn\">                             <div class=\"form-group\">                                 <label class=\"font-white font-sm hidden-xs\" for=\"event-start-time\">.</label>                                 <div class=\"input-icon right\">                                     <select id=\"event-start-time\" [(ngModel)]=\"inputStartTime\"                                             class=\"form-control-event-date form-control input-sm border-default margin-bottom-5\"                                             required name=\"start-time\">                                         <option *ngFor=\"let time of availableTimes\"                                                 value=\"{{ time.value }}\">                                             {{ time.name }}                                         </option>                                     </select>                                 </div>                             </div>                         </div>                         <div [class.col-sm-6]=\"inputIsAllDateEvent\"                              [class.col-sm-3]=\"!inputIsAllDateEvent\">                             <div class=\"form-group\">                                 <label class=\"font-grey-cascade font-sm\" for=\"event-start-day\">Until</label>                                 <div class=\"input-icon right\">                                     <input id=\"event-end-day\"                                            class=\"form-control-event-date form-control input-sm border-default margin-bottom-5\"/>                                 </div>                             </div>                         </div>                         <div *ngIf=\"!inputIsAllDateEvent\" class=\"col-sm-3 animated fadeIn\">                             <div class=\"form-group\">                                 <label class=\"font-white font-sm hidden-xs\" for=\"event-end-time\">.</label>                                 <div class=\"input-icon right\">                                     <select id=\"event-end-time\" [(ngModel)]=\"inputEndTime\"                                             class=\"form-control-event-date form-control input-sm border-default margin-bottom-5\"                                             required name=\"end-time\">                                         <option *ngFor=\"let time of availableTimes\"                                                 value=\"{{ time.value }}\">                                             {{ time.name }}                                         </option>                                     </select>                                 </div>                             </div>                         </div>                     </div>                 </form>             </div>         </div>         <!-- Event Description -->         <div *ngIf=\"isShownScheduleEventForm\" class=\"schedule-event animated fadeIn\">             <div class=\"schedule-event-body\">                 <div class=\"event-description border-default\">                     <form class=\"form-group form-md-line-input\">                         <textarea class=\"form-control\" rows=\"3\" placeholder=\"\"                                   [(ngModel)]=\"inputDescription\" name=\"description\"></textarea>                         <label class=\"font-grey-cascade font-sm\">Description</label>                     </form>                 </div>             </div>         </div>         <!-- Event Repeat Frequency -->         <div *ngIf=\"isShownScheduleEventForm && inputEventRepeatType\" class=\"schedule-event animated fadeIn\">             <div class=\"schedule-event-body\">                 <div class=\"row\">                     <div class=\"col-sm-3\">                         <div class=\"form-group\">                             <label class=\"font-grey-cascade font-sm\"                                    for=\"event-repeat-frequency\">Repeat every</label>                             <select id=\"event-repeat-frequency\" required name=\"start-time\"                                     class=\"form-control-event-date form-control input-sm border-default margin-bottom-5\"                                     [(ngModel)]=\"inputEventRepeatFrequency\">                                 <option *ngFor=\"let time of availableFrequency\"                                         value=\"{{ time }}\">                                     {{ time }}                                     <span *ngIf=\"inputEventRepeatType === eventRepeatType.Daily\">days</span>                                     <span *ngIf=\"inputEventRepeatType === eventRepeatType.Weekly\">weeks</span>                                     <span *ngIf=\"inputEventRepeatType === eventRepeatType.Monthly\">months</span>                                 </option>                             </select>                         </div>                     </div>                     <div *ngIf=\"inputEventRepeatType === eventRepeatType.Weekly\" class=\"col-sm-9 event-repeat-on\">                         <div class=\"form-group\">                             <label class=\"font-grey-cascade font-sm\">Repeat on</label>                             <div class=\"mt-checkbox-inline\">                                 <label class=\"mt-checkbox schedule-check-box\">                                     <input type=\"checkbox\" [checked]=\"inputIsOccurSunday\"                                            (change)=\"inputIsOccurSunday = !inputIsOccurSunday\"> S                                     <span></span>                                 </label>                                 <label class=\"mt-checkbox schedule-check-box\">                                     <input type=\"checkbox\" [checked]=\"inputIsOccurMonday\"                                            (change)=\"inputIsOccurMonday = !inputIsOccurMonday\"> M                                     <span></span>                                 </label>                                 <label class=\"mt-checkbox schedule-check-box\">                                     <input type=\"checkbox\" [checked]=\"inputIsOccurTuesday\"                                            (change)=\"inputIsOccurTuesday = !inputIsOccurTuesday\"> T                                     <span></span>                                 </label>                                 <label class=\"mt-checkbox schedule-check-box\">                                     <input type=\"checkbox\" [checked]=\"inputIsOccurWednesday\"                                            (change)=\"inputIsOccurWednesday = !inputIsOccurWednesday\"> W                                     <span></span>                                 </label>                                 <label class=\"mt-checkbox schedule-check-box\">                                     <input type=\"checkbox\" [checked]=\"inputIsOccurThursday\"                                            (change)=\"inputIsOccurThursday = !inputIsOccurThursday\"> T                                     <span></span>                                 </label>                                 <label class=\"mt-checkbox schedule-check-box\">                                     <input type=\"checkbox\" [checked]=\"inputIsOccurFriday\"                                            (change)=\"inputIsOccurFriday = !inputIsOccurFriday\"> F                                     <span></span>                                 </label>                                 <label class=\"mt-checkbox schedule-check-box\">                                     <input type=\"checkbox\" [checked]=\"inputIsOccurSaturday\"                                            (change)=\"inputIsOccurSaturday = !inputIsOccurSaturday\"> S                                     <span></span>                                 </label>                             </div>                         </div>                     </div>                 </div>             </div>         </div>         <!-- Event Notification -->         <div *ngIf=\"isShownScheduleEventForm && inputNotificationBy\" class=\"schedule-event animated fadeIn\">             <div class=\"schedule-event-body\">                 <div class=\"row\">                     <div class=\"col-sm-6\">                         <div class=\"form-group\">                             <label class=\"font-grey-cascade font-sm\"                                    for=\"event-repeat-frequency\">Remind with                                 <span *ngIf=\"inputNotificationBy !== 2\" class=\"bold\">message</span>                                 <span *ngIf=\"inputNotificationBy === 2\" class=\"bold\">email</span>                                 before</label>                             <div class=\"input-group\">                                 <input type=\"number\" autofocus [(ngModel)]=\"inputNotificationBeforeHours\"                                        class=\"form-control-event-date form-control input-sm border-default\">                                 <span class=\"input-group-addon\">hours</span>                             </div>                         </div>                     </div>                 </div>             </div>         </div>         <!-- Event Images -->         <div *ngIf=\"isShownScheduleEventForm && inputEventImages && inputEventImages.length\" class=\"schedule-event animated fadeIn\">             <div class=\"schedule-event-body\">                 <div><label class=\"font-grey-cascade font-sm\">Images</label></div>                 <div *ngFor=\"let image of inputEventImages\" class=\"event-image\">                     <img [src]=\"serverUrl + '/assets/' + image\" (error)=\"$event.target.style.display = 'none'\">                     <div class=\"image-overlay\">                         <i (click)=\"onClickRemoveEventImage(image)\"                            class=\"fa fa-remove font-dark pull-right\"></i>                     </div>                 </div>                 <div class=\"event-image add-more\" (click)=\"onClickAddMoreEventImage($event)\">                     <img src=\"./assets/images/application/add-more.jpg\">                 </div>             </div>         </div>         <!-- Event Age Groups -->         <div *ngIf=\"isShownScheduleEventForm && hasEventGroups\" class=\"schedule-event age-group animated fadeIn\">             <div class=\"schedule-event-body\">                 <app-age-group-form-group                         [(eventGroups)]=\"inputEventGroups\"                         [availableGroups]=\"availableGroups\">                 </app-age-group-form-group>             </div>         </div>         <!-- Event Address -->         <div *ngIf=\"isShownScheduleEventForm && hasEventAddress\" class=\"schedule-event animated fadeIn\">             <div class=\"schedule-event-body\">                 <label class=\"font-grey-cascade font-sm\">Address</label>                 <input id=\"address\" class=\"form-control-event-date form-control input-sm border-default\"                        autocomplete=\"off\" name=\"address\" placeholder=\"Event address. Eg, Boston, MA, USA\"                        required #address=\"ngModel\" minlength=\"1\" maxlength=\"255\" type=\"text\" autofocus                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"                        [(ngModel)]=\"inputEventAddress\"                        (keyup)=\"onChangeEventAddress($event)\">                 <div *ngIf=\"suggestedAddress && suggestedAddress.length\"                      class=\"dropdown-menu address-suggestion bg-white\">                     <ul class=\"feeds\">                         <li *ngFor=\"let address of suggestedAddress\">                             <div class=\"col1\">                                 <div class=\"cont\">                                     <div class=\"cont-col2\" (click)=\"onSelectAddress(address)\">                                         <a class=\"desc font-grey-cascade\">                                             {{ address.address }}                                         </a>                                     </div>                                 </div>                             </div>                         </li>                     </ul>                 </div>             </div>         </div>         <!-- Event Form Options -->         <div *ngIf=\"isShownScheduleEventForm\" class=\"schedule-event form-options animated fadeIn\">             <div class=\"schedule-event-body\">                 <div class=\"row\">                     <div class=\"col-xs-6 col-sm-4\">                         <app-all-day-button [(isAllDay)]=\"inputIsAllDateEvent\"></app-all-day-button>                     </div>                     <div class=\"col-xs-6 col-sm-4\">                         <app-schedule-button [(repeatType)]=\"inputEventRepeatType\"></app-schedule-button>                     </div>                     <div class=\"col-xs-6 col-sm-4\">                         <app-reminder-button [(notificationBy)]=\"inputNotificationBy\"></app-reminder-button>                     </div>                     <div class=\"col-xs-6 col-sm-4\">                         <app-image-button #imageButton [(eventImages)]=\"inputEventImages\"></app-image-button>                     </div>                     <div class=\"col-xs-6 col-sm-4\">                         <app-age-group-button [(hasGroups)]=\"hasEventGroups\"></app-age-group-button>                     </div>                     <div class=\"col-xs-6 col-sm-4\">                         <app-address-button [(hasAddress)]=\"hasEventAddress\"></app-address-button>                     </div>                 </div>             </div>         </div>         <!-- Event Form Footer -->         <div class=\"schedule-event form-footer\">             <div class=\"schedule-event-footer\">                 <div class=\"pull-right\">                     <div class=\"btn btn-xs\">                         <i class=\"icon-user\"></i> Personal                     </div>                     <div class=\"btn blue-madison btn-xs\"                          (click)=\"onSubmitScheduleEvent($event)\">                         Create event                     </div>                 </div>             </div>         </div>     </div> </div>",
            styles: [".overlay{position:fixed;left:0;top:0;width:100%;height:100%;z-index:9;background:rgba(59,63,81,.8)}.event-main-form,.schedule-event{position:relative;z-index:10}.schedule-event.age-group{z-index:15}.schedule-event.form-options{z-index:5}.schedule-event.form-footer{z-index:2}.schedule-event-body{width:100%;padding:5px 0;display:inline-block}.schedule-event-body .user-image{width:50px;height:50px;float:left;overflow:hidden;border-radius:50%;border:2px solid #eee}.schedule-event-body .user-image img{width:100%;height:100%}.schedule-event-body .event-title{width:calc(100% - 60px);height:50px;float:left}.schedule-event-body .event-title input{width:100%;height:100%;text-align:left;border:none;outline:none}.schedule-event-footer{width:100%;height:35px;padding:10px 0 0;border-top:1px solid #f0f1f2}.form-group{margin-bottom:0}.event-description .form-group{margin:0}.schedule-event-body /deep/ .button-event{text-align:left}.schedule-event-body .form-control-event-date{border:2px solid}.schedule-event-body .event-description{border:2px solid;padding:5px;border-radius:6px}.schedule-event-body .event-description textarea{border:none}.schedule-event-body .event-description label:after{background:none}.schedule-event-body .event-repeat-on .mt-checkbox-inline{padding:5px 0}.schedule-event-body label.schedule-check-box{margin-bottom:0}.schedule-event-body .event-image{width:auto;height:100px;border:2px solid #e1e5ec;background:#fafafa;border-radius:3px;float:left;margin-right:10px;margin-bottom:5px;position:relative}.schedule-event-body .event-image img{width:auto;height:100%}.schedule-event-body .event-image .image-overlay{top:0;left:0;width:100%;height:100%;position:absolute;background:rgba(0,0,0,.5);padding:5px}.schedule-event-body .event-image .image-overlay i{cursor:pointer;padding:5px;background:#d7d7d7;border-radius:50%}.schedule-event-body .event-image.add-more img{opacity:.2;margin:5px;height:calc(100% - 10px);cursor:pointer}.schedule-event-body .address-suggestion{top:57px;width:100%}.schedule-event-body .address-suggestion .feeds li .col1>.cont{width:100%}"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, location_service_1.LocationService, authentication_service_1.AuthenticationService])
    ], PostingEventBoxComponent);
    return PostingEventBoxComponent;
}());
exports.PostingEventBoxComponent = PostingEventBoxComponent;
