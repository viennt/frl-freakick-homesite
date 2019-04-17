import { Component, OnInit, OnDestroy, AfterViewInit, Input, HostBinding,
    trigger, state, style, keyframes, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

/**
 * API packages
 */
import { GetAvailableFacilities } from '../../../packages/GetAvailableFacilities';

/**
 * services
 */
import { AuthenticationService } from '../../../services/authentication.service';
import { MessageService } from '../../../services/message.service';

/**
 * models
 */
import { Sport } from '../../../models/Sport';
import { LngLat } from '../../../models/LngLat';
import { Address } from '../../../models/Address';
import { Facility } from '../../../models/Facility';

import * as constants from '../../../constants';

@Component({
  moduleId: module.id,
  selector: 'frk-received-facilities',
  templateUrl: 'received-facilities.component.html',
  styleUrls: ['received-facilities.component.css'],
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
export class ReceivedFacilitiesComponent implements OnInit, OnDestroy, AfterViewInit {
  public messageSub: any;

  @Input() availableSports: Sport[];
  @Input() paginationPage: number;
  @Input() keyword: string;
  @Input() userLocation: { timezone: string, address: Address, coordinate: LngLat };

  @HostBinding('@fadeIn') get fadeIn() {
    return 'in';
  }

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
    this.loadedImage = [];
    this.getFacilitiesFromServer();
  }

  ngAfterViewInit() {
    // jQuery('#daterange').daterangepicker();
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
      case 'GET_AVAILABLE_FACILITIES_SUCCESS':
        this.receivedFacilities = undefined;
        this.handleReceivedFacilities(message.data);
    }
  }

  handleReceivedFacilities(data: any): void {
    data.lstFacilities = Object.prototype.toString.call(data.lstFacilities) !== '[object Array]'
      ? JSON.parse(data.lstFacilities) : data.lstFacilities;
    if (data.lstFacilities.length === 0) {
      this.loadingResultData = false;
      this.receivedFacilities = [];
    } else {
      this.receivedFacilities = data.lstFacilities
        .filter((facilityData: any) => facilityData !== null)
        .map((facilityData: any) => new Facility(facilityData));
    }
  }

  sendMessageToGetAvailableFacilities(): void {
    let apiPackage = new GetAvailableFacilities()
      .setKeyWord(this.keyword)
      .setSports(this.filterSports)
      .setCity(this.userLocation.address.getCity())
      .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  getFacilitiesFromServer(): void {
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

  facilitiesImageLoaded(): any {
    this.loadedImage.push(true);
    if (this.loadedImage.length >= this.receivedFacilities.length) {
      this.loadingResultData = false;
    }
  }

  updateUrl(facility: any): any {
    facility.partner.logo = './assets/images/default/court.png';
    this.facilitiesImageLoaded();
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
