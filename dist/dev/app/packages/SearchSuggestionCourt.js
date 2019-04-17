"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'SEARCH_SUGGESTION_COURT';
var SearchSuggestionCourt = (function (_super) {
    __extends(SearchSuggestionCourt, _super);
    function SearchSuggestionCourt() {
        _super.call(this, API_ENDPOINT);
    }
    SearchSuggestionCourt.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    return SearchSuggestionCourt;
}(Package_1.Package));
exports.SearchSuggestionCourt = SearchSuggestionCourt;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9TZWFyY2hTdWdnZXN0aW9uQ291cnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBV3BDLElBQU0sWUFBWSxHQUFHLHlCQUF5QixDQUFDO0FBRS9DO0lBQTJDLHlDQUFPO0lBR2hEO1FBQ0Usa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxPQUFlO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYMEMsaUJBQU8sR0FXakQ7QUFYWSw2QkFBcUIsd0JBV2pDLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL1NlYXJjaFN1Z2dlc3Rpb25Db3VydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuL1BhY2thZ2UnO1xuXG4vKipcbiAqIFBhY2thZ2UgQ2xhc3NcbiAqIFNlYXJjaCBTdWdnZXN0aW9uIENvdXJ0XG4gKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBHTEQtNTM4IChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0dMRC01MzgpXG4gKiBBUEkgRW5kcG9pbnQ6ICAgICAgICAgIFNFQVJDSF9TVUdHRVNUSU9OX0NPVVJUXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIFNFQVJDSF9TVUdHRVNUSU9OX0NPVVJUX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgLlxuKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdTRUFSQ0hfU1VHR0VTVElPTl9DT1VSVCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTdWdnZXN0aW9uQ291cnQgZXh0ZW5kcyBQYWNrYWdlIHtcbiAgcHJpdmF0ZSBrZXlXb3JkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQVBJX0VORFBPSU5UKTtcbiAgfVxuXG4gIHNldEtleVdvcmQoa2V5V29yZDogc3RyaW5nKTogU2VhcmNoU3VnZ2VzdGlvbkNvdXJ0IHtcbiAgICB0aGlzLmtleVdvcmQgPSBrZXlXb3JkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=
