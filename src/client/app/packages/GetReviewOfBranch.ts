import { Court } from '../models/Court';
import { Package } from './Package';

/**
 * Jira ticket:           FKE-39 (https://freakick.atlassian.net/browse/FKE-39)
 * API Endpoint:          GET_REVIEWS_OF_BRANCH
 * Success message type:  GET_REVIEWS_OF_BRANCH_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'GET_REVIEWS_OF_BRANCH';

/**
 * Usage:
 *  - Import package:
 *    import { GetReviewOfBranch } from './GetReviewOfBranch';
 *  - Create new instance:
 *    let apiPackage = new GetReviewOfBranch();
 */
export class GetReviewOfBranch extends Package {
    public branchId: number;
    private perPage: number;
    private page: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setBranch(branch: Court): GetReviewOfBranch {
        this.branchId = branch.id;
        return this;
    }

    public setPagination(perPage: number, page: number): GetReviewOfBranch {
        this.perPage = perPage;
        this.page = page;
        return this;
    }
}
