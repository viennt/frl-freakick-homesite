"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/Rx');
var constants = require('../constants');
var HelpService = (function () {
    function HelpService() {
    }
    HelpService.getTimezoneOffset = function (timezone) {
        var offset = moment().tz(timezone).format('Z');
        return HelpService.convertStringTimeToDouble(offset);
    };
    HelpService.convertStringTimeToDouble = function (time) {
        var arrTime = time.split(':');
        var minutes = (arrTime[1] === '00') ? '' : '5';
        return Number(arrTime[0] + '.' + minutes);
    };
    HelpService.convertDoubleTimeToString = function (time) {
        time = (time < 0) ? (24 + time) : time;
        time = (time >= 24) ? (time - 24) : time;
        var hour = (Math.floor(time) < 10) ? ('0' + Math.floor(time)) : (Math.floor(time) + '');
        var minute = String('0' + Math.round(time % 1 * 60)).substr(-2);
        return hour + ':' + minute;
    };
    HelpService.convertUTCToLocalTime = function (date, timezone, format) {
        if (format === void 0) { format = constants.DATE_TIME.LOCAL_FORMAT; }
        return moment.utc(date).local().tz(timezone).format(format) + '';
    };
    HelpService.getTimeLocalToUTC = function (time, timeZoneOffset) {
        time = time - timeZoneOffset;
        time = time < 0 ? (time + 24) : time >= 24 ? (time - 24) : time;
        var h = time < 10 ? '0' + (time * 10 - (time * 10) % 10) / 10 : (time * 10 - (time * 10) % 10) / 10 + '';
        var m = (time * 10) % 10 === 0 ? '00' : '30';
        return h + ':' + m;
    };
    HelpService.getListHoursInDay = function () {
        var hour;
        var hourH;
        var hours = [];
        for (var i = 0; i < 24; i++) {
            var period = i >= 12 ? 'PM' : 'AM';
            if (i < 10) {
                i = Number('0' + i);
            }
            var h = i;
            h = (h > 12) ? h - 12 : h;
            h = h ? h : 12;
            hour = { value: i, name: h + ':00 ' + period };
            hourH = { value: i + 0.5, name: h + ':30 ' + period };
            hours.push(hour);
            hours.push(hourH);
        }
        return hours;
    };
    HelpService.getUserLogo = function (logo) {
        if (!logo || logo === 'null') {
            return './assets/images/default/user_logo.png';
        }
        else {
            if (logo.startsWith(constants.CONFIG.URL))
                return logo;
            else if (logo.startsWith('./assets'))
                return logo;
            return constants.CONFIG.URL + '/assets/' + logo;
        }
    };
    HelpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HelpService);
    return HelpService;
}());
exports.HelpService = HelpService;
