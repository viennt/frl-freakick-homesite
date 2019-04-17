import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ScrollModule } from '../core/scroll/index';
import { EventsComponent } from './events.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';

@NgModule({
    imports: [SharedModule, ScrollModule],
    exports: [EventsComponent],
    declarations: [EventsComponent, FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent],
    providers: [],
})
export class EventsModule { }
