"use strict";
var LngLat_1 = require('./LngLat');
var City_1 = require('./City');
var Court = (function () {
    function Court(options) {
        this.id = options && options.branchId || 0;
        this.name = options && options.branchName || 'Unknown branch';
        this.coordinate = options && new LngLat_1.LngLat(options.longitude, options.latitude) || new LngLat_1.LngLat();
        this.address = options && options.address || '';
        this.phoneNumber = options && options.phoneNumber || 0;
        this.city = options && new City_1.City(options.city.cityId, options.city.cityName) || null;
        this.timeZone = options && options.timeZone || '';
        this.rating = options && options.rating || 0;
        this.countRating = options && options.countRating || 0;
    }
    return Court;
}());
exports.Court = Court;
