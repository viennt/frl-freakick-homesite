"use strict";
var Address = (function () {
    function Address(options) {
        this.street = options && options.street.trim() || '';
        this.city = options && options.city || null;
        this.state = options && options.state || null;
        this.zipcode = options && options.zipcode.trim() || '';
        this.country = options && options.country || null;
    }
    Address.prototype.setStreet = function (street) {
        this.street = street.trim();
        return this;
    };
    Address.prototype.getStreet = function () {
        return this.street;
    };
    Address.prototype.setCity = function (city) {
        this.city = city;
        return this;
    };
    Address.prototype.getCity = function () {
        return this.city;
    };
    Address.prototype.setState = function (state) {
        this.state = state;
        return this;
    };
    Address.prototype.getState = function () {
        return this.state;
    };
    Address.prototype.setCountry = function (country) {
        this.country = country;
        return this;
    };
    Address.prototype.getCountry = function () {
        return this.country;
    };
    Address.prototype.toString = function () {
        var address = '';
        if (this.country !== null)
            address = address.concat(this.country.countryName);
        if (this.zipcode !== '')
            address = this.zipcode.concat(', ', address);
        if (this.state !== null)
            address = this.state.stateName.concat(', ', address);
        if (this.city !== null)
            address = this.city.cityName.concat(', ', address);
        if (this.street !== '')
            address = this.street.concat(', ', address);
        return address;
    };
    return Address;
}());
exports.Address = Address;
