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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9wYXltZW50L01ha2VQYXltZW50UGF5cGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUF3QixZQUFZLENBQUMsQ0FBQTtBQVFyQyxJQUFNLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztBQUUzQztJQUF1QyxxQ0FBTztJQUk1QztRQUNFLGtCQUFNLFlBQVksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixTQUFpQixFQUFFLFdBQW1CO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHVDQUFXLEdBQWxCLFVBQW1CLFFBQW9EO1FBQ3JFLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sMENBQWMsR0FBckIsVUFBc0IsV0FBbUI7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFSCx3QkFBQztBQUFELENBekJBLEFBeUJDLENBekJzQyxpQkFBTyxHQXlCN0M7QUF6QlkseUJBQWlCLG9CQXlCN0IsQ0FBQSIsImZpbGUiOiJhcHAvcGFja2FnZXMvcGF5bWVudC9NYWtlUGF5bWVudFBheXBhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDpcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgTUFLRV9QQVlNRU5UX1BBWVBBTFxuICogU3VjY2VzcyBtZXNzYWdlIHR5cGU6ICBNQUtFX1BBWU1FTlRfUEFZUEFMX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnTUFLRV9QQVlNRU5UX1BBWVBBTCc7XG5cbmV4cG9ydCBjbGFzcyBNYWtlUGF5bWVudFBheXBhbCBleHRlbmRzIFBhY2thZ2Uge1xuICBwcml2YXRlIGxzdFByb2R1Y3Q6IHtwcm9kdWN0SWQ6IG51bWJlciwgcHJvZHVjdFR5cGU6IHN0cmluZ31bXTtcbiAgcHJpdmF0ZSBzYWxlT2ZmQ29kZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEFQSV9FTkRQT0lOVCk7XG4gICAgdGhpcy5sc3RQcm9kdWN0ID0gW107XG4gICAgdGhpcy5zYWxlT2ZmQ29kZSA9ICcnO1xuICB9XG5cbiAgcHVibGljIGFkZFByb2R1Y3RzKHByb2R1Y3RJZDogbnVtYmVyLCBwcm9kdWN0VHlwZTogc3RyaW5nKTogTWFrZVBheW1lbnRQYXlwYWwge1xuICAgIHRoaXMubHN0UHJvZHVjdC5wdXNoKHtwcm9kdWN0SWQ6IHByb2R1Y3RJZCwgcHJvZHVjdFR5cGU6IHByb2R1Y3RUeXBlfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvZHVjdHMocHJvZHVjdHM6IHtwcm9kdWN0SWQ6IG51bWJlciwgcHJvZHVjdFR5cGU6IHN0cmluZ31bXSk6IE1ha2VQYXltZW50UGF5cGFsIHtcbiAgICB0aGlzLmxzdFByb2R1Y3QgPSBwcm9kdWN0cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRTYWxlT2ZmQ29kZShzYWxlT2ZmQ29kZTogc3RyaW5nKTogTWFrZVBheW1lbnRQYXlwYWwge1xuICAgIHRoaXMuc2FsZU9mZkNvZGUgPSBzYWxlT2ZmQ29kZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4iXX0=
