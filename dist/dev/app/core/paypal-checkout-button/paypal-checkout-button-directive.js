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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3BheXBhbC1jaGVja291dC1idXR0b24vcGF5cGFsLWNoZWNrb3V0LWJ1dHRvbi1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyRSxlQUFlLENBQUMsQ0FBQTtBQU8zRjtJQUtFLHVDQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZ4QixnQkFBVyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUk5RCxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbkIsR0FBRyxFQUFFLFNBQVM7WUFFZCxNQUFNLEVBQUUsSUFBSTtZQUVaLE9BQU8sRUFBRTtnQkFDUCxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QixDQUFDO1lBRUQsV0FBVyxFQUFFLFVBQUMsSUFBUztnQkFDckIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQztTQUVGLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBdEJEO1FBQUMsWUFBSyxFQUFFOztvRUFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOztzRUFBQTtJQU5YO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQzs7cUNBQUE7SUEwQkYsb0NBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHFDQUE2QixnQ0F5QnpDLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvcGF5cGFsLWNoZWNrb3V0LWJ1dHRvbi9wYXlwYWwtY2hlY2tvdXQtYnV0dG9uLWRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSBsZXQgcGF5cGFsOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twYXlwYWxDaGVja291dF0nXG59KVxuZXhwb3J0IGNsYXNzIFBheXBhbENoZWNrb3V0QnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwYXltZW50SWQ6IG51bWJlcjtcbiAgQE91dHB1dCgpIG9uQXV0aG9yaXplOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgLy9cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHBheXBhbC5CdXR0b24ucmVuZGVyKHtcbiAgICAgIGVudjogJ3NhbmRib3gnLCAvLyBPciAnc2FuZGJveCdcblxuICAgICAgY29tbWl0OiB0cnVlLCAvLyBTaG93IGEgJ1BheSBOb3cnIGJ1dHRvblxuXG4gICAgICBwYXltZW50OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBheW1lbnRJZDtcbiAgICAgIH0sXG5cbiAgICAgIG9uQXV0aG9yaXplOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMub25BdXRob3JpemUuZW1pdChkYXRhKTtcbiAgICAgIH1cblxuICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==
