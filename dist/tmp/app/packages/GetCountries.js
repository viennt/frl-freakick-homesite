"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_COUNTRIES';
var GetCountries = (function (_super) {
    __extends(GetCountries, _super);
    function GetCountries() {
        _super.call(this, API_ENDPOINT);
    }
    return GetCountries;
}(Package_1.Package));
exports.GetCountries = GetCountries;
