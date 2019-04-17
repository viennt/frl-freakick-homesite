import { Component } from '@angular/core';

import { CONFIG } from '../../constants';

@Component({
  moduleId: module.id,
  selector: 'sd-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent {
  public externalUrl = CONFIG;
}
