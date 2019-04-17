"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'FIND_CITY_BY_STATE';
var GetCitiesByState = (function (_super) {
    __extends(GetCitiesByState, _super);
    function GetCitiesByState() {
        _super.call(this, API_ENDPOINT);
    }
    GetCitiesByState.prototype.setStateId = function (stateId) {
        this.stateId = stateId;
        return this;
    };
    return GetCitiesByState;
}(Package_1.Package));
exports.GetCitiesByState = GetCitiesByState;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRDaXRpZXNCeVN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQVFwQyxJQUFNLFlBQVksR0FBRyxvQkFBb0IsQ0FBQztBQUUxQztJQUFzQyxvQ0FBTztJQUczQztRQUNFLGtCQUFNLFlBQVksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxxQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYcUMsaUJBQU8sR0FXNUM7QUFYWSx3QkFBZ0IsbUJBVzVCLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0dldENpdGllc0J5U3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSAnLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDogICAgICAgICAgIEdMRC0xMjMgKGh0dHBzOi8vZnJlYWtpY2suYXRsYXNzaWFuLm5ldC9icm93c2UvR0xELTEyMylcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgRklORF9DSVRZX0JZX1NUQVRFXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIENJVFlfTFNUXG4gKiBFcnJvciBtZXNzYWdlIHR5cGU6ICAgIC5cbiAqL1xuY29uc3QgQVBJX0VORFBPSU5UID0gJ0ZJTkRfQ0lUWV9CWV9TVEFURSc7XG5cbmV4cG9ydCBjbGFzcyBHZXRDaXRpZXNCeVN0YXRlIGV4dGVuZHMgUGFja2FnZSB7XG4gIHByaXZhdGUgc3RhdGVJZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEFQSV9FTkRQT0lOVCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3RhdGVJZChzdGF0ZUlkOiBudW1iZXIpOiBHZXRDaXRpZXNCeVN0YXRlIHtcbiAgICB0aGlzLnN0YXRlSWQgPSBzdGF0ZUlkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=
