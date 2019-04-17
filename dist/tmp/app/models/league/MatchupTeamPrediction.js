"use strict";
var MatchupTeamPrediction = (function () {
    function MatchupTeamPrediction(options) {
        this.winPercentage = options && options.winPercentage || 0;
        this.lossPercentage = options && options.lossPercentage || 0;
        this.tiePercentage = options && options.tiePercentage || 0;
        this.countWin = options && options.countWin || 0;
        this.countLoss = options && options.countLoss || 0;
        this.countTie = options && options.countTie || 0;
        this.totalVote = options && options.totalVote || 0;
    }
    return MatchupTeamPrediction;
}());
exports.MatchupTeamPrediction = MatchupTeamPrediction;
