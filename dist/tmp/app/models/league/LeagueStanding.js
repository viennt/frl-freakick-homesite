"use strict";
var LeagueTeam_1 = require('./LeagueTeam');
var LeagueStanding = (function () {
    function LeagueStanding(options) {
        this.competitionId = options && options.competitionId || -1;
        this.competitionTeamId = options && options.competitionTeamId;
        this.goalsAgainst = options && options.goalsAgainst || 0;
        this.goalsFor = options && options.goalsFor || 0;
        this.leagueGroup = options && options.leagueGroup || 0;
        this.losses = options && options.losses || 0;
        this.points = options && options.points || 0;
        this.team = options && options.team && new LeagueTeam_1.LeagueTeam(options.team) || new LeagueTeam_1.LeagueTeam();
        this.teamPosition = options && options.teamPosition || 0;
        this.ties = options && options.ties || 0;
        this.userEmail = options && options.userEmail || '';
        this.wins = options && options.wins || 0;
    }
    return LeagueStanding;
}());
exports.LeagueStanding = LeagueStanding;
