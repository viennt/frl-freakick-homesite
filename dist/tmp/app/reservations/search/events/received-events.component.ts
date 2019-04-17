import { Component, OnInit, OnDestroy, Input, HostBinding,
  trigger, state, style, keyframes, transition, animate } from '@angular/core';

/**
 * services
 */
import { MessageService } from '../../../services/message.service';

/**
 * packages
 */
import { GetEvents } from '../../../packages/GetEvents';

/**
 * models
 */
import { Event } from '../../../models/Event';
import { LngLat } from '../../../models/LngLat';
import { Address } from '../../../models/Address';

import { SEARCH_PAGINATION } from '../../../constants';

@Component({
  moduleId: module.id,
  selector: 'frk-received-events',
  templateUrl: 'received-events.component.html',
  styleUrls: ['received-events.component.css'],
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
export class ReceivedEventsComponent implements OnInit, OnDestroy {
  public messageSub: any;

  @Input() paginationPage: number;
  @Input() keyword: string;
  @Input() userLocation: { timezone: string, address: Address, coordinate: LngLat };

  @HostBinding('@fadeIn') get fadeIn() {
    return 'in';
  }

  public loadingResultData: boolean;

  public receivedEvents: Event[];

  public loadedImage: boolean[];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.getEventsFromServer();
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'REQUEST_INPUT_ERROR':
        this.loadingResultData = false;
        break;
      case 'SEARCH_EVENTS_SUCCESS':
        this.receivedEvents = undefined;
        this.handleReceivedEvent(message.data);
    }
  }

  handleReceivedEvent(data: any): void {
    data.lstEvents = Object.prototype.toString.call(data.lstEvents) !== '[object Array]' ? JSON.parse(data.lstEvents) : data.lstEvents;
    if (data.lstEvents.length === 0) {
      this.loadingResultData = false;
      this.receivedEvents = [];
    } else {
      this.receivedEvents = data.lstEvents
        .filter((facilityData: any) => facilityData !== null)
        .map((data: any) => new Event(data));
    }
  }

  getEventsFromServer(): void {
    this.loadedImage = [];
    this.loadingResultData = true;
    this.sendMessageToGetAvailableEvents();
  }

  sendMessageToGetAvailableEvents(): void {
    let apiPackage = new GetEvents()
      .setKeyWord(this.keyword)
      .setStatus(['PL'])
      .setCoordinate(this.userLocation.coordinate)
      .setRadius(0)
      .setPagination(SEARCH_PAGINATION.ITEM_PER_PAGE, this.paginationPage);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  eventsImageLoaded(): any {
    this.loadedImage.push(true);
    if (this.loadedImage.length >= this.receivedEvents.length) {
      this.loadingResultData = false;
    }
  }

}
