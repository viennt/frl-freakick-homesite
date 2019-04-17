import { Package } from './Package';

/**
 * Jira ticket:           GLD-427 (https://freakick.atlassian.net/browse/GLD-427)
 * API Endpoint:          SEARCH_CITY_BY_NAME_AND_STATE
 * Success message type:  SEARCH_CITY_BY_NAME_AND_STATE_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'SEARCH_CITY_BY_NAME_AND_STATE';

/**
 * Package Class
 * Search city by name and state
 *
 * Usage:
 *  - Import package:
 *    import { SearchCityByNameAndState } from './SearchCityByNameAndState';
 *  - Create new instance:
 *    let apiPackage = new SearchCityByNameAndState(address);
 */
export class SearchCityByNameAndState extends Package {
    private city: string;
    private state: string;
    private country: string;

    constructor() {
        super(API_ENDPOINT);
    }

    public setCityName(cityName: string): SearchCityByNameAndState {
        this.city = String(cityName).trim();
        return this;
    }

    public setStateName(stateName: string): SearchCityByNameAndState {
        this.state = String(stateName).trim();
        return this;
    }

    public setCountryName(countryName: string): SearchCityByNameAndState {
        this.country = String(countryName).trim();
        return this;
    }
}
