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
var authentication_service_1 = require('../../services/authentication.service');
var constants_1 = require('../../constants');
var NavbarComponent = (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.externalUrl = constants_1.CONFIG;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.userName = this.authService.getItem('userName');
        this.isInvert = false;
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        this.setupBootstrapScroll();
    };
    NavbarComponent.prototype.changeInvert = function (event) {
        var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
        var screenHeight = window.innerHeight;
        this.isInvert = scrollToTop > 1.5 * screenHeight;
    };
    NavbarComponent.prototype.setupBootstrapScroll = function () {
        jQuery('#mainNav').affix({
            offset: {
                top: 50
            }
        });
    };
    NavbarComponent.prototype.login = function () {
        this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        location.reload();
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NavbarComponent.prototype, "changeInvert", null);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUMvRSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6Qyx1Q0FBc0MsdUNBQXVDLENBQUMsQ0FBQTtBQUU5RSwwQkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQVd6QztJQVFFLHlCQUNZLE1BQWMsRUFDZCxXQUFrQztRQURsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBSnZDLGdCQUFXLEdBQUcsa0JBQU0sQ0FBQztJQUt6QixDQUFDO0lBRUosa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUUwQyxzQ0FBWSxHQUFaLFVBQWEsS0FBVTtRQUNoRSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoRixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7SUFDbkQsQ0FBQztJQUVELDhDQUFvQixHQUFwQjtRQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsTUFBTSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxFQUFFO2FBQ1I7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQXJCRDtRQUFDLG1CQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7dURBQUE7SUE3QjVDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O3VCQUFBO0lBOENGLHNCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSx1QkFBZSxrQkE2QzNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbmF2aWdhdGlvbiBiYXIgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJ25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduYXZiYXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIHB1YmxpYyBpc0ludmVydDogYm9vbGVhbjtcbiAgcHVibGljIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBleHRlcm5hbFVybCA9IENPTkZJRztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0SXRlbSgndXNlck5hbWUnKTtcbiAgICB0aGlzLmlzSW52ZXJ0ID0gZmFsc2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zZXR1cEJvb3RzdHJhcFNjcm9sbCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFsnJGV2ZW50J10pIGNoYW5nZUludmVydChldmVudDogYW55KSB7XG4gICAgbGV0IHNjcm9sbFRvVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBsZXQgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuaXNJbnZlcnQgPSBzY3JvbGxUb1RvcCA+IDEuNSAqIHNjcmVlbkhlaWdodDtcbiAgfVxuXG4gIHNldHVwQm9vdHN0cmFwU2Nyb2xsKCk6IHZvaWQge1xuICAgIGpRdWVyeSgnI21haW5OYXYnKS5hZmZpeCh7XG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgdG9wOiA1MFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbG9naW4oKTogYW55IHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbi9jb250aW51ZS8nLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXSk7XG4gIH1cblxuICBsb2dvdXQoKTogYW55IHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59XG4iXX0=
