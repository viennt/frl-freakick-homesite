import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../../../models/Event';
import { MessageService } from '../../../../../services/message.service';
import { LikeOrUnlikeAnEvent } from '../../../../../packages/UpdateInterested';

@Component({
  moduleId: module.id,
  selector: 'app-template-time-line-card-action',
  templateUrl: 'time-line-card-action.component.html',
  styles: [`
      .meta__item {
          font-size: 14px;
      }
  `]
})
export class TimeLineCardActionComponent implements OnInit {
  @Input() event: Event;

  public isLoadingLikeEvent: boolean;

  private messageSub: any;

  constructor(private messageService: MessageService) {
    //
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(
      message => this.handleMessage(message)
    );
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'LIKE_EVENT_SUCCESS':
        if (message.data.eventLikeMsg.eventId === this.event.id) {
          this.isLoadingLikeEvent = false;
          // this.event.isUserLiked = true;
          this.event.numberOfLikes = this.event.numberOfLikes + 1;
        }
        break;
      case 'UNLIKE_EVENT_SUCCESS':
        if (message.data.eventLikeMsg.eventId === this.event.id) {
          this.isLoadingLikeEvent = false;
          // this.event.isUserLiked = false;
          this.event.numberOfLikes = this.event.numberOfLikes - 1;
        }
        break;
    }
  }

  onLikeEvent() {
    if (this.isLoadingLikeEvent) return;
    this.isLoadingLikeEvent = true;
    let apiPackage = new LikeOrUnlikeAnEvent().setEventId(this.event.id);
    this.messageService.sendMessage(apiPackage.getMessage());
  }
}
