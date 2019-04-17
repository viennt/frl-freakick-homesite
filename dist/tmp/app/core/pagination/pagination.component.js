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
            template: "<div class=\"row\" *ngIf=\"data && pages && pages.length\">     <div class=\"col-sm-12\">         <div class=\"pagination\">             <a (click)=\"onCLickPrevious($event)\"                 [class.disabled]=\"data.currentPage <= 0\">&laquo;</a>             <a *ngFor=\"let page of pages\" (click)=\"onClickItem(page)\"                [class.active]=\"page === data.currentPage\">{{ page + 1 }}</a>             <a (click)=\"onCLickNext($event)\"                 [class.disabled]=\"data.currentPage >= (data.totalPage - 1)\">&raquo;</a>         </div>     </div> </div>",
            styles: [".pagination{display:inline-block}.pagination a{color:#000;float:left;padding:8px 16px;border-radius:5px;text-decoration:none;transition:background-color .3s}.pagination a.active{border-radius:5px;background-color:#da3743;color:#fff}.pagination a.disabled{opacity:.8;cursor:not-allowed}.pagination a:hover:not(.active):not(.disabled){background-color:#ddd;cursor:pointer}"]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
