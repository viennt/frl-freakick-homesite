"use strict";
var constants_1 = require('../../constants');
var Sport_1 = require('../Sport');
var LeagueTeam = (function () {
    function LeagueTeam(options) {
        this.teamId = options && options.teamId || -1;
        this.teamName = options && options.teamName || 'Unknown Team';
        this.teamLogo = options && options.teamLogo &&
            LeagueTeam.getLeagueTeamLogo(options.teamLogo) ||
            LeagueTeam.getLeagueTeamLogo('');
        this.teamRank = options && options.teamRank || 0;
        this.wins = options && options.wins || 0;
        this.ties = options && options.ties || 0;
        this.losses = options && options.losses || 0;
        this.points = options && options.points || 0;
        this.city = options && options.city || { cityId: 0, cityName: '' };
        this.sport = options && options.sport && new Sport_1.Sport(options.sport) || new Sport_1.Sport();
    }
    LeagueTeam.getLeagueTeamLogo = function (logo) {
        if (!logo || logo === 'null') {
            return './assets/images/default/logo.png';
        }
        else {
            if (logo.startsWith(constants_1.CONFIG.URL))
                return logo;
            else if (logo.startsWith('./assets'))
                return logo;
            return constants_1.CONFIG.URL + '/assets/' + logo;
        }
    };
    return LeagueTeam;
}());
exports.LeagueTeam = LeagueTeam;
