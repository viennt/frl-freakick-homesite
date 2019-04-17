import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ScrollModule } from '../core/scroll/index';

import { JoinFreakickComponent } from './join-freakick.component';

@NgModule({
  imports: [SharedModule, ScrollModule],
  exports: [JoinFreakickComponent],
  declarations: [JoinFreakickComponent],
  providers: [],
})
export class JoinFreakickModule { }
