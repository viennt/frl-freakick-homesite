import { Component, Input } from '@angular/core';

import { Event } from '../../../../../models/Event';

@Component({
  moduleId: module.id,
  selector: 'app-template-time-line-card-standard',
  templateUrl: 'time-line-card-standard.component.html'
})
export class TimeLineCardStandardComponent {
  @Input() event: Event;

  expandEventDescription: boolean;
  expandEventMap: boolean;

  constructor() {
    //
  }
}
