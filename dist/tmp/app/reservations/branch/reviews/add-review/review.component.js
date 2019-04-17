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
var router_1 = require('@angular/router');
var message_service_1 = require('../../../../services/message.service');
var authentication_service_1 = require('../../../../services/authentication.service');
var Court_1 = require('../../../../models/Court');
var ButtonState_1 = require('../../../../models/ButtonState');
var AddRatingBranch_1 = require('../../../../packages/AddRatingBranch');
var ReviewBranchComponent = (function () {
    function ReviewBranchComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.success = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.submitRatingState = new ButtonState_1.ButtonState();
    }
    ReviewBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    ReviewBranchComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReviewBranchComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_ERROR':
                console.warn(message.data);
                break;
            case 'ADD_RATING_BRANCH_SUCCESS':
                this.submitRatingState.finish();
                this.success.emit();
        }
    };
    ReviewBranchComponent.prototype.sendMessageToRateBranch = function () {
        var apiPackage = new AddRatingBranch_1.AddRatingBranch()
            .setBranch(this.branch)
            .setRating(this.userReviewStar)
            .setComment(this.userReviewComment || '');
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReviewBranchComponent.prototype.onSubmitReviewBranch = function () {
        if (this.authService.isLoggedIn()) {
            this.submitRatingState.loading();
            this.sendMessageToRateBranch();
        }
        else {
            this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
        }
    };
    ReviewBranchComponent.prototype.onCloseReviewBranch = function () {
        this.close.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Court_1.Court)
    ], ReviewBranchComponent.prototype, "branch", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReviewBranchComponent.prototype, "success", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReviewBranchComponent.prototype, "close", void 0);
    ReviewBranchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-review-branch',
            template: "<div class=\"row review-from\">     <div class=\"col-sm-12\"><h4>Rating</h4></div>     <div class=\"col-sm-12 rating-star\">         <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"            [class.fa-star-o]=\"!rateNumber || rateNumber < star\"            [class.fa-star]=\"rateNumber && rateNumber >= star\"            [class.color-red]=\"rateNumber && rateNumber >= star\"            (mouseover)=\"rateNumber = star\"            (mouseout)=\"rateNumber = userReviewStar\"            (click)=\"userReviewStar = star\"></i>     </div>     <div class=\"col-sm-12\">         <textarea class=\"form-control\" rows=\"3\"                   [(ngModel)]=\"userReviewComment\"                   placeholder=\"Your review (optional)\"></textarea>     </div>     <div class=\"col-sm-12\">         <button class=\"btn btn-sm btn-rating\"                 [loadingState]=\"submitRatingState.state\"                 [disabled]=\"!userReviewStar\"                 (click)=\"onSubmitReviewBranch($event)\">             Post your review now         </button>         <!--<button class=\"btn btn-sm btn-default\"-->                 <!--(click)=\"onCloseReviewBranch($event)\">-->             <!--Cancel-->         <!--</button>-->     </div> </div>",
            styles: [".review-from>*{margin:5px auto}.review-from .rating-star>i{cursor:pointer;font-size:30px;padding:0 10px 0 0;transition:all 1s}.review-from .btn-rating{background:#da3743;color:#fcfcfc}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReviewBranchComponent);
    return ReviewBranchComponent;
}());
exports.ReviewBranchComponent = ReviewBranchComponent;
