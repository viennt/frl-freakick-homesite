import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';

/**
 * API packages
 */
import { SearchAvailableFieldOnTimeAndCourt } from '../../../packages/SearchAvailableFieldOnTimeAndCourt';

/**
 * services
 */
import { AuthenticationService } from '../../../services/authentication.service';
import { MessageService } from '../../../services/message.service';
import { HelpService } from '../../../services/help.service';

/**
 * models
 */
import { Sport } from '../../../models/Sport';
import { Facility } from '../../../models/Facility';
import { Court } from '../../../models/Court';

@Component({
  moduleId: module.id,
  selector: 'frk-received-branch-courts',
  templateUrl: 'received-branch-courts.component.html',
  styleUrls: ['received-branch-courts.component.css']
})
export class ReceivedBranchCourtsComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  public messageSub: any;

  @Input() availableSports: Sport[];
  @Input() paginationPage: number;
  @Input() branch: Court;

  @Output() nonResult: EventEmitter<any> = new EventEmitter();
  @Output() haveResult: EventEmitter<any> = new EventEmitter();

  public availableFilterTimes: string[];
  public loadingResultData: boolean;

  public receivedCourts: { field: Facility, availableTimes: { label: string, value: number }[] }[];

  public filterSport: Sport;
  public filterDate: string;
  public filterTime: string;

  protected selectedField: Facility;
  protected selectedFieldDate: number;
  protected selectedFieldTime: { label: string, value: number };

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

  ngOnChanges(changes: any): any {
    for (let propName in changes) {
      if ('branch' === propName || 'availableSports' === propName) {
        this.filterSport = this.availableSports[0];
        this.getCourtsFromServer();
      }
    }
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
      case 'SEARCH_AVAILABLE_FIELD_ON_TIME_AND_COURT_SUCCESS':
        this.receivedCourts = undefined;
        this.handleReceiveCourts(message.data);
    }
  }

  handleReceiveCourts(data: any): void {
    if (data.lstResult.length === 0) {
      this.receivedCourts = [];
      this.nonResult.emit();
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
      this.haveResult.emit();
    }
    this.loadingResultData = false;
  }

  sendMessageToGetAvailableCourts(): void {
    if (typeof this.filterSport === 'undefined') return;
    let locationTime = this.filterDate + ' ' + this.filterTime;
    let searchingTime: number = moment.tz(locationTime, 'YYYY-MM-DD H:mm A', this.branch.timeZone).utc().valueOf();
    let apiPackage = new SearchAvailableFieldOnTimeAndCourt()
      .setTime(searchingTime)
      .setSport(this.filterSport)
      .setCourt(this.branch);
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
