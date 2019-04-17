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
import { SearchAvailableClassByOwnerOnSpecificCenter } from '../../../packages/SearchAvailableClassByOwnerOnSpecificCenter';

/**
 * services
 */
import { AuthenticationService } from '../../../services/authentication.service';
import { MessageService } from '../../../services/message.service';

/**
 * models
 */
import { Sport } from '../../../models/Sport';
import { Group } from '../../../models/Group';
import { Court } from '../../../models/Court';
import { TrainingClass } from '../../../models/TrainingClass';
import { ClassSchedule } from '../../../models/ClassSchedule';
import { FacilityClass } from '../../../models/FacilityClass';

import * as constants from '../../../constants';

@Component({
  moduleId: module.id,
  selector: 'frk-received-branch-classes',
  templateUrl: 'received-branch-classes.component.html',
  styleUrls: ['received-branch-classes.component.css']
})
export class ReceivedBranchClassesComponent implements OnInit, OnDestroy, OnChanges {

  public messageSub: any;

  @Input() availableSports: Sport[];
  @Input() availableGroups: Group[];
  @Input() paginationPage: number;
  @Input() branch: Court;

  @Output() nonResult: EventEmitter<any> = new EventEmitter();
  @Output() haveResult: EventEmitter<any> = new EventEmitter();

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
    this.getClassesFromServer();
  }

  ngOnChanges(changes: any): any {
    for (let propName in changes) {
      if ('branch' === propName || 'availableSports' === propName || 'availableGroups' === propName) {
        this.filterSports = this.availableSports;
        this.filterGroups = this.availableGroups;
        this.getClassesFromServer();
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
        this.handleReceivedClass({lstClass: []});
        break;
      case 'SEARCH_AVAILABLE_CLASS_BY_OWNER_ON_SPECIFIC_CENTER_SUCCESS':
        this.receivedClasses = undefined;
        this.handleReceivedClass(message.data);
    }
  }

  handleReceivedClass(data: any): void {
    data.lstClass = Object.prototype.toString.call(data.lstClass) !== '[object Array]' ? JSON.parse(data.lstClass) : data.lstClass;
    if (data.lstClass.length === 0) {
      this.receivedClasses = [];
      this.nonResult.emit();
    } else {
      this.receivedClasses = data.lstClass
        .filter((classData: any) => classData !== null)
        .map((classData: any) => new FacilityClass(classData));
      this.haveResult.emit();
    }
    this.loadingResultData = false;
  }

  sendMessageToGetAvailableClass(): void {
    let apiPackage = new SearchAvailableClassByOwnerOnSpecificCenter()
      .setKeyWord('')
      .setSports(this.filterSports)
      .setGroups(this.filterGroups)
      .setCourt(this.branch)
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
