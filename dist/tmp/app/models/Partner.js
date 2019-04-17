"use strict";
var constants_1 = require('../constants');
var Partner = (function () {
    function Partner(options) {
        this.partnerId = options && options.partnerId || 0;
        this.partnerName = options && options.partnerName || 'Unknown Partner';
        this.description = options && options.description || '';
        this.specialty = options && options.specialty || 0;
        this.logo = options && Partner.getLogo(options.logo) || '';
        this.slogan = options && options.slogan || '';
        this.iconMarker = options && Partner.getLogo(options.iconMarker) || '';
    }
    Partner.getLogo = function (logo) {
        if (!logo || logo === 'null') {
            return './assets/images/default/court-default.png';
        }
        else {
            if (logo.startsWith(constants_1.CONFIG.URL))
                return logo;
            return constants_1.CONFIG.URL + '/assets/' + logo;
        }
    };
    return Partner;
}());
exports.Partner = Partner;
