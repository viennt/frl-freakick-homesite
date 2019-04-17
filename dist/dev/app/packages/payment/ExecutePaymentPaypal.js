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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9wYXltZW50L0V4ZWN1dGVQYXltZW50UGF5cGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUF3QixZQUFZLENBQUMsQ0FBQTtBQVFyQyxJQUFNLFlBQVksR0FBRyx3QkFBd0IsQ0FBQztBQUU5QztJQUEwQyx3Q0FBTztJQUkvQztRQUNFLGtCQUFNLFlBQVksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwyQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHlDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCwyQkFBQztBQUFELENBakJBLEFBaUJDLENBakJ5QyxpQkFBTyxHQWlCaEQ7QUFqQlksNEJBQW9CLHVCQWlCaEMsQ0FBQSIsImZpbGUiOiJhcHAvcGFja2FnZXMvcGF5bWVudC9FeGVjdXRlUGF5bWVudFBheXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDpcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgRVhFQ1VURV9QQVlNRU5UX1BBWVBBTFxuICogU3VjY2VzcyBtZXNzYWdlIHR5cGU6ICBFWEVDVVRFX1BBWU1FTlRfUEFZUEFMX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnRVhFQ1VURV9QQVlNRU5UX1BBWVBBTCc7XG5cbmV4cG9ydCBjbGFzcyBFeGVjdXRlUGF5bWVudFBheXBhbCBleHRlbmRzIFBhY2thZ2Uge1xuICBwcml2YXRlIHBheW1lbnRJZDogc3RyaW5nO1xuICBwcml2YXRlIHBheWVySUQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICB9XG5cbiAgcHVibGljIHNldFBheW1lbnRJZChwYXltZW50SWQ6IHN0cmluZyk6IEV4ZWN1dGVQYXltZW50UGF5cGFsIHtcbiAgICB0aGlzLnBheW1lbnRJZCA9IHBheW1lbnRJZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRQYXllcklEKHBheWVySUQ6IHN0cmluZyk6IEV4ZWN1dGVQYXltZW50UGF5cGFsIHtcbiAgICB0aGlzLnBheWVySUQgPSBwYXllcklEO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=
