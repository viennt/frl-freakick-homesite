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
var notifications_service_1 = require('./notifications.service');
var SimpleNotificationsComponent = (function () {
    function SimpleNotificationsComponent(_service) {
        this._service = _service;
        this.onCreate = new core_1.EventEmitter();
        this.onDestroy = new core_1.EventEmitter();
        this.notifications = [];
        this.position = ['bottom', 'right'];
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.preventLastDuplicates = false;
        this.preventDuplicates = false;
        this.timeOut = 0;
        this.maxLength = 0;
        this.clickToClose = true;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.theClass = '';
        this.rtl = false;
        this.animate = 'fromRight';
    }
    Object.defineProperty(SimpleNotificationsComponent.prototype, "options", {
        set: function (opt) {
            this.attachChanges(opt);
        },
        enumerable: true,
        configurable: true
    });
    SimpleNotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listener = this._service.getChangeEmitter()
            .subscribe(function (item) {
            switch (item.command) {
                case 'cleanAll':
                    _this.notifications = [];
                    break;
                case 'clean':
                    _this.cleanSingle(item.id);
                    break;
                case 'set':
                    if (item.add)
                        _this.add(item.notification);
                    else
                        _this.defaultBehavior(item);
                    break;
                default:
                    _this.defaultBehavior(item);
                    break;
            }
        });
    };
    SimpleNotificationsComponent.prototype.defaultBehavior = function (value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.onDestroy.emit(this.buildEmit(value.notification, false));
    };
    SimpleNotificationsComponent.prototype.add = function (item) {
        item.createdOn = new Date();
        var toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
        this.lastNotificationCreated = item;
        if (!toBlock) {
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(0, 1);
                this.notifications.push(item);
            }
            else {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(this.notifications.length - 1, 1);
                this.notifications.splice(0, 0, item);
            }
            this.onCreate.emit(this.buildEmit(item, true));
        }
    };
    SimpleNotificationsComponent.prototype.block = function (item) {
        var toCheck = item.html ? this.checkHtml : this.checkStandard;
        if (this.preventDuplicates && this.notifications.length > 0) {
            for (var i = 0; i < this.notifications.length; i++) {
                if (toCheck(this.notifications[i], item)) {
                    return true;
                }
            }
        }
        if (this.preventLastDuplicates) {
            var comp = void 0;
            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                }
                else {
                    comp = this.notifications[0];
                }
            }
            else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            }
            else {
                return false;
            }
            return toCheck(comp, item);
        }
        return false;
    };
    SimpleNotificationsComponent.prototype.checkStandard = function (checker, item) {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    };
    SimpleNotificationsComponent.prototype.checkHtml = function (checker, item) {
        return checker.html ? checker.type === item.type
            && checker.title === item.title && checker.content === item.content
            && checker.html === item.html : false;
    };
    SimpleNotificationsComponent.prototype.attachChanges = function (options) {
        var _this = this;
        Object.keys(options).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = options[a];
            }
        });
    };
    SimpleNotificationsComponent.prototype.buildEmit = function (notification, to) {
        var toEmit = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };
        if (notification.html) {
            toEmit.html = notification.html;
        }
        else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }
        if (!to) {
            toEmit.destroyedOn = new Date();
        }
        return toEmit;
    };
    SimpleNotificationsComponent.prototype.cleanSingle = function (id) {
        var indexOfDelete = 0;
        var doDelete = false;
        this.notifications.forEach(function (notification, idx) {
            if (notification.id === id) {
                indexOfDelete = idx;
                doDelete = true;
            }
        });
        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
        }
    };
    SimpleNotificationsComponent.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SimpleNotificationsComponent.prototype, "options", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SimpleNotificationsComponent.prototype, "onCreate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SimpleNotificationsComponent.prototype, "onDestroy", void 0);
    SimpleNotificationsComponent = __decorate([
        core_1.Component({
            selector: 'simple-notifications',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n        <div class=\"simple-notification-wrapper\" [ngClass]=\"position\">\n            <simple-notification\n                *ngFor=\"let a of notifications; let i = index\"\n                [item]=\"a\"\n                [timeOut]=\"timeOut\"\n                [clickToClose]=\"clickToClose\"\n                [maxLength]=\"maxLength\"\n                [showProgressBar]=\"showProgressBar\"\n                [pauseOnHover]=\"pauseOnHover\"\n                [theClass]=\"theClass\"\n                [rtl]=\"rtl\"\n                [animate]=\"animate\"\n                [position]=\"i\"\n                >\n            </simple-notification>\n        </div>\n    ",
            styles: ["\n        .simple-notification-wrapper {\n            position: fixed;\n            width: 300px;\n            z-index: 1000;\n        }\n        \n        .simple-notification-wrapper.left { left: 20px; }\n        .simple-notification-wrapper.top { top: 20px; }\n        .simple-notification-wrapper.right { right: 20px; }\n        .simple-notification-wrapper.bottom { bottom: 20px; }\n        \n        @media (max-width: 340px) {\n            .simple-notification-wrapper {\n                width: auto;\n                left: 20px;\n                right: 20px;\n            }\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [notifications_service_1.NotificationsService])
    ], SimpleNotificationsComponent);
    return SimpleNotificationsComponent;
}());
exports.SimpleNotificationsComponent = SimpleNotificationsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL25vdGlmaS9zaW1wbGUtbm90aWZpY2F0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyRixlQUFlLENBQUMsQ0FBQTtBQUUzRyxzQ0FBbUMseUJBQXlCLENBQUMsQ0FBQTtBQStDN0Q7SUErQkksc0NBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO1FBekJ4QyxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRWxDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxhQUFRLEdBQXlDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBTXBFLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsMEJBQXFCLEdBQVEsS0FBSyxDQUFDO1FBQ25DLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUduQyxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixRQUFHLEdBQVksS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBa0QsV0FBVyxDQUFDO0lBRXhCLENBQUM7SUE3QjdDLHNCQUFJLGlEQUFPO2FBQVgsVUFBWSxHQUFZO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUE2QkQsK0NBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXJCRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7YUFDM0MsU0FBUyxDQUFD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QUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQXJMRDtRQUFDLFlBQUssRUFBRTs7OytEQUFBO0lBSVI7UUFBQyxhQUFNLEVBQUU7O2tFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O21FQUFBO0lBbERiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsUUFBUSxFQUFFLHlwQkFpQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyx3bEJBbUJSLENBQUM7U0FDTCxDQUFDOztvQ0FBQTtJQTBMRixtQ0FBQztBQUFELENBeExBLEFBd0xDLElBQUE7QUF4TFksb0NBQTRCLCtCQXdMeEMsQ0FBQSIsImZpbGUiOiJhcHAvcGx1Z2lucy9ub3RpZmkvc2ltcGxlLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tICcuL25vdGlmaWNhdGlvbi50eXBlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJy4vbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9vcHRpb25zLnR5cGUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaW1wbGUtbm90aWZpY2F0aW9ucycsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlLW5vdGlmaWNhdGlvbi13cmFwcGVyXCIgW25nQ2xhc3NdPVwicG9zaXRpb25cIj5cbiAgICAgICAgICAgIDxzaW1wbGUtbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGEgb2Ygbm90aWZpY2F0aW9uczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgW2l0ZW1dPVwiYVwiXG4gICAgICAgICAgICAgICAgW3RpbWVPdXRdPVwidGltZU91dFwiXG4gICAgICAgICAgICAgICAgW2NsaWNrVG9DbG9zZV09XCJjbGlja1RvQ2xvc2VcIlxuICAgICAgICAgICAgICAgIFttYXhMZW5ndGhdPVwibWF4TGVuZ3RoXCJcbiAgICAgICAgICAgICAgICBbc2hvd1Byb2dyZXNzQmFyXT1cInNob3dQcm9ncmVzc0JhclwiXG4gICAgICAgICAgICAgICAgW3BhdXNlT25Ib3Zlcl09XCJwYXVzZU9uSG92ZXJcIlxuICAgICAgICAgICAgICAgIFt0aGVDbGFzc109XCJ0aGVDbGFzc1wiXG4gICAgICAgICAgICAgICAgW3J0bF09XCJydGxcIlxuICAgICAgICAgICAgICAgIFthbmltYXRlXT1cImFuaW1hdGVcIlxuICAgICAgICAgICAgICAgIFtwb3NpdGlvbl09XCJpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3NpbXBsZS1ub3RpZmljYXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuc2ltcGxlLW5vdGlmaWNhdGlvbi13cmFwcGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zaW1wbGUtbm90aWZpY2F0aW9uLXdyYXBwZXIubGVmdCB7IGxlZnQ6IDIwcHg7IH1cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24td3JhcHBlci50b3AgeyB0b3A6IDIwcHg7IH1cbiAgICAgICAgLnNpbXBsZS1ub3RpZmljYXRpb24td3JhcHBlci5yaWdodCB7IHJpZ2h0OiAyMHB4OyB9XG4gICAgICAgIC5zaW1wbGUtbm90aWZpY2F0aW9uLXdyYXBwZXIuYm90dG9tIHsgYm90dG9tOiAyMHB4OyB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIHtcbiAgICAgICAgICAgIC5zaW1wbGUtbm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIFNpbXBsZU5vdGlmaWNhdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvcHQ6IE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hdHRhY2hDaGFuZ2VzKG9wdCk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIG9uQ3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvbkRlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwdWJsaWMgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10gPSBbXTtcbiAgICBwdWJsaWMgcG9zaXRpb246IFsndG9wJyB8ICdib3R0b20nLCAncmlnaHQnIHwgJ2xlZnQnXSA9IFsnYm90dG9tJywgJ3JpZ2h0J107XG5cbiAgICBwcml2YXRlIGxhc3ROb3RpZmljYXRpb25DcmVhdGVkOiBOb3RpZmljYXRpb247XG4gICAgcHJpdmF0ZSBsaXN0ZW5lcjogU3Vic2NyaXB0aW9uO1xuXG4gICAgLy8gUmVjZWl2ZWQgdmFsdWVzXG4gICAgcHJpdmF0ZSBsYXN0T25Cb3R0b206IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgbWF4U3RhY2s6IG51bWJlciA9IDg7XG4gICAgcHJpdmF0ZSBwcmV2ZW50TGFzdER1cGxpY2F0ZXM6IGFueSA9IGZhbHNlO1xuICAgIHByaXZhdGUgcHJldmVudER1cGxpY2F0ZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIFNlbnQgdmFsdWVzXG4gICAgcHJpdmF0ZSB0aW1lT3V0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbWF4TGVuZ3RoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2xpY2tUb0Nsb3NlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHNob3dQcm9ncmVzc0JhcjogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBwYXVzZU9uSG92ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgdGhlQ2xhc3M6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgcnRsOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhbmltYXRlOiAnZnJvbVJpZ2h0JyB8ICdmcm9tTGVmdCcgfCAncm90YXRlJyB8ICdzY2FsZScgPSAnZnJvbVJpZ2h0JztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlcyBpbiB0aGUgc2VydmljZVxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gdGhpcy5fc2VydmljZS5nZXRDaGFuZ2VFbWl0dGVyKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtLmNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xlYW5BbGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGVhbic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFuU2luZ2xlKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2V0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFkZCkgdGhpcy5hZGQoaXRlbS5ub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRlZmF1bHRCZWhhdmlvcihpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRCZWhhdmlvcihpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3Igb24gZXZlbnRcbiAgICBkZWZhdWx0QmVoYXZpb3IodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc3BsaWNlKHRoaXMubm90aWZpY2F0aW9ucy5pbmRleE9mKHZhbHVlLm5vdGlmaWNhdGlvbiksIDEpO1xuICAgICAgICB0aGlzLm9uRGVzdHJveS5lbWl0KHRoaXMuYnVpbGRFbWl0KHZhbHVlLm5vdGlmaWNhdGlvbiwgZmFsc2UpKTtcbiAgICB9XG5cblxuICAgIC8vIEFkZCB0aGUgbmV3IG5vdGlmaWNhdGlvbiB0byB0aGUgbm90aWZpY2F0aW9uIGFycmF5XG4gICAgYWRkKGl0ZW06IE5vdGlmaWNhdGlvbik6IHZvaWQge1xuICAgICAgICBpdGVtLmNyZWF0ZWRPbiA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbGV0IHRvQmxvY2s6IGJvb2xlYW4gPSB0aGlzLnByZXZlbnRMYXN0RHVwbGljYXRlcyB8fCB0aGlzLnByZXZlbnREdXBsaWNhdGVzID8gdGhpcy5ibG9jayhpdGVtKSA6IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgdGhpcyBhcyB0aGUgbGFzdCBjcmVhdGVkIG5vdGlmaWNhdGlvblxuICAgICAgICB0aGlzLmxhc3ROb3RpZmljYXRpb25DcmVhdGVkID0gaXRlbTtcblxuICAgICAgICBpZiAoIXRvQmxvY2spIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBub3RpZmljYXRpb24gc2hvdWxkIGJlIGFkZGVkIGF0IHRoZSBzdGFydCBvciB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdE9uQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggPj0gdGhpcy5tYXhTdGFjaykgdGhpcy5ub3RpZmljYXRpb25zLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggPj0gdGhpcy5tYXhTdGFjaykgdGhpcy5ub3RpZmljYXRpb25zLnNwbGljZSh0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vbkNyZWF0ZS5lbWl0KHRoaXMuYnVpbGRFbWl0KGl0ZW0sIHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIG5vdGlmaWNhdGlvbnMgc2hvdWxkIGJlIHByZXZlbnRlZFxuICAgIGJsb2NrKGl0ZW06IE5vdGlmaWNhdGlvbik6IGJvb2xlYW4ge1xuXG4gICAgICAgIGxldCB0b0NoZWNrID0gaXRlbS5odG1sID8gdGhpcy5jaGVja0h0bWwgOiB0aGlzLmNoZWNrU3RhbmRhcmQ7XG5cbiAgICAgICAgaWYgKHRoaXMucHJldmVudER1cGxpY2F0ZXMgJiYgdGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvQ2hlY2sodGhpcy5ub3RpZmljYXRpb25zW2ldLCBpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmV2ZW50TGFzdER1cGxpY2F0ZXMpIHtcblxuICAgICAgICAgICAgbGV0IGNvbXA6IE5vdGlmaWNhdGlvbjtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmVudExhc3REdXBsaWNhdGVzID09PSAndmlzaWJsZScgJiYgdGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0T25Cb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IHRoaXMubm90aWZpY2F0aW9uc1t0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IHRoaXMubm90aWZpY2F0aW9uc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmVudExhc3REdXBsaWNhdGVzID09PSAnYWxsJyAmJiB0aGlzLmxhc3ROb3RpZmljYXRpb25DcmVhdGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcCA9IHRoaXMubGFzdE5vdGlmaWNhdGlvbkNyZWF0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b0NoZWNrKGNvbXAsIGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrU3RhbmRhcmQoY2hlY2tlcjogTm90aWZpY2F0aW9uLCBpdGVtOiBOb3RpZmljYXRpb24pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrZXIudHlwZSA9PT0gaXRlbS50eXBlICYmIGNoZWNrZXIudGl0bGUgPT09IGl0ZW0udGl0bGUgJiYgY2hlY2tlci5jb250ZW50ID09PSBpdGVtLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgY2hlY2tIdG1sKGNoZWNrZXI6IE5vdGlmaWNhdGlvbiwgaXRlbTogTm90aWZpY2F0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjaGVja2VyLmh0bWwgPyBjaGVja2VyLnR5cGUgPT09IGl0ZW0udHlwZVxuICAgICAgICAgICYmIGNoZWNrZXIudGl0bGUgPT09IGl0ZW0udGl0bGUgJiYgY2hlY2tlci5jb250ZW50ID09PSBpdGVtLmNvbnRlbnRcbiAgICAgICAgICAmJiBjaGVja2VyLmh0bWwgPT09IGl0ZW0uaHRtbCA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEF0dGFjaCBhbGwgdGhlIGNoYW5nZXMgcmVjZWl2ZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0XG4gICAgYXR0YWNoQ2hhbmdlcyhvcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcylbYV0gPSBvcHRpb25zW2FdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBidWlsZEVtaXQobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24sIHRvOiBib29sZWFuKSB7XG4gICAgICAgIGxldCB0b0VtaXQ6IE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgIGNyZWF0ZWRPbjogbm90aWZpY2F0aW9uLmNyZWF0ZWRPbixcbiAgICAgICAgICAgIHR5cGU6IG5vdGlmaWNhdGlvbi50eXBlLFxuICAgICAgICAgICAgaWNvbjogbm90aWZpY2F0aW9uLmljb24sXG4gICAgICAgICAgICBpZDogbm90aWZpY2F0aW9uLmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5odG1sKSB7XG4gICAgICAgICAgICB0b0VtaXQuaHRtbCA9IG5vdGlmaWNhdGlvbi5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9FbWl0LnRpdGxlID0gbm90aWZpY2F0aW9uLnRpdGxlO1xuICAgICAgICAgICAgdG9FbWl0LmNvbnRlbnQgPSBub3RpZmljYXRpb24uY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG8pIHtcbiAgICAgICAgICAgIHRvRW1pdC5kZXN0cm95ZWRPbiA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG9FbWl0O1xuICAgIH1cblxuICAgIGNsZWFuU2luZ2xlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4T2ZEZWxldGU6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBkb0RlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5mb3JFYWNoKChub3RpZmljYXRpb24sIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBpbmRleE9mRGVsZXRlID0gaWR4O1xuICAgICAgICAgICAgICAgIGRvRGVsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRvRGVsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMuc3BsaWNlKGluZGV4T2ZEZWxldGUsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
