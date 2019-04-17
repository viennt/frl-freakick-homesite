import { Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail.component';
import { EventImagesComponent } from '../event-images/event-images.component';

export const EventDetailRoutes: Routes = [
    {
        path: ':id',
        component: EventDetailComponent
    },
    {
        path: ':id/images',
        component: EventImagesComponent
    }
];
