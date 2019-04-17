"use strict";
var League_1 = require('./League');
var LeagueFormat_1 = require('./LeagueFormat');
var LeagueCompetition = (function () {
    function LeagueCompetition(options) {
        this.branchId = options && options.branchId || -1;
        this.competitionId = options && options.competitionId || -1;
        this.numberOfKnockout = options && options.numberOfKnockout || 0;
        this.sportId = options && options.sportId || 1;
        this.competitionName = options && options.competitionName || 'Unknown competition';
        this.season = options && options.season || 0;
        this.leagueFormat = new LeagueFormat_1.LeagueFormat();
        this.league = new League_1.League();
    }
    return LeagueCompetition;
}());
exports.LeagueCompetition = LeagueCompetition;
