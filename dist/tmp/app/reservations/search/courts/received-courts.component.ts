import { Component, OnInit, OnDestroy, AfterViewInit, Input, HostBinding,
    trigger, state, style, keyframes, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

/**
 * API packages
 */
import { GetAvailableFieldsOnDate } from '../../../packages/GetAvailableFieldsOnDate';

/**
 * services
 */
import { AuthenticationService } from '../../../services/authentication.service';
import { MessageService } from '../../../services/message.service';
import { HelpService } from '../../../services/help.service';

/**
 * models
 */
import { LngLat } from '../../../models/LngLat';
import { Sport } from '../../../models/Sport';
import { Facility } from '../../../models/Facility';
import { Address } from '../../../models/Address';

import * as constants from '../../../constants';

@Component({
  moduleId: module.id,
  selector: 'frk-received-courts',
  templateUrl: 'received-courts.component.html',
  styleUrls: ['received-courts.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({})),
      transition(':enter', animate(1000, keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 1, offset: 1})
      ]))),
      transition(':leave', animate(500, keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 1})
      ])))
    ])
  ]
})
export class ReceivedCourtsComponent implements OnInit, OnDestroy, AfterViewInit {
  public messageSub: any;

  @Input() availableSports: Sport[];
  @Input() paginationPage: number;
  @Input() userLocation: { timezone: string, address: Address, coordinate: LngLat };

  @HostBinding('@fadeIn') get fadeIn() {
    return 'in';
  }

  public availableFilterTimes: string[];
  public loadingResultData: boolean;

  public receivedCourts: { field: Facility, availableTimes: { label: string, value: number }[] }[];

  public filterSport: Sport;
  public filterDate: string;
  public filterTime: string;

  public selectedField: Facility;
  public selectedFieldDate: number;
  public selectedFieldTime: { label: string, value: number };

  public loadedImage: boolean[];

  constructor(private router: Router,
              private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.filterSport = this.availableSports[0];
    this.filterDate = moment().format('YYYY-MM-DD');
    this.filterTime = moment().add(30, 'm').format('hh:00 A');
    this.availableFilterTimes = HelpService.getListHoursInDay().map((time: any) => {
      return time.name;
    });
    this.loadedImage = [];
    this.getCourtsFromServer();
  }

  ngAfterViewInit() {
    jQuery('#court-daterange').daterangepicker({
      singleDatePicker: true,
      locale: {format: 'YYYY-MM-DD'},
      startDate: this.filterDate,
      minDate: this.filterDate
    }, (pickedDate: any) => {
      this.filterDate = pickedDate.format('YYYY-MM-DD');
      this.getCourtsFromServer();
    });
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'REQUEST_INPUT_ERROR':
        this.loadingResultData = false;
        this.handleReceiveCourts({lstResult: []});
        break;
      case 'GET_AVAILABLE_FIELDS_ON_DATE_SUCCESS':
        this.receivedCourts = undefined;
        this.handleReceiveCourts(message.data);
    }
  }

  handleReceiveCourts(data: any): void {
    if (data.lstResult.length === 0) {
      this.loadingResultData = false;
      this.receivedCourts = [];
    } else {
      this.receivedCourts = data.lstResult
        .filter((fieldsData: any) => fieldsData !== null)
        .map((fieldsData: any) => {
          let field = new Facility(fieldsData.field);
          let availableTimes = fieldsData.lstAvailableTimes.map((timeData: any) => {
            let fieldTimezoneOffset: number = HelpService.getTimezoneOffset(field.branch.timeZone);
            let courtTime: number = timeData + fieldTimezoneOffset;
            courtTime = (courtTime < 0) ? (24 + courtTime) : courtTime;
            return {
              label: HelpService.convertDoubleTimeToString(courtTime),
              value: courtTime
            };
          });
          return {field: field, availableTimes: availableTimes};
        });
    }
  }

  sendMessageToGetAvailableCourts(): void {
    if (typeof this.filterSport === 'undefined') return;
    let locationTime = this.filterDate + ' ' + this.filterTime;
    let searchingTime: number = moment.tz(locationTime, 'YYYY-MM-DD H:mm A', this.userLocation.timezone).utc().valueOf();
    let apiPackage = new GetAvailableFieldsOnDate()
      .setTime(searchingTime)
      .setSport(this.filterSport)
      .setCity(this.userLocation.address.getCity())
      .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  getCourtsFromServer(): void {
    // window.scrollTo(0,0);
    this.loadedImage = [];
    this.loadingResultData = true;
    this.sendMessageToGetAvailableCourts();
  }

  filterSportsChanged(sport: Sport, value: any): any {
    if (value) {
      this.filterSport = sport;
      this.getCourtsFromServer();
    } else {
      this.filterSport = undefined;
    }
  }

  filterTimeChanged(value: any): any {
    this.filterTime = value;
    this.getCourtsFromServer();
  }

  courtImageLoaded(): any {
    this.loadedImage.push(true);
    if (this.loadedImage.length >= this.receivedCourts.length) {
      this.loadingResultData = false;
    }
  }

  updateUrl(court: any): any {
    court.field.partner.logo = './assets/images/default/court.png';
    this.courtImageLoaded();
  }

  onBookingField(field: Facility, time: { label: string, value: number }): any {
    if (this.authService.isLoggedIn()) {
      this.selectedField = field;
      this.selectedFieldTime = time;
      let fullTime: string = this.filterDate + ' ' + this.filterTime;
      this.selectedFieldDate = moment.tz(fullTime, 'YYYY-MM-DD H:mm A', field.branch.timeZone).utc().valueOf();
      jQuery('#bookingFieldModal').modal('show');
    } else {
      this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    }
  }

}
