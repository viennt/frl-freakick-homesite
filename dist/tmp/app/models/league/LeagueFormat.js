"use strict";
var LeagueFormat = (function () {
    function LeagueFormat(options) {
        this.id = options && options.id || -1;
        this.code = options && options.code || 'Unknown league format';
    }
    return LeagueFormat;
}());
exports.LeagueFormat = LeagueFormat;
