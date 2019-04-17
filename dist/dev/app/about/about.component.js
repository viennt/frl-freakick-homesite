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
var Observable_1 = require('../../../../node_modules/rxjs/Observable');
var TypeWriter = [
    'Delication to removing barriers to opportunity, so people can live to their full potential.',
];
var Space = '                    ';
var TypeWriterArray = TypeWriter.map(function (typeWriterText) {
    return typeWriterText + Space;
});
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        var twDisplays$ = TypeWriterArray.map(function (typeWriterText) {
            return Observable_1.Observable
                .interval(50)
                .timeInterval()
                .take(typeWriterText.length + 1)
                .map(function (val, index) { return typeWriterText.substr(0, index); });
        });
        this.typeWriterDisplay$ = Observable_1.Observable.concat.apply(Observable_1.Observable, twDisplays$);
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCwyQkFBMkIsMENBQTBDLENBQUMsQ0FBQTtBQUV0RSxJQUFNLFVBQVUsR0FBYTtJQUMzQiw2RkFBNkY7Q0FDOUYsQ0FBQztBQUNGLElBQU0sS0FBSyxHQUFXLHNCQUFzQixDQUFDO0FBQzdDLElBQU0sZUFBZSxHQUFhLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxjQUFjO0lBQzdELE9BQUEsY0FBYyxHQUFHLEtBQUs7QUFBdEIsQ0FBc0IsQ0FDdkIsQ0FBQztBQVFGO0lBQUE7SUFjQSxDQUFDO0lBWEMsaUNBQVEsR0FBUjtRQUNFLElBQUksV0FBVyxHQUFVLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBQSxjQUFjO1lBQ3pELE9BQUEsdUJBQVU7aUJBQ1AsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixZQUFZLEVBQUU7aUJBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQixHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQS9CLENBQStCLENBQUM7UUFKdkQsQ0FJdUQsQ0FDeEQsQ0FBQztRQUNGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyx1QkFBVSxDQUFDLE1BQU0sT0FBakIsdUJBQVUsRUFBVyxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBbEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7O3NCQUFBO0lBZUYscUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHNCQUFjLGlCQWMxQixDQUFBIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUnO1xuXG5jb25zdCBUeXBlV3JpdGVyOiBzdHJpbmdbXSA9IFtcbiAgJ0RlbGljYXRpb24gdG8gcmVtb3ZpbmcgYmFycmllcnMgdG8gb3Bwb3J0dW5pdHksIHNvIHBlb3BsZSBjYW4gbGl2ZSB0byB0aGVpciBmdWxsIHBvdGVudGlhbC4nLFxuXTtcbmNvbnN0IFNwYWNlOiBzdHJpbmcgPSAnICAgICAgICAgICAgICAgICAgICAnO1xuY29uc3QgVHlwZVdyaXRlckFycmF5OiBzdHJpbmdbXSA9IFR5cGVXcml0ZXIubWFwKHR5cGVXcml0ZXJUZXh0ID0+XG4gIHR5cGVXcml0ZXJUZXh0ICsgU3BhY2Vcbik7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay1hYm91dCcsXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHR5cGVXcml0ZXJEaXNwbGF5JDogYW55O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCB0d0Rpc3BsYXlzJDogYW55W10gPSBUeXBlV3JpdGVyQXJyYXkubWFwKHR5cGVXcml0ZXJUZXh0ID0+XG4gICAgICBPYnNlcnZhYmxlXG4gICAgICAgIC5pbnRlcnZhbCg1MClcbiAgICAgICAgLnRpbWVJbnRlcnZhbCgpXG4gICAgICAgIC50YWtlKHR5cGVXcml0ZXJUZXh0Lmxlbmd0aCArIDEpXG4gICAgICAgIC5tYXAoKHZhbCwgaW5kZXgpID0+IHR5cGVXcml0ZXJUZXh0LnN1YnN0cigwLCBpbmRleCkpXG4gICAgKTtcbiAgICB0aGlzLnR5cGVXcml0ZXJEaXNwbGF5JCA9IE9ic2VydmFibGUuY29uY2F0KC4uLnR3RGlzcGxheXMkKTtcbiAgfVxuXG59XG4iXX0=
