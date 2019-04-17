"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'SEARCH_AVAILABLE_CLASS_BY_OWNER_ON_SPECIFIC_CENTER';
var SearchAvailableClassByOwnerOnSpecificCenter = (function (_super) {
    __extends(SearchAvailableClassByOwnerOnSpecificCenter, _super);
    function SearchAvailableClassByOwnerOnSpecificCenter() {
        _super.call(this, API_ENDPOINT);
        this.from = 1483203600000;
        this.to = 1609437599000;
    }
    SearchAvailableClassByOwnerOnSpecificCenter.prototype.setKeyWord = function (keyWord) {
        this.keyWord = String(keyWord);
        return this;
    };
    SearchAvailableClassByOwnerOnSpecificCenter.prototype.setSports = function (sports) {
        this.categories = sports.map(function (sport) { return sport.sportId; });
        return this;
    };
    SearchAvailableClassByOwnerOnSpecificCenter.prototype.setGroups = function (groups) {
        this.groups = groups.map(function (group) { return group.groupId; });
        return this;
    };
    SearchAvailableClassByOwnerOnSpecificCenter.prototype.setCourt = function (court) {
        this.branchId = Number(court.id);
        return this;
    };
    SearchAvailableClassByOwnerOnSpecificCenter.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return SearchAvailableClassByOwnerOnSpecificCenter;
}(Package_1.Package));
exports.SearchAvailableClassByOwnerOnSpecificCenter = SearchAvailableClassByOwnerOnSpecificCenter;
