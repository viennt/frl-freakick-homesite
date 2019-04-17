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
var core_2 = require('angular2-cookie/core');
var md5_1 = require('ts-md5/dist/md5');
var secretWord_service_1 = require('../services/secretWord.service');
var CanActivateViaSecretCode = (function () {
    function CanActivateViaSecretCode(router, cookieService, secretWordService) {
        this.router = router;
        this.cookieService = cookieService;
        this.secretWordService = secretWordService;
    }
    CanActivateViaSecretCode.prototype.canActivate = function (route, state) {
        var _this = this;
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return true;
        }
        var secretWord = this.cookieService.get('sc');
        if (secretWord) {
            return this.secretWordService.checkSecretWord(String(md5_1.Md5.hashStr(secretWord)), route.component.name)
                .then(function (data) {
                return true;
            }).catch(function (error) {
                _this.router.navigate(['/landing']);
                return false;
            });
        }
        else {
            this.router.navigate(['/landing']);
            return false;
        }
    };
    CanActivateViaSecretCode = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService, secretWord_service_1.SecretWordService])
    ], CanActivateViaSecretCode);
    return CanActivateViaSecretCode;
}());
exports.CanActivateViaSecretCode = CanActivateViaSecretCode;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ndWFyZHMvY2FuQWN0aXZlVmlhU2VjcmV0Q29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUtPLGlCQUFpQixDQUFDLENBQUE7QUFFekIscUJBQThCLHNCQUFzQixDQUFDLENBQUE7QUFDckQsb0JBQW9CLGlCQUFpQixDQUFDLENBQUE7QUFDdEMsbUNBQWtDLGdDQUFnQyxDQUFDLENBQUE7QUFHbkU7SUFFRSxrQ0FBb0IsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLGlCQUFvQztRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFJLENBQUM7SUFFdEQsOENBQVcsR0FBbEIsVUFBbUIsS0FBNkIsRUFBRSxLQUEwQjtRQUE1RSxpQkFrQkM7UUFqQkMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQzNDLE1BQU0sQ0FBQyxTQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQVEsS0FBSyxDQUFDLFNBQVUsQ0FBQyxJQUFJLENBQUM7aUJBQzVELElBQUksQ0FBQyxVQUFDLElBQVM7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQVU7Z0JBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQXpCSDtRQUFDLGlCQUFVLEVBQUU7O2dDQUFBO0lBMEJiLCtCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxnQ0FBd0IsMkJBeUJwQyxDQUFBIiwiZmlsZSI6ImFwcC9ndWFyZHMvY2FuQWN0aXZlVmlhU2VjcmV0Q29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFJvdXRlcixcbiAgQ2FuQWN0aXZhdGUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3Rcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcbmltcG9ydCB7IE1kNSB9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSc7XG5pbXBvcnQgeyBTZWNyZXRXb3JkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NlY3JldFdvcmQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW5BY3RpdmF0ZVZpYVNlY3JldENvZGUgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlY3JldFdvcmRTZXJ2aWNlOiBTZWNyZXRXb3JkU2VydmljZSkgeyB9XG5cbiAgcHVibGljIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8YW55PiB8IGJvb2xlYW4ge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSknKS5tYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IHNlY3JldFdvcmQgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdzYycpO1xuICAgIGlmIChzZWNyZXRXb3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWNyZXRXb3JkU2VydmljZS5jaGVja1NlY3JldFdvcmQoXG4gICAgICAgIFN0cmluZyhNZDUuaGFzaFN0cihzZWNyZXRXb3JkKSksICg8YW55PnJvdXRlLmNvbXBvbmVudCkubmFtZSlcbiAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xhbmRpbmcnXSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGFuZGluZyddKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
