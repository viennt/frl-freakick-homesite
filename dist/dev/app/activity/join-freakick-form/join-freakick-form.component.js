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
            templateUrl: 'join-freakick-form.component.html',
            styleUrls: ['join-freakick-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], JoinFreakickFormComponent);
    return JoinFreakickFormComponent;
}());
exports.JoinFreakickFormComponent = JoinFreakickFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY3Rpdml0eS9qb2luLWZyZWFraWNrLWZvcm0vam9pbi1mcmVha2ljay1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBRXJELDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBUTdEO0lBQUE7SUFvQkEsQ0FBQztJQWRDLHlDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBSSxHQUFKLFVBQUssSUFBK0M7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnREFBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBbEJEO1FBQUMsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7OzREQUFBO0lBUHJCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDaEQsQ0FBQzs7aUNBQUE7SUFxQkYsZ0NBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLGlDQUF5Qiw0QkFvQnJDLENBQUEiLCJmaWxlIjoiYXBwL2FjdGl2aXR5L2pvaW4tZnJlYWtpY2stZm9ybS9qb2luLWZyZWFraWNrLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdmcmstam9pbi1mcmVha2ljay1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICdqb2luLWZyZWFraWNrLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnam9pbi1mcmVha2ljay1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBKb2luRnJlYWtpY2tGb3JtQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnbW9kYWwnKSBtb2RhbDogTW9kYWxDb21wb25lbnQ7XG5cbiAgcHVibGljIGFjdGl2ZVRva2VuOiBzdHJpbmc7XG4gIHB1YmxpYyB2ZXJpZnlDb2RlOiBzdHJpbmc7XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbihkYXRhOiB7dmVyaWZ5Q29kZTogc3RyaW5nLCBhY3RpdmVUb2tlbjogc3RyaW5nfSkge1xuICAgIHRoaXMuYWN0aXZlVG9rZW4gPSBkYXRhLmFjdGl2ZVRva2VuO1xuICAgIHRoaXMudmVyaWZ5Q29kZSA9IGRhdGEudmVyaWZ5Q29kZTtcbiAgICB0aGlzLm1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCgpIHtcbiAgICBkZWxldGUgdGhpcy5hY3RpdmVUb2tlbjtcbiAgICBkZWxldGUgdGhpcy52ZXJpZnlDb2RlO1xuICB9XG59XG4iXX0=
