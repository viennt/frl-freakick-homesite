"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('../Package');
var API_ENDPOINT = 'EXECUTE_PAYMENT_PAYPAL';
var ExecutePaymentPaypal = (function (_super) {
    __extends(ExecutePaymentPaypal, _super);
    function ExecutePaymentPaypal() {
        _super.call(this, API_ENDPOINT);
    }
    ExecutePaymentPaypal.prototype.setPaymentId = function (paymentId) {
        this.paymentId = paymentId;
        return this;
    };
    ExecutePaymentPaypal.prototype.setPayerID = function (payerID) {
        this.payerID = payerID;
        return this;
    };
    return ExecutePaymentPaypal;
}(Package_1.Package));
exports.ExecutePaymentPaypal = ExecutePaymentPaypal;
