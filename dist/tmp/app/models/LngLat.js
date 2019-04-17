"use strict";
var LngLat = (function () {
    function LngLat(lng, lat) {
        this.lng = lng || 0;
        this.lat = lat || 0;
    }
    LngLat.prototype.fromArray = function (lnglat) {
        this.lng = lnglat[0];
        this.lat = lnglat[1];
        return this;
    };
    LngLat.prototype.toArray = function () {
        return [this.lng, this.lat];
    };
    LngLat.prototype.setLng = function (lng) {
        this.lng = Number(lng);
        return this;
    };
    LngLat.prototype.getLng = function () {
        return Number(this.lng);
    };
    LngLat.prototype.setLat = function (lat) {
        this.lat = Number(lat);
        return this;
    };
    LngLat.prototype.getLat = function () {
        return Number(this.lat);
    };
    return LngLat;
}());
exports.LngLat = LngLat;
