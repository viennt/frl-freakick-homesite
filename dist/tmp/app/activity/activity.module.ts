import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from '../core/button/button.module';
import { PaypalCheckoutButtonModule } from '../core/paypal-checkout-button/paypal-checkout-button.module';

import { RegistrationFormModule } from './registration-form/registration-form.module';
import { JoinFreakickFormModule } from './join-freakick-form/join-freakick-form.module';

import { ActivityComponent } from './activity.component';

@NgModule({
  imports: [
    RouterModule, SharedModule, ButtonModule, PaypalCheckoutButtonModule,
    RegistrationFormModule, JoinFreakickFormModule, MarkdownModule.forRoot(),
  ],
  exports: [],
  declarations: [ActivityComponent],
  providers: [],
})
export class ActivityModule {
}
