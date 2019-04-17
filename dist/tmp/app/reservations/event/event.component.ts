import {
  Component, OnInit, HostBinding,
  trigger, state, style, keyframes, transition, animate
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'frk-events',
  templateUrl: 'event.component.html',
  styles: [`
      :host {
          display: block;
          min-height: calc(100vh - 200px)
      }
  `],
  animations: [
    trigger('fadeIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', animate(1000, keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 1, offset: 1})
      ]))),
      transition('* => void', animate(1000, keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 1})
      ])))
    ])
  ]
})
export class EventsComponent implements OnInit {
  @HostBinding('@fadeIn') get fadeIn() {
    return 'in';
  }

  constructor() {
    //
  }

  ngOnInit() {
    //
  }

}
