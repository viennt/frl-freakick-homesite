import { Component, Input, ViewChild } from '@angular/core';

import { Event } from '../../../../models/Event';

@Component({
  moduleId: module.id,
  selector: 'app-template-time-line',
  templateUrl: 'time-line.component.html',
  styleUrls: ['time-line.component.css'],
})
export class TimeLineComponent {
  @Input() events: Event[];

  selectedEvent: Event;
  eventTypes = Event.type;

  constructor() {
    //
  }

}
