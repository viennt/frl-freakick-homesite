"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'DELETE_EVENT_REVIEW';
var DeleteEventReview = (function (_super) {
    __extends(DeleteEventReview, _super);
    function DeleteEventReview() {
        _super.call(this, API_ENDPOINT);
    }
    DeleteEventReview.prototype.setReviewId = function (reviewId) {
        this.reviewId = reviewId;
        return this;
    };
    return DeleteEventReview;
}(Package_1.Package));
exports.DeleteEventReview = DeleteEventReview;
