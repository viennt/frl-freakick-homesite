import { Routes } from '@angular/router';
import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

import { LoginComponent } from './login/login.component';
import { RequestAccountComponent } from './request-account/request-account.component';
import { ActivateInvitedAccountComponent } from './activate-invited-account/activate-invited-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestEmailComponent } from './request-email/request-email.component';
// import { ActivateRegisteredAccountComponent } from './activate-registered-account/activate-registered-account.component';

export const AuthRoutes: Routes = ([
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CanActivateViaSecretCode]
  },
  {
    path: 'login/continue/:link',
    component: LoginComponent,
    canActivate: [CanActivateViaSecretCode]
  },
  {
    path: 'home',
    component: RequestAccountComponent,
    canActivate: [CanActivateViaSecretCode]
  },
  {
    // /activate/:activeToken
    path: 'activate/:id',
    component: ActivateInvitedAccountComponent
  },
  {
    path: 'register-success',
    redirectTo: '/download',
    pathMatch: 'full'
  },
  {
    path: 'reset-password',
    component: RequestEmailComponent,
    canActivate: [CanActivateViaSecretCode]
  },
  {
    path: 'reset-password/:link',
    component: ResetPasswordComponent,
  },
  {
    path: 'register',
    redirectTo: '/login',
    pathMatch: 'full'
  },
]);
