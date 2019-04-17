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
