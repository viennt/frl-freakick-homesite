"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'BOOK_GUEST_TICKET_FOR_CLASS';
var BookGuestTicketForClass = (function (_super) {
    __extends(BookGuestTicketForClass, _super);
    function BookGuestTicketForClass() {
        _super.call(this, API_ENDPOINT);
    }
    BookGuestTicketForClass.prototype.setTrainingClass = function (trainingClass) {
        this.trainingClassId = Number(trainingClass.classId);
        return this;
    };
    BookGuestTicketForClass.prototype.setTime = function (time) {
        this.time = Number(time);
        return this;
    };
    BookGuestTicketForClass.prototype.setQuantity = function (quantity) {
        this.quantity = Number(quantity);
        return this;
    };
    return BookGuestTicketForClass;
}(Package_1.Package));
exports.BookGuestTicketForClass = BookGuestTicketForClass;
