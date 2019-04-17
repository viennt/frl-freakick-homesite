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
var BrandsComponent = (function () {
    function BrandsComponent() {
    }
    BrandsComponent.prototype.ngOnInit = function () {
        this.nonFixedBackground = false;
        this.sectionOpacity = 1;
    };
    __decorate([
        core_1.ViewChild('section'), 
        __metadata('design:type', Object)
    ], BrandsComponent.prototype, "section", void 0);
    BrandsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-brands',
            templateUrl: 'brands.component.html',
            styleUrls: ['brands.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BrandsComponent);
    return BrandsComponent;
}());
exports.BrandsComponent = BrandsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuZHMvYnJhbmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJELGVBQWUsQ0FBQyxDQUFBO0FBUTNFO0lBTUk7SUFFQSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVpEO1FBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7O29EQUFBO0lBUHpCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7O3VCQUFBO0lBeUJGLHNCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSx1QkFBZSxrQkF3QjNCLENBQUEiLCJmaWxlIjoiYXBwL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdmcmstYnJhbmRzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2JyYW5kcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2JyYW5kcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJhbmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCdzZWN0aW9uJykgc2VjdGlvbjogYW55O1xuXG4gICAgcHVibGljIHNlY3Rpb25PcGFjaXR5OiBudW1iZXI7XG4gICAgcHVibGljIG5vbkZpeGVkQmFja2dyb3VuZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5vbkZpeGVkQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlY3Rpb25PcGFjaXR5ID0gMTtcbiAgICB9XG5cbiAgICAvLyBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJywgWyckZXZlbnQnXSkgY2FsY0ZpcnN0U2VjdGlvbk9wYWNpdHkoZXZlbnQ6IGFueSkge1xuICAgIC8vICAgICBsZXQgZWxIZWlnaHQgPSB0aGlzLnNlY3Rpb24ubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gICAgIGxldCBzY3JvbGxUb1RvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgLy8gICAgIGxldCBvcGFjaXR5ID0gMSAtIChzY3JvbGxUb1RvcCAvIChlbEhlaWdodCAvIDMpKTtcbiAgICAvL1xuICAgIC8vICAgICB0aGlzLnNlY3Rpb25PcGFjaXR5ID0gKG9wYWNpdHkgPCAwLjMpID8gMC4zIDogb3BhY2l0eTtcbiAgICAvLyAgICAgdGhpcy5ub25GaXhlZEJhY2tncm91bmQgPSAoc2Nyb2xsVG9Ub3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQpID49IGVsSGVpZ2h0O1xuICAgIC8vIH1cblxufVxuIl19
