"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_EVENT_DETAIL';
var GetEventInfo = (function (_super) {
    __extends(GetEventInfo, _super);
    function GetEventInfo() {
        _super.call(this, API_ENDPOINT);
    }
    GetEventInfo.prototype.setEventId = function (branchId) {
        this.eventId = Number(branchId);
        return this;
    };
    return GetEventInfo;
}(Package_1.Package));
exports.GetEventInfo = GetEventInfo;
