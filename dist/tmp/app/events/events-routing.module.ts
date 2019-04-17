import { Routes } from '@angular/router';
import { EventsComponent } from './events.component';

import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const EventsRoutes: Routes = [
    {
        path: 'events',
        component: EventsComponent,
        canActivate: [CanActivateViaSecretCode]
    },
];
