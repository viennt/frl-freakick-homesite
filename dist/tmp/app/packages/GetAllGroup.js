"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_ALL_GROUP';
var GetAllGroup = (function (_super) {
    __extends(GetAllGroup, _super);
    function GetAllGroup() {
        _super.call(this, API_ENDPOINT);
    }
    return GetAllGroup;
}(Package_1.Package));
exports.GetAllGroup = GetAllGroup;
