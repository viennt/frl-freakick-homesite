import {
  Component, OnInit, OnDestroy, HostBinding,
  trigger, state, style, keyframes, transition, animate
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * API packages
 */
import { GetAllGroup } from '../../packages/GetAllGroup';
import { GetSportType } from '../../packages/GetSportType';
import { SearchCityByNameAndState } from '../../packages/SearchCityByNameAndState';

/**
 * services
 */
import { MessageService } from '../../services/message.service';
import { LocationService } from '../../services/location.service';

/**
 * models
 */
import { Group } from '../../models/Group';
import { Sport } from '../../models/Sport';
import { City } from '../../models/City';
import { State } from '../../models/State';
import { Country } from '../../models/Country';
import { Address } from '../../models/Address';
import { LngLat } from '../../models/LngLat';

enum SearchingType {
  field, class, facility, event
}

import { DEFAULT_TIMEZONE, DEFAULT_LOCATION } from '../../constants';

@Component({
  moduleId: module.id,
  selector: 'frk-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', animate(1000, keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('* => void', animate(1000, keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 1})
      ])))
    ])
  ]
})
export class SearchComponent implements OnInit, OnDestroy {

  public routeSub: any;
  public messageSub: any;

  public searchingType = SearchingType;

  public availableSports: Sport[];
  public availableGroups: Group[];

  public userLocation: { timezone: string, address: Address, coordinate: LngLat };

  public keywordParam: string;
  public locationParam: string;
  public typeParam: string;
  public pageParam: number;

  public isShownReceivedCourts: boolean;
  public isShownReceivedClasses: boolean;
  public isShownReceivedFacilities: boolean;
  public isShownReceivedEvents: boolean;

  @HostBinding('@fadeIn')
  get fadeIn() {
    return 'in';
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private locationService: LocationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.routeSub = this.route.queryParams.subscribe(params => this.handleRoute(params));
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.userLocation = {
      timezone: DEFAULT_TIMEZONE,
      address: new Address(),
      coordinate: new LngLat()
    };
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.messageSub.unsubscribe();
  }

  handleRoute(params: any): any {
    this.isShownReceivedCourts = false;
    this.isShownReceivedClasses = false;
    this.isShownReceivedFacilities = false;
    this.isShownReceivedEvents = false;

    this.keywordParam = params['keyword'] || '';
    this.locationParam = params['location'] || DEFAULT_LOCATION;
    // FIXME: when use pagination
    // this.pageParam = +params['page'] || 0;
    this.pageParam = 0;
    this.typeParam = SearchingType[+SearchingType[(params['type'] || '').toLowerCase()]] || SearchingType[SearchingType.field];

    this.locationService.getCitiesByAddress(this.locationParam).then((position: any) => {
      if (position.results.length <= 0) return;
      let latLngOfCity = position.results[0].geometry.location;
      this.userLocation.coordinate = new LngLat(latLngOfCity.lng, latLngOfCity.lat);
      this.locationService.getTimeZone(latLngOfCity).then((timezone: any) => {
        this.userLocation.timezone = timezone.timeZoneId || 'America/New_York';
        this.sendMessageToGetSports();
      });
    });
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'GET_SPORT_TYPE_SUCCESS':
        this.handleReceivedSport(message.data.lstSport);
        this.sendMessageToGetGroups();
        break;
      case 'GET_ALL_GROUP_SUCCESS':
        this.handleReceivedGroups(message.data);
        this.sendMessageToGetCityByNameAndState();
        break;
      case 'SEARCH_CITY_BY_NAME_AND_STATE_SUCCESS':
        this.handleReceivedCity(message.data);
        this.getSearchResultFromServer();
    }
  }

  handleReceivedSport(data: any): void {
    data = Object.prototype.toString.call(data) !== '[object Array]' ? JSON.parse(data) : data;
    this.availableSports = data.map((sportData: any) => new Sport(sportData));
  }

  handleReceivedGroups(data: any): void {
    data.lstResult = Object.prototype.toString.call(data.lstResult) !== '[object Array]' ? JSON.parse(data.lstResult) : data.lstResult;
    this.availableGroups = data.lstResult.map((groupData: any) => new Group(groupData));
  }

  handleReceivedCity(data: any): void {
    if (typeof data.city === 'undefined') {
      this.userLocation.address = null;
      console.error('Error', 'Cannot find this city in our server.');
    } else if (typeof data.state === 'undefined') {
      this.userLocation.address = null;
      console.error('Error', 'Cannot find this state in our server.');
    } else if (typeof data.country === 'undefined') {
      this.userLocation.address = null;
      console.error('Error', 'Cannot find this country in our server.');
    } else {
      this.userLocation.address.setCity(new City(data.city.cityId, data.city.cityName));
      this.userLocation.address.setState(new State(data.state.stateId, data.state.stateName));
      this.userLocation.address.setCountry(new Country(data.country.countryId, data.country.countryName));
    }
  }

  sendMessageToGetSports(): void {
    let apiPackage = new GetSportType();
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToGetGroups(): void {
    let apiPackage = new GetAllGroup();
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToGetCityByNameAndState(): void {
    let address: string[] = this.locationParam.split(',');
    let apiPackage = new SearchCityByNameAndState()
      .setCityName(address[0])
      .setStateName(address[1])
      .setCountryName(address[2]);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  getSearchResultFromServer(): void {
    if (typeof this.keywordParam === 'undefined') return;
    if (typeof this.pageParam === 'undefined') return;
    if (typeof this.availableSports === 'undefined') return;
    if (typeof this.availableGroups === 'undefined') return;
    if (typeof this.userLocation === 'undefined') return;
    if (typeof this.userLocation.address === 'undefined') return;
    if (typeof this.userLocation.address.getCity() === 'undefined') return;
    if (typeof this.userLocation.address.getCity() === null) return;
    if (typeof this.userLocation.timezone === 'undefined') return;

    if (this.typeParam === SearchingType[SearchingType.field]) {
      this.isShownReceivedCourts = true;
      this.isShownReceivedClasses = false;
      this.isShownReceivedFacilities = false;
      this.isShownReceivedEvents = false;
    } else if (this.typeParam === SearchingType[SearchingType.class]) {
      this.isShownReceivedCourts = false;
      this.isShownReceivedClasses = true;
      this.isShownReceivedFacilities = false;
      this.isShownReceivedEvents = false;
    } else if (this.typeParam === SearchingType[SearchingType.facility]) {
      this.isShownReceivedCourts = false;
      this.isShownReceivedClasses = false;
      this.isShownReceivedFacilities = true;
      this.isShownReceivedEvents = false;
    } else if (this.typeParam === SearchingType[SearchingType.event]) {
      this.isShownReceivedCourts = false;
      this.isShownReceivedClasses = false;
      this.isShownReceivedFacilities = false;
      this.isShownReceivedEvents = true;
    }
  }

  goToCourtsTab(): any {
    let params = {
      keyword: this.keywordParam,
      location: this.locationParam,
      page: this.pageParam,
      type: SearchingType[SearchingType.field]
    };
    this.router.navigate(['/reservations/search'], {queryParams: params});
  }

  goToClassesTab(): any {
    let params = {
      keyword: this.keywordParam,
      location: this.locationParam,
      page: this.pageParam,
      type: SearchingType[SearchingType.class]
    };
    this.router.navigate(['/reservations/search'], {queryParams: params});
  }

  goToFacilitiesTab(): any {
    let params = {
      keyword: this.keywordParam,
      location: this.locationParam,
      page: this.pageParam,
      type: SearchingType[SearchingType.facility]
    };
    this.router.navigate(['/reservations/search'], {queryParams: params});
  }

  goToEventsTab(): any {
    let params = {
      keyword: this.keywordParam,
      location: this.locationParam,
      page: this.pageParam,
      type: SearchingType[SearchingType.event]
    };
    this.router.navigate(['/reservations/search'], {queryParams: params});
  }
}
