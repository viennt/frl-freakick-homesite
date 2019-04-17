import { Component } from '@angular/core';

import { TimeLineCardStandardComponent } from '../time-line-card-standard/time-line-card-standard.component';

@Component({
  moduleId: module.id,
  selector: 'app-template-time-line-card-guild-game',
  templateUrl: 'time-line-card-guild-game.component.html',
  styles: [`
      .game-result__team-logo img {
          max-height: 100%;
      }
      @media (min-width: 992px) {
          .game-result__team {
              text-align: center;
          }
      }
      @media (min-width: 992px) {
          .game-result__team--first .game-result__team-logo {
              margin: 0 0 10px 0;
              float: none;
          }
      }
      @media (min-width: 992px) {
          .game-result__team--second .game-result__team-logo {
              margin: 0 0 10px 0;
              float: none;
          }
      }
      @media (min-width: 992px) {
          .game-result__team-info {
               padding-top: 10px; 
          }
      }
  `]
})
export class TimeLineCardGuildGameComponent extends TimeLineCardStandardComponent {
  constructor() {
    super();
  }
}
