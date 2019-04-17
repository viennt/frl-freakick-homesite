"use strict";
var GuildGame_1 = require('./GuildGame');
var GuildTeam_1 = require('./GuildTeam');
var GameStatus_1 = require('./GameStatus');
var GuildTeamGame = (function () {
    function GuildTeamGame(options) {
        this.id = options && options.id || 0;
        this.game = options && new GuildGame_1.GuildGame(options.game) || new GuildGame_1.GuildGame();
        this.gameStatus = options && new GameStatus_1.GameStatus(options.gameStatus) || new GameStatus_1.GameStatus();
        this.homeTeam = options && new GuildTeam_1.GuildTeam(options.homeTeam) || new GuildTeam_1.GuildTeam();
        this.awayTeam = options && new GuildTeam_1.GuildTeam(options.awayTeam) || new GuildTeam_1.GuildTeam();
        this.homeScore = (options && options.homeScore)
            || (options && options.lstGameResultVerifying && options.lstGameResultVerifying[0].homeTeamScore)
            || 0;
        this.awayScore = (options && options.awayScore)
            || (options && options.lstGameResultVerifying && options.lstGameResultVerifying[0].awayTeamScore)
            || 0;
    }
    GuildTeamGame.prototype.isHomeWin = function () {
        return this.homeScore > this.awayScore;
    };
    GuildTeamGame.prototype.isHomeLose = function () {
        return this.homeScore < this.awayScore;
    };
    GuildTeamGame.prototype.isAwayWin = function () {
        return this.homeScore < this.awayScore;
    };
    GuildTeamGame.prototype.isAwayLose = function () {
        return this.homeScore > this.awayScore;
    };
    GuildTeamGame.prototype.isGameDraw = function () {
        return this.homeScore === this.awayScore;
    };
    return GuildTeamGame;
}());
exports.GuildTeamGame = GuildTeamGame;
