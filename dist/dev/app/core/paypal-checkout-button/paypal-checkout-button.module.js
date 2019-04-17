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
var paypal_checkout_button_directive_1 = require('./paypal-checkout-button-directive');
var PaypalCheckoutButtonModule = (function () {
    function PaypalCheckoutButtonModule() {
    }
    PaypalCheckoutButtonModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [paypal_checkout_button_directive_1.PaypalCheckoutButtonDirective],
            declarations: [paypal_checkout_button_directive_1.PaypalCheckoutButtonDirective],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], PaypalCheckoutButtonModule);
    return PaypalCheckoutButtonModule;
}());
exports.PaypalCheckoutButtonModule = PaypalCheckoutButtonModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3BheXBhbC1jaGVja291dC1idXR0b24vcGF5cGFsLWNoZWNrb3V0LWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxpREFBOEMsb0NBQW9DLENBQUMsQ0FBQTtBQVFuRjtJQUFBO0lBQ0EsQ0FBQztJQVBEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxnRUFBNkIsQ0FBQztZQUN4QyxZQUFZLEVBQUUsQ0FBQyxnRUFBNkIsQ0FBQztZQUM3QyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O2tDQUFBO0lBRUYsaUNBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLGtDQUEwQiw2QkFDdEMsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9wYXlwYWwtY2hlY2tvdXQtYnV0dG9uL3BheXBhbC1jaGVja291dC1idXR0b24ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGF5cGFsQ2hlY2tvdXRCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL3BheXBhbC1jaGVja291dC1idXR0b24tZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtQYXlwYWxDaGVja291dEJ1dHRvbkRpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW1BheXBhbENoZWNrb3V0QnV0dG9uRGlyZWN0aXZlXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUGF5cGFsQ2hlY2tvdXRCdXR0b25Nb2R1bGUge1xufVxuIl19
