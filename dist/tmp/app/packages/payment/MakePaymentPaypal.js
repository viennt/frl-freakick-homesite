"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('../Package');
var API_ENDPOINT = 'MAKE_PAYMENT_PAYPAL';
var MakePaymentPaypal = (function (_super) {
    __extends(MakePaymentPaypal, _super);
    function MakePaymentPaypal() {
        _super.call(this, API_ENDPOINT);
        this.lstProduct = [];
        this.saleOffCode = '';
    }
    MakePaymentPaypal.prototype.addProducts = function (productId, productType) {
        this.lstProduct.push({ productId: productId, productType: productType });
        return this;
    };
    MakePaymentPaypal.prototype.setProducts = function (products) {
        this.lstProduct = products;
        return this;
    };
    MakePaymentPaypal.prototype.setSaleOffCode = function (saleOffCode) {
        this.saleOffCode = saleOffCode;
        return this;
    };
    return MakePaymentPaypal;
}(Package_1.Package));
exports.MakePaymentPaypal = MakePaymentPaypal;
