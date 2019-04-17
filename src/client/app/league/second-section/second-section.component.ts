import { Component } from '@angular/core';

import { CONFIG } from '../../constants';

@Component({
  moduleId: module.id,
  selector: 'lg-second-section',
  templateUrl: 'second-section.component.html',
  styleUrls: ['second-section.component.css']
})
export class SecondSectionComponent {
  public externalUrl = CONFIG;
}
