import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { SimpleNotificationsModule } from './plugins/notifi/index';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { DownloadModule } from './download/download.module';
import { HomeModule } from './home/home.module';
import { SocialModule } from './social/social.module';
import { EventsModule } from './events/events.module';
import { LeagueModule } from './league/league.module';
import { BrandsModule } from './brands/brands.module';
import { LandingModule } from './landing/landing.module';
import { InitiativeModule } from './initiative/initiative.module';
import { ReservationsModule } from './reservations/reservations.module';
import { ActivityModule } from './activity/activity.module';
import { GuildModule } from './guild/guild.module';
import { DistriktModule } from './distrikt/distrikt.module';
import { TermsModule } from './legal/terms.module';
import { AboutModule } from './about/about.module';
import { PrivacyModule } from './privacy/privacy.module';
import { ReferenceAgreementModule } from './reference-agreement/reference-agreement.module';
import { ContactModule } from './contact/contact.module';
import { JoinFreakickModule } from './join-freakick/join-freakick.module';
import { EducationModule } from './education/education.module';

import { MessageService } from './services/message.service';
import { AuthenticationService } from './services/authentication.service';
import { SecretWordService } from './services/secretWord.service';

let pageModules = [
  AuthModule,
  DownloadModule,
  // HomeModule,
  SocialModule,
  EventsModule,
  LeagueModule,
  BrandsModule,
  LandingModule,
  InitiativeModule,
  ReservationsModule,
  ActivityModule,
  GuildModule,
  DistriktModule,
  TermsModule,
  AboutModule,
  PrivacyModule,
  ReferenceAgreementModule,
  ContactModule,
  JoinFreakickModule,
  EducationModule
];

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, SimpleNotificationsModule, pageModules],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, MessageService, AuthenticationService, CookieService, SecretWordService],
  bootstrap: [AppComponent]

})
export class AppModule { }
