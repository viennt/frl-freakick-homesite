"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'SEARCH_AVAILABLE_FIELD_ON_TIME_AND_COURT';
var SearchAvailableFieldOnTimeAndCourt = (function (_super) {
    __extends(SearchAvailableFieldOnTimeAndCourt, _super);
    function SearchAvailableFieldOnTimeAndCourt() {
        _super.call(this, API_ENDPOINT);
    }
    SearchAvailableFieldOnTimeAndCourt.prototype.setTime = function (time) {
        this.time = Number(time);
        return this;
    };
    SearchAvailableFieldOnTimeAndCourt.prototype.setSport = function (sport) {
        this.sportId = Number(sport.sportId);
        return this;
    };
    SearchAvailableFieldOnTimeAndCourt.prototype.setCourt = function (court) {
        this.courtId = Number(court.id);
        return this;
    };
    return SearchAvailableFieldOnTimeAndCourt;
}(Package_1.Package));
exports.SearchAvailableFieldOnTimeAndCourt = SearchAvailableFieldOnTimeAndCourt;
