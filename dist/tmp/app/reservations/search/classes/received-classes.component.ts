import { Component, OnInit, OnDestroy, AfterViewInit, Input, HostBinding,
    trigger, state, style, keyframes, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

/**
 * API packages
 */
import { SearchAvailableClassForPlayer } from '../../../packages/SearchAvailableClassForPlayer';

/**
 * services
 */
import { AuthenticationService } from '../../../services/authentication.service';
import { MessageService } from '../../../services/message.service';

/**
 * models
 */
import { LngLat } from '../../../models/LngLat';
import { Sport } from '../../../models/Sport';
import { Group } from '../../../models/Group';
import { Address } from '../../../models/Address';
import { TrainingClass } from '../../../models/TrainingClass';
import { ClassSchedule } from '../../../models/ClassSchedule';
import { FacilityClass } from '../../../models/FacilityClass';

import * as constants from '../../../constants';

@Component({
  moduleId: module.id,
  selector: 'frk-received-classes',
  templateUrl: 'received-classes.component.html',
  styleUrls: ['received-classes.component.css'],
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
export class ReceivedClassesComponent implements OnInit, OnDestroy, AfterViewInit {
  public messageSub: any;

  @Input() availableSports: Sport[];
  @Input() availableGroups: Group[];
  @Input() paginationPage: number;
  @Input() keyword: string;
  @Input() userLocation: { timezone: string, address: Address, coordinate: LngLat };

  @HostBinding('@fadeIn') get fadeIn() {
    return 'in';
  }

  public loadingResultData: boolean;

  public receivedClasses: FacilityClass[];

  public filterSports: Sport[];
  public filterGroups: Group[];

  protected selectedTrainingClass: TrainingClass;
  protected selectedClassSchedule: ClassSchedule;

  public loadedImage: boolean[];

  public preFilterResults: any;

  constructor(private router: Router,
              private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.filterSports = this.availableSports;
    this.filterGroups = this.availableGroups;
    this.loadedImage = [];
    this.getClassesFromServer();
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
        this.handleReceivedClass({lstClass: []});
        break;
      case 'SEARCH_AVAILABLE_CLASS_FOR_PLAYER_SUCCESS':
        this.receivedClasses = undefined;
        this.handleReceivedClass(message.data);
    }
  }

  handleReceivedClass(data: any): void {
    data.lstClass = Object.prototype.toString.call(data.lstClass) !== '[object Array]' ? JSON.parse(data.lstClass) : data.lstClass;
    if (data.lstClass.length === 0) {
      this.loadingResultData = false;
      this.receivedClasses = [];
    } else {
      this.receivedClasses = data.lstClass
        .filter((classData: any) => classData !== null)
        .map((classData: any) => new FacilityClass(classData));
    }
  }

  sendMessageToGetAvailableClass(): void {
    let apiPackage = new SearchAvailableClassForPlayer()
      .setKeyWord(this.keyword)
      .setSports(this.filterSports)
      .setGroups(this.filterGroups)
      .setCity(this.userLocation.address.getCity())
      .setPagination(constants.SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  getClassesFromServer(): void {
    // window.scrollTo(0,0);
    this.loadedImage = [];
    this.loadingResultData = true;
    this.sendMessageToGetAvailableClass();
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
      this.getClassesFromServer();
    }, 1000);
  }

  filterGroupsChanged(selectedGroup: Group, value: any): any {
    if (this.preFilterResults) clearTimeout(this.preFilterResults);
    if (value) {
      let inGroup = this.filterGroups.find((group: Group) => {
        return group.groupId === selectedGroup.groupId;
      });
      if (typeof inGroup === 'undefined') {
        this.filterGroups.push(selectedGroup);
      }
    } else {
      this.filterGroups = this.filterGroups.filter(function (group: Group) {
        return group.groupId !== selectedGroup.groupId;
      });
    }
    this.preFilterResults = setTimeout(() => {
      clearTimeout(this.preFilterResults);
      this.getClassesFromServer();
    }, 1000);
  }

  classImageLoaded(): any {
    this.loadedImage.push(true);
    if (this.loadedImage.length >= this.receivedClasses.length) {
      this.loadingResultData = false;
    }
  }

  updateUrl(centerClass: any): any {
    centerClass.trainingClass.category.sportIcon = './assets/images/default/court.png';
    this.classImageLoaded();
  }

  onOpenClassSchedule(classSchedule: ClassSchedule): any {
    this.selectedClassSchedule = classSchedule;
  }

  onBookingClass(facilityClass: FacilityClass): any {
    if (this.authService.isLoggedIn()) {
      this.selectedClassSchedule = facilityClass.classSchedule;
      this.selectedTrainingClass = facilityClass.trainingClass;
      jQuery('#bookingClassModal').modal('show');
    } else {
      this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    }
  }
}
