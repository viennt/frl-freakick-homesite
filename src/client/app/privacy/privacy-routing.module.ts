import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy.component';

// import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const PrivacyRoutes: Routes = [
  {
    path: 'about/privacy',
    component: PrivacyComponent,
    // canActivate: [CanActivateViaSecretCode]
  },
];
