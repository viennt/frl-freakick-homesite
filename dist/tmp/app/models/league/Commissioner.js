"use strict";
var constants_1 = require('../../constants');
var Commissioner = (function () {
    function Commissioner(options) {
        this.userId = options && options.userId || -1;
        this.userName = options && options.userName || 'Unknown';
        this.userImage = Commissioner.getLeagueUserImage(options.userImage);
        this.userEmail = options && options.userEmail || 'Unknow';
    }
    Commissioner.getLeagueUserImage = function (userImage) {
        if (!userImage || userImage === 'null') {
            return './assets/images/default/user_logo.png';
        }
        else {
            if (userImage.startsWith(constants_1.CONFIG.URL))
                return userImage;
            else if (userImage.startsWith('./assets'))
                return userImage;
            return constants_1.CONFIG.URL + '/assets/' + userImage;
        }
    };
    return Commissioner;
}());
exports.Commissioner = Commissioner;
