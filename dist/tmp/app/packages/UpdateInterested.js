"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'USER_LIKE_OR_UNLIKE_AN_EVENT';
var LikeOrUnlikeAnEvent = (function (_super) {
    __extends(LikeOrUnlikeAnEvent, _super);
    function LikeOrUnlikeAnEvent() {
        _super.call(this, API_ENDPOINT);
        this.eventId = -1;
        this.scheduledClassId = -1;
        this.matchupId = -1;
        this.guildGameId = null;
    }
    LikeOrUnlikeAnEvent.prototype.setEventId = function (eventId) {
        this.eventId = Number(eventId);
        return this;
    };
    return LikeOrUnlikeAnEvent;
}(Package_1.Package));
exports.LikeOrUnlikeAnEvent = LikeOrUnlikeAnEvent;
