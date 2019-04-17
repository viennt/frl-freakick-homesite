"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'CREATE_GUEST_TICKET_ON_FACILITIES';
var CreateGuestTicketOnFacilities = (function (_super) {
    __extends(CreateGuestTicketOnFacilities, _super);
    function CreateGuestTicketOnFacilities() {
        _super.call(this, API_ENDPOINT);
    }
    CreateGuestTicketOnFacilities.prototype.setFacility = function (facility) {
        this.facilityId = Number(facility.fieldId);
        return this;
    };
    CreateGuestTicketOnFacilities.prototype.setTime = function (when) {
        this.when = Number(when);
        return this;
    };
    CreateGuestTicketOnFacilities.prototype.setQuantity = function (quantity) {
        this.quantity = Number(quantity);
        return this;
    };
    return CreateGuestTicketOnFacilities;
}(Package_1.Package));
exports.CreateGuestTicketOnFacilities = CreateGuestTicketOnFacilities;
