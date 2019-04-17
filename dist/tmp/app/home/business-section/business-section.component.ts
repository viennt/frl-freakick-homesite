import { Component } from '@angular/core';

import { CONFIG } from '../../constants';

@Component({
    moduleId: module.id,
    selector: 'hp-business-section',
    templateUrl: 'business-section.component.html',
    styleUrls: ['business-section.component.css']
})
export class BusinessSectionComponent {
    public externalUrl = CONFIG;
}
