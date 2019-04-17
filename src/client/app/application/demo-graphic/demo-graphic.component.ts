import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { UploadService } from '../../services/upload.service';
import { MessageService } from '../../services/message.service';
import { AuthenticationService } from '../../services/authentication.service';

import {  Country, State, City, Sport } from '../../models/index';

import { EditUserInfo } from '../../packages/EditUserInfo';
import { GetSportType } from '../../packages/GetSportType';
import { GetCountries } from '../../packages/GetCountries';
import { GetStatesByCountry } from '../../packages/GetStatesByCountry';
import { GetCitiesByState } from '../../packages/GetCitiesByState';
import { AnswerDemoGraphicQuestion } from '../../packages/AnswerDemoGraphicQuestion';

@Component({
  moduleId: module.id,
  selector: 'app-demo-graphic',
  templateUrl: 'demo-graphic.component.html',
  styleUrls: ['demo-graphic.component.css'],
  providers: [UploadService]
})
export class DemoGraphicComponent implements OnInit, AfterViewInit {
  public formCurrentStep: number = 1;
  public formTotalSteps: number = 3;

  public availableSports: Sport[];
  public countries: Country[];
  public states: State[];
  public cities: City[];

  public userImageFile: any;
  public userImageTemp: string;
  public userCoverFile: any;
  public userCoverTemp: string;

  public inputInterestSports: number[];
  public inputUserImageString: string;
  public inputCoverImageString: string;
  public inputFullName: string;
  public inputCellPhone: string;
  public inputBirthday: number;
  public inputCountryId: number;
  public inputStateId: number;
  public inputCityId: number;
  public inputGenderId: number;

  public isLoading: boolean;

  constructor(
    private router: Router,
    private uploadService: UploadService,
    private messageService: MessageService,
    private authService: AuthenticationService) {
    //
  }

  ngOnInit() {
    if (this.authService.getItem('isFinishDemographicQuestion') === 'true') {
      this.router.navigate(['/app']);
    }
    this.inputInterestSports = [];
    this.userImageTemp = './assets/images/default/default-avatar.jpg';
    this.userCoverTemp = './assets/images/default/default-cover.jpg';
    this.inputGenderId = 1;
    this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
    this.sendMessageToGetSports();
  }

  ngAfterViewInit() {
    jQuery('#birthday-daterange').daterangepicker({
      singleDatePicker: true,
      locale: {format: 'YYYY-MM-DD'}
    }, (pickedDate: any) => {
      this.inputBirthday = moment(pickedDate, 'YYYY-MM-DD').valueOf();
    });
  }

  handleMessage(message: any) {
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
        setTimeout(() => this.router.navigate(['/app/newsfeed']), 400);
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
  }

  handleReceivedSport(data: any): void {
    data = Object.prototype.toString.call(data) !== '[object Array]' ? JSON.parse(data) : data;
    this.availableSports = data.map((sportData: any) => new Sport(sportData));
  }

  sendMessageToSubmitInterestSports(interestSportIds: number[]): void {
    let apiPackage = new AnswerDemoGraphicQuestion()
      .setGenderId(1).setBirthDate(1).setGameLevel(1)
      .setInterestSportIds(interestSportIds);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToGetSports(): void {
    let apiPackage = new GetSportType();
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToGetAvailableCountries(): void {
    let apiPackage = new GetCountries();
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToGetAvailableStates(countryId: number): void {
    let apiPackage = new GetStatesByCountry().setCountryId(countryId);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToGetAvailableCities(stateId: number): void {
    let apiPackage = new GetCitiesByState().setStateId(stateId);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToSubmitUserInfo(): void {
    let apiPackage = new EditUserInfo()
      .setFullName(this.inputFullName || 'Freakick User')
      .setCellPhone(this.inputCellPhone || '')
      .setUserImage(this.inputUserImageString || '')
      .setBackgroundImage(this.inputCoverImageString || '')
      .setBirthDate(this.inputBirthday || 0)
      .setCountryId(this.inputCountryId || 1)
      .setCityId(this.inputCityId || 1)
      .setGenderId(this.inputGenderId || 1)
      .setPlayerRoleIds([]) // Set default for beginner
      .setPlayerNumber(1); // Set default for beginner
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  onInterestSport(sportId: number) {
    if (!this.inputInterestSports) this.inputInterestSports = [];
    let selectedIndex = this.inputInterestSports.indexOf(sportId);
    if (selectedIndex < 0) {
      this.inputInterestSports.push(sportId);
    } else {
      this.inputInterestSports.splice(selectedIndex, 1);
    }
  }

  onChangeCountry(countryId: number) {
    this.sendMessageToGetAvailableStates(Number(countryId));
    this.inputCountryId = countryId;
    this.inputStateId = undefined;
    this.inputCityId = undefined;
  }

  onChangeState(stateId: number) {
    this.sendMessageToGetAvailableCities(Number(stateId));
    this.inputStateId = stateId;
    this.inputCityId = undefined;
  }

  onChangeCity(cityId: number) {
    this.inputCityId = cityId;
  }

  onChangeProfileImage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', (e: any) => this.userImageTemp = e.target.result);
    if (file) {
      reader.readAsDataURL(file);
      this.userImageFile = file;
    }
  }

  onChangeCoverImage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', (e: any) => this.userCoverTemp = e.target.result);
    if (file) {
      reader.readAsDataURL(file);
      this.userCoverFile = file;
    }
  }

  onChangeGender(value: any) {
    console.log(value);
  }

  uploadAvatarImage(data: any, ...images: any[]): void {
    this.uploadService.uploadImage(data, images)
      .then((res: any) => {
        this.inputUserImageString = res._body;
        if (!!this.inputCoverImageString && !!this.inputUserImageString) {
          this.isLoading = false;
          this.continueStep();
        }
      }).catch((error: any) => {
      console.error('Error! Upload avatar image: ', error);
      this.isLoading = false;
    });
  }

  uploadCoverImage(data: any, ...images: any[]): void {
    this.uploadService.uploadImage(data, images)
      .then((res: any) => {
        this.inputCoverImageString = res._body;
        if (!!this.inputCoverImageString && !!this.inputUserImageString) {
          this.isLoading = false;
          this.continueStep();
        }
      }).catch((error: any) => {
      console.error('Error! Upload cover image: ', error);
      this.isLoading = false;
    });
  }

  continueStep() {
    if (this.formCurrentStep < this.formTotalSteps) this.formCurrentStep++;
    if (this.formCurrentStep === 3) this.sendMessageToGetAvailableCountries();
  }

  continueInterestStep() {
    this.isLoading = true;
    this.sendMessageToSubmitInterestSports(this.inputInterestSports);
  }

  continueProfilePictureStep() {
    this.isLoading = true;
    let postData = { userId: this.authService.getItem('userId') };
    if (!!this.userImageFile && !!this.userCoverFile) {
      this.uploadAvatarImage(postData, this.userImageFile);
      this.uploadCoverImage(postData, this.userCoverFile);
    } else {
      console.error('Error! Upload image.');
      this.isLoading = false;
    }
  }

  submitProfileInfo() {
    this.isLoading = true;
    this.sendMessageToSubmitUserInfo();
  }

}

