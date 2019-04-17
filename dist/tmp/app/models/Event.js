"use strict";
var Category_1 = require('./Category');
var Court_1 = require('./Court');
var Sport_1 = require('./Sport');
var User_1 = require('./User');
var help_service_1 = require('../services/help.service');
var constants_1 = require('../constants');
var Event = (function () {
    function Event(options) {
        this.id = options && options.id || -1;
        this.name = options && options.name || '';
        this.description = options && options.description || '';
        this.contactEmail = options && options.contactEmail || '';
        this.contactPhone = options && options.contactPhone || '';
        this.ticketPrice = options && options.ticketPrice || 0;
        this.registrationLink = options && options.registrationLink || '';
        this.capacity = options && options.capacity || 0;
        this.sports = options && options.lstSport
            && options.lstSport.map(function (data) { return new Sport_1.Sport(data); }) || [];
        this.categories = options && options.lstCategory
            && options.lstCategory.map(function (data) { return new Category_1.Category(data); }) || [];
        this.address = options && options.address || '';
        this.latitude = options && options.latitude || 0;
        this.longitude = options && options.longitude || 0;
        this.numberOfRegisteredUsers = options && options.numberOfRegisteredUsers || 0;
        this.numberOfComments = options && options.numberOfComments || 0;
        this.numberOfLikes = options && options.numberOfLikes || 0;
        this.availableSlots = options && options.availableSlots || 0;
        this.status = options && options.status || {
            id: -1, statusCode: 'Unknown code', statusName: 'Unknown status'
        };
        this.repeatType = options && options.repeatType || 0;
        if (this.repeatType === 1) {
            this.repeatTypeName = 'Daily';
        }
        else if (this.repeatType === 2) {
            this.repeatTypeName = 'Weekly';
        }
        else if (this.repeatType === 3) {
            this.repeatTypeName = 'Monthly';
        }
        else {
            this.repeatTypeName = 'No repeat';
        }
        this.repeatFrequency = options && options.repeatFrequency || 1;
        this.isOccurMonday = options && options.isOccurMonday || false;
        this.isOccurTuesday = options && options.isOccurTuesday || false;
        this.isOccurWednesday = options && options.isOccurWednesday || false;
        this.isOccurThursday = options && options.isOccurThursday || false;
        this.isOccurFriday = options && options.isOccurFriday || false;
        this.isOccurSaturday = options && options.isOccurSaturday || false;
        this.isOccurSunday = options && options.isOccurSunday || false;
        this.canGuestModify = options && options.canGuestModify || false;
        this.canGuestInviteOthers = options && options.canGuestInviteOthers || false;
        this.canGuestSeeGuest = options && options.canGuestSeeGuest || false;
        this.notificationBy = options && options.notificationBy || 1;
        this.notificationBeforeHours = options && options.notificationBeforeHours || 0;
        this.requiredCheckIn = options && options.requiredCheckIn || false;
        this.localTimeZone = options && options.localTimeZone || 'UTC';
        var fieldTimezoneOffset = help_service_1.HelpService.getTimezoneOffset(this.localTimeZone);
        this.startDate = options && options.startDate && help_service_1.HelpService.convertUTCToLocalTime(options.startDate, this.localTimeZone) || '';
        this.endDate = options && options.endDate && help_service_1.HelpService.convertUTCToLocalTime(options.endDate, this.localTimeZone) || undefined;
        this.isAllDateEvent = options && !!options.isAllDateEvent;
        this.startTime = options && (options.startTime !== undefined)
            && help_service_1.HelpService.convertDoubleTimeToString(options.startTime + fieldTimezoneOffset) || '';
        this.endTime = options && (options.endTime !== undefined)
            && help_service_1.HelpService.convertDoubleTimeToString(options.endTime + fieldTimezoneOffset) || '';
        this.endDateType = options && options.endDateType || 1;
        this.endDateTypeName = options && options.endDateTypeName || 'Unknown end date type';
        this.eventType = options && options.eventType;
        this.eventTypeName = options && options.eventTypeName || 'Unknown event type';
        this.sponsoredByBranch = options && new Court_1.Court(options.sponsoredByBranch) || new Court_1.Court();
        this.images = options && options.images.map(function (item) { return Event.getImage(item); }) || Event.getImage('');
        var userData = options && options.createdBy && {
            userId: options.createdBy.id,
            userName: options.createdBy.userName,
            userImage: options.createdBy.userImage,
            email: options.createdBy.email
        } || {};
        this.createdBy = userData && new User_1.User(userData) || new User_1.User();
        this.hasMainEvent = options && options.hasMainEvent;
        this.hasSubEvent = options && options.hasSubEvent;
        this.isMemberOnly = options && options.isMemberOnly;
        this.isPublic = options && options.isPublic;
        this.registrationStartDate = options && options.registrationStartDate &&
            help_service_1.HelpService.convertUTCToLocalTime(options.registrationStartDate, this.localTimeZone) || '';
        this.registrationEndDate = options && options.registrationEndDate &&
            help_service_1.HelpService.convertUTCToLocalTime(options.registrationEndDate, this.localTimeZone) || '';
    }
    Event.getImage = function (image) {
        image = image && image.split(' ').join('%20');
        if (!image || image === 'null') {
            return './assets/images/default/event.png';
        }
        else {
            if (image.startsWith(constants_1.CONFIG.URL))
                return image;
            return constants_1.CONFIG.URL + '/assets/' + image;
        }
    };
    Event.type = {
        PickupGame: 0, Personal: 1, Sponsored: 2,
        Branch: 3, GuildTeam: 4, LeagueTeam: 5,
        ScheduledClass: 6, LeagueMatchup: 7, GuildGame: 8
    };
    Event.repeatType = {
        NoRepeat: 0, Daily: 1, Weekly: 2, Monthly: 3
    };
    Event.notificationType = {
        Message: 1, Email: 2
    };
    return Event;
}());
exports.Event = Event;
