"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'UPDATE_RATING_BRANCH';
var UpdateRatingBranch = (function (_super) {
    __extends(UpdateRatingBranch, _super);
    function UpdateRatingBranch() {
        _super.call(this, API_ENDPOINT);
    }
    UpdateRatingBranch.prototype.setRatingId = function (ratingId) {
        this.ratingId = String(ratingId);
        return this;
    };
    UpdateRatingBranch.prototype.setRating = function (rating) {
        this.rating = Number(rating);
        return this;
    };
    UpdateRatingBranch.prototype.setComment = function (comment) {
        this.comment = String(comment);
        return this;
    };
    return UpdateRatingBranch;
}(Package_1.Package));
exports.UpdateRatingBranch = UpdateRatingBranch;
