import { Package } from './Package';

/**
 * Jira ticket:           GLD-122 (https://freakick.atlassian.net/browse/GLD-122)
 * API Endpoint:          FIND_STATE_BY_COUNTRY
 * Success message type:  STATE_LST
 * Error message type:    .
 */
const API_ENDPOINT = 'FIND_STATE_BY_COUNTRY';

export class GetStatesByCountry extends Package {
  private countryId: number;

  constructor() {
    super(API_ENDPOINT);
  }

  public setCountryId(countryId: number): GetStatesByCountry {
    this.countryId = countryId;
    return this;
  }
}
