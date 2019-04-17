import { Routes } from '@angular/router';
import { SocialComponent } from './social.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const SocialRoutes: Routes = [
    {
        path: 'social',
        component: SocialComponent,
        canActivate: [CanActivateViaSecretCode]
    },
];
