"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'USER_LIKE_OR_UNLIKE_AN_EVENT';
var LikeOrUnlikeAnEvent = (function (_super) {
    __extends(LikeOrUnlikeAnEvent, _super);
    function LikeOrUnlikeAnEvent() {
        _super.call(this, API_ENDPOINT);
        this.eventId = -1;
        this.scheduledClassId = -1;
        this.matchupId = -1;
        this.guildGameId = null;
    }
    LikeOrUnlikeAnEvent.prototype.setEventId = function (eventId) {
        this.eventId = Number(eventId);
        return this;
    };
    return LikeOrUnlikeAnEvent;
}(Package_1.Package));
exports.LikeOrUnlikeAnEvent = LikeOrUnlikeAnEvent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9VcGRhdGVJbnRlcmVzdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQVFwQyxJQUFNLFlBQVksR0FBRyw4QkFBOEIsQ0FBQztBQUVwRDtJQUF5Qyx1Q0FBTztJQU01QztRQUNJLGtCQUFNLFlBQVksQ0FBQyxDQUFDO1FBTmhCLFlBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyQixxQkFBZ0IsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5QixjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxJQUFJLENBQUM7SUFJbkMsQ0FBQztJQUVNLHdDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQWRBLEFBY0MsQ0Fkd0MsaUJBQU8sR0FjL0M7QUFkWSwyQkFBbUIsc0JBYy9CLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL1VwZGF0ZUludGVyZXN0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSAnLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDogICAgICAgICAgIEZLRS03IChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0ZLRS03KVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBVU0VSX0xJS0VfT1JfVU5MSUtFX0FOX0VWRU5UXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIExJS0VfRVZFTlRfU1VDQ0VTUyBPUiBVTkxJS0VfRVZFTlRfU1VDQ0VTU1xuICogRXJyb3IgbWVzc2FnZSB0eXBlOiAgICAuXG4gKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdVU0VSX0xJS0VfT1JfVU5MSUtFX0FOX0VWRU5UJztcblxuZXhwb3J0IGNsYXNzIExpa2VPclVubGlrZUFuRXZlbnQgZXh0ZW5kcyBQYWNrYWdlIHtcbiAgICBwcml2YXRlIGV2ZW50SWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgc2NoZWR1bGVkQ2xhc3NJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBtYXRjaHVwSWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgZ3VpbGRHYW1lSWQ6IHN0cmluZyA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVBJX0VORFBPSU5UKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RXZlbnRJZChldmVudElkOiBudW1iZXIpOiBMaWtlT3JVbmxpa2VBbkV2ZW50IHtcbiAgICAgICAgdGhpcy5ldmVudElkID0gTnVtYmVyKGV2ZW50SWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=
