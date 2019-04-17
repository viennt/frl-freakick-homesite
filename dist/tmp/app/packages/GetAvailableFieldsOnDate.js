"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_AVAILABLE_FIELDS_ON_DATE';
var GetAvailableFieldsOnDate = (function (_super) {
    __extends(GetAvailableFieldsOnDate, _super);
    function GetAvailableFieldsOnDate() {
        _super.call(this, API_ENDPOINT);
    }
    GetAvailableFieldsOnDate.prototype.setTime = function (time) {
        this.time = Number(time);
        return this;
    };
    GetAvailableFieldsOnDate.prototype.setSport = function (sport) {
        this.sportId = sport.sportId;
        return this;
    };
    GetAvailableFieldsOnDate.prototype.setCity = function (city) {
        this.cityId = city.cityId;
        return this;
    };
    GetAvailableFieldsOnDate.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetAvailableFieldsOnDate;
}(Package_1.Package));
exports.GetAvailableFieldsOnDate = GetAvailableFieldsOnDate;
