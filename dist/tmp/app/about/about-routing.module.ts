import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';

// import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const AboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    // canActivate: [CanActivateViaSecretCode]
  },
];
