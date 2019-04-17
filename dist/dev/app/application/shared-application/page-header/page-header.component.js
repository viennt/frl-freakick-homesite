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
var authentication_service_1 = require('../../../services/authentication.service');
var PageHeaderComponent = (function () {
    function PageHeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.authService.getAuthenticatedUser();
        this.isLoggedIn = this.authService.isLoggedIn();
        this.userName = this.authService.getItem('userName') || '@freakick.user';
        this.userFullName = this.authService.getItem('fullName') || 'Freakick User';
        this.userImage = user.userImage;
        this.routerSub = this.router.events.subscribe(function (params) { return _this.handleRouterEvent(); });
    };
    PageHeaderComponent.prototype.ngOnDestroy = function () {
        this.routerSub.unsubscribe();
    };
    PageHeaderComponent.prototype.handleRouterEvent = function () {
        this.currentRoute = window.location.pathname;
    };
    PageHeaderComponent.prototype.login = function () {
        this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    };
    PageHeaderComponent.prototype.logout = function () {
        this.authService.logout();
        location.reload();
    };
    PageHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-page-header',
            templateUrl: 'page-header.component.html',
            styleUrls: ['page-header.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());
exports.PageHeaderComponent = PageHeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsdUNBQXNDLDBDQUEwQyxDQUFDLENBQUE7QUFRakY7SUFZRSw2QkFDVSxNQUFjLEVBQ2QsV0FBa0M7UUFEbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtJQUN4QyxDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDM0MsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBeEIsQ0FBd0IsQ0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUMvQyxDQUFDO0lBRUQsbUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQWxESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7OzJCQUFBO0lBOENGLDBCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSwyQkFBbUIsc0JBNkMvQixDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1wYWdlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAncGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnZS1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpc0xvZ2dlZEluOiBib29sZWFuO1xuICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcbiAgcHVibGljIHVzZXJGdWxsTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgdXNlckltYWdlOiBzdHJpbmc7XG5cbiAgcHVibGljIGN1cnJlbnRSb3V0ZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBleHBhbmRTZWFyY2hCb3g6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByb3V0ZXJTdWI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgbGV0IHVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldEF1dGhlbnRpY2F0ZWRVc2VyKCk7XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0SXRlbSgndXNlck5hbWUnKSB8fCAnQGZyZWFraWNrLnVzZXInO1xuICAgIHRoaXMudXNlckZ1bGxOYW1lID0gdGhpcy5hdXRoU2VydmljZS5nZXRJdGVtKCdmdWxsTmFtZScpIHx8ICdGcmVha2ljayBVc2VyJztcbiAgICB0aGlzLnVzZXJJbWFnZSA9IHVzZXIudXNlckltYWdlO1xuXG4gICAgdGhpcy5yb3V0ZXJTdWIgPSB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKFxuICAgICAgcGFyYW1zID0+IHRoaXMuaGFuZGxlUm91dGVyRXZlbnQoKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJvdXRlclN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlUm91dGVyRXZlbnQoKTogYW55IHtcbiAgICB0aGlzLmN1cnJlbnRSb3V0ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxuXG4gIGxvZ2luKCk6IGFueSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4vY29udGludWUvJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaF0pO1xuICB9XG5cbiAgbG9nb3V0KCk6IGFueSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufVxuIl19
