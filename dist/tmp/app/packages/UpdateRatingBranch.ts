import { Package } from './Package';

/**
 * Jira ticket:           GLD-513 (https://freakick.atlassian.net/browse/GLD-513)
 * API Endpoint:          UPDATE_RATING_BRANCH
 * Success message type:  UPDATE_RATING_BRANCH_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'UPDATE_RATING_BRANCH';

/**
 * Package Class
 * Get all group
 *
 * Usage:
 *  - Import package:
 *    import { UpdateRatingBranch } from './UpdateRatingBranch';
 *  - Create new instance:
 *    let apiPackage = new UpdateRatingBranch();
 */
export class UpdateRatingBranch extends Package {
    public ratingId: string;
    public rating: number;
    public comment: string;

    constructor() {
        super(API_ENDPOINT);
    }

    public setRatingId(ratingId: string): UpdateRatingBranch {
        this.ratingId = String(ratingId);
        return this;
    }

    public setRating(rating: number): UpdateRatingBranch {
        this.rating = Number(rating);
        return this;
    }

    public setComment(comment: string): UpdateRatingBranch {
        this.comment = String(comment);
        return this;
    }
}
