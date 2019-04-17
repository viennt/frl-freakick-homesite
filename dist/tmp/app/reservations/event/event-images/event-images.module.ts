import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventImagesComponent } from './event-images.component';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { GoogleMapDirectionsModule } from '../../../core/google-map-direction/index';
import { RouterModule } from '@angular/router';


import { LoadingCircleModule } from '../../../core/index';
import { ButtonModule } from '../../../core/button/button.module';

@NgModule({
  imports: [RouterModule, CommonModule, ButtonModule, LoadingCircleModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
    }), GoogleMapDirectionsModule],
  exports: [EventImagesComponent],
  declarations: [EventImagesComponent],
  providers: [],
})
export class EventImagesModule {
}
