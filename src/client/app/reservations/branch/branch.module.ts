import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoogleMapDirectionsModule } from '../../core/google-map-direction/index';

import { LoadingCircleModule } from '../../core/index';
import { ButtonModule } from '../../core/button/button.module';
import { PaginationModule } from '../../core/pagination/pagination.module';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';

import { BranchComponent } from './branch.component';
import { BookingModule } from '../booking/booking.module';

import { ReceivedBranchCourtsComponent } from './courts/received-branch-courts.component';
import { ReceivedBranchClassesComponent } from './classes/received-branch-classes.component';
import { ReceivedBranchFacilitiesComponent } from './facilities/received-branch-facilities.component';
import { ReviewBranchComponent } from './reviews/index';
import { UpdateReviewBranchComponent } from './reviews/index';
import { ShowReviewComponent } from './reviews/index';

let components = [
  BranchComponent,
  ReceivedBranchCourtsComponent,
  ReceivedBranchClassesComponent,
  ReceivedBranchFacilitiesComponent,
  ReviewBranchComponent, UpdateReviewBranchComponent,
  ShowReviewComponent
];

@NgModule({
  imports: [CommonModule, FormsModule, BookingModule,
    ButtonModule, LoadingCircleModule, PaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
    }), GoogleMapDirectionsModule],
  declarations: [components],
  exports: [components]
})
export class BranchModule {
}
