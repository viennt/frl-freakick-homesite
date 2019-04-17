"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_COMMENT_OF_EVENT';
var GetReviewsOfEvent = (function (_super) {
    __extends(GetReviewsOfEvent, _super);
    function GetReviewsOfEvent() {
        _super.call(this, API_ENDPOINT);
        this.eventId = -1;
        this.scheduledClassId = -1;
        this.matchupId = -1;
        this.guildGameId = null;
    }
    GetReviewsOfEvent.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    GetReviewsOfEvent.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetReviewsOfEvent;
}(Package_1.Package));
exports.GetReviewsOfEvent = GetReviewsOfEvent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRSZXZpZXdzT2ZFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFRcEMsSUFBTSxZQUFZLEdBQUcsc0JBQXNCLENBQUM7QUFFNUM7SUFBdUMscUNBQU87SUFRMUM7UUFDSSxrQkFBTSxZQUFZLENBQUMsQ0FBQztRQVJoQixZQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsY0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsSUFBSSxDQUFDO0lBTW5DLENBQUM7SUFFTSxzQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHlDQUFhLEdBQXBCLFVBQXFCLE9BQWUsRUFBRSxJQUFZO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsQ0F0QnNDLGlCQUFPLEdBc0I3QztBQXRCWSx5QkFBaUIsb0JBc0I3QixDQUFBIiwiZmlsZSI6ImFwcC9wYWNrYWdlcy9HZXRSZXZpZXdzT2ZFdmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuL1BhY2thZ2UnO1xuXG4vKipcbiAqIEppcmEgdGlja2V0OiAgICAgICAgICAgRktFLTU1IChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0ZLRS01NSlcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgR0VUX0NPTU1FTlRfT0ZfRVZFTlRcbiAqIFN1Y2Nlc3MgbWVzc2FnZSB0eXBlOiAgR0VUX0NPTU1FTlRfT0ZfRVZFTlRfU1VDQ0VTU1xuICogRXJyb3IgbWVzc2FnZSB0eXBlOiAgICAuXG4gKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdHRVRfQ09NTUVOVF9PRl9FVkVOVCc7XG5cbmV4cG9ydCBjbGFzcyBHZXRSZXZpZXdzT2ZFdmVudCBleHRlbmRzIFBhY2thZ2Uge1xuICAgIHByaXZhdGUgZXZlbnRJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBzY2hlZHVsZWRDbGFzc0lkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIG1hdGNodXBJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBndWlsZEdhbWVJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIHBlclBhZ2U6IG51bWJlcjtcbiAgICBwcml2YXRlIHBhZ2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRFdmVudElkKGV2ZW50SWQ6IG51bWJlcik6IEdldFJldmlld3NPZkV2ZW50IHtcbiAgICAgICAgdGhpcy5ldmVudElkID0gZXZlbnRJZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2luYXRpb24ocGVyUGFnZTogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBHZXRSZXZpZXdzT2ZFdmVudCB7XG4gICAgICAgIHRoaXMucGVyUGFnZSA9IHBlclBhZ2U7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==
