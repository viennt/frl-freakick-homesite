"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('../Package');
var API_ENDPOINT = 'LEAGUE_SEARCH_USER_COMPETITIONS_WITH_SHORT_MODEL';
var LeagueSearchUserCompetitionsWithShortModel = (function (_super) {
    __extends(LeagueSearchUserCompetitionsWithShortModel, _super);
    function LeagueSearchUserCompetitionsWithShortModel() {
        _super.call(this, API_ENDPOINT);
    }
    return LeagueSearchUserCompetitionsWithShortModel;
}(Package_1.Package));
exports.LeagueSearchUserCompetitionsWithShortModel = LeagueSearchUserCompetitionsWithShortModel;
