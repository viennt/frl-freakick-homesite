import { Package } from './Package';

/**
 * Jira ticket:           GLD-92 (https://freakick.atlassian.net/browse/GLD-92)
 * API Endpoint:          GET_COUNTRIES
 * Success message type:  COUNTRIES_LST
 * Error message type:    .
 */
const API_ENDPOINT = 'GET_COUNTRIES';

export class GetCountries extends Package {

  constructor() {
    super(API_ENDPOINT);
  }
}
