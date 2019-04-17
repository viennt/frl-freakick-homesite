import { Component } from '@angular/core';

import { CONFIG } from '../../constants';

@Component({
  moduleId: module.id,
  selector: 'sd-new-footer',
  templateUrl: 'new-footer.component.html',
  styleUrls: ['new-footer.component.css']
})
export class NewFooterComponent {
  public externalUrl = CONFIG;
}
