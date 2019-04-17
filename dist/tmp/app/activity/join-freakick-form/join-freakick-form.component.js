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
var JoinFreakickFormComponent = (function () {
    function JoinFreakickFormComponent() {
    }
    JoinFreakickFormComponent.prototype.close = function () {
        this.modal.close();
    };
    JoinFreakickFormComponent.prototype.open = function (data) {
        this.activeToken = data.activeToken;
        this.verifyCode = data.verifyCode;
        this.modal.open();
    };
    JoinFreakickFormComponent.prototype.onCloseModal = function () {
        delete this.activeToken;
        delete this.verifyCode;
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], JoinFreakickFormComponent.prototype, "modal", void 0);
    JoinFreakickFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-join-freakick-form',
            template: "<modal #modal [animation]=\"false\"        (onClose)=\"onCloseModal($event)\"        (onDismiss)=\"onCloseModal($event)\">     <modal-header>         <h4 class=\"text-center no-margin\">JOIN FREAKICK</h4>     </modal-header>     <modal-body>         <div class=\"no-margin\">             <h3 class=\"text-center\">Thank you!</h3>             <p>You’ve been invited to join Freakick Family</p>             <p>This means you’ll be able to enjoy all the benefits of feeling like a local everywhere you go, finding experiences you'll love among the wide array of activities our users create daily. We’ve made it intuitive to find, review, and take opportunities to connect with people in your area.</p>             <p>Your invite code is: {{ verifyCode }}</p>             <p>Please download our app, or visit our website to learn more about Freakick.</p>             <a class=\"btn input-submit\" [routerLink]=\"['/', 'activate', activeToken]\"> Accept Invitation</a>             <a class=\"btn btn-link\" (click)=\"modal.close()\">No thanks</a>         </div>     </modal-body> </modal>",
            styles: ["modal-body /deep/ .modal-body{background:#f1f1f1}.input-submit{font-size:15px;letter-spacing:.25vmin;border-radius:5px;padding:10px 20px;text-decoration:none;background:#e74c3c;color:#fcfcfc}.input-submit:hover{box-shadow:0 1px 1px 1px hsla(0,0%,67%,.6)}"]
        }), 
        __metadata('design:paramtypes', [])
    ], JoinFreakickFormComponent);
    return JoinFreakickFormComponent;
}());
exports.JoinFreakickFormComponent = JoinFreakickFormComponent;
