"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'ADD_RATING_BRANCH';
var AddRatingBranch = (function (_super) {
    __extends(AddRatingBranch, _super);
    function AddRatingBranch() {
        _super.call(this, API_ENDPOINT);
    }
    AddRatingBranch.prototype.setBranch = function (branch) {
        this.partnerBranchId = branch.id;
        return this;
    };
    AddRatingBranch.prototype.setRating = function (rating) {
        this.rating = Number(rating);
        return this;
    };
    AddRatingBranch.prototype.setComment = function (comment) {
        this.comment = String(comment);
        return this;
    };
    return AddRatingBranch;
}(Package_1.Package));
exports.AddRatingBranch = AddRatingBranch;
