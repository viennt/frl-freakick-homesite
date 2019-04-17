import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng2-select/index';

import { AgeGroupFormGroupComponent } from './age-group-form-group.component';

@NgModule({
  imports: [CommonModule, SelectModule],
  exports: [
    AgeGroupFormGroupComponent
  ],
  declarations: [
    AgeGroupFormGroupComponent
  ],
  providers: [],
})
export class FormGroupModule {
}
