import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ScrollModule } from '../core/scroll/index';
import { SocialComponent } from './social.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { BreakSectionComponent } from './break-section/break-section.component';

@NgModule({
    imports: [SharedModule, ScrollModule],
    exports: [SocialComponent],
    declarations: [SocialComponent, FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent, FourthSectionComponent, BreakSectionComponent],
    providers: [],
})
export class SocialModule { }
