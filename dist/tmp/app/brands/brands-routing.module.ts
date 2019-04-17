import { Routes } from '@angular/router';
import { BrandsComponent } from './brands.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const BrandsRoutes: Routes = [
    {
        path: 'brands',
        component: BrandsComponent,
        canActivate: [CanActivateViaSecretCode]
    },
];
