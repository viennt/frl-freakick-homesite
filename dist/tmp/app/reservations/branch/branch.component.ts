import {
    Component, OnInit, OnDestroy, HostBinding,
    trigger, state, style, keyframes, transition, animate
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * services
 */
import { MessageService } from '../../services/message.service';
import { LocationService } from '../../services/location.service';
import { AuthenticationService } from '../../services/authentication.service';

/**
 * packages
 */
import { GetRatingBranch } from '../../packages/GetRatingBranch';
import { GetBranchInfo } from '../../packages/GetBranchInfo';
import { GetSportType } from '../../packages/GetSportType';
import { GetAllGroup } from '../../packages/GetAllGroup';

/**
 * models
 */
import { Court } from '../../models/Court';
import { Sport } from '../../models/Sport';
import { Group } from '../../models/Group';
import { LngLat } from '../../models/LngLat';
import { ButtonState } from '../../models/ButtonState';

enum SearchingType {
    courts, classes, facilities
}

@Component({
    moduleId: module.id,
    selector: 'frk-branch',
    templateUrl: 'branch.component.html',
    styleUrls: ['branch.component.css'],
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
export class BranchComponent implements OnInit, OnDestroy {
    public routeSub: any;
    public messageSub: any;

    public branchIdParam: number;
    public branch: Court;
    public isNotFoundBranch: boolean;

    public searchingType = SearchingType;

    public availableSports: Sport[];
    public availableGroups: Group[];

    public isLoggedIn: boolean;

    public isShownReceivedCourts: boolean;
    public isShownReceivedClasses: boolean;
    public isShownReceivedFacilities: boolean;
    public isShownReviewForm: boolean;
    public isShownDirectionMap: boolean;

    public userCurrentLocation: LngLat;
    public userReviewOnBranch: any;

    public isWaitingForUpdateBranchInfo: boolean;

    public courtTabState: ButtonState = new ButtonState();
    public classTabState: ButtonState = new ButtonState();
    public facilityTabState: ButtonState = new ButtonState();

    @HostBinding('@fadeIn') get fadeIn() {
        return 'in';
    }

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private locationService: LocationService,
        private authService: AuthenticationService,
        private messageService: MessageService) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => this.handleRoute(params));
        this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));

        this.isLoggedIn = this.authService.isLoggedIn();
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
        this.messageSub.unsubscribe();
    }

    handleRoute(params: any): any {
        this.isWaitingForUpdateBranchInfo = false;
        this.isShownReceivedFacilities = false;
        this.isShownReceivedClasses = false;
        this.isShownReceivedCourts = false;
        this.isShownDirectionMap = false;
        this.isShownReviewForm = false;

        this.branchIdParam = +params['id'];
        this.branch = undefined;
        this.sendMessageToGetBranchInfo();
    }

    handleMessage(message: any) {
        switch (message.messageType) {
            case 'GET_BRANCH_INFO_SUCCESS':
                if (typeof message.data.branchInfo === 'undefined') break;
                this.isNotFoundBranch = false;
                this.branch = new Court(message.data.branchInfo);
                if (this.authService.isLoggedIn()) this.sendMessageToGetRatingBranch();
                if (this.isWaitingForUpdateBranchInfo) {
                    this.isWaitingForUpdateBranchInfo = false;
                    break;
                }
                this.sendMessageToGetSports();
                break;
            case 'GET_USER_RATING_FOR_BRANCH_SUCCESS':
                this.userReviewOnBranch = message.data.rating;
                break;
            case 'GET_SPORT_TYPE_SUCCESS':
                this.handleReceivedSport(message.data.lstSport);
                this.sendMessageToGetGroups();
                break;
            case 'GET_ALL_GROUP_SUCCESS':
                this.handleReceivedGroups(message.data);
                this.loadCourtResource();
                break;
            case 'REQUEST_ERROR':
                if ('GET_BRANCH_INFO_NOT_FOUND' === message.data.errorType) {
                    this.isNotFoundBranch = true;
                }
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

    sendMessageToGetBranchInfo(): void {
        if (typeof this.branchIdParam === 'undefined') return;
        let apiPackage = new GetBranchInfo().setBranchId(this.branchIdParam);
        this.messageService.sendMessage(apiPackage.getMessage());
    }

    sendMessageToGetSports(): void {
        let apiPackage = new GetSportType();
        this.messageService.sendMessage(apiPackage.getMessage());
    }

    sendMessageToGetGroups(): void {
        let apiPackage = new GetAllGroup();
        this.messageService.sendMessage(apiPackage.getMessage());
    }

    sendMessageToGetRatingBranch(): void {
        let apiPackage = new GetRatingBranch().setBranch(this.branch);
        this.messageService.sendMessage(apiPackage.getMessage());
    }

    loadCourtResource(): any {
        this.courtTabState.loading();
        this.classTabState.loading();
        this.facilityTabState.loading();
    }

    goToCourtsTab(): any {
        this.isShownReceivedCourts = true;
        this.isShownReceivedClasses = false;
        this.isShownReceivedFacilities = false;
    }

    goToClassesTab(): any {
        this.isShownReceivedCourts = false;
        this.isShownReceivedClasses = true;
        this.isShownReceivedFacilities = false;
    }

    goToFacilitiesTab(): any {
        this.isShownReceivedCourts = false;
        this.isShownReceivedClasses = false;
        this.isShownReceivedFacilities = true;
    }

    disableCourtsTab() : any {
        this.courtTabState.notReady();
    }

    disableClassesTab() : any {
        this.classTabState.notReady();
    }

    disableFacilitiesTab() : any {
        this.facilityTabState.notReady();
    }

    enableCourtsTab() : any {
        this.courtTabState.ready();
        this.goToCourtsTab();
    }

    enableClassesTab() : any {
        this.classTabState.ready();
        if (this.courtTabState.isReady()) this.goToCourtsTab();
        else this.goToClassesTab();
    }

    enableFacilitiesTab() : any {
        this.facilityTabState.ready();
        if (this.courtTabState.isReady()) this.goToCourtsTab();
        else if (this.classTabState.isReady()) this.goToClassesTab();
        else this.goToFacilitiesTab();
    }

    openMapDirection(): any {
        if (this.isShownDirectionMap) return;
        this.locationService.getCurrentPosition((position: any) => this.afterGetCurrentLocation(position));
    }

    afterGetCurrentLocation(position: any): void {
        this.userCurrentLocation = new LngLat(position.location.lng, position.location.lat);
        this.isShownDirectionMap = true;
    }

    toggleReviewForm(status: boolean): any {
        this.isShownReviewForm = status;
    }

    reloadUserRating(): any {
        this.toggleReviewForm(false);
        this.isWaitingForUpdateBranchInfo = true;
        this.sendMessageToGetBranchInfo();
    }

}
