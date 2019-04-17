import { Component, Input, OnInit, OnDestroy } from '@angular/core';

/**
 * services
 */
import { MessageService } from '../../../../services/message.service';
import { HelpService } from '../../../../services/help.service';

/**
 * packages
 */
import { GetUserInterestedInEvent } from '../../../../packages/GetUserInterestedInEvent';

/**
 * modules
 */
import { Event } from '../../../../models/Event';
import { User } from '../../../../models/User';

@Component({
  moduleId: module.id,
  selector: 'table-interested-user',
  templateUrl: 'interested-user.component.html',
  styleUrls: ['../event-detail.component.css', 'interested-user.component.css']
})
export class InterestedUser implements OnInit, OnDestroy {

  @Input() eventId: number;
  public messageSub: any;
  public event: Event;
  public lstUser: User[] = [];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.sendMessageToGetUserInterestedInEvent();
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'GET_USER_INTERESTED_IN_EVENT_SUCCESS':
        this.lstUser = message.data.lstUser.map((data: any) => {
          data.logo = HelpService.getUserLogo(data.logo);
          return data;
        });
        break;
      case 'REQUEST_ERROR':
        console.error(message.data.message);
    }
  }

  sendMessageToGetUserInterestedInEvent(): void {
    if (typeof this.eventId === 'undefined') return;
    let apiPackage = new GetUserInterestedInEvent().setEventId(this.eventId);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  updateImage(image: string) {
    image = './assets/images/default/event.png';
  }
}
