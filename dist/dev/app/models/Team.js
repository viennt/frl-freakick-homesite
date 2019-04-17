"use strict";
var constants_1 = require('../constants');
var Team = (function () {
    function Team(options) {
        this._teamId = options && options.teamId || 0;
        this._teamName = options && options.teamName || 'Freakick Team';
        this._teamLogo = options && Team.getLogo(options.teamLogo) || 'NaN';
        this._teamRank = options && options.teamRank || 'NaN';
        this._wins = options && options.wins || 0;
        this._losses = options && options.losses || 0;
        this._level = options && options.level || 0;
        this._isOpenSlot = options && options.isOpenSlot || false;
        this.others = {};
    }
    Team.getLogo = function (logo) {
        if (!logo || logo === 'null') {
            return './assets/images/default/team_logo.png';
        }
        else {
            if (logo.startsWith(constants_1.CONFIG.URL))
                return logo;
            return constants_1.CONFIG.URL + '/assets/' + logo;
        }
    };
    Object.defineProperty(Team.prototype, "teamId", {
        get: function () {
            return this._teamId;
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "teamName", {
        get: function () {
            return this._teamName;
        },
        set: function (value) {
            this._teamName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "teamLogo", {
        get: function () {
            return this._teamLogo;
        },
        set: function (value) {
            this._teamLogo = Team.getLogo(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "teamRank", {
        get: function () {
            return this._teamRank;
        },
        set: function (value) {
            this._teamRank = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "wins", {
        get: function () {
            return this._wins;
        },
        set: function (value) {
            this._wins = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "losses", {
        get: function () {
            return this._losses;
        },
        set: function (value) {
            this._losses = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "isOpenSlot", {
        get: function () {
            return this._isOpenSlot;
        },
        set: function (value) {
            this._isOpenSlot = value;
        },
        enumerable: true,
        configurable: true
    });
    return Team;
}());
exports.Team = Team;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFPLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHVCQUFLO2FBQVQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNEJBQVU7YUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFLSCxXQUFDO0FBQUQsQ0FsR0EsQUFrR0MsSUFBQTtBQWxHWSxZQUFJLE9Ba0doQixDQUFBIiwiZmlsZSI6ImFwcC9tb2RlbHMvVGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlYW1PcHRpb25zIHtcbiAgdGVhbUlkOiBudW1iZXI7XG4gIHRlYW1OYW1lOiBzdHJpbmc7XG4gIHRlYW1Mb2dvOiBzdHJpbmc7XG4gIHRlYW1SYW5rOiBzdHJpbmc7XG4gIHdpbnM6IG51bWJlcjtcbiAgbG9zc2VzOiBudW1iZXI7XG4gIGxldmVsOiBudW1iZXI7XG4gIGlzT3BlblNsb3Q6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBUZWFtIHtcbiAgcHVibGljIG90aGVyczogYW55O1xuXG4gIHByaXZhdGUgX3RlYW1JZDogbnVtYmVyO1xuICBwcml2YXRlIF90ZWFtTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF90ZWFtTG9nbzogc3RyaW5nO1xuICBwcml2YXRlIF90ZWFtUmFuazogc3RyaW5nO1xuICBwcml2YXRlIF93aW5zOiBudW1iZXI7XG4gIHByaXZhdGUgX2xvc3NlczogbnVtYmVyO1xuICBwcml2YXRlIF9sZXZlbDogbnVtYmVyO1xuICBwcml2YXRlIF9pc09wZW5TbG90OiBib29sZWFuO1xuXG4gIHN0YXRpYyBnZXRMb2dvKGxvZ286IGFueSkge1xuICAgIGlmICghbG9nbyB8fCBsb2dvID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiAnLi9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvdGVhbV9sb2dvLnBuZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChsb2dvLnN0YXJ0c1dpdGgoQ09ORklHLlVSTCkpIHJldHVybiBsb2dvO1xuICAgICAgcmV0dXJuIENPTkZJRy5VUkwgKyAnL2Fzc2V0cy8nICsgbG9nbztcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJVGVhbU9wdGlvbnMpO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zPzogSVRlYW1PcHRpb25zKSB7XG4gICAgdGhpcy5fdGVhbUlkID0gb3B0aW9ucyAmJiBvcHRpb25zLnRlYW1JZCB8fCAwO1xuICAgIHRoaXMuX3RlYW1OYW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLnRlYW1OYW1lIHx8ICdGcmVha2ljayBUZWFtJztcbiAgICB0aGlzLl90ZWFtTG9nbyA9IG9wdGlvbnMgJiYgVGVhbS5nZXRMb2dvKG9wdGlvbnMudGVhbUxvZ28pIHx8ICdOYU4nO1xuICAgIHRoaXMuX3RlYW1SYW5rID0gb3B0aW9ucyAmJiBvcHRpb25zLnRlYW1SYW5rIHx8ICdOYU4nO1xuICAgIHRoaXMuX3dpbnMgPSBvcHRpb25zICYmIG9wdGlvbnMud2lucyB8fCAwO1xuICAgIHRoaXMuX2xvc3NlcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5sb3NzZXMgfHwgMDtcbiAgICB0aGlzLl9sZXZlbCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCB8fCAwO1xuICAgIHRoaXMuX2lzT3BlblNsb3QgPSBvcHRpb25zICYmIG9wdGlvbnMuaXNPcGVuU2xvdCB8fCBmYWxzZTtcbiAgICB0aGlzLm90aGVycyA9IHt9O1xuICB9XG5cbiAgZ2V0IHRlYW1JZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90ZWFtSWQ7XG4gIH1cblxuICBzZXQgdGVhbUlkKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90ZWFtSWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0ZWFtTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90ZWFtTmFtZTtcbiAgfVxuXG4gIHNldCB0ZWFtTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGVhbU5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0ZWFtTG9nbygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90ZWFtTG9nbztcbiAgfVxuXG4gIHNldCB0ZWFtTG9nbyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGVhbUxvZ28gPSBUZWFtLmdldExvZ28odmFsdWUpO1xuICB9XG5cbiAgZ2V0IHRlYW1SYW5rKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RlYW1SYW5rO1xuICB9XG5cbiAgc2V0IHRlYW1SYW5rKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZWFtUmFuayA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHdpbnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lucztcbiAgfVxuXG4gIHNldCB3aW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl93aW5zID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbG9zc2VzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xvc3NlcztcbiAgfVxuXG4gIHNldCBsb3NzZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xvc3NlcyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGxldmVsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsO1xuICB9XG5cbiAgc2V0IGxldmVsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZXZlbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGlzT3BlblNsb3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlblNsb3Q7XG4gIH1cblxuICBzZXQgaXNPcGVuU2xvdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzT3BlblNsb3QgPSB2YWx1ZTtcbiAgfVxufVxuIl19
