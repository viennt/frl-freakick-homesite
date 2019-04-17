"use strict";
var MatchupState = (function () {
    function MatchupState(options) {
        this.matchStateId = options && options.matchStateId || -1;
        this.matchStateCode = options && options.matchStateCode || 'CODE';
        this.matchStateName = options && options.matchStateName || 'Unknown match state';
    }
    MatchupState.prototype.isComingUp = function () {
        return this.matchStateCode === 'CU';
    };
    MatchupState.prototype.isLive = function () {
        return this.matchStateCode === 'LI';
    };
    MatchupState.prototype.isFinished = function () {
        return this.matchStateCode === 'FT';
    };
    MatchupState.prototype.isIncompleteLineup = function () {
        return this.matchStateCode === 'IC';
    };
    return MatchupState;
}());
exports.MatchupState = MatchupState;
