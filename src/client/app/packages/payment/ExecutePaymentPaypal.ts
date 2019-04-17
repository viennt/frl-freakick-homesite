import { Package } from '../Package';

/**
 * Jira ticket:
 * API Endpoint:          EXECUTE_PAYMENT_PAYPAL
 * Success message type:  EXECUTE_PAYMENT_PAYPAL_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'EXECUTE_PAYMENT_PAYPAL';

export class ExecutePaymentPaypal extends Package {
  private paymentId: string;
  private payerID: string;

  constructor() {
    super(API_ENDPOINT);
  }

  public setPaymentId(paymentId: string): ExecutePaymentPaypal {
    this.paymentId = paymentId;
    return this;
  }

  public setPayerID(payerID: string): ExecutePaymentPaypal {
    this.payerID = payerID;
    return this;
  }
}
