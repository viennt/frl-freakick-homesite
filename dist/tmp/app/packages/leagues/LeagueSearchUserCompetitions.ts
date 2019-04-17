import { Package } from '../Package';

/**
 * Jira ticket:           FM-81 (https://freakick.atlassian.net/browse/FM-81)
 * API Endpoint:          LEAGUE_SEARCH_USER_COMPETITIONS
 * Success message type:  LEAGUE_SEARCH_USER_COMPETITIONS_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'LEAGUE_SEARCH_USER_COMPETITIONS';

export class LeagueSearchUserCompetitions extends Package {
  public page: number;
  public perPage: number;
  public keyWord: string;

  constructor() {
    super(API_ENDPOINT);
  }

  public setKeyWord(keyWord: string): LeagueSearchUserCompetitions {
    this.keyWord = keyWord;
    return this;
  }

  public setPagination(perPage: number, page: number): LeagueSearchUserCompetitions {
    this.perPage = perPage;
    this.page = page;
    return this;
  }

}
