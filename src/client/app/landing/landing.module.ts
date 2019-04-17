import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ButtonModule } from '../core/button/button.module';
import { SharedModule } from '../shared/shared.module';
import { ContactFormModule } from '../core/contact-form/contact-form.module';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, SharedModule, ContactFormModule],
  declarations: [LandingComponent],
  exports: [LandingComponent],
  providers: []
})
export class LandingModule { }
