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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9Vc2VyUmVnaXN0ZXJFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFRcEMsSUFBTSxZQUFZLEdBQUcscUJBQXFCLENBQUM7QUFFM0M7SUFBdUMscUNBQU87SUFJMUM7UUFDSSxrQkFBTSxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sc0NBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixRQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCx3QkFBQztBQUFELENBakJBLEFBaUJDLENBakJzQyxpQkFBTyxHQWlCN0M7QUFqQlkseUJBQWlCLG9CQWlCN0IsQ0FBQSIsImZpbGUiOiJhcHAvcGFja2FnZXMvVXNlclJlZ2lzdGVyRXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWNrYWdlIH0gZnJvbSAnLi9QYWNrYWdlJztcblxuLyoqXG4gKiBKaXJhIHRpY2tldDogICAgICAgICAgIEZLRS02IChodHRwczovL2ZyZWFraWNrLmF0bGFzc2lhbi5uZXQvYnJvd3NlL0ZLRS02KVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBVU0VSX1JFR0lTVEVSX0VWRU5UXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIFVTRVJfUkVHSVNURVJfRVZFTlRfU1VDQ0VTU1xuICogRXJyb3IgbWVzc2FnZSB0eXBlOiAgICAuXG4gKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdVU0VSX1JFR0lTVEVSX0VWRU5UJztcblxuZXhwb3J0IGNsYXNzIFVzZXJSZWdpc3RlckV2ZW50IGV4dGVuZHMgUGFja2FnZSB7XG4gICAgcHJpdmF0ZSBldmVudElkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBxdWFudGl0eTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFQSV9FTkRQT0lOVCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEV2ZW50SWQoZXZlbnRJZDogbnVtYmVyKTogVXNlclJlZ2lzdGVyRXZlbnQge1xuICAgICAgICB0aGlzLmV2ZW50SWQgPSBldmVudElkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UXVhbnRpdHkocXVhbnRpdHk6IG51bWJlcik6IFVzZXJSZWdpc3RlckV2ZW50IHtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXX0=
