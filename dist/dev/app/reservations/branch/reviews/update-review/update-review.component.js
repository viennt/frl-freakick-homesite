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
            templateUrl: 'update-review.component.html',
            styleUrls: ['update-review.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], UpdateReviewBranchComponent);
    return UpdateReviewBranchComponent;
}());
exports.UpdateReviewBranchComponent = UpdateReviewBranchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL3Jldmlld3MvdXBkYXRlLXJldmlldy91cGRhdGUtcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBT08sZUFBZSxDQUFDLENBQUE7QUFDdkIsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFLekMsZ0NBQStCLHNDQUFzQyxDQUFDLENBQUE7QUFDdEUsdUNBQXNDLDZDQUE2QyxDQUFDLENBQUE7QUFLcEYsNEJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFLN0QsbUNBQW1DLHlDQUF5QyxDQUFDLENBQUE7QUFDN0UsbUNBQW1DLHlDQUF5QyxDQUFDLENBQUE7QUFRN0U7SUFlRSxxQ0FBb0IsTUFBYyxFQUNkLFdBQWtDLEVBQ2xDLGNBQThCO1FBRjlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZHhDLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDaEQsVUFBSyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQVFqRCw0QkFBdUIsR0FBZ0IsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDekQsNEJBQXVCLEdBQWdCLElBQUkseUJBQVcsRUFBRSxDQUFDO0lBS2hFLENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFD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QyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLENBQUM7SUFDSCxDQUFDO0lBRUQseURBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBbEZEO1FBQUMsWUFBSyxFQUFFOzt1RUFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOztnRUFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzs4REFBQTtJQVZYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzs7bUNBQUE7SUFzRkYsa0NBQUM7QUFBRCxDQXJGQSxBQXFGQyxJQUFBO0FBckZZLG1DQUEyQiw4QkFxRnZDLENBQUEiLCJmaWxlIjoiYXBwL3Jlc2VydmF0aW9ucy9icmFuY2gvcmV2aWV3cy91cGRhdGUtcmV2aWV3L3VwZGF0ZS1yZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgQnV0dG9uU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvQnV0dG9uU3RhdGUnO1xuXG4vKipcbiAqIHBhY2thZ2VzXG4gKi9cbmltcG9ydCB7IFVwZGF0ZVJhdGluZ0JyYW5jaCB9IGZyb20gJy4uLy4uLy4uLy4uL3BhY2thZ2VzL1VwZGF0ZVJhdGluZ0JyYW5jaCc7XG5pbXBvcnQgeyBEZWxldGVSYXRpbmdCcmFuY2ggfSBmcm9tICcuLi8uLi8uLi8uLi9wYWNrYWdlcy9EZWxldGVSYXRpbmdCcmFuY2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmcmstdXBkYXRlLXJldmlldy1icmFuY2gnLFxuICB0ZW1wbGF0ZVVybDogJ3VwZGF0ZS1yZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndXBkYXRlLXJldmlldy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUmV2aWV3QnJhbmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIHVzZXJSZXZpZXdEYXRhOiB7IHJhdGluZ0lkOiBzdHJpbmcsIHVzZXJJZDogbnVtYmVyLCBwYXJ0bmVyQnJhbmNoSWQ6IG51bWJlciwgcmF0aW5nOiBudW1iZXIsIGNvbW1lbnQ6IHN0cmluZyB9O1xuICBAT3V0cHV0KCkgc3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIG1lc3NhZ2VTdWI6IGFueTtcblxuICBwdWJsaWMgdXNlclJldmlld1N0YXJUbXA6IG51bWJlcjtcbiAgcHVibGljIHVzZXJSZXZpZXdTdGFyOiBudW1iZXI7XG4gIHB1YmxpYyB1c2VyUmV2aWV3Q29tbWVudDogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdWJtaXRVcGRhdGVSYXRpbmdTdGF0ZTogQnV0dG9uU3RhdGUgPSBuZXcgQnV0dG9uU3RhdGUoKTtcbiAgcHVibGljIHN1Ym1pdERlbGV0ZVJhdGluZ1N0YXRlOiBCdXR0b25TdGF0ZSA9IG5ldyBCdXR0b25TdGF0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZVN1YiA9IHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB0aGlzLnVzZXJSZXZpZXdTdGFyVG1wID0gdGhpcy51c2VyUmV2aWV3RGF0YS5yYXRpbmc7XG4gICAgdGhpcy51c2VyUmV2aWV3U3RhciA9IHRoaXMudXNlclJldmlld0RhdGEucmF0aW5nO1xuICAgIHRoaXMudXNlclJldmlld0NvbW1lbnQgPSB0aGlzLnVzZXJSZXZpZXdEYXRhLmNvbW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdSRVFVRVNUX0VSUk9SJzpcbiAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVVBEQVRFX1JBVElOR19CUkFOQ0hfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuc3VibWl0VXBkYXRlUmF0aW5nU3RhdGUuZmluaXNoKCk7XG4gICAgICAgIHRoaXMuc3VibWl0RGVsZXRlUmF0aW5nU3RhdGUucmVhZHkoKTtcbiAgICAgICAgdGhpcy5zdWNjZXNzLmVtaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdERUxFVEVfUkFUSU5HX0JSQU5DSF9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5zdWJtaXRVcGRhdGVSYXRpbmdTdGF0ZS5yZWFkeSgpO1xuICAgICAgICB0aGlzLnN1Ym1pdERlbGV0ZVJhdGluZ1N0YXRlLmZpbmlzaCgpO1xuICAgICAgICB0aGlzLnN1Y2Nlc3MuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9VcGRhdGVSYXRlQnJhbmNoKCk6IHZvaWQge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IFVwZGF0ZVJhdGluZ0JyYW5jaCgpXG4gICAgICAuc2V0UmF0aW5nSWQodGhpcy51c2VyUmV2aWV3RGF0YS5yYXRpbmdJZClcbiAgICAgIC5zZXRSYXRpbmcodGhpcy51c2VyUmV2aWV3U3RhcilcbiAgICAgIC5zZXRDb21tZW50KHRoaXMudXNlclJldmlld0NvbW1lbnQgfHwgJycpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0RlbGV0ZVJhdGVCcmFuY2goKTogdm9pZCB7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgRGVsZXRlUmF0aW5nQnJhbmNoKClcbiAgICAgIC5zZXRSYXRpbmdJZCh0aGlzLnVzZXJSZXZpZXdEYXRhLnJhdGluZ0lkKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIG9uU3VibWl0VXBkYXRlUmV2aWV3QnJhbmNoKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICB0aGlzLnN1Ym1pdFVwZGF0ZVJhdGluZ1N0YXRlLmxvYWRpbmcoKTtcbiAgICAgIHRoaXMuc3VibWl0RGVsZXRlUmF0aW5nU3RhdGUubm90UmVhZHkoKTtcbiAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb1VwZGF0ZVJhdGVCcmFuY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4vY29udGludWUvJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0RGVsZXRlUmV2aWV3QnJhbmNoKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICB0aGlzLnN1Ym1pdFVwZGF0ZVJhdGluZ1N0YXRlLm5vdFJlYWR5KCk7XG4gICAgICB0aGlzLnN1Ym1pdERlbGV0ZVJhdGluZ1N0YXRlLmxvYWRpbmcoKTtcbiAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0RlbGV0ZVJhdGVCcmFuY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4vY29udGludWUvJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VSZXZpZXdCcmFuY2goKTogYW55IHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxufVxuIl19
