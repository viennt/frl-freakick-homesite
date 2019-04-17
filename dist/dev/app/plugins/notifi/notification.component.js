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
var platform_browser_1 = require('@angular/platform-browser');
var notifications_service_1 = require('./notifications.service');
var NotificationComponent = (function () {
    function NotificationComponent(notificationService, domSanitizer, zone) {
        var _this = this;
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.zone = zone;
        this.progressWidth = 0;
        this.stopTime = false;
        this.count = 0;
        this.instance = function () {
            _this.zone.runOutsideAngular(function () {
                _this.zone.run(function () { return _this.diff = (new Date().getTime() - _this.start) - (_this.count * _this.speed); });
                if (_this.count++ === _this.steps)
                    _this.zone.run(function () { return _this.remove(); });
                else if (!_this.stopTime) {
                    if (_this.showProgressBar)
                        _this.zone.run(function () { return _this.progressWidth += 100 / _this.steps; });
                    _this.timer = setTimeout(_this.instance, (_this.speed - _this.diff));
                }
            });
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.item.icon);
    };
    NotificationComponent.prototype.startTimeOut = function () {
        var _this = this;
        this.steps = this.timeOut / 10;
        this.speed = this.timeOut / this.steps;
        this.start = new Date().getTime();
        this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.speed); });
    };
    NotificationComponent.prototype.onEnter = function () {
        if (this.pauseOnHover) {
            this.stopTime = true;
        }
    };
    NotificationComponent.prototype.onLeave = function () {
        if (this.pauseOnHover) {
            this.stopTime = false;
            setTimeout(this.instance, (this.speed - this.diff));
        }
    };
    NotificationComponent.prototype.setPosition = function () {
        return this.position !== 0 ? this.position * 90 : 0;
    };
    NotificationComponent.prototype.onClick = function ($e) {
        this.item.click.emit($e);
        if (this.clickToClose) {
            this.remove();
        }
    };
    NotificationComponent.prototype.attachOverrides = function () {
        var _this = this;
        Object.keys(this.item.override).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = _this.item.override[a];
            }
        });
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
    };
    NotificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.zone.run(function () { return _this.notificationService.set(_this.item, false); });
                }, 310);
            });
        }
        else {
            this.notificationService.set(this.item, false);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NotificationComponent.prototype, "timeOut", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotificationComponent.prototype, "showProgressBar", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotificationComponent.prototype, "pauseOnHover", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotificationComponent.prototype, "clickToClose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NotificationComponent.prototype, "maxLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NotificationComponent.prototype, "theClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotificationComponent.prototype, "rtl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NotificationComponent.prototype, "animate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NotificationComponent.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NotificationComponent.prototype, "item", void 0);
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'simple-notification',
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                core_1.trigger('enterLeave', [
                    core_1.state('fromRight', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.transition('* => fromRight', [
                        core_1.style({ opacity: 0, transform: 'translateX(5%)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.state('fromRightOut', core_1.style({ opacity: 0, transform: 'translateX(-5%)' })),
                    core_1.transition('fromRight => fromRightOut', [
                        core_1.style({ opacity: 1, transform: 'translateX(0)' }),
                        core_1.animate('300ms ease-in-out')
                    ]),
                    core_1.state('fromLeft', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.transition('* => fromLeft', [
                        core_1.style({ opacity: 0, transform: 'translateX(-5%)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.state('fromLeftOut', core_1.style({ opacity: 0, transform: 'translateX(5%)' })),
                    core_1.transition('fromLeft => fromLeftOut', [
                        core_1.style({ opacity: 1, transform: 'translateX(0)' }),
                        core_1.animate('300ms ease-in-out')
                    ]),
                    core_1.state('scale', core_1.style({ opacity: 1, transform: 'scale(1)' })),
                    core_1.transition('* => scale', [
                        core_1.style({ opacity: 0, transform: 'scale(0)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.state('scaleOut', core_1.style({ opacity: 0, transform: 'scale(0)' })),
                    core_1.transition('scale => scaleOut', [
                        core_1.style({ opacity: 1, transform: 'scale(1)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.state('rotate', core_1.style({ opacity: 1, transform: 'rotate(0deg)' })),
                    core_1.transition('* => rotate', [
                        core_1.style({ opacity: 0, transform: 'rotate(5deg)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.state('rotateOut', core_1.style({ opacity: 0, transform: 'rotate(-5deg)' })),
                    core_1.transition('rotate => rotateOut', [
                        core_1.style({ opacity: 1, transform: 'rotate(0deg)' }),
                        core_1.animate('400ms ease-in-out')
                    ])
                ])
            ],
            template: "\n        <div class=\"simple-notification\"\n            [@enterLeave]=\"item.state\"\n            (click)=\"onClick($event)\"\n            [class]=\"theClass\"\n\n            [ngClass]=\"{\n                'alert': item.type === 'alert',\n                'error': item.type === 'error',\n                'success': item.type === 'success',\n                'info': item.type === 'info',\n                'bare': item.type === 'bare',\n                'rtl-mode': rtl\n            }\"\n\n            (mouseenter)=\"onEnter()\"\n            (mouseleave)=\"onLeave()\">\n\n            <div *ngIf=\"!item.html\">\n                <div class=\"sn-title\">{{item.title}}</div>\n                <div class=\"sn-content\">{{item.content}}</div>\n\n                <div *ngIf=\"item.type !== 'bare'\" [innerHTML]=\"safeSvg\"></div>\n            </div>\n            <div *ngIf=\"item.html\" [innerHTML]=\"item.html\"></div>\n\n            <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\n                <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\n            </div>\n\n        </div>\n    ",
            styles: ["\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }\n\n        .simple-notification .sn-title {\n            margin: 0;\n            padding: 0 50px 0 0;\n            line-height: 30px;\n            font-size: 20px;\n        }\n\n        .simple-notification .sn-content {\n            margin: 0;\n            font-size: 16px;\n            padding: 0 50px 0 0;\n            line-height: 20px;\n        }\n\n        .simple-notification svg {\n            position: absolute;\n            box-sizing: border-box;\n            top: 0;\n            right: 0;\n            width: 70px;\n            height: 100%;\n            padding: 10px;\n            fill: #fff;\n        }\n\n        .simple-notification.rtl-mode {\n            direction: rtl;\n        }\n\n        .simple-notification.rtl-mode .sn-content {\n            padding: 0 0 0 50px;\n        }\n\n        .simple-notification.rtl-mode svg {\n            left: 0;\n            right: auto;\n        }\n\n        .simple-notification.error { background: #F44336; }\n        .simple-notification.success { background: #8BC34A; }\n        .simple-notification.alert { background: #ffdb5b; }\n        .simple-notification.info { background: #03A9F4; }\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n        }\n\n        .simple-notification.success .sn-progress-loader span { background: #689F38; }\n        .simple-notification.error .sn-progress-loader span { background: #D32F2F; }\n        .simple-notification.alert .sn-progress-loader span { background: #edc242; }\n        .simple-notification.info .sn-progress-loader span { background: #0288D1; }\n        .simple-notification.bare .sn-progress-loader span { background: #ccc; }\n    "]
        }), 
        __metadata('design:paramtypes', [notifications_service_1.NotificationsService, platform_browser_1.DomSanitizer, core_1.NgZone])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL25vdGlmaS9ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFZTyxlQUFlLENBQUMsQ0FBQTtBQUN2QixpQ0FBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQUVuRSxzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQXNLL0Q7SUEwQkksK0JBQ1ksbUJBQXlDLEVBQ3pDLFlBQTBCLEVBQzFCLElBQVk7UUE3QjVCLGlCQW9IQztRQXpGZSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO1FBQ3pDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFNBQUksR0FBSixJQUFJLENBQVE7UUFkakIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUkxQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBdUVsQixhQUFRLEdBQUc7WUFDZixLQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQTNFLENBQTJFLENBQUMsQ0FBQztnQkFFakcsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEtBQUksQ0FBQyxLQUFLLENBQUM7b0JBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEVB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O3dCQUN0QixZQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUMsQ0FBQzt3QkFDOUMsY0FBTyxDQUFDLG1CQUFtQixDQUFDO3FCQUMvQixDQUFDO29CQUNGLFlBQUssQ0FBQyxXQUFXLEVBQUUsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQztvQkFDbkUsaUJBQVUsQ0FBQyxxQkFBcUIsRUFBRTt3QkFDOUIsWUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDLENBQUM7d0JBQzlDLGNBQU8sQ0FBQyxtQkFBbUIsQ0FBQztxQkFDL0IsQ0FBQztpQkFDTCxDQUFDO2FBQ0w7WUFDRCxRQUFRLEVBQUUseWxDQStCVDtZQUNELE1BQU0sRUFBRSxDQUFDLHlyRUEwRVIsQ0FBQztTQUNMLENBQUM7OzZCQUFBO0lBc0hGLDRCQUFDO0FBQUQsQ0FwSEEsQUFvSEMsSUFBQTtBQXBIWSw2QkFBcUIsd0JBb0hqQyxDQUFBIiwiZmlsZSI6ImFwcC9wbHVnaW5zL25vdGlmaS9ub3RpZmljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICBhbmltYXRlLFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLnR5cGUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2ltcGxlLW5vdGlmaWNhdGlvbicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2VudGVyTGVhdmUnLCBbXG5cbiAgICAgICAgICAgIC8vIEVudGVyIGZyb20gcmlnaHRcbiAgICAgICAgICAgIHN0YXRlKCdmcm9tUmlnaHQnLCBzdHlsZSh7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKSd9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IGZyb21SaWdodCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1JSknfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBzdGF0ZSgnZnJvbVJpZ2h0T3V0Jywgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUlKSd9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdmcm9tUmlnaHQgPT4gZnJvbVJpZ2h0T3V0JywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4tb3V0JylcbiAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgICAvLyBFbnRlciBmcm9tIGxlZnRcbiAgICAgICAgICAgIHN0YXRlKCdmcm9tTGVmdCcsIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJ30pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gZnJvbUxlZnQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUlKSd9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc0MDBtcyBlYXNlLWluLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHN0YXRlKCdmcm9tTGVmdE91dCcsIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUlKSd9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdmcm9tTGVmdCA9PiBmcm9tTGVmdE91dCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKSd9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluLW91dCcpXG4gICAgICAgICAgICBdKSxcblxuICAgICAgICAgICAgLy8gUm90YXRlXG4gICAgICAgICAgICBzdGF0ZSgnc2NhbGUnLCBzdHlsZSh7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBzY2FsZScsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBzdGF0ZSgnc2NhbGVPdXQnLCBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignc2NhbGUgPT4gc2NhbGVPdXQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4tb3V0JylcbiAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgICAvLyBTY2FsZVxuICAgICAgICAgICAgc3RhdGUoJ3JvdGF0ZScsIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiByb3RhdGUnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3JvdGF0ZSg1ZGVnKSd9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc0MDBtcyBlYXNlLWluLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHN0YXRlKCdyb3RhdGVPdXQnLCBzdHlsZSh7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiAncm90YXRlKC01ZGVnKSd9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdyb3RhdGUgPT4gcm90YXRlT3V0JywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW1wbGUtbm90aWZpY2F0aW9uXCJcbiAgICAgICAgICAgIFtAZW50ZXJMZWF2ZV09XCJpdGVtLnN0YXRlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgW2NsYXNzXT1cInRoZUNsYXNzXCJcblxuICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICdhbGVydCc6IGl0ZW0udHlwZSA9PT0gJ2FsZXJ0JyxcbiAgICAgICAgICAgICAgICAnZXJyb3InOiBpdGVtLnR5cGUgPT09ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgJ3N1Y2Nlc3MnOiBpdGVtLnR5cGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAnaW5mbyc6IGl0ZW0udHlwZSA9PT0gJ2luZm8nLFxuICAgICAgICAgICAgICAgICdiYXJlJzogaXRlbS50eXBlID09PSAnYmFyZScsXG4gICAgICAgICAgICAgICAgJ3J0bC1tb2RlJzogcnRsXG4gICAgICAgICAgICB9XCJcblxuICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25FbnRlcigpXCJcbiAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTGVhdmUoKVwiPlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWl0ZW0uaHRtbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbi10aXRsZVwiPnt7aXRlbS50aXRsZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNuLWNvbnRlbnRcIj57e2l0ZW0uY29udGVudH19PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS50eXBlICE9PSAnYmFyZSdcIiBbaW5uZXJIVE1MXT1cInNhZmVTdmdcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uaHRtbFwiIFtpbm5lckhUTUxdPVwiaXRlbS5odG1sXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbi1wcm9ncmVzcy1sb2FkZXJcIiAqbmdJZj1cInNob3dQcm9ncmVzc0JhclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIFtuZ1N0eWxlXT1cInsnd2lkdGgnOiBwcm9ncmVzc1dpZHRoICsgJyUnfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuc2ltcGxlLW5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24gLnNuLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweCAwIDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaW1wbGUtbm90aWZpY2F0aW9uIC5zbi1jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweCAwIDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaW1wbGUtbm90aWZpY2F0aW9uIHN2ZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24ucnRsLW1vZGUge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIH1cblxuICAgICAgICAuc2ltcGxlLW5vdGlmaWNhdGlvbi5ydGwtbW9kZSAuc24tY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24ucnRsLW1vZGUgc3ZnIHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaW1wbGUtbm90aWZpY2F0aW9uLmVycm9yIHsgYmFja2dyb3VuZDogI0Y0NDMzNjsgfVxuICAgICAgICAuc2ltcGxlLW5vdGlmaWNhdGlvbi5zdWNjZXNzIHsgYmFja2dyb3VuZDogIzhCQzM0QTsgfVxuICAgICAgICAuc2ltcGxlLW5vdGlmaWNhdGlvbi5hbGVydCB7IGJhY2tncm91bmQ6ICNmZmRiNWI7IH1cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24uaW5mbyB7IGJhY2tncm91bmQ6ICMwM0E5RjQ7IH1cblxuICAgICAgICAuc2ltcGxlLW5vdGlmaWNhdGlvbiAuc24tcHJvZ3Jlc3MtbG9hZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24gLnNuLXByb2dyZXNzLWxvYWRlciBzcGFuIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24uc3VjY2VzcyAuc24tcHJvZ3Jlc3MtbG9hZGVyIHNwYW4geyBiYWNrZ3JvdW5kOiAjNjg5RjM4OyB9XG4gICAgICAgIC5zaW1wbGUtbm90aWZpY2F0aW9uLmVycm9yIC5zbi1wcm9ncmVzcy1sb2FkZXIgc3BhbiB7IGJhY2tncm91bmQ6ICNEMzJGMkY7IH1cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24uYWxlcnQgLnNuLXByb2dyZXNzLWxvYWRlciBzcGFuIHsgYmFja2dyb3VuZDogI2VkYzI0MjsgfVxuICAgICAgICAuc2ltcGxlLW5vdGlmaWNhdGlvbi5pbmZvIC5zbi1wcm9ncmVzcy1sb2FkZXIgc3BhbiB7IGJhY2tncm91bmQ6ICMwMjg4RDE7IH1cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24uYmFyZSAuc24tcHJvZ3Jlc3MtbG9hZGVyIHNwYW4geyBiYWNrZ3JvdW5kOiAjY2NjOyB9XG4gICAgYF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgdGltZU91dDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93UHJvZ3Jlc3NCYXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcHVibGljIHBhdXNlT25Ib3ZlcjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2xpY2tUb0Nsb3NlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXhMZW5ndGg6IG51bWJlcjtcbiAgICBASW5wdXQoKSBwdWJsaWMgdGhlQ2xhc3M6IHN0cmluZztcbiAgICBASW5wdXQoKSBwdWJsaWMgcnRsOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbmltYXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHVibGljIHBvc2l0aW9uOiBudW1iZXI7XG4gICAgQElucHV0KCkgcHVibGljIGl0ZW06IE5vdGlmaWNhdGlvbjtcblxuXG4gICAgLy8gUHJvZ3Jlc3MgYmFyIHZhcmlhYmxlc1xuICAgIHB1YmxpYyBwcm9ncmVzc1dpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RvcFRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHRpbWVyOiBhbnk7XG4gICAgcHJpdmF0ZSBzdGVwczogbnVtYmVyO1xuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhcnQ6IGFueTtcbiAgICBwcml2YXRlIGRpZmY6IGFueTtcblxuICAgIHByaXZhdGUgc2FmZVN2ZzogU2FmZUh0bWw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmVcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtLnN0YXRlID0gdGhpcy5hbmltYXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLml0ZW0ub3ZlcnJpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoT3ZlcnJpZGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZU91dCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVPdXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2FmZVN2ZyA9IHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuaXRlbS5pY29uKTtcbiAgICB9XG5cbiAgICBzdGFydFRpbWVPdXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RlcHMgPSB0aGlzLnRpbWVPdXQgLyAxMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMudGltZU91dCAvIHRoaXMuc3RlcHM7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuaW5zdGFuY2UsIHRoaXMuc3BlZWQpKTtcbiAgICB9XG5cbiAgICBvbkVudGVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25MZWF2ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VPbkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BUaW1lID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuaW5zdGFuY2UsICh0aGlzLnNwZWVkIC0gdGhpcy5kaWZmKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiAhPT0gMCA/IHRoaXMucG9zaXRpb24gKiA5MCA6IDA7XG4gICAgfVxuXG4gICAgb25DbGljaygkZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbS5jbGljay5lbWl0KCRlKTtcblxuICAgICAgICBpZiAodGhpcy5jbGlja1RvQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBdHRhY2ggYWxsIHRoZSBvdmVycmlkZXNcbiAgICBhdHRhY2hPdmVycmlkZXMoKTogdm9pZCB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaXRlbS5vdmVycmlkZSkuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcylbYV0gPSB0aGlzLml0ZW0ub3ZlcnJpZGVbYV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnN0YW5jZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5kaWZmID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydCkgLSAodGhpcy5jb3VudCAqIHRoaXMuc3BlZWQpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnQrKyA9PT0gdGhpcy5zdGVwcykgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLnN0b3BUaW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1Byb2dyZXNzQmFyKSB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMucHJvZ3Jlc3NXaWR0aCArPSAxMDAgLyB0aGlzLnN0ZXBzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuaW5zdGFuY2UsICh0aGlzLnNwZWVkIC0gdGhpcy5kaWZmKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW0uc3RhdGUgPSB0aGlzLmFuaW1hdGUgKyAnT3V0JztcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnNldCh0aGlzLml0ZW0sIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgfSwgMzEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnNldCh0aGlzLml0ZW0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
