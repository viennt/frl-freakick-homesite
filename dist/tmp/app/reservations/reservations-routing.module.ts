import { Routes } from '@angular/router';
// import { ReservationsComponent } from './reservations.component';
import { ReservationsIntroComponent } from './intro/reservations-intro.component';

// import { BranchRoutes } from './branch/index';
// import { EventsRoutes } from './event/index';
// import { SearchRoutes, SearchComponent } from './search/index';
//
// import { CanActivateViaAuthGuard } from '../guards/canActivateViaAuthGuard';
// import { CanActivateViaSecretCode } from '../guards/canActiveViaSecretCode';

export const ReservationsRoutes: Routes = [
    // {
    //     path: 'reservations',
    //     component: ReservationsComponent,
    //     canActivate: [CanActivateViaSecretCode, CanActivateViaAuthGuard],
    //     children: [
    //         ...BranchRoutes,
    //         ...EventsRoutes,
    //         ...SearchRoutes,
    //         {
    //             path: '',
    //             component: SearchComponent
    //         }
    //     ]
    // },
    {
        path: 'reservations/intro',
        component: ReservationsIntroComponent
    }
];
