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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var Event_1 = require('../../../models/Event');
var GetEventInfo_1 = require('../../../packages/GetEventInfo');
var message_service_1 = require('../../../services/message.service');
var SingleEventModalComponent = (function () {
    function SingleEventModalComponent(_location, route, messageService) {
        this._location = _location;
        this.route = route;
        this.messageService = messageService;
    }
    SingleEventModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    SingleEventModalComponent.prototype.ngOnDestroy = function () {
        this._location = undefined;
        this.routeSub.unsubscribe();
        this.messageSub.unsubscribe();
    };
    SingleEventModalComponent.prototype.handleRoute = function (params) {
        this.sendMessageToGetEventInfo(+params['id']);
    };
    SingleEventModalComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_EVENT_DETAIL_SUCCESS':
                this.modal.open();
                this.event = new Event_1.Event(message.data.event);
                break;
        }
    };
    SingleEventModalComponent.prototype.sendMessageToGetEventInfo = function (eventId) {
        var apiPackage = new GetEventInfo_1.GetEventInfo().setEventId(eventId);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    SingleEventModalComponent.prototype.onCloseModal = function () {
        if (this._location)
            this._location.back();
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], SingleEventModalComponent.prototype, "modal", void 0);
    SingleEventModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-single-event-modal',
            template: "\n      <modal #modal [cssClass]=\"'modal--login modal--login-only'\"\n             [animation]=\"false\"\n             (onClose)=\"onCloseModal($event)\"\n             (onDismiss)=\"onCloseModal($event)\">\n          <modal-header [show-close]=\"false\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                      aria-label=\"Close\">\n                  <span aria-hidden=\"true\">\u00D7</span>\n              </button>\n          </modal-header>\n          <app-template-short-event-detail *ngIf=\"event\" [event]=\"event\">\n          </app-template-short-event-detail>\n      </modal>\n  ",
            styles: ["\n      modal /deep/ .modal-dialog {\n          width: 80vw;\n      }\n\n      modal /deep/ .modal--login .modal-header .close {\n          text-indent: unset;\n          z-index: 1;\n      }\n\n      @media (max-width: 767px) {\n          modal /deep/ .modal-dialog {\n              width: calc(100vw - 20px);\n          }\n\n          modal /deep/ .modal--login .modal-header .close {\n              top: 30px;\n              right: 30px;\n          }\n      }\n\n      modal /deep/ .modal--login .modal-header .close span {\n          margin: 0;\n      }\n\n      modal /deep/ .modal-content {\n          background-color: transparent;\n          border: none;\n      }\n  "]
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, message_service_1.MessageService])
    ], SingleEventModalComponent);
    return SingleEventModalComponent;
}());
exports.SingleEventModalComponent = SingleEventModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9zaW5nbGUtZXZlbnQtbW9kYWwvc2luZ2xlLWV2ZW50LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFLDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTNDLHNCQUFzQix1QkFBdUIsQ0FBQyxDQUFBO0FBRTlDLDZCQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTlELGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBbURuRTtJQVdFLG1DQUFvQixTQUFtQixFQUNuQixLQUFxQixFQUNyQixjQUE4QjtRQUY5QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNsRCxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3pDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBeEIsQ0FBd0IsQ0FDbkMsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUN0RCxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0NBQVcsR0FBWCxVQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGlEQUFhLEdBQWIsVUFBYyxPQUFZO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEtBQUssMEJBQTBCO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDSCxDQUFDO0lBRUQsNkRBQXlCLEdBQXpCLFVBQTBCLE9BQWU7UUFDdkMsSUFBSSxVQUFVLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnREFBWSxHQUFaO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQWxERDtRQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOzs0REFBQTtJQWxEckI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsUUFBUSxFQUFFLDZuQkFjVDtZQUNELE1BQU0sRUFBRSxDQUFDLHNxQkE2QlIsQ0FBQztTQUNILENBQUM7O2lDQUFBO0lBcURGLGdDQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSxpQ0FBeUIsNEJBb0RyQyxDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi90aW1lLWxpbmUtcGFnZS9zaW5nbGUtZXZlbnQtbW9kYWwvc2luZ2xlLWV2ZW50LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9FdmVudCc7XG5cbmltcG9ydCB7IEdldEV2ZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL0dldEV2ZW50SW5mbyc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNpbmdsZS1ldmVudC1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bW9kYWwgI21vZGFsIFtjc3NDbGFzc109XCInbW9kYWwtLWxvZ2luIG1vZGFsLS1sb2dpbi1vbmx5J1wiXG4gICAgICAgICAgICAgW2FuaW1hdGlvbl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgKG9uQ2xvc2UpPVwib25DbG9zZU1vZGFsKCRldmVudClcIlxuICAgICAgICAgICAgIChvbkRpc21pc3MpPVwib25DbG9zZU1vZGFsKCRldmVudClcIj5cbiAgICAgICAgICA8bW9kYWwtaGVhZGVyIFtzaG93LWNsb3NlXT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9tb2RhbC1oZWFkZXI+XG4gICAgICAgICAgPGFwcC10ZW1wbGF0ZS1zaG9ydC1ldmVudC1kZXRhaWwgKm5nSWY9XCJldmVudFwiIFtldmVudF09XCJldmVudFwiPlxuICAgICAgICAgIDwvYXBwLXRlbXBsYXRlLXNob3J0LWV2ZW50LWRldGFpbD5cbiAgICAgIDwvbW9kYWw+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAgIG1vZGFsIC9kZWVwLyAubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgIH1cblxuICAgICAgbW9kYWwgL2RlZXAvIC5tb2RhbC0tbG9naW4gLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICAgICAgICAgIHRleHQtaW5kZW50OiB1bnNldDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICBtb2RhbCAvZGVlcC8gLm1vZGFsLWRpYWxvZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbW9kYWwgL2RlZXAvIC5tb2RhbC0tbG9naW4gLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICAgICAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kYWwgL2RlZXAvIC5tb2RhbC0tbG9naW4gLm1vZGFsLWhlYWRlciAuY2xvc2Ugc3BhbiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBtb2RhbCAvZGVlcC8gLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgU2luZ2xlRXZlbnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnbW9kYWwnKSBtb2RhbDogTW9kYWxDb21wb25lbnQ7XG5cbiAgcHVibGljIGV2ZW50OiBFdmVudDtcblxuICBwdWJsaWMgZXhwYW5kRXZlbnREZXNjcmlwdGlvbjogYm9vbGVhbjtcbiAgcHVibGljIGV4cGFuZEV2ZW50TWFwOiBib29sZWFuO1xuXG4gIHByaXZhdGUgcm91dGVTdWI6IGFueTtcbiAgcHJpdmF0ZSBtZXNzYWdlU3ViOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICBwYXJhbXMgPT4gdGhpcy5oYW5kbGVSb3V0ZShwYXJhbXMpXG4gICAgKTtcbiAgICB0aGlzLm1lc3NhZ2VTdWIgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnN1YnNjcmliZShcbiAgICAgIG1lc3NhZ2UgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm1lc3NhZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGhhbmRsZVJvdXRlKHBhcmFtczogYW55KTogYW55IHtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRFdmVudEluZm8oK3BhcmFtc1snaWQnXSk7XG4gIH1cblxuICBoYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSAnR0VUX0VWRU5UX0RFVEFJTF9TVUNDRVNTJzpcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCk7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgRXZlbnQobWVzc2FnZS5kYXRhLmV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2VUb0dldEV2ZW50SW5mbyhldmVudElkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgYXBpUGFja2FnZSA9IG5ldyBHZXRFdmVudEluZm8oKS5zZXRFdmVudElkKGV2ZW50SWQpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2VuZE1lc3NhZ2UoYXBpUGFja2FnZS5nZXRNZXNzYWdlKCkpO1xuICB9XG5cbiAgb25DbG9zZU1vZGFsKCkge1xuICAgIGlmICh0aGlzLl9sb2NhdGlvbikgdGhpcy5fbG9jYXRpb24uYmFjaygpO1xuICB9XG59XG4iXX0=
