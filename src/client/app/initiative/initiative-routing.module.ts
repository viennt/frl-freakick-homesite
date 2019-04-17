import { Routes } from '@angular/router';
import { InitiativeComponent } from './initiative.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const InitiativeRoutes: Routes = [
    {
        path: 'initiative',
        component: InitiativeComponent,
        canActivate: [CanActivateViaSecretCode]
    },
];

