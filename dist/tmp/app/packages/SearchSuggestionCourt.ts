import { Package } from './Package';

/**
 * Package Class
 * Search Suggestion Court
 *
 * Jira ticket:           GLD-538 (https://freakick.atlassian.net/browse/GLD-538)
 * API Endpoint:          SEARCH_SUGGESTION_COURT
 * Success message type:  SEARCH_SUGGESTION_COURT_SUCCESS
 * Error message type:    .
*/
const API_ENDPOINT = 'SEARCH_SUGGESTION_COURT';

export class SearchSuggestionCourt extends Package {
  private keyWord: string;

  constructor() {
    super(API_ENDPOINT);
  }

  setKeyWord(keyWord: string): SearchSuggestionCourt {
    this.keyWord = keyWord;
    return this;
  }
}
