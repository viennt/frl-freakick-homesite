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
var core_2 = require('angular2-cookie/core');
var secretWord_service_1 = require('../services/secretWord.service');
var md5_1 = require('ts-md5/dist/md5');
var LandingComponent = (function () {
    function LandingComponent(router, cookieService, secretWordService) {
        this.router = router;
        this.cookieService = cookieService;
        this.secretWordService = secretWordService;
        this.initialCode = 'What\'s the secret word?';
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var secretCode = this.cookieService.get('sc');
        if (secretCode) {
            this.secretWordService.checkSecretWord(String(md5_1.Md5.hashStr(secretCode)), 'LandingComponent')
                .then(function (data) {
                _this.router.navigate(['/home'])
                    .catch(function () {
                });
            }).catch(function (error) {
                _this.router.navigate(['/landing'])
                    .catch(function () {
                });
            });
        }
        this.secretCodeMsg = '';
    };
    LandingComponent.prototype.submitCode = function () {
        var _this = this;
        if (this.secretCode) {
            this.isLoading = true;
            var hashedCode_1 = String(md5_1.Md5.hashStr(this.secretCode));
            var doubleHashedCode = String(md5_1.Md5.hashStr(hashedCode_1));
            this.secretWordService.checkSecretWord(doubleHashedCode, 'SubmitSecretCode').then(function (data) {
                var expires = new Date(new Date().getTime() + 16 * 60 * 60 * 1000);
                _this.cookieService.put('sc', hashedCode_1, {
                    domain: 'freakick.com',
                    expires: expires
                });
                _this.cookieService.put('sc', hashedCode_1, {
                    domain: 'localhost',
                    expires: expires
                });
                _this.cookieService.put('sc', hashedCode_1, {
                    domain: '113.160.225.76',
                    expires: expires
                });
                _this.cookieService.put('sc', hashedCode_1, {
                    domain: '192.168.21.226',
                    expires: expires
                });
                _this.isLoading = false;
                _this.router.navigate(['/home']);
            }).catch(function (error) {
                _this.isLoading = false;
                _this.secretCodeMsg = error.data.message;
            });
        }
        else {
            this.secretCodeMsg = 'please enter secret word!';
        }
    };
    LandingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'frk-landing',
            templateUrl: 'landing.component.html',
            styleUrls: ['landing.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_2.CookieService, secretWord_service_1.SecretWordService])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFLekMscUJBQThCLHNCQUFzQixDQUFDLENBQUE7QUFDckQsbUNBQWtDLGdDQUFnQyxDQUFDLENBQUE7QUFFbkUsb0JBQW9CLGlCQUFpQixDQUFDLENBQUE7QUFXdEM7SUFPRSwwQkFBb0IsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLGlCQUFvQztRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUpqRCxnQkFBVyxHQUFXLDBCQUEwQixDQUFDO0lBS3hELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUM7aUJBQ3hGLElBQUksQ0FBQyxVQUFDLElBQVM7Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDNUIsS0FBSyxDQUFDO2dCQUVQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBVTtnQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDL0IsS0FBSyxDQUFDO2dCQUVQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFBQSxpQkFnQ0M7UUEvQkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxZQUFVLEdBQVcsTUFBTSxDQUFDLFNBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxnQkFBZ0IsR0FBVyxNQUFNLENBQUMsU0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFTO2dCQUMxRixJQUFJLE9BQU8sR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUN4RSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBVSxFQUFFO29CQUN2QyxNQUFNLEVBQUUsY0FBYztvQkFDdEIsT0FBTyxFQUFFLE9BQU87aUJBQ2pCLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBVSxFQUFFO29CQUN2QyxNQUFNLEVBQUUsV0FBVztvQkFDbkIsT0FBTyxFQUFFLE9BQU87aUJBQ2pCLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBVSxFQUFFO29CQUN2QyxNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QixPQUFPLEVBQUUsT0FBTztpQkFDakIsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFVLEVBQUU7b0JBQ3ZDLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLE9BQU8sRUFBRSxPQUFPO2lCQUNqQixDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFVO2dCQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsMkJBQTJCLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7SUFyRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzs7d0JBQUE7SUFrRUYsdUJBQUM7QUFBRCxDQWpFQSxBQWlFQyxJQUFBO0FBakVZLHdCQUFnQixtQkFpRTVCLENBQUEiLCJmaWxlIjoiYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBzZXJ2aWNlc1xuICovXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xuaW1wb3J0IHsgU2VjcmV0V29yZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZWNyZXRXb3JkLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBNZDUgfSBmcm9tICd0cy1tZDUvZGlzdC9tZDUnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgTGFuZGluZ0NvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZnJrLWxhbmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ2xhbmRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGFuZGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGFuZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgcHVibGljIHNlY3JldENvZGVNc2c6IHN0cmluZztcbiAgcHVibGljIHNlY3JldENvZGU6IHN0cmluZztcbiAgcHVibGljIGluaXRpYWxDb2RlOiBzdHJpbmcgPSAnV2hhdFxcJ3MgdGhlIHNlY3JldCB3b3JkPyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlY3JldFdvcmRTZXJ2aWNlOiBTZWNyZXRXb3JkU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IHNlY3JldENvZGUgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdzYycpO1xuICAgIGlmIChzZWNyZXRDb2RlKSB7XG4gICAgICB0aGlzLnNlY3JldFdvcmRTZXJ2aWNlLmNoZWNrU2VjcmV0V29yZChTdHJpbmcoTWQ1Lmhhc2hTdHIoc2VjcmV0Q29kZSkpLCAnTGFuZGluZ0NvbXBvbmVudCcpXG4gICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xhbmRpbmcnXSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNlY3JldENvZGVNc2cgPSAnJztcbiAgfVxuXG4gIHN1Ym1pdENvZGUoKSB7XG4gICAgaWYgKHRoaXMuc2VjcmV0Q29kZSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IGhhc2hlZENvZGU6IHN0cmluZyA9IFN0cmluZyhNZDUuaGFzaFN0cih0aGlzLnNlY3JldENvZGUpKTtcbiAgICAgIGxldCBkb3VibGVIYXNoZWRDb2RlOiBzdHJpbmcgPSBTdHJpbmcoTWQ1Lmhhc2hTdHIoaGFzaGVkQ29kZSkpO1xuICAgICAgdGhpcy5zZWNyZXRXb3JkU2VydmljZS5jaGVja1NlY3JldFdvcmQoZG91YmxlSGFzaGVkQ29kZSwgJ1N1Ym1pdFNlY3JldENvZGUnKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGV4cGlyZXM6IGFueSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMTYgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ3NjJywgaGFzaGVkQ29kZSwge1xuICAgICAgICAgIGRvbWFpbjogJ2ZyZWFraWNrLmNvbScsXG4gICAgICAgICAgZXhwaXJlczogZXhwaXJlc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgnc2MnLCBoYXNoZWRDb2RlLCB7XG4gICAgICAgICAgZG9tYWluOiAnbG9jYWxob3N0JyxcbiAgICAgICAgICBleHBpcmVzOiBleHBpcmVzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucHV0KCdzYycsIGhhc2hlZENvZGUsIHtcbiAgICAgICAgICBkb21haW46ICcxMTMuMTYwLjIyNS43NicsXG4gICAgICAgICAgZXhwaXJlczogZXhwaXJlc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnB1dCgnc2MnLCBoYXNoZWRDb2RlLCB7XG4gICAgICAgICAgZG9tYWluOiAnMTkyLjE2OC4yMS4yMjYnLFxuICAgICAgICAgIGV4cGlyZXM6IGV4cGlyZXNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlY3JldENvZGVNc2cgPSBlcnJvci5kYXRhLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWNyZXRDb2RlTXNnID0gJ3BsZWFzZSBlbnRlciBzZWNyZXQgd29yZCEnO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
