import { Package } from './Package';
import { LngLat } from '../models/LngLat';
import { Sport } from '../models/Sport';
import { Group } from '../models/Group';

/**
 * Jira ticket:           FKE-5 (https://freakick.atlassian.net/browse/FKE-5)
 * API Endpoint:          CREATE_EVENT
 * Success message type:  CREATE_EVENT_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'CREATE_EVENT';

export class CreateEvent extends Package {
  private name: string;
  private description: string;
  private startDate: number;
  private endDateType: number = 2;
  private endDate: number;
  private startTime: number;
  private endTime: number;
  private isAllDateEvent: boolean;
  private eventType: number;
  private repeatType: number;
  private repeatFrequency: number;
  private isOccurMonday: boolean;
  private isOccurTuesday: boolean;
  private isOccurWednesday: boolean;
  private isOccurThursday: boolean;
  private isOccurFriday: boolean;
  private isOccurSaturday: boolean;
  private isOccurSunday: boolean;
  private localTimeZone: string;
  private sponsoredByBranchId: number = -1;
  private sponsoredByTeamId: number = -1;
  private sponsoredByTeamLeagueId: number = -1;
  private contactEmail: string;
  private contactPhone: string;
  private price: number = 0;
  private images: string[] = [];
  private capacity: number = 0;
  private ageGroup: number[] = [];
  private sports: number[] = [];
  private address: string;
  private latitude: number;
  private longitude: number;
  private canGuestModify: boolean = false;
  private canGuestInviteOthers: boolean = false;
  private canGuestSeeGuest: boolean = false;
  private notificationBy: number = 1;
  private notificationBeforeHours: number = 1;
  private isSocialEvent: boolean;

  constructor() {
    super(API_ENDPOINT);
  }

  public setName(name: string): CreateEvent {
    this.name = String(name);
    return this;
  }

  public setDescription(description: string): CreateEvent {
    this.description = String(description);
    return this;
  }

  public setDate(startDate: number, endDate: number): CreateEvent {
    this.startDate = Number(startDate);
    this.endDate = Number(endDate);
    return this;
  }

  public setTime(isAllDay: boolean, startTime?: number, endTime?: number): CreateEvent {
    this.isAllDateEvent = Boolean(isAllDay);
    this.startTime = isAllDay ? 0 : Number(startTime);
    this.endTime = isAllDay ? 0 : Number(endTime);
    return this;
  }

  public setType(eventType: number): CreateEvent {
    this.eventType = Number(eventType);
    return this;
  }

  public setRepeat(repeatType: number, repeatFrequency: number, weekDay?: boolean[]): CreateEvent {
    this.repeatType = Number(repeatType);
    this.repeatFrequency = Number(repeatFrequency);
    this.isOccurSunday = (repeatType === 2) ? Boolean(weekDay[0]) : false;
    this.isOccurMonday = (repeatType === 2) ? Boolean(weekDay[1]) : false;
    this.isOccurTuesday = (repeatType === 2) ? Boolean(weekDay[2]) : false;
    this.isOccurWednesday = (repeatType === 2) ? Boolean(weekDay[3]) : false;
    this.isOccurThursday = (repeatType === 2) ? Boolean(weekDay[4]) : false;
    this.isOccurFriday = (repeatType === 2) ? Boolean(weekDay[5]) : false;
    this.isOccurSaturday = (repeatType === 2) ? Boolean(weekDay[6]) : false;
    return this;
  }

  public setTimeZone(localTimeZone: string): CreateEvent {
    this.localTimeZone = String(localTimeZone);
    return this;
  }

  public setSponsor(branchId?: number, teamId?: number, teamLeagueId?: number): CreateEvent {
    this.sponsoredByBranchId = branchId || -1;
    this.sponsoredByTeamId = teamId || -1;
    this.sponsoredByTeamLeagueId = teamLeagueId || -1;
    return this;
  }

  public setContact(email: string, phone: string): CreateEvent {
    this.contactEmail = String(email);
    this.contactPhone = String(phone);
    return this;
  }

  public setPrice(price: number): CreateEvent {
    this.price = Number(price);
    return this;
  }

  public setCapacity(capacity: number): CreateEvent {
    this.capacity = Number(capacity);
    return this;
  }

  public setLocation(address: string, lngLat: LngLat): CreateEvent {
    this.address = String(address);
    this.longitude = lngLat.getLng();
    this.latitude = lngLat.getLat();
    return this;
  }

  public setGuest(canGuestModify: boolean, canGuestInviteOthers: boolean, canGuestSeeGuest: boolean): CreateEvent {
   this.canGuestModify = canGuestModify;
   this.canGuestInviteOthers = canGuestInviteOthers;
   this.canGuestSeeGuest = canGuestSeeGuest;
   return this;
  }

  public setNotification(notificationBy: number, notificationBeforeHours: number): CreateEvent {
    this.notificationBy = notificationBy;
    this.notificationBeforeHours = notificationBeforeHours;
    return this;
  }

  public setImages(images: string[]): CreateEvent {
    this.images = images;
    return this;
  }

  public setGroups(groups: number[]): CreateEvent {
    this.ageGroup = groups;
    return this;
  }

  public setIsSocialEvent(value: boolean): CreateEvent {
    this.isSocialEvent = value;
    return this;
  }

  public setSports(sports: number[]): CreateEvent {
    this.sports = sports;
    return this;
  }

}
