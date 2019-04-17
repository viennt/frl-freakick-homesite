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
var router_1 = require('@angular/router');
var Message_1 = require('../models/Message');
var core_2 = require('angular2-cookie/core');
var authentication_service_1 = require('./authentication.service');
var constants_1 = require('../constants');
var MessageService = (function () {
    function MessageService(router, cookieService, authService) {
        this.router = router;
        this.cookieService = cookieService;
        this.authService = authService;
        this.messageUrl = constants_1.CONFIG.API;
        this.outboundQueue = [];
        this.message = new Subject_1.Subject();
    }
    Object.defineProperty(MessageService.prototype, "messages", {
        get: function () {
            return this.message;
        },
        enumerable: true,
        configurable: true
    });
    MessageService.prototype.sendMessage = function (message) {
        if (this.connected && !this.connecting) {
            var accessToken = this.cookieService.get('accessToken');
            if (accessToken !== null && accessToken !== undefined) {
                message.data.accessToken = accessToken;
            }
            if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
                console.info('%c[LOG] ' + moment().format('HH:mm:ss DD-MM-YYYY') + ' ▶️▶️▶️ ', 'background: #5E738B; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message);
            }
            var apiMessage = message.toJSON();
            this.websocket.send(apiMessage);
        }
        else {
            this.outboundQueue.push(message);
            this.connect();
        }
    };
    MessageService.prototype.connect = function () {
        var _this = this;
        if (this.messageUrl && !this.connected && !this.connecting) {
            this.connecting = true;
            this.websocket = new WebSocket(this.messageUrl
                + '?clientId=' + constants_1.SECURITY.CLIENT_ID
                + '&&clientSecret=' + constants_1.SECURITY.CLIENT_SECRET
                + '&&appId=' + constants_1.SECURITY.APP_ID);
            this.websocket.onerror = function (event) { return _this.handleMessage(new Message_1.Message('ERROR', "Communication error: " + event.toString())); };
            this.websocket.onmessage = function (event) { return _this.handleMessage(Message_1.Message.fromJSON(event.data)); };
            this.websocket.onopen = function (event) { return _this.onConnected(); };
            this.websocket.onclose = function (event) { return _this.onDisconnected(); };
        }
    };
    MessageService.prototype.handleMessage = function (message) {
        if (!!message.data.errorType && message.data.errorType === 'INVALID_ACCESS_TOKEN') {
            this.authService.logout();
            this.router.navigate(['/login']);
        }
        else {
            switch (message.messageType) {
                case 'ERROR':
                    if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
                        console.info('%c[WEBSOCKET ERROR] 😱😱😱 ', 'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message.data);
                    }
                    break;
                default:
                    if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
                        console.info('%c[LOG] ' + moment().format('HH:mm:ss DD-MM-YYYY') + ' ◀️◀️◀️ ', 'background: #4DB3A2; color: white; font-size: 8px; padding: 1px; border-radius: 3px;', message);
                    }
                    this.message.next(message);
                    break;
            }
        }
    };
    MessageService.prototype.onConnected = function () {
        this.connected = true;
        this.connecting = false;
        if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
            console.info('%c[WEBSOCKET OPENED] 📡📡📡 ', 'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;');
        }
        while (this.outboundQueue.length > 0) {
            this.sendMessage(this.outboundQueue.pop());
        }
    };
    MessageService.prototype.onDisconnected = function () {
        this.connected = false;
        this.connecting = false;
        this.message.next(new Message_1.Message('CLOSED', 'Connection closed. Please try again.'));
        if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod') {
            console.info('%c[WEBSOCKET CLOSED] 🚫🚫🚫 ', 'background: #E87E04; color: white; font-size: 8px; padding: 1px; border-radius: 3px;');
        }
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService, authentication_service_1.AuthenticationService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx3QkFBd0IsY0FBYyxDQUFDLENBQUE7QUFDdkMsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsd0JBQXdCLG1CQUFtQixDQUFDLENBQUE7QUFFNUMscUJBQThCLHNCQUFzQixDQUFDLENBQUE7QUFDckQsdUNBQXNDLDBCQUEwQixDQUFDLENBQUE7QUFFakUsMEJBQWlDLGNBQWMsQ0FBQyxDQUFBO0FBR2hEO0lBY0Usd0JBQ1UsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLFdBQWtDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFoQnJDLGVBQVUsR0FBVyxrQkFBTSxDQUFDLEdBQUcsQ0FBQztRQUsvQixrQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUU5QixZQUFPLEdBQXFCLElBQUksaUJBQU8sRUFBVyxDQUFDO0lBVXZELENBQUM7SUFSTCxzQkFBSSxvQ0FBUTthQUFaO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFZRCxvQ0FBVyxHQUFYLFVBQVksT0FBZ0I7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxJQUFJLElBQUksV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUN6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QUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsSUFBSSxDQUNWLDhCQUE4QixFQUM5QixzRkFBc0YsQ0FDdkYsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBOUhIO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUErSGIscUJBQUM7QUFBRCxDQTlIQSxBQThIQyxJQUFBO0FBOUhZLHNCQUFjLGlCQThIMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21vZGVscy9NZXNzYWdlJztcblxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IFNFQ1VSSVRZLCBDT05GSUcgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICBwdWJsaWMgbWVzc2FnZVVybDogc3RyaW5nID0gQ09ORklHLkFQSTtcblxuICBwcml2YXRlIHdlYnNvY2tldDogV2ViU29ja2V0O1xuICBwcml2YXRlIGNvbm5lY3Rpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgY29ubmVjdGVkOiBib29sZWFuO1xuICBwcml2YXRlIG91dGJvdW5kUXVldWU6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIHByaXZhdGUgbWVzc2FnZTogU3ViamVjdDxNZXNzYWdlPiA9IG5ldyBTdWJqZWN0PE1lc3NhZ2U+KCk7XG5cbiAgZ2V0IG1lc3NhZ2VzKCk6IFN1YmplY3Q8TWVzc2FnZT4ge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKSB7IH1cblxuICAvKipcbiAgICogU2VuZCBtZXNzYWdlIHRvIHNlcnZlclxuICAgKiBAcGFyYW0ge01lc3NhZ2V9IG1lc3NhZ2VcbiAgICovXG4gIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5jb25uZWN0ZWQgJiYgIXRoaXMuY29ubmVjdGluZykge1xuICAgICAgbGV0IGFjY2Vzc1Rva2VuID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnYWNjZXNzVG9rZW4nKTtcbiAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPT0gbnVsbCAmJiBhY2Nlc3NUb2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lc3NhZ2UuZGF0YS5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgfVxuICAgICAgaWYgKENPTkZJRy5FTlYudG9Mb3dlckNhc2UoKSAhPT0gJ3Byb2QnKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAnJWNbTE9HXSAnICsgbW9tZW50KCkuZm9ybWF0KCdISDptbTpzcyBERC1NTS1ZWVlZJykgKyAnIOKWtu+4j+KWtu+4j+KWtu+4jyAnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kOiAjNUU3MzhCOyBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogOHB4OyBwYWRkaW5nOiAxcHg7IGJvcmRlci1yYWRpdXM6IDNweDsnLCBtZXNzYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBsZXQgYXBpTWVzc2FnZSA9IG1lc3NhZ2UudG9KU09OKCk7XG4gICAgICB0aGlzLndlYnNvY2tldC5zZW5kKGFwaU1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dGJvdW5kUXVldWUucHVzaChtZXNzYWdlKTtcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGNvbm5lY3Rpb25cbiAgICovXG4gIHByaXZhdGUgY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlVXJsICYmICF0aGlzLmNvbm5lY3RlZCAmJiAhdGhpcy5jb25uZWN0aW5nKSB7XG4gICAgICB0aGlzLmNvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFxuICAgICAgICB0aGlzLm1lc3NhZ2VVcmxcbiAgICAgICAgKyAnP2NsaWVudElkPScgKyBTRUNVUklUWS5DTElFTlRfSURcbiAgICAgICAgKyAnJiZjbGllbnRTZWNyZXQ9JyArIFNFQ1VSSVRZLkNMSUVOVF9TRUNSRVRcbiAgICAgICAgKyAnJiZhcHBJZD0nICsgU0VDVVJJVFkuQVBQX0lEXG4gICAgICApO1xuICAgICAgdGhpcy53ZWJzb2NrZXQub25lcnJvciA9IChldmVudCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKG5ldyBNZXNzYWdlKCdFUlJPUicsIGBDb21tdW5pY2F0aW9uIGVycm9yOiAke2V2ZW50LnRvU3RyaW5nKCl9YCkpO1xuICAgICAgdGhpcy53ZWJzb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoTWVzc2FnZS5mcm9tSlNPTihldmVudC5kYXRhKSk7XG4gICAgICB0aGlzLndlYnNvY2tldC5vbm9wZW4gPSAoZXZlbnQpID0+IHRoaXMub25Db25uZWN0ZWQoKTtcbiAgICAgIHRoaXMud2Vic29ja2V0Lm9uY2xvc2UgPSAoZXZlbnQpID0+IHRoaXMub25EaXNjb25uZWN0ZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHJlc3BvbnNlIG1lc3NhZ2VcbiAgICogQHBhcmFtIHtNZXNzYWdlfSBtZXNzYWdlIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHByaXZhdGUgaGFuZGxlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgaWYgKCEhbWVzc2FnZS5kYXRhLmVycm9yVHlwZSAmJiBtZXNzYWdlLmRhdGEuZXJyb3JUeXBlID09PSAnSU5WQUxJRF9BQ0NFU1NfVE9LRU4nKSB7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAobWVzc2FnZS5tZXNzYWdlVHlwZSkge1xuICAgICAgICBjYXNlICdFUlJPUic6XG4gICAgICAgICAgaWYgKENPTkZJRy5FTlYudG9Mb3dlckNhc2UoKSAhPT0gJ3Byb2QnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICclY1tXRUJTT0NLRVQgRVJST1JdIPCfmLHwn5ix8J+YsSAnLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZDogI0U4N0UwNDsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDhweDsgcGFkZGluZzogMXB4OyBib3JkZXItcmFkaXVzOiAzcHg7JywgbWVzc2FnZS5kYXRhXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoQ09ORklHLkVOVi50b0xvd2VyQ2FzZSgpICE9PSAncHJvZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgJyVjW0xPR10gJyArIG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MgREQtTU0tWVlZWScpICsgJyDil4DvuI/il4DvuI/il4DvuI8gJyxcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQ6ICM0REIzQTI7IGNvbG9yOiB3aGl0ZTsgZm9udC1zaXplOiA4cHg7IHBhZGRpbmc6IDFweDsgYm9yZGVyLXJhZGl1czogM3B4OycsIG1lc3NhZ2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubWVzc2FnZS5uZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb25uZWN0IGxpc3RlbmVyXG4gICAqL1xuICBwcml2YXRlIG9uQ29ubmVjdGVkKCkge1xuICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICBpZiAoQ09ORklHLkVOVi50b0xvd2VyQ2FzZSgpICE9PSAncHJvZCcpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgJyVjW1dFQlNPQ0tFVCBPUEVORURdIPCfk6Hwn5Oh8J+ToSAnLFxuICAgICAgICAnYmFja2dyb3VuZDogI0U4N0UwNDsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDhweDsgcGFkZGluZzogMXB4OyBib3JkZXItcmFkaXVzOiAzcHg7J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICB3aGlsZSAodGhpcy5vdXRib3VuZFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5vdXRib3VuZFF1ZXVlLnBvcCgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gZGlzY29ubmVjdCBsaXN0ZW5lclxuICAgKi9cbiAgcHJpdmF0ZSBvbkRpc2Nvbm5lY3RlZCgpIHtcbiAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29ubmVjdGluZyA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZS5uZXh0KG5ldyBNZXNzYWdlKCdDTE9TRUQnLCAnQ29ubmVjdGlvbiBjbG9zZWQuIFBsZWFzZSB0cnkgYWdhaW4uJykpO1xuICAgIGlmIChDT05GSUcuRU5WLnRvTG93ZXJDYXNlKCkgIT09ICdwcm9kJykge1xuICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAnJWNbV0VCU09DS0VUIENMT1NFRF0g8J+aq/Cfmqvwn5qrICcsXG4gICAgICAgICdiYWNrZ3JvdW5kOiAjRTg3RTA0OyBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogOHB4OyBwYWRkaW5nOiAxcHg7IGJvcmRlci1yYWRpdXM6IDNweDsnXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
