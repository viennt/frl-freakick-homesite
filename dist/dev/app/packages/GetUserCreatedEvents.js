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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRVc2VyQ3JlYXRlZEV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFRcEMsSUFBTSxZQUFZLEdBQUcseUJBQXlCLENBQUM7QUFFL0M7SUFBMEMsd0NBQU87SUFRL0M7UUFDRSxrQkFBTSxZQUFZLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0seUNBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDRDQUFhLEdBQXBCLFVBQXFCLE9BQWUsRUFBRSxJQUFZO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sNkNBQWMsR0FBckI7UUFBc0IscUJBQXdCO2FBQXhCLFdBQXdCLENBQXhCLHNCQUF3QixDQUF4QixJQUF3QjtZQUF4QixvQ0FBd0I7O1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sd0NBQVMsR0FBaEIsVUFBaUIsUUFBZ0IsRUFBRSxNQUFjO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUgsMkJBQUM7QUFBRCxDQWxDQSxBQWtDQyxDQWxDeUMsaUJBQU8sR0FrQ2hEO0FBbENZLDRCQUFvQix1QkFrQ2hDLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0dldFVzZXJDcmVhdGVkRXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gJy4vUGFja2FnZSc7XG5cbi8qKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBGS0UtMTU5IChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0ZLRS0xNTkpXG4gKiBBUEkgRW5kcG9pbnQ6ICAgICAgICAgIEdFVF9VU0VSX0NSRUFURURfRVZFTlRTXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIEdFVF9VU0VSX0NSRUFURURfRVZFTlRTX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnR0VUX1VTRVJfQ1JFQVRFRF9FVkVOVFMnO1xuXG5leHBvcnQgY2xhc3MgR2V0VXNlckNyZWF0ZWRFdmVudHMgZXh0ZW5kcyBQYWNrYWdlIHtcbiAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiAgcHVibGljIHBlclBhZ2U6IG51bWJlcjtcbiAgcHVibGljIGtleVdvcmQ6IHN0cmluZztcbiAgcHVibGljIHN0YXR1c0NvZGVzOiBzdHJpbmdbXTtcbiAgcHVibGljIGZyb21EYXRlOiBudW1iZXI7XG4gIHB1YmxpYyB0b0RhdGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICB9XG5cbiAgcHVibGljIHNldEtleVdvcmQoa2V5V29yZDogc3RyaW5nKTogR2V0VXNlckNyZWF0ZWRFdmVudHMge1xuICAgIHRoaXMua2V5V29yZCA9IGtleVdvcmQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnaW5hdGlvbihwZXJQYWdlOiBudW1iZXIsIHBhZ2U6IG51bWJlcik6IEdldFVzZXJDcmVhdGVkRXZlbnRzIHtcbiAgICB0aGlzLnBlclBhZ2UgPSBwZXJQYWdlO1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0U3RhdHVzQ29kZXMoLi4uc3RhdHVzQ29kZXM6IHN0cmluZ1tdKTogR2V0VXNlckNyZWF0ZWRFdmVudHMge1xuICAgIHRoaXMuc3RhdHVzQ29kZXMgPSBzdGF0dXNDb2RlcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRGcm9tVG8oZnJvbURhdGU6IG51bWJlciwgdG9EYXRlOiBudW1iZXIpOiBHZXRVc2VyQ3JlYXRlZEV2ZW50cyB7XG4gICAgdGhpcy5mcm9tRGF0ZSA9IGZyb21EYXRlO1xuICAgIHRoaXMudG9EYXRlID0gdG9EYXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiJdfQ==
