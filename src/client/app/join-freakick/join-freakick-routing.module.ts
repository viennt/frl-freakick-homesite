import { Routes } from '@angular/router';
import { JoinFreakickComponent } from './join-freakick.component';

// import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const JoinFreakickRoutes: Routes = [
  {
    path: 'join-freakick',
    component: JoinFreakickComponent,
    // canActivate: [CanActivateViaSecretCode]
  },
];
