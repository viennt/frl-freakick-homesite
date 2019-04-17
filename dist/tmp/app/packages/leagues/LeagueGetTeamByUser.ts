import { Package } from '../Package';

/**
 * Jira ticket:           FM-74 (https://freakick.atlassian.net/browse/FM-74)
 * API Endpoint:          LEAGUE_GET_TEAMS_BY_USER
 * Success message type:  LEAGUE_GET_TEAMS_BY_USER_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'LEAGUE_GET_TEAMS_BY_USER';

export class LeagueGetTeamByUser extends Package {
  public page: number;
  public perPage: number;

  constructor() {
    super(API_ENDPOINT);
  }

  public setPagination(perPage: number, page: number): LeagueGetTeamByUser {
    this.perPage = perPage;
    this.page = page;
    return this;
  }

}
