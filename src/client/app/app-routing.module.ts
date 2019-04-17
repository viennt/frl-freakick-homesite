import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthRoutes } from './auth/auth-routing.module';
import { DownloadRoutes } from './download/download-routing.module';
import { SocialRoutes } from './social/social-routing.module';
import { EventsRoutes } from './events/events-routing.module';
import { LeagueRoutes } from './league/league-routing.module';
import { BrandsRoutes } from './brands/brands-routing.module';
import { LandingRoutes } from './landing/landing-routing.module';
import { InitiativeRoutes } from './initiative/initiative-routing.module';
import { ReservationsRoutes } from './reservations/reservations-routing.module';
import { ActivityRoutes } from './activity/activity-routing.module';
import { GuildRoutes } from './guild/guild-routing.module';
import { DistriktRoutes } from './distrikt/distrikt-routing.module';
import { TermsRoutes } from './legal/terms-routing.module';
import { AboutRoutes } from './about/about-routing.module';
import { PrivacyRoutes } from './privacy/privacy-routing.module';
import { ReferenceAgreementRoutes } from './reference-agreement/reference-agreement-routing.module';
import { ContactRoutes } from './contact/contact-routing.module';
import { JoinFreakickRoutes } from './join-freakick/join-freakick-routing.module';
import { EducationRoutes } from './education/education-routing.module';

import { CanActivateViaAuthGuard } from './guards/canActivateViaAuthGuard';
import { CanActivateViaSecretCode } from './guards/canActiveViaSecretCode';
import { IsNotLoggedIn } from './guards/isNotLoggedIn';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      ...AuthRoutes,
      ...DownloadRoutes,
      // ...HomeRoutes,
      ...SocialRoutes,
      ...EventsRoutes,
      ...LeagueRoutes,
      ...BrandsRoutes,
      ...LandingRoutes,
      ...InitiativeRoutes,
      ...ReservationsRoutes,
      ...ActivityRoutes,
      ...GuildRoutes,
      ...DistriktRoutes,
      ...TermsRoutes,
      ...AboutRoutes,
      ...PrivacyRoutes,
      ...ReferenceAgreementRoutes,
      ...ContactRoutes,
      ...JoinFreakickRoutes,
      ...EducationRoutes,
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule],
  providers: [
    CanActivateViaSecretCode,
    CanActivateViaAuthGuard,
    IsNotLoggedIn
  ]
})
export class AppRoutingModule { }
