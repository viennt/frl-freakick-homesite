import { User } from '../models/User';
import { Court } from '../models/Court';
import { Package } from './Package';

/**
 * Jira ticket:           GLD-512 (https://freakick.atlassian.net/browse/GLD-512)
 * API Endpoint:          ADD_RATING_BRANCH
 * Success message type:  ADD_RATING_BRANCH_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'ADD_RATING_BRANCH';

/**
 * Package Class
 * Get all group
 *
 * Usage:
 *  - Import package:
 *    import { AddRatingBranch } from './AddRatingBranch';
 *  - Create new instance:
 *    let apiPackage = new AddRatingBranch();
 */
export class AddRatingBranch extends Package {
    public partnerBranchId: number;
    public rating: number;
    public comment: string;

    constructor() {
        super(API_ENDPOINT);
    }

    public setBranch(branch: Court): AddRatingBranch {
        this.partnerBranchId = branch.id;
        return this;
    }

    public setRating(rating: number): AddRatingBranch {
        this.rating = Number(rating);
        return this;
    }

    public setComment(comment: string): AddRatingBranch {
        this.comment = String(comment);
        return this;
    }
}
