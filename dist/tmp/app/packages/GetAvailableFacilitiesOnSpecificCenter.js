"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_AVAILABLE_FACILITIES_ON_SPECIFIC_CENTER';
var GetAvailableFacilitiesOnSpecificCenter = (function (_super) {
    __extends(GetAvailableFacilitiesOnSpecificCenter, _super);
    function GetAvailableFacilitiesOnSpecificCenter() {
        _super.call(this, API_ENDPOINT);
    }
    GetAvailableFacilitiesOnSpecificCenter.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    GetAvailableFacilitiesOnSpecificCenter.prototype.setSports = function (sports) {
        this.categories = sports.map(function (sport) { return sport.sportId; });
        return this;
    };
    GetAvailableFacilitiesOnSpecificCenter.prototype.setCourt = function (court) {
        this.branchId = Number(court.id);
        return this;
    };
    GetAvailableFacilitiesOnSpecificCenter.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetAvailableFacilitiesOnSpecificCenter;
}(Package_1.Package));
exports.GetAvailableFacilitiesOnSpecificCenter = GetAvailableFacilitiesOnSpecificCenter;
