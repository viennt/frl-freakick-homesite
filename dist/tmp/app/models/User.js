"use strict";
var City_1 = require('./City');
var State_1 = require('./State');
var Country_1 = require('./Country');
var constants_1 = require('../constants');
var User = (function () {
    function User(options) {
        this.lineAddress = '';
        this.postalCode = '';
        this.countryCode = 'US';
        this.cardNumber = '';
        this.expiration = '';
        this.cvc = '';
        this.cardType = '';
        this.userId = options && options.userId || null;
        this.captainOfTeam = options && options.captainOfTeam || null;
        this.email = options && options.email || '';
        this.password = options && options.password || '';
        this.userImage = options && options.userImage || '';
        this.userName = options && options.userName || '';
        this.fullName = options && options.fullName || '';
        this.firstName = options && options.fullName && options.fullName.substring(0, options.fullName.indexOf(' ')) || '';
        this.lastName = options && options.fullName && options.fullName.split(' ').pop() || '';
        this.level = options && options.level || null;
        this.levelLabel = options && options.levelLabel || '';
        this.currentExperience = options && options.currentExperience || null;
        this.distanceRangeUpToLevel = options && options.distanceRangeUpToLevel || null;
        this.maxExperience = options && options.maxExperience || null;
        this.playedGame = options && options.playedGame || 0;
        this.isFinishDemographicQuestion = options && options.isFinishDemographicQuestion || false;
        this.city = options && options.city && new City_1.City(options.city.cityId, options.city.cityName) || new City_1.City(-1, null);
        this.state = options && options.state && new State_1.State(options.state.stateId, options.state.stateName) || new State_1.State(-1, null);
        this.country = options && options.country
            && new Country_1.Country(options.country.countryId, options.country.countryName) || new Country_1.Country(-1, null);
        this.like = options && options.like || 0;
        this.follower = options && options.follower || 0;
        this.gamePlayed = options && options.gamePlayed || null;
        this.calcExperiencePercent();
    }
    User.getLogo = function (logo) {
        if (!logo || logo === 'null') {
            return './assets/images/default/user_logo.png';
        }
        else {
            if (logo.startsWith(constants_1.CONFIG.URL))
                return logo;
            return constants_1.CONFIG.URL + '/assets/' + logo;
        }
    };
    User.prototype.calcExperiencePercent = function () {
        try {
            this.expPercent = (1 - (this.maxExperience - this.currentExperience) / this.distanceRangeUpToLevel) * 100;
        }
        catch (error) {
            console.warn(error);
        }
    };
    Object.defineProperty(User.prototype, "userImage", {
        get: function () {
            return this._userImage;
        },
        set: function (value) {
            console.log(value);
            this._userImage = User.getLogo(value);
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
