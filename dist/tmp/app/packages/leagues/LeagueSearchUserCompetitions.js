"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('../Package');
var API_ENDPOINT = 'LEAGUE_SEARCH_USER_COMPETITIONS';
var LeagueSearchUserCompetitions = (function (_super) {
    __extends(LeagueSearchUserCompetitions, _super);
    function LeagueSearchUserCompetitions() {
        _super.call(this, API_ENDPOINT);
    }
    LeagueSearchUserCompetitions.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    LeagueSearchUserCompetitions.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return LeagueSearchUserCompetitions;
}(Package_1.Package));
exports.LeagueSearchUserCompetitions = LeagueSearchUserCompetitions;
