import { Package } from './Package';

/**
 * Jira ticket:           FKE-55 (https://freakick.atlassian.net/browse/FKE-55)
 * API Endpoint:          GET_COMMENT_OF_EVENT
 * Success message type:  GET_COMMENT_OF_EVENT_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'GET_COMMENT_OF_EVENT';

export class GetReviewsOfEvent extends Package {
    private eventId: number = -1;
    private scheduledClassId: number = -1;
    private matchupId: number = -1;
    private guildGameId: string = null;
    private perPage: number;
    private page: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setEventId(eventId: number): GetReviewsOfEvent {
        this.eventId = eventId;
        return this;
    }

    public setPagination(perPage: number, page: number): GetReviewsOfEvent {
        this.perPage = perPage;
        this.page = page;
        return this;
    }
}
