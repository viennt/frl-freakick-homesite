import { Routes } from '@angular/router';
import { DistriktComponent } from './distrikt.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const DistriktRoutes: Routes = [
    {
        path: 'distrikt',
        component: DistriktComponent,
        // canActivate: [CanActivateViaSecretCode]
    },
];
