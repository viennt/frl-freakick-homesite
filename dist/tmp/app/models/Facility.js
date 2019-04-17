"use strict";
var Court_1 = require('./Court');
var Sport_1 = require('./Sport');
var Partner_1 = require('./Partner');
var help_service_1 = require('../services/help.service');
var Facility = (function () {
    function Facility(options) {
        this.fieldId = options && options.fieldId || 0;
        this.fieldCode = options && options.fieldCode || 0;
        this.fieldSize = options && options.fieldSize || 0;
        this.fieldType = options && new Sport_1.Sport(options.fieldType) || new Sport_1.Sport();
        this.branch = options && new Court_1.Court(options.branch) || new Court_1.Court();
        this.isAvailable = options && options.isAvailable || false;
        this.partner = options && new Partner_1.Partner(options.partner) || new Partner_1.Partner();
        this.isNotAllowGuest = options && options.isNotAllowGuest || false;
        var fieldTimezoneOffset = help_service_1.HelpService.getTimezoneOffset(this.branch.timeZone);
        this.openedTime = options && options.openedTime
            && help_service_1.HelpService.convertDoubleTimeToString(options.openedTime + fieldTimezoneOffset) || '';
        this.closedTime = options && options.closedTime
            && help_service_1.HelpService.convertDoubleTimeToString(options.closedTime + fieldTimezoneOffset) || '';
    }
    return Facility;
}());
exports.Facility = Facility;
