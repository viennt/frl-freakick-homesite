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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var NotificationSuccessPopupComponent = (function () {
    function NotificationSuccessPopupComponent() {
        this.success = new core_1.EventEmitter();
    }
    NotificationSuccessPopupComponent.prototype.close = function () {
        this.modal.close();
    };
    NotificationSuccessPopupComponent.prototype.open = function () {
        this.modal.open();
    };
    NotificationSuccessPopupComponent.prototype.onCloseModal = function () {
        this.success.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotificationSuccessPopupComponent.prototype, "success", void 0);
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], NotificationSuccessPopupComponent.prototype, "modal", void 0);
    NotificationSuccessPopupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-notification-success-popup',
            templateUrl: 'notification-success-popup.component.html',
            styleUrls: ["notification-success-popup.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationSuccessPopupComponent);
    return NotificationSuccessPopupComponent;
}());
exports.NotificationSuccessPopupComponent = NotificationSuccessPopupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0L25vdGlmaWNhdGlvbi1zdWNjZXNzLXBvcHVwL25vdGlmaWNhdGlvbi1zdWNjZXNzLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJELGVBQWUsQ0FBQyxDQUFBO0FBQzNFLDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBUTdEO0lBSUU7UUFIVSxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBSzFELENBQUM7SUFFRCxpREFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0RBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHdEQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFqQkQ7UUFBQyxhQUFNLEVBQUU7O3NFQUFBO0lBQ1Q7UUFBQyxnQkFBUyxDQUFDLE9BQU8sQ0FBQzs7b0VBQUE7SUFSckI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsV0FBVyxFQUFFLDJDQUEyQztZQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztTQUN4RCxDQUFDOzt5Q0FBQTtJQW9CRix3Q0FBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlkseUNBQWlDLG9DQW1CN0MsQ0FBQSIsImZpbGUiOiJhcHAvY29udGFjdC9ub3RpZmljYXRpb24tc3VjY2Vzcy1wb3B1cC9ub3RpZmljYXRpb24tc3VjY2Vzcy1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLW5vdGlmaWNhdGlvbi1zdWNjZXNzLXBvcHVwJyxcbiAgdGVtcGxhdGVVcmw6ICdub3RpZmljYXRpb24tc3VjY2Vzcy1wb3B1cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW2Bub3RpZmljYXRpb24tc3VjY2Vzcy1wb3B1cC5jb21wb25lbnQuY3NzYF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU3VjY2Vzc1BvcHVwQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdtb2RhbCcpIG1vZGFsOiBNb2RhbENvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLm1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnN1Y2Nlc3MuZW1pdCgpO1xuICB9XG59XG4iXX0=
