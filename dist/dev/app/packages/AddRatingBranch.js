"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'ADD_RATING_BRANCH';
var AddRatingBranch = (function (_super) {
    __extends(AddRatingBranch, _super);
    function AddRatingBranch() {
        _super.call(this, API_ENDPOINT);
    }
    AddRatingBranch.prototype.setBranch = function (branch) {
        this.partnerBranchId = branch.id;
        return this;
    };
    AddRatingBranch.prototype.setRating = function (rating) {
        this.rating = Number(rating);
        return this;
    };
    AddRatingBranch.prototype.setComment = function (comment) {
        this.comment = String(comment);
        return this;
    };
    return AddRatingBranch;
}(Package_1.Package));
exports.AddRatingBranch = AddRatingBranch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9BZGRSYXRpbmdCcmFuY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLG1CQUFtQixDQUFDO0FBWXpDO0lBQXFDLG1DQUFPO0lBS3hDO1FBQ0ksa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLG1DQUFTLEdBQWhCLFVBQWlCLE1BQWE7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLG1DQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sb0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxzQkFBQztBQUFELENBdkJBLEFBdUJDLENBdkJvQyxpQkFBTyxHQXVCM0M7QUF2QlksdUJBQWUsa0JBdUIzQixDQUFBIiwiZmlsZSI6ImFwcC9wYWNrYWdlcy9BZGRSYXRpbmdCcmFuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgQ291cnQgfSBmcm9tICcuLi9tb2RlbHMvQ291cnQnO1xuaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gJy4vUGFja2FnZSc7XG5cbi8qKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBHTEQtNTEyIChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0dMRC01MTIpXG4gKiBBUEkgRW5kcG9pbnQ6ICAgICAgICAgIEFERF9SQVRJTkdfQlJBTkNIXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIEFERF9SQVRJTkdfQlJBTkNIX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnQUREX1JBVElOR19CUkFOQ0gnO1xuXG4vKipcbiAqIFBhY2thZ2UgQ2xhc3NcbiAqIEdldCBhbGwgZ3JvdXBcbiAqXG4gKiBVc2FnZTpcbiAqICAtIEltcG9ydCBwYWNrYWdlOlxuICogICAgaW1wb3J0IHsgQWRkUmF0aW5nQnJhbmNoIH0gZnJvbSAnLi9BZGRSYXRpbmdCcmFuY2gnO1xuICogIC0gQ3JlYXRlIG5ldyBpbnN0YW5jZTpcbiAqICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IEFkZFJhdGluZ0JyYW5jaCgpO1xuICovXG5leHBvcnQgY2xhc3MgQWRkUmF0aW5nQnJhbmNoIGV4dGVuZHMgUGFja2FnZSB7XG4gICAgcHVibGljIHBhcnRuZXJCcmFuY2hJZDogbnVtYmVyO1xuICAgIHB1YmxpYyByYXRpbmc6IG51bWJlcjtcbiAgICBwdWJsaWMgY29tbWVudDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFQSV9FTkRQT0lOVCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJyYW5jaChicmFuY2g6IENvdXJ0KTogQWRkUmF0aW5nQnJhbmNoIHtcbiAgICAgICAgdGhpcy5wYXJ0bmVyQnJhbmNoSWQgPSBicmFuY2guaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRSYXRpbmcocmF0aW5nOiBudW1iZXIpOiBBZGRSYXRpbmdCcmFuY2gge1xuICAgICAgICB0aGlzLnJhdGluZyA9IE51bWJlcihyYXRpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q29tbWVudChjb21tZW50OiBzdHJpbmcpOiBBZGRSYXRpbmdCcmFuY2gge1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBTdHJpbmcoY29tbWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==
