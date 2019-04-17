"use strict";
var Facility_1 = require('./Facility');
var help_service_1 = require('../services/help.service');
var Schedule = (function () {
    function Schedule(options) {
        this.field = options && options.field && new Facility_1.Facility(options.field) || new Facility_1.Facility();
        var fieldTimezoneOffset = help_service_1.HelpService.getTimezoneOffset(this.field.branch.timeZone);
        this.from = options && options.from && help_service_1.HelpService.convertDoubleTimeToString(options.from + fieldTimezoneOffset) || '';
        this.to = options && options.to && help_service_1.HelpService.convertDoubleTimeToString(options.to + fieldTimezoneOffset) || '';
    }
    return Schedule;
}());
exports.Schedule = Schedule;
