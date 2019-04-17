"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'SEARCH_CITY_BY_NAME_AND_STATE';
var SearchCityByNameAndState = (function (_super) {
    __extends(SearchCityByNameAndState, _super);
    function SearchCityByNameAndState() {
        _super.call(this, API_ENDPOINT);
    }
    SearchCityByNameAndState.prototype.setCityName = function (cityName) {
        this.city = String(cityName).trim();
        return this;
    };
    SearchCityByNameAndState.prototype.setStateName = function (stateName) {
        this.state = String(stateName).trim();
        return this;
    };
    SearchCityByNameAndState.prototype.setCountryName = function (countryName) {
        this.country = String(countryName).trim();
        return this;
    };
    return SearchCityByNameAndState;
}(Package_1.Package));
exports.SearchCityByNameAndState = SearchCityByNameAndState;
