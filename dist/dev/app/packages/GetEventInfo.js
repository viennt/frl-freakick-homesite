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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRFdmVudEluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDO0FBRXhDO0lBQWtDLGdDQUFPO0lBR3JDO1FBQ0ksa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLGlDQUFVLEdBQWpCLFVBQWtCLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FYQSxBQVdDLENBWGlDLGlCQUFPLEdBV3hDO0FBWFksb0JBQVksZUFXeEIsQ0FBQSIsImZpbGUiOiJhcHAvcGFja2FnZXMvR2V0RXZlbnRJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gJy4vUGFja2FnZSc7XG5cbi8qKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBGS0UtNzYgKGh0dHBzOi8vZnJlYWtpY2suYXRsYXNzaWFuLm5ldC9icm93c2UvRktFLTc2KVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBHRVRfRVZFTlRfREVUQUlMXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIEdFVF9FVkVOVF9ERVRBSUxfU1VDQ0VTU1xuICogRXJyb3IgbWVzc2FnZSB0eXBlOiAgICAuXG4gKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdHRVRfRVZFTlRfREVUQUlMJztcblxuZXhwb3J0IGNsYXNzIEdldEV2ZW50SW5mbyBleHRlbmRzIFBhY2thZ2Uge1xuICAgIHByaXZhdGUgZXZlbnRJZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFQSV9FTkRQT0lOVCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEV2ZW50SWQoYnJhbmNoSWQ6IG51bWJlcik6IEdldEV2ZW50SW5mbyB7XG4gICAgICAgIHRoaXMuZXZlbnRJZCA9IE51bWJlcihicmFuY2hJZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==
