import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DownloadComponent } from './download.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DownloadComponent],
  exports: [DownloadComponent]
})
export class DownloadModule { }
