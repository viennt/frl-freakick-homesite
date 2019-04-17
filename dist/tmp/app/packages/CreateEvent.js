"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'CREATE_EVENT';
var CreateEvent = (function (_super) {
    __extends(CreateEvent, _super);
    function CreateEvent() {
        _super.call(this, API_ENDPOINT);
        this.endDateType = 2;
        this.sponsoredByBranchId = -1;
        this.sponsoredByTeamId = -1;
        this.sponsoredByTeamLeagueId = -1;
        this.price = 0;
        this.images = [];
        this.capacity = 0;
        this.ageGroup = [];
        this.sports = [];
        this.canGuestModify = false;
        this.canGuestInviteOthers = false;
        this.canGuestSeeGuest = false;
        this.notificationBy = 1;
        this.notificationBeforeHours = 1;
    }
    CreateEvent.prototype.setName = function (name) {
        this.name = String(name);
        return this;
    };
    CreateEvent.prototype.setDescription = function (description) {
        this.description = String(description);
        return this;
    };
    CreateEvent.prototype.setDate = function (startDate, endDate) {
        this.startDate = Number(startDate);
        this.endDate = Number(endDate);
        return this;
    };
    CreateEvent.prototype.setTime = function (isAllDay, startTime, endTime) {
        this.isAllDateEvent = Boolean(isAllDay);
        this.startTime = isAllDay ? 0 : Number(startTime);
        this.endTime = isAllDay ? 0 : Number(endTime);
        return this;
    };
    CreateEvent.prototype.setType = function (eventType) {
        this.eventType = Number(eventType);
        return this;
    };
    CreateEvent.prototype.setRepeat = function (repeatType, repeatFrequency, weekDay) {
        this.repeatType = Number(repeatType);
        this.repeatFrequency = Number(repeatFrequency);
        this.isOccurSunday = (repeatType === 2) ? Boolean(weekDay[0]) : false;
        this.isOccurMonday = (repeatType === 2) ? Boolean(weekDay[1]) : false;
        this.isOccurTuesday = (repeatType === 2) ? Boolean(weekDay[2]) : false;
        this.isOccurWednesday = (repeatType === 2) ? Boolean(weekDay[3]) : false;
        this.isOccurThursday = (repeatType === 2) ? Boolean(weekDay[4]) : false;
        this.isOccurFriday = (repeatType === 2) ? Boolean(weekDay[5]) : false;
        this.isOccurSaturday = (repeatType === 2) ? Boolean(weekDay[6]) : false;
        return this;
    };
    CreateEvent.prototype.setTimeZone = function (localTimeZone) {
        this.localTimeZone = String(localTimeZone);
        return this;
    };
    CreateEvent.prototype.setSponsor = function (branchId, teamId, teamLeagueId) {
        this.sponsoredByBranchId = branchId || -1;
        this.sponsoredByTeamId = teamId || -1;
        this.sponsoredByTeamLeagueId = teamLeagueId || -1;
        return this;
    };
    CreateEvent.prototype.setContact = function (email, phone) {
        this.contactEmail = String(email);
        this.contactPhone = String(phone);
        return this;
    };
    CreateEvent.prototype.setPrice = function (price) {
        this.price = Number(price);
        return this;
    };
    CreateEvent.prototype.setCapacity = function (capacity) {
        this.capacity = Number(capacity);
        return this;
    };
    CreateEvent.prototype.setLocation = function (address, lngLat) {
        this.address = String(address);
        this.longitude = lngLat.getLng();
        this.latitude = lngLat.getLat();
        return this;
    };
    CreateEvent.prototype.setGuest = function (canGuestModify, canGuestInviteOthers, canGuestSeeGuest) {
        this.canGuestModify = canGuestModify;
        this.canGuestInviteOthers = canGuestInviteOthers;
        this.canGuestSeeGuest = canGuestSeeGuest;
        return this;
    };
    CreateEvent.prototype.setNotification = function (notificationBy, notificationBeforeHours) {
        this.notificationBy = notificationBy;
        this.notificationBeforeHours = notificationBeforeHours;
        return this;
    };
    CreateEvent.prototype.setImages = function (images) {
        this.images = images;
        return this;
    };
    CreateEvent.prototype.setGroups = function (groups) {
        this.ageGroup = groups;
        return this;
    };
    CreateEvent.prototype.setIsSocialEvent = function (value) {
        this.isSocialEvent = value;
        return this;
    };
    CreateEvent.prototype.setSports = function (sports) {
        this.sports = sports;
        return this;
    };
    return CreateEvent;
}(Package_1.Package));
exports.CreateEvent = CreateEvent;
