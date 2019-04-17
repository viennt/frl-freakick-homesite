import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ScrollModule } from '../core/scroll/index';
import { DistriktComponent } from './distrikt.component';
import { SecondSectionComponent } from './second-section/second-section.component';

@NgModule({
    imports: [SharedModule, ScrollModule],
    exports: [DistriktComponent],
    declarations: [DistriktComponent, SecondSectionComponent],
    providers: [],
})
export class DistriktModule { }
