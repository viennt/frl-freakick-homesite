import { Component } from '@angular/core';

import { CONFIG } from '../../constants';

@Component({
  moduleId: module.id,
  selector: 'abt-fifth-section',
  templateUrl: 'fifth-section.component.html',
  styleUrls: ['fifth-section.component.css']
})
export class FifthSectionComponent { 
  public externalUrl = CONFIG;
}
