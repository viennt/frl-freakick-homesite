import { Routes } from '@angular/router';
import { GuildComponent } from './guild.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const GuildRoutes: Routes = [
    {
        path: 'guild',
        component: GuildComponent,
        // canActivate: [CanActivateViaSecretCode]
    },
];
