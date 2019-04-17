import { Sport } from '../models/Sport';
import { Court } from '../models/Court';

import { Package } from './Package';

/**
 * Jira ticket:           GLD-542 (https://freakick.atlassian.net/browse/GLD-542)
 * API Endpoint:          SEARCH_AVAILABLE_FIELD_ON_TIME_AND_COURT
 * Success message type:  SEARCH_AVAILABLE_FIELD_ON_TIME_AND_COURT_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'SEARCH_AVAILABLE_FIELD_ON_TIME_AND_COURT';

/**
 * Package Class
 * Search Available Field On Time And Court
 *
 *
 * Usage:
 *  - Import package:
 *    import { SearchAvailableFieldOnTimeAndCourt } from './SearchAvailableFieldOnTimeAndCourt';
 *  - Create new instance:
 *    let apiPackage = new SearchAvailableFieldOnTimeAndCourt(...);
 */
export class SearchAvailableFieldOnTimeAndCourt extends Package {
    private time: number;
    private sportId: number;
    private courtId: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setTime(time: number): SearchAvailableFieldOnTimeAndCourt {
        this.time = Number(time);
        return this;
    }

    public setSport(sport: Sport): SearchAvailableFieldOnTimeAndCourt {
        this.sportId = Number(sport.sportId);
        return this;
    }

    public setCourt(court: Court): SearchAvailableFieldOnTimeAndCourt {
        this.courtId = Number(court.id);
        return this;
    }
}
