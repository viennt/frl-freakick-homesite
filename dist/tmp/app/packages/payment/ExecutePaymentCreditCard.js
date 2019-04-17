"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('../Package');
var API_ENDPOINT = 'MAKE_PAYMENT_PAYPAL_CREDIT_CARD';
var ExecutePaymentCreditCard = (function (_super) {
    __extends(ExecutePaymentCreditCard, _super);
    function ExecutePaymentCreditCard() {
        _super.call(this, API_ENDPOINT);
        this.lstProduct = [];
        this.saleOffCode = '';
    }
    ExecutePaymentCreditCard.prototype.setBillingAddress = function (data) {
        this.billingAddress = {
            cityName: data.city.cityName,
            countryCode: data.countryCode,
            lineAddress: data.lineAddress,
            postalCode: data.postalCode,
            state: data.state.stateName
        };
        return this;
    };
    ExecutePaymentCreditCard.prototype.setCreditCard = function (data) {
        this.creditCard = {
            cvv2: data.cvc,
            expiredMonth: Number(data.expiration.substring(0, data.expiration.indexOf('/')).trim()),
            expiredYear: Number(data.expiration.split('/').pop().trim()),
            firstName: data.firstName,
            lastName: data.lastName,
            creditCardNumber: data.cardNumber,
            creditCardType: data.cardType,
        };
        return this;
    };
    ExecutePaymentCreditCard.prototype.addProducts = function (productId, productType) {
        this.lstProduct.push({ productId: productId, productType: productType });
        return this;
    };
    ExecutePaymentCreditCard.prototype.setProducts = function (products) {
        this.lstProduct = products;
        return this;
    };
    ExecutePaymentCreditCard.prototype.setSaleOffCode = function (saleOffCode) {
        this.saleOffCode = saleOffCode;
        return this;
    };
    return ExecutePaymentCreditCard;
}(Package_1.Package));
exports.ExecutePaymentCreditCard = ExecutePaymentCreditCard;
