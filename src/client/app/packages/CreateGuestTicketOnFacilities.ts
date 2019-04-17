import { Facility } from '../models/Facility';
import { Package } from './Package';

/**
 * Jira ticket:           BKN-9 (https://freakick.atlassian.net/browse/BKN-9)
 * API Endpoint:          CREATE_GUEST_TICKET_ON_FACILITIES
 * Success message type:  CREATE_GUEST_TICKET_ON_FACILITIES_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'CREATE_GUEST_TICKET_ON_FACILITIES';

/**
 * Package Class
 * Create guest ticket on facilities
 *
 *
 * Usage:
 *  - Import package:
 *    import { CreateGuestTicketOnFacilities } from './CreateGuestTicketOnFacilities';
 *  - Create new instance:
 *    let apiPackage = new CreateGuestTicketOnFacilities(facility, when, quantity);
 */
export class CreateGuestTicketOnFacilities extends Package {
    private facilityId: number;
    private when: number;
    private quantity: number;

    constructor() {
        super(API_ENDPOINT);
    }

    public setFacility(facility: Facility): CreateGuestTicketOnFacilities {
        this.facilityId = Number(facility.fieldId);
        return this;
    }

    public setTime(when: number): CreateGuestTicketOnFacilities {
        this.when = Number(when);
        return this;
    }

    public setQuantity(quantity: number): CreateGuestTicketOnFacilities {
        this.quantity = Number(quantity);
        return this;
    }
}
