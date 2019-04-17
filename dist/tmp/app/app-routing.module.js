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
