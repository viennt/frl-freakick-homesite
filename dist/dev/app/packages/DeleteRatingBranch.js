"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'DELETE_RATING_BRANCH';
var DeleteRatingBranch = (function (_super) {
    __extends(DeleteRatingBranch, _super);
    function DeleteRatingBranch() {
        _super.call(this, API_ENDPOINT);
    }
    DeleteRatingBranch.prototype.setRatingId = function (ratingId) {
        this.ratingId = String(ratingId);
        return this;
    };
    return DeleteRatingBranch;
}(Package_1.Package));
exports.DeleteRatingBranch = DeleteRatingBranch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9EZWxldGVSYXRpbmdCcmFuY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLHNCQUFzQixDQUFDO0FBWTVDO0lBQXdDLHNDQUFPO0lBRzNDO1FBQ0ksa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLHdDQUFXLEdBQWxCLFVBQW1CLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWHVDLGlCQUFPLEdBVzlDO0FBWFksMEJBQWtCLHFCQVc5QixDQUFBIiwiZmlsZSI6ImFwcC9wYWNrYWdlcy9EZWxldGVSYXRpbmdCcmFuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSAnLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDogICAgICAgICAgIEdMRC01MTQgKGh0dHBzOi8vZnJlYWtpY2suYXRsYXNzaWFuLm5ldC9icm93c2UvR0xELTUxNClcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgREVMRVRFX1JBVElOR19CUkFOQ0hcbiAqIFN1Y2Nlc3MgbWVzc2FnZSB0eXBlOiAgREVMRVRFX1JBVElOR19CUkFOQ0hfU1VDQ0VTU1xuICogRXJyb3IgbWVzc2FnZSB0eXBlOiAgICBSRVFVRVNUX0VSUk9SXG4gKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdERUxFVEVfUkFUSU5HX0JSQU5DSCc7XG5cbi8qKlxuICogUGFja2FnZSBDbGFzc1xuICogR2V0IGFsbCBncm91cFxuICpcbiAqIFVzYWdlOlxuICogIC0gSW1wb3J0IHBhY2thZ2U6XG4gKiAgICBpbXBvcnQgeyBEZWxldGVSYXRpbmdCcmFuY2ggfSBmcm9tICcuL0RlbGV0ZVJhdGluZ0JyYW5jaCc7XG4gKiAgLSBDcmVhdGUgbmV3IGluc3RhbmNlOlxuICogICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgRGVsZXRlUmF0aW5nQnJhbmNoKCk7XG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxldGVSYXRpbmdCcmFuY2ggZXh0ZW5kcyBQYWNrYWdlIHtcbiAgICBwdWJsaWMgcmF0aW5nSWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRSYXRpbmdJZChyYXRpbmdJZDogc3RyaW5nKTogRGVsZXRlUmF0aW5nQnJhbmNoIHtcbiAgICAgICAgdGhpcy5yYXRpbmdJZCA9IFN0cmluZyhyYXRpbmdJZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==
