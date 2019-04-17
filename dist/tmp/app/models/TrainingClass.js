"use strict";
var Group_1 = require('./Group');
var Sport_1 = require('./Sport');
var Court_1 = require('./Court');
var help_service_1 = require('../services/help.service');
var TrainingClass = (function () {
    function TrainingClass(options) {
        this.classId = options && options.classId || -1;
        this.className = options && options.className || 'Unknown class';
        this.classCode = options && options.classCode || 'Unknown code';
        this.duration = options && options.duration || 0;
        this.group = options && options.group && new Group_1.Group(options.group) || new Group_1.Group();
        this.branch = options && options.branch && new Court_1.Court(options.branch) || new Court_1.Court();
        this.category = options && options.category && new Sport_1.Sport(options.category) || new Sport_1.Sport();
        this.dayPrice = options && options.dayPrice || 0;
        this.wholeClassPrice = options && options.wholeClassPrice || 0;
        this.from = options && help_service_1.HelpService.convertUTCToLocalTime(options.from, this.branch.timeZone, 'YYYY-MM-DD') || '';
        this.to = options && help_service_1.HelpService.convertUTCToLocalTime(options.to, this.branch.timeZone, 'YYYY-MM-DD') || '';
    }
    return TrainingClass;
}());
exports.TrainingClass = TrainingClass;
