import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventDetailComponent } from './event-detail.component';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { GoogleMapDirectionsModule } from '../../../core/google-map-direction/index';
import { InterestedUser } from './interested-user/interested-user.component';

import { ReviewsComponent } from './reviews/reviews.component';

import { ButtonModule, LoadingCircleModule, PaypalCheckoutButtonModule } from '../../../core/index';
import { CreditCardDirectivesModule } from 'ng2-cc-library/dist/index';

@NgModule({
  imports: [
    RouterModule, FormsModule, ReactiveFormsModule,
    CommonModule, ButtonModule, LoadingCircleModule,
    CreditCardDirectivesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
    }), GoogleMapDirectionsModule, PaypalCheckoutButtonModule],
  exports: [EventDetailComponent, ReviewsComponent],
  declarations: [EventDetailComponent, ReviewsComponent, InterestedUser],
  providers: [],
})
export class EventDetailModule {
}
