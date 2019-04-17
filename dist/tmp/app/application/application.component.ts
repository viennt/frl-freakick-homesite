import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'frk-application',
  templateUrl: 'application.component.html',
  styleUrls: [
    'assets/css/components.min.css',
    'assets/css/plugins.min.css',
    'assets/css/layout.min.css',
    'assets/css/light.min.css',
    'assets/css/alchemists.css',
    'assets/css/simple-line-icon.min.css',
    'application.component.css'
  ],
  encapsulation : ViewEncapsulation.None
})
export class ApplicationComponent {

  constructor() {
    //
  }
}
