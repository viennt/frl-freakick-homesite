"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Package_1 = require('./Package');
var API_ENDPOINT = 'SEARCH_EVENTS';
var GetEvents = (function (_super) {
    __extends(GetEvents, _super);
    function GetEvents() {
        _super.call(this, API_ENDPOINT);
        this.keyWord = '';
        this.lstEventType = [];
    }
    GetEvents.prototype.setKeyWord = function (keyWord) {
        this.keyWord = keyWord;
        return this;
    };
    GetEvents.prototype.setEventType = function (lstEventType) {
        this.lstEventType = lstEventType;
        return this;
    };
    GetEvents.prototype.setStatus = function (codes) {
        this.statusCodes = codes;
        return this;
    };
    GetEvents.prototype.setCoordinate = function (lngLat) {
        this.latitude = lngLat.getLat();
        this.longitude = lngLat.getLng();
        return this;
    };
    GetEvents.prototype.setRadius = function (radius) {
        this.radiusKm = radius;
        return this;
    };
    GetEvents.prototype.setPagination = function (perPage, page) {
        this.perPage = perPage;
        this.page = page;
        return this;
    };
    return GetEvents;
}(Package_1.Package));
exports.GetEvents = GetEvents;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWNrYWdlcy9HZXRFdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0Esd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBUXBDLElBQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQztBQUVyQztJQUErQiw2QkFBTztJQVVsQztRQUNJLGtCQUFNLFlBQVksQ0FBQyxDQUFDO1FBVmhCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBYSxFQUFFLENBQUM7SUFVcEMsQ0FBQztJQUVNLDhCQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sZ0NBQVksR0FBbkIsVUFBb0IsWUFBc0I7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sNkJBQVMsR0FBaEIsVUFBaUIsS0FBZTtRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxpQ0FBYSxHQUFwQixVQUFxQixNQUFjO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDZCQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBcUIsT0FBZSxFQUFFLElBQVk7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTdDQSxBQTZDQyxDQTdDOEIsaUJBQU8sR0E2Q3JDO0FBN0NZLGlCQUFTLFlBNkNyQixDQUFBIiwiZmlsZSI6ImFwcC9wYWNrYWdlcy9HZXRFdmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMbmdMYXQgfSBmcm9tICcuLi9tb2RlbHMvTG5nTGF0JztcbmltcG9ydCB7IFBhY2thZ2UgfSBmcm9tICcuL1BhY2thZ2UnO1xuXG4vKipcbiAqIEppcmEgdGlja2V0OiAgICAgICAgICAgRktFLTIyNyAoaHR0cHM6Ly9mcmVha2ljay5hdGxhc3NpYW4ubmV0L2Jyb3dzZS9GS0UtMjI3KVxuICogQVBJIEVuZHBvaW50OiAgICAgICAgICBTRUFSQ0hfRVZFTlRTXG4gKiBTdWNjZXNzIG1lc3NhZ2UgdHlwZTogIFNFQVJDSF9FVkVOVFNfU1VDQ0VTU1xuICogRXJyb3IgbWVzc2FnZSB0eXBlOiAgICAuXG4gKi9cbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdTRUFSQ0hfRVZFTlRTJztcblxuZXhwb3J0IGNsYXNzIEdldEV2ZW50cyBleHRlbmRzIFBhY2thZ2Uge1xuICAgIHByaXZhdGUga2V5V29yZDogc3RyaW5nID0gJyc7IC8vIFNldCAnJyB0byBzZWFyY2ggYWxsXG4gICAgcHJpdmF0ZSBsc3RFdmVudFR5cGU6IG51bWJlcltdID0gW107IC8vIFNldCAwIHRvIHNlYXJjaCBhbGxcbiAgICBwcml2YXRlIHN0YXR1c0NvZGVzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBsb25naXR1ZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHJhZGl1c0ttOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwZXJQYWdlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVBJX0VORFBPSU5UKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0S2V5V29yZChrZXlXb3JkOiBzdHJpbmcpOiBHZXRFdmVudHMge1xuICAgICAgICB0aGlzLmtleVdvcmQgPSBrZXlXb3JkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RXZlbnRUeXBlKGxzdEV2ZW50VHlwZTogbnVtYmVyW10pOiBHZXRFdmVudHMge1xuICAgICAgICB0aGlzLmxzdEV2ZW50VHlwZSA9IGxzdEV2ZW50VHlwZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN0YXR1cyhjb2Rlczogc3RyaW5nW10pOiBHZXRFdmVudHMge1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGVzID0gY29kZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb29yZGluYXRlKGxuZ0xhdDogTG5nTGF0KTogR2V0RXZlbnRzIHtcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGxuZ0xhdC5nZXRMYXQoKTtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBsbmdMYXQuZ2V0TG5nKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRSYWRpdXMocmFkaXVzOiBudW1iZXIpOiBHZXRFdmVudHMge1xuICAgICAgICB0aGlzLnJhZGl1c0ttID0gcmFkaXVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFnaW5hdGlvbihwZXJQYWdlOiBudW1iZXIsIHBhZ2U6IG51bWJlcik6IEdldEV2ZW50cyB7XG4gICAgICAgIHRoaXMucGVyUGFnZSA9IHBlclBhZ2U7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdfQ==
