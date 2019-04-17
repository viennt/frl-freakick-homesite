import { Component, OnInit, OnDestroy, Input } from '@angular/core';

/**
 * service
 */
import { MessageService } from '../../../../services/message.service';

/**
 * packages
 */
import { GetReviewOfBranch } from '../../../../packages/GetReviewOfBranch';

/**
 * models
 */
import { Court } from '../../../../models/Court';

@Component({
  moduleId: module.id,
  selector: 'frk-show-review',
  templateUrl: 'show-review.component.html',
  styleUrls: ['show-review.component.css']
})
export class ShowReviewComponent implements OnInit, OnDestroy {

  @Input() branch: Court;
  @Input() shortList: boolean;

  private messageSub: any;

  private reviews: any[];
  private pagination: any;
  private isWaitingForData: boolean;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.isWaitingForData = false;
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.sendMessageToGetReviews(0);
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'REQUEST_ERROR':
        console.warn(message.data);
        break;
      case 'GET_REVIEWS_OF_BRANCH_SUCCESS':
        if (!this.isWaitingForData) break;
        this.isWaitingForData = false;
        if (message.data.lstRatings) {
          this.reviews = message.data.lstRatings
            .filter((reviewData: any) => reviewData !== null);
        }
        this.pagination = message.data.pagination;
    }
  }

  sendMessageToGetReviews(page: number): void {
    let apiPackage = new GetReviewOfBranch()
      .setBranch(this.branch);
    if (this.shortList) apiPackage.setPagination(2, 0);
    else apiPackage.setPagination(10, page);
    this.isWaitingForData = true;
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  onClickPagination(page: number) {
    this.sendMessageToGetReviews(page);
  }

  onOpenReviewsModal(): any {
    jQuery('#branchReviewsModal').modal('show');
  }
}
