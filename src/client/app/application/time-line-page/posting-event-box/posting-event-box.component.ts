import { Component, OnInit, AfterViewInit, HostListener, ViewChild } from '@angular/core';

import { AuthenticationService } from '../../../services/authentication.service';
import { LocationService } from '../../../services/location.service';
import { MessageService } from '../../../services/message.service';
import { HelpService } from '../../../services/help.service';

import { Group } from '../../../models/Group';
import { LngLat } from '../../../models/LngLat';

import { GetAllGroup } from '../../../packages/GetAllGroup';
import { CreateEvent } from '../../../packages/CreateEvent';

import { CONFIG } from '../../../constants';
import { Event } from '../../../models/Event';

@Component({
  moduleId: module.id,
  selector: 'app-posting-event-box',
  templateUrl: 'posting-event-box.component.html',
  styleUrls: ['posting-event-box.component.css']
})
export class PostingEventBoxComponent implements OnInit, AfterViewInit {
  public a: any;
  public b: any;
  public c: any;
  public serverUrl = CONFIG.URL;

  public isShownScheduleEventForm: boolean;
  public hasEventGroups: boolean;
  public hasEventAddress: boolean;
  public suggestedAddress: {address: string, coordinate: LngLat}[];

  public userName: string;
  public userImage: string;

  public availableGroups: Group[];
  public availableTimes: any[];
  public availableFrequency: number[];

  /**
   * Schedule event package's properties
   */
  public inputEventName: string;
  public inputDescription: string;
  public inputStartDate: number;
  public inputEndDate: number;
  public inputStartTime: number;
  public inputEndTime: number;
  public inputIsAllDateEvent: boolean;
  public inputEventRepeatType: number;
  public inputEventRepeatFrequency: number;
  public inputIsOccurMonday: boolean;
  public inputIsOccurTuesday: boolean;
  public inputIsOccurWednesday: boolean;
  public inputIsOccurThursday: boolean;
  public inputIsOccurFriday: boolean;
  public inputIsOccurSaturday: boolean;
  public inputIsOccurSunday: boolean;
  public inputNotificationBy: number;
  public inputNotificationBeforeHours: number;
  public inputEventGroups: number[];
  public inputEventImages: string[];
  public inputEventAddress: string;
  public inputEventLatitude: number;
  public inputEventLongitude: number;

  eventRepeatType = Event.repeatType;

  @ViewChild('imageButton') imageButton: any;

  private preSearchAddress: any;

  constructor(private messageService: MessageService,
              private locationService: LocationService,
              private authService: AuthenticationService) { }

  ngOnInit() {
    let user = this.authService.getAuthenticatedUser();
    this.userName = this.authService.getItem('fullName') || 'Freakick User';
    this.userImage = user.userImage;

    this.availableTimes = HelpService.getListHoursInDay();
    this.availableFrequency = [];
    for (let _i = 1; _i <= 30; _i++) {
      this.availableFrequency.push(_i);
    }

    this.resetScheduleEventForm();

    this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
    this.sendMessageToGetAllGroups();
  }

  ngAfterViewInit() {
    jQuery('#event-start-day').daterangepicker({
      singleDatePicker: true,
      locale: {format: 'YYYY-MM-DD'}
    }, (pickedDate: any) => {
      this.inputStartDate = moment(pickedDate, 'YYYY-MM-DD').valueOf();
    });
    jQuery('#event-end-day').daterangepicker({
      singleDatePicker: true,
      locale: {format: 'YYYY-MM-DD'}
    }, (pickedDate: any) => {
      this.inputEndDate = moment(pickedDate, 'YYYY-MM-DD').valueOf();
    });
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    if ((document.documentElement.scrollTop || document.body.scrollTop) > 1200) {
      this.closeScheduleEventForm();
    }
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'GET_ALL_GROUP_SUCCESS':
        this.handleReceivedGroups(message.data);
        break;
      case 'CREATE_EVENT_SUCCESS':
        this.closeScheduleEventForm();
        this.resetScheduleEventForm();
        break;
    }
  }

  handleReceivedGroups(data: any): void {
    data.lstResult = Object.prototype.toString.call(data.lstResult) !== '[object Array]'
                      ? JSON.parse(data.lstResult)
                      : data.lstResult;
    this.availableGroups = data.lstResult.map(
      (groupData: any) => new Group(groupData)
    );
  }

  sendMessageToGetAllGroups() {
    let apiPackage = new GetAllGroup();
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToScheduleAnEvent() {
    let weekDays = [
      this.inputIsOccurSunday,
      this.inputIsOccurMonday,
      this.inputIsOccurTuesday,
      this.inputIsOccurWednesday,
      this.inputIsOccurThursday,
      this.inputIsOccurFriday,
      this.inputIsOccurSaturday,
    ];
    let apiPackage = new CreateEvent()
      .setName(this.inputEventName || this.userName + '\'s event')
      .setDescription(this.inputDescription)
      .setDate(this.inputStartDate, this.inputEndDate)
      .setTime(this.inputIsAllDateEvent, this.inputStartTime, this.inputEndTime)
      .setType(Event.type.Sponsored)
      .setRepeat(this.inputEventRepeatType, this.inputEventRepeatFrequency, weekDays)
      .setTimeZone('') // TODO: Place by real time zone
      .setContact(this.authService.getItem('email'), this.authService.getItem('phone'))
      .setLocation(this.inputEventAddress, new LngLat(this.inputEventLongitude, this.inputEventLatitude))
      .setNotification(this.inputNotificationBy, this.inputNotificationBeforeHours)
      .setIsSocialEvent(false)
      .setImages(this.inputEventImages)
      .setGroups(this.inputEventGroups)
      .setSports([]);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  onChangeEventAddress(event: any) {
    if (!this.inputEventAddress) return;
    if (this.preSearchAddress || !this.inputEventAddress.length) clearTimeout(this.preSearchAddress);
    this.preSearchAddress = setTimeout(() => {
      clearTimeout(this.preSearchAddress);
      this.locationService.searchAddressByKeyWord(this.inputEventAddress).then(
        (data: any) => this.suggestedAddress = data && data.results.map(
          (address: any) => new Object({
            address: address.formatted_address,
            coordinate: new LngLat(address.geometry.location.lng, address.geometry.location.lat)
          })) || []
      );
    }, 500);
  }

  onSelectAddress(value: {address: string, coordinate: LngLat}) {
    this.inputEventLatitude = value.coordinate.getLat();
    this.inputEventLongitude = value.coordinate.getLng();
    this.inputEventAddress = value.address;
    this.suggestedAddress = [];
  }

  onClickAddMoreEventImage() {
    if (this.imageButton) this.imageButton.onClickButton();
  }

  onClickRemoveEventImage(image: string) {
    let index = this.inputEventImages.indexOf(image);
    if (index >= 0) this.inputEventImages.splice(index, 1);
  }

  openScheduleEventForm() {
    this.isShownScheduleEventForm = true;
  }

  closeScheduleEventForm() {
    this.isShownScheduleEventForm = false;
  }

  resetScheduleEventForm() {
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
  }

  onSubmitScheduleEvent() {
    this.sendMessageToScheduleAnEvent();
  }

}
