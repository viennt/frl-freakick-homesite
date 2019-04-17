"use strict";
var constants_1 = require('../../constants');
var Sport_1 = require('../Sport');
var City_1 = require('../City');
var GuildTeam = (function () {
    function GuildTeam(options) {
        this.teamId = options && options.teamId || 0;
        this.teamName = options && options.teamName || 'Freakick Team';
        this.teamLogo = options && GuildTeam.getGuildTeamLogo(options.teamLogo) || 'NaN';
        this.teamRank = options && options.teamRank || 'NaN';
        this.wins = options && options.wins || 0;
        this.losses = options && options.losses || 0;
        this.level = options && options.level || 0;
        this.isOpenSlot = options && options.isOpenSlot || false;
        this.others = {};
        this.sport = options && new Sport_1.Sport(options.sport);
        this.gold = options && Number(options.gold) || 0;
        this.territories = options && Number(options.territories) || 0;
        this.city = options && new City_1.City(options.city.cityId, options.city.cityName);
    }
    GuildTeam.getGuildTeamLogo = function (logo) {
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
    return GuildTeam;
}());
exports.GuildTeam = GuildTeam;
