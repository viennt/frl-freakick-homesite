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
var upload_service_1 = require('../../services/upload.service');
var message_service_1 = require('../../services/message.service');
var authentication_service_1 = require('../../services/authentication.service');
var index_1 = require('../../models/index');
var EditUserInfo_1 = require('../../packages/EditUserInfo');
var GetSportType_1 = require('../../packages/GetSportType');
var GetCountries_1 = require('../../packages/GetCountries');
var GetStatesByCountry_1 = require('../../packages/GetStatesByCountry');
var GetCitiesByState_1 = require('../../packages/GetCitiesByState');
var AnswerDemoGraphicQuestion_1 = require('../../packages/AnswerDemoGraphicQuestion');
var DemoGraphicComponent = (function () {
    function DemoGraphicComponent(router, uploadService, messageService, authService) {
        this.router = router;
        this.uploadService = uploadService;
        this.messageService = messageService;
        this.authService = authService;
        this.formCurrentStep = 1;
        this.formTotalSteps = 3;
    }
    DemoGraphicComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.getItem('isFinishDemographicQuestion') === 'true') {
            this.router.navigate(['/app']);
        }
        this.inputInterestSports = [];
        this.userImageTemp = './assets/images/default/default-avatar.jpg';
        this.userCoverTemp = './assets/images/default/default-cover.jpg';
        this.inputGenderId = 1;
        this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.sendMessageToGetSports();
    };
    DemoGraphicComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#birthday-daterange').daterangepicker({
            singleDatePicker: true,
            locale: { format: 'YYYY-MM-DD' }
        }, function (pickedDate) {
            _this.inputBirthday = moment(pickedDate, 'YYYY-MM-DD').valueOf();
        });
    };
    DemoGraphicComponent.prototype.handleMessage = function (message) {
        var _this = this;
        switch (message.messageType) {
            case 'ANSWER_DEMOGRAPHIC_QUESTIONS_SUCCESS':
                this.isLoading = false;
                this.continueStep();
                break;
            case 'COUNTRIES_LST':
                this.countries = message.data.countriesLst;
                break;
            case 'STATE_LST':
                this.states = message.data.stateLst;
                break;
            case 'CITY_LST':
                this.cities = message.data.cityLst;
                break;
            case 'GET_SPORT_TYPE_SUCCESS':
                this.handleReceivedSport(message.data.lstSport);
                break;
            case 'EDIT_USER_INFO_SUCCESS':
                this.authService.updateUserInfo(message.data.user);
                setTimeout(function () { return _this.router.navigate(['/app/newsfeed']); }, 400);
                break;
            case 'REQUEST_ERROR':
                this.isLoading = false;
                if (message.data.errorType === 'ANSWER_DEMOGRAPHIC_QUESTIONS_USER_FINISH_ALREADY')
                    this.continueStep();
                break;
            case 'REQUEST_INPUT_ERROR':
                this.isLoading = false;
                break;
        }
    };
    DemoGraphicComponent.prototype.handleReceivedSport = function (data) {
        data = Object.prototype.toString.call(data) !== '[object Array]' ? JSON.parse(data) : data;
        this.availableSports = data.map(function (sportData) { return new index_1.Sport(sportData); });
    };
    DemoGraphicComponent.prototype.sendMessageToSubmitInterestSports = function (interestSportIds) {
        var apiPackage = new AnswerDemoGraphicQuestion_1.AnswerDemoGraphicQuestion()
            .setGenderId(1).setBirthDate(1).setGameLevel(1)
            .setInterestSportIds(interestSportIds);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    DemoGraphicComponent.prototype.sendMessageToGetSports = function () {
        var apiPackage = new GetSportType_1.GetSportType();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    DemoGraphicComponent.prototype.sendMessageToGetAvailableCountries = function () {
        var apiPackage = new GetCountries_1.GetCountries();
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    DemoGraphicComponent.prototype.sendMessageToGetAvailableStates = function (countryId) {
        var apiPackage = new GetStatesByCountry_1.GetStatesByCountry().setCountryId(countryId);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    DemoGraphicComponent.prototype.sendMessageToGetAvailableCities = function (stateId) {
        var apiPackage = new GetCitiesByState_1.GetCitiesByState().setStateId(stateId);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    DemoGraphicComponent.prototype.sendMessageToSubmitUserInfo = function () {
        var apiPackage = new EditUserInfo_1.EditUserInfo()
            .setFullName(this.inputFullName || 'Freakick User')
            .setCellPhone(this.inputCellPhone || '')
            .setUserImage(this.inputUserImageString || '')
            .setBackgroundImage(this.inputCoverImageString || '')
            .setBirthDate(this.inputBirthday || 0)
            .setCountryId(this.inputCountryId || 1)
            .setCityId(this.inputCityId || 1)
            .setGenderId(this.inputGenderId || 1)
            .setPlayerRoleIds([])
            .setPlayerNumber(1);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    DemoGraphicComponent.prototype.onInterestSport = function (sportId) {
        if (!this.inputInterestSports)
            this.inputInterestSports = [];
        var selectedIndex = this.inputInterestSports.indexOf(sportId);
        if (selectedIndex < 0) {
            this.inputInterestSports.push(sportId);
        }
        else {
            this.inputInterestSports.splice(selectedIndex, 1);
        }
    };
    DemoGraphicComponent.prototype.onChangeCountry = function (countryId) {
        this.sendMessageToGetAvailableStates(Number(countryId));
        this.inputCountryId = countryId;
        this.inputStateId = undefined;
        this.inputCityId = undefined;
    };
    DemoGraphicComponent.prototype.onChangeState = function (stateId) {
        this.sendMessageToGetAvailableCities(Number(stateId));
        this.inputStateId = stateId;
        this.inputCityId = undefined;
    };
    DemoGraphicComponent.prototype.onChangeCity = function (cityId) {
        this.inputCityId = cityId;
    };
    DemoGraphicComponent.prototype.onChangeProfileImage = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (e) { return _this.userImageTemp = e.target.result; });
        if (file) {
            reader.readAsDataURL(file);
            this.userImageFile = file;
        }
    };
    DemoGraphicComponent.prototype.onChangeCoverImage = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (e) { return _this.userCoverTemp = e.target.result; });
        if (file) {
            reader.readAsDataURL(file);
            this.userCoverFile = file;
        }
    };
    DemoGraphicComponent.prototype.onChangeGender = function (value) {
        console.log(value);
    };
    DemoGraphicComponent.prototype.uploadAvatarImage = function (data) {
        var _this = this;
        var images = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            images[_i - 1] = arguments[_i];
        }
        this.uploadService.uploadImage(data, images)
            .then(function (res) {
            _this.inputUserImageString = res._body;
            if (!!_this.inputCoverImageString && !!_this.inputUserImageString) {
                _this.isLoading = false;
                _this.continueStep();
            }
        }).catch(function (error) {
            console.error('Error! Upload avatar image: ', error);
            _this.isLoading = false;
        });
    };
    DemoGraphicComponent.prototype.uploadCoverImage = function (data) {
        var _this = this;
        var images = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            images[_i - 1] = arguments[_i];
        }
        this.uploadService.uploadImage(data, images)
            .then(function (res) {
            _this.inputCoverImageString = res._body;
            if (!!_this.inputCoverImageString && !!_this.inputUserImageString) {
                _this.isLoading = false;
                _this.continueStep();
            }
        }).catch(function (error) {
            console.error('Error! Upload cover image: ', error);
            _this.isLoading = false;
        });
    };
    DemoGraphicComponent.prototype.continueStep = function () {
        if (this.formCurrentStep < this.formTotalSteps)
            this.formCurrentStep++;
        if (this.formCurrentStep === 3)
            this.sendMessageToGetAvailableCountries();
    };
    DemoGraphicComponent.prototype.continueInterestStep = function () {
        this.isLoading = true;
        this.sendMessageToSubmitInterestSports(this.inputInterestSports);
    };
    DemoGraphicComponent.prototype.continueProfilePictureStep = function () {
        this.isLoading = true;
        var postData = { userId: this.authService.getItem('userId') };
        if (!!this.userImageFile && !!this.userCoverFile) {
            this.uploadAvatarImage(postData, this.userImageFile);
            this.uploadCoverImage(postData, this.userCoverFile);
        }
        else {
            console.error('Error! Upload image.');
            this.isLoading = false;
        }
    };
    DemoGraphicComponent.prototype.submitProfileInfo = function () {
        this.isLoading = true;
        this.sendMessageToSubmitUserInfo();
    };
    DemoGraphicComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-demo-graphic',
            template: "<app-layout-one-column>     <div page-body>         <aside class=\"widget card widget--sidebar widget-standings\">             <div class=\"widget__content card__content\">                 <div class=\"portlet light\">                     <div class=\"portlet-body form\">                         <div class=\"login-content\">                             <div class=\"form\">                                 <div class=\"form-body no-space\">                                     <div class=\"mt-element-step\">                                         <div class=\"row step-line\">                                             <div class=\"col-sm-4 mt-step-col first\"                                                  [class.active]=\"formCurrentStep === 1\"                                                  [class.done]=\"formCurrentStep >= 2\">                                                 <div class=\"mt-step-number bg-white\">1</div>                                                 <div class=\"mt-step-title uppercase font-grey-cascade\">Interest Sports</div>                                             </div>                                             <div class=\"col-sm-4 mt-step-col\"                                                  [class.active]=\"formCurrentStep === 2\"                                                  [class.done]=\"formCurrentStep >= 3\">                                                 <div class=\"mt-step-number bg-white\">2</div>                                                 <div class=\"mt-step-title uppercase font-grey-cascade\">Profile Picture</div>                                             </div>                                             <div class=\"col-sm-4 mt-step-col last\"                                                  [class.active]=\"formCurrentStep === 3\">                                                 <div class=\"mt-step-number bg-white\">3</div>                                                 <div class=\"mt-step-title uppercase font-grey-cascade\">Profile Info</div>                                             </div>                                         </div>                                     </div>                                     <div class=\"tab-content\">                                         <div *ngIf=\"availableSports\" class=\"tab-pane \"                                              [class.active]=\"formCurrentStep === 1\">                                             <h3>Tell us what you interest</h3>                                             <div class=\"mt-actions\">                                                 <div class=\"row\">                                                     <div *ngFor=\"let sport of availableSports\"                                                          class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">                                                         <div class=\"mt-action\">                                                             <div class=\"mt-action-img\">                                                                 <img [src]=\"sport.sportIcon\"> </div>                                                             <div class=\"mt-action-body\">                                                                 <div class=\"mt-action-row\">                                                                     <div class=\"mt-action-info \">                                                                         <div class=\"mt-action-icon btn\"                                                                              (click)=\"onInterestSport(sport.sportId)\">                                                                             <i *ngIf=\"inputInterestSports.indexOf(sport.sportId) >= 0\" class=\"fa fa-heart\"></i>                                                                             <i *ngIf=\"inputInterestSports.indexOf(sport.sportId) < 0\" class=\"fa fa-heart-o\"></i>                                                                         </div>                                                                         <div class=\"mt-action-details \">                                                                             <span class=\"mt-action-author\">                                                                                 {{ sport.sportName }}                                                                             </span>                                                                             <p class=\"mt-action-desc\">                                                                                 {{ sport.sportName }}                                                                             </p>                                                                         </div>                                                                     </div>                                                                 </div>                                                             </div>                                                         </div>                                                     </div>                                                 </div>                                             </div>                                         </div>                                         <div class=\"tab-pane\"                                              [class.active]=\"formCurrentStep === 2\">                                             <h3>Set your Profile Avatar and Cover</h3>                                             <div class=\"row\">                                                 <div class=\"col-sx-12 col-sm-4 col-md-3\">                                                     <div class=\"thumbnail\"                                                          onclick=\"document.getElementById('user-logo').click()\">                                                         <img [src]=\"userImageTemp\">                                                     </div>                                                     <input id=\"user-logo\" class=\"hidden\" accept=\"image/*\" type=\"file\"                                                            name=\"fileUpload\" (change)=\"onChangeProfileImage($event)\"/>                                                 </div>                                                 <div class=\"col-sx-12 col-sm-8 col-md-9\">                                                     <div class=\"thumbnail\"                                                          onclick=\"document.getElementById('user-cover').click()\">                                                         <img [src]=\"userCoverTemp\">                                                     </div>                                                     <input id=\"user-cover\" class=\"hidden\" accept=\"image/*\" type=\"file\"                                                            name=\"fileUpload\" (change)=\"onChangeCoverImage($event)\"/>                                                 </div>                                             </div>                                         </div>                                         <form #profileForm=\"ngForm\" class=\"tab-pane\"                                               [class.active]=\"formCurrentStep === 3\">                                             <div class=\"row\">                                                 <div class=\"col-sm-10 col-sm-offset-1\">                                                     <h3>Fill out your Profile Info</h3>                                                 </div>                                                 <div class=\"col-sm-5 col-sm-offset-1\">                                                     <div class=\"form-group form-md-line-input form-md-floating-label\"                                                          [class.has-error]=\"!fullName.valid && fullName.dirty\">                                                         <input type=\"text\" id=\"full-name\" class=\"form-control\"                                                                [class.edited]=\"!!inputFullName\" required                                                                name=\"fullName\" #fullName=\"ngModel\" minlength=\"1\"                                                                [(ngModel)]=\"inputFullName\">                                                         <label for=\"full-name\">Full name                                                             <span class=\"required\" aria-required=\"true\"> * </span>                                                         </label>                                                         <span *ngIf=\"!fullName.valid && fullName.dirty\"                                                               class=\"help-block\">Invalid input</span>                                                     </div>                                                     <div class=\"form-group form-md-line-input form-md-floating-label\"                                                          [class.has-error]=\"!cellPhone.valid && cellPhone.dirty\">                                                         <input type=\"text\" id=\"cell-phone\" class=\"form-control\"                                                                [class.edited]=\"!!inputCellPhone\" required                                                                name=\"cellPhone\" [(ngModel)]=\"inputCellPhone\" #cellPhone=\"ngModel\">                                                         <label for=\"cell-phone\">Cell Phone                                                             <span class=\"required\" aria-required=\"true\"> * </span>                                                         </label>                                                         <span *ngIf=\"!cellPhone.valid && cellPhone.dirty\"                                                               class=\"help-block\">Invalid input</span>                                                     </div>                                                     <div class=\"form-group form-md-line-input form-md-floating-label\">                                                         <input type=\"text\" class=\"form-control edited\" id=\"birthday-daterange\"/>                                                         <label for=\"birthday-daterange\">Birthday                                                             <span class=\"required\" aria-required=\"true\"> * </span>                                                         </label>                                                     </div>                                                     <div class=\"form-group form-md-checkboxes\">                                                         <label>Gender                                                             <span class=\"required\" aria-required=\"true\"> * </span>                                                         </label>                                                         <div class=\"md-checkbox-list\">                                                             <div class=\"btn-group \" data-toggle=\"buttons\">                                                                 <label class=\"btn blue btn-gender\" [class.active]=\"inputGenderId === 1\"                                                                        (click)=\"onChangeGender(1)\">                                                                     <input type=\"radio\" class=\"toggle\" checked>                                                                     <i class=\"fa fa-male\"></i> Male </label>                                                                 <label class=\"btn red btn-gender\" [class.active]=\"inputGenderId === 2\"                                                                        (click)=\"onChangeGender(2)\">                                                                     <input type=\"radio\" class=\"toggle\">                                                                     <i class=\"fa fa-female\"></i> Female </label>                                                             </div>                                                         </div>                                                     </div>                                                 </div>                                                 <div class=\"col-sm-5\">                                                     <div *ngIf=\"countries\" class=\"form-group form-md-line-input form-md-floating-label\">                                                         <select id=\"user-country\" class=\"form-control edited\"                                                                 required name=\"userCountry\"                                                                 (change)=\"onChangeCountry($event.target.value)\">                                                             <option selected disabled>Choose a country</option>                                                             <option *ngFor=\"let country of countries\"                                                                     value=\"{{ country.countryId }}\">                                                                 {{ country.countryName }}</option>                                                         </select>                                                         <label for=\"user-country\">Country                                                             <span class=\"required\" aria-required=\"true\"> * </span>                                                         </label>                                                     </div>                                                     <div *ngIf=\"states\" class=\"form-group form-md-line-input form-md-floating-label\">                                                         <select id=\"user-state\" class=\"form-control edited\"                                                                 required name=\"userState\"                                                                 (change)=\"onChangeState($event.target.value)\">                                                             <option selected disabled>Choose a state</option>                                                             <option *ngFor=\"let state of states\"                                                                     value=\"{{ state.stateId }}\">                                                                 {{ state.stateName }}</option>                                                         </select>                                                         <label for=\"user-state\">State                                                             <span class=\"required\" aria-required=\"true\"> * </span>                                                         </label>                                                     </div>                                                     <div *ngIf=\"cities\" class=\"form-group form-md-line-input form-md-floating-label\">                                                         <select id=\"user-city\" class=\"form-control edited\"                                                                 required name=\"userState\"                                                                 (change)=\"onChangeCity($event.target.value)\">                                                             <option selected disabled>Choose a city</option>                                                             <option *ngFor=\"let city of cities\"                                                                     value=\"{{ city.cityId }}\">                                                                 {{ city.cityName }}</option>                                                         </select>                                                         <label for=\"user-city\">City                                                             <span class=\"required\" aria-required=\"true\"> * </span>                                                         </label>                                                     </div>                                                 </div>                                             </div>                                         </form>                                     </div>                                 </div>                                 <div class=\"form-actions\">                                     <div class=\"row\">                                         <div class=\"col-sm-12 pull-right\">                                             <button type=\"submit\" *ngIf=\"formCurrentStep === 1\"                                                     [disabled]=\"isLoading\"                                                     class=\"btn blue-chambray\" (click)=\"continueInterestStep()\">                                                 Save & Continue                                                 <i class=\"fa fa-angle-right\" *ngIf=\"!isLoading\"></i>                                                 <i class=\"fa fa-spinner fa-spin\" *ngIf=\"isLoading\"></i>                                             </button>                                             <button type=\"submit\" *ngIf=\"formCurrentStep === 2\"                                                     [disabled]=\"!userCoverFile || !userImageFile || isLoading\"                                                     class=\"btn blue-chambray\" (click)=\"continueProfilePictureStep()\">                                                 Save & Continue                                                 <i class=\"fa fa-angle-right\" *ngIf=\"!isLoading\"></i>                                                 <i class=\"fa fa-spinner fa-spin\" *ngIf=\"isLoading\"></i>                                             </button>                                             <button type=\"submit\" *ngIf=\"formCurrentStep === formTotalSteps\"                                                     [disabled]=\"!profileForm.form.valid || isLoading\"                                                     class=\"btn blue-chambray\" (click)=\"submitProfileInfo()\">                                                 Save & Continue                                                 <i class=\"fa fa-check\" *ngIf=\"!isLoading\"></i>                                                 <i class=\"fa fa-spinner fa-spin\" *ngIf=\"isLoading\"></i>                                             </button>                                         </div>                                     </div>                                 </div>                             </div>                         </div>                     </div>                 </div>             </div>         </aside>     </div> </app-layout-one-column>",
            styles: [".mt-actions .mt-action .mt-action-img>img{width:40px;height:40px}.mt-action-icon{cursor:pointer;vertical-align:top}.btn-gender.blue:not(.active){border-color:#3598dc;color:#3598dc;background:0 0}.btn-gender.red:not(.active){border-color:#e7505a;color:#e7505a;background:0 0}.mt-element-step .step-line .mt-step-number{line-height:1.42857143}"],
            providers: [upload_service_1.UploadService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, upload_service_1.UploadService, message_service_1.MessageService, authentication_service_1.AuthenticationService])
    ], DemoGraphicComponent);
    return DemoGraphicComponent;
}());
exports.DemoGraphicComponent = DemoGraphicComponent;
