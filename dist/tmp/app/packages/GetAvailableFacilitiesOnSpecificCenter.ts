import { Sport } from '../models/Sport';
import { Court } from '../models/Court';
import { Package } from './Package';

/**
 * Jira ticket:           BKN-131 (https://freakick.atlassian.net/browse/BKN-131)
 * API Endpoint:          GET_AVAILABLE_FACILITIES_ON_SPECIFIC_CENTER
 * Success message type:  GET_AVAILABLE_FACILITIES_ON_SPECIFIC_CENTER_SUCCESS
 * Error message type:    .
 *
 */
const API_ENDPOINT = 'GET_AVAILABLE_FACILITIES_ON_SPECIFIC_CENTER';

/**
 * Package Class
 * Get Available Facilities On Specific Center
 *
 * Usage:
 *  - Import package:
 *    import { GetAvailableFacilitiesOnSpecificCenter } from './GetAvailableFacilitiesOnSpecificCenter';
 *  - Create new instance:
 *    let apiPackage = new GetAvailableFacilitiesOnSpecificCenter(...);
 */
export class GetAvailableFacilitiesOnSpecificCenter extends Package {
    private keyWord: string;
    private categories: number[];
    private branchId: number;
    private perPage: number;
    private page: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setKeyWord(keyWord: string): GetAvailableFacilitiesOnSpecificCenter {
        this.keyWord = keyWord;
        return this;
    }

    public setSports(sports: Sport[]): GetAvailableFacilitiesOnSpecificCenter {
        this.categories = sports.map((sport: Sport) => sport.sportId);
        return this;
    }

    public setCourt(court: Court): GetAvailableFacilitiesOnSpecificCenter {
        this.branchId = Number(court.id);
        return this;
    }

    public setPagination(perPage: number, page: number): GetAvailableFacilitiesOnSpecificCenter {
        this.perPage = perPage;
        this.page = page;
        return this;
    }
}
