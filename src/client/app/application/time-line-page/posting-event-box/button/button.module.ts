import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllDayButtonComponent } from './all-day-button.component';
import { ScheduleButtonComponent } from './schedule-button.component';
import { ReminderButtonComponent } from './reminder-button.component';
import { AgeGroupButtonComponent } from './age-group-button.component';
import { ImageButtonComponent } from './image-button.component';
import { AddressButtonComponent } from './address-button.component';

import { UploadService } from '../../../../services/upload.service';

@NgModule({
  imports: [CommonModule],
  exports: [
    AllDayButtonComponent, ScheduleButtonComponent, ReminderButtonComponent,
    AgeGroupButtonComponent, ImageButtonComponent, AddressButtonComponent
  ],
  declarations: [
    AllDayButtonComponent, ScheduleButtonComponent, ReminderButtonComponent,
    AgeGroupButtonComponent, ImageButtonComponent, AddressButtonComponent
  ],
  providers: [UploadService],
})
export class ButtonModule {
}
