import { LngLat } from '../models/LngLat';
import { Package } from './Package';

/**
 * Jira ticket:           FKE-227 (https://freakick.atlassian.net/browse/FKE-227)
 * API Endpoint:          SEARCH_EVENTS
 * Success message type:  SEARCH_EVENTS_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'SEARCH_EVENTS';

export class GetEvents extends Package {
    private keyWord: string = ''; // Set '' to search all
    private lstEventType: number[] = []; // Set 0 to search all
    private statusCodes: string[];
    private latitude: number;
    private longitude: number;
    private radiusKm: number;
    private perPage: number;
    private page: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setKeyWord(keyWord: string): GetEvents {
        this.keyWord = keyWord;
        return this;
    }

    public setEventType(lstEventType: number[]): GetEvents {
        this.lstEventType = lstEventType;
        return this;
    }

    public setStatus(codes: string[]): GetEvents {
        this.statusCodes = codes;
        return this;
    }

    public setCoordinate(lngLat: LngLat): GetEvents {
        this.latitude = lngLat.getLat();
        this.longitude = lngLat.getLng();
        return this;
    }

    public setRadius(radius: number): GetEvents {
        this.radiusKm = radius;
        return this;
    }

    public setPagination(perPage: number, page: number): GetEvents {
        this.perPage = perPage;
        this.page = page;
        return this;
    }
}
