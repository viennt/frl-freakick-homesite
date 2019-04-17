"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_USER_CREATED_EVENTS';
var GetUserCreatedEvents = (function (_super) {
    __extends(GetUserCreatedEvents, _super);
    function GetUserCreatedEvents() {
        _super.call(this, API_ENDPOINT);
    }
    GetUserCreatedEvents.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    GetUserCreatedEvents.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    GetUserCreatedEvents.prototype.setStatusCodes = function () {
        var statusCodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            statusCodes[_i - 0] = arguments[_i];
        }
        this.statusCodes = statusCodes;
        return this;
    };
    GetUserCreatedEvents.prototype.setFromTo = function (fromDate, toDate) {
        this.fromDate = fromDate;
        this.toDate = toDate;
        return this;
    };
    return GetUserCreatedEvents;
}(Package_1.Package));
exports.GetUserCreatedEvents = GetUserCreatedEvents;
