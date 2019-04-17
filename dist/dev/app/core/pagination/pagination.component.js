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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.clickItem = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.pages = this.generatePageList(this.data.totalPage);
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        this.pages = this.generatePageList(this.data.totalPage);
    };
    PaginationComponent.prototype.generatePageList = function (totalItem) {
        var items = [];
        if (totalItem <= 1)
            return [];
        for (var i = 0; i < totalItem; i++)
            items.push(i);
        return items;
    };
    PaginationComponent.prototype.onClickItem = function (page) {
        if (page === this.data.currentPage)
            return;
        this.clickItem.emit(page);
    };
    PaginationComponent.prototype.onCLickPrevious = function () {
        if (this.data.currentPage <= 0)
            return;
        this.clickItem.emit(this.data.currentPage - 1);
    };
    PaginationComponent.prototype.onCLickNext = function () {
        if (this.data.currentPage >= (this.data.totalPage - 1))
            return;
        this.clickItem.emit(this.data.currentPage + 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "clickItem", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-pagination',
            templateUrl: 'pagination.component.html',
            styleUrls: ['pagination.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQU9PLGVBQWUsQ0FBQyxDQUFBO0FBUXZCO0lBQUE7UUFHWSxjQUFTLEdBQXlCLElBQUksbUJBQVksRUFBVSxDQUFDO0lBaUN6RSxDQUFDO0lBN0JDLHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsOENBQWdCLEdBQWhCLFVBQWlCLFNBQWlCO1FBQ2hDLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUU7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLElBQVk7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBakNEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzswREFBQTtJQVRYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzs7MkJBQUE7SUFxQ0YsMEJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLDJCQUFtQixzQkFvQy9CLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW06IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHVibGljIHBhZ2VzOiBudW1iZXJbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZW5lcmF0ZVBhZ2VMaXN0KHRoaXMuZGF0YS50b3RhbFBhZ2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2VuZXJhdGVQYWdlTGlzdCh0aGlzLmRhdGEudG90YWxQYWdlKTtcbiAgfVxuXG4gIGdlbmVyYXRlUGFnZUxpc3QodG90YWxJdGVtOiBudW1iZXIpIHtcbiAgICBsZXQgaXRlbXM6IG51bWJlcltdID0gW107XG4gICAgaWYgKHRvdGFsSXRlbSA8PSAxKSByZXR1cm4gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbEl0ZW07IGkrKykgaXRlbXMucHVzaChpKTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICBvbkNsaWNrSXRlbShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAocGFnZSA9PT0gdGhpcy5kYXRhLmN1cnJlbnRQYWdlKSByZXR1cm47XG4gICAgdGhpcy5jbGlja0l0ZW0uZW1pdChwYWdlKTtcbiAgfVxuXG4gIG9uQ0xpY2tQcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5kYXRhLmN1cnJlbnRQYWdlIDw9IDApIHJldHVybjtcbiAgICB0aGlzLmNsaWNrSXRlbS5lbWl0KHRoaXMuZGF0YS5jdXJyZW50UGFnZSAtIDEpO1xuICB9XG5cbiAgb25DTGlja05leHQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5jdXJyZW50UGFnZSA+PSAodGhpcy5kYXRhLnRvdGFsUGFnZSAtIDEpKSByZXR1cm47XG4gICAgdGhpcy5jbGlja0l0ZW0uZW1pdCh0aGlzLmRhdGEuY3VycmVudFBhZ2UgKyAxKTtcbiAgfVxufVxuIl19
