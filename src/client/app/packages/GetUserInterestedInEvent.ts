import { Package } from './Package';

/**
 * Jira ticket:           FKE-60 (https://freakick.atlassian.net/browse/FKE-60)
 * API Endpoint:          GET_USER_INTERESTED_IN_EVENT
 * Success message type:  GET_USER_INTERESTED_IN_EVENT_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'GET_USER_INTERESTED_IN_EVENT';

export class GetUserInterestedInEvent extends Package {
    private eventId: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setEventId(eventId: number): GetUserInterestedInEvent {
        this.eventId = Number(eventId);
        return this;
    }
}
