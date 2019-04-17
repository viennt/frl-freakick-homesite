import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ButtonModule } from './posting-event-box/button/button.module';
import { FormGroupModule } from './posting-event-box/form-group/form-group.module';
import { SharedApplicationModule } from '../shared-application/shared-application.module';

import { TimeLinePageComponent }   from './time-line-page.component';
import { PostingEventBoxComponent }   from './posting-event-box/posting-event-box.component';
import { AllEventsComponent }   from './all-events/all-events.component';
import { SingleEventModalComponent } from './single-event-modal/single-event-modal.component';
import { SingleEventPageComponent } from './single-event-page/single-event-page.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, SharedApplicationModule,
    ButtonModule, FormGroupModule, Ng2Bs3ModalModule
  ],
  exports: [TimeLinePageComponent],
  declarations: [
    TimeLinePageComponent, PostingEventBoxComponent,
    AllEventsComponent, SingleEventModalComponent, SingleEventPageComponent
  ],
  providers: [],
})
export class TimeLinePageModule {
}
