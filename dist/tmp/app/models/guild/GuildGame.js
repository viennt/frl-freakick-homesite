"use strict";
var LngLat_1 = require('../LngLat');
var constants_1 = require('../../constants');
var GuildGame = (function () {
    function GuildGame(options) {
        this.gameId = options && options.gameId || null;
        this.venueAddress = options && options.venueAddress || '';
        this.coordinate = options && new LngLat_1.LngLat(options.location.longitude, options.location.latitude) || null;
        this.when = options && GuildGame.convertTime(options.when) || '';
        this.responseTime = options && options.responseTime || '';
        this.amountOfGold = options && options.gold || null;
        this.lastProposedId = options && options.lastProposedId || null;
        this.host = options && options.host || null;
    }
    GuildGame.convertTime = function (time) {
        return moment.utc(time).local().format(constants_1.DATE_TIME.SERVER_FORMAT);
    };
    return GuildGame;
}());
exports.GuildGame = GuildGame;
