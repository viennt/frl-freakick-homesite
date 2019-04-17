import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ScrollModule } from '../core/scroll/index';
import { InitiativeComponent } from './initiative.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { SixthSectionComponent } from './sixth-section/sixth-section.component';
import { BreakSectionComponent } from './break-section/break-section.component';

@NgModule({
    imports: [SharedModule, ScrollModule],
    exports: [InitiativeComponent],
    declarations: [
        InitiativeComponent, FirstSectionComponent,
        SecondSectionComponent, ThirdSectionComponent,
        FourthSectionComponent, FifthSectionComponent,
        SixthSectionComponent, BreakSectionComponent
    ],
    providers: [],
})
export class InitiativeModule { }
