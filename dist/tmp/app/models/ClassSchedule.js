"use strict";
var Schedule_1 = require('./Schedule');
var ClassSchedule = (function () {
    function ClassSchedule(options) {
        this.scheduleId = options && options.scheduleId || -1;
        this.monday = options && options.monday && new Schedule_1.Schedule(options.monday) || null;
        this.tuesday = options && options.tuesday && new Schedule_1.Schedule(options.tuesday) || null;
        this.wednesday = options && options.wednesday && new Schedule_1.Schedule(options.wednesday) || null;
        this.thursday = options && options.thursday && new Schedule_1.Schedule(options.thursday) || null;
        this.friday = options && options.friday && new Schedule_1.Schedule(options.friday) || null;
        this.saturday = options && options.saturday && new Schedule_1.Schedule(options.saturday) || null;
        this.sunday = options && options.sunday && new Schedule_1.Schedule(options.sunday) || null;
    }
    return ClassSchedule;
}());
exports.ClassSchedule = ClassSchedule;
