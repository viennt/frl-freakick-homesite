import { Sport } from '../models/Sport';
import { Group } from '../models/Group';
import { Court } from '../models/Court';
import { Package } from './Package';

/**
 * Jira ticket:           BKN-77 (https://freakick.atlassian.net/browse/BKN-77)
 * API Endpoint:          SEARCH_AVAILABLE_CLASS_BY_OWNER_ON_SPECIFIC_CENTER
 * Success message type:  SEARCH_AVAILABLE_CLASS_BY_OWNER_ON_SPECIFIC_CENTER_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'SEARCH_AVAILABLE_CLASS_BY_OWNER_ON_SPECIFIC_CENTER';

/**
 * Package Class
 * Search Available Class By Owner On Specific Center
 *
 *
 * Usage:
 *  - Import package:
 *    import { SearchAvailableClassByOwnerOnSpecificCenter } from './SearchAvailableClassByOwnerOnSpecificCenter';
 *  - Create new instance:
 *    let apiPackage = new SearchAvailableClassByOwnerOnSpecificCenter(...);
 */
export class SearchAvailableClassByOwnerOnSpecificCenter extends Package {
    private keyWord: string;
    private categories: number[];
    private groups: number[];
    private branchId: number;
    private perPage: number;
    private page: number;
    private from: number = 1483203600000;
    private to: number = 1609437599000;

    constructor() {
        super(API_ENDPOINT);
    }

    public setKeyWord(keyWord: string): SearchAvailableClassByOwnerOnSpecificCenter {
        this.keyWord = String(keyWord);
        return this;
    }

    public setSports(sports: Sport[]): SearchAvailableClassByOwnerOnSpecificCenter {
        this.categories = sports.map((sport: Sport) => sport.sportId);
        return this;
    }

    public setGroups(groups: Group[]): SearchAvailableClassByOwnerOnSpecificCenter {
        this.groups = groups.map((group: Group) => group.groupId);
        return this;
    }

    public setCourt(court: Court): SearchAvailableClassByOwnerOnSpecificCenter {
        this.branchId = Number(court.id);
        return this;
    }

    public setPagination(perPage: number, page: number): SearchAvailableClassByOwnerOnSpecificCenter {
        this.perPage = perPage;
        this.page = page;
        return this;
    }
}
