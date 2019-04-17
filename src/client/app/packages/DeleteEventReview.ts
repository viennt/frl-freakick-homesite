import { Package } from './Package';

/**
 * Jira ticket:           FKE-54 (https://freakick.atlassian.net/browse/FKE-54)
 * API Endpoint:          DELETE_EVENT_REVIEW
 * Success message type:  DELETE_EVENT_REVIEW_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'DELETE_EVENT_REVIEW';

export class DeleteEventReview extends Package {
    private reviewId: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setReviewId(reviewId: number): DeleteEventReview {
        this.reviewId = reviewId;
        return this;
    }
}
