import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { ContactFormComponent } from './contact-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, Ng2Bs3ModalModule],
  exports: [ContactFormComponent],
  declarations: [ContactFormComponent],
  providers: [],
})
export class ContactFormModule {
}
