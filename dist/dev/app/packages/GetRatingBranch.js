"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'GET_USER_RATING_FOR_BRANCH';
var GetRatingBranch = (function (_super) {
    __extends(GetRatingBranch, _super);
    function GetRatingBranch() {
        _super.call(this, API_ENDPOINT);
    }
    GetRatingBranch.prototype.setBranch = function (branch) {
        this.branchId = branch.id;
        return this;
    };
    return GetRatingBranch;
}(Package_1.Package));
exports.GetRatingBranch = GetRatingBranch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRSYXRpbmdCcmFuY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLDRCQUE0QixDQUFDO0FBWWxEO0lBQXFDLG1DQUFPO0lBR3hDO1FBQ0ksa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLG1DQUFTLEdBQWhCLFVBQWlCLE1BQWE7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWG9DLGlCQUFPLEdBVzNDO0FBWFksdUJBQWUsa0JBVzNCLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0dldFJhdGluZ0JyYW5jaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgeyBDb3VydCB9IGZyb20gJy4uL21vZGVscy9Db3VydCc7XG5pbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSAnLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDogICAgICAgICAgIEdMRC01MjEgKGh0dHBzOi8vZnJlYWtpY2suYXRsYXNzaWFuLm5ldC9icm93c2UvR0xELTUyMSlcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgR0VUX1VTRVJfUkFUSU5HX0ZPUl9CUkFOQ0hcbiAqIFN1Y2Nlc3MgbWVzc2FnZSB0eXBlOiAgR0VUX1VTRVJfUkFUSU5HX0ZPUl9CUkFOQ0hfU1VDQ0VTU1xuICogRXJyb3IgbWVzc2FnZSB0eXBlOiAgICBSRVFVRVNUX0VSUk9SXG4gKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdHRVRfVVNFUl9SQVRJTkdfRk9SX0JSQU5DSCc7XG5cbi8qKlxuICogUGFja2FnZSBDbGFzc1xuICogR2V0IGFsbCBncm91cFxuICpcbiAqIFVzYWdlOlxuICogIC0gSW1wb3J0IHBhY2thZ2U6XG4gKiAgICBpbXBvcnQgeyBHZXRSYXRpbmdCcmFuY2ggfSBmcm9tICcuL0dldFJhdGluZ0JyYW5jaCc7XG4gKiAgLSBDcmVhdGUgbmV3IGluc3RhbmNlOlxuICogICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgR2V0UmF0aW5nQnJhbmNoKCk7XG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRSYXRpbmdCcmFuY2ggZXh0ZW5kcyBQYWNrYWdlIHtcbiAgICBwdWJsaWMgYnJhbmNoSWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCcmFuY2goYnJhbmNoOiBDb3VydCk6IEdldFJhdGluZ0JyYW5jaCB7XG4gICAgICAgIHRoaXMuYnJhbmNoSWQgPSBicmFuY2guaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==
