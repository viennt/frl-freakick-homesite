"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'UPDATE_RATING_BRANCH';
var UpdateRatingBranch = (function (_super) {
    __extends(UpdateRatingBranch, _super);
    function UpdateRatingBranch() {
        _super.call(this, API_ENDPOINT);
    }
    UpdateRatingBranch.prototype.setRatingId = function (ratingId) {
        this.ratingId = String(ratingId);
        return this;
    };
    UpdateRatingBranch.prototype.setRating = function (rating) {
        this.rating = Number(rating);
        return this;
    };
    UpdateRatingBranch.prototype.setComment = function (comment) {
        this.comment = String(comment);
        return this;
    };
    return UpdateRatingBranch;
}(Package_1.Package));
exports.UpdateRatingBranch = UpdateRatingBranch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9VcGRhdGVSYXRpbmdCcmFuY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLHNCQUFzQixDQUFDO0FBWTVDO0lBQXdDLHNDQUFPO0lBSzNDO1FBQ0ksa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLHdDQUFXLEdBQWxCLFVBQW1CLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHNDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sdUNBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCx5QkFBQztBQUFELENBdkJBLEFBdUJDLENBdkJ1QyxpQkFBTyxHQXVCOUM7QUF2QlksMEJBQWtCLHFCQXVCOUIsQ0FBQSIsImZpbGUiOiJhcHAvcGFja2FnZXMvVXBkYXRlUmF0aW5nQnJhbmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gJy4vUGFja2FnZSc7XG5cbi8qKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBHTEQtNTEzIChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0dMRC01MTMpXG4gKiBBUEkgRW5kcG9pbnQ6ICAgICAgICAgIFVQREFURV9SQVRJTkdfQlJBTkNIXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIFVQREFURV9SQVRJTkdfQlJBTkNIX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnVVBEQVRFX1JBVElOR19CUkFOQ0gnO1xuXG4vKipcbiAqIFBhY2thZ2UgQ2xhc3NcbiAqIEdldCBhbGwgZ3JvdXBcbiAqXG4gKiBVc2FnZTpcbiAqICAtIEltcG9ydCBwYWNrYWdlOlxuICogICAgaW1wb3J0IHsgVXBkYXRlUmF0aW5nQnJhbmNoIH0gZnJvbSAnLi9VcGRhdGVSYXRpbmdCcmFuY2gnO1xuICogIC0gQ3JlYXRlIG5ldyBpbnN0YW5jZTpcbiAqICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IFVwZGF0ZVJhdGluZ0JyYW5jaCgpO1xuICovXG5leHBvcnQgY2xhc3MgVXBkYXRlUmF0aW5nQnJhbmNoIGV4dGVuZHMgUGFja2FnZSB7XG4gICAgcHVibGljIHJhdGluZ0lkOiBzdHJpbmc7XG4gICAgcHVibGljIHJhdGluZzogbnVtYmVyO1xuICAgIHB1YmxpYyBjb21tZW50OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVBJX0VORFBPSU5UKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UmF0aW5nSWQocmF0aW5nSWQ6IHN0cmluZyk6IFVwZGF0ZVJhdGluZ0JyYW5jaCB7XG4gICAgICAgIHRoaXMucmF0aW5nSWQgPSBTdHJpbmcocmF0aW5nSWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UmF0aW5nKHJhdGluZzogbnVtYmVyKTogVXBkYXRlUmF0aW5nQnJhbmNoIHtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSBOdW1iZXIocmF0aW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbW1lbnQoY29tbWVudDogc3RyaW5nKTogVXBkYXRlUmF0aW5nQnJhbmNoIHtcbiAgICAgICAgdGhpcy5jb21tZW50ID0gU3RyaW5nKGNvbW1lbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=
