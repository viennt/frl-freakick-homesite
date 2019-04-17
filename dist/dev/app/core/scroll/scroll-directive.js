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
var HIDDEN_CLASSES = ' hide ';
var ANIMATED_CLASSES = ' animated ';
var DEFAULT_ANIMATED_CLASS = ' fadeIn ';
var ScrollDirective = (function () {
    function ScrollDirective(el) {
        this.el = el;
        this.scrollAbove = new core_1.EventEmitter();
        this.scrollBelow = new core_1.EventEmitter();
        this.scrollOn = new core_1.EventEmitter();
        this.animatedClass = this.animatedClass || DEFAULT_ANIMATED_CLASS;
        this.initialClasses = this.el.nativeElement.className;
        this.el.nativeElement.style.visibility = 'hidden';
    }
    ScrollDirective.prototype.onScroll = function (event) {
        if (this.isScreenAboveElement()) {
            this.scrollAbove.emit(this.getPixelToElement());
        }
        else if (this.isScreenBelowElement()) {
            this.scrollBelow.emit(this.getPixelPastElement());
        }
        else {
            this.el.nativeElement.style.visibility = 'visible';
            this.el.nativeElement.className = this.initialClasses + ANIMATED_CLASSES + this.animatedClass;
            this.scrollOn.emit();
        }
    };
    ScrollDirective.prototype.getDocumentScrollOffset = function () {
        return (document.documentElement.scrollTop || document.body.scrollTop) + (window.innerHeight / 2);
    };
    ScrollDirective.prototype.getPixelToElement = function () {
        var pixelToEl = this.el.nativeElement.offsetTop - this.getDocumentScrollOffset();
        return (pixelToEl >= 0) ? pixelToEl : 0;
    };
    ScrollDirective.prototype.getPixelPastElement = function () {
        var pixelPastEl = this.getDocumentScrollOffset() - (this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight);
        return (pixelPastEl <= 0) ? pixelPastEl : 0;
    };
    ScrollDirective.prototype.isScreenAboveElement = function () {
        return this.getDocumentScrollOffset() < this.el.nativeElement.offsetTop;
    };
    ScrollDirective.prototype.isScreenBelowElement = function () {
        return this.getDocumentScrollOffset() < (this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight);
    };
    __decorate([
        core_1.Input('animation'), 
        __metadata('design:type', String)
    ], ScrollDirective.prototype, "animatedClass", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollDirective.prototype, "scrollAbove", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollDirective.prototype, "scrollBelow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollDirective.prototype, "scrollOn", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ScrollDirective.prototype, "onScroll", null);
    ScrollDirective = __decorate([
        core_1.Directive({
            selector: '[frk-scroll]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ScrollDirective);
    return ScrollDirective;
}());
exports.ScrollDirective = ScrollDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL3Njcm9sbC9zY3JvbGwtZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFPTyxlQUFlLENBQUMsQ0FBQTtBQUV2QixJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUM7QUFDaEMsSUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7QUFDdEMsSUFBTSxzQkFBc0IsR0FBRyxVQUFVLENBQUM7QUFLMUM7SUFTRSx5QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFOeEIsZ0JBQVcsR0FBeUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdkQsZ0JBQVcsR0FBeUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdkQsYUFBUSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUt6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksc0JBQXNCLENBQUM7UUFDbEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDcEQsQ0FBQztJQUdELGtDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDbkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM5RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRU8saURBQXVCLEdBQS9CO1FBQ0UsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVPLDJDQUFpQixHQUF6QjtRQUNFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNqRixNQUFNLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sNkNBQW1CLEdBQTNCO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUgsTUFBTSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLDhDQUFvQixHQUE1QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDMUUsQ0FBQztJQUVPLDhDQUFvQixHQUE1QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBL0NEO1FBQUMsWUFBSyxDQUFDLFdBQVcsQ0FBQzs7MERBQUE7SUFFbkI7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3FEQUFBO0lBVVQ7UUFBQyxtQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O21EQUFBO0lBbEI1QztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDOzt1QkFBQTtJQWtERixzQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksdUJBQWUsa0JBaUQzQixDQUFBIiwiZmlsZSI6ImFwcC9jb3JlL3Njcm9sbC9zY3JvbGwtZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgSElEREVOX0NMQVNTRVMgPSAnIGhpZGUgJztcbmNvbnN0IEFOSU1BVEVEX0NMQVNTRVMgPSAnIGFuaW1hdGVkICc7XG5jb25zdCBERUZBVUxUX0FOSU1BVEVEX0NMQVNTID0gJyBmYWRlSW4gJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Zyay1zY3JvbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxEaXJlY3RpdmUge1xuICBASW5wdXQoJ2FuaW1hdGlvbicpIGFuaW1hdGVkQ2xhc3M6IHN0cmluZztcblxuICBAT3V0cHV0KCkgc2Nyb2xsQWJvdmU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2Nyb2xsQmVsb3c6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2Nyb2xsT246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBpbml0aWFsQ2xhc3Nlczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmFuaW1hdGVkQ2xhc3MgPSB0aGlzLmFuaW1hdGVkQ2xhc3MgfHwgREVGQVVMVF9BTklNQVRFRF9DTEFTUztcbiAgICB0aGlzLmluaXRpYWxDbGFzc2VzID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFsnJGV2ZW50J10pXG4gIG9uU2Nyb2xsKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc1NjcmVlbkFib3ZlRWxlbWVudCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbEFib3ZlLmVtaXQodGhpcy5nZXRQaXhlbFRvRWxlbWVudCgpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNTY3JlZW5CZWxvd0VsZW1lbnQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxCZWxvdy5lbWl0KHRoaXMuZ2V0UGl4ZWxQYXN0RWxlbWVudCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5pbml0aWFsQ2xhc3NlcyArIEFOSU1BVEVEX0NMQVNTRVMgKyB0aGlzLmFuaW1hdGVkQ2xhc3M7XG4gICAgICB0aGlzLnNjcm9sbE9uLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldERvY3VtZW50U2Nyb2xsT2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSArICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGl4ZWxUb0VsZW1lbnQoKSB7XG4gICAgbGV0IHBpeGVsVG9FbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLmdldERvY3VtZW50U2Nyb2xsT2Zmc2V0KCk7XG4gICAgcmV0dXJuIChwaXhlbFRvRWwgPj0gMCkgPyBwaXhlbFRvRWwgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQaXhlbFBhc3RFbGVtZW50KCkge1xuICAgIGxldCBwaXhlbFBhc3RFbCA9IHRoaXMuZ2V0RG9jdW1lbnRTY3JvbGxPZmZzZXQoKSAtICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICsgdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gICAgcmV0dXJuIChwaXhlbFBhc3RFbCA8PSAwKSA/IHBpeGVsUGFzdEVsIDogMDtcbiAgfVxuXG4gIHByaXZhdGUgaXNTY3JlZW5BYm92ZUVsZW1lbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RG9jdW1lbnRTY3JvbGxPZmZzZXQoKSA8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gIH1cblxuICBwcml2YXRlIGlzU2NyZWVuQmVsb3dFbGVtZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50U2Nyb2xsT2Zmc2V0KCkgPCAodGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCArIHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuICB9XG59XG4iXX0=
