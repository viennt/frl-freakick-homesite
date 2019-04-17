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
var google_maps_api_wrapper_1 = require('angular2-google-maps/core/services/google-maps-api-wrapper');
var LngLat_1 = require('../../models/LngLat');
var GoogleMapDirectionsDirective = (function () {
    function GoogleMapDirectionsDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.error = new core_1.EventEmitter();
    }
    GoogleMapDirectionsDirective.prototype.ngOnInit = function () {
        var _this = this;
        var request = {
            destination: this.origin,
            origin: this.destination,
            travelMode: 'DRIVING'
        };
        this.gmapsApi.getNativeMap().then(function (map) {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            directionsService.route(request, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    console.warn('Directions request failed due to ' + status);
                    window.alert('Sorry! We can not get direction');
                    _this.error.emit('Sorry! We can not get direction');
                }
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', LngLat_1.LngLat)
    ], GoogleMapDirectionsDirective.prototype, "origin", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', LngLat_1.LngLat)
    ], GoogleMapDirectionsDirective.prototype, "destination", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GoogleMapDirectionsDirective.prototype, "error", void 0);
    GoogleMapDirectionsDirective = __decorate([
        core_1.Directive({
            selector: 'sebm-google-map-directions',
        }), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper])
    ], GoogleMapDirectionsDirective);
    return GoogleMapDirectionsDirective;
}());
exports.GoogleMapDirectionsDirective = GoogleMapDirectionsDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2dvb2dsZS1tYXAtZGlyZWN0aW9uL2dvb2dsZS1tYXAtZGlyZWN0aW9ucy1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUMvRSx3Q0FBcUMsNERBQTRELENBQUMsQ0FBQTtBQUVsRyx1QkFBdUIscUJBQXFCLENBQUMsQ0FBQTtBQU83QztJQUtFLHNDQUFvQixRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUZ4QyxVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBR3hELENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksT0FBTyxHQUFHO1lBQ1osV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVztZQUN4QixVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ3pDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzFELElBQUksaUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQzNELGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBYSxFQUFFLE1BQVc7Z0JBQzFELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNwQixpQkFBaUIsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE1QkQ7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3FFQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OytEQUFBO0lBTlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtTQUN2QyxDQUFDOztvQ0FBQTtJQStCRixtQ0FBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5Qlksb0NBQTRCLCtCQThCeEMsQ0FBQSIsImZpbGUiOiJhcHAvY29yZS9nb29nbGUtbWFwLWRpcmVjdGlvbi9nb29nbGUtbWFwLWRpcmVjdGlvbnMtZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICdhbmd1bGFyMi1nb29nbGUtbWFwcy9jb3JlL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcblxuaW1wb3J0IHsgTG5nTGF0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0xuZ0xhdCc7XG5cbmRlY2xhcmUgbGV0IGdvb2dsZTogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdzZWJtLWdvb2dsZS1tYXAtZGlyZWN0aW9ucycsXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcERpcmVjdGlvbnNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBvcmlnaW46IExuZ0xhdDtcbiAgQElucHV0KCkgZGVzdGluYXRpb246IExuZ0xhdDtcbiAgQE91dHB1dCgpIGVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdtYXBzQXBpOiBHb29nbGVNYXBzQVBJV3JhcHBlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICBkZXN0aW5hdGlvbjogdGhpcy5vcmlnaW4sXG4gICAgICBvcmlnaW46IHRoaXMuZGVzdGluYXRpb24sXG4gICAgICB0cmF2ZWxNb2RlOiAnRFJJVklORydcbiAgICB9O1xuICAgIHRoaXMuZ21hcHNBcGkuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwOiBhbnkpID0+IHtcbiAgICAgIGxldCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZTtcbiAgICAgIGxldCBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXI7XG4gICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobWFwKTtcbiAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIChyZXNwb25zZTogYW55LCBzdGF0dXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdEaXJlY3Rpb25zIHJlcXVlc3QgZmFpbGVkIGR1ZSB0byAnICsgc3RhdHVzKTtcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1NvcnJ5ISBXZSBjYW4gbm90IGdldCBkaXJlY3Rpb24nKTtcbiAgICAgICAgICB0aGlzLmVycm9yLmVtaXQoJ1NvcnJ5ISBXZSBjYW4gbm90IGdldCBkaXJlY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxufVxuIl19
