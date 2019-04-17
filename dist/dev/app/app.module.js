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
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('./plugins/notifi/index');
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var auth_module_1 = require('./auth/auth.module');
var download_module_1 = require('./download/download.module');
var social_module_1 = require('./social/social.module');
var events_module_1 = require('./events/events.module');
var league_module_1 = require('./league/league.module');
var brands_module_1 = require('./brands/brands.module');
var landing_module_1 = require('./landing/landing.module');
var initiative_module_1 = require('./initiative/initiative.module');
var reservations_module_1 = require('./reservations/reservations.module');
var activity_module_1 = require('./activity/activity.module');
var guild_module_1 = require('./guild/guild.module');
var distrikt_module_1 = require('./distrikt/distrikt.module');
var terms_module_1 = require('./legal/terms.module');
var about_module_1 = require('./about/about.module');
var privacy_module_1 = require('./privacy/privacy.module');
var reference_agreement_module_1 = require('./reference-agreement/reference-agreement.module');
var contact_module_1 = require('./contact/contact.module');
var join_freakick_module_1 = require('./join-freakick/join-freakick.module');
var education_module_1 = require('./education/education.module');
var message_service_1 = require('./services/message.service');
var authentication_service_1 = require('./services/authentication.service');
var secretWord_service_1 = require('./services/secretWord.service');
var pageModules = [
    auth_module_1.AuthModule,
    download_module_1.DownloadModule,
    social_module_1.SocialModule,
    events_module_1.EventsModule,
    league_module_1.LeagueModule,
    brands_module_1.BrandsModule,
    landing_module_1.LandingModule,
    initiative_module_1.InitiativeModule,
    reservations_module_1.ReservationsModule,
    activity_module_1.ActivityModule,
    guild_module_1.GuildModule,
    distrikt_module_1.DistriktModule,
    terms_module_1.TermsModule,
    about_module_1.AboutModule,
    privacy_module_1.PrivacyModule,
    reference_agreement_module_1.ReferenceAgreementModule,
    contact_module_1.ContactModule,
    join_freakick_module_1.JoinFreakickModule,
    education_module_1.EducationModule
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, index_1.SimpleNotificationsModule, pageModules],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }, message_service_1.MessageService, authentication_service_1.AuthenticationService, cookies_service_1.CookieService, secretWord_service_1.SecretWordService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRTFELHNCQUEwQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ25FLGdDQUE4QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBRXpFLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG1DQUFpQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRXhELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRTVELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3RELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3RELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3RELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3RELCtCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pELGtDQUFpQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2xFLG9DQUFtQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3hFLGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELDZCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELCtCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pELDJDQUF5QyxrREFBa0QsQ0FBQyxDQUFBO0FBQzVGLCtCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFtQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzFFLGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBRS9ELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELHVDQUFzQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzFFLG1DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWxFLElBQUksV0FBVyxHQUFHO0lBQ2hCLHdCQUFVO0lBQ1YsZ0NBQWM7SUFFZCw0QkFBWTtJQUNaLDRCQUFZO0lBQ1osNEJBQVk7SUFDWiw0QkFBWTtJQUNaLDhCQUFhO0lBQ2Isb0NBQWdCO0lBQ2hCLHdDQUFrQjtJQUNsQixnQ0FBYztJQUNkLDBCQUFXO0lBQ1gsZ0NBQWM7SUFDZCwwQkFBVztJQUNYLDBCQUFXO0lBQ1gsOEJBQWE7SUFDYixxREFBd0I7SUFDeEIsOEJBQWE7SUFDYix5Q0FBa0I7SUFDbEIsa0NBQWU7Q0FDaEIsQ0FBQztBQVlGO0lBQUE7SUFBeUIsQ0FBQztJQVYxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsaUJBQVUsRUFBRSxxQ0FBZ0IsRUFBRSxpQ0FBeUIsRUFBRSxXQUFXLENBQUM7WUFDOUYsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCLEVBQUUsZ0NBQWMsRUFBRSw4Q0FBcUIsRUFBRSwrQkFBYSxFQUFFLHNDQUFpQixDQUFDO1lBQzNFLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlIH0gZnJvbSAnLi9wbHVnaW5zL25vdGlmaS9pbmRleCc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi9hdXRoL2F1dGgubW9kdWxlJztcbmltcG9ydCB7IERvd25sb2FkTW9kdWxlIH0gZnJvbSAnLi9kb3dubG9hZC9kb3dubG9hZC5tb2R1bGUnO1xuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBTb2NpYWxNb2R1bGUgfSBmcm9tICcuL3NvY2lhbC9zb2NpYWwubW9kdWxlJztcbmltcG9ydCB7IEV2ZW50c01vZHVsZSB9IGZyb20gJy4vZXZlbnRzL2V2ZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgTGVhZ3VlTW9kdWxlIH0gZnJvbSAnLi9sZWFndWUvbGVhZ3VlLm1vZHVsZSc7XG5pbXBvcnQgeyBCcmFuZHNNb2R1bGUgfSBmcm9tICcuL2JyYW5kcy9icmFuZHMubW9kdWxlJztcbmltcG9ydCB7IExhbmRpbmdNb2R1bGUgfSBmcm9tICcuL2xhbmRpbmcvbGFuZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgSW5pdGlhdGl2ZU1vZHVsZSB9IGZyb20gJy4vaW5pdGlhdGl2ZS9pbml0aWF0aXZlLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbnNNb2R1bGUgfSBmcm9tICcuL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IEFjdGl2aXR5TW9kdWxlIH0gZnJvbSAnLi9hY3Rpdml0eS9hY3Rpdml0eS5tb2R1bGUnO1xuaW1wb3J0IHsgR3VpbGRNb2R1bGUgfSBmcm9tICcuL2d1aWxkL2d1aWxkLm1vZHVsZSc7XG5pbXBvcnQgeyBEaXN0cmlrdE1vZHVsZSB9IGZyb20gJy4vZGlzdHJpa3QvZGlzdHJpa3QubW9kdWxlJztcbmltcG9ydCB7IFRlcm1zTW9kdWxlIH0gZnJvbSAnLi9sZWdhbC90ZXJtcy5tb2R1bGUnO1xuaW1wb3J0IHsgQWJvdXRNb2R1bGUgfSBmcm9tICcuL2Fib3V0L2Fib3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcml2YWN5TW9kdWxlIH0gZnJvbSAnLi9wcml2YWN5L3ByaXZhY3kubW9kdWxlJztcbmltcG9ydCB7IFJlZmVyZW5jZUFncmVlbWVudE1vZHVsZSB9IGZyb20gJy4vcmVmZXJlbmNlLWFncmVlbWVudC9yZWZlcmVuY2UtYWdyZWVtZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb250YWN0TW9kdWxlIH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QubW9kdWxlJztcbmltcG9ydCB7IEpvaW5GcmVha2lja01vZHVsZSB9IGZyb20gJy4vam9pbi1mcmVha2ljay9qb2luLWZyZWFraWNrLm1vZHVsZSc7XG5pbXBvcnQgeyBFZHVjYXRpb25Nb2R1bGUgfSBmcm9tICcuL2VkdWNhdGlvbi9lZHVjYXRpb24ubW9kdWxlJztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VjcmV0V29yZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlY3JldFdvcmQuc2VydmljZSc7XG5cbmxldCBwYWdlTW9kdWxlcyA9IFtcbiAgQXV0aE1vZHVsZSxcbiAgRG93bmxvYWRNb2R1bGUsXG4gIC8vIEhvbWVNb2R1bGUsXG4gIFNvY2lhbE1vZHVsZSxcbiAgRXZlbnRzTW9kdWxlLFxuICBMZWFndWVNb2R1bGUsXG4gIEJyYW5kc01vZHVsZSxcbiAgTGFuZGluZ01vZHVsZSxcbiAgSW5pdGlhdGl2ZU1vZHVsZSxcbiAgUmVzZXJ2YXRpb25zTW9kdWxlLFxuICBBY3Rpdml0eU1vZHVsZSxcbiAgR3VpbGRNb2R1bGUsXG4gIERpc3RyaWt0TW9kdWxlLFxuICBUZXJtc01vZHVsZSxcbiAgQWJvdXRNb2R1bGUsXG4gIFByaXZhY3lNb2R1bGUsXG4gIFJlZmVyZW5jZUFncmVlbWVudE1vZHVsZSxcbiAgQ29udGFjdE1vZHVsZSxcbiAgSm9pbkZyZWFraWNrTW9kdWxlLFxuICBFZHVjYXRpb25Nb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBBcHBSb3V0aW5nTW9kdWxlLCBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlLCBwYWdlTW9kdWxlc10sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xuICB9LCBNZXNzYWdlU2VydmljZSwgQXV0aGVudGljYXRpb25TZXJ2aWNlLCBDb29raWVTZXJ2aWNlLCBTZWNyZXRXb3JkU2VydmljZV0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
