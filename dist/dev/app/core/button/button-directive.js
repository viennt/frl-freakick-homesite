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
var ButtonDirective = (function () {
    function ButtonDirective(el) {
        this.el = el;
        this.loadingElement = document.createElement('I');
        var spaceElement = document.createElement('SPAN');
        spaceElement.innerHTML = ' ';
        this.el.nativeElement.appendChild(this.loadingElement);
        this.el.nativeElement.appendChild(spaceElement);
    }
    ButtonDirective.prototype.ngOnChanges = function (changes) {
        if ('not-ready' === this.state) {
            this.notReadyState();
        }
        else if ('ready' === this.state) {
            this.readyState();
        }
        else if ('loading' === this.state) {
            this.loadingState();
        }
        else if ('finish' === this.state) {
            this.finishState();
        }
    };
    ButtonDirective.prototype.notReadyState = function () {
        this.loadingElement.className = '';
        this.el.nativeElement.setAttribute('disabled', true);
    };
    ButtonDirective.prototype.readyState = function () {
        this.loadingElement.className = '';
        this.el.nativeElement.removeAttribute('disabled');
    };
    ButtonDirective.prototype.loadingState = function () {
        this.loadingElement.className = 'fa fa-spinner fa-spin';
        this.el.nativeElement.setAttribute('disabled', true);
    };
    ButtonDirective.prototype.finishState = function () {
        this.loadingElement.className = 'fa fa-check';
        this.el.nativeElement.removeAttribute('disabled');
    };
    __decorate([
        core_1.Input('loadingState'), 
        __metadata('design:type', String)
    ], ButtonDirective.prototype, "state", void 0);
    ButtonDirective = __decorate([
        core_1.Directive({
            selector: '[loadingState]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ButtonDirective);
    return ButtonDirective;
}());
exports.ButtonDirective = ButtonDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2J1dHRvbi9idXR0b24tZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFNeEU7SUFLRSx5QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFTyx1Q0FBYSxHQUFyQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxvQ0FBVSxHQUFsQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLHNDQUFZLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7UUFDeEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8scUNBQVcsR0FBbkI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUExQ0Q7UUFBQyxZQUFLLENBQUMsY0FBYyxDQUFDOztrREFBQTtJQUx4QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7O3VCQUFBO0lBOENGLHNCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSx1QkFBZSxrQkE0QzNCLENBQUEiLCJmaWxlIjoiYXBwL2NvcmUvYnV0dG9uL2J1dHRvbi1kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRpbmdTdGF0ZV0nXG59KVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdsb2FkaW5nU3RhdGUnKSBzdGF0ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgbG9hZGluZ0VsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5sb2FkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0knKTtcbiAgICBsZXQgc3BhY2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgIHNwYWNlRWxlbWVudC5pbm5lckhUTUwgPSAnICc7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubG9hZGluZ0VsZW1lbnQpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChzcGFjZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogYW55IHtcbiAgICBpZiAoJ25vdC1yZWFkeScgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMubm90UmVhZHlTdGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAoJ3JlYWR5JyA9PT0gdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlKCk7XG4gICAgfSBlbHNlIGlmICgnbG9hZGluZycgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMubG9hZGluZ1N0YXRlKCk7XG4gICAgfSBlbHNlIGlmICgnZmluaXNoJyA9PT0gdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5maW5pc2hTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90UmVhZHlTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdFbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWR5U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nRWxlbWVudC5jbGFzc05hbWUgPSAnJztcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nRWxlbWVudC5jbGFzc05hbWUgPSAnZmEgZmEtc3Bpbm5lciBmYS1zcGluJztcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5pc2hTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdFbGVtZW50LmNsYXNzTmFtZSA9ICdmYSBmYS1jaGVjayc7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxufVxuIl19
