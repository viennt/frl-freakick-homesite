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
var message_service_1 = require('../../../services/message.service');
var authentication_service_1 = require('../../../services/authentication.service');
var GetEventInfo_1 = require('../../../packages/GetEventInfo');
var Event_1 = require('../../../models/Event');
var EventImagesComponent = (function () {
    function EventImagesComponent(route, authService, messageService) {
        this.route = route;
        this.authService = authService;
        this.messageService = messageService;
    }
    EventImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) { return _this.handleRoute(params); });
        this.messageSub = this.messageService.messages.subscribe(function (message) { return _this.handleMessage(message); });
    };
    EventImagesComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.messageSub.unsubscribe();
    };
    EventImagesComponent.prototype.handleRoute = function (params) {
        this.eventIdParam = +params['id'];
        this.sendMessageToGetEventInfo();
    };
    EventImagesComponent.prototype.handleMessage = function (message) {
        switch (message.messageType) {
            case 'GET_EVENT_DETAIL_SUCCESS':
                this.event = new Event_1.Event(message.data.event);
                this.isNotFoundEvent = false;
                break;
            case 'REQUEST_ERROR':
                if ('EVENT_NOT_EXIST' === message.data.errorType) {
                    this.isNotFoundEvent = true;
                }
                console.error(message.data.message);
        }
    };
    EventImagesComponent.prototype.sendMessageToGetEventInfo = function () {
        if (typeof this.eventIdParam === 'undefined')
            return;
        var apiPackage = new GetEventInfo_1.GetEventInfo().setEventId(this.eventIdParam);
        this.messageService.sendMessage(apiPackage.getMessage());
    };
    EventImagesComponent.prototype.updateImage = function (image) {
        image = './assets/images/default/event.png';
    };
    EventImagesComponent.prototype.showModal = function (image) {
        this.selectedImage = image;
        jQuery('#modal-image-popup').modal('show');
    };
    EventImagesComponent.prototype.hideModal = function () {
        jQuery('#modal-image-popup').modal('hide');
    };
    EventImagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ev-event-images',
            templateUrl: 'event-images.component.html',
            styleUrls: ['../event-detail/event-detail.component.css', 'event-images.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, authentication_service_1.AuthenticationService, message_service_1.MessageService])
    ], EventImagesComponent);
    return EventImagesComponent;
}());
exports.EventImagesComponent = EventImagesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXNlcnZhdGlvbnMvZXZlbnQvZXZlbnQtaW1hZ2VzL2V2ZW50LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUtqRCxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSx1Q0FBc0MsMENBQTBDLENBQUMsQ0FBQTtBQUtqRiw2QkFBNkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUs5RCxzQkFBc0IsdUJBQXVCLENBQUMsQ0FBQTtBQVE5QztJQVNFLDhCQUFvQixLQUFxQixFQUNyQixXQUFrQyxFQUNsQyxjQUE4QjtRQUY5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLE9BQVk7UUFDeEIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSywwQkFBMEI7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLEtBQUssQ0FBQztZQUNSLEtBQUssZUFBZTtnQkFDbEIsRUFBRSxDQUFDLENBQUMsaUJBQWlCLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDOUIsQ0FBQztnQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCx3REFBeUIsR0FBekI7UUFDRSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ3JELElBQUksVUFBVSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3ZCLEtBQUssR0FBRyxtQ0FBbUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsd0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx3Q0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFsRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSw0QkFBNEIsQ0FBQztTQUN4RixDQUFDOzs0QkFBQTtJQThERiwyQkFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3RFksNEJBQW9CLHVCQTZEaEMsQ0FBQSIsImZpbGUiOiJhcHAvcmVzZXJ2YXRpb25zL2V2ZW50L2V2ZW50LWltYWdlcy9ldmVudC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIHBhY2thZ2VzXG4gKi9cbmltcG9ydCB7IEdldEV2ZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL0dldEV2ZW50SW5mbyc7XG5cbi8qKlxuICogbW9kdWxlc1xuICovXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9FdmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2V2LWV2ZW50LWltYWdlcycsXG4gIHRlbXBsYXRlVXJsOiAnZXZlbnQtaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4uL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LmNzcycsICdldmVudC1pbWFnZXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50SW1hZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgcm91dGVTdWI6IGFueTtcbiAgcHVibGljIG1lc3NhZ2VTdWI6IGFueTtcblxuICBwdWJsaWMgZXZlbnRJZFBhcmFtOiBudW1iZXI7XG4gIHB1YmxpYyBldmVudDogRXZlbnQ7XG4gIHB1YmxpYyBpc05vdEZvdW5kRXZlbnQ6IGJvb2xlYW47XG4gIHB1YmxpYyBzZWxlY3RlZEltYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuaGFuZGxlUm91dGUocGFyYW1zKSk7XG4gICAgdGhpcy5tZXNzYWdlU3ViID0gdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUobWVzc2FnZSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMubWVzc2FnZVN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaGFuZGxlUm91dGUocGFyYW1zOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuZXZlbnRJZFBhcmFtID0gK3BhcmFtc1snaWQnXTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlVG9HZXRFdmVudEluZm8oKTtcbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLm1lc3NhZ2VUeXBlKSB7XG4gICAgICBjYXNlICdHRVRfRVZFTlRfREVUQUlMX1NVQ0NFU1MnOlxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50KG1lc3NhZ2UuZGF0YS5ldmVudCk7XG4gICAgICAgIHRoaXMuaXNOb3RGb3VuZEV2ZW50ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUkVRVUVTVF9FUlJPUic6XG4gICAgICAgIGlmICgnRVZFTlRfTk9UX0VYSVNUJyA9PT0gbWVzc2FnZS5kYXRhLmVycm9yVHlwZSkge1xuICAgICAgICAgIHRoaXMuaXNOb3RGb3VuZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UuZGF0YS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZVRvR2V0RXZlbnRJbmZvKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudElkUGFyYW0gPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgbGV0IGFwaVBhY2thZ2UgPSBuZXcgR2V0RXZlbnRJbmZvKCkuc2V0RXZlbnRJZCh0aGlzLmV2ZW50SWRQYXJhbSk7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShhcGlQYWNrYWdlLmdldE1lc3NhZ2UoKSk7XG4gIH1cblxuICB1cGRhdGVJbWFnZShpbWFnZTogc3RyaW5nKSB7XG4gICAgaW1hZ2UgPSAnLi9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvZXZlbnQucG5nJztcbiAgfVxuXG4gIHNob3dNb2RhbChpbWFnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZEltYWdlID0gaW1hZ2U7XG4gICAgalF1ZXJ5KCcjbW9kYWwtaW1hZ2UtcG9wdXAnKS5tb2RhbCgnc2hvdycpO1xuICB9XG5cbiAgaGlkZU1vZGFsKCkge1xuICAgIGpRdWVyeSgnI21vZGFsLWltYWdlLXBvcHVwJykubW9kYWwoJ2hpZGUnKTtcbiAgfVxufVxuIl19
