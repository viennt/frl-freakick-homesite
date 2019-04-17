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
