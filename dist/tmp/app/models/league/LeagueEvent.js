"use strict";
var LeagueTeam_1 = require('./LeagueTeam');
var LeaguePlayer_1 = require('./LeaguePlayer');
var LeagueEvent = (function () {
    function LeagueEvent(options) {
        this.matchUpEventId = options && options.matchUpEventId || -1;
        this.matchUpId = options && options.matchUpId || -1;
        this.teamLeagueInfo = options && options.teamLeagueInfo && new LeagueTeam_1.LeagueTeam(options.teamLeagueInfo) || new LeagueTeam_1.LeagueTeam();
        this.player = options && options.player && new LeaguePlayer_1.LeaguePlayer(options.player) || new LeaguePlayer_1.LeaguePlayer();
        this.player2 = options && options.player2 && new LeaguePlayer_1.LeaguePlayer(options.player2) || new LeaguePlayer_1.LeaguePlayer();
        this.eventActionName = options && options.eventActionName || 'Unknown competition';
        this.eventMinute = options && options.eventMinute || 0;
        this.eventMinuteAdded = options && options.eventMinuteAdded || 0;
    }
    return LeagueEvent;
}());
exports.LeagueEvent = LeagueEvent;
