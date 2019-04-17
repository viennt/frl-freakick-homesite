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
var IsNotLoggedIn = (function () {
    function IsNotLoggedIn(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    IsNotLoggedIn.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']);
            return false;
        }
        else {
            return true;
        }
    };
    IsNotLoggedIn = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], IsNotLoggedIn);
    return IsNotLoggedIn;
}());
exports.IsNotLoggedIn = IsNotLoggedIn;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ndWFyZHMvaXNOb3RMb2dnZWRJbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUtPLGlCQUFpQixDQUFDLENBQUE7QUFDekIsdUNBQXNDLG9DQUFvQyxDQUFDLENBQUE7QUFHM0U7SUFFRSx1QkFBb0IsTUFBYyxFQUNkLFdBQWtDO1FBRGxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7SUFDdEQsQ0FBQztJQUVNLG1DQUFXLEdBQWxCLFVBQW1CLEtBQTZCLEVBQUUsS0FBMEI7UUFDMUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFkSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBZWIsb0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHFCQUFhLGdCQWN6QixDQUFBIiwiZmlsZSI6ImFwcC9ndWFyZHMvaXNOb3RMb2dnZWRJbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFJvdXRlcixcbiAgQ2FuQWN0aXZhdGUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3Rcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXNOb3RMb2dnZWRJbiBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgfVxuXG4gIHB1YmxpYyBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19
