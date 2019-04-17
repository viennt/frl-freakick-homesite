import { Sport } from '../models/Sport';
import { City } from '../models/City';
import { Package } from './Package';

/**
 * Jira ticket:           GLD-391 (https://freakick.atlassian.net/browse/GLD-391)
 * API Endpoint:          GET_AVAILABLE_FIELDS_ON_DATE
 * Success message type:  GET_AVAILABLE_FIELDS_ON_DATE_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'GET_AVAILABLE_FIELDS_ON_DATE';

/**
 * Package Class
 * Get Available Fields On Date
 *
 * Usage:
 *  - Import package:
 *    import { GetAvailableFieldsOnDate } from './GetAvailableFieldsOnDate';
 *  - Create new instance:
 *    let apiPackage = new GetAvailableFieldsOnDate(...);
 */
export class GetAvailableFieldsOnDate extends Package {
    private time: number;
    private sportId: number;
    private cityId: number;
    private page: number;
    private perPage: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setTime(time: number): GetAvailableFieldsOnDate {
        this.time = Number(time);
        return this;
    }

    public setSport(sport: Sport): GetAvailableFieldsOnDate {
        this.sportId = sport.sportId;
        return this;
    }

    public setCity(city: City): GetAvailableFieldsOnDate {
        this.cityId = city.cityId;
        return this;
    }

    public setPagination(perPage: number, page: number): GetAvailableFieldsOnDate {
        this.perPage = perPage;
        this.page = page;
        return this;
    }
}
