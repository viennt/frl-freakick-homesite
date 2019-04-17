"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'FIND_STATE_BY_COUNTRY';
var GetStatesByCountry = (function (_super) {
    __extends(GetStatesByCountry, _super);
    function GetStatesByCountry() {
        _super.call(this, API_ENDPOINT);
    }
    GetStatesByCountry.prototype.setCountryId = function (countryId) {
        this.countryId = countryId;
        return this;
    };
    return GetStatesByCountry;
}(Package_1.Package));
exports.GetStatesByCountry = GetStatesByCountry;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRTdGF0ZXNCeUNvdW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLHVCQUF1QixDQUFDO0FBRTdDO0lBQXdDLHNDQUFPO0lBRzdDO1FBQ0Usa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLHlDQUFZLEdBQW5CLFVBQW9CLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYdUMsaUJBQU8sR0FXOUM7QUFYWSwwQkFBa0IscUJBVzlCLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0dldFN0YXRlc0J5Q291bnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuL1BhY2thZ2UnO1xuXG4vKipcbiAqIEppcmEgdGlja2V0OiAgICAgICAgICAgR0xELTEyMiAoaHR0cHM6Ly9mcmVha2ljay5hdGxhc3NpYW4ubmV0L2Jyb3dzZS9HTEQtMTIyKVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBGSU5EX1NUQVRFX0JZX0NPVU5UUllcbiAqIFN1Y2Nlc3MgbWVzc2FnZSB0eXBlOiAgU1RBVEVfTFNUXG4gKiBFcnJvciBtZXNzYWdlIHR5cGU6ICAgIC5cbiAqL1xuY29uc3QgQVBJX0VORFBPSU5UID0gJ0ZJTkRfU1RBVEVfQllfQ09VTlRSWSc7XG5cbmV4cG9ydCBjbGFzcyBHZXRTdGF0ZXNCeUNvdW50cnkgZXh0ZW5kcyBQYWNrYWdlIHtcbiAgcHJpdmF0ZSBjb3VudHJ5SWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihBUElfRU5EUE9JTlQpO1xuICB9XG5cbiAgcHVibGljIHNldENvdW50cnlJZChjb3VudHJ5SWQ6IG51bWJlcik6IEdldFN0YXRlc0J5Q291bnRyeSB7XG4gICAgdGhpcy5jb3VudHJ5SWQgPSBjb3VudHJ5SWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==
