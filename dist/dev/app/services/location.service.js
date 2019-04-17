"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.geolocationOptions = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };
    }
    LocationService.prototype.getCurrentPosition = function (successCallback) {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (possition) {
            var pos = {
                location: {
                    lng: possition.coords.longitude,
                    lat: possition.coords.latitude
                }
            };
            successCallback(pos);
        }, function (error) {
            _this.getCurrentPositionByGoogleAPI()
                .then(function (position) {
                successCallback(position);
            });
        }, this.geolocationOptions);
    };
    LocationService.prototype.getCurrentPositionByGoogleAPI = function () {
        return this.http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD2DeGymLqcAkcO_qOE0rKXUbFPswrtQD8', JSON.stringify({}), { headers: this.headers }).map(this.extractData).toPromise();
    };
    LocationService.prototype.getAddress = function (lngLat) {
        var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
            + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI&language=en'
            + '&latlng=' + lngLat.getLat() + ',' + lngLat.getLng();
        return this.http.get(apiUrl).map(this.extractData).toPromise();
    };
    LocationService.prototype.getCitiesByAddress = function (formattedAddress) {
        var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
            + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI'
            + '&address=' + formattedAddress;
        return this.http.get(apiUrl).map(this.extractData).toPromise();
    };
    LocationService.prototype.getTimeZone = function (latLng) {
        var apiUrl = 'https://maps.googleapis.com/maps/api/timezone/json'
            + '?timestamp=1331766000'
            + '&key=AIzaSyDROIp4tRM7q5OAgj67TCXrzpaFDd5KxJE'
            + '&location=' + latLng.lat + ',' + latLng.lng;
        return this.http.get(apiUrl).map(this.extractData).toPromise();
    };
    LocationService.prototype.searchAddressByKeyWord = function (formattedAddress) {
        var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
            + '?key=AIzaSyDxahPn9DAt4W5u9nOmr6dyUstsJSATZQI&language=en'
            + '&address=' + formattedAddress;
        return this.http.get(apiUrl).map(this.extractData).toPromise();
    };
    LocationService.prototype.extractData = function (res) {
        return res.json();
    };
    LocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBQ3hELFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUNyQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBTUUseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnRCLFlBQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFLbEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1lBQ3hCLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQztJQU1ELDRDQUFrQixHQUFsQixVQUFtQixlQUFvQjtRQUF2QyxpQkFtQkM7UUFsQkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FDdEMsVUFBQyxTQUFjO1lBQ2IsSUFBSSxHQUFHLEdBQUc7Z0JBQ1IsUUFBUSxFQUFFO29CQUNSLEdBQUcsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVM7b0JBQy9CLEdBQUcsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7aUJBQy9CO2FBQ0YsQ0FBQztZQUNGLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQ0QsVUFBQyxLQUFVO1lBQ1QsS0FBSSxDQUFDLDZCQUE2QixFQUFFO2lCQUNqQyxJQUFJLENBQUMsVUFBQyxRQUFhO2dCQUNsQixlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVELHVEQUE2QixHQUE3QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpR0FBaUcsRUFDckgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDbEIsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLE1BQWM7UUFDdkIsSUFBSSxNQUFNLEdBQUcsbURBQW1EO2NBQzVELDBEQUEwRDtjQUMxRCxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELDRDQUFrQixHQUFsQixVQUFtQixnQkFBd0I7UUFDekMsSUFBSSxNQUFNLEdBQUcsbURBQW1EO2NBQzVELDhDQUE4QztjQUM5QyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxNQUFXO1FBQ3JCLElBQUksTUFBTSxHQUFHLG9EQUFvRDtjQUM3RCx1QkFBdUI7Y0FDdkIsOENBQThDO2NBQzlDLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnREFBc0IsR0FBdEIsVUFBdUIsZ0JBQXdCO1FBQzdDLElBQUksTUFBTSxHQUFHLG1EQUFtRDtjQUM1RCwwREFBMEQ7Y0FDMUQsV0FBVyxHQUFHLGdCQUFnQixDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFTyxxQ0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQTdFSDtRQUFDLGlCQUFVLEVBQUU7O3VCQUFBO0lBOEViLHNCQUFDO0FBQUQsQ0E3RUEsQUE2RUMsSUFBQTtBQTdFWSx1QkFBZSxrQkE2RTNCLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2xvY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMbmdMYXQgfSBmcm9tICcuLi9tb2RlbHMvTG5nTGF0JztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYXRpb25TZXJ2aWNlIHtcblxuICBwcml2YXRlIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuXG4gIHByaXZhdGUgZ2VvbG9jYXRpb25PcHRpb25zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy5nZW9sb2NhdGlvbk9wdGlvbnMgPSB7XG4gICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICBtYXhpbXVtQWdlOiAzMDAwMCxcbiAgICAgIHRpbWVvdXQ6IDI3MDAwXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnRhaW4gdGhlIHVzZXIncyBjdXJyZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSAge2FueX0gIHN1Y2Nlc3NDYWxsYmFja1xuICAgKi9cbiAgZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjazogYW55KSB7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgIChwb3NzaXRpb246IGFueSkgPT4ge1xuICAgICAgICBsZXQgcG9zID0ge1xuICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBsbmc6IHBvc3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgbGF0OiBwb3NzaXRpb24uY29vcmRzLmxhdGl0dWRlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzdWNjZXNzQ2FsbGJhY2socG9zKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRQb3NpdGlvbkJ5R29vZ2xlQVBJKClcbiAgICAgICAgICAudGhlbigocG9zaXRpb246IGFueSkgPT4ge1xuICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHBvc2l0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmdlb2xvY2F0aW9uT3B0aW9uc1xuICAgICk7XG4gIH1cblxuICBnZXRDdXJyZW50UG9zaXRpb25CeUdvb2dsZUFQSSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZ2VvbG9jYXRpb24vdjEvZ2VvbG9jYXRlP2tleT1BSXphU3lEMkRlR3ltTHFjQWtjT19xT0UwcktYVWJGUHN3cnRRRDgnLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pLm1hcCh0aGlzLmV4dHJhY3REYXRhKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3MobG5nTGF0OiBMbmdMYXQpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBhcGlVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbidcbiAgICAgICsgJz9rZXk9QUl6YVN5RHhhaFBuOURBdDRXNXU5bk9tcjZkeVVzdHNKU0FUWlFJJmxhbmd1YWdlPWVuJ1xuICAgICAgKyAnJmxhdGxuZz0nICsgbG5nTGF0LmdldExhdCgpICsgJywnICsgbG5nTGF0LmdldExuZygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGFwaVVybCkubWFwKHRoaXMuZXh0cmFjdERhdGEpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgZ2V0Q2l0aWVzQnlBZGRyZXNzKGZvcm1hdHRlZEFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IGFwaVVybCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uJ1xuICAgICAgKyAnP2tleT1BSXphU3lEeGFoUG45REF0NFc1dTluT21yNmR5VXN0c0pTQVRaUUknXG4gICAgICArICcmYWRkcmVzcz0nICsgZm9ybWF0dGVkQWRkcmVzcztcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChhcGlVcmwpLm1hcCh0aGlzLmV4dHJhY3REYXRhKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGdldFRpbWVab25lKGxhdExuZzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgYXBpVXJsID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS90aW1lem9uZS9qc29uJ1xuICAgICAgKyAnP3RpbWVzdGFtcD0xMzMxNzY2MDAwJ1xuICAgICAgKyAnJmtleT1BSXphU3lEUk9JcDR0Uk03cTVPQWdqNjdUQ1hyenBhRkRkNUt4SkUnXG4gICAgICArICcmbG9jYXRpb249JyArIGxhdExuZy5sYXQgKyAnLCcgKyBsYXRMbmcubG5nO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGFwaVVybCkubWFwKHRoaXMuZXh0cmFjdERhdGEpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgc2VhcmNoQWRkcmVzc0J5S2V5V29yZChmb3JtYXR0ZWRBZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBhcGlVcmwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbidcbiAgICAgICsgJz9rZXk9QUl6YVN5RHhhaFBuOURBdDRXNXU5bk9tcjZkeVVzdHNKU0FUWlFJJmxhbmd1YWdlPWVuJ1xuICAgICAgKyAnJmFkZHJlc3M9JyArIGZvcm1hdHRlZEFkZHJlc3M7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYXBpVXJsKS5tYXAodGhpcy5leHRyYWN0RGF0YSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfVxufVxuIl19
