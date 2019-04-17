"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_USER_INTERESTED_IN_EVENT';
var GetUserInterestedInEvent = (function (_super) {
    __extends(GetUserInterestedInEvent, _super);
    function GetUserInterestedInEvent() {
        _super.call(this, API_ENDPOINT);
    }
    GetUserInterestedInEvent.prototype.setEventId = function (eventId) {
        this.eventId = Number(eventId);
        return this;
    };
    return GetUserInterestedInEvent;
}(Package_1.Package));
exports.GetUserInterestedInEvent = GetUserInterestedInEvent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRVc2VySW50ZXJlc3RlZEluRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLDhCQUE4QixDQUFDO0FBRXBEO0lBQThDLDRDQUFPO0lBR2pEO1FBQ0ksa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLDZDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYNkMsaUJBQU8sR0FXcEQ7QUFYWSxnQ0FBd0IsMkJBV3BDLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0dldFVzZXJJbnRlcmVzdGVkSW5FdmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuL1BhY2thZ2UnO1xuXG4vKipcbiAqIEppcmEgdGlja2V0OiAgICAgICAgICAgRktFLTYwIChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0ZLRS02MClcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgR0VUX1VTRVJfSU5URVJFU1RFRF9JTl9FVkVOVFxuICogU3VjY2VzcyBtZXNzYWdlIHR5cGU6ICBHRVRfVVNFUl9JTlRFUkVTVEVEX0lOX0VWRU5UX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgLlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnR0VUX1VTRVJfSU5URVJFU1RFRF9JTl9FVkVOVCc7XG5cbmV4cG9ydCBjbGFzcyBHZXRVc2VySW50ZXJlc3RlZEluRXZlbnQgZXh0ZW5kcyBQYWNrYWdlIHtcbiAgICBwcml2YXRlIGV2ZW50SWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRFdmVudElkKGV2ZW50SWQ6IG51bWJlcik6IEdldFVzZXJJbnRlcmVzdGVkSW5FdmVudCB7XG4gICAgICAgIHRoaXMuZXZlbnRJZCA9IE51bWJlcihldmVudElkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19
