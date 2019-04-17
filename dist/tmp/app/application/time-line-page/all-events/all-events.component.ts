import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * services
 */
import { MessageService } from '../../../services/message.service';
import { LocationService } from '../../../services/location.service';

/**
 * models
 */
import { Event } from '../../../models/Event';
import { LngLat } from '../../../models/LngLat';

/**
 * packages
 */
import { GetEvents } from '../../../packages/GetEvents';

import { SEARCH_PAGINATION } from '../../../constants';

@Component({
  moduleId: module.id,
  selector: 'app-time-line-events',
  templateUrl: 'all-events.component.html',
  styleUrls: ['all-events.component.css']
})
export class AllEventsComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public events: Event[];
  public paginationPage: number;

  private messageSub: any;
  private userCurrentLocation: LngLat;

  constructor(
    private messageService: MessageService,
    private locationService: LocationService) { }

  ngOnInit() {
    this.paginationPage = 0;
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.locationService.getCurrentPosition((position: any) => this.afterGetCurrentLocation(position));
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    this.isLoading = false;
    if (message.messageType === 'SEARCH_EVENTS_SUCCESS') {
      this.paginationPage = message.data.pagination.nextPage;
      let events = message.data.lstEvents.map(
        (data: any) => new Event(data)
      );
      if (!this.events) this.events = events;
      else this.events = this.events.concat(events);
    }
  }

  afterGetCurrentLocation(position: any): void {
    this.userCurrentLocation = new LngLat(position.location.lng, position.location.lat);
    this.isLoading = true;
    this.sendMessageToGetNewsFeed();
  }

  sendMessageToGetNewsFeed(): void {
    let apiPackage = new GetEvents()
      .setEventType([])
      .setStatus(['PL'])
      .setCoordinate(this.userCurrentLocation)
      .setRadius(0)
      .setPagination(SEARCH_PAGINATION.ITEM_PER_PAGE_EVENT_TINE_LINE, this.paginationPage);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  loadMoreEvent() {
    if (this.paginationPage > -1) {
      this.isLoading = true;
      this.sendMessageToGetNewsFeed();
    }
  }

}
