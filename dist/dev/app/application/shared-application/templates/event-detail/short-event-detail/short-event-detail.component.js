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
var Event_1 = require('../../../../../models/Event');
var ShortEventDetailComponent = (function () {
    function ShortEventDetailComponent() {
    }
    ShortEventDetailComponent.prototype.ngOnInit = function () {
        if (this.event.images && this.event.images.length) {
            this.displayEventImageIndex = 0;
            this.displayEventImage = this.event.images[this.displayEventImageIndex];
        }
    };
    ShortEventDetailComponent.prototype.ngAfterViewInit = function () {
        this.onResize(null);
    };
    ShortEventDetailComponent.prototype.onResize = function (event) {
        if (window.innerWidth >= 768) {
            var parentOffsetHeight = this.postInner.nativeElement.parentElement.offsetHeight + 'px';
            this.postThumb.nativeElement.style.height = parentOffsetHeight;
            this.postInner.nativeElement.style.height = parentOffsetHeight;
        }
        else {
            this.postThumb.nativeElement.style.height = 'auto';
            this.postInner.nativeElement.style.height = 'auto';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Event_1.Event)
    ], ShortEventDetailComponent.prototype, "event", void 0);
    __decorate([
        core_1.ViewChild('postThumb'), 
        __metadata('design:type', Object)
    ], ShortEventDetailComponent.prototype, "postThumb", void 0);
    __decorate([
        core_1.ViewChild('postInner'), 
        __metadata('design:type', Object)
    ], ShortEventDetailComponent.prototype, "postInner", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ShortEventDetailComponent.prototype, "onResize", null);
    ShortEventDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-template-short-event-detail',
            templateUrl: 'short-event-detail.component.html',
            styleUrls: ['short-event-detail.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ShortEventDetailComponent);
    return ShortEventDetailComponent;
}());
exports.ShortEventDetailComponent = ShortEventDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vdGVtcGxhdGVzL2V2ZW50LWRldGFpbC9zaG9ydC1ldmVudC1kZXRhaWwvc2hvcnQtZXZlbnQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBR08sZUFBZSxDQUFDLENBQUE7QUFDdkIsc0JBQXNCLDZCQUE2QixDQUFDLENBQUE7QUFRcEQ7SUFBQTtJQStCQSxDQUFDO0lBdkJDLDRDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFFLENBQUM7SUFDSCxDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUdELDRDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3hGLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7WUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNqRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyRCxDQUFDO0lBQ0gsQ0FBQztJQTVCRDtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFDUjtRQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOztnRUFBQTtJQUN2QjtRQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOztnRUFBQTtJQWdCdkI7UUFBQyxtQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzZEQUFBO0lBekI1QztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlDQUFpQztZQUMzQyxXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2hELENBQUM7O2lDQUFBO0lBZ0NGLGdDQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxpQ0FBeUIsNEJBK0JyQyxDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vdGVtcGxhdGVzL2V2ZW50LWRldGFpbC9zaG9ydC1ldmVudC1kZXRhaWwvc2hvcnQtZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVscy9FdmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC10ZW1wbGF0ZS1zaG9ydC1ldmVudC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJ3Nob3J0LWV2ZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaG9ydC1ldmVudC1kZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3J0RXZlbnREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBldmVudDogRXZlbnQ7XG4gIEBWaWV3Q2hpbGQoJ3Bvc3RUaHVtYicpIHBvc3RUaHVtYjogYW55O1xuICBAVmlld0NoaWxkKCdwb3N0SW5uZXInKSBwb3N0SW5uZXI6IGFueTtcblxuICBwdWJsaWMgZGlzcGxheUV2ZW50SW1hZ2VJbmRleDogbnVtYmVyO1xuICBwdWJsaWMgZGlzcGxheUV2ZW50SW1hZ2U6IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5ldmVudC5pbWFnZXMgJiYgdGhpcy5ldmVudC5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRpc3BsYXlFdmVudEltYWdlSW5kZXggPSAwO1xuICAgICAgdGhpcy5kaXNwbGF5RXZlbnRJbWFnZSA9IHRoaXMuZXZlbnQuaW1hZ2VzW3RoaXMuZGlzcGxheUV2ZW50SW1hZ2VJbmRleF07XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMub25SZXNpemUobnVsbCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQ6IGFueSkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcbiAgICAgIGxldCBwYXJlbnRPZmZzZXRIZWlnaHQgPSB0aGlzLnBvc3RJbm5lci5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMucG9zdFRodW1iLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcGFyZW50T2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5wb3N0SW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwYXJlbnRPZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zdFRodW1iLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgdGhpcy5wb3N0SW5uZXIubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
