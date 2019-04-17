import { Routes } from '@angular/router';
import { EducationComponent } from './education.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const EducationRoutes: Routes = [
    {
        path: 'education',
        component: EducationComponent,
        canActivate: [CanActivateViaSecretCode]
    },
];
