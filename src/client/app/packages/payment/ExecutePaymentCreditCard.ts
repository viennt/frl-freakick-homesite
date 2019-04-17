import { Package } from '../Package';

/**
 * Jira ticket:
 * API Endpoint:          MAKE_PAYMENT_PAYPAL_CREDIT_CARD
 * Success message type:  MAKE_PAYMENT_PAYPAL_CREDIT_CARD_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'MAKE_PAYMENT_PAYPAL_CREDIT_CARD';

export class ExecutePaymentCreditCard extends Package {
  private billingAddress: {
    cityName: string,
    countryCode: string,
    lineAddress: string,
    postalCode: string,
    state: string
  };
  private creditCard: {
    cvv2: number,
    expiredMonth: number,
    expiredYear: number,
    firstName: string,
    lastName: string,
    creditCardNumber: number,
    creditCardType: string
  };
  private lstProduct: {productId: number, productType: string}[];
  private saleOffCode: string;

  constructor() {
    super(API_ENDPOINT);
    this.lstProduct = [];
    this.saleOffCode = '';
  }

  public setBillingAddress(data: any): ExecutePaymentCreditCard {
    this.billingAddress = {
      cityName: data.city.cityName,
      countryCode: data.countryCode,
      lineAddress: data.lineAddress,
      postalCode: data.postalCode,
      state: data.state.stateName
    };
    return this;
  }

  public setCreditCard(data: any): ExecutePaymentCreditCard {
    this.creditCard = {
      cvv2: data.cvc,
      expiredMonth: Number(data.expiration.substring(0, data.expiration.indexOf('/')).trim()),
      expiredYear: Number(data.expiration.split('/').pop().trim()),
      firstName: data.firstName,
      lastName: data.lastName,
      creditCardNumber: data.cardNumber,
      creditCardType: data.cardType,
    }
    return this;
  }

  public addProducts(productId: number, productType: string): ExecutePaymentCreditCard {
    this.lstProduct.push({productId: productId, productType: productType});
    return this;
  }

  public setProducts(products: {productId: number, productType: string}[]): ExecutePaymentCreditCard {
    this.lstProduct = products;
    return this;
  }

  public setSaleOffCode(saleOffCode: string): ExecutePaymentCreditCard {
    this.saleOffCode = saleOffCode;
    return this;
  }
}
