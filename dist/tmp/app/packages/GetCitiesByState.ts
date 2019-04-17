import { Package } from './Package';

/**
 * Jira ticket:           GLD-123 (https://freakick.atlassian.net/browse/GLD-123)
 * API Endpoint:          FIND_CITY_BY_STATE
 * Success message type:  CITY_LST
 * Error message type:    .
 */
const API_ENDPOINT = 'FIND_CITY_BY_STATE';

export class GetCitiesByState extends Package {
  private stateId: number;

  constructor() {
    super(API_ENDPOINT);
  }

  public setStateId(stateId: number): GetCitiesByState {
    this.stateId = stateId;
    return this;
  }
}
