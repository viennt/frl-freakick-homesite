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
var router_1 = require('@angular/router');
var authentication_service_1 = require('../services/authentication.service');
var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login/continue/', state.url]);
            return false;
        }
        else {
            return true;
        }
    };
    CanActivateViaAuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], CanActivateViaAuthGuard);
    return CanActivateViaAuthGuard;
}());
exports.CanActivateViaAuthGuard = CanActivateViaAuthGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ndWFyZHMvY2FuQWN0aXZhdGVWaWFBdXRoR3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx1QkFBaUYsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRyx1Q0FBc0Msb0NBQW9DLENBQUMsQ0FBQTtBQUczRTtJQUVJLGlDQUFvQixXQUFrQyxFQUFVLE1BQWM7UUFBMUQsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFM0UsNkNBQVcsR0FBbEIsVUFBbUIsS0FBNkIsRUFBRSxLQUEwQjtRQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBWkw7UUFBQyxpQkFBVSxFQUFFOzsrQkFBQTtJQWFiLDhCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSwrQkFBdUIsMEJBWW5DLENBQUEiLCJmaWxlIjoiYXBwL2d1YXJkcy9jYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIHB1YmxpYyBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4vY29udGludWUvJywgc3RhdGUudXJsXSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
