"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_USER_INTERESTED_IN_EVENT';
var GetUserInterestedInEvent = (function (_super) {
    __extends(GetUserInterestedInEvent, _super);
    function GetUserInterestedInEvent() {
        _super.call(this, API_ENDPOINT);
    }
    GetUserInterestedInEvent.prototype.setEventId = function (eventId) {
        this.eventId = Number(eventId);
        return this;
    };
    return GetUserInterestedInEvent;
}(Package_1.Package));
exports.GetUserInterestedInEvent = GetUserInterestedInEvent;
