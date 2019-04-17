import { Routes } from '@angular/router';

import { TimeLinePageComponent } from './time-line-page.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { SingleEventModalComponent } from './single-event-modal/single-event-modal.component';
import { SingleEventPageComponent } from './single-event-page/single-event-page.component';

export const TimeLinePageRoutes: Routes = [
  { path: 'newsfeed', component: TimeLinePageComponent, children: [
      { path: '', component: AllEventsComponent },
      { path: '?mode=standalone', redirectTo: '/', pathMatch: 'full'},
      // { path: ':id', component: SingleEventPageComponent },
      { path: ':id', component: SingleEventModalComponent, outlet: 'event' }
    ]
  }
];
