"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('../Package');
var API_ENDPOINT = 'LEAGUE_GET_TEAMS_BY_USER';
var LeagueGetTeamByUser = (function (_super) {
    __extends(LeagueGetTeamByUser, _super);
    function LeagueGetTeamByUser() {
        _super.call(this, API_ENDPOINT);
    }
    LeagueGetTeamByUser.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return LeagueGetTeamByUser;
}(Package_1.Package));
exports.LeagueGetTeamByUser = LeagueGetTeamByUser;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9sZWFndWVzL0xlYWd1ZUdldFRlYW1CeVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFlBQVksQ0FBQyxDQUFBO0FBUXJDLElBQU0sWUFBWSxHQUFHLDBCQUEwQixDQUFDO0FBRWhEO0lBQXlDLHVDQUFPO0lBSTlDO1FBQ0Usa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLDJDQUFhLEdBQXBCLFVBQXFCLE9BQWUsRUFBRSxJQUFZO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQWRBLEFBY0MsQ0Fkd0MsaUJBQU8sR0FjL0M7QUFkWSwyQkFBbUIsc0JBYy9CLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL2xlYWd1ZXMvTGVhZ3VlR2V0VGVhbUJ5VXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDogICAgICAgICAgIEZNLTc0IChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0ZNLTc0KVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBMRUFHVUVfR0VUX1RFQU1TX0JZX1VTRVJcbiAqIFN1Y2Nlc3MgbWVzc2FnZSB0eXBlOiAgTEVBR1VFX0dFVF9URUFNU19CWV9VU0VSX1NVQ0NFU1NcbiAqIEVycm9yIG1lc3NhZ2UgdHlwZTogICAgUkVRVUVTVF9FUlJPUlxuICovXG5jb25zdCBBUElfRU5EUE9JTlQgPSAnTEVBR1VFX0dFVF9URUFNU19CWV9VU0VSJztcblxuZXhwb3J0IGNsYXNzIExlYWd1ZUdldFRlYW1CeVVzZXIgZXh0ZW5kcyBQYWNrYWdlIHtcbiAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiAgcHVibGljIHBlclBhZ2U6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICB9XG5cbiAgcHVibGljIHNldFBhZ2luYXRpb24ocGVyUGFnZTogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiBMZWFndWVHZXRUZWFtQnlVc2VyIHtcbiAgICB0aGlzLnBlclBhZ2UgPSBwZXJQYWdlO1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuIl19
