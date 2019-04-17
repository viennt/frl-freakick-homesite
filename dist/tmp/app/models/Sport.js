"use strict";
var constants_1 = require('../constants');
var Sport = (function () {
    function Sport(options) {
        this.sportId = options && options.sportId || 0;
        this.sportName = options && options.sportName || 'Unknown sport';
        this.sportIcon = options && Sport.getLogo(options.sportIcon) || '';
    }
    Sport.getLogo = function (logo) {
        if (!logo || logo === 'null') {
            return './assets/images/default/court-default.png';
        }
        else {
            if (logo.startsWith(constants_1.CONFIG.URL))
                return logo;
            return constants_1.CONFIG.URL + '/assets/' + logo;
        }
    };
    return Sport;
}());
exports.Sport = Sport;
