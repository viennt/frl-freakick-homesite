"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'SEARCH_EVENTS';
var GetEvents = (function (_super) {
    __extends(GetEvents, _super);
    function GetEvents() {
        _super.call(this, API_ENDPOINT);
        this.keyWord = '';
        this.lstEventType = [];
    }
    GetEvents.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    GetEvents.prototype.setEventType = function (lstEventType) {
        this.lstEventType = lstEventType;
        return this;
    };
    GetEvents.prototype.setStatus = function (codes) {
        this.statusCodes = codes;
        return this;
    };
    GetEvents.prototype.setCoordinate = function (lngLat) {
        this.latitude = lngLat.getLat();
        this.longitude = lngLat.getLng();
        return this;
    };
    GetEvents.prototype.setRadius = function (radius) {
        this.radiusKm = radius;
        return this;
    };
    GetEvents.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetEvents;
}(Package_1.Package));
exports.GetEvents = GetEvents;
