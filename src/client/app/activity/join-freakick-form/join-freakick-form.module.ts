import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { JoinFreakickFormComponent } from './join-freakick-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, Ng2Bs3ModalModule],
  exports: [JoinFreakickFormComponent],
  declarations: [JoinFreakickFormComponent],
  providers: [],
})
export class JoinFreakickFormModule {
}
