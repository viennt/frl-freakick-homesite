import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReservationsComponent } from './reservations.component';
import { ReservationsIntroComponent } from './intro/reservations-intro.component';

import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from '../core/button/button.module';
// import { EventsModule } from './event/index';
// import { BranchModule } from './branch/index';
// import { SearchModule } from './search/index';

@NgModule({
    imports: [CommonModule, SharedModule, ButtonModule],
    declarations: [ReservationsIntroComponent],
    exports: [],
    providers: []
})
export class ReservationsModule { }
