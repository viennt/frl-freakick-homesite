"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'USER_REGISTER_EVENT';
var UserRegisterEvent = (function (_super) {
    __extends(UserRegisterEvent, _super);
    function UserRegisterEvent() {
        _super.call(this, API_ENDPOINT);
    }
    UserRegisterEvent.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    UserRegisterEvent.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    return UserRegisterEvent;
}(Package_1.Package));
exports.UserRegisterEvent = UserRegisterEvent;
