import { Package } from './Package';

/**
 * Jira ticket:           FKE-76 (https://freakick.atlassian.net/browse/FKE-76)
 * API Endpoint:          GET_EVENT_DETAIL
 * Success message type:  GET_EVENT_DETAIL_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'GET_EVENT_DETAIL';

export class GetEventInfo extends Package {
    private eventId: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setEventId(branchId: number): GetEventInfo {
        this.eventId = Number(branchId);
        return this;
    }
}
