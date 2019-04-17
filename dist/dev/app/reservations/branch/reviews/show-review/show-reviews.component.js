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
            templateUrl: 'show-review.component.html',
            styleUrls: ['show-review.component.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], ShowReviewComponent);
    return ShowReviewComponent;
}());
exports.ShowReviewComponent = ShowReviewComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvYnJhbmNoL3Jldmlld3Mvc2hvdy1yZXZpZXcvc2hvdy1yZXZpZXdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9ELGVBQWUsQ0FBQyxDQUFBO0FBS3BFLGdDQUErQixzQ0FBc0MsQ0FBQyxDQUFBO0FBS3RFLGtDQUFrQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBSzNFLHNCQUFzQiwwQkFBMEIsQ0FBQyxDQUFBO0FBUWpEO0lBV0UsNkJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNsRCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsT0FBWTtRQUN4QixNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixLQUFLLENBQUM7WUFDUixLQUFLLCtCQUErQjtnQkFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7b0JBQUMsS0FBSyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVO3lCQUNuQyxNQUFNLENBQUMsVUFBQyxVQUFlLElBQUssT0FBQSxVQUFVLEtBQUssSUFBSSxFQUFuQixDQUFtQixDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUVELHFEQUF1QixHQUF2QixVQUF3QixJQUFZO1FBQ2xDLElBQUksVUFBVSxHQUFHLElBQUkscUNBQWlCLEVBQUU7YUFDckMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSTtZQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELCtDQUFpQixHQUFqQixVQUFrQixJQUFZO1FBQzVCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0RBQWtCLEdBQWxCO1FBQ0UsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFyREQ7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzBEQUFBO0lBVFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOzsyQkFBQTtJQXlERiwwQkFBQztBQUFELENBeERBLEFBd0RDLElBQUE7QUF4RFksMkJBQW1CLHNCQXdEL0IsQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL2JyYW5jaC9yZXZpZXdzL3Nob3ctcmV2aWV3L3Nob3ctcmV2aWV3cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIHNlcnZpY2VcbiAqL1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIHBhY2thZ2VzXG4gKi9cbmltcG9ydCB7IEdldFJldmlld09mQnJhbmNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFja2FnZXMvR2V0UmV2aWV3T2ZCcmFuY2gnO1xuXG4vKipcbiAqIG1vZGVsc1xuICovXG5pbXBvcnQgeyBDb3VydCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9Db3VydCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Zyay1zaG93LXJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnc2hvdy1yZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2hvdy1yZXZpZXcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3dSZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgYnJhbmNoOiBDb3VydDtcbiAgQElucHV0KCkgc2hvcnRMaXN0OiBib29sZWFuO1xuXG4gIHByaXZhdGUgbWVzc2FnZVN1YjogYW55O1xuXG4gIHByaXZhdGUgcmV2aWV3czogYW55W107XG4gIHByaXZhdGUgcGFnaW5hdGlvbjogYW55O1xuICBwcml2YXRlIGlzV2FpdGluZ0ZvckRhdGE6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNXYWl0aW5nRm9yRGF0YSA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZVN1YiA9IHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRSZXZpZXdzKDApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tZXNzYWdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnUkVRVUVTVF9FUlJPUic6XG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0dFVF9SRVZJRVdTX09GX0JSQU5DSF9TVUNDRVNTJzpcbiAgICAgICAgaWYgKCF0aGlzLmlzV2FpdGluZ0ZvckRhdGEpIGJyZWFrO1xuICAgICAgICB0aGlzLmlzV2FpdGluZ0ZvckRhdGEgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5sc3RSYXRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5yZXZpZXdzID0gbWVzc2FnZS5kYXRhLmxzdFJhdGluZ3NcbiAgICAgICAgICAgIC5maWx0ZXIoKHJldmlld0RhdGE6IGFueSkgPT4gcmV2aWV3RGF0YSAhPT0gbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gbWVzc2FnZS5kYXRhLnBhZ2luYXRpb247XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldFJldmlld3MocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgR2V0UmV2aWV3T2ZCcmFuY2goKVxuICAgICAgLnNldEJyYW5jaCh0aGlzLmJyYW5jaCk7XG4gICAgaWYgKHRoaXMuc2hvcnRMaXN0KSBhcGlQYWNrYWdlLnNldFBhZ2luYXRpb24oMiwgMCk7XG4gICAgZWxzZSBhcGlQYWNrYWdlLnNldFBhZ2luYXRpb24oMTAsIHBhZ2UpO1xuICAgIHRoaXMuaXNXYWl0aW5nRm9yRGF0YSA9IHRydWU7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICBvbkNsaWNrUGFnaW5hdGlvbihwYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRSZXZpZXdzKHBhZ2UpO1xuICB9XG5cbiAgb25PcGVuUmV2aWV3c01vZGFsKCk6IGFueSB7XG4gICAgalF1ZXJ5KCcjYnJhbmNoUmV2aWV3c01vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgfVxufVxuIl19
