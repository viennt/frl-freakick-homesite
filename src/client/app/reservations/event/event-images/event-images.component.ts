import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * services
 */
import { MessageService } from '../../../services/message.service';
import { AuthenticationService } from '../../../services/authentication.service';

/**
 * packages
 */
import { GetEventInfo } from '../../../packages/GetEventInfo';

/**
 * modules
 */
import { Event } from '../../../models/Event';

@Component({
  moduleId: module.id,
  selector: 'ev-event-images',
  templateUrl: 'event-images.component.html',
  styleUrls: ['../event-detail/event-detail.component.css', 'event-images.component.css']
})
export class EventImagesComponent implements OnInit, OnDestroy {
  public routeSub: any;
  public messageSub: any;

  public eventIdParam: number;
  public event: Event;
  public isNotFoundEvent: boolean;
  public selectedImage: string;

  constructor(private route: ActivatedRoute,
              private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => this.handleRoute(params));
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.messageSub.unsubscribe();
  }

  handleRoute(params: any): any {
    this.eventIdParam = +params['id'];
    this.sendMessageToGetEventInfo();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'GET_EVENT_DETAIL_SUCCESS':
        this.event = new Event(message.data.event);
        this.isNotFoundEvent = false;
        break;
      case 'REQUEST_ERROR':
        if ('EVENT_NOT_EXIST' === message.data.errorType) {
          this.isNotFoundEvent = true;
        }
        console.error(message.data.message);
    }
  }

  sendMessageToGetEventInfo(): void {
    if (typeof this.eventIdParam === 'undefined') return;
    let apiPackage = new GetEventInfo().setEventId(this.eventIdParam);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  updateImage(image: string) {
    image = './assets/images/default/event.png';
  }

  showModal(image: string) {
    this.selectedImage = image;
    jQuery('#modal-image-popup').modal('show');
  }

  hideModal() {
    jQuery('#modal-image-popup').modal('hide');
  }
}
