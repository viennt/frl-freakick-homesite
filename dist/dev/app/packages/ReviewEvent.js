"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'COMMENT_AN_EVENT';
var ReviewEvent = (function (_super) {
    __extends(ReviewEvent, _super);
    function ReviewEvent() {
        _super.call(this, API_ENDPOINT);
        this.eventId = -1;
        this.scheduledClassId = -1;
        this.matchupId = -1;
        this.guildGameId = null;
    }
    ReviewEvent.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    ReviewEvent.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    return ReviewEvent;
}(Package_1.Package));
exports.ReviewEvent = ReviewEvent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9SZXZpZXdFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFRcEMsSUFBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUM7QUFFeEM7SUFBaUMsK0JBQU87SUFPcEM7UUFDSSxrQkFBTSxZQUFZLENBQUMsQ0FBQztRQVBoQixZQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsSUFBSSxDQUFDO0lBS25DLENBQUM7SUFFTSxnQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGdDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxDQXBCZ0MsaUJBQU8sR0FvQnZDO0FBcEJZLG1CQUFXLGNBb0J2QixDQUFBIiwiZmlsZSI6ImFwcC9wYWNrYWdlcy9SZXZpZXdFdmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuL1BhY2thZ2UnO1xuXG4vKipcbiAqIEppcmEgdGlja2V0OiAgICAgICAgICAgRktFLTU0IChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0ZLRS01NClcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgQ09NTUVOVF9BTl9FVkVOVFxuICogU3VjY2VzcyBtZXNzYWdlIHR5cGU6ICBDT01NRU5UX0VWRU5UX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgLlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnQ09NTUVOVF9BTl9FVkVOVCc7XG5cbmV4cG9ydCBjbGFzcyBSZXZpZXdFdmVudCBleHRlbmRzIFBhY2thZ2Uge1xuICAgIHByaXZhdGUgZXZlbnRJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBzY2hlZHVsZWRDbGFzc0lkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIG1hdGNodXBJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBndWlsZEdhbWVJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRFdmVudElkKGV2ZW50SWQ6IG51bWJlcik6IFJldmlld0V2ZW50IHtcbiAgICAgICAgdGhpcy5ldmVudElkID0gZXZlbnRJZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nKTogUmV2aWV3RXZlbnQge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=
