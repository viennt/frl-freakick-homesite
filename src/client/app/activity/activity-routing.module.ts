import { Routes } from '@angular/router';

import { ActivityComponent } from './activity.component';

export const ActivityRoutes: Routes = [
  {
    path: 'activities/:id',
    component: ActivityComponent
  },
];
