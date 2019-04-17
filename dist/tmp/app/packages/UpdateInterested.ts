import { Package } from './Package';

/**
 * Jira ticket:           FKE-7 (https://freakick.atlassian.net/browse/FKE-7)
 * API Endpoint:          USER_LIKE_OR_UNLIKE_AN_EVENT
 * Success message type:  LIKE_EVENT_SUCCESS OR UNLIKE_EVENT_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'USER_LIKE_OR_UNLIKE_AN_EVENT';

export class LikeOrUnlikeAnEvent extends Package {
    private eventId: number = -1;
    private scheduledClassId: number = -1;
    private matchupId: number = -1;
    private guildGameId: string = null;

    constructor() {
        super(API_ENDPOINT);
    }

    public setEventId(eventId: number): LikeOrUnlikeAnEvent {
        this.eventId = Number(eventId);
        return this;
    }
}
