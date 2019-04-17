"use strict";
var Commissioner_1 = require('./Commissioner');
var Sport_1 = require('../Sport');
var constants_1 = require('../../constants');
var League = (function () {
    function League(options) {
        this.alternateId = options && options.alternateId || 0;
        this.leagueId = options && options.leagueId || 0;
        this.leagueName = options && options.leagueName || 'unknow league name';
        this.leagueLogo = options && options.leagueLogo || 'unknow league logo';
        this.competitionId = options && options.competitionId || 0;
        this.currentRound = options && options.currentRound || 0;
        this.commissioner = options && new Commissioner_1.Commissioner(options.commissioner);
        this.latitude = options && options.latitude || 0;
        this.longitude = options && options.longitude || 0;
        this.location = options && options.location || 'unknow location';
        this.twitter = options && options.twitter || 'unknow twitter';
        this.weekId = options && options.weekId || 0;
        this.isAuthenticated = options && options.isAuthenticated || false;
        if (options && options.sport) {
            this.sport = new Sport_1.Sport(options.sport);
        }
        this.leagueType = options && options.leagueType || 'Unknow league type';
    }
    League.getLeagueLogo = function (logo) {
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
    return League;
}());
exports.League = League;
