import { Routes } from '@angular/router';
import { TermsComponent } from './terms.component';

// import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const TermsRoutes: Routes = [
    {
        path: 'legal/terms',
        component: TermsComponent,
        // canActivate: [CanActivateViaSecretCode]
    },
];
