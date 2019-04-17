import { Routes } from '@angular/router';
import { ReferenceAgreementComponent } from './reference-agreement.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const ReferenceAgreementRoutes: Routes = [
    {
        path: 'reference-agreement',
        component: ReferenceAgreementComponent,
        canActivate: [CanActivateViaSecretCode]
    },
];
