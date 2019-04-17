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
var help_service_1 = require('../../../../services/help.service');
var message_service_1 = require('../../../../services/message.service');
var authentication_service_1 = require('../../../../services/authentication.service');
var ReviewEvent_1 = require('../../../../packages/ReviewEvent');
var DeleteEventReview_1 = require('../../../../packages/DeleteEventReview');
var GetReviewsOfEvent_1 = require('../../../../packages/GetReviewsOfEvent');
var Event_1 = require('../../../../models/Event');
var constants_1 = require('../../../../constants');
var ReviewsComponent = (function () {
    function ReviewsComponent(authService, messageService) {
        this.authService = authService;
        this.messageService = messageService;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listReviews = [];
        this.userComment = '';
        this.isShownReviewForm = true;
        this.authenticatedUser = this.authService.getAuthenticatedUser();
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
        this.sendMessageToGetListReviews();
    };
    ReviewsComponent.prototype.ngOnDestroy = function () {
        this.messageSub.unsubscribe();
    };
    ReviewsComponent.prototype.handleMessage = function (message) {
        var _this = this;
        switch (message.messageType) {
            case 'GET_COMMENT_OF_EVENT_SUCCESS':
                this.listReviews = message.data.lstResult
                    .filter(function (data) { return data.user.id !== _this.authenticatedUser.userId; })
                    .map(function (data) {
                    data.user.logo = help_service_1.HelpService.getUserLogo(data.user.logo);
                    data.updateDate = moment.utc(data.updateDate, constants_1.DATE_TIME.SERVER_FORMAT).local().fromNow();
                    return data;
                });
                if (typeof message.data.userReview !== 'undefined' && message.data.userReview !== null) {
                    this.isShownReviewForm = false;
                    this.userReview = message.data.userReview;
                    this.userComment = this.userReview.content;
                    this.userReview.user.logo = help_service_1.HelpService.getUserLogo(this.userReview.user.logo);
                    this.userReview.updateDate = moment.utc(this.userReview.updateDate, constants_1.DATE_TIME.SERVER_FORMAT).local().fromNow();
                }
                break;
            case 'DELETE_EVENT_REVIEW_SUCCESS':
            case 'COMMENT_EVENT_SUCCESS':
                this.sendMessageToGetListReviews();
                break;
            case 'REQUEST_ERROR':
                this.listReviews = [];
                console.error(message.data.message);
        }
    };
    ReviewsComponent.prototype.sendMessageToGetListReviews = function () {
        var apiPackage = new GetReviewsOfEvent_1.GetReviewsOfEvent()
            .setEventId(this.event.id)
            .setPagination(20, 0);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReviewsComponent.prototype.postComment = function () {
        var apiPackage = new ReviewEvent_1.ReviewEvent()
            .setEventId(this.event.id)
            .setContent(this.userComment);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReviewsComponent.prototype.editReview = function () {
        this.isShownReviewForm = true;
    };
    ReviewsComponent.prototype.deleteReview = function (review) {
        var apiPackage = new DeleteEventReview_1.DeleteEventReview()
            .setReviewId(review.id);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    ReviewsComponent.prototype.updateUserImage = function (image) {
        image = './assets/images/default/user_logo.png';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Event_1.Event)
    ], ReviewsComponent.prototype, "event", void 0);
    ReviewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ev-reviews',
            templateUrl: 'reviews.component.html',
            styleUrls: ['../event-detail.component.css', 'reviews.component.css']
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], ReviewsComponent);
    return ReviewsComponent;
}());
exports.ReviewsComponent = ReviewsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQtZGV0YWlsL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUtwRSw2QkFBNEIsbUNBQW1DLENBQUMsQ0FBQTtBQUNoRSxnQ0FBK0Isc0NBQXNDLENBQUMsQ0FBQTtBQUN0RSx1Q0FBc0MsNkNBQTZDLENBQUMsQ0FBQTtBQUtwRiw0QkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQUMvRCxrQ0FBa0Msd0NBQXdDLENBQUMsQ0FBQTtBQUMzRSxrQ0FBa0Msd0NBQXdDLENBQUMsQ0FBQTtBQU0zRSxzQkFBc0IsMEJBQTBCLENBQUMsQ0FBQTtBQUVqRCwwQkFBMEIsdUJBQXVCLENBQUMsQ0FBQTtBQVFsRDtJQWFFLDBCQUFvQixXQUFrQyxFQUNsQyxjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJ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QUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsTUFBVztRQUN0QixJQUFJLFVBQVUsR0FBRyxJQUFJLHFDQUFpQixFQUFFO2FBQ3JDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsS0FBYTtRQUMzQixLQUFLLEdBQUcsdUNBQXVDLENBQUM7SUFDbEQsQ0FBQztJQW5GRDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFUVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSx1QkFBdUIsQ0FBQztTQUN0RSxDQUFDOzt3QkFBQTtJQXdGRix1QkFBQztBQUFELENBdkZBLEFBdUZDLElBQUE7QUF2Rlksd0JBQWdCLG1CQXVGNUIsQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL2V2ZW50L2V2ZW50LWRldGFpbC9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBIZWxwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2hlbHAuc2VydmljZSc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBwYWNrYWdlc1xuICovXG5pbXBvcnQgeyBSZXZpZXdFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3BhY2thZ2VzL1Jldmlld0V2ZW50JztcbmltcG9ydCB7IERlbGV0ZUV2ZW50UmV2aWV3IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFja2FnZXMvRGVsZXRlRXZlbnRSZXZpZXcnO1xuaW1wb3J0IHsgR2V0UmV2aWV3c09mRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWNrYWdlcy9HZXRSZXZpZXdzT2ZFdmVudCc7XG5cbi8qKlxuICogbW9kdWxlc1xuICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvRXZlbnQnO1xuXG5pbXBvcnQgeyBEQVRFX1RJTUUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdldi1yZXZpZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXZpZXdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4uL2V2ZW50LWRldGFpbC5jb21wb25lbnQuY3NzJywgJ3Jldmlld3MuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJldmlld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBtZXNzYWdlU3ViOiBhbnk7XG5cbiAgQElucHV0KCkgZXZlbnQ6IEV2ZW50O1xuXG4gIHB1YmxpYyBhdXRoZW50aWNhdGVkVXNlcjogVXNlcjtcblxuICBwdWJsaWMgbGlzdFJldmlld3M6IGFueTtcbiAgcHVibGljIHVzZXJSZXZpZXc6IGFueTtcbiAgcHVibGljIHVzZXJDb21tZW50OiBzdHJpbmc7XG5cbiAgcHVibGljIGlzU2hvd25SZXZpZXdGb3JtOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlzdFJldmlld3MgPSBbXTtcbiAgICB0aGlzLnVzZXJDb21tZW50ID0gJyc7XG4gICAgdGhpcy5pc1Nob3duUmV2aWV3Rm9ybSA9IHRydWU7XG4gICAgdGhpcy5hdXRoZW50aWNhdGVkVXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aGVudGljYXRlZFVzZXIoKTtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShtZXNzYWdlID0+IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlKSk7XG4gICAgdGhpcy5zZW5kTWVzc2FnZVRvR2V0TGlzdFJldmlld3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgJ0dFVF9DT01NRU5UX09GX0VWRU5UX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLmxpc3RSZXZpZXdzID0gbWVzc2FnZS5kYXRhLmxzdFJlc3VsdFxuICAgICAgICAgIC5maWx0ZXIoKGRhdGE6IGFueSkgPT4gZGF0YS51c2VyLmlkICE9PSB0aGlzLmF1dGhlbnRpY2F0ZWRVc2VyLnVzZXJJZClcbiAgICAgICAgICAubWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGRhdGEudXNlci5sb2dvID0gSGVscFNlcnZpY2UuZ2V0VXNlckxvZ28oZGF0YS51c2VyLmxvZ28pO1xuICAgICAgICAgICAgZGF0YS51cGRhdGVEYXRlID0gbW9tZW50LnV0YyhkYXRhLnVwZGF0ZURhdGUsIERBVEVfVElNRS5TRVJWRVJfRk9STUFUKS5sb2NhbCgpLmZyb21Ob3coKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBhcnNlIHVzZXIncyByZXZpZXdcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlLmRhdGEudXNlclJldmlldyAhPT0gJ3VuZGVmaW5lZCcgJiYgbWVzc2FnZS5kYXRhLnVzZXJSZXZpZXcgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmlzU2hvd25SZXZpZXdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy51c2VyUmV2aWV3ID0gbWVzc2FnZS5kYXRhLnVzZXJSZXZpZXc7XG4gICAgICAgICAgdGhpcy51c2VyQ29tbWVudCA9IHRoaXMudXNlclJldmlldy5jb250ZW50O1xuICAgICAgICAgIHRoaXMudXNlclJldmlldy51c2VyLmxvZ28gPSBIZWxwU2VydmljZS5nZXRVc2VyTG9nbyh0aGlzLnVzZXJSZXZpZXcudXNlci5sb2dvKTtcbiAgICAgICAgICB0aGlzLnVzZXJSZXZpZXcudXBkYXRlRGF0ZSA9IG1vbWVudC51dGModGhpcy51c2VyUmV2aWV3LnVwZGF0ZURhdGUsIERBVEVfVElNRS5TRVJWRVJfRk9STUFUKS5sb2NhbCgpLmZyb21Ob3coKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0RFTEVURV9FVkVOVF9SRVZJRVdfU1VDQ0VTUyc6XG4gICAgICBjYXNlICdDT01NRU5UX0VWRU5UX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRMaXN0UmV2aWV3cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1JFUVVFU1RfRVJST1InOlxuICAgICAgICB0aGlzLmxpc3RSZXZpZXdzID0gW107XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZS5kYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNZXNzYWdlVG9HZXRMaXN0UmV2aWV3cygpIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRSZXZpZXdzT2ZFdmVudCgpXG4gICAgICAuc2V0RXZlbnRJZCh0aGlzLmV2ZW50LmlkKVxuICAgICAgLnNldFBhZ2luYXRpb24oMjAsIDApO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgcG9zdENvbW1lbnQoKSB7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgUmV2aWV3RXZlbnQoKVxuICAgICAgLnNldEV2ZW50SWQodGhpcy5ldmVudC5pZClcbiAgICAgIC5zZXRDb250ZW50KHRoaXMudXNlckNvbW1lbnQpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgZWRpdFJldmlldygpIHtcbiAgICB0aGlzLmlzU2hvd25SZXZpZXdGb3JtID0gdHJ1ZTtcbiAgfVxuXG4gIGRlbGV0ZVJldmlldyhyZXZpZXc6IGFueSkge1xuICAgIGxldCBhcGlQYWNrYWdlID0gbmV3IERlbGV0ZUV2ZW50UmV2aWV3KClcbiAgICAgIC5zZXRSZXZpZXdJZChyZXZpZXcuaWQpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgdXBkYXRlVXNlckltYWdlKGltYWdlOiBzdHJpbmcpIHtcbiAgICBpbWFnZSA9ICcuL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC91c2VyX2xvZ28ucG5nJztcbiAgfVxufVxuIl19
