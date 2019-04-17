"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'EDIT_USER_INFO';
var EditUserInfo = (function (_super) {
    __extends(EditUserInfo, _super);
    function EditUserInfo() {
        _super.call(this, API_ENDPOINT);
    }
    EditUserInfo.prototype.setFullName = function (fullName) {
        this.fullName = String(fullName);
        return this;
    };
    EditUserInfo.prototype.setUserImage = function (userImage) {
        this.userImage = String(userImage);
        return this;
    };
    EditUserInfo.prototype.setCellPhone = function (cellPhone) {
        this.cellPhone = String(cellPhone);
        return this;
    };
    EditUserInfo.prototype.setBirthDate = function (birthDate) {
        this.birthDate = Number(birthDate);
        return this;
    };
    EditUserInfo.prototype.setCountryId = function (id) {
        this.countryId = Number(id);
        return this;
    };
    EditUserInfo.prototype.setCityId = function (id) {
        this.cityId = Number(id);
        return this;
    };
    EditUserInfo.prototype.setGenderId = function (id) {
        this.genderId = Number(id);
        return this;
    };
    EditUserInfo.prototype.setPlayerRoleIds = function (ids) {
        this.lstPlayerRoleId = ids;
        return this;
    };
    EditUserInfo.prototype.setBackgroundImage = function (image) {
        this.playerBackgroundImage = String(image);
        return this;
    };
    EditUserInfo.prototype.setPlayerNumber = function (playerNumber) {
        this.playerNumber = Number(playerNumber);
        return this;
    };
    return EditUserInfo;
}(Package_1.Package));
exports.EditUserInfo = EditUserInfo;
