import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PrivacyComponent } from './privacy.component';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [PrivacyComponent],
  providers: [],
})
export class PrivacyModule { }
