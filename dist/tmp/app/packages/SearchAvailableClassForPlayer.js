"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'SEARCH_AVAILABLE_CLASS_FOR_PLAYER';
var SearchAvailableClassForPlayer = (function (_super) {
    __extends(SearchAvailableClassForPlayer, _super);
    function SearchAvailableClassForPlayer() {
        _super.call(this, API_ENDPOINT);
    }
    SearchAvailableClassForPlayer.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    SearchAvailableClassForPlayer.prototype.setSports = function (sports) {
        this.categories = sports.map(function (sport) { return sport.sportId; });
        return this;
    };
    SearchAvailableClassForPlayer.prototype.setGroups = function (groups) {
        this.groups = groups.map(function (group) { return group.groupId; });
        return this;
    };
    SearchAvailableClassForPlayer.prototype.setCity = function (city) {
        this.cityId = city.cityId;
        return this;
    };
    SearchAvailableClassForPlayer.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return SearchAvailableClassForPlayer;
}(Package_1.Package));
exports.SearchAvailableClassForPlayer = SearchAvailableClassForPlayer;
