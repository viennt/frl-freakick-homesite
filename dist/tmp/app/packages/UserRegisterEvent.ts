import { Package } from './Package';

/**
 * Jira ticket:           FKE-6 (https://freakick.atlassian.net/browse/FKE-6)
 * API Endpoint:          USER_REGISTER_EVENT
 * Success message type:  USER_REGISTER_EVENT_SUCCESS
 * Error message type:    .
 */
const API_ENDPOINT = 'USER_REGISTER_EVENT';

export class UserRegisterEvent extends Package {
    private eventId: number;
    private quantity: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setEventId(eventId: number): UserRegisterEvent {
        this.eventId = eventId;
        return this;
    }

    public setQuantity(quantity: number): UserRegisterEvent {
        this.quantity = quantity;
        return this;
    }
}
