"use strict";
var MatchupTeamPrediction_1 = require('./MatchupTeamPrediction');
var MatchupVote = (function () {
    function MatchupVote(options) {
        this.homeTeamPrediction = options && new MatchupTeamPrediction_1.MatchupTeamPrediction(options.homeTeamPrediction) || new MatchupTeamPrediction_1.MatchupTeamPrediction();
        this.awayTeamPrediction = options && new MatchupTeamPrediction_1.MatchupTeamPrediction(options.awayTeamPrediction) || new MatchupTeamPrediction_1.MatchupTeamPrediction();
        ;
    }
    return MatchupVote;
}());
exports.MatchupVote = MatchupVote;
