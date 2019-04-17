import { Component, OnInit, Input, OnDestroy } from '@angular/core';

/**
 * services
 */
import { HelpService } from '../../../../services/help.service';
import { MessageService } from '../../../../services/message.service';
import { AuthenticationService } from '../../../../services/authentication.service';

/**
 * packages
 */
import { ReviewEvent } from '../../../../packages/ReviewEvent';
import { DeleteEventReview } from '../../../../packages/DeleteEventReview';
import { GetReviewsOfEvent } from '../../../../packages/GetReviewsOfEvent';

/**
 * modules
 */
import { User } from '../../../../models/User';
import { Event } from '../../../../models/Event';

import { DATE_TIME } from '../../../../constants';

@Component({
  moduleId: module.id,
  selector: 'ev-reviews',
  templateUrl: 'reviews.component.html',
  styleUrls: ['../event-detail.component.css', 'reviews.component.css']
})
export class ReviewsComponent implements OnInit, OnDestroy {
  public messageSub: any;

  @Input() event: Event;

  public authenticatedUser: User;

  public listReviews: any;
  public userReview: any;
  public userComment: string;

  public isShownReviewForm: boolean;

  constructor(private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.listReviews = [];
    this.userComment = '';
    this.isShownReviewForm = true;
    this.authenticatedUser = this.authService.getAuthenticatedUser();
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.sendMessageToGetListReviews();
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'GET_COMMENT_OF_EVENT_SUCCESS':
        this.listReviews = message.data.lstResult
          .filter((data: any) => data.user.id !== this.authenticatedUser.userId)
          .map((data: any) => {
            data.user.logo = HelpService.getUserLogo(data.user.logo);
            data.updateDate = moment.utc(data.updateDate, DATE_TIME.SERVER_FORMAT).local().fromNow();
            return data;
          });

        // Parse user's review
        if (typeof message.data.userReview !== 'undefined' && message.data.userReview !== null) {
          this.isShownReviewForm = false;
          this.userReview = message.data.userReview;
          this.userComment = this.userReview.content;
          this.userReview.user.logo = HelpService.getUserLogo(this.userReview.user.logo);
          this.userReview.updateDate = moment.utc(this.userReview.updateDate, DATE_TIME.SERVER_FORMAT).local().fromNow();
        }
        break;
      case 'DELETE_EVENT_REVIEW_SUCCESS':
      case 'COMMENT_EVENT_SUCCESS':
        this.sendMessageToGetListReviews();
        break;
      case 'REQUEST_ERROR':
        this.listReviews = [];
        console.error(message.data.message);
    }
  }

  sendMessageToGetListReviews() {
    let apiPackage = new GetReviewsOfEvent()
      .setEventId(this.event.id)
      .setPagination(20, 0);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  postComment() {
    let apiPackage = new ReviewEvent()
      .setEventId(this.event.id)
      .setContent(this.userComment);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  editReview() {
    this.isShownReviewForm = true;
  }

  deleteReview(review: any) {
    let apiPackage = new DeleteEventReview()
      .setReviewId(review.id);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  updateUserImage(image: string) {
    image = './assets/images/default/user_logo.png';
  }
}
