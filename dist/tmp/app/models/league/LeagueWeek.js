"use strict";
var LeagueWeek = (function () {
    function LeagueWeek(options) {
        this.weekId = options && options.weekId || -1;
        this.weekNumber = options && options.weekNumber || 0;
        this.weekName = options && options.weekName || 'Unknown week';
    }
    return LeagueWeek;
}());
exports.LeagueWeek = LeagueWeek;
