"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_AVAILABLE_FACILITIES';
var GetAvailableFacilities = (function (_super) {
    __extends(GetAvailableFacilities, _super);
    function GetAvailableFacilities() {
        _super.call(this, API_ENDPOINT);
    }
    GetAvailableFacilities.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    GetAvailableFacilities.prototype.setSports = function (sports) {
        this.categories = sports.map(function (sport) { return sport.sportId; });
        return this;
    };
    GetAvailableFacilities.prototype.setCity = function (city) {
        this.cityId = city.cityId;
        return this;
    };
    GetAvailableFacilities.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetAvailableFacilities;
}(Package_1.Package));
exports.GetAvailableFacilities = GetAvailableFacilities;
