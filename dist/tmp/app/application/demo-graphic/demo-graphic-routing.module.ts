import { Routes } from '@angular/router';
import { DemoGraphicComponent } from './demo-graphic.component';

import { CanActivateViaSecretCode } from '../../guards/canActiveViaSecretCode';
import { CanActivateViaAuthGuard } from '../../guards/canActivateViaAuthGuard';

export const DemoGraphicRoutes: Routes = [
  {
    path: 'demo-graphic',
    component: DemoGraphicComponent,
    canActivate: [CanActivateViaSecretCode, CanActivateViaAuthGuard]
  },
];
