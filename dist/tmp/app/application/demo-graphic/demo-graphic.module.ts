import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedApplicationModule } from '../shared-application/shared-application.module';

import { DemoGraphicComponent }   from './demo-graphic.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedApplicationModule],
  exports: [],
  declarations: [DemoGraphicComponent],
  providers: [],
})
export class DemoGraphicModule {
}
