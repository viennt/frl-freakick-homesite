import { TrainingClass } from '../models/TrainingClass';
import { Package } from './Package';

/**
 * Jira ticket:           BKN-11 (https://freakick.atlassian.net/browse/BKN-11)
 * API Endpoint:          BOOK_GUEST_TICKET_FOR_CLASS
 * Success message type:  BOOK_GUEST_TICKET_FOR_CLASS_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'BOOK_GUEST_TICKET_FOR_CLASS';

/**
 * Package Class
 * Book guest ticket for class
 *
 * Usage:
 *  - Import package:
 *    import { BookGuestTicketForClass } from './BookGuestTicketForClass';
 *  - Create new instance:
 *    let apiPackage = new BookGuestTicketForClass(trainingClass, when, quantity);
 */
export class BookGuestTicketForClass extends Package {
  private trainingClassId: number;
  private time: number;
  private quantity: number;

  constructor() {
    super(API_ENDPOINT);
  }

  public setTrainingClass(trainingClass: TrainingClass): BookGuestTicketForClass {
    this.trainingClassId = Number(trainingClass.classId);
    return this;
  }

  public setTime(time: number): BookGuestTicketForClass {
    this.time = Number(time);
    return this;
  }

  public setQuantity(quantity: number): BookGuestTicketForClass {
    this.quantity = Number(quantity);
    return this;
  }
}
