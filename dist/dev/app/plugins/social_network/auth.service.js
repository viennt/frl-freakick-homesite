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
var Observable_1 = require('rxjs/Observable');
var core_2 = require('angular2-cookie/core');
var AuthService = (function () {
    function AuthService(cookieService) {
        this.cookieService = cookieService;
    }
    AuthService.prototype.login = function (provider) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            switch (provider) {
                case 'google':
                    if (typeof (_this.gauth) === 'undefined') {
                        _this.gauth = gapi.auth2.getAuthInstance();
                    }
                    _this.gauth.signIn().then(function () {
                        var profile = _this.gauth.currentUser.get().getBasicProfile();
                        var idToken = _this.gauth.currentUser.get().getAuthResponse().id_token;
                        var userDetails = {
                            token: idToken,
                            uid: profile.getId(),
                            name: profile.getName(),
                            email: profile.getEmail(),
                            image: profile.getImageUrl(),
                            provider: 'google'
                        };
                        _this.cookieService.put('_login_provider', 'google');
                        observer.next(userDetails);
                        observer.complete();
                    });
                    break;
                case 'facebook':
                    FB.login(function (res) {
                        if (res.status === 'connected') {
                            var accessToken_1 = res.authResponse.accessToken;
                            var fields = "id, name, email, first_name, last_name, age_range, link, gender, \n                                locale, picture, timezone, updated_time, verified";
                            FB.api("/me?fields=" + fields, function (res) {
                                if (!res || res.error) {
                                    observer.error(res.error);
                                }
                                else {
                                    var userDetails = {
                                        name: res.name,
                                        email: res.email,
                                        uid: res.id,
                                        provider: 'facebook',
                                        imageUrl: res.picture.data.url,
                                        token: accessToken_1
                                    };
                                    _this.cookieService.put('_login_provider', 'facebook');
                                    observer.next(userDetails);
                                    observer.complete();
                                }
                            });
                        }
                    }, { scope: ['public_profile', 'email'] });
                    break;
                case 'linkedin':
                    IN.User.authorize(function () {
                        IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)').result(function (res) {
                            var userDetails = {
                                name: res.firstName + ' ' + res.lastName,
                                email: res.emailAddress,
                                uid: res.id, provider: 'linkedIN',
                                imageUrl: res.pictureUrl
                            };
                            _this.cookieService.put('_login_provider', 'linkedin');
                            observer.next(userDetails);
                            observer.complete();
                        });
                    });
                    break;
            }
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var provider = this.cookieService.get('_login_provider');
        return Observable_1.Observable.create(function (observer) {
            switch (provider) {
                case 'google':
                    var gElement = document.getElementById('gSignout');
                    if (typeof (gElement) !== 'undefined' && gElement !== null) {
                        gElement.remove();
                    }
                    var d = document, gSignout = void 0, ref = d.getElementsByTagName('script')[0];
                    gSignout = d.createElement('script');
                    gSignout.src = 'https://accounts.google.com/Logout';
                    gSignout.type = 'text/javascript';
                    gSignout.id = 'gSignout';
                    _this.cookieService.remove('_login_provider');
                    observer.next(true);
                    observer.complete();
                    ref.parentNode.insertBefore(gSignout, ref);
                    break;
                case 'facebook':
                    FB.logout(function () {
                        _this.cookieService.remove('_login_provider');
                        observer.next(true);
                        observer.complete();
                    });
                    break;
                case 'linkedin':
                    IN.User.logout(function () {
                        _this.cookieService.remove('_login_provider');
                        observer.next(true);
                        observer.complete();
                    }, {});
                    break;
            }
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_2.CookieService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL3NvY2lhbF9uZXR3b3JrL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHFCQUE4QixzQkFBc0IsQ0FBQyxDQUFBO0FBZ0JyRDtJQUdFLHFCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNoRCxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLFFBQWdCO1FBQXRCLGlCQW9FQztRQW5FQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQ3RCLFVBQUMsUUFBYTtZQUNaLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssUUFBUTtvQkFDWCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDNUMsQ0FBQztvQkFDRCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDdkIsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7d0JBQzdELElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDdEUsSUFBSSxXQUFXLEdBQUc7NEJBQ2hCLEtBQUssRUFBRSxPQUFPOzRCQUNkLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFOzRCQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRTs0QkFDdkIsS0FB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QixDQUFDLENBQUM7d0JBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsS0FBSyxDQUFDO2dCQUNSLEtBQUssVUFBVTtvQkFDYixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDYixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBakhIO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFrSGIsa0JBQUM7QUFBRCxDQWpIQSxBQWlIQyxJQUFBO0FBakhZLG1CQUFXLGNBaUh2QixDQUFBIiwiZmlsZSI6ImFwcC9wbHVnaW5zL3NvY2lhbF9uZXR3b3JrL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xuXG5kZWNsYXJlIGxldCBnYXBpOiBhbnk7XG5kZWNsYXJlIGxldCBJTjogYW55O1xuZGVjbGFyZSBsZXQgRkI6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvdmlkZXIge1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBhcGlWZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm92aWRlcnMge1xuICBbcHJvdmlkZXI6IHN0cmluZ106IElQcm92aWRlcjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgZ2F1dGg6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHtcbiAgfVxuXG4gIGxvZ2luKHByb3ZpZGVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShcbiAgICAgIChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcbiAgICAgICAgICBjYXNlICdnb29nbGUnOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5nYXV0aCkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2F1dGggPSBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYXV0aC5zaWduSW4oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHByb2ZpbGUgPSB0aGlzLmdhdXRoLmN1cnJlbnRVc2VyLmdldCgpLmdldEJhc2ljUHJvZmlsZSgpO1xuICAgICAgICAgICAgICBsZXQgaWRUb2tlbiA9IHRoaXMuZ2F1dGguY3VycmVudFVzZXIuZ2V0KCkuZ2V0QXV0aFJlc3BvbnNlKCkuaWRfdG9rZW47XG4gICAgICAgICAgICAgIGxldCB1c2VyRGV0YWlscyA9IHtcbiAgICAgICAgICAgICAgICB0b2tlbjogaWRUb2tlbixcbiAgICAgICAgICAgICAgICB1aWQ6IHByb2ZpbGUuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5nZXRFbWFpbCgpLFxuICAgICAgICAgICAgICAgIGltYWdlOiBwcm9maWxlLmdldEltYWdlVXJsKCksXG4gICAgICAgICAgICAgICAgcHJvdmlkZXI6ICdnb29nbGUnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ19sb2dpbl9wcm92aWRlcicsICdnb29nbGUnKTtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh1c2VyRGV0YWlscyk7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ZhY2Vib29rJzpcbiAgICAgICAgICAgIEZCLmxvZ2luKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWNjZXNzVG9rZW4gPSByZXMuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgICAgIGxldCBmaWVsZHMgPSBgaWQsIG5hbWUsIGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGFnZV9yYW5nZSwgbGluaywgZ2VuZGVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlLCBwaWN0dXJlLCB0aW1lem9uZSwgdXBkYXRlZF90aW1lLCB2ZXJpZmllZGA7XG4gICAgICAgICAgICAgICAgRkIuYXBpKGAvbWU/ZmllbGRzPSR7ZmllbGRzfWAsIChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHJlcy5lcnJvcik7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckRldGFpbHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICB1aWQ6IHJlcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogJ2ZhY2Vib29rJyxcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogcmVzLnBpY3R1cmUuZGF0YS51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgdG9rZW46IGFjY2Vzc1Rva2VuXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ19sb2dpbl9wcm92aWRlcicsICdmYWNlYm9vaycpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHVzZXJEZXRhaWxzKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge3Njb3BlOiBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ119KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xpbmtlZGluJzpcbiAgICAgICAgICAgIElOLlVzZXIuYXV0aG9yaXplKCgpID0+IHtcbiAgICAgICAgICAgICAgSU4uQVBJLlJhdygnL3Blb3BsZS9+OihpZCxmaXJzdC1uYW1lLGxhc3QtbmFtZSxlbWFpbC1hZGRyZXNzLHBpY3R1cmUtdXJsKScpLnJlc3VsdCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlckRldGFpbHMgPSB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiByZXMuZmlyc3ROYW1lICsgJyAnICsgcmVzLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgZW1haWw6IHJlcy5lbWFpbEFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICB1aWQ6IHJlcy5pZCwgcHJvdmlkZXI6ICdsaW5rZWRJTicsXG4gICAgICAgICAgICAgICAgICBpbWFnZVVybDogcmVzLnBpY3R1cmVVcmxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXQoJ19sb2dpbl9wcm92aWRlcicsICdsaW5rZWRpbicpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodXNlckRldGFpbHMpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBsb2dvdXQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IHByb3ZpZGVyID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnX2xvZ2luX3Byb3ZpZGVyJyk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBzd2l0Y2ggKHByb3ZpZGVyKSB7XG4gICAgICAgIGNhc2UgJ2dvb2dsZSc6XG4gICAgICAgICAgbGV0IGdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dTaWdub3V0Jyk7XG4gICAgICAgICAgaWYgKHR5cGVvZiAoZ0VsZW1lbnQpICE9PSAndW5kZWZpbmVkJyAmJiBnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZ0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBkID0gZG9jdW1lbnQsIGdTaWdub3V0OiBhbnksXG4gICAgICAgICAgICByZWYgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgICBnU2lnbm91dCA9IGQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgZ1NpZ25vdXQuc3JjID0gJ2h0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9Mb2dvdXQnO1xuICAgICAgICAgIGdTaWdub3V0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgICBnU2lnbm91dC5pZCA9ICdnU2lnbm91dCc7XG4gICAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnJlbW92ZSgnX2xvZ2luX3Byb3ZpZGVyJyk7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIHJlZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnU2lnbm91dCwgcmVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmFjZWJvb2snOlxuICAgICAgICAgIEZCLmxvZ291dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCdfbG9naW5fcHJvdmlkZXInKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW5rZWRpbic6XG4gICAgICAgICAgSU4uVXNlci5sb2dvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnJlbW92ZSgnX2xvZ2luX3Byb3ZpZGVyJyk7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
