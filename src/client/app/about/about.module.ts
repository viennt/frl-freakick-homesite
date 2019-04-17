import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ScrollModule } from '../core/scroll/index';

import { AboutComponent } from './about.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { BuildSectionComponent } from './build-section/build-section.component';
import { NetworkSectionComponent } from './network-section/network-section.component';

@NgModule({
  imports: [SharedModule, ScrollModule],
  exports: [AboutComponent],
  declarations: [
    AboutComponent, FirstSectionComponent,
    SecondSectionComponent, ThirdSectionComponent,
    FourthSectionComponent, FifthSectionComponent,
    BuildSectionComponent, NetworkSectionComponent
  ],
  providers: [],
})
export class AboutModule { }
