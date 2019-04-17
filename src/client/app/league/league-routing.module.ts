import { Routes } from '@angular/router';
import { LeagueComponent } from './league.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const LeagueRoutes: Routes = [
    {
        path: 'leagues',
        component: LeagueComponent,
        canActivate: [CanActivateViaSecretCode]
    },
];
