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
var common_1 = require('@angular/common');
var scroll_carousel_component_1 = require('./scroll-carousel.component');
var carousel_item_component_1 = require('./item/carousel-item.component');
var ScrollCarouselModule = (function () {
    function ScrollCarouselModule() {
    }
    ScrollCarouselModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [scroll_carousel_component_1.ScrollCarouselComponent, carousel_item_component_1.ScrollCarouselItemComponent],
            declarations: [scroll_carousel_component_1.ScrollCarouselComponent, carousel_item_component_1.ScrollCarouselItemComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ScrollCarouselModule);
    return ScrollCarouselModule;
}());
exports.ScrollCarouselModule = ScrollCarouselModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3Njcm9sbC1jYXJvdXNlbC9zY3JvbGwtY2Fyb3VzZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsMENBQXdDLDZCQUE2QixDQUFDLENBQUE7QUFDdEUsd0NBQTRDLGdDQUFnQyxDQUFDLENBQUE7QUFPN0U7SUFBQTtJQUFvQyxDQUFDO0lBTHJDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQyxtREFBdUIsRUFBRSxxREFBMkIsQ0FBQztZQUMvRCxZQUFZLEVBQUUsQ0FBQyxtREFBdUIsRUFBRSxxREFBMkIsQ0FBQztTQUN2RSxDQUFDOzs0QkFBQTtJQUNrQywyQkFBQztBQUFELENBQXBDLEFBQXFDLElBQUE7QUFBeEIsNEJBQW9CLHVCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvc2Nyb2xsLWNhcm91c2VsL3Njcm9sbC1jYXJvdXNlbC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU2Nyb2xsQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbC1jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsQ2Fyb3VzZWxJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2Nhcm91c2VsLWl0ZW0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU2Nyb2xsQ2Fyb3VzZWxDb21wb25lbnQsIFNjcm9sbENhcm91c2VsSXRlbUNvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbU2Nyb2xsQ2Fyb3VzZWxDb21wb25lbnQsIFNjcm9sbENhcm91c2VsSXRlbUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbENhcm91c2VsTW9kdWxlIHsgfVxuIl19
