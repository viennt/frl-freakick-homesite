import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';

/**
 * API packages
 */
import { GetAvailableFacilitiesOnSpecificCenter } from '../../../packages/GetAvailableFacilitiesOnSpecificCenter';

/**
 * services
 */
import { AuthenticationService } from '../../../services/authentication.service';
import { MessageService } from '../../../services/message.service';

/**
 * models
 */
import { Sport } from '../../../models/Sport';
import { Court } from '../../../models/Court';
import { Facility } from '../../../models/Facility';

import * as constants from '../../../constants';

@Component({
  moduleId: module.id,
  selector: 'frk-received-branch-facilities',
  templateUrl: 'received-branch-facilities.component.html',
  styleUrls: ['received-branch-facilities.component.css']
})
export class ReceivedBranchFacilitiesComponent implements OnInit, OnDestroy, OnChanges {

  public messageSub: any;

  @Input() availableSports: Sport[];
  @Input() paginationPage: number;
  @Input() branch: Court;

  @Output() nonResult: EventEmitter<any> = new EventEmitter();
  @Output() haveResult: EventEmitter<any> = new EventEmitter();

  public loadingResultData: boolean;

  public receivedFacilities: Facility[];

  public filterSports: Sport[];

  public selectedFacility: Facility;

  public loadedImage: boolean[];

  public preFilterResults: any;

  constructor(private router: Router,
              private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.filterSports = this.availableSports;
    this.getFacilitiesFromServer();
  }

  ngOnChanges(changes: any): any {
    for (let propName in changes) {
      if ('branch' === propName || 'availableSports' === propName) {
        this.filterSports = this.availableSports;
        this.getFacilitiesFromServer();
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
        this.handleReceivedFacilities({lstFacilities: []});
        break;
      case 'GET_AVAILABLE_FACILITIES_ON_SPECIFIC_CENTER_SUCCESS':
        this.receivedFacilities = undefined;
        this.handleReceivedFacilities(message.data);
    }
  }

  handleReceivedFacilities(data: any): void {
    data.lstFacilities = Object.prototype.toString.call(data.lstFacilities) !== '[object Array]'
      ? JSON.parse(data.lstFacilities) : data.lstFacilities;
    if (data.lstFacilities.length === 0) {
      this.receivedFacilities = [];
      this.nonResult.emit();
    } else {
      this.receivedFacilities = data.lstFacilities
        .filter((facilityData: any) => facilityData !== null)
        .map((facilityData: any) => new Facility(facilityData));
      this.haveResult.emit();
    }
    this.loadingResultData = false;
  }

  sendMessageToGetAvailableFacilities(): void {
    let apiPackage = new GetAvailableFacilitiesOnSpecificCenter()
      .setKeyWord('')
      .setSports(this.filterSports)
      .setCourt(this.branch)
      .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  getFacilitiesFromServer(): void {
    // window.scrollTo(0,0);
    this.loadedImage = [];
    this.loadingResultData = true;
    this.sendMessageToGetAvailableFacilities();
  }

  filterSportsChanged(selectedSport: Sport, value: any): any {
    if (this.preFilterResults) clearTimeout(this.preFilterResults);
    if (value) {
      let inSport = this.filterSports.find((sport: Sport) => {
        return sport.sportId === selectedSport.sportId;
      });
      if (typeof inSport === 'undefined') {
        this.filterSports.push(selectedSport);
      }
    } else {
      this.filterSports = this.filterSports.filter(function (sport: Sport) {
        return sport.sportId !== selectedSport.sportId;
      });
    }
    this.preFilterResults = setTimeout(() => {
      clearTimeout(this.preFilterResults);
      this.getFacilitiesFromServer();
    }, 1000);
  }

  onBookingFacility(facility: Facility): any {
    if (this.authService.isLoggedIn()) {
      this.selectedFacility = facility;
      jQuery('#bookingFacilityModal').modal('show');
    } else {
      this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    }
  }
}
