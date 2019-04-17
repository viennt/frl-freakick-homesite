import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { RegistrationFormComponent } from './registration-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, Ng2Bs3ModalModule],
  exports: [RegistrationFormComponent],
  declarations: [RegistrationFormComponent],
  providers: [],
})
export class RegistrationFormModule {
}
