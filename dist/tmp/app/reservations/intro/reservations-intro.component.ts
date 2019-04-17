import { Component } from '@angular/core';

import { features } from '../../home/features-list';

@Component({
  moduleId: module.id,
  selector: 'rs-reservations-intro',
  templateUrl: 'reservations-intro.component.html',
  styleUrls: ['reservations-intro.component.css']
})
export class ReservationsIntroComponent {
  public reservationsFeature = features[2];
}
