import { Package } from '../Package';

/**
 * Jira ticket:
 * API Endpoint:          MAKE_PAYMENT_PAYPAL
 * Success message type:  MAKE_PAYMENT_PAYPAL_SUCCESS
 * Error message type:    REQUEST_ERROR
 */
const API_ENDPOINT = 'MAKE_PAYMENT_PAYPAL';

export class MakePaymentPaypal extends Package {
  private lstProduct: {productId: number, productType: string}[];
  private saleOffCode: string;

  constructor() {
    super(API_ENDPOINT);
    this.lstProduct = [];
    this.saleOffCode = '';
  }

  public addProducts(productId: number, productType: string): MakePaymentPaypal {
    this.lstProduct.push({productId: productId, productType: productType});
    return this;
  }

  public setProducts(products: {productId: number, productType: string}[]): MakePaymentPaypal {
    this.lstProduct = products;
    return this;
  }

  public setSaleOffCode(saleOffCode: string): MakePaymentPaypal {
    this.saleOffCode = saleOffCode;
    return this;
  }

}
