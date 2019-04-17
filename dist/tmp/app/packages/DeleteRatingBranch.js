"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'DELETE_RATING_BRANCH';
var DeleteRatingBranch = (function (_super) {
    __extends(DeleteRatingBranch, _super);
    function DeleteRatingBranch() {
        _super.call(this, API_ENDPOINT);
    }
    DeleteRatingBranch.prototype.setRatingId = function (ratingId) {
        this.ratingId = String(ratingId);
        return this;
    };
    return DeleteRatingBranch;
}(Package_1.Package));
exports.DeleteRatingBranch = DeleteRatingBranch;
