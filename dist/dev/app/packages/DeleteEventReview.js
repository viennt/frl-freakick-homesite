"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'DELETE_EVENT_REVIEW';
var DeleteEventReview = (function (_super) {
    __extends(DeleteEventReview, _super);
    function DeleteEventReview() {
        _super.call(this, API_ENDPOINT);
    }
    DeleteEventReview.prototype.setReviewId = function (reviewId) {
        this.reviewId = reviewId;
        return this;
    };
    return DeleteEventReview;
}(Package_1.Package));
exports.DeleteEventReview = DeleteEventReview;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9EZWxldGVFdmVudFJldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFRcEMsSUFBTSxZQUFZLEdBQUcscUJBQXFCLENBQUM7QUFFM0M7SUFBdUMscUNBQU87SUFHMUM7UUFDSSxrQkFBTSxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sdUNBQVcsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYc0MsaUJBQU8sR0FXN0M7QUFYWSx5QkFBaUIsb0JBVzdCLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0RlbGV0ZUV2ZW50UmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gJy4vUGFja2FnZSc7XG5cbi8qKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBGS0UtNTQgKGh0dHBzOi8vZnJlYWtpY2suYXRsYXNzaWFuLm5ldC9icm93c2UvRktFLTU0KVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBERUxFVEVfRVZFTlRfUkVWSUVXXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIERFTEVURV9FVkVOVF9SRVZJRVdfU1VDQ0VTU1xuICogRXJyb3IgbWVzc2FnZSB0eXBlOiAgICAuXG4gKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdERUxFVEVfRVZFTlRfUkVWSUVXJztcblxuZXhwb3J0IGNsYXNzIERlbGV0ZUV2ZW50UmV2aWV3IGV4dGVuZHMgUGFja2FnZSB7XG4gICAgcHJpdmF0ZSByZXZpZXdJZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFQSV9FTkRQT0lOVCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFJldmlld0lkKHJldmlld0lkOiBudW1iZXIpOiBEZWxldGVFdmVudFJldmlldyB7XG4gICAgICAgIHRoaXMucmV2aWV3SWQgPSByZXZpZXdJZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19
