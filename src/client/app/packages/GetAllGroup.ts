import { Package } from './Package';

/**
 * Jira ticket:           BKN-76 (https://freakick.atlassian.net/browse/BKN-76)
 * API Endpoint:          GET_ALL_GROUP
 * Success message type:  GET_ALL_GROUP_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'GET_ALL_GROUP';

/**
 * Package Class
 * Get all group
 *
 * Usage:
 *  - Import package:
 *    import { GetAllGroup } from './GetAllGroup';
 *  - Create new instance:
 *    let apiPackage = new GetAllGroup();
 */
export class GetAllGroup extends Package {

  constructor() {
    super(API_ENDPOINT);
  }
}
