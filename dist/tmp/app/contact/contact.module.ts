import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './contact.component';
import { NotificationSuccessPopupComponent } from './notification-success-popup/notification-success-popup.component';
import { FormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports: [SharedModule, FormsModule, Ng2Bs3ModalModule],
  exports: [],
  declarations: [ContactComponent, NotificationSuccessPopupComponent],
  providers: [],
})
export class ContactModule { }
