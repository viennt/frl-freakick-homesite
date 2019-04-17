import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ScrollModule } from '../core/scroll/index';
import { EducationComponent } from './education.component';
import { SecondSectionComponent } from './second-section/second-section.component';

@NgModule({
    imports: [SharedModule, ScrollModule],
    exports: [EducationComponent],
    declarations: [EducationComponent, SecondSectionComponent],
    providers: [],
})
export class EducationModule { }
