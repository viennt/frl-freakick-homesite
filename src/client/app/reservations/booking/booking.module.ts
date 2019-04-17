import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookingFieldComponent } from './field-ticket/booking-field-ticket.component';
import { BookingClassComponent } from './class-ticket/booking-class-ticket.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { BookingFacilityComponent } from './facility-ticket/booking-facility-ticket.component';

let components = [
  BookingFieldComponent,
  BookingClassComponent, ClassScheduleComponent,
  BookingFacilityComponent
];

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [components],
  exports: [components]
})
export class BookingModule {
}
