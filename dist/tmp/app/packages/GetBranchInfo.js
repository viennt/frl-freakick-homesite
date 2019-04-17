"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_BRANCH_INFO';
var GetBranchInfo = (function (_super) {
    __extends(GetBranchInfo, _super);
    function GetBranchInfo() {
        _super.call(this, API_ENDPOINT);
    }
    GetBranchInfo.prototype.setBranchId = function (branchId) {
        this.branchId = Number(branchId);
        return this;
    };
    return GetBranchInfo;
}(Package_1.Package));
exports.GetBranchInfo = GetBranchInfo;
