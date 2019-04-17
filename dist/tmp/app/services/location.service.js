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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.geolocationOptions = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };
    }
    LocationService.prototype.getCurrentPosition = function (successCallback) {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (possition) {
            var pos = {
                location: {
                    lng: possition.coords.longitude,
                    lat: possition.coords.latitude
                }
            };
            successCallback(pos);
        }, function (error) {
            _this.getCurrentPositionByGoogleAPI()
                .then(function (position) {
                successCallback(position);
            });
        }, this.geolocationOptions);
    };
    LocationService.prototype.getCurrentPositionByGoogleAPI = function () {
        return this.http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD2DeGymLqcAkcO_qOE0rKXUbFPswrtQD8', JSON.stringify({}), { headers: this.headers }).map(this.extractData).toPromise();
    };
    LocationService.prototype.getAddress = function (lngLat) {
        var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
            + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI&language=en'
            + '&latlng=' + lngLat.getLat() + ',' + lngLat.getLng();
        return this.http.get(apiUrl).map(this.extractData).toPromise();
    };
    LocationService.prototype.getCitiesByAddress = function (formattedAddress) {
        var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
            + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
            + '&address=' + formattedAddress;
        return this.http.get(apiUrl).map(this.extractData).toPromise();
    };
    LocationService.prototype.getTimeZone = function (latLng) {
        var apiUrl = 'https://maps.googleapis.com/maps/api/timezone/json'
            + '?timestamp=1331766000'
            + '&key=AIzaSyDROIp4tRM7q5OAgj67TCXrzpaFDd5KxJE'
            + '&location=' + latLng.lat + ',' + latLng.lng;
        return this.http.get(apiUrl).map(this.extractData).toPromise();
    };
    LocationService.prototype.searchAddressByKeyWord = function (formattedAddress) {
        var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
            + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI&language=en'
            + '&address=' + formattedAddress;
        return this.http.get(apiUrl).map(this.extractData).toPromise();
    };
    LocationService.prototype.extractData = function (res) {
        return res.json();
    };
    LocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
