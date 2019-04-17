import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Import components */
import { NotificationComponent } from './notification.component';
import { SimpleNotificationsComponent } from './simple-notifications.component';

/** Import services */
import { NotificationsService } from './notifications.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SimpleNotificationsComponent, NotificationComponent],
  exports: [SimpleNotificationsComponent ,NotificationComponent],
  providers: [NotificationsService],
})
export class SimpleNotificationsModule { }
