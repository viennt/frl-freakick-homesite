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
var Ng2FilterPipe = (function () {
    function Ng2FilterPipe() {
    }
    Ng2FilterPipe.prototype.transform = function (items, filter) {
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            return items.filter(function (item) {
                return filterKeys_1.reduce(function (memo, keyName) {
                    return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '';
                }, true);
            });
        }
        else {
            return items;
        }
    };
    Ng2FilterPipe = __decorate([
        core_1.Pipe({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2FilterPipe);
    return Ng2FilterPipe;
}());
exports.Ng2FilterPipe = Ng2FilterPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL2ZpbHRlci9uZzItZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUlwRDtJQUFBO0lBV0EsQ0FBQztJQVZHLGlDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBVztRQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxZQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7Z0JBQ3BCLE9BQUEsWUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxPQUFPO29CQUM1QixPQUFBLENBQUMsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFBekYsQ0FBeUYsRUFBRSxJQUFJLENBQUM7WUFEcEcsQ0FDb0csQ0FBQyxDQUFDO1FBQzlHLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFiTDtRQUFDLFdBQUksQ0FBQztZQUNGLElBQUksRUFBRSxRQUFRO1NBQ2pCLENBQUM7O3FCQUFBO0lBWUYsb0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLHFCQUFhLGdCQVd6QixDQUFBIiwiZmlsZSI6ImFwcC9wbHVnaW5zL2ZpbHRlci9uZzItZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AUGlwZSh7XG4gICAgbmFtZTogJ2ZpbHRlcidcbn0pXG5leHBvcnQgY2xhc3MgTmcyRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShpdGVtczogYW55LCBmaWx0ZXI6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChmaWx0ZXIgJiYgQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJLZXlzID0gT2JqZWN0LmtleXMoZmlsdGVyKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAgICAgICAgIGZpbHRlcktleXMucmVkdWNlKChtZW1vLCBrZXlOYW1lKSA9PlxuICAgICAgICAgICAgICAgICAgICAobWVtbyAmJiBuZXcgUmVnRXhwKGZpbHRlcltrZXlOYW1lXSwgJ2dpJykudGVzdChpdGVtW2tleU5hbWVdKSkgfHwgZmlsdGVyW2tleU5hbWVdID09PSAnJywgdHJ1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
