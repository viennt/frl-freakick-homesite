import { Package } from './Package';

/**
 * Jira ticket:           GLD-514 (https://freakick.atlassian.net/browse/GLD-514)
 * API Endpoint:          DELETE_RATING_BRANCH
 * Success message type:  DELETE_RATING_BRANCH_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'DELETE_RATING_BRANCH';

/**
 * Package Class
 * Get all group
 *
 * Usage:
 *  - Import package:
 *    import { DeleteRatingBranch } from './DeleteRatingBranch';
 *  - Create new instance:
 *    let apiPackage = new DeleteRatingBranch();
 */
export class DeleteRatingBranch extends Package {
    public ratingId: string;

    constructor() {
        super(API_ENDPOINT);
    }

    public setRatingId(ratingId: string): DeleteRatingBranch {
        this.ratingId = String(ratingId);
        return this;
    }
}
