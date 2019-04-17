import { Component } from '@angular/core';

import { features } from '../features-list';

@Component({
  moduleId: module.id,
  selector: 'hp-freakick-features',
  templateUrl: 'freakick-features.component.html',
  styleUrls: ['freakick-features.component.css']
})
export class FreakickFeaturesComponent {

  public socialFeature = features[0];
  public leaguesFeature = features[1];
  public reservationsFeature = features[2];

}
