import { Sport } from '../models/Sport';
import { City } from '../models/City';

import { Package } from './Package';

/**
 * Jira ticket:           BKN-8 (https://freakick.atlassian.net/browse/BKN-8)
 * API Endpoint:          GET_AVAILABLE_FACILITIES
 * Success message type:  GET_AVAILABLE_FACILITIES_SUCCESS
 * Error message type:    .
 *
 */
const API_ENDPOINT = 'GET_AVAILABLE_FACILITIES';
/**
 * Package Class
 * Search Available Class For Player
 *
 * Usage:
 *  - Import package:
 *    import { GetAvailableFacilities } from './GetAvailableFacilities';
 *  - Create new instance:
 *    let apiPackage = new GetAvailableFacilities(...);
 */
export class GetAvailableFacilities extends Package {
    private keyWord: string;
    private categories: number[];
    private cityId: number;
    private perPage: number;
    private page: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setKeyWord(keyWord: string): GetAvailableFacilities {
        this.keyWord = keyWord;
        return this;
    }

    public setSports(sports: Sport[]): GetAvailableFacilities {
        this.categories = sports.map((sport: Sport) => sport.sportId);
        return this;
    }

    public setCity(city: City): GetAvailableFacilities {
        this.cityId = city.cityId;
        return this;
    }

    public setPagination(perPage: number, page: number): GetAvailableFacilities {
        this.perPage = perPage;
        this.page = page;
        return this;
    }
}
