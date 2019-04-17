"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_COMMENT_OF_EVENT';
var GetReviewsOfEvent = (function (_super) {
    __extends(GetReviewsOfEvent, _super);
    function GetReviewsOfEvent() {
        _super.call(this, API_ENDPOINT);
        this.eventId = -1;
        this.scheduledClassId = -1;
        this.matchupId = -1;
        this.guildGameId = null;
    }
    GetReviewsOfEvent.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    GetReviewsOfEvent.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetReviewsOfEvent;
}(Package_1.Package));
exports.GetReviewsOfEvent = GetReviewsOfEvent;
