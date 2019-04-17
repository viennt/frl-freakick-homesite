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
var WhatOnFreakickComponent = (function () {
    function WhatOnFreakickComponent() {
        this.scroll = new core_1.EventEmitter();
    }
    WhatOnFreakickComponent.prototype.scrollTo = function (section) {
        this.scroll.emit(section);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WhatOnFreakickComponent.prototype, "scroll", void 0);
    WhatOnFreakickComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hp-what-on-freakick',
            templateUrl: 'what-on-freakick.component.html',
            styleUrls: ['what-on-freakick.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WhatOnFreakickComponent);
    return WhatOnFreakickComponent;
}());
exports.WhatOnFreakickComponent = WhatOnFreakickComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3doYXQtb24tZnJlYWtpY2svd2hhdC1vbi1mcmVha2ljay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRCxlQUFlLENBQUMsQ0FBQTtBQVFoRTtJQUFBO1FBQ1ksV0FBTSxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUt0RSxDQUFDO0lBSEMsMENBQVEsR0FBUixVQUFTLE9BQWU7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUpEO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQVBYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzs7K0JBQUE7SUFPRiw4QkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksK0JBQXVCLDBCQU1uQyxDQUFBIiwiZmlsZSI6ImFwcC9ob21lL3doYXQtb24tZnJlYWtpY2svd2hhdC1vbi1mcmVha2ljay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2hwLXdoYXQtb24tZnJlYWtpY2snLFxuICB0ZW1wbGF0ZVVybDogJ3doYXQtb24tZnJlYWtpY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2hhdC1vbi1mcmVha2ljay5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2hhdE9uRnJlYWtpY2tDb21wb25lbnQge1xuICBAT3V0cHV0KCkgc2Nyb2xsOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHNjcm9sbFRvKHNlY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuc2Nyb2xsLmVtaXQoc2VjdGlvbik7XG4gIH1cbn1cbiJdfQ==
