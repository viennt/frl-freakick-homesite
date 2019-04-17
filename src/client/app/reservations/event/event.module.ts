import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './event.component';

import { LoadingCircleModule } from '../../core/index';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from '../../core/button/button.module';

import { EventDetailModule } from './event-detail/event-detail.module';
import { EventImagesModule } from './event-images/event-images.module';

@NgModule({
    imports: [
        CommonModule, SharedModule, ButtonModule,
        EventDetailModule, EventImagesModule, LoadingCircleModule
    ],
    exports: [EventsComponent],
    declarations: [EventsComponent],
    providers: [],
})
export class EventsModule { }
