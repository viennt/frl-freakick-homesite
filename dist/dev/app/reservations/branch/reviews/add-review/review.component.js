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
            templateUrl: 'review.component.html',
            styleUrls: ['review.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReviewBranchComponent);
    return ReviewBranchComponent;
}());
exports.ReviewBranchComponent = ReviewBranchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL3Jldmlld3MvYWRkLXJldmlldy9yZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFPTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUt6QyxnQ0FBK0Isc0NBQXNDLENBQUMsQ0FBQTtBQUN0RSx1Q0FBc0MsNkNBQTZDLENBQUMsQ0FBQTtBQUtwRixzQkFBc0IsMEJBQTBCLENBQUMsQ0FBQTtBQUNqRCw0QkFBNEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUs3RCxnQ0FBZ0Msc0NBQXNDLENBQUMsQ0FBQTtBQVF2RTtJQWFFLCtCQUFvQixNQUFjLEVBQ2QsV0FBa0MsRUFDbEMsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFaeEMsWUFBTyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBT2pELHNCQUFpQixHQUFnQixJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUsxRCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCw2Q0FBYSxHQUFiLFVBQWMsT0FBWTtRQUN4QixNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixLQUFLLENBQUM7WUFDUixLQUFLLDJCQUEyQjtnQkFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQsdURBQXVCLEdBQXZCO1FBQ0UsSUFBSSxVQUFVLEdBQUcsSUFBSSxpQ0FBZSxFQUFFO2FBQ25DLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQzlCLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELG9EQUFvQixHQUFwQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDO0lBQ0gsQ0FBQztJQUVELG1EQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQXRERDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7MERBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUFWWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7OzZCQUFBO0lBMERGLDRCQUFDO0FBQUQsQ0F6REEsQUF5REMsSUFBQTtBQXpEWSw2QkFBcUIsd0JBeURqQyxDQUFBIiwiZmlsZSI6ImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL3Jldmlld3MvYWRkLXJldmlldy9yZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBtb2RlbHNcbiAqL1xuaW1wb3J0IHsgQ291cnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvQ291cnQnO1xuaW1wb3J0IHsgQnV0dG9uU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvQnV0dG9uU3RhdGUnO1xuXG4vKipcbiAqIHBhY2thZ2VzXG4gKi9cbmltcG9ydCB7IEFkZFJhdGluZ0JyYW5jaCB9IGZyb20gJy4uLy4uLy4uLy4uL3BhY2thZ2VzL0FkZFJhdGluZ0JyYW5jaCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay1yZXZpZXctYnJhbmNoJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmV2aWV3LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdCcmFuY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgYnJhbmNoOiBDb3VydDtcbiAgQE91dHB1dCgpIHN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBtZXNzYWdlU3ViOiBhbnk7XG5cbiAgcHVibGljIHVzZXJSZXZpZXdTdGFyOiBudW1iZXI7XG4gIHB1YmxpYyB1c2VyUmV2aWV3Q29tbWVudDogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdWJtaXRSYXRpbmdTdGF0ZTogQnV0dG9uU3RhdGUgPSBuZXcgQnV0dG9uU3RhdGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdSRVFVRVNUX0VSUk9SJzpcbiAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQUREX1JBVElOR19CUkFOQ0hfU1VDQ0VTUyc6XG4gICAgICAgIHRoaXMuc3VibWl0UmF0aW5nU3RhdGUuZmluaXNoKCk7XG4gICAgICAgIHRoaXMuc3VjY2Vzcy5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb1JhdGVCcmFuY2goKTogdm9pZCB7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgQWRkUmF0aW5nQnJhbmNoKClcbiAgICAgIC5zZXRCcmFuY2godGhpcy5icmFuY2gpXG4gICAgICAuc2V0UmF0aW5nKHRoaXMudXNlclJldmlld1N0YXIpXG4gICAgICAuc2V0Q29tbWVudCh0aGlzLnVzZXJSZXZpZXdDb21tZW50IHx8ICcnKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNlbmRNZXNzYWdlKGFwaVBhY2thZ2UuZ2V0TWVzc2FnZSgpKTtcbiAgfVxuXG4gIG9uU3VibWl0UmV2aWV3QnJhbmNoKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICB0aGlzLnN1Ym1pdFJhdGluZ1N0YXRlLmxvYWRpbmcoKTtcbiAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb1JhdGVCcmFuY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4vY29udGludWUvJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2VSZXZpZXdCcmFuY2goKTogYW55IHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxufVxuIl19
