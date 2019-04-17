"use strict";
var Country_1 = require("../models/Country");
var GetCitiesByCountry = (function () {
    function GetCitiesByCountry(country) {
        this.countryId = country.countryId;
    }
    GetCitiesByCountry.prototype.setCountry = function (country) {
        this.countryId = country.countryId;
    };
    GetCitiesByCountry.prototype.getCountry = function () {
        return new Country_1.Country(this.countryId, '');
    };
    return GetCitiesByCountry;
}());
GetCitiesByCountry.API_ENDPOINT = 'FIND_CITES_BY_COUNTRY';
exports.GetCitiesByCountry = GetCitiesByCountry;
//# sourceMappingURL=GetCitiesByCountry.js.map