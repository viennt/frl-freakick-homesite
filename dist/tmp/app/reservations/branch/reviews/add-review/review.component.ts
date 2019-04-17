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
import { Court } from '../../../../models/Court';
import { ButtonState } from '../../../../models/ButtonState';

/**
 * packages
 */
import { AddRatingBranch } from '../../../../packages/AddRatingBranch';

@Component({
  moduleId: module.id,
  selector: 'frk-review-branch',
  templateUrl: 'review.component.html',
  styleUrls: ['review.component.css']
})
export class ReviewBranchComponent implements OnInit, OnDestroy {

  @Input() branch: Court;
  @Output() success: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  public messageSub: any;

  public userReviewStar: number;
  public userReviewComment: string;

  public submitRatingState: ButtonState = new ButtonState();

  constructor(private router: Router,
              private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageSub = this.messageService.messages.subscribe(message => this.handleMessage(message));
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  handleMessage(message: any) {
    switch (message.messageType) {
      case 'REQUEST_ERROR':
        console.warn(message.data);
        break;
      case 'ADD_RATING_BRANCH_SUCCESS':
        this.submitRatingState.finish();
        this.success.emit();
    }
  }

  sendMessageToRateBranch(): void {
    let apiPackage = new AddRatingBranch()
      .setBranch(this.branch)
      .setRating(this.userReviewStar)
      .setComment(this.userReviewComment || '');
    this.messageService.sendMessage(apiPackage.getMessage());
  }

  onSubmitReviewBranch(): any {
    if (this.authService.isLoggedIn()) {
      this.submitRatingState.loading();
      this.sendMessageToRateBranch();
    } else {
      this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    }
  }

  onCloseReviewBranch(): any {
    this.close.emit();
  }
}
