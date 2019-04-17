import { Sport } from '../models/Sport';
import { Group } from '../models/Group';
import { City } from '../models/City';
import { Package } from './Package';

/**
 * Package Class
 * Search Available Class For Player
 *
 * Jira ticket:           BKN-10 (https://freakick.atlassian.net/browse/BKN-10)
 * API Endpoint:          SEARCH_AVAILABLE_CLASS_FOR_PLAYER
 * Success message type:  SEARCH_AVAILABLE_CLASS_FOR_PLAYER_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'SEARCH_AVAILABLE_CLASS_FOR_PLAYER';

 /**
 * Usage:
 *  - Import package:
 *    import { SearchAvailableClassForPlayer } from './SearchAvailableClassForPlayer';
 *  - Create new instance:
 *    let apiPackage = new SearchAvailableClassForPlayer(...);
 */
export class SearchAvailableClassForPlayer extends Package {
    private keyWord: string;
    private categories: number[];
    private groups: number[];
    private cityId: number;
    private perPage: number;
    private page: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setKeyWord(keyWord: string): SearchAvailableClassForPlayer {
        this.keyWord = keyWord;
        return this;
    }

    public setSports(sports: Sport[]): SearchAvailableClassForPlayer {
        this.categories = sports.map((sport: Sport) => sport.sportId);
        return this;
    }

    public setGroups(groups: Group[]): SearchAvailableClassForPlayer {
        this.groups = groups.map((group: Group) => group.groupId);
        return this;
    }

    public setCity(city: City): SearchAvailableClassForPlayer {
        this.cityId = city.cityId;
        return this;
    }

    public setPagination(perPage: number, page: number): SearchAvailableClassForPlayer {
        this.perPage = perPage;
        this.page = page;
        return this;
    }
}
