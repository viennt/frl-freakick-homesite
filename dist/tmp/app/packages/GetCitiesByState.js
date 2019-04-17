"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'FIND_CITY_BY_STATE';
var GetCitiesByState = (function (_super) {
    __extends(GetCitiesByState, _super);
    function GetCitiesByState() {
        _super.call(this, API_ENDPOINT);
    }
    GetCitiesByState.prototype.setStateId = function (stateId) {
        this.stateId = stateId;
        return this;
    };
    return GetCitiesByState;
}(Package_1.Package));
exports.GetCitiesByState = GetCitiesByState;
