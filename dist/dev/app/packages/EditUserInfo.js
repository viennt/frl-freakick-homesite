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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9FZGl0VXNlckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDO0FBRXRDO0lBQWtDLGdDQUFPO0lBWXZDO1FBQ0Usa0JBQU0sWUFBWSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLFFBQWdCO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sbUNBQVksR0FBbkIsVUFBb0IsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxtQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sbUNBQVksR0FBbkIsVUFBb0IsRUFBVTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGdDQUFTLEdBQWhCLFVBQWlCLEVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxrQ0FBVyxHQUFsQixVQUFtQixFQUFVO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sdUNBQWdCLEdBQXZCLFVBQXdCLEdBQWE7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx5Q0FBa0IsR0FBekIsVUFBMEIsS0FBYTtRQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sc0NBQWUsR0FBdEIsVUFBdUIsWUFBb0I7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFSCxtQkFBQztBQUFELENBbEVBLEFBa0VDLENBbEVpQyxpQkFBTyxHQWtFeEM7QUFsRVksb0JBQVksZUFrRXhCLENBQUEiLCJmaWxlIjoiYXBwL3BhY2thZ2VzL0VkaXRVc2VySW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuL1BhY2thZ2UnO1xuXG4vKipcbiAqIEppcmEgdGlja2V0OiAgICAgICAgICAgRktFLTE2MCAoaHR0cHM6Ly9mcmVha2ljay5hdGxhc3NpYW4ubmV0L2Jyb3dzZS9GS0UtMTYwKVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBFRElUX1VTRVJfSU5GT1xuICogU3VjY2VzcyBtZXNzYWdlIHR5cGU6ICBFRElUX1VTRVJfSU5GT19TVUNDRVNTXG4gKiBFcnJvciBtZXNzYWdlIHR5cGU6ICAgIFJFUVVFU1RfRVJST1JcbiAqL1xuY29uc3QgQVBJX0VORFBPSU5UID0gJ0VESVRfVVNFUl9JTkZPJztcblxuZXhwb3J0IGNsYXNzIEVkaXRVc2VySW5mbyBleHRlbmRzIFBhY2thZ2Uge1xuICBwcml2YXRlIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgdXNlckltYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgY2VsbFBob25lOiBzdHJpbmc7XG4gIHByaXZhdGUgYmlydGhEYXRlOiBudW1iZXI7XG4gIHByaXZhdGUgY291bnRyeUlkOiBudW1iZXI7XG4gIHByaXZhdGUgY2l0eUlkOiBudW1iZXI7XG4gIHByaXZhdGUgZ2VuZGVySWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBsc3RQbGF5ZXJSb2xlSWQ6IG51bWJlcltdO1xuICBwcml2YXRlIHBsYXllckJhY2tncm91bmRJbWFnZTogc3RyaW5nO1xuICBwcml2YXRlIHBsYXllck51bWJlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEFQSV9FTkRQT0lOVCk7XG4gIH1cblxuICBwdWJsaWMgc2V0RnVsbE5hbWUoZnVsbE5hbWU6IHN0cmluZyk6IEVkaXRVc2VySW5mbyB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IFN0cmluZyhmdWxsTmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0VXNlckltYWdlKHVzZXJJbWFnZTogc3RyaW5nKTogRWRpdFVzZXJJbmZvIHtcbiAgICB0aGlzLnVzZXJJbWFnZSA9IFN0cmluZyh1c2VySW1hZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldENlbGxQaG9uZShjZWxsUGhvbmU6IHN0cmluZyk6IEVkaXRVc2VySW5mbyB7XG4gICAgdGhpcy5jZWxsUGhvbmUgPSBTdHJpbmcoY2VsbFBob25lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRCaXJ0aERhdGUoYmlydGhEYXRlOiBudW1iZXIpOiBFZGl0VXNlckluZm8ge1xuICAgIHRoaXMuYmlydGhEYXRlID0gTnVtYmVyKGJpcnRoRGF0ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0Q291bnRyeUlkKGlkOiBudW1iZXIpOiBFZGl0VXNlckluZm8ge1xuICAgIHRoaXMuY291bnRyeUlkID0gTnVtYmVyKGlkKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDaXR5SWQoaWQ6IG51bWJlcik6IEVkaXRVc2VySW5mbyB7XG4gICAgdGhpcy5jaXR5SWQgPSBOdW1iZXIoaWQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldEdlbmRlcklkKGlkOiBudW1iZXIpOiBFZGl0VXNlckluZm8ge1xuICAgIHRoaXMuZ2VuZGVySWQgPSBOdW1iZXIoaWQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldFBsYXllclJvbGVJZHMoaWRzOiBudW1iZXJbXSk6IEVkaXRVc2VySW5mbyB7XG4gICAgdGhpcy5sc3RQbGF5ZXJSb2xlSWQgPSBpZHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0QmFja2dyb3VuZEltYWdlKGltYWdlOiBzdHJpbmcpOiBFZGl0VXNlckluZm8ge1xuICAgIHRoaXMucGxheWVyQmFja2dyb3VuZEltYWdlID0gU3RyaW5nKGltYWdlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRQbGF5ZXJOdW1iZXIocGxheWVyTnVtYmVyOiBudW1iZXIpOiBFZGl0VXNlckluZm8ge1xuICAgIHRoaXMucGxheWVyTnVtYmVyID0gTnVtYmVyKHBsYXllck51bWJlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuIl19
