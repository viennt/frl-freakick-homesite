import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [CanActivateViaSecretCode]
    },
];
