import { Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';

import { LngLat } from '../../models/LngLat';

declare let google: any;

@Directive({
  selector: 'sebm-google-map-directions',
})
export class GoogleMapDirectionsDirective implements OnInit {
  @Input() origin: LngLat;
  @Input() destination: LngLat;
  @Output() error: EventEmitter<any> = new EventEmitter();

  constructor(private gmapsApi: GoogleMapsAPIWrapper) {
  }

  ngOnInit() {
    let request = {
      destination: this.origin,
      origin: this.destination,
      travelMode: 'DRIVING'
    };
    this.gmapsApi.getNativeMap().then((map: any) => {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);
      directionsService.route(request, (response: any, status: any) => {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          console.warn('Directions request failed due to ' + status);
          window.alert('Sorry! We can not get direction');
          this.error.emit('Sorry! We can not get direction');
        }
      });

    });
  }
}
