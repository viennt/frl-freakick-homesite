import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';

/**
 * services
 */
import { MessageService } from '../../../../services/message.service';
import { AuthenticationService } from '../../../../services/authentication.service';

/**
 * models
 */
import { ButtonState } from '../../../../models/ButtonState';

/**
 * packages
 */
import { UpdateRatingBranch } from '../../../../packages/UpdateRatingBranch';
import { DeleteRatingBranch } from '../../../../packages/DeleteRatingBranch';

@Component({
  moduleId: module.id,
  selector: 'frk-update-review-branch',
  templateUrl: 'update-review.component.html',
  styleUrls: ['update-review.component.css']
})
export class UpdateReviewBranchComponent implements OnInit, OnDestroy {

  @Input() userReviewData: { ratingId: string, userId: number, partnerBranchId: number, rating: number, comment: string };
  @Output() success: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  public messageSub: any;

  public userReviewStarTmp: number;
  public userReviewStar: number;
  public userReviewComment: string;

  public submitUpdateRatingState: ButtonState = new ButtonState();
  public submitDeleteRatingState: ButtonState = new ButtonState();

  constructor(private router: Router,
              private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
    this.userReviewStarTmp = this.userReviewData.rating;
    this.userReviewStar = this.userReviewData.rating;
    this.userReviewComment = this.userReviewData.comment;
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'REQUEST_ERROR':
        console.warn(message.data);
        break;
      case 'UPDATE_RATING_BRANCH_SUCCESS':
        this.submitUpdateRatingState.finish();
        this.submitDeleteRatingState.ready();
        this.success.emit();
        break;
      case 'DELETE_RATING_BRANCH_SUCCESS':
        this.submitUpdateRatingState.ready();
        this.submitDeleteRatingState.finish();
        this.success.emit();
    }
  }

  sendMessageToUpdateRateBranch(): void {
    let apiPackage = new UpdateRatingBranch()
      .setRatingId(this.userReviewData.ratingId)
      .setRating(this.userReviewStar)
      .setComment(this.userReviewComment || '');
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  sendMessageToDeleteRateBranch(): void {
    let apiPackage = new DeleteRatingBranch()
      .setRatingId(this.userReviewData.ratingId);
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  onSubmitUpdateReviewBranch(): any {
    if (this.authService.isLoggedIn()) {
      this.submitUpdateRatingState.loading();
      this.submitDeleteRatingState.notReady();
      this.sendMessageToUpdateRateBranch();
    } else {
      this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    }
  }

  onSubmitDeleteReviewBranch(): any {
    if (this.authService.isLoggedIn()) {
      this.submitUpdateRatingState.notReady();
      this.submitDeleteRatingState.loading();
      this.sendMessageToDeleteRateBranch();
    } else {
      this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    }
  }

  onCloseReviewBranch(): any {
    this.close.emit();
  }
}
