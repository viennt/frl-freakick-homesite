import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SocialLoginModule } from '../plugins/social_network/ng2-social-login.module';
import { SharedModule } from '../shared/shared.module';

/** Import components */
import { LoginComponent } from './login/login.component';
import { HomeSectionComponent } from './home/home-section.component';
import { ActivateFormComponent } from './activate-form/activate-form.component';
import { RequestAccountComponent } from './request-account/request-account.component';
import { ActivateInvitedAccountComponent } from './activate-invited-account/activate-invited-account.component';
// import { ActivateRegisteredAccountComponent } from './activate-registered-account/activate-registered-account.component';
import { ContactFormModule } from '../core/contact-form/contact-form.module';

/** Import services */
import { LocationService } from '../services/location.service';

import { SOCIAL_NETWORK } from '../constants';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestEmailComponent } from './request-email/request-email.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, SharedModule, RouterModule, ReactiveFormsModule, ContactFormModule,
    Ng2SocialLoginModule.initWithProviders(SOCIAL_NETWORK)
  ],
  declarations: [
    LoginComponent, RequestAccountComponent, ActivateFormComponent,HomeSectionComponent,
    ActivateInvitedAccountComponent, ResetPasswordComponent, RequestEmailComponent
    // ActivateRegisteredAccountComponent
  ],
  providers: [LocationService]
})
export class AuthModule { }
