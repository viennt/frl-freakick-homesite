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
            template: "<modal #modal [animation]=\"false\"        (onClose)=\"onCloseModal($event)\"        (onDismiss)=\"onCloseModal($event)\">     <modal-body>         <div class=\"frk-popup\">             <div class=\"text-center\">                 <img alt=\"Brand\" src=\"./assets/images/logo/freakick_logo_dark.png\" class=\"frk-logo\">                 <h3 class=\"font-green\">Success!</h3>             </div>             <div class=\"margin-top-30\">                 <div>Thank you for contacting us. We will respond to you as soon as possible.</div>             </div>             <div class=\"text-left margin-top-30\">                 <div>Best of luck!</div>                 <div>- Freakick team</div>             </div>         </div>     </modal-body> </modal>",
            styles: [".frk-logo{max-width:100px}.frk-popup{padding:10px}.font-green{color:#1bbc9b}.margin-top-30{margin-top:30px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationSuccessPopupComponent);
    return NotificationSuccessPopupComponent;
}());
exports.NotificationSuccessPopupComponent = NotificationSuccessPopupComponent;
