import { Routes } from '@angular/router';
import { EventsComponent } from './event.component';

import { EventDetailRoutes } from './event-detail/event-detail-routing.module';

export const EventsRoutes: Routes = [
    {
        path: 'event',
        component: EventsComponent,
        children: [
            ...EventDetailRoutes
        ]
    },
];
