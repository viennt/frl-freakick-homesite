"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_BRANCH_INFO';
var GetBranchInfo = (function (_super) {
    __extends(GetBranchInfo, _super);
    function GetBranchInfo() {
        _super.call(this, API_ENDPOINT);
    }
    GetBranchInfo.prototype.setBranchId = function (branchId) {
        this.branchId = Number(branchId);
        return this;
    };
    return GetBranchInfo;
}(Package_1.Package));
exports.GetBranchInfo = GetBranchInfo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRCcmFuY2hJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQVFwQyxJQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztBQVl2QztJQUFtQyxpQ0FBTztJQUd0QztRQUNJLGtCQUFNLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxtQ0FBVyxHQUFsQixVQUFtQixRQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxvQkFBQztBQUFELENBWEEsQUFXQyxDQVhrQyxpQkFBTyxHQVd6QztBQVhZLHFCQUFhLGdCQVd6QixDQUFBIiwiZmlsZSI6ImFwcC9wYWNrYWdlcy9HZXRCcmFuY2hJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gJy4vUGFja2FnZSc7XG5cbi8qKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBCS04tNTIgKGh0dHBzOi8vZnJlYWtpY2suYXRsYXNzaWFuLm5ldC9icm93c2UvQktOLTUyKVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBHRVRfQlJBTkNIX0lORk9cbiAqIFN1Y2Nlc3MgbWVzc2FnZSB0eXBlOiAgR0VUX0JSQU5DSF9JTkZPX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgLlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnR0VUX0JSQU5DSF9JTkZPJztcblxuLyoqXG4gKiBQYWNrYWdlIENsYXNzXG4gKiBHZXQgQ291bnRyaWVzIExpc3QgUGFja2FnZVxuICpcbiAqIFVzYWdlOlxuICogIC0gSW1wb3J0IHBhY2thZ2U6XG4gKiAgICBpbXBvcnQgeyBHZXRCcmFuY2hJbmZvIH0gZnJvbSAnLi9HZXRCcmFuY2hJbmZvJztcbiAqICAtIENyZWF0ZSBuZXcgaW5zdGFuY2U6XG4gKiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRCcmFuY2hJbmZvKGJyYW5jaElkKTtcbiAqL1xuZXhwb3J0IGNsYXNzIEdldEJyYW5jaEluZm8gZXh0ZW5kcyBQYWNrYWdlIHtcbiAgICBwcml2YXRlIGJyYW5jaElkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVBJX0VORFBPSU5UKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QnJhbmNoSWQoYnJhbmNoSWQ6IG51bWJlcik6IEdldEJyYW5jaEluZm8ge1xuICAgICAgICB0aGlzLmJyYW5jaElkID0gTnVtYmVyKGJyYW5jaElkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19
