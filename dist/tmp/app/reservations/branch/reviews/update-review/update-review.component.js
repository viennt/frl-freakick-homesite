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
var ButtonState_1 = require('../../../../models/ButtonState');
var UpdateRatingBranch_1 = require('../../../../packages/UpdateRatingBranch');
var DeleteRatingBranch_1 = require('../../../../packages/DeleteRatingBranch');
var UpdateReviewBranchComponent = (function () {
    function UpdateReviewBranchComponent(router, authService, messageService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.success = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.submitUpdateRatingState = new ButtonState_1.ButtonState();
        this.submitDeleteRatingState = new ButtonState_1.ButtonState();
    }
    UpdateReviewBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.userReviewStarTmp = this.userReviewData.rating;
        this.userReviewStar = this.userReviewData.rating;
        this.userReviewComment = this.userReviewData.comment;
    };
    UpdateReviewBranchComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    UpdateReviewBranchComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_ERROR':
                console.warn(message.data);
                break;
            case 'UPDATE_RATING_BRANCH_SUCCESS':
                this.submitUpdateRatingState.finish();
                this.submitDeleteRatingState.ready();
                this.success.emit();
                break;
            case 'DELETE_RATING_BRANCH_SUCCESS':
                this.submitUpdateRatingState.ready();
                this.submitDeleteRatingState.finish();
                this.success.emit();
        }
    };
    UpdateReviewBranchComponent.prototype.sendMessageToUpdateRateBranch = function () {
        var apiPackage = new UpdateRatingBranch_1.UpdateRatingBranch()
            .setRatingId(this.userReviewData.ratingId)
            .setRating(this.userReviewStar)
            .setComment(this.userReviewComment || '');
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    UpdateReviewBranchComponent.prototype.sendMessageToDeleteRateBranch = function () {
        var apiPackage = new DeleteRatingBranch_1.DeleteRatingBranch()
            .setRatingId(this.userReviewData.ratingId);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    UpdateReviewBranchComponent.prototype.onSubmitUpdateReviewBranch = function () {
        if (this.authService.isLoggedIn()) {
            this.submitUpdateRatingState.loading();
            this.submitDeleteRatingState.notReady();
            this.sendMessageToUpdateRateBranch();
        }
        else {
            this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
        }
    };
    UpdateReviewBranchComponent.prototype.onSubmitDeleteReviewBranch = function () {
        if (this.authService.isLoggedIn()) {
            this.submitUpdateRatingState.notReady();
            this.submitDeleteRatingState.loading();
            this.sendMessageToDeleteRateBranch();
        }
        else {
            this.router.navigate(['/login/continue/', window.location.pathname + window.location.search]);
        }
    };
    UpdateReviewBranchComponent.prototype.onCloseReviewBranch = function () {
        this.close.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UpdateReviewBranchComponent.prototype, "userReviewData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UpdateReviewBranchComponent.prototype, "success", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UpdateReviewBranchComponent.prototype, "close", void 0);
    UpdateReviewBranchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-update-review-branch',
            template: "<div class=\"row review-from\">     <div class=\"col-sm-12\"><h4>Update your review</h4></div>     <div class=\"col-sm-12 rating-star\">         <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"            [class.fa-star-o]=\"!userReviewStarTmp || userReviewStarTmp < star\"            [class.fa-star]=\"userReviewStarTmp && userReviewStarTmp >= star\"            [class.color-red]=\"userReviewStarTmp && userReviewStarTmp >= star\"            (mouseover)=\"userReviewStarTmp = star\"            (mouseout)=\"userReviewStarTmp = userReviewStar\"            (click)=\"userReviewStar = star\"></i>     </div>     <div class=\"col-sm-12\">         <textarea class=\"form-control\" rows=\"3\"                   [(ngModel)]=\"userReviewComment\"                   placeholder=\"Your review (optional)\"></textarea>     </div>     <div class=\"col-sm-12\">         <button class=\"btn btn-sm btn-rating\"                 [loadingState]=\"submitUpdateRatingState.state\"                 [disabled]=\"!userReviewStar\"                 (click)=\"onSubmitUpdateReviewBranch($event)\">             Update         </button>         <button class=\"btn btn-sm btn-rating\"                 [loadingState]=\"submitDeleteRatingState.state\"                 [disabled]=\"!userReviewStar\"                 (click)=\"onSubmitDeleteReviewBranch($event)\">             Delete         </button>         <!--<button class=\"btn btn-sm btn-default\"-->                 <!--(click)=\"onCloseReviewBranch($event)\">-->             <!--Cancel-->         <!--</button>-->     </div> </div>",
            styles: [".review-from>*{margin:5px auto}.review-from .rating-star>i{cursor:pointer;font-size:30px;padding:0 10px 0 0;transition:all 1s}.review-from .btn-rating{background:#da3743;color:#fcfcfc}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], UpdateReviewBranchComponent);
    return UpdateReviewBranchComponent;
}());
exports.UpdateReviewBranchComponent = UpdateReviewBranchComponent;
