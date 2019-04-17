import { Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';
import { CanActivateViaAuthGuard } from '../guards/canActivateViaAuthGuard';

import { DemoGraphicRoutes } from './demo-graphic/demo-graphic-routing.module';
import { TimeLinePageRoutes } from './time-line-page/time-line-page-routing.module';

export const ApplicationRoutes: Routes = [
  {
    path: 'app',
    component: ApplicationComponent,
    canActivate: [CanActivateViaSecretCode, CanActivateViaAuthGuard],
    children: [
      { path: '', redirectTo: 'newsfeed', pathMatch: 'full'},
      ...DemoGraphicRoutes,
      ...TimeLinePageRoutes,
      { path: '**', redirectTo: 'newsfeed', pathMatch: 'full'}
    ]
  },
];
