"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('../Package');
var API_ENDPOINT = 'LEAGUE_GET_TEAMS_BY_USER';
var LeagueGetTeamByUser = (function (_super) {
    __extends(LeagueGetTeamByUser, _super);
    function LeagueGetTeamByUser() {
        _super.call(this, API_ENDPOINT);
    }
    LeagueGetTeamByUser.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return LeagueGetTeamByUser;
}(Package_1.Package));
exports.LeagueGetTeamByUser = LeagueGetTeamByUser;
