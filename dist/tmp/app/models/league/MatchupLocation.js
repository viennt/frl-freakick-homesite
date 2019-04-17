"use strict";
var LngLat_1 = require('../LngLat');
var MatchupLocation = (function () {
    function MatchupLocation(options) {
        this.coordinate = options && new LngLat_1.LngLat(options.longitude, options.latitude) || new LngLat_1.LngLat();
        this.stadiumId = options && options.stadiumId || -1;
        this.stadiumName = options && options.stadiumName || 'Unknown stadium';
    }
    return MatchupLocation;
}());
exports.MatchupLocation = MatchupLocation;
