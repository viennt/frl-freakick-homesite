"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var google_maps_api_wrapper_1 = require('angular2-google-maps/core/services/google-maps-api-wrapper');
var LngLat_1 = require('../../models/LngLat');
var GoogleMapDirectionsDirective = (function () {
    function GoogleMapDirectionsDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.error = new core_1.EventEmitter();
    }
    GoogleMapDirectionsDirective.prototype.ngOnInit = function () {
        var _this = this;
        var request = {
            destination: this.origin,
            origin: this.destination,
            travelMode: 'DRIVING'
        };
        this.gmapsApi.getNativeMap().then(function (map) {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            directionsService.route(request, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    console.warn('Directions request failed due to ' + status);
                    window.alert('Sorry! We can not get direction');
                    _this.error.emit('Sorry! We can not get direction');
                }
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', LngLat_1.LngLat)
    ], GoogleMapDirectionsDirective.prototype, "origin", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', LngLat_1.LngLat)
    ], GoogleMapDirectionsDirective.prototype, "destination", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GoogleMapDirectionsDirective.prototype, "error", void 0);
    GoogleMapDirectionsDirective = __decorate([
        core_1.Directive({
            selector: 'sebm-google-map-directions',
        }), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper])
    ], GoogleMapDirectionsDirective);
    return GoogleMapDirectionsDirective;
}());
exports.GoogleMapDirectionsDirective = GoogleMapDirectionsDirective;
