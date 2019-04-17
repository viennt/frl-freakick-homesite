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
var message_service_1 = require('../../../../services/message.service');
var GetReviewOfBranch_1 = require('../../../../packages/GetReviewOfBranch');
var Court_1 = require('../../../../models/Court');
var ShowReviewComponent = (function () {
    function ShowReviewComponent(messageService) {
        this.messageService = messageService;
    }
    ShowReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isWaitingForData = false;
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.sendMessageToGetReviews(0);
    };
    ShowReviewComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ShowReviewComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'REQUEST_ERROR':
                console.warn(message.data);
                break;
            case 'GET_REVIEWS_OF_BRANCH_SUCCESS':
                if (!this.isWaitingForData)
                    break;
                this.isWaitingForData = false;
                if (message.data.lstRatings) {
                    this.reviews = message.data.lstRatings
                        .filter(function (reviewData) { return reviewData !== null; });
                }
                this.pagination = message.data.pagination;
        }
    };
    ShowReviewComponent.prototype.sendMessageToGetReviews = function (page) {
        var apiPackage = new GetReviewOfBranch_1.GetReviewOfBranch()
            .setBranch(this.branch);
        if (this.shortList)
            apiPackage.setPagination(2, 0);
        else
            apiPackage.setPagination(10, page);
        this.isWaitingForData = true;
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ShowReviewComponent.prototype.onClickPagination = function (page) {
        this.sendMessageToGetReviews(page);
    };
    ShowReviewComponent.prototype.onOpenReviewsModal = function () {
        jQuery('#branchReviewsModal').modal('show');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Court_1.Court)
    ], ShowReviewComponent.prototype, "branch", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ShowReviewComponent.prototype, "shortList", void 0);
    ShowReviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-show-review',
            template: "<div class=\"row review-from\" *ngIf=\"reviews\">     <div *ngIf=\"shortList\" class=\"col-sm-12\">         <h4>Newest reviews</h4>     </div>     <div class=\"review\" [class.col-sm-12]=\"shortList\" [class.col-sm-6]=\"!shortList\"          *ngFor=\"let review of reviews\">         <div class=\"col-sm-12 no-padding rating-star\">             <i class=\"fa\" *ngFor=\"let star of [1, 2, 3, 4, 5]\"                [class.fa-star-o]=\"review.rating < star\"                [class.fa-star]=\"review.rating >= star\"                [class.color-red]=\"review.rating >= star\"></i>         </div>         <div class=\"col-sm-12 no-padding\">             {{ review.user.name }}: {{ review.comment || 'No comment' }}         </div>     </div>     <div *ngIf=\"shortList && pagination.nextPage > 0\" class=\"col-xs-12 see-more\"          (click)=\"onOpenReviewsModal()\">view all</div> </div>  <div class=\"row\" *ngIf=\"!reviews\">     <frk-loading-circle></frk-loading-circle> </div>  <frk-pagination *ngIf=\"!shortList && pagination\" [data]=\"pagination\"                 (clickItem)=\"onClickPagination($event)\"> </frk-pagination>",
            styles: [".review-from>*{margin:5px auto}.review{color:#787878}.see-more{cursor:pointer}.see-more:hover{text-decoration:underline}"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], ShowReviewComponent);
    return ShowReviewComponent;
}());
exports.ShowReviewComponent = ShowReviewComponent;
