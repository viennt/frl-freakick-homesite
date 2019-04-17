"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_USER_RATING_FOR_BRANCH';
var GetRatingBranch = (function (_super) {
    __extends(GetRatingBranch, _super);
    function GetRatingBranch() {
        _super.call(this, API_ENDPOINT);
    }
    GetRatingBranch.prototype.setBranch = function (branch) {
        this.branchId = branch.id;
        return this;
    };
    return GetRatingBranch;
}(Package_1.Package));
exports.GetRatingBranch = GetRatingBranch;
