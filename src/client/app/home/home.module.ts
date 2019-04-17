import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ScrollModule } from '../core/scroll/index';

import { SharedModule } from '../shared/shared.module';
import { FreakickFeaturesComponent } from './freakick-features/freakick-features.component';
import { WhatOnFreakickComponent } from './what-on-freakick/what-on-freakick.component';
import { BrandSectionComponent } from './brand-section/brand-section.component';
import { BusinessSectionComponent } from './business-section/business-section.component';
import { ReservationsSectionComponent } from './reservations-section/reservations-section.component';
import { BreakSectionComponent } from './break-section/break-section.component';
import { StartsWithYouComponent } from './starts-with-you/starts-with-you.component';

@NgModule({
  imports: [CommonModule, SharedModule, ScrollModule],
  declarations: [
    HomeComponent, FreakickFeaturesComponent,
    WhatOnFreakickComponent, BreakSectionComponent,
    StartsWithYouComponent, BusinessSectionComponent,
    BrandSectionComponent, ReservationsSectionComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
