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
            templateUrl: 'demo-graphic.component.html',
            styleUrls: ['demo-graphic.component.css'],
            providers: [upload_service_1.UploadService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, upload_service_1.UploadService, message_service_1.MessageService, authentication_service_1.AuthenticationService])
    ], DemoGraphicComponent);
    return DemoGraphicComponent;
}());
exports.DemoGraphicComponent = DemoGraphicComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9kZW1vLWdyYXBoaWMvZGVtby1ncmFwaGljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlELGVBQWUsQ0FBQyxDQUFBO0FBQ2pFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE4QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzlELGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLHVDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBRTlFLHNCQUE2QyxvQkFBb0IsQ0FBQyxDQUFBO0FBRWxFLDZCQUE2Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzNELDZCQUE2Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzNELDZCQUE2Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzNELG1DQUFtQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3ZFLGlDQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLDBDQUEwQywwQ0FBMEMsQ0FBQyxDQUFBO0FBU3JGO0lBMkJFLDhCQUNVLE1BQWMsRUFDZCxhQUE0QixFQUM1QixjQUE4QixFQUM5QixXQUFrQztRQUhsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQTlCckMsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7SUErQmxDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFJ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U0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUMzQixDQUFDOzs0QkFBQTtJQXFQRiwyQkFBQztBQUFELENBcFBBLEFBb1BDLElBQUE7QUFwUFksNEJBQW9CLHVCQW9QaEMsQ0FBQSIsImZpbGUiOiJhcHAvYXBwbGljYXRpb24vZGVtby1ncmFwaGljL2RlbW8tZ3JhcGhpYy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXBsb2FkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VwbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyAgQ291bnRyeSwgU3RhdGUsIENpdHksIFNwb3J0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2luZGV4JztcblxuaW1wb3J0IHsgRWRpdFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vcGFja2FnZXMvRWRpdFVzZXJJbmZvJztcbmltcG9ydCB7IEdldFNwb3J0VHlwZSB9IGZyb20gJy4uLy4uL3BhY2thZ2VzL0dldFNwb3J0VHlwZSc7XG5pbXBvcnQgeyBHZXRDb3VudHJpZXMgfSBmcm9tICcuLi8uLi9wYWNrYWdlcy9HZXRDb3VudHJpZXMnO1xuaW1wb3J0IHsgR2V0U3RhdGVzQnlDb3VudHJ5IH0gZnJvbSAnLi4vLi4vcGFja2FnZXMvR2V0U3RhdGVzQnlDb3VudHJ5JztcbmltcG9ydCB7IEdldENpdGllc0J5U3RhdGUgfSBmcm9tICcuLi8uLi9wYWNrYWdlcy9HZXRDaXRpZXNCeVN0YXRlJztcbmltcG9ydCB7IEFuc3dlckRlbW9HcmFwaGljUXVlc3Rpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlcy9BbnN3ZXJEZW1vR3JhcGhpY1F1ZXN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWRlbW8tZ3JhcGhpYycsXG4gIHRlbXBsYXRlVXJsOiAnZGVtby1ncmFwaGljLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RlbW8tZ3JhcGhpYy5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW1VwbG9hZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERlbW9HcmFwaGljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGZvcm1DdXJyZW50U3RlcDogbnVtYmVyID0gMTtcbiAgcHVibGljIGZvcm1Ub3RhbFN0ZXBzOiBudW1iZXIgPSAzO1xuXG4gIHB1YmxpYyBhdmFpbGFibGVTcG9ydHM6IFNwb3J0W107XG4gIHB1YmxpYyBjb3VudHJpZXM6IENvdW50cnlbXTtcbiAgcHVibGljIHN0YXRlczogU3RhdGVbXTtcbiAgcHVibGljIGNpdGllczogQ2l0eVtdO1xuXG4gIHB1YmxpYyB1c2VySW1hZ2VGaWxlOiBhbnk7XG4gIHB1YmxpYyB1c2VySW1hZ2VUZW1wOiBzdHJpbmc7XG4gIHB1YmxpYyB1c2VyQ292ZXJGaWxlOiBhbnk7XG4gIHB1YmxpYyB1c2VyQ292ZXJUZW1wOiBzdHJpbmc7XG5cbiAgcHVibGljIGlucHV0SW50ZXJlc3RTcG9ydHM6IG51bWJlcltdO1xuICBwdWJsaWMgaW5wdXRVc2VySW1hZ2VTdHJpbmc6IHN0cmluZztcbiAgcHVibGljIGlucHV0Q292ZXJJbWFnZVN0cmluZzogc3RyaW5nO1xuICBwdWJsaWMgaW5wdXRGdWxsTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgaW5wdXRDZWxsUGhvbmU6IHN0cmluZztcbiAgcHVibGljIGlucHV0QmlydGhkYXk6IG51bWJlcjtcbiAgcHVibGljIGlucHV0Q291bnRyeUlkOiBudW1iZXI7XG4gIHB1YmxpYyBpbnB1dFN0YXRlSWQ6IG51bWJlcjtcbiAgcHVibGljIGlucHV0Q2l0eUlkOiBudW1iZXI7XG4gIHB1YmxpYyBpbnB1dEdlbmRlcklkOiBudW1iZXI7XG5cbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdXBsb2FkU2VydmljZTogVXBsb2FkU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgICAvL1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuZ2V0SXRlbSgnaXNGaW5pc2hEZW1vZ3JhcGhpY1F1ZXN0aW9uJykgPT09ICd0cnVlJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwJ10pO1xuICAgIH1cbiAgICB0aGlzLmlucHV0SW50ZXJlc3RTcG9ydHMgPSBbXTtcbiAgICB0aGlzLnVzZXJJbWFnZVRlbXAgPSAnLi9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvZGVmYXVsdC1hdmF0YXIuanBnJztcbiAgICB0aGlzLnVzZXJDb3ZlclRlbXAgPSAnLi9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvZGVmYXVsdC1jb3Zlci5qcGcnO1xuICAgIHRoaXMuaW5wdXRHZW5kZXJJZCA9IDE7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICBtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKVxuICAgICk7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvR2V0U3BvcnRzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgalF1ZXJ5KCcjYmlydGhkYXktZGF0ZXJhbmdlJykuZGF0ZXJhbmdlcGlja2VyKHtcbiAgICAgIHNpbmdsZURhdGVQaWNrZXI6IHRydWUsXG4gICAgICBsb2NhbGU6IHtmb3JtYXQ6ICdZWVlZLU1NLUREJ31cbiAgICB9LCAocGlja2VkRGF0ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmlucHV0QmlydGhkYXkgPSBtb21lbnQocGlja2VkRGF0ZSwgJ1lZWVktTU0tREQnKS52YWx1ZU9mKCk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnQU5TV0VSX0RFTU9HUkFQSElDX1FVRVNUSU9OU19TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250aW51ZVN0ZXAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDT1VOVFJJRVNfTFNUJzpcbiAgICAgICAgdGhpcy5jb3VudHJpZXMgPSBtZXNzYWdlLmRhdGEuY291bnRyaWVzTHN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1NUQVRFX0xTVCc6XG4gICAgICAgIHRoaXMuc3RhdGVzID0gbWVzc2FnZS5kYXRhLnN0YXRlTHN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NJVFlfTFNUJzpcbiAgICAgICAgdGhpcy5jaXRpZXMgPSBtZXNzYWdlLmRhdGEuY2l0eUxzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdHRVRfU1BPUlRfVFlQRV9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5oYW5kbGVSZWNlaXZlZFNwb3J0KG1lc3NhZ2UuZGF0YS5sc3RTcG9ydCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRURJVF9VU0VSX0lORk9fU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudXBkYXRlVXNlckluZm8obWVzc2FnZS5kYXRhLnVzZXIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9uZXdzZmVlZCddKSwgNDAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSRVFVRVNUX0VSUk9SJzpcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5lcnJvclR5cGUgPT09ICdBTlNXRVJfREVNT0dSQVBISUNfUVVFU1RJT05TX1VTRVJfRklOSVNIX0FMUkVBRFknKVxuICAgICAgICAgIHRoaXMuY29udGludWVTdGVwKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUkVRVUVTVF9JTlBVVF9FUlJPUic6XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlY2VpdmVkU3BvcnQoZGF0YTogYW55KTogdm9pZCB7XG4gICAgZGF0YSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSAhPT0gJ1tvYmplY3QgQXJyYXldJyA/IEpTT04ucGFyc2UoZGF0YSkgOiBkYXRhO1xuICAgIHRoaXMuYXZhaWxhYmxlU3BvcnRzID0gZGF0YS5tYXAoKHNwb3J0RGF0YTogYW55KSA9PiBuZXcgU3BvcnQoc3BvcnREYXRhKSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvU3VibWl0SW50ZXJlc3RTcG9ydHMoaW50ZXJlc3RTcG9ydElkczogbnVtYmVyW10pOiB2b2lkIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBBbnN3ZXJEZW1vR3JhcGhpY1F1ZXN0aW9uKClcbiAgICAgIC5zZXRHZW5kZXJJZCgxKS5zZXRCaXJ0aERhdGUoMSkuc2V0R2FtZUxldmVsKDEpXG4gICAgICAuc2V0SW50ZXJlc3RTcG9ydElkcyhpbnRlcmVzdFNwb3J0SWRzKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRTcG9ydHMoKTogdm9pZCB7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgR2V0U3BvcnRUeXBlKCk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvR2V0QXZhaWxhYmxlQ291bnRyaWVzKCk6IHZvaWQge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEdldENvdW50cmllcygpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldEF2YWlsYWJsZVN0YXRlcyhjb3VudHJ5SWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEdldFN0YXRlc0J5Q291bnRyeSgpLnNldENvdW50cnlJZChjb3VudHJ5SWQpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldEF2YWlsYWJsZUNpdGllcyhzdGF0ZUlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRDaXRpZXNCeVN0YXRlKCkuc2V0U3RhdGVJZChzdGF0ZUlkKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9TdWJtaXRVc2VySW5mbygpOiB2b2lkIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBFZGl0VXNlckluZm8oKVxuICAgICAgLnNldEZ1bGxOYW1lKHRoaXMuaW5wdXRGdWxsTmFtZSB8fCAnRnJlYWtpY2sgVXNlcicpXG4gICAgICAuc2V0Q2VsbFBob25lKHRoaXMuaW5wdXRDZWxsUGhvbmUgfHwgJycpXG4gICAgICAuc2V0VXNlckltYWdlKHRoaXMuaW5wdXRVc2VySW1hZ2VTdHJpbmcgfHwgJycpXG4gICAgICAuc2V0QmFja2dyb3VuZEltYWdlKHRoaXMuaW5wdXRDb3ZlckltYWdlU3RyaW5nIHx8ICcnKVxuICAgICAgLnNldEJpcnRoRGF0ZSh0aGlzLmlucHV0QmlydGhkYXkgfHwgMClcbiAgICAgIC5zZXRDb3VudHJ5SWQodGhpcy5pbnB1dENvdW50cnlJZCB8fCAxKVxuICAgICAgLnNldENpdHlJZCh0aGlzLmlucHV0Q2l0eUlkIHx8IDEpXG4gICAgICAuc2V0R2VuZGVySWQodGhpcy5pbnB1dEdlbmRlcklkIHx8IDEpXG4gICAgICAuc2V0UGxheWVyUm9sZUlkcyhbXSkgLy8gU2V0IGRlZmF1bHQgZm9yIGJlZ2lubmVyXG4gICAgICAuc2V0UGxheWVyTnVtYmVyKDEpOyAvLyBTZXQgZGVmYXVsdCBmb3IgYmVnaW5uZXJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIG9uSW50ZXJlc3RTcG9ydChzcG9ydElkOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRJbnRlcmVzdFNwb3J0cykgdGhpcy5pbnB1dEludGVyZXN0U3BvcnRzID0gW107XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLmlucHV0SW50ZXJlc3RTcG9ydHMuaW5kZXhPZihzcG9ydElkKTtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAgIHRoaXMuaW5wdXRJbnRlcmVzdFNwb3J0cy5wdXNoKHNwb3J0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0SW50ZXJlc3RTcG9ydHMuc3BsaWNlKHNlbGVjdGVkSW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlQ291bnRyeShjb3VudHJ5SWQ6IG51bWJlcikge1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0dldEF2YWlsYWJsZVN0YXRlcyhOdW1iZXIoY291bnRyeUlkKSk7XG4gICAgdGhpcy5pbnB1dENvdW50cnlJZCA9IGNvdW50cnlJZDtcbiAgICB0aGlzLmlucHV0U3RhdGVJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlucHV0Q2l0eUlkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgb25DaGFuZ2VTdGF0ZShzdGF0ZUlkOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRBdmFpbGFibGVDaXRpZXMoTnVtYmVyKHN0YXRlSWQpKTtcbiAgICB0aGlzLmlucHV0U3RhdGVJZCA9IHN0YXRlSWQ7XG4gICAgdGhpcy5pbnB1dENpdHlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uQ2hhbmdlQ2l0eShjaXR5SWQ6IG51bWJlcikge1xuICAgIHRoaXMuaW5wdXRDaXR5SWQgPSBjaXR5SWQ7XG4gIH1cblxuICBvbkNoYW5nZVByb2ZpbGVJbWFnZShldmVudDogYW55KSB7XG4gICAgbGV0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZTogYW55KSA9PiB0aGlzLnVzZXJJbWFnZVRlbXAgPSBlLnRhcmdldC5yZXN1bHQpO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgIHRoaXMudXNlckltYWdlRmlsZSA9IGZpbGU7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2VDb3ZlckltYWdlKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlOiBhbnkpID0+IHRoaXMudXNlckNvdmVyVGVtcCA9IGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgdGhpcy51c2VyQ292ZXJGaWxlID0gZmlsZTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZUdlbmRlcih2YWx1ZTogYW55KSB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICB9XG5cbiAgdXBsb2FkQXZhdGFySW1hZ2UoZGF0YTogYW55LCAuLi5pbWFnZXM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy51cGxvYWRTZXJ2aWNlLnVwbG9hZEltYWdlKGRhdGEsIGltYWdlcylcbiAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmlucHV0VXNlckltYWdlU3RyaW5nID0gcmVzLl9ib2R5O1xuICAgICAgICBpZiAoISF0aGlzLmlucHV0Q292ZXJJbWFnZVN0cmluZyAmJiAhIXRoaXMuaW5wdXRVc2VySW1hZ2VTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY29udGludWVTdGVwKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciEgVXBsb2FkIGF2YXRhciBpbWFnZTogJywgZXJyb3IpO1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwbG9hZENvdmVySW1hZ2UoZGF0YTogYW55LCAuLi5pbWFnZXM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy51cGxvYWRTZXJ2aWNlLnVwbG9hZEltYWdlKGRhdGEsIGltYWdlcylcbiAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmlucHV0Q292ZXJJbWFnZVN0cmluZyA9IHJlcy5fYm9keTtcbiAgICAgICAgaWYgKCEhdGhpcy5pbnB1dENvdmVySW1hZ2VTdHJpbmcgJiYgISF0aGlzLmlucHV0VXNlckltYWdlU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNvbnRpbnVlU3RlcCgpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IhIFVwbG9hZCBjb3ZlciBpbWFnZTogJywgZXJyb3IpO1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnRpbnVlU3RlcCgpIHtcbiAgICBpZiAodGhpcy5mb3JtQ3VycmVudFN0ZXAgPCB0aGlzLmZvcm1Ub3RhbFN0ZXBzKSB0aGlzLmZvcm1DdXJyZW50U3RlcCsrO1xuICAgIGlmICh0aGlzLmZvcm1DdXJyZW50U3RlcCA9PT0gMykgdGhpcy5zZW5kTWVzc2FnZVRvR2V0QXZhaWxhYmxlQ291bnRyaWVzKCk7XG4gIH1cblxuICBjb250aW51ZUludGVyZXN0U3RlcCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvU3VibWl0SW50ZXJlc3RTcG9ydHModGhpcy5pbnB1dEludGVyZXN0U3BvcnRzKTtcbiAgfVxuXG4gIGNvbnRpbnVlUHJvZmlsZVBpY3R1cmVTdGVwKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgcG9zdERhdGEgPSB7IHVzZXJJZDogdGhpcy5hdXRoU2VydmljZS5nZXRJdGVtKCd1c2VySWQnKSB9O1xuICAgIGlmICghIXRoaXMudXNlckltYWdlRmlsZSAmJiAhIXRoaXMudXNlckNvdmVyRmlsZSkge1xuICAgICAgdGhpcy51cGxvYWRBdmF0YXJJbWFnZShwb3N0RGF0YSwgdGhpcy51c2VySW1hZ2VGaWxlKTtcbiAgICAgIHRoaXMudXBsb2FkQ292ZXJJbWFnZShwb3N0RGF0YSwgdGhpcy51c2VyQ292ZXJGaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IhIFVwbG9hZCBpbWFnZS4nKTtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3VibWl0UHJvZmlsZUluZm8oKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2VUb1N1Ym1pdFVzZXJJbmZvKCk7XG4gIH1cblxufVxuXG4iXX0=
