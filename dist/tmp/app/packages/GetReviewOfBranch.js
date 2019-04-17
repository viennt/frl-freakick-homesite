"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_REVIEWS_OF_BRANCH';
var GetReviewOfBranch = (function (_super) {
    __extends(GetReviewOfBranch, _super);
    function GetReviewOfBranch() {
        _super.call(this, API_ENDPOINT);
    }
    GetReviewOfBranch.prototype.setBranch = function (branch) {
        this.branchId = branch.id;
        return this;
    };
    GetReviewOfBranch.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetReviewOfBranch;
}(Package_1.Package));
exports.GetReviewOfBranch = GetReviewOfBranch;
