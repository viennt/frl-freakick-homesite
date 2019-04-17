import { User } from '../models/User';
import { Court } from '../models/Court';
import { Package } from './Package';

/**
 * Jira ticket:           GLD-521 (https://freakick.atlassian.net/browse/GLD-521)
 * API Endpoint:          GET_USER_RATING_FOR_BRANCH
 * Success message type:  GET_USER_RATING_FOR_BRANCH_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'GET_USER_RATING_FOR_BRANCH';

/**
 * Package Class
 * Get all group
 *
 * Usage:
 *  - Import package:
 *    import { GetRatingBranch } from './GetRatingBranch';
 *  - Create new instance:
 *    let apiPackage = new GetRatingBranch();
 */
export class GetRatingBranch extends Package {
    public branchId: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setBranch(branch: Court): GetRatingBranch {
        this.branchId = branch.id;
        return this;
    }
}
