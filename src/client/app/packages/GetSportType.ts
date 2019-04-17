import { Package } from './Package';

/**
 * Jira ticket:           BKN-45 (https://freakick.atlassian.net/browse/BKN-45)
 * API Endpoint:          GET_SPORT_TYPE
 * Success message type:  GET_SPORT_TYPE_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'GET_SPORT_TYPE';


/**
 * Package Class
 * Get sport type
 *
 *
 * Usage:
 *  - Import package:
 *    import { GetSportType } from './GetSportType';
 *  - Create new instance:
 *    let apiPackage = new GetSportType();
 */
export class GetSportType extends Package {
  constructor() {
    super(API_ENDPOINT);
  }
}
