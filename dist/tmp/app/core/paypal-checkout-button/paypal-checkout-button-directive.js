"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PaypalCheckoutButtonDirective = (function () {
    function PaypalCheckoutButtonDirective(el) {
        this.el = el;
        this.onAuthorize = new core_1.EventEmitter();
    }
    PaypalCheckoutButtonDirective.prototype.ngOnInit = function () {
        var _this = this;
        paypal.Button.render({
            env: 'sandbox',
            commit: true,
            payment: function () {
                return _this.paymentId;
            },
            onAuthorize: function (data) {
                _this.onAuthorize.emit(data);
            }
        }, this.el.nativeElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaypalCheckoutButtonDirective.prototype, "paymentId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaypalCheckoutButtonDirective.prototype, "onAuthorize", void 0);
    PaypalCheckoutButtonDirective = __decorate([
        core_1.Directive({
            selector: '[paypalCheckout]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PaypalCheckoutButtonDirective);
    return PaypalCheckoutButtonDirective;
}());
exports.PaypalCheckoutButtonDirective = PaypalCheckoutButtonDirective;
