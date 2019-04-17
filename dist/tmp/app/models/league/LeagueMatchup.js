"use strict";
var LeagueTeam_1 = require('./LeagueTeam');
var LeagueStanding_1 = require('./LeagueStanding');
var LeagueWeek_1 = require('./LeagueWeek');
var MatchupLocation_1 = require('./MatchupLocation');
var MatchupState_1 = require('./MatchupState');
var MatchupVote_1 = require('./MatchupVote');
var help_service_1 = require('../../services/help.service');
var LeagueMatchup = (function () {
    function LeagueMatchup(options) {
        this.matchupId = options && options.matchupId || -1;
        this.actualMinute = options && options.actualMinute || 0;
        this.actualMinuteAdded = options && options.actualMinuteAdded || 0;
        this.awayScore = options && options.awayScore || 0;
        this.homeScore = options && options.homeScore || 0;
        this.matchupDate = options && options.matchupDate || '';
        this.code = options && options.code || 'CODE';
        this.awayTeam = options && options.awayTeam && new LeagueTeam_1.LeagueTeam(options.awayTeam) || new LeagueTeam_1.LeagueTeam();
        this.homeTeam = options && options.homeTeam && new LeagueTeam_1.LeagueTeam(options.homeTeam) || new LeagueTeam_1.LeagueTeam();
        this.awayTeamCompetition = options && options.awayTeamCompetition &&
            new LeagueStanding_1.LeagueStanding(options.awayTeamCompetition) || new LeagueStanding_1.LeagueStanding();
        this.homeTeamCompetition = options && options.homeTeamCompetition &&
            new LeagueStanding_1.LeagueStanding(options.homeTeamCompetition) || new LeagueStanding_1.LeagueStanding();
        this.location = options && options.location && new MatchupLocation_1.MatchupLocation(options.location) || new MatchupLocation_1.MatchupLocation();
        this.matchupState = options && options.matchState && new MatchupState_1.MatchupState(options.matchState) || new MatchupState_1.MatchupState();
        this.week = options && options.week && new LeagueWeek_1.LeagueWeek(options.week) || new LeagueWeek_1.LeagueWeek();
        this.vote = options && options.matchVoteInfo && new MatchupVote_1.MatchupVote(options.matchVoteInfo) || new MatchupVote_1.MatchupVote();
        this.isUserLiked = options && options.isUserLiked;
        this.numberOfLikes = options && options.numberOfLikes || 0;
        this.numberOfComments = options && options.numberOfComments || 0;
    }
    LeagueMatchup.prototype.convertMatchupDate = function (locationService) {
        var _this = this;
        locationService.getTimeZone(this.location.coordinate).then(function (data) {
            var timezone = data.timeZoneId || 'America/New_York';
            _this.matchupDate = help_service_1.HelpService.convertUTCToLocalTime(_this.matchupDate, timezone);
        });
        return this;
    };
    LeagueMatchup.prototype.isHomeWin = function () {
        return this.homeScore > this.awayScore;
    };
    LeagueMatchup.prototype.isHomeLose = function () {
        return this.homeScore < this.awayScore;
    };
    LeagueMatchup.prototype.isAwayWin = function () {
        return this.homeScore < this.awayScore;
    };
    LeagueMatchup.prototype.isAwayLose = function () {
        return this.homeScore > this.awayScore;
    };
    LeagueMatchup.prototype.isGameDraw = function () {
        return this.homeScore === this.awayScore;
    };
    return LeagueMatchup;
}());
exports.LeagueMatchup = LeagueMatchup;
