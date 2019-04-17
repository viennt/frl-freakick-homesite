import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core/core-module';

import { LoadingCircleModule } from '../../core/index';

import { LocationService } from '../../services/location.service';
import { BookingModule } from '../booking/booking.module';

import { SearchComponent } from './search.component';
import { ReceivedCourtsComponent } from './courts/received-courts.component';
import { ReceivedClassesComponent } from './classes/received-classes.component';
import { ReceivedFacilitiesComponent } from './facilities/received-facilities.component';
import { ReceivedEventsComponent } from './events/received-events.component';

let components = [
  SearchComponent,
  ReceivedCourtsComponent,
  ReceivedClassesComponent,
  ReceivedFacilitiesComponent,
  ReceivedEventsComponent
];

@NgModule({
  imports: [CommonModule, BookingModule, RouterModule, LoadingCircleModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
    })],
  declarations: [components],
  exports: [components],
  providers: [LocationService],
})
export class SearchModule { }
