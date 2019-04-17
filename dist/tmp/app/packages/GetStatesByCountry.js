"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'FIND_STATE_BY_COUNTRY';
var GetStatesByCountry = (function (_super) {
    __extends(GetStatesByCountry, _super);
    function GetStatesByCountry() {
        _super.call(this, API_ENDPOINT);
    }
    GetStatesByCountry.prototype.setCountryId = function (countryId) {
        this.countryId = countryId;
        return this;
    };
    return GetStatesByCountry;
}(Package_1.Package));
exports.GetStatesByCountry = GetStatesByCountry;
