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
var index_1 = require('./plugins/notifi/index');
var core_2 = require('angular2-cookie/core');
var md5_1 = require('ts-md5/dist/md5');
var constants_1 = require('./constants');
require('./operators');
var AppComponent = (function () {
    function AppComponent(router, _notificationsService, cookieService) {
        this.router = router;
        this._notificationsService = _notificationsService;
        this.cookieService = cookieService;
        this.options = {
            timeOut: 2000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 0,
            maxStacks: 7,
            preventDuplicates: 0,
            preventLastDuplicates: 'visible',
            rtl: false,
            animate: 'scale',
            position: ['bottom', 'right']
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.distinctUntilChanged(function (previous, current) {
            if (current instanceof router_1.NavigationEnd) {
                return previous.url === current.url;
            }
            return true;
        }).subscribe(function (x) {
            ga('set', 'page', x.url);
            var secretCode = _this.cookieService.get('sc');
            var user = _this.getUserBySecretCode(secretCode);
            ga('set', 'dimension1', user);
            ga('set', 'metric1', user);
            ga('send', 'pageview');
        });
        this.router.events.subscribe(function (evt) {
            if (constants_1.CONFIG.ENV.toLowerCase() !== 'prod' && evt instanceof router_1.NavigationStart) {
                console.log('\n\n\n\n\n%c[PAGE] ' + evt.url, 'background: #8775A7; color: white; font-size: 10px; padding: 2px; border-radius: 3px;');
            }
            if (!(evt instanceof router_1.NavigationEnd))
                return;
            window.scrollTo(0, 0);
        });
        this.isAgreedCookiePolicy = localStorage.getItem('FREAKICKCOOKIE')
            && localStorage.getItem('FREAKICKCOOKIE') === 'Agree';
    };
    AppComponent.prototype.getUserBySecretCode = function (secretCode) {
        if (!secretCode)
            return 'Anonymous';
        var hashedSecretCode = String(md5_1.Md5.hashStr(secretCode));
        if (hashedSecretCode === 'd14dfc71841fe74bf16a58b6ef33a339') {
            return 'Neil Jacobs';
        }
        if (hashedSecretCode === 'f6d94c23a520dd929f43a2d7ff231bc1') {
            return 'Dennis Coleman';
        }
        if (hashedSecretCode === '73e275849b7d2c334f4fa002119ebb5d') {
            return 'Leon Graves';
        }
        if (hashedSecretCode === '0b422944e9e10a753b208f4a98ac1b07') {
            return 'Mark Papas';
        }
        if (hashedSecretCode === '21e5bbf8748a4874a51f589f25b29126') {
            return 'Grannatt';
        }
        if (hashedSecretCode === '3edbcfdb6ccafda48b802a566e465da2') {
            return 'Lamar';
        }
        if (hashedSecretCode === '467bebb868325b40f72195d0997841cc') {
            return 'Richard Kenah';
        }
        if (hashedSecretCode === 'b54b6f30209fa12744e9915bd8349a74') {
            return 'Tony Blaize';
        }
        if (hashedSecretCode === '2cc476dcca87e4fb2b7c22688a8ea1bd') {
            return 'Lamar Kendricks';
        }
        if (hashedSecretCode === '654a887db446ba5954538f893a0eb00e') {
            return 'Freakickers';
        }
        if (hashedSecretCode === 'a3410817019348047145f6fa57121101') {
            return 'Freakickers';
        }
        return 'Anonymous';
    };
    AppComponent.prototype.onClickAgreeCookiePolicy = function () {
        localStorage.setItem('FREAKICKCOOKIE', 'Agree');
        this.isAgreedCookiePolicy = localStorage.getItem('FREAKICKCOOKIE')
            && localStorage.getItem('FREAKICKCOOKIE') === 'Agree';
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.NotificationsService, core_2.CookieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUM1RCxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN2QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDdkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELCtDQUF3QixHQUF4QjtRQUNFLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7ZUFDN0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLE9BQU8sQ0FBQztJQUMxRCxDQUFDO0lBdEdIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7O29CQUFBO0lBa0dGLG1CQUFDO0FBQUQsQ0FqR0EsQUFpR0MsSUFBQTtBQWpHWSxvQkFBWSxlQWlHeEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL25vdGlmaS9pbmRleCc7XG5cbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5pbXBvcnQgeyBNZDUgfSBmcm9tICd0cy1tZDUvZGlzdC9tZDUnO1xuXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcblxuLy8gRGVjbGFyZSBnYSBmdW5jdGlvbiBhcyBhbWJpZW50XG5kZWNsYXJlIHZhciBnYTogYW55O1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpc0FncmVlZENvb2tpZVBvbGljeTogYm9vbGVhbjtcblxuICBwdWJsaWMgb3B0aW9uczogYW55ID0ge1xuICAgIHRpbWVPdXQ6IDIwMDAsXG4gICAgc2hvd1Byb2dyZXNzQmFyOiB0cnVlLFxuICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICBjbGlja1RvQ2xvc2U6IHRydWUsXG4gICAgbWF4TGVuZ3RoOiAwLFxuICAgIG1heFN0YWNrczogNyxcbiAgICBwcmV2ZW50RHVwbGljYXRlczogMCxcbiAgICBwcmV2ZW50TGFzdER1cGxpY2F0ZXM6ICd2aXNpYmxlJyxcbiAgICBydGw6IGZhbHNlLFxuICAgIGFuaW1hdGU6ICdzY2FsZScsXG4gICAgcG9zaXRpb246IFsnYm90dG9tJywgJ3JpZ2h0J11cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9ub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLmRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmV2aW91czogYW55LCBjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChjdXJyZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICByZXR1cm4gcHJldmlvdXMudXJsID09PSBjdXJyZW50LnVybDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pLnN1YnNjcmliZSgoeDogYW55KSA9PiB7XG4gICAgICBnYSgnc2V0JywgJ3BhZ2UnLCB4LnVybCk7XG4gICAgICBsZXQgc2VjcmV0Q29kZSA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3NjJyk7XG4gICAgICBsZXQgdXNlciA9IHRoaXMuZ2V0VXNlckJ5U2VjcmV0Q29kZShzZWNyZXRDb2RlKTtcbiAgICAgIGdhKCdzZXQnLCAnZGltZW5zaW9uMScsIHVzZXIpO1xuICAgICAgZ2EoJ3NldCcsICdtZXRyaWMxJywgdXNlcik7XG4gICAgICBnYSgnc2VuZCcsICdwYWdldmlldycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZ0KSA9PiB7XG4gICAgICBpZiAoQ09ORklHLkVOVi50b0xvd2VyQ2FzZSgpICE9PSAncHJvZCcgJiYgZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICdcXG5cXG5cXG5cXG5cXG4lY1tQQUdFXSAnICsgZXZ0LnVybCxcbiAgICAgICAgICAnYmFja2dyb3VuZDogIzg3NzVBNzsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDEwcHg7IHBhZGRpbmc6IDJweDsgYm9yZGVyLXJhZGl1czogM3B4OydcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKSByZXR1cm47XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzQWdyZWVkQ29va2llUG9saWN5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0ZSRUFLSUNLQ09PS0lFJylcbiAgICAgICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGUkVBS0lDS0NPT0tJRScpID09PSAnQWdyZWUnO1xuICB9XG5cbiAgZ2V0VXNlckJ5U2VjcmV0Q29kZShzZWNyZXRDb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghc2VjcmV0Q29kZSkgcmV0dXJuICdBbm9ueW1vdXMnO1xuICAgIGxldCBoYXNoZWRTZWNyZXRDb2RlID0gU3RyaW5nKE1kNS5oYXNoU3RyKHNlY3JldENvZGUpKTtcbiAgICBpZiAoaGFzaGVkU2VjcmV0Q29kZSA9PT0gJ2QxNGRmYzcxODQxZmU3NGJmMTZhNThiNmVmMzNhMzM5Jykge1xuICAgICAgcmV0dXJuICdOZWlsIEphY29icyc7XG4gICAgfVxuICAgIGlmIChoYXNoZWRTZWNyZXRDb2RlID09PSAnZjZkOTRjMjNhNTIwZGQ5MjlmNDNhMmQ3ZmYyMzFiYzEnKSB7XG4gICAgICByZXR1cm4gJ0Rlbm5pcyBDb2xlbWFuJztcbiAgICB9XG4gICAgaWYgKGhhc2hlZFNlY3JldENvZGUgPT09ICc3M2UyNzU4NDliN2QyYzMzNGY0ZmEwMDIxMTllYmI1ZCcpIHtcbiAgICAgIHJldHVybiAnTGVvbiBHcmF2ZXMnO1xuICAgIH1cbiAgICBpZiAoaGFzaGVkU2VjcmV0Q29kZSA9PT0gJzBiNDIyOTQ0ZTllMTBhNzUzYjIwOGY0YTk4YWMxYjA3Jykge1xuICAgICAgcmV0dXJuICdNYXJrIFBhcGFzJztcbiAgICB9XG4gICAgaWYgKGhhc2hlZFNlY3JldENvZGUgPT09ICcyMWU1YmJmODc0OGE0ODc0YTUxZjU4OWYyNWIyOTEyNicpIHtcbiAgICAgIHJldHVybiAnR3Jhbm5hdHQnO1xuICAgIH1cbiAgICBpZiAoaGFzaGVkU2VjcmV0Q29kZSA9PT0gJzNlZGJjZmRiNmNjYWZkYTQ4YjgwMmE1NjZlNDY1ZGEyJykge1xuICAgICAgcmV0dXJuICdMYW1hcic7XG4gICAgfVxuICAgIGlmIChoYXNoZWRTZWNyZXRDb2RlID09PSAnNDY3YmViYjg2ODMyNWI0MGY3MjE5NWQwOTk3ODQxY2MnKSB7XG4gICAgICByZXR1cm4gJ1JpY2hhcmQgS2VuYWgnO1xuICAgIH1cbiAgICBpZiAoaGFzaGVkU2VjcmV0Q29kZSA9PT0gJ2I1NGI2ZjMwMjA5ZmExMjc0NGU5OTE1YmQ4MzQ5YTc0Jykge1xuICAgICAgcmV0dXJuICdUb255IEJsYWl6ZSc7XG4gICAgfVxuICAgIGlmIChoYXNoZWRTZWNyZXRDb2RlID09PSAnMmNjNDc2ZGNjYTg3ZTRmYjJiN2MyMjY4OGE4ZWExYmQnKSB7XG4gICAgICByZXR1cm4gJ0xhbWFyIEtlbmRyaWNrcyc7XG4gICAgfVxuICAgIGlmIChoYXNoZWRTZWNyZXRDb2RlID09PSAnNjU0YTg4N2RiNDQ2YmE1OTU0NTM4Zjg5M2EwZWIwMGUnKSB7XG4gICAgICByZXR1cm4gJ0ZyZWFraWNrZXJzJztcbiAgICB9XG4gICAgaWYgKGhhc2hlZFNlY3JldENvZGUgPT09ICdhMzQxMDgxNzAxOTM0ODA0NzE0NWY2ZmE1NzEyMTEwMScpIHtcbiAgICAgIHJldHVybiAnRnJlYWtpY2tlcnMnO1xuICAgIH1cbiAgICByZXR1cm4gJ0Fub255bW91cyc7XG4gIH1cblxuICBvbkNsaWNrQWdyZWVDb29raWVQb2xpY3koKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0ZSRUFLSUNLQ09PS0lFJywgJ0FncmVlJyk7XG4gICAgdGhpcy5pc0FncmVlZENvb2tpZVBvbGljeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGUkVBS0lDS0NPT0tJRScpXG4gICAgICAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRlJFQUtJQ0tDT09LSUUnKSA9PT0gJ0FncmVlJztcbiAgfVxufVxuIl19
