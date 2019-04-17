import { Component } from '@angular/core';

import { CONFIG } from '../../constants';

@Component({
    moduleId: module.id,
    selector: 'hp-home-section',
    templateUrl: 'home-section.component.html',
    styleUrls: ['home-section.component.css']
})
export class HomeSectionComponent {
    public externalUrl = CONFIG;
}
