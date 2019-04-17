import { Package } from '../Package';

/**
 * Jira ticket:           FRK-??? (https://freakick.atlassian.net/browse/FRK-???)
 * API Endpoint:          LEAGUE_SEARCH_USER_COMPETITIONS_WITH_SHORT_MODEL
 * Success message type:  LEAGUE_SEARCH_USER_COMPETITIONS_WITH_SHORT_MODEL_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'LEAGUE_SEARCH_USER_COMPETITIONS_WITH_SHORT_MODEL';

export class LeagueSearchUserCompetitionsWithShortModel extends Package {
  constructor() {
    super(API_ENDPOINT);
  }
}
