import { Package } from './Package';

/**
 * Jira ticket:           BKN-52 (https://freakick.atlassian.net/browse/BKN-52)
 * API Endpoint:          GET_BRANCH_INFO
 * Success message type:  GET_BRANCH_INFO_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'GET_BRANCH_INFO';

/**
 * Package Class
 * Get Countries List Package
 *
 * Usage:
 *  - Import package:
 *    import { GetBranchInfo } from './GetBranchInfo';
 *  - Create new instance:
 *    let apiPackage = new GetBranchInfo(branchId);
 */
export class GetBranchInfo extends Package {
    private branchId: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setBranchId(branchId: number): GetBranchInfo {
        this.branchId = Number(branchId);
        return this;
    }
}
