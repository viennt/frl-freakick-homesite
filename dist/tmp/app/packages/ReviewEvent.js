"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'COMMENT_AN_EVENT';
var ReviewEvent = (function (_super) {
    __extends(ReviewEvent, _super);
    function ReviewEvent() {
        _super.call(this, API_ENDPOINT);
        this.eventId = -1;
        this.scheduledClassId = -1;
        this.matchupId = -1;
        this.guildGameId = null;
    }
    ReviewEvent.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    ReviewEvent.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    return ReviewEvent;
}(Package_1.Package));
exports.ReviewEvent = ReviewEvent;
