"use strict";
var constants_1 = require('../../constants');
var LeaguePlayer = (function () {
    function LeaguePlayer(options) {
        this.playerId = options && options.playerId || 0;
        this.playerPhoto = options && options.playerPhoto &&
            LeaguePlayer.getLeaguePlayerLogo(options.playerPhoto) ||
            LeaguePlayer.getLeaguePlayerLogo('');
        this.number = options && options.number || -1;
        this.city = options && options.city || {};
        this.userId = options && options.userId || 1;
        this.playerName = options && options.playerName || '';
        this.playerImageBg = options && options.playerImageBg &&
            LeaguePlayer.getLeaguePlayerLogo(options.playerImageBg) ||
            LeaguePlayer.getLeaguePlayerLogo('');
        this.playerRole = options && options.playerRole || {};
    }
    LeaguePlayer.getLeaguePlayerLogo = function (image) {
        if (!image || image === 'null') {
            return './assets/images/default/team_image.png';
        }
        else {
            if (image.startsWith(constants_1.CONFIG.URL))
                return image;
            else if (image.startsWith('./assets'))
                return image;
            return URL + '/assets/' + image;
        }
    };
    return LeaguePlayer;
}());
exports.LeaguePlayer = LeaguePlayer;
