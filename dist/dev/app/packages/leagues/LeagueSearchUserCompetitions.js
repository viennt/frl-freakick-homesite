"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('../Package');
var API_ENDPOINT = 'LEAGUE_SEARCH_USER_COMPETITIONS';
var LeagueSearchUserCompetitions = (function (_super) {
    __extends(LeagueSearchUserCompetitions, _super);
    function LeagueSearchUserCompetitions() {
        _super.call(this, API_ENDPOINT);
    }
    LeagueSearchUserCompetitions.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    LeagueSearchUserCompetitions.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return LeagueSearchUserCompetitions;
}(Package_1.Package));
exports.LeagueSearchUserCompetitions = LeagueSearchUserCompetitions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9sZWFndWVzL0xlYWd1ZVNlYXJjaFVzZXJDb21wZXRpdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFlBQVksQ0FBQyxDQUFBO0FBUXJDLElBQU0sWUFBWSxHQUFHLGlDQUFpQyxDQUFDO0FBRXZEO0lBQWtELGdEQUFPO0lBS3ZEO1FBQ0Usa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlEQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxvREFBYSxHQUFwQixVQUFxQixPQUFlLEVBQUUsSUFBWTtRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVILG1DQUFDO0FBQUQsQ0FwQkEsQUFvQkMsQ0FwQmlELGlCQUFPLEdBb0J4RDtBQXBCWSxvQ0FBNEIsK0JBb0J4QyxDQUFBIiwiZmlsZSI6ImFwcC9wYWNrYWdlcy9sZWFndWVzL0xlYWd1ZVNlYXJjaFVzZXJDb21wZXRpdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSAnLi4vUGFja2FnZSc7XG5cbi8qKlxuICogSmlyYSB0aWNrZXQ6ICAgICAgICAgICBGTS04MSAoaHR0cHM6Ly9mcmVha2ljay5hdGxhc3NpYW4ubmV0L2Jyb3dzZS9GTS04MSlcbiAqIEFQSSBFbmRwb2ludDogICAgICAgICAgTEVBR1VFX1NFQVJDSF9VU0VSX0NPTVBFVElUSU9OU1xuICogU3VjY2VzcyBtZXNzYWdlIHR5cGU6ICBMRUFHVUVfU0VBUkNIX1VTRVJfQ09NUEVUSVRJT05TX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnTEVBR1VFX1NFQVJDSF9VU0VSX0NPTVBFVElUSU9OUyc7XG5cbmV4cG9ydCBjbGFzcyBMZWFndWVTZWFyY2hVc2VyQ29tcGV0aXRpb25zIGV4dGVuZHMgUGFja2FnZSB7XG4gIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gIHB1YmxpYyBwZXJQYWdlOiBudW1iZXI7XG4gIHB1YmxpYyBrZXlXb3JkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQVBJX0VORFBPSU5UKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRLZXlXb3JkKGtleVdvcmQ6IHN0cmluZyk6IExlYWd1ZVNlYXJjaFVzZXJDb21wZXRpdGlvbnMge1xuICAgIHRoaXMua2V5V29yZCA9IGtleVdvcmQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0UGFnaW5hdGlvbihwZXJQYWdlOiBudW1iZXIsIHBhZ2U6IG51bWJlcik6IExlYWd1ZVNlYXJjaFVzZXJDb21wZXRpdGlvbnMge1xuICAgIHRoaXMucGVyUGFnZSA9IHBlclBhZ2U7XG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4iXX0=
