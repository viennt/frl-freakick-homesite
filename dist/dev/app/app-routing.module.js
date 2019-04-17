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
var auth_routing_module_1 = require('./auth/auth-routing.module');
var download_routing_module_1 = require('./download/download-routing.module');
var social_routing_module_1 = require('./social/social-routing.module');
var events_routing_module_1 = require('./events/events-routing.module');
var league_routing_module_1 = require('./league/league-routing.module');
var brands_routing_module_1 = require('./brands/brands-routing.module');
var landing_routing_module_1 = require('./landing/landing-routing.module');
var initiative_routing_module_1 = require('./initiative/initiative-routing.module');
var reservations_routing_module_1 = require('./reservations/reservations-routing.module');
var activity_routing_module_1 = require('./activity/activity-routing.module');
var guild_routing_module_1 = require('./guild/guild-routing.module');
var distrikt_routing_module_1 = require('./distrikt/distrikt-routing.module');
var terms_routing_module_1 = require('./legal/terms-routing.module');
var about_routing_module_1 = require('./about/about-routing.module');
var privacy_routing_module_1 = require('./privacy/privacy-routing.module');
var reference_agreement_routing_module_1 = require('./reference-agreement/reference-agreement-routing.module');
var contact_routing_module_1 = require('./contact/contact-routing.module');
var join_freakick_routing_module_1 = require('./join-freakick/join-freakick-routing.module');
var education_routing_module_1 = require('./education/education-routing.module');
var canActivateViaAuthGuard_1 = require('./guards/canActivateViaAuthGuard');
var canActiveViaSecretCode_1 = require('./guards/canActiveViaSecretCode');
var isNotLoggedIn_1 = require('./guards/isNotLoggedIn');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ].concat(auth_routing_module_1.AuthRoutes, download_routing_module_1.DownloadRoutes, social_routing_module_1.SocialRoutes, events_routing_module_1.EventsRoutes, league_routing_module_1.LeagueRoutes, brands_routing_module_1.BrandsRoutes, landing_routing_module_1.LandingRoutes, initiative_routing_module_1.InitiativeRoutes, reservations_routing_module_1.ReservationsRoutes, activity_routing_module_1.ActivityRoutes, guild_routing_module_1.GuildRoutes, distrikt_routing_module_1.DistriktRoutes, terms_routing_module_1.TermsRoutes, about_routing_module_1.AboutRoutes, privacy_routing_module_1.PrivacyRoutes, reference_agreement_routing_module_1.ReferenceAgreementRoutes, contact_routing_module_1.ContactRoutes, join_freakick_routing_module_1.JoinFreakickRoutes, education_routing_module_1.EducationRoutes, [
                    { path: '**', redirectTo: '/home', pathMatch: 'full' }
                ]))
            ],
            exports: [router_1.RouterModule],
            providers: [
                canActiveViaSecretCode_1.CanActivateViaSecretCode,
                canActivateViaAuthGuard_1.CanActivateViaAuthGuard,
                isNotLoggedIn_1.IsNotLoggedIn
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyxvQ0FBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCx3Q0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUNwRSxzQ0FBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM5RCxzQ0FBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM5RCxzQ0FBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM5RCxzQ0FBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM5RCx1Q0FBOEIsa0NBQWtDLENBQUMsQ0FBQTtBQUNqRSwwQ0FBaUMsd0NBQXdDLENBQUMsQ0FBQTtBQUMxRSw0Q0FBbUMsNENBQTRDLENBQUMsQ0FBQTtBQUNoRix3Q0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUNwRSxxQ0FBNEIsOEJBQThCLENBQUMsQ0FBQTtBQUMzRCx3Q0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUNwRSxxQ0FBNEIsOEJBQThCLENBQUMsQ0FBQTtBQUMzRCxxQ0FBNEIsOEJBQThCLENBQUMsQ0FBQTtBQUMzRCx1Q0FBOEIsa0NBQWtDLENBQUMsQ0FBQTtBQUNqRSxtREFBeUMsMERBQTBELENBQUMsQ0FBQTtBQUNwRyx1Q0FBOEIsa0NBQWtDLENBQUMsQ0FBQTtBQUNqRSw2Q0FBbUMsOENBQThDLENBQUMsQ0FBQTtBQUNsRix5Q0FBZ0Msc0NBQXNDLENBQUMsQ0FBQTtBQUV2RSx3Q0FBd0Msa0NBQWtDLENBQUMsQ0FBQTtBQUMzRSx1Q0FBeUMsaUNBQWlDLENBQUMsQ0FBQTtBQUMzRSw4QkFBOEIsd0JBQXdCLENBQUMsQ0FBQTtBQW9DdkQ7SUFBQTtJQUFnQyxDQUFDO0lBbENqQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxDQUFDLE9BQU8sQ0FBQztvQkFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTt5QkFDakQsZ0NBQVUsRUFDVix3Q0FBYyxFQUVkLG9DQUFZLEVBQ1osb0NBQVksRUFDWixvQ0FBWSxFQUNaLG9DQUFZLEVBQ1osc0NBQWEsRUFDYiw0Q0FBZ0IsRUFDaEIsZ0RBQWtCLEVBQ2xCLHdDQUFjLEVBQ2Qsa0NBQVcsRUFDWCx3Q0FBYyxFQUNkLGtDQUFXLEVBQ1gsa0NBQVcsRUFDWCxzQ0FBYSxFQUNiLDZEQUF3QixFQUN4QixzQ0FBYSxFQUNiLGlEQUFrQixFQUNsQiwwQ0FBZTtvQkFDbEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtrQkFDdkQsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsaURBQXdCO2dCQUN4QixpREFBdUI7Z0JBQ3ZCLDZCQUFhO2FBQ2Q7U0FDRixDQUFDOzt3QkFBQTtJQUM4Qix1QkFBQztBQUFELENBQWhDLEFBQWlDLElBQUE7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoUm91dGVzIH0gZnJvbSAnLi9hdXRoL2F1dGgtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRG93bmxvYWRSb3V0ZXMgfSBmcm9tICcuL2Rvd25sb2FkL2Rvd25sb2FkLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNvY2lhbFJvdXRlcyB9IGZyb20gJy4vc29jaWFsL3NvY2lhbC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBFdmVudHNSb3V0ZXMgfSBmcm9tICcuL2V2ZW50cy9ldmVudHMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTGVhZ3VlUm91dGVzIH0gZnJvbSAnLi9sZWFndWUvbGVhZ3VlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEJyYW5kc1JvdXRlcyB9IGZyb20gJy4vYnJhbmRzL2JyYW5kcy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMYW5kaW5nUm91dGVzIH0gZnJvbSAnLi9sYW5kaW5nL2xhbmRpbmctcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgSW5pdGlhdGl2ZVJvdXRlcyB9IGZyb20gJy4vaW5pdGlhdGl2ZS9pbml0aWF0aXZlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFJlc2VydmF0aW9uc1JvdXRlcyB9IGZyb20gJy4vcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9ucy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBY3Rpdml0eVJvdXRlcyB9IGZyb20gJy4vYWN0aXZpdHkvYWN0aXZpdHktcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgR3VpbGRSb3V0ZXMgfSBmcm9tICcuL2d1aWxkL2d1aWxkLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IERpc3RyaWt0Um91dGVzIH0gZnJvbSAnLi9kaXN0cmlrdC9kaXN0cmlrdC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBUZXJtc1JvdXRlcyB9IGZyb20gJy4vbGVnYWwvdGVybXMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQWJvdXRSb3V0ZXMgfSBmcm9tICcuL2Fib3V0L2Fib3V0LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFByaXZhY3lSb3V0ZXMgfSBmcm9tICcuL3ByaXZhY3kvcHJpdmFjeS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBSZWZlcmVuY2VBZ3JlZW1lbnRSb3V0ZXMgfSBmcm9tICcuL3JlZmVyZW5jZS1hZ3JlZW1lbnQvcmVmZXJlbmNlLWFncmVlbWVudC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb250YWN0Um91dGVzIH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3Qtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgSm9pbkZyZWFraWNrUm91dGVzIH0gZnJvbSAnLi9qb2luLWZyZWFraWNrL2pvaW4tZnJlYWtpY2stcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRWR1Y2F0aW9uUm91dGVzIH0gZnJvbSAnLi9lZHVjYXRpb24vZWR1Y2F0aW9uLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgQ2FuQWN0aXZhdGVWaWFBdXRoR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9jYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZCc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZVZpYVNlY3JldENvZGUgfSBmcm9tICcuL2d1YXJkcy9jYW5BY3RpdmVWaWFTZWNyZXRDb2RlJztcbmltcG9ydCB7IElzTm90TG9nZ2VkSW4gfSBmcm9tICcuL2d1YXJkcy9pc05vdExvZ2dlZEluJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAuLi5BdXRoUm91dGVzLFxuICAgICAgLi4uRG93bmxvYWRSb3V0ZXMsXG4gICAgICAvLyAuLi5Ib21lUm91dGVzLFxuICAgICAgLi4uU29jaWFsUm91dGVzLFxuICAgICAgLi4uRXZlbnRzUm91dGVzLFxuICAgICAgLi4uTGVhZ3VlUm91dGVzLFxuICAgICAgLi4uQnJhbmRzUm91dGVzLFxuICAgICAgLi4uTGFuZGluZ1JvdXRlcyxcbiAgICAgIC4uLkluaXRpYXRpdmVSb3V0ZXMsXG4gICAgICAuLi5SZXNlcnZhdGlvbnNSb3V0ZXMsXG4gICAgICAuLi5BY3Rpdml0eVJvdXRlcyxcbiAgICAgIC4uLkd1aWxkUm91dGVzLFxuICAgICAgLi4uRGlzdHJpa3RSb3V0ZXMsXG4gICAgICAuLi5UZXJtc1JvdXRlcyxcbiAgICAgIC4uLkFib3V0Um91dGVzLFxuICAgICAgLi4uUHJpdmFjeVJvdXRlcyxcbiAgICAgIC4uLlJlZmVyZW5jZUFncmVlbWVudFJvdXRlcyxcbiAgICAgIC4uLkNvbnRhY3RSb3V0ZXMsXG4gICAgICAuLi5Kb2luRnJlYWtpY2tSb3V0ZXMsXG4gICAgICAuLi5FZHVjYXRpb25Sb3V0ZXMsXG4gICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ2FuQWN0aXZhdGVWaWFTZWNyZXRDb2RlLFxuICAgIENhbkFjdGl2YXRlVmlhQXV0aEd1YXJkLFxuICAgIElzTm90TG9nZ2VkSW5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19
