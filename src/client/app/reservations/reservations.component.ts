import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'frk-reservations',
  templateUrl: 'reservations.component.html',
  styles: [`
      :host {
          display: block;
          height: 100%;
          background: #fcfcfc
      }

      :host .container {
          margin-top: 15px;
      }
  `]
})
export class ReservationsComponent {
}
