import { ICategoryOptions, Category } from './Category';
import { ICourtOptions as IBranchOptions, Court as Branch } from './Court';
import { ISportOptions, Sport } from './Sport';
import { User } from './User';

import { HelpService } from '../services/help.service';
import { CONFIG, DATE_TIME } from '../constants';
// import * as moment from 'moment-timezone';

export interface IEventOptions {
  id: number;
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  ticketPrice: number;
  registrationLink: string;
  images: any;
  capacity: number;
  fromAge: number;
  toAge: number;
  lstSport: ISportOptions[];
  lstCategory: ICategoryOptions[];
  address: string;
  latitude: number;
  longitude: number;
  status: { id: number; statusCode: string; statusName: string };
  numberOfRegisteredUsers: number;
  numberOfComments: number;
  numberOfLikes: number;
  availableSlots: number;

  startDate: string;
  endDateType: number;
  endDateTypeName: string;
  endDate: string;
  isAllDateEvent: boolean;
  startTime: number;
  endTime: number;
  eventType: number;
  eventTypeName: string;
  repeatType: number;
  repeatTypeName: string;
  repeatFrequency: number;
  isOccurMonday: boolean;
  isOccurTuesday: boolean;
  isOccurWednesday: boolean;
  isOccurThursday: boolean;
  isOccurFriday: boolean;
  isOccurSaturday: boolean;
  isOccurSunday: boolean;
  canGuestModify: boolean;
  canGuestInviteOthers: boolean;
  canGuestSeeGuest: boolean;
  notificationBy: number;
  notificationBeforeHours: number;
  requiredCheckIn: boolean;

  localTimeZone: string;
  createdBy: any;
  sponsoredByBranch: IBranchOptions;

  hasMainEvent: boolean;
  hasSubEvent: boolean;

  isMemberOnly: boolean;
  isPublic: boolean;

  registrationStartDate: string;
  registrationEndDate: string;
}

/**
 * Event models
 *
 * accessToken (String): required
 * name (String): required
 * description (String): not required
 * startDate (Long in UTC): required
 * startTime (Double in UTC): required
 * endTime (Double in UTC): required
 * isAllDateEvent (Boolean): required, default False
 * eventType (Int): required
 *    = 0: A pickup game
 *    = 1: Personal event
 *    = 2: Sponsored event (social event)
 *    = 3: Branch event // REMOVED. We use event_type = 2 instead, go with a valid branch id.
 *    = 4: Guild team internal event
 *    = 5: League team internal event
 *    = 6: scheduled class
 *    = 7: matchup in league
 *    = 8: guild game
 * Notes: that a pickup game, a sponsored event (social event) or a class,
 *    if it is created under a branch, we need to input the branch id
 * endDateType (Int): required, default is 2
 *    = 1: never end
 *    = 2: end on a specific date ( go with an endDate)
 * isAllDateEvent (Boolean): required, default is False
 * isOccurMonday....isOccurSunday (Boolean): default is False, go with repeat_type = 2 (Weekly)
 * repeatType:
 *    = 0: No repeat
 *    = 1: Daily
 *    = 2: Weekly
 *    = 3: Monthly
 * (we do not support other types)
 * The weekly type will usually go with the occurred weekdays.
 * repeatFrequency: the scope (by number of days) of repeating
 * localTimeZone: the timezone where the event is taken place
 * sponsoredByBranchId: if the eventType = 3, it should go with a branch Id where that event belongs to. Pass -1 if not belong to a branch
 * sponsoredByTeamId (eventType = 4) and sponsoredByTeamLeagueId (eventType =5):
 *    means that this is an internal team event (which is published to the members of team only),
 *    so it should go with either sponsoredByTeamId or sponsoredByTeamLeagueId. Pass -1 if not belong to a team.
 * price (Double): required, can be = 0 (Free)
 * images (Array of String): not required
 * capacity (Int): = 0 if unlimited
 * ageGroup (Array of Int): not required
 * sports (Array of Int): not required
 * isSocialEvent (Boolean): default is False
 * facilityId (Int): not required, pass -1 if there is no facility linked
 * isPublic (Boolean): default is true, if this is passed as FALSE, then, the activity is BY INVITATION ONLY.
 * isMemberOnly: if the event requires membership, default is FALSE
 * address, latitude, longitude: required
 * canGuestModify: can a guest modify the event (default = false)
 * canGuestInviteOthers (available if canGuestModify = false): can a guest invite others
 * canGuestSeeGuest (available if canGuestModify = false): can a guest see list of guests
 * notificationBy: method of notification:
 *    = 1: message box (default)
 *    = 2: email
 * notificationBeforeHours: the number of hour before the time event happen that user expect our system to send out a notification to him.
 */
export class Event {
  public static type = {
    PickupGame: 0, Personal: 1, Sponsored: 2,
    Branch: 3, GuildTeam: 4, LeagueTeam: 5,
    ScheduledClass: 6, LeagueMatchup: 7, GuildGame: 8
  };

  public static repeatType = {
    NoRepeat: 0, Daily: 1, Weekly: 2, Monthly: 3
  };

  public static notificationType = {
    Message: 1, Email: 2
  };

  // General properties
  public id: number;
  public name: string;
  public description: string;
  public contactEmail: string;
  public contactPhone: string;
  public ticketPrice: number;
  public registrationLink: string;
  public images: string[];
  public capacity: number;
  public sports: Sport[];
  public categories: Category[];
  public address: string;
  public latitude: number;
  public longitude: number;
  public status: { id: number, statusCode: string, statusName: string };
  public numberOfRegisteredUsers: number;
  public numberOfComments: number;
  public numberOfLikes: number;
  public availableSlots: number;

  // Event frequency properties
  public repeatType: number;
  public repeatTypeName: string;
  public repeatFrequency: number;
  public isOccurMonday: boolean;
  public isOccurTuesday: boolean;
  public isOccurWednesday: boolean;
  public isOccurThursday: boolean;
  public isOccurFriday: boolean;
  public isOccurSaturday: boolean;
  public isOccurSunday: boolean;

  // Permissions
  public canGuestModify: boolean;
  public canGuestInviteOthers: boolean;
  public canGuestSeeGuest: boolean;
  public notificationBy: number;
  public notificationBeforeHours: number;
  public requiredCheckIn: boolean;

  // Event time
  public localTimeZone: string;
  public startDate: string;
  public endDate: string;
  public endDateType: number;
  public endDateTypeName: string;

  public startTime: string;
  public endTime: string;
  public isAllDateEvent: boolean;

  public eventType: number;
  public eventTypeName: string;
  public sponsoredByBranch: Branch;

  public createdBy: User;

  public isStarted: boolean;
  public isEnded: boolean;

  public hasMainEvent: boolean;
  public hasSubEvent: boolean;

  public isMemberOnly: boolean;
  public isPublic: boolean;

  public registrationStartDate: string;
  public registrationEndDate: string;

  public static getImage(image: string) {
    image = image && image.split(' ').join('%20');
    if (!image || image === 'null') {
      return './assets/images/default/event.png';
    } else {
      if (image.startsWith(CONFIG.URL)) return image;
      return CONFIG.URL + '/assets/' + image;
    }
  }

  constructor()
  constructor(options: IEventOptions)
  constructor(options?: IEventOptions) {
    this.id = options && options.id || -1;
    this.name = options && options.name || '';
    this.description = options && options.description || '';
    this.contactEmail = options && options.contactEmail || '';
    this.contactPhone = options && options.contactPhone || '';
    this.ticketPrice = options && options.ticketPrice || 0;
    this.registrationLink = options && options.registrationLink || '';
    this.capacity = options && options.capacity || 0;

    this.sports = options && options.lstSport
      && options.lstSport.map((data: any) => new Sport(data)) || [];

    this.categories = options && options.lstCategory
      && options.lstCategory.map((data: any) => new Category(data)) || [];

    this.address = options && options.address || '';
    this.latitude = options && options.latitude || 0;
    this.longitude = options && options.longitude || 0;
    this.numberOfRegisteredUsers = options && options.numberOfRegisteredUsers || 0;
    this.numberOfComments = options && options.numberOfComments || 0;
    this.numberOfLikes = options && options.numberOfLikes || 0;
    this.availableSlots = options && options.availableSlots || 0;
    this.status = options && options.status || {
      id: -1, statusCode: 'Unknown code', statusName: 'Unknown status'
    };

    // Event frequency properties
    this.repeatType = options && options.repeatType || 0;
    if (this.repeatType === 1) {
      this.repeatTypeName = 'Daily';
    } else if (this.repeatType === 2) {
      this.repeatTypeName = 'Weekly';
    } else if (this.repeatType === 3) {
      this.repeatTypeName = 'Monthly';
    } else {
      this.repeatTypeName = 'No repeat';
    }
    this.repeatFrequency = options && options.repeatFrequency || 1;
    this.isOccurMonday = options && options.isOccurMonday || false;
    this.isOccurTuesday = options && options.isOccurTuesday || false;
    this.isOccurWednesday = options && options.isOccurWednesday || false;
    this.isOccurThursday = options && options.isOccurThursday || false;
    this.isOccurFriday = options && options.isOccurFriday || false;
    this.isOccurSaturday = options && options.isOccurSaturday || false;
    this.isOccurSunday = options && options.isOccurSunday || false;

    // Permissions
    this.canGuestModify = options && options.canGuestModify || false;
    this.canGuestInviteOthers = options && options.canGuestInviteOthers || false;
    this.canGuestSeeGuest = options && options.canGuestSeeGuest || false;
    this.notificationBy = options && options.notificationBy || 1;
    this.notificationBeforeHours = options && options.notificationBeforeHours || 0;
    this.requiredCheckIn = options && options.requiredCheckIn || false;

    // Event time
    this.localTimeZone = options && options.localTimeZone || 'UTC';
    let fieldTimezoneOffset: number = HelpService.getTimezoneOffset(this.localTimeZone);
    this.startDate = options && options.startDate && HelpService.convertUTCToLocalTime(options.startDate, this.localTimeZone) || '';
    this.endDate = options && options.endDate && HelpService.convertUTCToLocalTime(options.endDate, this.localTimeZone) || undefined;
    this.isAllDateEvent = options && !!options.isAllDateEvent;
    this.startTime = options && (options.startTime !== undefined)
      && HelpService.convertDoubleTimeToString(options.startTime + fieldTimezoneOffset) || '';
    this.endTime = options && (options.endTime !== undefined)
      && HelpService.convertDoubleTimeToString(options.endTime + fieldTimezoneOffset) || '';
    this.endDateType = options && options.endDateType || 1;
    this.endDateTypeName = options && options.endDateTypeName || 'Unknown end date type';
    this.eventType = options && options.eventType;
    this.eventTypeName = options && options.eventTypeName || 'Unknown event type';
    this.sponsoredByBranch = options && new Branch(options.sponsoredByBranch) || new Branch();

    this.images = options && options.images.map((item: string) => Event.getImage(item)) || Event.getImage('');

    let userData: any = options && options.createdBy && {
      userId: options.createdBy.id,
      userName: options.createdBy.userName,
      userImage: options.createdBy.userImage,
      email: options.createdBy.email
    } || {};
    this.createdBy = userData && new User(userData) || new User();

    this.hasMainEvent = options && options.hasMainEvent;
    this.hasSubEvent = options && options.hasSubEvent;

    this.isMemberOnly = options && options.isMemberOnly;
    this.isPublic = options && options.isPublic;

    this.registrationStartDate = options && options.registrationStartDate &&
      HelpService.convertUTCToLocalTime(options.registrationStartDate, this.localTimeZone) || '';
    this.registrationEndDate = options && options.registrationEndDate &&
      HelpService.convertUTCToLocalTime(options.registrationEndDate, this.localTimeZone) || '';
  }
}

