import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { TimeLineComponent } from './time-line/time-line.component';
import { TimeLineLoadingComponent } from './time-line-loading/time-line-loading.component';
import { TimeLineCardMatchupComponent } from './time-line-card/time-line-card-matchup/time-line-card-matchup.component';
import { TimeLineCardGuildGameComponent } from './time-line-card/time-line-card-guild-game/time-line-card-guild-game.component';
import { TimeLineCardStandardComponent } from './time-line-card/time-line-card-standard/time-line-card-standard.component';
import { TimeLineCardActionComponent } from './time-line-card/time-line-card-action/time-line-card-action.component';

import { ShortEventDetailComponent } from './event-detail/short-event-detail/short-event-detail.component';

@NgModule({
  imports: [CommonModule, RouterModule, Ng2Bs3ModalModule],
  exports: [
    TimeLineComponent, TimeLineLoadingComponent, ShortEventDetailComponent
  ],
  declarations: [
    TimeLineComponent, TimeLineLoadingComponent,
    TimeLineCardMatchupComponent, TimeLineCardGuildGameComponent,
    TimeLineCardStandardComponent, TimeLineCardActionComponent,
    ShortEventDetailComponent,
  ],
  providers: [],
})
export class TemplatesModule {
}
