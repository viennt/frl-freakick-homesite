"use strict";
var TrainingClass_1 = require('./TrainingClass');
var ClassSchedule_1 = require('./ClassSchedule');
var FacilityClass = (function () {
    function FacilityClass(options) {
        this.trainingClass = options && options.trainingClass && new TrainingClass_1.TrainingClass(options.trainingClass) || null;
        this.classSchedule = options && options.classSchedule && new ClassSchedule_1.ClassSchedule(options.classSchedule) || null;
    }
    return FacilityClass;
}());
exports.FacilityClass = FacilityClass;
