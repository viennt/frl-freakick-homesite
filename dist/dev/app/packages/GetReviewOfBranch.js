"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_REVIEWS_OF_BRANCH';
var GetReviewOfBranch = (function (_super) {
    __extends(GetReviewOfBranch, _super);
    function GetReviewOfBranch() {
        _super.call(this, API_ENDPOINT);
    }
    GetReviewOfBranch.prototype.setBranch = function (branch) {
        this.branchId = branch.id;
        return this;
    };
    GetReviewOfBranch.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetReviewOfBranch;
}(Package_1.Package));
exports.GetReviewOfBranch = GetReviewOfBranch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRSZXZpZXdPZkJyYW5jaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFRcEMsSUFBTSxZQUFZLEdBQUcsdUJBQXVCLENBQUM7QUFTN0M7SUFBdUMscUNBQU87SUFLMUM7UUFDSSxrQkFBTSxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0scUNBQVMsR0FBaEIsVUFBaUIsTUFBYTtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0seUNBQWEsR0FBcEIsVUFBcUIsT0FBZSxFQUFFLElBQVk7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxDQW5Cc0MsaUJBQU8sR0FtQjdDO0FBbkJZLHlCQUFpQixvQkFtQjdCLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0dldFJldmlld09mQnJhbmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ291cnQgfSBmcm9tICcuLi9tb2RlbHMvQ291cnQnO1xuaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gJy4vUGFja2FnZSc7XG5cbi8qKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBGS0UtMzkgKGh0dHBzOi8vZnJlYWtpY2suYXRsYXNzaWFuLm5ldC9icm93c2UvRktFLTM5KVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBHRVRfUkVWSUVXU19PRl9CUkFOQ0hcbiAqIFN1Y2Nlc3MgbWVzc2FnZSB0eXBlOiAgR0VUX1JFVklFV1NfT0ZfQlJBTkNIX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnR0VUX1JFVklFV1NfT0ZfQlJBTkNIJztcblxuLyoqXG4gKiBVc2FnZTpcbiAqICAtIEltcG9ydCBwYWNrYWdlOlxuICogICAgaW1wb3J0IHsgR2V0UmV2aWV3T2ZCcmFuY2ggfSBmcm9tICcuL0dldFJldmlld09mQnJhbmNoJztcbiAqICAtIENyZWF0ZSBuZXcgaW5zdGFuY2U6XG4gKiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRSZXZpZXdPZkJyYW5jaCgpO1xuICovXG5leHBvcnQgY2xhc3MgR2V0UmV2aWV3T2ZCcmFuY2ggZXh0ZW5kcyBQYWNrYWdlIHtcbiAgICBwdWJsaWMgYnJhbmNoSWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHBlclBhZ2U6IG51bWJlcjtcbiAgICBwcml2YXRlIHBhZ2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCcmFuY2goYnJhbmNoOiBDb3VydCk6IEdldFJldmlld09mQnJhbmNoIHtcbiAgICAgICAgdGhpcy5icmFuY2hJZCA9IGJyYW5jaC5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2luYXRpb24ocGVyUGFnZTogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBHZXRSZXZpZXdPZkJyYW5jaCB7XG4gICAgICAgIHRoaXMucGVyUGFnZSA9IHBlclBhZ2U7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==
