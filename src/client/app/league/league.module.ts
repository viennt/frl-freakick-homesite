import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ScrollModule } from '../core/scroll/index';
import { LeagueComponent } from './league.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';

@NgModule({
    imports: [SharedModule, ScrollModule],
    exports: [LeagueComponent],
    declarations: [
      LeagueComponent, FirstSectionComponent,
        SecondSectionComponent, ThirdSectionComponent
    ],
    providers: [],
})
export class LeagueModule { }
