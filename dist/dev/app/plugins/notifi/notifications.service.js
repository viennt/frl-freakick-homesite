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
var Subject_1 = require('rxjs/Subject');
var icons_1 = require('./icons');
var NotificationsService = (function () {
    function NotificationsService() {
        this.emitter = new Subject_1.Subject();
        this.icons = icons_1.defaultIcons;
    }
    NotificationsService.prototype.set = function (notification, to) {
        notification.id = notification.override && notification.override.id
            ? notification.override.id
            : Math.random().toString(36).substring(3);
        notification.click = new core_1.EventEmitter();
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    ;
    NotificationsService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    NotificationsService.prototype.success = function (title, content, override) {
        return this.set({
            title: title,
            content: content,
            type: 'success',
            icon: this.icons.success,
            override: override
        }, true);
    };
    NotificationsService.prototype.error = function (title, content, override) {
        return this.set({ title: title, content: content, type: 'error', icon: this.icons.error, override: override }, true);
    };
    NotificationsService.prototype.alert = function (title, content, override) {
        return this.set({ title: title, content: content, type: 'alert', icon: this.icons.alert, override: override }, true);
    };
    NotificationsService.prototype.info = function (title, content, override) {
        return this.set({ title: title, content: content, type: 'info', icon: this.icons.info, override: override }, true);
    };
    NotificationsService.prototype.bare = function (title, content, override) {
        return this.set({ title: title, content: content, type: 'bare', icon: 'bare', override: override }, true);
    };
    NotificationsService.prototype.create = function (title, content, type, override) {
        return this.set({ title: title, content: content, type: type, icon: 'bare', override: override }, true);
    };
    NotificationsService.prototype.html = function (html, type, override) {
        return this.set({ html: html, type: type, icon: 'bare', override: override, title: null, content: null }, true);
    };
    NotificationsService.prototype.remove = function (id) {
        if (id)
            this.emitter.next({ command: 'clean', id: id });
        else
            this.emitter.next({ command: 'cleanAll' });
    };
    NotificationsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL25vdGlmaS9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCx3QkFBd0IsY0FBYyxDQUFDLENBQUE7QUFHdkMsc0JBQW9DLFNBQVMsQ0FBQyxDQUFBO0FBRzlDO0lBQUE7UUFFVSxZQUFPLEdBQStCLElBQUksaUJBQU8sRUFBcUIsQ0FBQztRQUN2RSxVQUFLLEdBQVUsb0JBQVksQ0FBQztJQTBEdEMsQ0FBQztJQXhEQyxrQ0FBRyxHQUFILFVBQUksWUFBMEIsRUFBRSxFQUFXO1FBQ3pDLFlBQVksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7Y0FDL0QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2NBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFNLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0UsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDOztJQUVELCtDQUFnQixHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFHRCxzQ0FBTyxHQUFQLFVBQVEsS0FBYSxFQUFFLE9BQWUsRUFBRSxRQUFjO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDeEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLE9BQWUsRUFBRSxRQUFjO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2SCxDQUFDO0lBRUQsb0NBQUssR0FBTCxVQUFNLEtBQWEsRUFBRSxPQUFlLEVBQUUsUUFBYztRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxLQUFhLEVBQUUsT0FBZSxFQUFFLFFBQWM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFRCxtQ0FBSSxHQUFKLFVBQUssS0FBYSxFQUFFLE9BQWUsRUFBRSxRQUFjO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUdELHFDQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsT0FBZSxFQUFFLElBQVksRUFBRSxRQUFjO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUdELG1DQUFJLEdBQUosVUFBSyxJQUFTLEVBQUUsSUFBWSxFQUFFLFFBQWM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFHRCxxQ0FBTSxHQUFOLFVBQU8sRUFBVztRQUNoQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSTtZQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTVESDtRQUFDLGlCQUFVLEVBQUU7OzRCQUFBO0lBOERiLDJCQUFDO0FBQUQsQ0E3REEsQUE2REMsSUFBQTtBQTdEWSw0QkFBb0IsdUJBNkRoQyxDQUFBIiwiZmlsZSI6ImFwcC9wbHVnaW5zL25vdGlmaS9ub3RpZmljYXRpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uRXZlbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1ldmVudC50eXBlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgSWNvbnMsIGRlZmF1bHRJY29ucyB9IGZyb20gJy4vaWNvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgZW1pdHRlcjogU3ViamVjdDxOb3RpZmljYXRpb25FdmVudD4gPSBuZXcgU3ViamVjdDxOb3RpZmljYXRpb25FdmVudD4oKTtcbiAgcHJpdmF0ZSBpY29uczogSWNvbnMgPSBkZWZhdWx0SWNvbnM7XG5cbiAgc2V0KG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uLCB0bzogYm9vbGVhbikge1xuICAgIG5vdGlmaWNhdGlvbi5pZCA9IG5vdGlmaWNhdGlvbi5vdmVycmlkZSAmJiBub3RpZmljYXRpb24ub3ZlcnJpZGUuaWRcbiAgICAgID8gbm90aWZpY2F0aW9uLm92ZXJyaWRlLmlkXG4gICAgICA6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygzKTtcbiAgICBub3RpZmljYXRpb24uY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAgIHRoaXMuZW1pdHRlci5uZXh0KHsgY29tbWFuZDogJ3NldCcsIG5vdGlmaWNhdGlvbjogbm90aWZpY2F0aW9uLCBhZGQ6IHRvIH0pO1xuICAgIHJldHVybiBub3RpZmljYXRpb247XG4gIH07XG5cbiAgZ2V0Q2hhbmdlRW1pdHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5lbWl0dGVyO1xuICB9XG5cbiAgLy8vLyBBY2Nlc3MgbWV0aG9kc1xuICBzdWNjZXNzKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3ZlcnJpZGU/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5zZXQoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIGljb246IHRoaXMuaWNvbnMuc3VjY2VzcyxcbiAgICAgIG92ZXJyaWRlOiBvdmVycmlkZVxuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgZXJyb3IodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvdmVycmlkZT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCwgdHlwZTogJ2Vycm9yJywgaWNvbjogdGhpcy5pY29ucy5lcnJvciwgb3ZlcnJpZGU6IG92ZXJyaWRlIH0sIHRydWUpO1xuICB9XG5cbiAgYWxlcnQodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvdmVycmlkZT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCwgdHlwZTogJ2FsZXJ0JywgaWNvbjogdGhpcy5pY29ucy5hbGVydCwgb3ZlcnJpZGU6IG92ZXJyaWRlIH0sIHRydWUpO1xuICB9XG5cbiAgaW5mbyh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG92ZXJyaWRlPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50LCB0eXBlOiAnaW5mbycsIGljb246IHRoaXMuaWNvbnMuaW5mbywgb3ZlcnJpZGU6IG92ZXJyaWRlIH0sIHRydWUpO1xuICB9XG5cbiAgYmFyZSh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG92ZXJyaWRlPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50LCB0eXBlOiAnYmFyZScsIGljb246ICdiYXJlJywgb3ZlcnJpZGU6IG92ZXJyaWRlIH0sIHRydWUpO1xuICB9XG5cbiAgLy8gV2l0aCB0eXBlIG1ldGhvZFxuICBjcmVhdGUodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIG92ZXJyaWRlPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHsgdGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50LCB0eXBlOiB0eXBlLCBpY29uOiAnYmFyZScsIG92ZXJyaWRlOiBvdmVycmlkZSB9LCB0cnVlKTtcbiAgfVxuXG4gIC8vIEhUTUwgTm90aWZpY2F0aW9uIG1ldGhvZFxuICBodG1sKGh0bWw6IGFueSwgdHlwZTogc3RyaW5nLCBvdmVycmlkZT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLnNldCh7IGh0bWw6IGh0bWwsIHR5cGU6IHR5cGUsIGljb246ICdiYXJlJywgb3ZlcnJpZGU6IG92ZXJyaWRlLCB0aXRsZTogbnVsbCwgY29udGVudDogbnVsbCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBhbGwgbm90aWZpY2F0aW9ucyBtZXRob2RcbiAgcmVtb3ZlKGlkPzogc3RyaW5nKSB7XG4gICAgaWYgKGlkKSB0aGlzLmVtaXR0ZXIubmV4dCh7IGNvbW1hbmQ6ICdjbGVhbicsIGlkOiBpZCB9KTtcbiAgICBlbHNlIHRoaXMuZW1pdHRlci5uZXh0KHsgY29tbWFuZDogJ2NsZWFuQWxsJyB9KTtcbiAgfVxuXG59XG4iXX0=
