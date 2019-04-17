import { Package } from './Package';

/**
 * Jira ticket:           FKE-54 (https://freakick.atlassian.net/browse/FKE-54)
 * API Endpoint:          COMMENT_AN_EVENT
 * Success message type:  COMMENT_EVENT_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'COMMENT_AN_EVENT';

export class ReviewEvent extends Package {
    private eventId: number = -1;
    private scheduledClassId: number = -1;
    private matchupId: number = -1;
    private guildGameId: string = null;
    private content: string;

    constructor() {
        super(API_ENDPOINT);
    }

    public setEventId(eventId: number): ReviewEvent {
        this.eventId = eventId;
        return this;
    }

    public setContent(content: string): ReviewEvent {
        this.content = content;
        return this;
    }
}
