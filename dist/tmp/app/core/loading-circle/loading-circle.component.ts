import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'frk-loading-circle',
  template: '<div class="uil-ring-css" style="transform:scale(0.5);"><div></div></div>',
  styleUrls: ['loading-circle.component.css']
})
export class LoadingCircleComponent {
}
